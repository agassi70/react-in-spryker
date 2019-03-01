import * as React from 'react';

import {IPaymentMethodsParams} from "../../types/formSettingsTypes";
import {IFormSettings} from "src/shared/components/UI/SprykerForm/types";
import {IPaymentMethodGroupItem} from "src/shared/components/Pages/CheckoutPage/types/constantTypes";


export const getPaymentMethodsFormSettings = (formName: string, params: IPaymentMethodsParams): IFormSettings => {
  const {
    paymentMethodGroupItems,
    currentValuePaymentMethod,
    submitHandler,
    inputChangeHandler,
  } = params;

  const formSettings: IFormSettings = {
    formName,
    onChangeHandler: inputChangeHandler,
    onSubmitHandler: submitHandler,
    fields: [
      [
        {
          type: 'radio',
          inputName: 'paymentMethodSelection',
          inputValue: currentValuePaymentMethod,
          spaceNumber: 12,
          isItemsInRow: true,
          isRequired: true,
          label: null,
          isError: false,
          radioItems: getRadioItems(paymentMethodGroupItems),
        }
      ],
    ],
  };
  return formSettings;
};

const getRadioItems = (collection: IPaymentMethodsParams["paymentMethodGroupItems"]) => {
  let items = convertPaymentsToRadioItems(collection);
  if (!items) {
    return null;
  }
  return items;
};

const isPaymentMethodsExist = (collection: IPaymentMethodsParams["paymentMethodGroupItems"]) => {
  return Boolean(collection && Array.isArray(collection) && collection.length > 0);
};

const convertPaymentsToRadioItems = (collection: IPaymentMethodsParams["paymentMethodGroupItems"]) => {

  return (isPaymentMethodsExist(collection)
      ? collection.map((item: IPaymentMethodGroupItem) => ({
          value: item.value,
          label: createRadioItemLabel(item)
      }))
      : null
  );
};

const createRadioItemLabel = (paymentMethod: IPaymentMethodGroupItem) => {
  let response: Array<React.ReactNode> = [];
  if (paymentMethod.label) {
    response.push(paymentMethod.label);
  }
  return response;
};
