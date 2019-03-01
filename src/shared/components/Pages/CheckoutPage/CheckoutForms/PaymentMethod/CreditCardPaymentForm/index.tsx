import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {CheckoutPageContext} from '../../../context';
import {formStyles} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/styles";
import {SprykerForm} from "src/shared/components/UI/SprykerForm";
import {checkoutFormsNames} from "src/shared/components/Pages/CheckoutPage/constants";
import {ICreditCardPaymentFormProps} from "./types";
import {
  getCreditCardFormSettings
} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/settings/creditCardSettings";
import {IPaymentCreditCardParams} from "src/shared/components/Pages/CheckoutPage/types/formSettingsTypes";
import {creditCardConfigInputStable} from "src/shared/components/Pages/CheckoutPage/constants/inputsConfig";


export const CreditCardPaymentFormBase: React.SFC<ICreditCardPaymentFormProps> = (props): JSX.Element => {
  const {
    classes,
    providersCollection,
  }  = props;

  return (
    <CheckoutPageContext.Consumer>
      {({
          submitHandler,
          onBlurHandler,
          handleCreditCardInputs,
          paymentCreditCardDataInputs,
      }) => {
        const creditCardParams: IPaymentCreditCardParams = {
          inputsData: paymentCreditCardDataInputs,
          inputsConfig: creditCardConfigInputStable,
          providersCollection,
          submitHandler,
          inputChangeHandler: handleCreditCardInputs,
          onBlurHandler: onBlurHandler(checkoutFormsNames.creditCard),
        };

        const creditCardFormSettings = getCreditCardFormSettings(checkoutFormsNames.creditCard, creditCardParams);

        return (
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <SprykerForm form={creditCardFormSettings} formClassName={classes.creditCardForm} />
            </Grid>
          </Grid>
        );
      }}
    </CheckoutPageContext.Consumer>
  );
};

export const CreditCardPaymentForm = withStyles(formStyles)(CreditCardPaymentFormBase);
