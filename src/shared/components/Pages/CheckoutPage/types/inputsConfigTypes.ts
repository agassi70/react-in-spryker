
export interface IConfigInputStable {
  isRequired: boolean;
  inputName: string;
}

export interface IObjectConfigInputStable {
  firstName: IConfigInputStable;
  lastName: IConfigInputStable;
  salutation: IConfigInputStable;
  address1: IConfigInputStable;
  address2: IConfigInputStable;
  address3: IConfigInputStable;
  zipCode: IConfigInputStable;
  city: IConfigInputStable;
  country: IConfigInputStable;
  company: IConfigInputStable;
  phone: IConfigInputStable;

  [key: string]: IConfigInputStable;
}

export interface IDeliveryObjectConfigInputStable extends IObjectConfigInputStable {}

export interface IBillingObjectConfigInputStable extends IObjectConfigInputStable {}

export interface ICreditCardObjectConfigInputStable {
  paymentProvider: IConfigInputStable;
  cardNumber: IConfigInputStable;
  cardName: IConfigInputStable;
  cardExpiryMonth: IConfigInputStable;
  cardExpiryYear: IConfigInputStable;
  cardCVC: IConfigInputStable;

  [key: string]: IConfigInputStable;
}

export interface IInvoiceObjectConfigInputStable {
  dateOfBirth: IConfigInputStable;

  [key: string]: IConfigInputStable;
}

