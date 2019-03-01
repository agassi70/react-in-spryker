import {ICheckoutPageState} from "src/shared/components/Pages/CheckoutPage/types";


export const mutateDeliveryNewAddressValidity = (prevState: ICheckoutPageState, isFormValid: boolean):
                                                    Pick<ICheckoutPageState, "stepsCompletion"> | null => {
  return ({
    stepsCompletion: {
      ...prevState.stepsCompletion,
      first: isFormValid,
    }
  });
};

export const mutateBillingNewAddressValidity = (prevState: ICheckoutPageState, isFormValid: boolean):
                                                  Pick<ICheckoutPageState, "stepsCompletion"> | null => {
  return ({
    stepsCompletion: {
      ...prevState.stepsCompletion,
      second: isFormValid,
    }
  });
};

export const mutateInvoiceValidity = (prevState: ICheckoutPageState, isFormValid: boolean):
                                        Pick<ICheckoutPageState, "stepsCompletion"> | null => {
  return ({
    stepsCompletion: {
      ...prevState.stepsCompletion,
      fourth: isFormValid,
    }
  });
};

export const mutateCreditCardValidity = (prevState: ICheckoutPageState, isFormValid: boolean):
                                            Pick<ICheckoutPageState, "stepsCompletion"> | null => {
  return ({
    stepsCompletion: {
      ...prevState.stepsCompletion,
      fourth: isFormValid,
    }
  });
};
