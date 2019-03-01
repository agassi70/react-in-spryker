import { bindActionCreators, Dispatch } from 'redux';
import { reduxify } from 'src/shared/lib/redux-helper';
import { getRouterHistoryPush, getRouterLocation } from 'src/shared/selectors/Common/router';
import {
  getCustomerProfile,
  isCustomerPasswordUpdated,
  isCustomerProfilePresent,
  isPageCustomerProfileFulfilled,
  isPageCustomerProfileLoading,
  isPageCustomerProfileRejected,
} from 'src/shared/reducers/Pages/CustomerProfile';
import { isAppInitiated } from 'src/shared/reducers/Common/Init';
import { getCustomerReference, isUserAuthenticated } from 'src/shared/reducers/Pages/Login';
import {
  ICustomerProfileIdentity,
  ICustomerProfilePassword,
  ILoginDataToLocalStorage,
  TCustomerReference,
} from 'src/shared/interfaces/customer';
import {
  deleteCustomerAction,
  getCustomerProfileAction,
  saveLoginDataToStoreAction,
  updateCustomerPasswordAction,
  updateCustomerProfileAction,
} from 'src/shared/actions/Pages/CustomerProfile';

const mapStateToProps = (state: any, ownProps: any) => {
  const location = getRouterLocation(state, ownProps);
  const isLoading = isPageCustomerProfileLoading(state, ownProps);
  const isRejected = isPageCustomerProfileRejected(state, ownProps);
  const isFulfilled = isPageCustomerProfileFulfilled(state, ownProps);
  const isCustomerDataExist = isCustomerProfilePresent(state, ownProps);
  const isAppDataSet = isAppInitiated(state, ownProps);
  const isUserLoggedIn = isUserAuthenticated(state, ownProps);
  const customerReference = getCustomerReference(state, ownProps);
  const customerData = getCustomerProfile(state, ownProps);
  const passwordUpdated = isCustomerPasswordUpdated(state, ownProps);
  const routerPush = getRouterHistoryPush(state, ownProps);

  return ({
    location,
    isLoading,
    isRejected,
    isFulfilled,
    isCustomerDataExist,
    isAppDataSet,
    isUserLoggedIn,
    customerReference,
    customerData,
    passwordUpdated,
    routerPush,
  });
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getCustomerData: (customerReference: TCustomerReference) => getCustomerProfileAction(customerReference),
      updateCustomerData: (
        customerReference: TCustomerReference, payload: ICustomerProfileIdentity
      ) => updateCustomerProfileAction(customerReference, payload),
      updateCustomerPassword: (
        customerReference: TCustomerReference, payload: ICustomerProfilePassword
      ) => updateCustomerPasswordAction(customerReference, payload),
      deleteCustomerEntity: (customerReference: TCustomerReference) => deleteCustomerAction(customerReference),
    },
    dispatch,
  );

export const connect = reduxify(mapStateToProps, mapDispatchToProps);
