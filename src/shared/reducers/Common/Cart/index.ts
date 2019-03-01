import {
  CART_ADD_ITEM,
  CART_CREATE,
  CART_DELETE_ITEM,
  CART_UPDATE_ITEM,
  GET_CARTS,
} from 'src/shared/constants/ActionTypes/Common/Cart';
import { PAGES_CUSTOMER_LOGOUT } from 'src/shared/constants/ActionTypes/Pages/Login';
import { ICartDataResponse, ICartItem } from 'src/shared/interfaces/cart';
import { getReducerPartFulfilled, getReducerPartPending, getReducerPartRejected } from '../../parts';
import { ICartState } from './types';

export const initialState: ICartState = {
  data: {
    cartCreated: false,
    currency: null,
    items: [],
    id: null,
    priceMode: null,
    store: null,
    discounts: null,
    totals: null,
    totalQty: 0,
  },
};

export const cart = function(state: ICartState = initialState, action: any): ICartState {
  switch (action.type) {
    case `${CART_ADD_ITEM}_PENDING`:
    case `${CART_UPDATE_ITEM}_PENDING`:
    case `${CART_CREATE}_PENDING`:
    case `${GET_CARTS}_PENDING`:
      return handlePending(state, action.payload);
    case `${CART_ADD_ITEM}_FULFILLED`:
    case `${CART_UPDATE_ITEM}_FULFILLED`:
      return handleFulfilled(state, action.payload);
    case `${CART_ADD_ITEM}_REJECTED`:
    case `${CART_DELETE_ITEM}_REJECTED`:
    case `${CART_UPDATE_ITEM}_REJECTED`:
    case `${GET_CARTS}_REJECTED`:
      return handleRejected(state, action.payload);
    case `${CART_CREATE}_FULFILLED`:
    case `${GET_CARTS}_FULFILLED`:
      if (!action.payload) {
        return {
          ...state,
          data: {...initialState.data, cartCreated: true},
          ...getReducerPartFulfilled(),
        };
      }
      return handleCartFulfilled(state, action.payload);
    case `${CART_CREATE}_REJECTED`:
      return handleCartCreateRejected(state, action.payload);
    case `${CART_DELETE_ITEM}_PENDING`:
      return {
        ...state,
        ...getReducerPartPending(),
      };
    case `${CART_DELETE_ITEM}_REJECTED`:
      return {
        ...state,
        ...getReducerPartRejected(action.error),
      };
    case `${CART_DELETE_ITEM}_FULFILLED`:
      const itemsAfterDelete: Array<ICartItem> = state.data.items.filter((
        item: ICartItem
      ) => item.sku !== action.itemId);
      return {
        ...state,
        data: {...state.data, items: itemsAfterDelete},
        ...getReducerPartFulfilled(),
      };
    case PAGES_CUSTOMER_LOGOUT:
      return {
        ...state,
        data: {...initialState.data, cartCreated: true},
        ...getReducerPartFulfilled(),
      };
    default:
      return state;
  }
};

// handlers
const handleFulfilled = (cartState: ICartState, payload: ICartDataResponse | null) => {
  return {
    ...cartState,
    data: {
      ...cartState.data,
      ...payload,
    },
    ...getReducerPartFulfilled(),
  };
};

const handleRejected = (cartState: ICartState, payload: any) => {
  return {
    ...cartState,
    data: {
      ...cartState.data,
    },
    ...getReducerPartRejected(payload.error),
  };
};

const handlePending = (cartState: ICartState, payload: any) => {
  return {
    ...cartState,
    data: {
      ...cartState.data,
    },
    ...getReducerPartPending(),
  };
};

const handleCartFulfilled = (cartState: ICartState, payload: ICartDataResponse) => {
  return {
    ...cartState,
    data: {
      ...cartState.data,
      cartCreated: true,
      ...payload,
    },
    ...getReducerPartFulfilled(),
  };
};

const handleCartCreateRejected = (cartState: ICartState, payload: any) => {
  return {
    ...cartState,
    data: {
      ...cartState.data,
      cartCreated: false,
    },
    ...getReducerPartRejected(payload.error),
  };
};
