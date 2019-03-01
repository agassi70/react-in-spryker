import * as React from 'react';
import {
  IBillingAddressState,
  IBillingSelectionState,
  ICheckoutCreditCardState,
  ICheckoutInvoiceState,
  IDeliveryAddressState,
  IDeliverySelectionState
} from "src/shared/components/Pages/CheckoutPage/types";
import {IAddressItemCollection} from "src/shared/interfaces/addresses";
import {ICountries} from "src/shared/reducers/Common/Init";
import {IPaymentMethod, IShipmentMethod} from "src/shared/interfaces/checkout";
import {
  TCurrentValueBillingSelection,
  TCurrentValueDeliverySelection,
  TExtraOptionsToSelection
} from "src/shared/components/Pages/CheckoutPage/types/constantTypes";
import {BlurEvent, FormEvent, InputChangeEvent} from "src/shared/interfaces/common/react";

// Type for Context Provider of the Checkout Page
export type TCheckoutPageContext = {
  submitHandler: (event: FormEvent) => void;
  onBlurHandler: (formName: string) => (event: BlurEvent) => void;
  selectionsChangeHandler: (event: InputChangeEvent) => void;
  handleDeliveryInputs: (event: InputChangeEvent) => void;
  handleBillingInputs: (event: InputChangeEvent) => void;
  handleInvoiceInputs: (event: InputChangeEvent) => void;
  handleCreditCardInputs: (event: InputChangeEvent) => void;
  isBillingSameAsDelivery: boolean;
  deliveryNewAddress: IDeliveryAddressState;
  billingNewAddress: IBillingAddressState;
  addressesCollection: IAddressItemCollection[] | null;
  countriesCollection: ICountries[] | null;
  deliverySelections: IDeliverySelectionState | null;
  billingSelections: IBillingSelectionState | null;
  currentValueDeliverySelection: TCurrentValueDeliverySelection;
  currentValueBillingSelection: TCurrentValueBillingSelection;
  isCheckoutFulfilled: boolean;
  extraOptionsDeliverySelection: TExtraOptionsToSelection;
  extraOptionsBillingSelection: TExtraOptionsToSelection;
  isUserLoggedIn: boolean;
  shipmentMethods: Array<IShipmentMethod> | null;
  currentValueShipmentMethod: IShipmentMethod["id"] | null;
  paymentMethods: Array<IPaymentMethod> | null;
  currentValuePaymentMethod: IPaymentMethod["paymentMethodName"] | null;
  paymentCreditCardDataInputs: ICheckoutCreditCardState;
  paymentInvoiceDataInputs: ICheckoutInvoiceState;
};
