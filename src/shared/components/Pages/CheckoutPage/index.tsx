// tslint:disable:max-file-line-count

import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {connect} from './connect';
import {styles} from './styles';
import {
  checkoutFormsNames,
  checkoutSelectionInputs,
} from "./constants";
import {ICheckoutPageProps, ICheckoutPageState} from "./types";
import {CheckoutPageContext} from "./context";
import {
  getCheckoutPanelsSettings,
  getDefaultAddressId,
  getExtraOptionsToSelection,
  getAddressForm,
} from "./helpers";
import {AppBackdrop} from "src/shared/components/Common/AppBackdrop";
import {AppMain} from "src/shared/components/Common/AppMain";
import {CheckoutForms} from "src/shared/components/Pages/CheckoutPage/CheckoutForms";
import {CartData} from "src/shared/components/Pages/CheckoutPage/CartData";
import {OrderSuccess} from "src/shared/components/Pages/CheckoutPage/OrderSuccess";
import {inputSaveErrorText} from "src/shared/constants/messages/errors";
import {
  billingNewAddressDefault,
  billingSelectionDefault,
  deliveryNewAddressDefault,
  deliverySelectionDefault,
  paymentCreditCardDefault,
  paymentInvoiceDefault,
  stepCompletionCheckoutDefault,
} from "src/shared/components/Pages/CheckoutPage/constants/stateDefaults";
import {
  billingConfigInputStable,
  creditCardConfigInputStable,
  deliveryConfigInputStable,
} from "src/shared/components/Pages/CheckoutPage/constants/inputsConfig";
import {
  mutateBillingNewAddressValidity,
  mutateCreditCardValidity,
  mutateDeliveryNewAddressValidity,
  mutateInvoiceValidity
} from "src/shared/components/Pages/CheckoutPage/stateMutations/validity";
import {
  mutateBillingInputs,
  mutateCreditCardInputs,
  mutateDeliveryInputs,
  mutateInvoiceInputs
} from "src/shared/components/Pages/CheckoutPage/stateMutations/inputs";
import {
  mutateBillingSelectionAddNew,
  mutateBillingSelectionAddressId,
  mutateBillingSelectionSameAsDelivery,
  mutateDeliverySelectionAddNew,
  mutateDeliverySelectionAddressId,
  mutatePaymentMethod,
  mutateShipmentMethod,
} from "src/shared/components/Pages/CheckoutPage/stateMutations/selections";
import {
  validateBillingInput,
  validateBillingNewAddressForm,
  validateCreditCardForm,
  validateCreditCardInput,
  validateDeliveryInput,
  validateDeliveryNewAddressForm,
  validateInvoiceForm,
  validateInvoiceInput
} from "src/shared/components/Pages/CheckoutPage/helpers/validation";
import {AppPageTitle} from "src/shared/components/Common/AppPageTitle/index";
import {noProductsInCheckoutText} from "src/shared/constants/messages/checkout";
import {InputChangeEvent, FormEvent, BlurEvent} from "src/shared/interfaces/common/react";
import {IAddressItem, IAddressItemCollection} from "src/shared/interfaces/addresses";
import {ICheckoutRequest} from "src/shared/interfaces/checkout";
import {ICartItem, ICartTotals} from "src/shared/interfaces/cart";


@connect
export class CheckoutPageBase extends React.Component<ICheckoutPageProps, ICheckoutPageState> {

  public successOrderTotals: ICartTotals = {
    expenseTotal: 0,
    discountTotal: 0,
    taxTotal: 0,
    subtotal: 0,
    grandTotal: 0,
  };

  public successOrderProducts: ICartItem[] = [];

  public state: ICheckoutPageState = {
    deliverySelection: {...deliverySelectionDefault},
    billingSelection: {...billingSelectionDefault},
    deliveryNewAddress: {...deliveryNewAddressDefault},
    billingNewAddress: {...billingNewAddressDefault},
    stepsCompletion: {...stepCompletionCheckoutDefault},
    shipmentMethod: null,
    paymentMethod: null,
    paymentCreditCardData: {...paymentCreditCardDefault},
    paymentInvoiceData: {...paymentInvoiceDefault},
  };

  public componentDidMount() {
    if (this.props.isUserLoggedIn) {
      this.props.getCheckoutData({idCart: this.props.cartId}, '');
    } else {
      this.props.getCheckoutData({idCart: this.props.cartId}, this.props.anonymId);
    }
  }

