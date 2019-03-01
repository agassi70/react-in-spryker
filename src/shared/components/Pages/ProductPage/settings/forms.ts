import {FormEvent} from "react";
import {IProductQuantityParams, IProductWishListParams} from "./types";
import {IFormSettings} from "src/shared/components/UI/SprykerForm/types";
import {createQuantityVariants} from "src/shared/helpers/product/quantity";
import {InputLabelProductQuantity, InputLabelProductSelectWishList} from "src/shared/constants/forms/labels";
import {createWishListMenuVariants} from "src/shared/helpers/wishlist/list";
import {defaultItemValueDropdown} from "src/shared/interfaces/product/index";

export const getQuantityFormSettings = (params: IProductQuantityParams): IFormSettings => {
  const {
    inputValue,
    quantity,
    onChangeHandler,
    controlsGroupClassName,
  } = params;
  const formSettings: IFormSettings = {
    formName: 'quantityForm',
    controlsGroupClassName,
    onChangeHandler,
    onSubmitHandler: (event: FormEvent<HTMLFormElement>) => { console.info('Empty quantity Submit'); },
    fields: [
      [
        {
          type: 'select',
          inputName: "quantity",
          inputValue,
          spaceNumber: 4,
          isRequired: false,
          label: InputLabelProductQuantity,
          isError: false,
          menuItems: createQuantityVariants(quantity),
        }
      ],
    ]
  };
  return formSettings;
};

export const getWishListFormSettings = (params: IProductWishListParams): IFormSettings => {
  const {
    inputValue,
    wishLists,
    onChangeHandler,
  } = params;
  const formSettings: IFormSettings = {
    formName: 'quantityForm',
    onChangeHandler,
    onSubmitHandler: (event: FormEvent<HTMLFormElement>) => { console.info('Empty WishList Submit'); },
    fields: [
      [
        {
          type: 'select',
          inputName: "wishlists",
          inputValue,
          spaceNumber: 12,
          isRequired: false,
          label: null,
          isError: false,
          menuItems: createWishListMenuVariants(wishLists),
          menuItemFirst: {
            value: defaultItemValueDropdown,
            name: InputLabelProductSelectWishList,
            disabled: true,
          }
        }
      ],
    ]
  };
  return formSettings;
};
