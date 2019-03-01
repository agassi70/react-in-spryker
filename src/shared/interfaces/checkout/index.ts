import {
  ICustomerProfileIdentity,
} from "src/shared/interfaces/customer";
import {
  IAddressItem,
  IAddressItemCollection,
} from "src/shared/interfaces/addresses";
import { TCartId } from "src/shared/interfaces/cart";

export type TShipmentCarrierName = string;
export type TShipmentId = string;
export type TShipmentName = string;
export type TShipmentPrice = number;
export type TShipmentTaxRate = number | null;
export type TShipmentShipmentDeliveryTime = string | null;
export type TPaymentProvider = string;
export type TPaymentMethod = string;
export type TPaymentAmount = number;
export type TPaymentMethodName = string;
export type TPaymentCardType = string;
export type TPaymentCardNumber = string;
export type TPaymentCardName = string;
export type TPaymentCardExpiryMonth = string;
export type TPaymentCardExpiryYear = string;
export type TPaymentCardCVC = string;
export type TPaymentInvoiceDateOfBirth = string;

export interface ISameAsDelivery {
  isSameAsDelivery: boolean;
}

export interface IPaymentMethod {
  paymentProviderName: TPaymentProvider;
  paymentMethodName: TPaymentMethodName;
  requiredRequestData?: string[];
}

export interface IPaymentCreditCardData {
  paymentMethod?: TPaymentMethod;
  paymentProvider: TPaymentProvider | null;
  cardType: TPaymentCardType;
  cardNumber: TPaymentCardNumber | null;
  cardName: TPaymentCardName | null;
  cardExpiryMonth: TPaymentCardExpiryMonth | null;
  cardExpiryYear: TPaymentCardExpiryYear | null;
  cardCVC: TPaymentCardCVC | null;
}

export interface IPaymentInvoiceData {
  paymentMethod?: TPaymentMethod;
  paymentProvider: TPaymentProvider | null;
  invoiceDateOfBirth: TPaymentInvoiceDateOfBirth | null;
}

export interface IShipmentMethod {
  carrierName: TShipmentCarrierName;
  id: TShipmentId;
  name: TShipmentName;
  price: TShipmentPrice;
  taxRate: TShipmentTaxRate;
  shipmentDeliveryTime: TShipmentShipmentDeliveryTime;
}

export interface ICheckoutRequest {
  customer?: ICustomerProfileIdentity;
  idCart?: TCartId;
  billingAddress?: IAddressItem;
  shippingAddress?: IAddressItem;
  payments?: Array<IPaymentMethod>;
  shipment?: {
    idShipmentMethod: number,
  };
}

export interface IUsageSavedAddress {
  billingSelectedAddressId: IAddressItem["id"] | null;
  deliverySelectedAddressId: IAddressItem["id"] | null;
}

export interface IAddNewAddressActions {
  isAddNewBilling: boolean;
  isAddNewDelivery: boolean;
}

export interface IPaymentProvider {
  paymentProviderName: TPaymentProvider;
  paymentMethods: IPaymentMethod[];
}

export interface IcheckoutResponse {
  addresses: IAddressItemCollection[] | {};
  paymentProviders: IPaymentProvider[];
  shipmentMethods: IShipmentMethod[];
}