  public componentDidUpdate = (prevProps: ICheckoutPageProps, prevState: ICheckoutPageState) => {
    // If we get saved addressesCollection
    if (!prevProps.isCheckoutFulfilled && this.props.isCheckoutFulfilled) {
      this.setDefaultAddresses();

      if (!this.props.profile && this.props.isUserLoggedIn && this.props.customerReference) {
        this.props.getCustomerData(this.props.customerReference);
      }
    }

    if (!prevProps.orderId && this.props.orderId) {
      this.successOrderProducts = prevProps.products;
      this.successOrderTotals = prevProps.totals;
      this.props.isUserLoggedIn
        ? this.props.updateCart()
        : this.props.updateGuestCart(this.props.anonymId);
    }
  }

  public handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const {
      deliverySelection,
      billingSelection,
      deliveryNewAddress,
      billingNewAddress,
      paymentMethod,
      shipmentMethod,
    } = this.state;
    const {
      addressesCollection,
      isUserLoggedIn,
      cartId,
      sendCheckoutData,
      profile,
      anonymId,
    } = this.props;

    const payload: ICheckoutRequest = {};

    if (deliverySelection.isAddNew) {
      payload.shippingAddress = getAddressForm(deliveryNewAddress);
    } else {
      const shippingAddress = addressesCollection.find((address: IAddressItemCollection) =>
        address.id === deliverySelection.selectedAddressId);
      payload.shippingAddress = {...shippingAddress, country: ''};
    }

    if (billingSelection.isAddNew) {
      payload.billingAddress = getAddressForm(billingNewAddress);
    } else if (billingSelection.isSameAsDelivery) {
      payload.billingAddress = payload.shippingAddress;
    } else {
      const billingAddress = addressesCollection.find((address: IAddressItemCollection) =>
        address.id === deliverySelection.selectedAddressId);
      payload.billingAddress = {...billingAddress, country: ''};
    }

    payload.idCart = cartId;

    payload.payments = [{
      paymentProviderName: 'DummyPayment',
      paymentMethodName: paymentMethod,
    }];

    payload.shipment = {idShipmentMethod: parseInt(shipmentMethod, 10)};

