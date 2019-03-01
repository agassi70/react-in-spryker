import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {CheckoutPageContext} from '../../../context';
import {formStyles} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/styles";
import {SprykerForm} from "src/shared/components/UI/SprykerForm";
import {checkoutFormsNames} from "src/shared/components/Pages/CheckoutPage/constants";
import {IInvoicePaymentFormProps} from "./types";
import {getInvoiceFormSettings} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/settings/invoiceSettings";
import {IPaymentInvoiceParams} from "src/shared/components/Pages/CheckoutPage/types/formSettingsTypes";
import {invoiceConfigInputStable} from "src/shared/components/Pages/CheckoutPage/constants/inputsConfig";
import {TCheckoutPageContext} from "src/shared/components/Pages/CheckoutPage/types/contextTypes";

export const InvoicePaymentFormBase: React.SFC<IInvoicePaymentFormProps> = (props): JSX.Element => {
  const {
    classes,
  }  = props;

  return (
    <CheckoutPageContext.Consumer>
      {({
          submitHandler,
          onBlurHandler,
          handleInvoiceInputs,
          paymentInvoiceDataInputs,
      }: Partial<TCheckoutPageContext>) => {
        const invoiceParams: IPaymentInvoiceParams = {
          inputsData: paymentInvoiceDataInputs,
          inputsConfig: invoiceConfigInputStable,
          submitHandler,
          inputChangeHandler: handleInvoiceInputs,
          onBlurHandler: onBlurHandler(checkoutFormsNames.invoice),
        };

        const invoiceFormSettings = getInvoiceFormSettings(checkoutFormsNames.invoice, invoiceParams);

        return (
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <SprykerForm form={invoiceFormSettings} />
            </Grid>
          </Grid>
        );
      }}
    </CheckoutPageContext.Consumer>
  );
};

export const InvoicePaymentForm = withStyles(formStyles)(InvoicePaymentFormBase);
