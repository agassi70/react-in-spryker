import { TAppCurrency } from '../../reducers/Common/Init';
import { TProductName, TProductPrice, TProductQuantity, TProductSKU } from '../product';
import { IAbstractTotals, TCanceledTotal } from '../abstract/totals';
import {TCartPriceMode} from "src/shared/interfaces/cart/index";
import {IAddressItemOrder} from "src/shared/interfaces/addresses/index";

type TOrderCreatedAt = string;
export type TOrderDate = string;
export type TOrderId = string;
export type TOrderCollection = Array<IOrderItem> | null;
export type TOrderExpenseName = string;
export type TOrderProducts = Array<IOrderDetailsItem> | null;
export type TOrderExpenses = Array<IOrderDetailsExpenseItem> | null;

/**
 *  Order History
 */

export interface IOrderTotals extends IAbstractTotals {
  canceledTotal: TCanceledTotal;
}

export interface IOrderCollectionParsed {
  items: TOrderCollection;
}

export interface IOrderCollectionResponse {
  data: Array<IOrderItemResponse>;
}

export interface IOrderItem {
  id: TOrderId;
  dateCreated: TOrderDate;
  currency: TAppCurrency;
  totals: IOrderTotals;
}

export interface IOrderItemResponse {
  attributes: {
    createdAt: TOrderCreatedAt;
    currencyIsoCode: TAppCurrency;
    totals: IOrderTotals;
  };
  id: TOrderId;
}

/**
 *  Order Detail
 */

export interface IOrderDetailsResponse {
  attributes: {
    createdAt: TOrderCreatedAt,
    currencyIsoCode: TAppCurrency;
    expenses: TOrderExpenses;
    items: Array<IOrderDetailsItem>;
    totals: IOrderTotals;
    billingAddress: IAddressItemOrder;
    shippingAddress: IAddressItemOrder;
    priceMode: TCartPriceMode;
  };
  id: TOrderId;
}

export interface IOrderDetailsParsed extends IOrderItem {
  expenses: TOrderExpenses;
  items: TOrderProducts;
  billingAddress: IAddressItemOrder;
  shippingAddress: IAddressItemOrder;
  priceMode: TCartPriceMode;
}

export interface IOrderDetailsExpenseItem {
  name: TOrderExpenseName;
  sumPrice: TProductPrice;
}

export interface IOrderDetailsItem {
  name: TProductName;
  quantity: TProductQuantity;
  sku: TProductSKU;
  sumPrice: TProductPrice;
  sumPriceToPayAggregation: TProductPrice;
}

export type IOrderDetailsSelectedItems = {
  [sku: string]: boolean
};
