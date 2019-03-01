import * as React from 'react';
import { reduxify } from 'src/shared/lib/redux-helper';
import {getAnonymId, getCounties, ICountries, isAppInitiated} from 'src/shared/reducers/Common/Init';
import {ICartTotals, ICartItem, TCartId} from "src/shared/interfaces/cart";
import {ICheckoutRequest, IPaymentMethod, IShipmentMethod} from "src/shared/interfaces/checkout";
import {getCustomerReference, isUserAuthenticated} from "src/shared/reducers/Pages/Login";
import {getCustomerProfile} from "src/shared/reducers/Pages/CustomerProfile";
import {isStateLoading} from "src/shared/reducers";
import {IAddressItemCollection} from "src/shared/interfaces/addresses";
import {getCheckoutDataAction, sendCheckoutDataAction} from "src/shared/actions/Pages/Checkout";
import {getCustomerCartsAction, getGuestCartAction} from "src/shared/actions/Common/Cart";
import {
  getAddressesCollectionFromCheckoutStore,
  getPaymentMethodsFromStore,
  getShipmentMethodsFromStore,
  getCreatedOrder,
  isPageCheckoutFulfilled,
  isPageCheckoutStateLoading,
  isPageCheckoutStateRejected,
} from "src/shared/reducers/Pages/Checkout";
import {getCustomerProfileAction} from "src/shared/actions/Pages/CustomerProfile";
import {TCustomerReference} from "src/shared/interfaces/customer";
import {getCartId, getCartTotals, getProductsFromCart} from "src/shared/reducers/Common/Cart/selectors";


const mapStateToProps = (state: any, ownProps: any) => {
  const isUserLoggedIn = isUserAuthenticated(state, ownProps);
  const anonymId = getAnonymId(state, ownProps);
  const isAppDataSet: boolean = isAppInitiated(state, ownProps);
  const isCheckoutLoading: boolean = isPageCheckoutStateLoading(state, ownProps);
  const isCheckoutRejected: boolean = isPageCheckoutStateRejected(state, ownProps);
  const isCheckoutFulfilled: boolean = isPageCheckoutFulfilled(state, ownProps);

  const {items}: {items: ICartItem[]} = getProductsFromCart(state, ownProps);
  const isProductsExists = Boolean(items && items.length);
  const totals: ICartTotals = getCartTotals(state, ownProps);

  const cartId: TCartId = getCartId(state, ownProps);

  // from ILoginState
  const customerReference = getCustomerReference(state, ownProps);
  const profile = getCustomerProfile(state, ownProps);

  // from global state
  const isAppStateLoading = isStateLoading(state, ownProps);
  // Countries from init state
  const countriesCollection: ICountries[] = getCounties(state, ownProps);
  // From pageCheckout state
  const shipmentMethods: Array<IShipmentMethod> | null = getShipmentMethodsFromStore(state, ownProps);
  const paymentMethods: Array<IPaymentMethod> | null = getPaymentMethodsFromStore(state, ownProps);
  const addressesCollection: IAddressItemCollection[] | null = getAddressesCollectionFromCheckoutStore(state, ownProps);
  const orderId: string = getCreatedOrder(state, ownProps);
  const isAddressesCollectionExist: boolean = addressesCollection && addressesCollection.length > 0;

  return ({
    isAppDataSet,
    isUserLoggedIn,
    isCheckoutLoading,
    isCheckoutRejected,
    isCheckoutFulfilled,
    products: items,
    isProductsExists,
    totals,
    cartId,
    customerReference,
    addressesCollection,
    isAddressesCollectionExist,
    isAppStateLoading,
    countriesCollection,
    shipmentMethods,
    paymentMethods,
    orderId,
    profile,
    anonymId,
  });
};

export const connect = reduxify(
  mapStateToProps,
  (dispatch: Function) => ({
    dispatch,
    getCheckoutData: (payload: ICheckoutRequest, anonymId: string): void => {
      dispatch(getCheckoutDataAction(payload, anonymId));
    },
    sendCheckoutData: (payload: ICheckoutRequest, anonymId: string): void => {
      dispatch(sendCheckoutDataAction(payload, anonymId));
    },
    getCustomerData: (customerReference: TCustomerReference): void => {
      dispatch(getCustomerProfileAction(customerReference));
    },
    updateCart: (): void => dispatch(getCustomerCartsAction()),
    updateGuestCart: (anonymId: string): void => {
      dispatch(getGuestCartAction(anonymId));
    },
  }),
);
