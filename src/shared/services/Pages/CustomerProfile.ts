import api, { setAuthToken } from '../api';
import { toast } from 'react-toastify';
import * as CustomerProfileActions from 'src/shared/actions/Pages/CustomerProfile';
import {
  ICustomerDataParsed,
  ICustomerProfileIdentity,
  ICustomerProfilePassword,
  TCustomerReference,
} from 'src/shared/interfaces/customer';
import { parseCustomerDataResponse } from 'src/shared/helpers/customer/customerDataResponse';
import { RefreshTokenService } from '../Common/RefreshToken';
import { CustomerProfileAuthenticateErrorText } from '../../constants/messages/errors';
import { ApiServiceAbstract } from '../apiAbstractions/ApiServiceAbstract';
import { logout } from 'src/shared/actions/Pages/Login';

interface IRequestBody {
  data: {
    type: string;
    id?: TCustomerReference;
    include?: string;
    attributes: ICustomerProfileIdentity | ICustomerProfilePassword;
  };
}

export class CustomerProfileService extends ApiServiceAbstract {
  private static getCustomersEndpoint = (customerReference: TCustomerReference) => (`/customers/${customerReference}`);

  // Retrieve customer data.
  public static async getProfileData(dispatch: Function, customerReference: TCustomerReference): Promise<void> {
    try {
      dispatch(CustomerProfileActions.getCustomerProfilePendingStateAction());
      let response: any;

      const token = await RefreshTokenService.getActualToken(dispatch);
      if (!token) {
        throw new Error(CustomerProfileAuthenticateErrorText);
      }
      setAuthToken(token);
      response = await api.get(
        this.getCustomersEndpoint(customerReference),
        {include: ''},
        {withCredentials: true},
      );

      if (response.ok) {
        const responseParsed: ICustomerDataParsed | null = parseCustomerDataResponse(response.data);
        dispatch(CustomerProfileActions.getCustomerProfileFulfilledStateAction(responseParsed));
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch(CustomerProfileActions.getCustomerProfileRejectedStateAction(errorMessage));
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch(CustomerProfileActions.getCustomerProfileRejectedStateAction(error.message));
      toast.error('Unexpected Error: ' + error.message);
    }
  }

  // Update customer data
  public static async updateProfileData(
    dispatch: Function,
    customerReference: TCustomerReference,
    payload: ICustomerProfileIdentity
  ): Promise<void> {
    try {
      dispatch(CustomerProfileActions.updateCustomerProfilePendingStateAction());
      let response: any;

      const body: IRequestBody = {
        data: {
          type: 'customers',
          id: customerReference,
          attributes: payload,
          include: '',
        },
      };

      const token = await RefreshTokenService.getActualToken(dispatch);
      if (!token) {
        throw new Error(CustomerProfileAuthenticateErrorText);
      }
      setAuthToken(token);
      response = await api.patch(
        this.getCustomersEndpoint(customerReference),
        body,
        {withCredentials: true},
      );

      if (response.ok) {
        const responseParsed: any = parseCustomerDataResponse(response.data);
        dispatch(CustomerProfileActions.updateCustomerProfileFulfilledStateAction(responseParsed));
        toast.success('Your Profile Data was successfully updated!');
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch(CustomerProfileActions.updateCustomerProfileRejectedStateAction(errorMessage));
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch(CustomerProfileActions.updateCustomerProfileRejectedStateAction(error.message));
      toast.error('Unexpected Error: ' + error);
    }
  }

  // Update customer password.
  public static async updatePasswordData(
    dispatch: Function,
    customerReference: TCustomerReference,
    payload: ICustomerProfilePassword
  ): Promise<void> {
    try {
      dispatch(CustomerProfileActions.updateCustomerPasswordPendingStateAction());

      let response: any;

      const body: IRequestBody = {
        data: {
          type: 'customer-password',
          attributes: payload,
        },
      };

      const token: string = await RefreshTokenService.getActualToken(dispatch);
      if (!token) {
        throw new Error(CustomerProfileAuthenticateErrorText);
      }
      setAuthToken(token);
      response = await api.patch(`customer-password`, body, {withCredentials: true});

      if (response.ok) {
        const responseParsed: any = response.data;
        dispatch(CustomerProfileActions.updateCustomerPasswordFulfilledStateAction());
        toast.success('Your Password was successfully updated!');
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch(CustomerProfileActions.updateCustomerPasswordRejectedStateAction(errorMessage));
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch(CustomerProfileActions.updateCustomerPasswordRejectedStateAction(error.message));
      toast.error('Unexpected Error: ' + error);
    }
  }

  // Delete Customer Profile - Anonymize customers.
  public static async deleteCustomerEntity(dispatch: Function, customerReference: TCustomerReference): Promise<void> {
    try {
      dispatch(CustomerProfileActions.deleteCustomerPendingStateAction());

      let response: any;

      const token = await RefreshTokenService.getActualToken(dispatch);
      if (!token) {
        throw new Error(CustomerProfileAuthenticateErrorText);
      }
      setAuthToken(token);
      response = await api.delete(`customers/${customerReference}`, null, {withCredentials: true});

      if (response.ok) {
        dispatch(logout());
        dispatch(CustomerProfileActions.deleteCustomerFulfilledStateAction());
        toast.success('Your account was deleted!');
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch(CustomerProfileActions.deleteCustomerRejectedStateAction(errorMessage));
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      console.error('deleteCustomerEntity error', error);
      dispatch(CustomerProfileActions.deleteCustomerRejectedStateAction(error.message));
      toast.error('Unexpected Error: ' + error);
    }
  }
}
