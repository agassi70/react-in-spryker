import {ProductPageProps, ProductPageState} from "src/shared/components/Pages/ProductPage/types";
import {IProductPropFullData} from "src/shared/interfaces/product/index";
import {ChangeEvent} from "react";

export interface IBaseProductsFormHandler {
  onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => void;
}

// Param to create quantity form
export interface IProductQuantityParams extends IBaseProductsFormHandler {
  inputValue: ProductPageState["quantitySelected"];
  quantity: IProductPropFullData["quantity"];
  controlsGroupClassName?: string;
}

// Param to create wish list form
export interface IProductWishListParams extends IBaseProductsFormHandler {
  inputValue: ProductPageState["wishListSelected"];
  wishLists: ProductPageProps["wishLists"];
  controlsGroupClassName?: string;
}
