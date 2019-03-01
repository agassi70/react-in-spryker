import * as React from 'react';
import {
  InputLabelSelectSavedBillingAddress,
  InputLabelSelectSavedDeliveryAddress
} from "src/shared/constants/forms/labels";
import {IFormSettings} from "src/shared/components/UI/SprykerForm/types";
import {IAddressItemCollection} from "src/shared/interfaces/addresses";
import {salutationVariants} from "src/shared/constants/customer";
import {TSalutationVariant} from "src/shared/interfaces/customer";
import {
  IAddressesParams,
  IBillingAddressesParams,
  IDeliveryAddressesParams
} from "src/shared/components/Pages/CheckoutPage/types/formSettingsTypes";
import {getSalutationToShow} from "src/shared/helpers/customer/salutation";


export const getDeliverySavedAddressFormSettings = (formName: string,
                                                    params: IDeliveryAddressesParams): IFormSettings => {

  const {
    addressesCollection,
    submitHandler,
    inputChangeHandler,
    extraOptionsToSelection,
    currentValueInSelection,
  } = params;

  const formSettings: IFormSettings = {
    formName,
    onChangeHandler: inputChangeHandler,
    onSubmitHandler: submitHandler,
    fields: [
      [
        {
          type: 'radio',
          inputName: 'deliverySelection',
          inputValue: currentValueInSelection,
          spaceNumber: 12,
          isRequired: false,
          label: InputLabelSelectSavedDeliveryAddress,
          isError: false,
          radioItems: getRadioItems(addressesCollection, extraOptionsToSelection),
        }
      ]
    ],
  };

  return formSettings;
};

export const getBillingSavedAddressFormSettings = (formName: string,
                                                   params: IBillingAddressesParams): IFormSettings => {

  const {
    addressesCollection,
    submitHandler,
    inputChangeHandler,
    extraOptionsToSelection,
    currentValueInSelection,
  } = params;

  const formSettings: IFormSettings = {
    formName,
    onChangeHandler: inputChangeHandler,
    onSubmitHandler: submitHandler,
    fields: [
      [
        {
          type: 'radio',
          inputName: 'billingSelection',
          inputValue: currentValueInSelection,
          spaceNumber: 12,
          isRequired: false,
          label: InputLabelSelectSavedBillingAddress,
          isError: false,
          radioItems: getRadioItems(addressesCollection, extraOptionsToSelection),
        }
      ]
    ],
  };

  return formSettings;
};

const getRadioItems = (collection: IAddressesParams["addressesCollection"],
                       extraOptions: IAddressesParams["extraOptionsToSelection"]) => {
  let items = convertAddressesToRadioItems(collection);
  if (!items) {
    return null;
  }
  if(Array.isArray(extraOptions) && extraOptions.length > 0) {
    items = items.concat(extraOptions);
  }
  return items;
};

const convertAddressesToRadioItems = (collection: IAddressesParams["addressesCollection"]) => {

  return (isAddressesCollectionExist(collection)
          ? collection.map((item: IAddressItemCollection) => ({value: item.id, label: createRadioItemLabel(item)}))
          : null
  );
};

const isAddressesCollectionExist = (collection: IAddressesParams["addressesCollection"]) => {
  return Boolean(collection && Array.isArray(collection) && collection.length > 0);
};


const createRadioItemLabel = (address: IAddressItemCollection) => {
  let response: React.ReactNode = '';

  if (address.salutation) {
    response += getSalutationToShow(address.salutation);
  }
  if (address.firstName) {
    response += ` ${address.firstName}`;
  }
  if (address.lastName) {
    response += ` ${address.lastName}`;
  }
  if (address.address1) {
    response += `, ${address.address1}`;
  }
  if (address.address2) {
    response += ` ${address.address2}`;
  }
  if (address.city) {
    response += `, ${address.city}`;
  }
  if (address.zipCode) {
    response += `, ${address.zipCode}`;
  }
  if (address.country && address.country.name) {
    response += `, ${address.country.name}`;
  }

  return response;
};
