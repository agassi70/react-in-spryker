import {
  ICheckoutFormsProps,
} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/types";
import {
  InputLabelAddNewBillingAddress,
  InputLabelAddNewDeliveryAddress,
  InputLabelSameAsCurrentDelivery
} from "src/shared/constants/forms/labels";
import {
  ICheckoutAddressState,
  ICheckoutPageProps,
  ICheckoutStepsCompletionState
} from "src/shared/components/Pages/CheckoutPage/types";
import {IAddressItem, IAddressItemCollection} from "src/shared/interfaces/addresses";
import {IParamFormValidity, IParamInputValidity} from "src/shared/components/Pages/CheckoutPage/types/validityTypes";
import {
  TAddressType,
  TExtraOptionsToSelection
} from "src/shared/components/Pages/CheckoutPage/types/constantTypes";
import {checkoutSelectionInputs} from "src/shared/components/Pages/CheckoutPage/constants";
import {RegExpZipCode} from "src/shared/constants/forms/regexp";

export const addressDefault: IAddressItem = {
  firstName: '',
  lastName: '',
  salutation: '',
  address1: '',
  address2: '',
  address3: '',
  zipCode: '',
  city: '',
  country: '',
  company: '',
  phone: '',
};

export const getExtraOptionsToSelection = (isAddressesCollectionExist: boolean,
                                           addressType: TAddressType): TExtraOptionsToSelection | null => {
  let response: TExtraOptionsToSelection = [];
  if (!isAddressesCollectionExist) {
    return null;
  }

  if (addressType === 'delivery') {
    response.push({value: checkoutSelectionInputs.isAddNewDeliveryValue, label: InputLabelAddNewDeliveryAddress});
  } else if (addressType === 'billing') {
    response.push(
      {value: checkoutSelectionInputs.isAddNewBillingValue, label: InputLabelAddNewBillingAddress},
      {value: checkoutSelectionInputs.isSameAsDeliveryValue, label: InputLabelSameAsCurrentDelivery}
    );
  }

  return response;
};

export const getDefaultAddressId = (collection: ICheckoutPageProps["addressesCollection"],
                                    addressType: TAddressType) => {
  if (!collection || !collection.length) {
    return null;
  }
  const variantData = collection
    .filter((item: IAddressItemCollection) => {
      if (addressType === 'delivery') {
        return item.isDefaultShipping === true;
      } else if (addressType === 'billing') {
        return item.isDefaultBilling === true;
      } else {
        return false;
      }
    });
  return ((variantData && variantData[0]) ? variantData[0].id : null);
};

export const checkFormInputValidity = (param: IParamInputValidity): boolean => {
  const {value, fieldConfig} = param;
  if (!value && fieldConfig.isRequired) {
    return false;
  }
  if (fieldConfig.inputName === 'zipCode' && typeof value === 'string') {
    const regExp = new RegExp(RegExpZipCode);
    const result = regExp.test(value);
    return result;
  }
  return true;
};

export const checkFormValidity = (param: IParamFormValidity): boolean => {
  const {form, fieldsConfig} = param;
  let result: boolean = true;

  for (const field in form) {
    const { value } = form[field];
    const cleanValue = typeof value === 'string' ? value.trim() : value;

    if (form[field].isError || (fieldsConfig[field].isRequired && !cleanValue)) {
      result = false;
    }
  }

  return result;
};

export const getCheckoutPanelsSettings = (params: ICheckoutStepsCompletionState): ICheckoutFormsProps["panels"] => {

  const {
    first,
    second,
    third,
    fourth,
  } = params;

  const isFirstPanelDisabled = false;
  const isSecondPanelDisabled = !first;
  const isThirdPanelDisabled = !first || !second;
  const isFourthPanelDisabled = !first || !second || !third;

  const response = {
    first: {
      title: "Delivery Address",
      isDisabled: isFirstPanelDisabled,
    },
    second: {
      title: "Billing Address",
      isDisabled: isSecondPanelDisabled,
    },
    third: {
      title: "Shipment",
      isDisabled: isThirdPanelDisabled,
    },
    fourth: {
      title: "Payment",
      isDisabled: isFourthPanelDisabled,
    },
  };

  return response;
};

export const getAddressForm = (address: ICheckoutAddressState): IAddressItem => {
  let payloadAddress: IAddressItem = addressDefault;

  Object.keys(address).map((field: string) => {
    const { value } = address[field];
    payloadAddress = {...payloadAddress, [field]: typeof value === 'string' ? value.trim() : value};
  });

  payloadAddress = {...payloadAddress, iso2Code: payloadAddress.country};
  delete payloadAddress.country;

  return payloadAddress;
};
