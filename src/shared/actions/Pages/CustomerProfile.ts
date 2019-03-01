import {
  CUSTOMER_DATA_REQUEST,
  CUSTOMER_DATA_UPDATE,
  CUSTOMER_DELETE_ENTITY,
  CUSTOMER_PASSWORD_UPDATE,
  LOGIN_DATA_SET_TO_STORE,
} from '../../constants/ActionTypes/Pages/CustomerProfile';
import { CustomerProfileService } from '../../services/Pages/CustomerProfile';
import {
  ICustomerDataParsed,
  ICustomerProfileIdentity,
  ICustomerProfilePassword,
  ILoginDataToLocalStorage,
  TCustomerReference,
} from '../../interfaces/customer';

// Retrieve customer data.
export const getCustomerProfilePendingStateAction = () => ({
  type: CUSTOMER_DATA_REQUEST + '_PENDING',
});

export const getCustomerProfileRejectedStateAction = (message: string) => ({
  type: CUSTOMER_DATA_REQUEST + '_REJECTED',
  payload: {error: message},
});

export const getCustomerProfileFulfilledStateAction = (payload: ICustomerDataParsed) => ({
  type: CUSTOMER_DATA_REQUEST + '_FULFILLED',
  payload,
});

export const getCustomerProfileAction = function(customerReference: TCustomerReference) {
  return (dispatch: Function, getState: Function) => {
    CustomerProfileService.getProfileData(dispatch, customerReference);
  };
};

// Update customer data
export const updateCustomerProfilePendingStateAction = () => ({
  type: CUSTOMER_DATA_UPDATE + '_PENDING',
});

export const updateCustomerProfileRejectedStateAction = (message: string) => ({
  type: CUSTOMER_DATA_UPDATE + '_REJECTED',
  payload: {error: message},
});

export const updateCustomerProfileFulfilledStateAction = (payload: ICustomerDataParsed) => ({
  type: CUSTOMER_DATA_UPDATE + '_FULFILLED',
  payload,
});

export const updateCustomerProfileAction = function(
  customerReference: TCustomerReference,
  payload: ICustomerProfileIdentity
) {
  return (dispatch: Function, getState: Function) => {
    CustomerProfileService.updateProfileData(dispatch, customerReference, payload);
  };
};

// Save login data to LocalStorage
export const saveLoginDataToStoreAction = (payload: ILoginDataToLocalStorage) => ({
  type: LOGIN_DATA_SET_TO_STORE + '_FULFILLED',
  payload,
});

// Update customer password.
export const updateCustomerPasswordPendingStateAction = () => ({
  type: CUSTOMER_PASSWORD_UPDATE + '_PENDING',
});

export const updateCustomerPasswordRejectedStateAction = (message: string) => ({
  type: CUSTOMER_PASSWORD_UPDATE + '_REJECTED',
  payload: {error: message},
});

export const updateCustomerPasswordFulfilledStateAction = () => ({
  type: CUSTOMER_PASSWORD_UPDATE + '_FULFILLED',
});

export const updateCustomerPasswordAction = function(
  customerReference: TCustomerReference, payload: ICustomerProfilePassword
) {
  return (dispatch: Function, getState: Function) => {
    CustomerProfileService.updatePasswordData(dispatch, customerReference, payload);
  };
};

// Delete Customer Entity
export const deleteCustomerPendingStateAction = () => ({
  type: CUSTOMER_DELETE_ENTITY + '_PENDING',
});

export const deleteCustomerRejectedStateAction = (message: string) => ({
  type: CUSTOMER_DELETE_ENTITY + '_REJECTED',
  payload: {error: message},
});

export const deleteCustomerFulfilledStateAction = () => ({
  type: CUSTOMER_DELETE_ENTITY + '_FULFILLED',
});

export const deleteCustomerAction = function(customerReference: TCustomerReference) {
  return (dispatch: Function, getState: Function) => {
    CustomerProfileService.deleteCustomerEntity(dispatch, customerReference);
  };
};
