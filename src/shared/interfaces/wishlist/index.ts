import { IProductAttributes, IProductPricesItem } from '../product';

export type TWishListName = string;

export interface IWishlistItem {
  sku: string;
  name: string;
  image: string;
  attributes: Array<IProductAttributes>;
  prices: Array<IProductPricesItem>;
  availability: boolean;
}

export interface IWishlist {
  id: string;
  name: string;
  numberOfItems: number;
  createdAt: string;
  updatedAt: string;
}
