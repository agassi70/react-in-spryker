import { ORDERS_COLLECTION_REQUEST } from '../../constants/ActionTypes/Pages/Order';
import { IReduxState } from 'src/typings/app';
import { getReducerPartFulfilled, getReducerPartPending, getReducerPartRejected } from '../parts';
import { IOrderCollectionParsed, TOrderCollection } from '../../interfaces/order';


export interface IOrdersData extends IOrderCollectionParsed {

}

export interface IOrderHistoryState extends IReduxState {
  data: IOrdersData;
}

export const initialState: IOrderHistoryState = {
  data: {
    items: null,
  },
};

export const orderHistory = function(state: IOrderHistoryState = initialState, action: any): IOrderHistoryState {
  switch (action.type) {
    case `${ORDERS_COLLECTION_REQUEST}_PENDING`:
      return handlePending(state, action.payload);
    case `${ORDERS_COLLECTION_REQUEST}_FULFILLED`:
      return handleFulfilled(state, action.payload);
    case `${ORDERS_COLLECTION_REQUEST}_REJECTED`:
      return handleRejected(state, action.payload);
    default:
      return state;
  }
};

// handlers
const handleFulfilled = (orderHistoryState: IOrderHistoryState, payload: IOrderCollectionParsed | null) => {
  return {
    ...orderHistoryState,
    data: {
      ...orderHistoryState.data,
      ...payload,
    },
    ...getReducerPartFulfilled(),
  };
};

const handleRejected = (orderHistoryState: IOrderHistoryState, payload: any) => {
  return {
    ...orderHistoryState,
    data: {
      ...orderHistoryState.data,
    },
    ...getReducerPartRejected(payload.error),
  };
};

const handlePending = (orderHistoryState: IOrderHistoryState, payload: any) => {
  return {
    ...orderHistoryState,
    data: {
      ...orderHistoryState.data,
    },
    ...getReducerPartPending(),
  };
};

// selectors
export function getOrdersCollectionFromStore(state: any, props: any): TOrderCollection {
  return isOrderHistoryItems(state, props) ? state.orderHistory.data.items : null;
}

export function isOrderHistoryItems(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.orderHistory.data.items);
}

export function isOrderHistoryStateRejected(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.orderHistory.rejected && state.orderHistory.rejected === true);
}

export function isOrderHistoryLoading(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.orderHistory.pending && state.orderHistory.pending === true);
}

export function isOrderHistoryFulfilled(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.orderHistory.fulfilled && state.orderHistory.fulfilled === true);
}

export function isOrderHistoryInitiated(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.orderHistory.initiated && state.orderHistory.initiated === true);
}

function isStateExist(state: any, props: any): boolean {
  return Boolean(state.orderHistory);
}