    if (isUserLoggedIn) {
      payload.customer = {
        email: profile.email,
        salutation: profile.salutation,
        firstName: profile.firstName,
        lastName: profile.lastName,
      };

      sendCheckoutData(payload, '');
    } else {
      payload.customer = {
        email: payload.shippingAddress.email,
        salutation: payload.shippingAddress.salutation,
        firstName: payload.shippingAddress.firstName,
        lastName: payload.shippingAddress.lastName,
      };

      sendCheckoutData(payload, anonymId);
    }
  }

  public handleSelectionsChange = (event: InputChangeEvent): void => {
    const { name, value } = event.target;
    if (name === 'deliverySelection') {
      this.handleDeliverySelection(value);
    } else if (name === 'billingSelection' || name === checkoutSelectionInputs.isSameAsDeliveryValue) {
      this.handleBillingSelection(value);
    } else if (name === 'shipmentMethodSelection') {
      this.handleShipmentMethodSelection(value);
    } else if (name === 'paymentMethodSelection') {
      this.handlePaymentMethodSelection(value);
    } else {
      throw new Error(`Undefined type of Selection: ${name}`);
    }
  }

  public handleFormValidityOnBlur = (formName: string) => (event: BlurEvent): void => {
    if (formName === checkoutFormsNames.delivery) {
      this.handleDeliveryNewAddressValidity();
    } else if (formName === checkoutFormsNames.billing) {
      this.handleBillingNewAddressValidity();
    } else if (formName === checkoutFormsNames.invoice) {
      this.handleInvoiceValidity();
    } else if (formName === checkoutFormsNames.creditCard) {
      this.handleCreditCardValidity();
    } else {
      throw new Error(`Undefined type of formName: ${formName}`);
    }
  }

  public handleDeliveryInputs = (event: InputChangeEvent): void => {
    const { name, value } = event.target;

    if (!this.state.deliveryNewAddress.hasOwnProperty(name)) {
      throw new Error(inputSaveErrorText);
    }
    const isInputValid = validateDeliveryInput(name, value);

    this.setState((prevState: ICheckoutPageState) => {
      return mutateDeliveryInputs(prevState, name, value, !isInputValid);
    }, () => {
      // Validate form when select input is changed
      if (name === deliveryConfigInputStable.salutation.inputName
        || name === deliveryConfigInputStable.country.inputName
      ) {
        this.handleDeliveryNewAddressValidity();
      }
    });
  }

  public handleBillingInputs = (event: InputChangeEvent): void => {
    const { name, value } = event.target;

    if (!this.state.billingNewAddress.hasOwnProperty(name)) {
      throw new Error(inputSaveErrorText);
    }

    const isInputValid = validateBillingInput(name, value);

    this.setState((prevState: ICheckoutPageState) => {
      return mutateBillingInputs(prevState, name, value, !isInputValid);
    }, () => {
      // Validate form when select input is changed
      if (name === billingConfigInputStable.salutation.inputName
        || name === billingConfigInputStable.country.inputName
      ) {
        this.handleBillingNewAddressValidity();
      }
    });
  }

  public handleInvoiceInputs = (event: InputChangeEvent): void => {
    const { name: key, value } = event.target;
    if (!this.state.paymentInvoiceData.hasOwnProperty(key)) {
      throw new Error(inputSaveErrorText);
    }
    const isInputValid = validateInvoiceInput(key, value);
    this.setState((prevState: ICheckoutPageState) => {
      return mutateInvoiceInputs(prevState, key, value, !isInputValid);
    });
  }

  public handleCreditCardInputs = (event: InputChangeEvent): void => {
    const { name: key, value } = event.target;
    if (!this.state.paymentCreditCardData.hasOwnProperty(key)) {
      throw new Error(inputSaveErrorText);
    }
    const isInputValid = validateCreditCardInput(key, value);
    this.setState((prevState: ICheckoutPageState) => {
      return mutateCreditCardInputs(prevState, key, value, !isInputValid);
    }, () => {
      // Validate form when select input is changed
      if (key === creditCardConfigInputStable.paymentProvider.inputName
        || key === creditCardConfigInputStable.cardExpiryMonth.inputName
        || key === creditCardConfigInputStable.cardExpiryYear.inputName
      ) {
        this.handleCreditCardValidity();
      }
    });
  }

  private handleBillingNewAddressValidity = (): boolean => {
    const isFormValid = validateBillingNewAddressForm(this.state.billingNewAddress);
    this.setState((prevState: ICheckoutPageState) => {
      return mutateBillingNewAddressValidity(prevState, isFormValid);
    });
    return isFormValid;
  }

  private handleDeliveryNewAddressValidity = (): void => {
    const newAddress = this.state.deliveryNewAddress;
    if (this.props.isUserLoggedIn) {
      delete newAddress.email;
    }
    const isFormValid = validateDeliveryNewAddressForm(newAddress);
    this.setState((prevState: ICheckoutPageState) => {
      return mutateDeliveryNewAddressValidity(prevState, isFormValid);
    });
  }

  private handleInvoiceValidity = (): void => {
    const isFormValid = validateInvoiceForm(this.state.paymentInvoiceData);
    this.setState((prevState: ICheckoutPageState) => {
      return mutateInvoiceValidity(prevState, isFormValid);
    });
  }

  private handleCreditCardValidity = (): void => {
    const isFormValid = validateCreditCardForm(this.state.paymentCreditCardData);
    this.setState((prevState: ICheckoutPageState) => {
      return mutateCreditCardValidity(prevState, isFormValid);
    });
  }

  private handleDeliverySelection = (value: string): void => {
    if (value === checkoutSelectionInputs.isAddNewDeliveryValue) {
      this.setState( (prevState: ICheckoutPageState) => {
        return mutateDeliverySelectionAddNew(prevState);
      });
    } else {
      this.setState( (prevState: ICheckoutPageState) => {
        return mutateDeliverySelectionAddressId(prevState, value);
      });
    }
  }

  private handleBillingSelection = (value: string): void => {
    if (value === checkoutSelectionInputs.isAddNewBillingValue) {
      this.setState( (prevState: ICheckoutPageState) => {
        return mutateBillingSelectionAddNew(prevState);
      });
    } else if (value === checkoutSelectionInputs.isSameAsDeliveryValue) {
      this.setState( (prevState: ICheckoutPageState) => {
        return mutateBillingSelectionSameAsDelivery(prevState);
      });
    } else {
      this.setState( (prevState: ICheckoutPageState) => {
        return mutateBillingSelectionAddressId(prevState, value);
      });
    }
  }

  private handleShipmentMethodSelection = (value: string): void => {
    this.setState( (prevState: ICheckoutPageState) => {
      return mutateShipmentMethod(prevState, value);
    });

  }

  private handlePaymentMethodSelection = (value: string ): void => {
    const isInvoiceFormValid = validateInvoiceForm(this.state.paymentInvoiceData);
    const isCreditCardFormValid = validateCreditCardForm(this.state.paymentCreditCardData);
    this.setState( (prevState: ICheckoutPageState) => {
      return mutatePaymentMethod(prevState, value, isInvoiceFormValid, isCreditCardFormValid);
    });
  }

  private getCurrentValueBillingSelection = (): IAddressItemCollection["id"] | string | null => {
    return this.state.billingSelection.selectedAddressId
      || (this.state.billingSelection.isAddNew && checkoutSelectionInputs.isAddNewBillingValue)
      || (this.state.billingSelection.isSameAsDelivery && checkoutSelectionInputs.isSameAsDeliveryValue)
      || null;
  }

  private getCurrentValueDeliverySelection = (): IAddressItemCollection["id"] | string | null => {
    return this.state.deliverySelection.selectedAddressId
      || (this.state.deliverySelection.isAddNew && checkoutSelectionInputs.isAddNewDeliveryValue)
      || null;
  }

  private setDefaultAddresses = (): void => {
    const defaultValueDelivery = getDefaultAddressId(this.props.addressesCollection, 'delivery');
    if (defaultValueDelivery) {
      this.handleDeliverySelection(defaultValueDelivery);
    } else {
      this.handleDeliverySelection(checkoutSelectionInputs.isAddNewDeliveryValue);
    }

    const defaultValueBilling = getDefaultAddressId(this.props.addressesCollection, 'billing');
    if (defaultValueBilling) {
      this.handleBillingSelection(defaultValueBilling);
    } else {
      this.handleBillingSelection(checkoutSelectionInputs.isSameAsDeliveryValue);
    }
  }

  private checkCheckoutFormValidity = (): boolean => {
    const {first, second, third, fourth} = this.state.stepsCompletion;
    return first && second && third && fourth;
  }

  public render(): JSX.Element {
    const {
      classes,
      isAppStateLoading,
      isCheckoutLoading,
      isCheckoutFulfilled,
      products,
      isProductsExists,
      totals,
      addressesCollection,
      orderId,
      isAddressesCollectionExist,
      isUserLoggedIn,
      countriesCollection,
      shipmentMethods,
      paymentMethods,
    } = this.props;

    console.info(this.state);
    if (isAppStateLoading) {
      return <AppMain><AppBackdrop isOpen={true} /></AppMain>;
    }

    return (
      <AppMain>
        {isCheckoutLoading ? <AppBackdrop isOpen={true} /> : null}
        {!isProductsExists && !orderId
          ? <AppPageTitle title={noProductsInCheckoutText} />
          : <CheckoutPageContext.Provider
            value={{
              submitHandler: this.handleSubmit,
              onBlurHandler: this.handleFormValidityOnBlur,
              selectionsChangeHandler: this.handleSelectionsChange,
              handleDeliveryInputs: this.handleDeliveryInputs,
              handleBillingInputs: this.handleBillingInputs,
              handleInvoiceInputs: this.handleInvoiceInputs,
              handleCreditCardInputs: this.handleCreditCardInputs,
              isBillingSameAsDelivery: this.state.billingSelection.isSameAsDelivery,
              deliveryNewAddress: this.state.deliveryNewAddress,
              billingNewAddress: this.state.billingNewAddress,
              addressesCollection,
              countriesCollection,
              deliverySelections: this.state.deliverySelection,
              billingSelections: this.state.billingSelection,
              currentValueDeliverySelection: this.getCurrentValueDeliverySelection(),
              currentValueBillingSelection: this.getCurrentValueBillingSelection(),
              extraOptionsDeliverySelection: getExtraOptionsToSelection(isAddressesCollectionExist, 'delivery'),
              extraOptionsBillingSelection: getExtraOptionsToSelection(isAddressesCollectionExist, 'billing'),
              isCheckoutFulfilled,
              isUserLoggedIn,
              shipmentMethods,
              currentValueShipmentMethod: this.state.shipmentMethod,
              paymentMethods,
              currentValuePaymentMethod: this.state.paymentMethod,
              paymentCreditCardDataInputs: this.state.paymentCreditCardData,
              paymentInvoiceDataInputs: this.state.paymentInvoiceData,
            }}
          >
            <Grid container className={classes.container}>
              <Grid item xs={12} md={7} className={classes.leftColumn}>
                {
                  orderId
                    ? <OrderSuccess order={orderId} />
                    : <CheckoutForms
                      panels={getCheckoutPanelsSettings(this.state.stepsCompletion)}
                    />
                }
              </Grid>
              <Grid item xs={12} md={5} className={classes.rightColumn}>
                <CartData
                  products={orderId ? this.successOrderProducts : products}
                  totals={orderId ? this.successOrderTotals : totals}
                  isSendBtnDisabled={!this.checkCheckoutFormValidity()}
                  sendData={this.handleSubmit}
                  order={orderId}
                />
              </Grid>
            </Grid>
          </CheckoutPageContext.Provider>
        }
      </AppMain>
    );
  }
}

export const CheckoutPage = withStyles(styles)(CheckoutPageBase);
export default CheckoutPage;
