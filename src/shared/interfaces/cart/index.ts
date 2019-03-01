import { TAppCurrency } from 'src/shared/reducers/Common/Init';
import { IAbstractTotals } from '../abstract/totals';
import {
  TProductQuantity,
  TProductSKU,
  TProductImageSRC,
  TProductAvailability,
  IProductPricesItem,
  TPriceTypeOriginalGross,
  TPriceTypeOriginalNet,
  TPriceTypeDefaultGross,
  TPriceTypeDefaultNet
} from '../product';
import {TProductName, TProductPrice} from "src/shared/interfaces/product";

export type TCartId = string;
export type TCartPriceMode = string;
export type TCartStore = string;
export type TCartDisplayName = string;
export type TCartAmount = number;
export type TCartCode = string;
export type TCartAddItemCollection = Array<ICartAddItem> | null;

export interface ICartDiscounts {
  displayName: TCartDisplayName;
  amount: TCartAmount;
  code: TCartCode;
}

export interface ICartAddItem {
  sku: TProductSKU;
  quantity: TProductQuantity;
}

export interface ICartTotals extends IAbstractTotals {

}

export interface ICartItem {
  sku: TProductSKU | null;
  name: TProductName | null;
  image: TProductImageSRC | null;
  quantity: TProductQuantity | null;
  amount: TProductPrice | null;
  prices: Array<IProductPricesItem>;
  calculations: ICartItemCalculation | null;
  groupKey: string | null;
  availability: TProductAvailability | null;
  availableQuantity: TProductQuantity | null;
  superAttributes: Array<{ [key: string]: string }> | null;
  priceOriginalGross: TPriceTypeOriginalGross;
  priceOriginalNet: TPriceTypeOriginalNet;
  priceDefaultGross: TPriceTypeDefaultGross;
  priceDefaultNet: TPriceTypeDefaultNet;
}

export interface ICartDataResponse {
  id: TCartId;
  currency: TAppCurrency;
  discounts?: ICartDiscounts | any;
  priceMode: TCartPriceMode;
  store: TCartStore;
  totals: ICartTotals;
  items: Array<ICartItem>;
  totalQty?: number;
}

export interface ICartItemCalculation {
  sumDiscountAmountAggregation: number;
  sumDiscountAmountFullAggregation: number;
  sumGrossPrice: number;
  sumNetPrice: number;
  sumPrice: number;
  sumPriceToPayAggregation: number;
  sumProductOptionPriceAggregation: number;
  sumSubtotalAggregation: number;
  sumTaxAmountFullAggregation: number;
  taxRate: number;
  unitDiscountAmountAggregation: number;
  unitDiscountAmountFullAggregation: number;
  unitGrossPrice: number;
  unitNetPrice: number;
  unitPrice: number;
  unitPriceToPayAggregation: number;
  unitProductOptionPriceAggregation: number;
  unitSubtotalAggregation: number;
  unitTaxAmountFullAggregation: number;
}

interface ICartResponseItemAttributes {
  amount: number | null;
  calculations: ICartItemCalculation;
  groupKey: string;
  quantity: number;
  sku: string;
}

export interface ICartResponseItem {
  attributes: ICartResponseItemAttributes;
  id?: string;
  links?: object;
  relationships?: object;
  type?: string;
}
