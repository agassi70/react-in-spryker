import produce from 'immer';
import {
  ADD_ADDRESS,
  ADDRESSES_LIST,
  DELETE_ADDRESS,
  SET_CURRENT_ADDRESS,
  UPDATE_ADDRESS,
} from '../../constants/ActionTypes/Pages/Addresses';
import { IReduxState } from 'src/typings/app';
import { IAddressItem } from 'src/shared/interfaces/addresses';

export interface IAddressesState extends IReduxState {
  data: {
    addresses: IAddressItem[],
    currentAddress: IAddressItem | null,
  };
}

export const initialState: IAddressesState = {
  data: {
    addresses: [],
    currentAddress: null,
  },
};

export const pageAddresses = produce<IAddressesState>(
  (draft: IAddressesState, action: any) => {
    switch (action.type) {
      case `${ADDRESSES_LIST}_PENDING`:
      case `${ADD_ADDRESS}_PENDING`:
      case `${DELETE_ADDRESS}_PENDING`:
      case `${UPDATE_ADDRESS}_PENDING`:
        draft.error = false;
        draft.pending = true;
        draft.fulfilled = false;
        draft.rejected = false;
        draft.initiated = false;
        break;
      case `${ADDRESSES_LIST}_REJECTED`:
      case `${ADD_ADDRESS}_REJECTED`:
      case `${DELETE_ADDRESS}_REJECTED`:
      case `${UPDATE_ADDRESS}_REJECTED`:
        draft.error = action.error;
        draft.pending = false;
        draft.fulfilled = false;
        draft.rejected = true;
        draft.initiated = false;
        draft.data.currentAddress = null;
        break;
      case `${ADDRESSES_LIST}_FULFILLED`:
        draft.data.addresses = action.addresses;
        draft.data.currentAddress = null;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      case `${ADD_ADDRESS}_FULFILLED`: {
        const addresses: IAddressItem[] = [...draft.data.addresses, action.address];
        draft.data.addresses = addresses;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      }
      case `${DELETE_ADDRESS}_FULFILLED`: {
        const addresses: IAddressItem[] = draft.data.addresses.filter((
          address: IAddressItem
        ) => address.id !== action.addressId);
        draft.data.addresses = addresses;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      }
      case `${UPDATE_ADDRESS}_FULFILLED`: {
        const addresses: IAddressItem[] = draft.data.addresses.map((
          address: IAddressItem
        ) => address.id === action.addressId ? {...action.data, id: action.addressId} : address);
        draft.data.addresses = addresses;
        draft.data.currentAddress = null;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      }
      case SET_CURRENT_ADDRESS: {
        if (action.addressId) {
          const currentAddress: IAddressItem = draft.data.addresses.find((
            address: IAddressItem
          ) => address.id === action.addressId);
          draft.data.currentAddress = currentAddress || null;
        } else {
          draft.data.currentAddress = null;
        }
        break;
      }
      default:
        break;
    }
  },
  initialState,
);

export function isPageAddressesStateLoading(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.pageAddresses.pending);
}

export function isAddressesStateRejected(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.pageAddresses.rejected);
}

export function isAddressesInitiated(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.pageAddresses.initiated);
}

export function getCurrentAddress(state: any, props: any): IAddressItem | null {
  return (isStateExist(state, props) && state.pageAddresses.data.currentAddress)
    ? state.pageAddresses.data.currentAddress
    : null;
}

export function getAddressesCollection(state: any, props: any): IAddressItem[] {
  return isStateExist(state, props)
    ? state.pageAddresses.data.addresses
    : [];
}

export const checkAddressesCollectionExist = (state: any, props: any): boolean => {
  return Boolean(isStateExist(state, props)
    && state.pageAddresses.data.addresses
    && state.pageAddresses.data.addresses.length
  );
};

function isStateExist(state: any, props: any): boolean {
  return Boolean(state.pageAddresses.data);
}
