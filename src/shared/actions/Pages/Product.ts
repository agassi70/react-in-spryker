import {PAGES_PRODUCT_REQUEST, PRODUCT_AVAILABILITY_REQUEST} from '../../constants/ActionTypes/Pages/Product';
import { ProductService } from '../../services/Pages/Product';
import {IConcreteProductAvailability, IProductDataParsed, TProductSKU} from '../../interfaces/product';

export const getProductDataItemPendingStateAction = () => ({
  type: PAGES_PRODUCT_REQUEST + '_PENDING',
});

export const getProductDataRejectedStateAction = (message: string) => ({
  type: PAGES_PRODUCT_REQUEST + '_REJECTED',
  payload: {error: message},
});

export const getProductDataFulfilledStateAction = (payload: IProductDataParsed) => ({
  type: PAGES_PRODUCT_REQUEST + '_FULFILLED',
  payload,
});

export const getProductDataAction = function(sku: string) {
  return (dispatch: Function, getState: Function) => {
    ProductService.getAbstractData(dispatch, sku);
  };
};

// Product availability

export const getProductAvailabilityPendingStateAction = () => ({
  type: PRODUCT_AVAILABILITY_REQUEST + '_PENDING',
});

export const getProductAvailabilityRejectedStateAction = (message: string) => ({
  type: PRODUCT_AVAILABILITY_REQUEST + '_REJECTED',
  payload: {error: message},
});

export const getProductAvailabilityFulfilledStateAction = (payload: IConcreteProductAvailability) => ({
  type: PRODUCT_AVAILABILITY_REQUEST + '_FULFILLED',
  payload,
});

export const getProductAvailabilityAction = function(sku: TProductSKU) {
  return (dispatch: Function, getState: Function) => {
    return ProductService.getConcreteProductAvailability(dispatch, sku);
  };
};
