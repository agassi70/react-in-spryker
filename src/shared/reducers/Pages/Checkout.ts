import produce from 'immer';
import {
  CHECKOUT_DATA_INIT_REQUEST,
  SEND_CHECKOUT_DATA,
} from 'src/shared/constants/ActionTypes/Pages/Checkout';
import {
  IReduxState,
} from 'src/typings/app';
import {IAddressItem, IAddressItemCollection} from "src/shared/interfaces/addresses";
import {
  IPaymentMethod,
  IShipmentMethod,
} from 'src/shared/interfaces/checkout';
import {
  addressesCollectionFixture,
  shipmentMethodsFixture
} from "src/shared/reducers/fixtures/Checkout";

export interface ICheckoutState extends IReduxState {
  data: {
    payments: Array<IPaymentMethod>;
    shipments: Array<IShipmentMethod>;
    addressesCollection: Array<IAddressItemCollection>;
    orderId: string;
  };
}


export const initialState: ICheckoutState = {
  data: {
    payments: [],
    shipments: [],
    addressesCollection: [],
    orderId: '',
  },
};

export const pageCheckout = produce<ICheckoutState>(
  (draft: ICheckoutState, action: any) => {
    switch (action.type) {
      case `${CHECKOUT_DATA_INIT_REQUEST}_PENDING`:
      case `${SEND_CHECKOUT_DATA}_PENDING`:
        draft.data.orderId = '';
        draft.error = false;
        draft.pending = true;
        draft.fulfilled = false;
        draft.rejected = false;
        draft.initiated = false;
        break;
      case `${CHECKOUT_DATA_INIT_REQUEST}_REJECTED`:
      case `${SEND_CHECKOUT_DATA}_REJECTED`:
        draft.data.orderId = '';
        draft.error = action.error;
        draft.pending = false;
        draft.fulfilled = false;
        draft.rejected = true;
        draft.initiated = false;
        break;
      case `${CHECKOUT_DATA_INIT_REQUEST}_FULFILLED`:
        draft.data.payments = action.payload.payments || null;
        draft.data.shipments = action.payload.shipments || null;
        draft.data.addressesCollection = action.payload.addressesCollection || null;

        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      case `${SEND_CHECKOUT_DATA}_FULFILLED`: {
        draft.data.orderId = action.orderId;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      }
      default:
        break;
    }
  },
  initialState,
);

export function isPageCheckoutStateLoading(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.pageCheckout.pending);
}

export function isPageCheckoutStateRejected(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.pageCheckout.rejected);
}

export function isPageCheckoutFulfilled(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.pageCheckout.fulfilled);
}

export function getShipmentMethodsFromStore(state: any, props: any): Array<IShipmentMethod> | null {
  return isShipmentMethodsExist(state, props) ? state.pageCheckout.data.shipments : null;
}

export function isShipmentMethodsExist(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.pageCheckout.data.shipments);
}

export function getPaymentMethodsFromStore(state: any, props: any): Array<IPaymentMethod> | null {
  return isPaymentMethodsExist(state, props) ? state.pageCheckout.data.payments : null;
}

export function isPaymentMethodsExist(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.pageCheckout.data.payments);
}

export function getAddressesCollectionFromCheckoutStore(state: any, props: any): Array<IAddressItemCollection> | null {
  return checkAddressesCollectionExist(state, props) ? state.pageCheckout.data.addressesCollection : null;
}

export function checkAddressesCollectionExist(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props)
    && state.pageCheckout.data.addressesCollection
    && state.pageCheckout.data.addressesCollection.length
  );
}

export function getCreatedOrder(state: any, props: any): string {
  return isStateExist(state, props) ? state.pageCheckout.data.orderId : '';
}

function isStateExist(state: any, props: any): boolean {
  return Boolean(state.pageCheckout.data);
}
