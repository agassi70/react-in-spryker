import {
  CART_ADD_ITEM,
  CART_CREATE,
  CART_DELETE_ITEM,
  CART_UPDATE_ITEM,
  GET_CARTS,
} from '../../constants/ActionTypes/Common/Cart';
import { CartService } from '../../services/Common/Cart';
import { GuestCartService } from '../../services/Common/Cart/guestCart';
import { ICartCreatePayload } from '../../services/Common/Cart/types';
import { ICartAddItem, ICartDataResponse, TCartAddItemCollection, TCartId } from '../../interfaces/cart';
import { TProductSKU } from '../../interfaces/product';


export const addItemToCartAction = function(payload: ICartAddItem, cartId: TCartId) {
  return (dispatch: Function, getState: Function) => {
    return CartService.cartAddItem(dispatch, payload, cartId);
  };
};

export const getCartsPendingStateAction = () => ({
  type: GET_CARTS + '_PENDING',
});

export const getCartsFulfilledStateAction = (payload: ICartDataResponse | null) => ({
  type: GET_CARTS + '_FULFILLED',
  payload,
});

export const getCartsRejectedStateAction = (message: string) => ({
  type: GET_CARTS + '_REJECTED',
  payload: {error: message},
});

export const cartAddItemPendingStateAction = () => ({
  type: CART_ADD_ITEM + '_PENDING',
});

export const cartDeleteItemPendingStateAction = {
  type: CART_DELETE_ITEM + '_PENDING',
};

export const cartDeleteItemRejectedStateAction = {
  type: CART_DELETE_ITEM + '_REJECTED',
};

export const cartAddItemFulfilledStateAction = (payload: ICartDataResponse) => ({
  type: CART_ADD_ITEM + '_FULFILLED',
  payload,
});

export const cartAddItemRejectedStateAction = (message: string) => ({
  type: CART_ADD_ITEM + '_REJECTED',
  payload: {error: message},
});

export const cartCreatePendingStateAction = () => ({
  type: CART_CREATE + '_PENDING',
});

export const cartCreateRejectedStateAction = (message: string) => ({
  type: CART_CREATE + '_REJECTED',
  payload: {error: message},
});

export const cartCreateFulfilledStateAction = (payload: ICartDataResponse) => ({
  type: CART_CREATE + '_FULFILLED',
  payload,
});

export const cartCreateAction = function(payload: ICartCreatePayload) {
  return (dispatch: Function, getState: Function) => {
    CartService.cartCreate(dispatch, payload);
  };
};

export const cartDeleteItemAction = function(cartId: TCartId, itemId: TProductSKU) {
  return (dispatch: Function, getState: Function) => {
    CartService.cartDeleteItem(CART_DELETE_ITEM, dispatch, cartId, itemId);
    dispatch(cartDeleteItemPendingStateAction);
  };
};

export const cartUpdateItemPendingStateAction = () => ({
  type: CART_UPDATE_ITEM + '_PENDING',
});

export const cartUpdateItemRejectedStateAction = (message: string) => ({
  type: CART_UPDATE_ITEM + '_REJECTED',
  payload: {error: message},
});

export const cartUpdateItemFulfilledStateAction = (payload: ICartDataResponse) => ({
  type: CART_UPDATE_ITEM + '_FULFILLED',
  payload,
});

export const updateItemInCartAction = function(payload: ICartAddItem, cartId: TCartId) {
  return (dispatch: Function, getState: Function) => {
    CartService.cartUpdateItem(dispatch, payload, cartId);
  };
};

export const multiItemsCartAction = function(cartId: TCartId, listItems: string[]) {
  return (dispatch: Function, getState: Function) => {
    CartService.moveItemsToCart(dispatch, cartId, listItems);
  };
};

export const addMultipleItemsToCartAction = function(
  payload: TCartAddItemCollection,
  cartId: TCartId,
  payloadCartCreate: ICartCreatePayload,
) {
  return (dispatch: Function, getState: Function) => {
    CartService.cartMultipleItems(dispatch, payload, cartId, payloadCartCreate);
  };
};

export const getCustomerCartsAction = function() {
  return (dispatch: Function, getState: Function) => {
    dispatch(getCartsPendingStateAction());
    CartService.getCustomerCarts(dispatch);
  };
};

export const createCartAndAddItemAction = function(payloadCartCreate: ICartCreatePayload, item: ICartAddItem) {
  return (dispatch: Function, getState: Function) => {
    CartService.createCartAndAddItem(dispatch, payloadCartCreate, item);
  };
};


export const getGuestCartAction = function(anonymId: string) {
  return (dispatch: Function, getState: Function) => {
    GuestCartService.getGuestCart(dispatch, anonymId);
  };
};

export const addItemGuestCartAction = function(payload: ICartAddItem, anonymId: string) {
  return (dispatch: Function, getState: Function) => {
    GuestCartService.guestCartAddItem(dispatch, payload, anonymId);
  };
};

export const removeItemGuestCartAction = function(cartUid: string, sku: string, anonymId: string) {
  return (dispatch: Function, getState: Function) => {
    GuestCartService.guestCartRemoveItem(dispatch, cartUid, sku, anonymId);
  };
};

export const updateGuestCartAction = function(payload: ICartAddItem, cartId: TCartId, anonymId: string) {
  return (dispatch: Function, getState: Function) => {
    GuestCartService.guestCartUpdate(dispatch, payload, cartId, anonymId);
  };
};
