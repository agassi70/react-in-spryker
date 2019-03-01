import { ORDER_DETAILS_REQUEST, ORDERS_COLLECTION_REQUEST } from '../../constants/ActionTypes/Pages/Order';
import { OrderService } from '../../services/Pages/Order';
import { IOrderCollectionParsed, IOrderDetailsParsed, TOrderId } from '../../interfaces/order';

/**
 *  Order History
 */

export const ordersCollectionPendingStateAction = () => ({
  type: ORDERS_COLLECTION_REQUEST + '_PENDING',
});

export const ordersCollectionRejectedStateAction = (message: string) => ({
  type: ORDERS_COLLECTION_REQUEST + '_REJECTED',
  payload: {error: message},
});

export const ordersCollectionFulfilledStateAction = (payload: IOrderCollectionParsed) => ({
  type: ORDERS_COLLECTION_REQUEST + '_FULFILLED',
  payload,
});

export const getOrdersCollectionAction = function() {
  return (dispatch: Function, getState: Function) => {
    OrderService.getOrdersCollection(dispatch);
  };
};

/**
 *  Order Detail
 */

export const orderDetailsPendingStateAction = () => ({
  type: ORDER_DETAILS_REQUEST + '_PENDING',
});

export const orderDetailsRejectedStateAction = (message: string) => ({
  type: ORDER_DETAILS_REQUEST + '_REJECTED',
  payload: {error: message},
});

export const orderDetailsFulfilledStateAction = (payload: IOrderDetailsParsed) => ({
  type: ORDER_DETAILS_REQUEST + '_FULFILLED',
  payload,
});

export const getOrderDetailsAction = function(orderId: TOrderId) {
  return (dispatch: Function, getState: Function) => {
    OrderService.getOrderDetails(dispatch, orderId);
  };
};
