import * as React from 'react';
import {TCheckoutPageContext} from "./types/contextTypes";
import {
  billingNewAddressDefault,
  deliveryNewAddressDefault,
  paymentCreditCardDefault,
  paymentInvoiceDefault
} from "src/shared/components/Pages/CheckoutPage/constants/stateDefaults";
import {BlurEvent, FormEvent, InputChangeEvent} from "src/shared/interfaces/common/react";


export const CheckoutPageContext = React.createContext<TCheckoutPageContext>({
  submitHandler: (event: FormEvent) => {
    throw new Error('submitHandler() not implemented');
  },
  onBlurHandler: (formName: string) => (event: BlurEvent): void => {
    throw new Error('onBlurHandler() not implemented');
  },
  selectionsChangeHandler: (event: InputChangeEvent) => {
    throw new Error('selectionsChangeHandler() not implemented');
  },
  handleDeliveryInputs: (event: InputChangeEvent) => {
    throw new Error('handleDeliveryInputs() not implemented');
  },
  handleBillingInputs: (event: InputChangeEvent) => {
    throw new Error('handleBillingInputs() not implemented');
  },
  handleInvoiceInputs: (event: InputChangeEvent) => {
    throw new Error('handleInvoiceInputs() not implemented');
  },
  handleCreditCardInputs: (event: InputChangeEvent) => {
    throw new Error('handleCreditCardInputs() not implemented');
  },
  isBillingSameAsDelivery: false,
  deliveryNewAddress: {...deliveryNewAddressDefault},
  billingNewAddress: {...billingNewAddressDefault},
  addressesCollection: null,
  countriesCollection: null,
  deliverySelections: null,
  billingSelections: null,
  currentValueDeliverySelection: null,
  currentValueBillingSelection: null,
  isCheckoutFulfilled: false,
  extraOptionsDeliverySelection: null,
  extraOptionsBillingSelection: null,
  isUserLoggedIn: false,
  shipmentMethods: null,
  currentValueShipmentMethod: null,
  paymentMethods: null,
  currentValuePaymentMethod: null,
  paymentCreditCardDataInputs: {...paymentCreditCardDefault},
  paymentInvoiceDataInputs: {...paymentInvoiceDefault},
});
