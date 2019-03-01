import { toast } from 'react-toastify';
import api from '../api';
import { saveLoginDataToStoreAction } from 'src/shared/actions/Pages/CustomerProfile';
import { parseLoginDataResponse } from 'src/shared/helpers/customer';
import {
  loginCustomerFulfilledStateAction,
  loginCustomerPendingStateAction,
  loginCustomerRejectedStateAction,
} from 'src/shared/actions/Pages/Login';
import { ApiServiceAbstract } from '../apiAbstractions/ApiServiceAbstract';
import { ICustomerLoginData, ICustomerProfile } from 'src/shared/interfaces/customer';
import { saveAccessDataToLocalStorage, saveCustomerUsernameToLocalStorage } from 'src/shared/helpers/localStorage';
import { customerLogin, registerSuccess } from 'src/shared/constants/messages/customer';

export class PagesLoginService extends ApiServiceAbstract {
  public static async register(ACTION_TYPE: string, dispatch: Function, payload: ICustomerProfile): Promise<void> {
    try {
      const body = {
        data: {
          type: 'customers',
          attributes: payload,
        },
      };
      const response: any = await api.post('customers', body, {withCredentials: true});

      if (response.ok) {
        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
        });

        toast.success(registerSuccess);

        await PagesLoginService.loginRequest(dispatch, {
          username: payload.email,
          password: payload.password,
        });
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch({
          type: ACTION_TYPE + '_REJECTED',
          error: errorMessage,
        });

        if (response.status === 422) {
          toast.warn(errorMessage);
        } else {
          toast.error(errorMessage);
        }
      }

    } catch (error) {
      dispatch({
        type: ACTION_TYPE + '_REJECTED',
        error,
      });
      toast.error('Unexpected Error: ' + error.message);
    }
  }

  public static async loginRequest(dispatch: Function, payload: ICustomerLoginData): Promise<void> {
    try {
      dispatch(loginCustomerPendingStateAction());

      let response: any;

      const body = {
        data: {
          type: 'access-tokens',
          attributes: payload,
        },
      };

      response = await api.post('access-tokens', body, {withCredentials: true});

      if (response.ok) {
        const responseParsed = parseLoginDataResponse(response.data);
        dispatch(saveLoginDataToStoreAction({email: payload.username}));
        saveAccessDataToLocalStorage(responseParsed);
        dispatch(loginCustomerFulfilledStateAction(responseParsed));
        toast.success(customerLogin);
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch(loginCustomerRejectedStateAction(errorMessage));
        toast.error(errorMessage);
      }

    } catch (error) {
      dispatch(loginCustomerRejectedStateAction(error.message));
      toast.error('Unexpected Error: ' + error);
    }
  }

  public static async forgotPassword(ACTION_TYPE: string, dispatch: Function, email: string): Promise<void> {
    try {
      const body = {
        data: {
          type: 'customer-forgotten-password',
          attributes: {email},
        },
      };

      const response: any = await api.post('customer-forgotten-password', body, {withCredentials: true});

      if (response.ok) {
        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
        });
        toast.success('Link for restore password sended to your Email.');
      } else {
        dispatch({
          type: ACTION_TYPE + '_REJECTED',
          error: response.problem,
        });
        toast.error(response.problem);
      }

    } catch (error) {
      dispatch({
        type: ACTION_TYPE + '_REJECTED',
        error,
      });
      toast.error('Unexpected Error: ' + error.message);
    }
  }

  public static async resetPassword(ACTION_TYPE: string, dispatch: Function, payload: any): Promise<void> {
    try {
      const body = {
        data: {
          type: 'customer-restore-password',
          attributes: payload,
        },
      };

      const response: any = await api.patch('customer-restore-password', body, {withCredentials: true});

      if (response.ok) {
        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
        });
        toast.success('Password updated successfull.');
      } else {
        dispatch({
          type: ACTION_TYPE + '_REJECTED',
          error: response.problem,
        });
        toast.error('Request Error: ' + response.problem);
      }

    } catch (error) {
      dispatch({
        type: ACTION_TYPE + '_REJECTED',
        error,
      });
      toast.error('Unexpected Error: ' + error.message);
    }
  }
}
