import {ICheckoutPageState} from "src/shared/components/Pages/CheckoutPage/types";
import {checkoutPaymentMethodsNames} from "src/shared/components/Pages/CheckoutPage/constants";


export const mutateDeliverySelectionAddNew = (prevState: ICheckoutPageState):
  Pick<ICheckoutPageState, "deliverySelection" | "stepsCompletion"> | null => {

  return ({
    deliverySelection: {
      selectedAddressId: null,
      isAddNew: true,
    },
    stepsCompletion: {
      ...prevState.stepsCompletion,
      first: false,
    },
  });
};

export const mutateDeliverySelectionAddressId = (prevState: ICheckoutPageState, value: string):
  Pick<ICheckoutPageState, "deliverySelection" | "stepsCompletion"> | null => {

  return ({
    deliverySelection: {
      selectedAddressId: value,
      isAddNew: false,
    },
    stepsCompletion: {
      ...prevState.stepsCompletion,
      first: true,
    },
  });
};

export const mutateBillingSelectionAddNew = (prevState: ICheckoutPageState):
  Pick<ICheckoutPageState, "billingSelection" | "stepsCompletion"> | null => {

  return ({
    billingSelection: {
      selectedAddressId: null,
      isAddNew: true,
      isSameAsDelivery: false,
    },
    stepsCompletion: {
      ...prevState.stepsCompletion,
      second: false,
    },
  });
};

export const mutateBillingSelectionSameAsDelivery = (prevState: ICheckoutPageState):
  Pick<ICheckoutPageState, "billingSelection" | "stepsCompletion"> | null => {

  const newSameValue = !prevState.billingSelection.isSameAsDelivery;
  return ({
    billingSelection: {
      selectedAddressId: null,
      isAddNew: !newSameValue,
      isSameAsDelivery: newSameValue,
    },
    stepsCompletion: {
      ...prevState.stepsCompletion,
      second: newSameValue,
    },
  });
};

export const mutateBillingSelectionAddressId = (prevState: ICheckoutPageState, value: string):
  Pick<ICheckoutPageState, "billingSelection" | "stepsCompletion"> | null => {

  return ({
    billingSelection: {
      selectedAddressId: value,
      isAddNew: false,
      isSameAsDelivery: false,
    },
    stepsCompletion: {
      ...prevState.stepsCompletion,
      second: true,
    },
  });
};

export const mutateShipmentMethod = (prevState: ICheckoutPageState, value: string):
  Pick<ICheckoutPageState, "shipmentMethod" | "stepsCompletion"> | null => {

  return ({
    shipmentMethod: value,
    stepsCompletion: {
      ...prevState.stepsCompletion,
      third: true,
    },
  });
};

export const mutatePaymentMethod = (prevState: ICheckoutPageState,
                                    value: string,
                                    isInvoiceFormValid: boolean,
                                    isCreditCardFormValid: boolean):
  Pick<ICheckoutPageState, "paymentMethod" | "stepsCompletion"> | null => {

  let isFourthStepCompleted: boolean = false;
  if (value === checkoutPaymentMethodsNames.invoice && isInvoiceFormValid) {
    isFourthStepCompleted = true;
  } else if (value === checkoutPaymentMethodsNames.creditCard && isCreditCardFormValid) {
    isFourthStepCompleted = true;
  }

  return ({
    paymentMethod: value,
    stepsCompletion: {
      ...prevState.stepsCompletion,
      fourth: isFourthStepCompleted,
    },
  });
};
