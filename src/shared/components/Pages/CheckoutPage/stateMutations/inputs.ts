import {ICheckoutPageState} from "src/shared/components/Pages/CheckoutPage/types";

export const mutateDeliveryInputs = (prevState: ICheckoutPageState,
                                     key: string,
                                     value: string | boolean,
                                     isError: boolean): Pick<ICheckoutPageState, "deliveryNewAddress"> | null => {

  return ({
    deliveryNewAddress: {
      ...prevState.deliveryNewAddress,
      [key]: {value, isError},
    }
  });
};

export const mutateBillingInputs = (prevState: ICheckoutPageState,
                                    key: string,
                                    value: string | boolean,
                                    isError: boolean): Pick<ICheckoutPageState, "billingNewAddress"> | null => {


  return ({
    billingNewAddress: {
      ...prevState.billingNewAddress,
      [key]: {value, isError},
    }
  });
};

export const mutateInvoiceInputs = (prevState: ICheckoutPageState,
                                    key: string,
                                    value: string | boolean,
                                    isError: boolean): Pick<ICheckoutPageState, "paymentInvoiceData"> | null => {

  return ({
    paymentInvoiceData: {
      ...prevState.paymentInvoiceData,
      [key]: {value, isError},
    }
  });
};

export const mutateCreditCardInputs = (prevState: ICheckoutPageState,
                                       key: string,
                                       value: string | boolean,
                                       isError: boolean): Pick<ICheckoutPageState, "paymentCreditCardData"> | null => {

  return ({
    paymentCreditCardData: {
      ...prevState.paymentCreditCardData,
      [key]: {value, isError},
    }
  });
};
