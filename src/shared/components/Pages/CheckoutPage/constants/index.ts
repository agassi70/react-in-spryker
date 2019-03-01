import {
  ICheckoutFormsNames,
  ICheckoutPaymentMethodsNames,
  ICheckoutSelectionInputs
} from "src/shared/components/Pages/CheckoutPage/types/constantTypes";

export const checkoutSelectionInputs: ICheckoutSelectionInputs = {
  isAddNewDeliveryValue: 'isAddNewDeliveryValue',
  isAddNewBillingValue: 'isAddNewBillingValue',
  isSameAsDeliveryValue: 'sameAsDelivery',
};

export const checkoutFormsNames: ICheckoutFormsNames = {
  billing: 'billing',
  delivery: 'delivery',
  invoice: 'invoice',
  creditCard: 'creditCard',
  savedDelivery: 'savedDelivery',
  sameAsDeliveryForm: 'sameAsDeliveryForm',
  savedBilling: 'savedBilling',
  shipmentMethodBase: 'shipmentMethod-',
  paymentMethod: 'paymentMethod',
};

export const checkoutPaymentMethodsNames: ICheckoutPaymentMethodsNames = {
  invoice: 'invoice',
  creditCard: 'credit card',
};
