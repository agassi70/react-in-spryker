import {
  IBillingObjectConfigInputStable,
  IConfigInputStable,
  ICreditCardObjectConfigInputStable,
  IDeliveryObjectConfigInputStable,
  IInvoiceObjectConfigInputStable
} from "src/shared/components/Pages/CheckoutPage/types/inputsConfigTypes";
import {TFormInputValue} from "src/shared/components/UI/SprykerForm/types";
import {
  IBillingAddressState,
  ICheckoutCreditCardState,
  ICheckoutInvoiceState,
  IDeliveryAddressState
} from "src/shared/components/Pages/CheckoutPage/types";

export interface IParamInputValidity {
  value: TFormInputValue;
  fieldConfig: IConfigInputStable;
}

export interface IParamFormValidity {
  form: IDeliveryAddressState | IBillingAddressState | ICheckoutInvoiceState | ICheckoutCreditCardState;
  fieldsConfig: IDeliveryObjectConfigInputStable
    | IBillingObjectConfigInputStable
    | IInvoiceObjectConfigInputStable
    | ICreditCardObjectConfigInputStable;
}
