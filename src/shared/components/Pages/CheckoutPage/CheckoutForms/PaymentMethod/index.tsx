import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {CheckoutPageContext} from '../../context';
import {formStyles} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/styles";
import {SprykerForm} from "src/shared/components/UI/SprykerForm";
import {IPaymentMethodProps} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/PaymentMethod/types";
import {
  IPaymentMethodsParams,
  IPaymentProviderToIcon
} from "src/shared/components/Pages/CheckoutPage/types/formSettingsTypes";
import {PartnerIconMasterCard} from "src/shared/assets/icons/partnerIconMasterCard";
import {PartnerIconPaypal} from "src/shared/assets/icons/partnerIconPaypal";
import {PartnerIconVisa} from "src/shared/assets/icons/partnerIconVisa";
import {
  getPaymentMethodsFormSettings
} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/settings/paymentSettings";
import {IPaymentMethod} from "src/shared/interfaces/checkout";
import {
  checkoutFormsNames,
  checkoutPaymentMethodsNames
} from "src/shared/components/Pages/CheckoutPage/constants";
import {InvoicePaymentForm} from "./InvoicePaymentForm";
import {CreditCardPaymentForm} from "./CreditCardPaymentForm";
import {
  IPaymentMethodsGrouped,
  TPaymentProvidersCollection
} from "src/shared/components/Pages/CheckoutPage/types/constantTypes";


export const PaymentMethodBase: React.SFC<IPaymentMethodProps> = (props): JSX.Element => {
  const {
    classes,
  } = props;

  const paymentProviderToIcon: IPaymentProviderToIcon = {
    masterCard: <PartnerIconMasterCard key="masterCard"/>,
    paypal: <PartnerIconPaypal key="paypal"/>,
    visa: <PartnerIconVisa key="visa"/>,
  };

  return (
    <CheckoutPageContext.Consumer>
      {({
          submitHandler,
          selectionsChangeHandler,
          paymentMethods,
          currentValuePaymentMethod,
      }) => {

        const isPaymentMethodsExist = Boolean(Array.isArray(paymentMethods) && paymentMethods.length > 0);
        if (!isPaymentMethodsExist) {
          return null;
        }

        const creditCardProvidersCollection: TPaymentProvidersCollection = [];

        const paymentMethodsGrouped: IPaymentMethodsGrouped = {};
        for (let paymentMethod of paymentMethods) {
          if (!paymentMethodsGrouped[paymentMethod.paymentMethodName]) {
            paymentMethodsGrouped[paymentMethod.paymentMethodName] = [];
          }
          paymentMethodsGrouped[paymentMethod.paymentMethodName].push(paymentMethod);
        }

        const paymentMethodGroupItems: IPaymentMethodsParams["paymentMethodGroupItems"] = [];

        for (let groupName in paymentMethodsGrouped) {
          if (!paymentMethodsGrouped.hasOwnProperty(groupName)
            || !Array.isArray(paymentMethodsGrouped[groupName])
            || !paymentMethodsGrouped[groupName].length
          ) {
            continue;
          }
          let paymentMethodLabel: Array<React.ReactNode> = [];
          paymentMethodLabel.push(
            <Typography
              key={ groupName }
              align="left"
              component="p"
              color="inherit"
            >
              { groupName }
            </Typography>,
          );

          paymentMethodsGrouped[groupName].forEach((item: IPaymentMethod) => {
            if (paymentProviderToIcon[item.paymentProviderName]) {
              paymentMethodLabel.push(paymentProviderToIcon[item.paymentProviderName]);
            }
            if (groupName === checkoutPaymentMethodsNames.creditCard) {
              creditCardProvidersCollection.push({name: item.paymentProviderName, value: item.paymentProviderName});
            }
          });

          paymentMethodGroupItems.push({value: groupName, label: paymentMethodLabel});
        }

        const paymentMethodsParams = {
          paymentMethodGroupItems,
          currentValuePaymentMethod,
          paymentProviderToIcon,
          submitHandler,
          inputChangeHandler: selectionsChangeHandler,
        };
        const paymentMethodFormSettings = getPaymentMethodsFormSettings(checkoutFormsNames.paymentMethod,
                                                                        paymentMethodsParams
        );

        return (
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <SprykerForm form={paymentMethodFormSettings} formClassName={classes.paymentMethodsForm} />
              {currentValuePaymentMethod === checkoutPaymentMethodsNames.invoice
                ? <InvoicePaymentForm />
                : null
              }
              {currentValuePaymentMethod === checkoutPaymentMethodsNames.creditCard
                ? <CreditCardPaymentForm
                    providersCollection={creditCardProvidersCollection}
                  />
                : null
              }
            </Grid>
          </Grid>
        );
      } }
    </CheckoutPageContext.Consumer>
  );
};

export const PaymentMethod = withStyles(formStyles)(PaymentMethodBase);
