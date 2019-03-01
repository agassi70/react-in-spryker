import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {CheckoutPageContext} from '../../context';
import {formStyles} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/styles";
import {SprykerForm} from "src/shared/components/UI/SprykerForm";
import {IShipmentMethodProps} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/ShipmentMethod/types";
import {
  getShipmentMethodsFormSettings
} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/settings/shipmentSettings";
import {PartnerIconDhl} from "src/shared/assets/icons/partnerIconDhl";
import {PartnerIconHermes} from "src/shared/assets/icons/partnerIconHermes";
import {IShippingMethodsParams} from "src/shared/components/Pages/CheckoutPage/types/formSettingsTypes";
import {IShipmentMethodsGrouped} from "src/shared/components/Pages/CheckoutPage/types/constantTypes";
import {checkoutFormsNames} from "src/shared/components/Pages/CheckoutPage/constants";


export const ShipmentMethodBase: React.SFC<IShipmentMethodProps> = (props): JSX.Element => {
  const {
    classes,
  }  = props;

  const shipmentCarrierNameToIcon: IShippingMethodsParams["shipmentCarrierNameToIcon"] = {
    "Spryker Dummy Shipment": <PartnerIconDhl />,
    "Spryker Drone Shipment": <PartnerIconHermes />,
  };

  return (
    <CheckoutPageContext.Consumer>
      {({
          submitHandler,
          selectionsChangeHandler,
          shipmentMethods,
          currentValueShipmentMethod,
      }) => {


        const isShipmentMethodsExist = Boolean(Array.isArray(shipmentMethods) && shipmentMethods.length > 0);
        if (!isShipmentMethodsExist) {
          return null;
        }

        const shipmentMethodsGrouped: IShipmentMethodsGrouped = {};
        for (let shipmentMethod of shipmentMethods) {
          if (!shipmentMethodsGrouped[shipmentMethod.carrierName]) {
            shipmentMethodsGrouped[shipmentMethod.carrierName] = [];
          }
          shipmentMethodsGrouped[shipmentMethod.carrierName].push(shipmentMethod);
        }

        const shipmentMethodsForms: Array<JSX.Element> = [];
        for (let carrierName in shipmentMethodsGrouped) {
          const shipmentMethodsParams: IShippingMethodsParams = {
            shipmentMethods: shipmentMethodsGrouped[carrierName],
            currentValueShipmentMethod,
            carrierName,
            shipmentCarrierNameToIcon,
            submitHandler,
            inputChangeHandler: selectionsChangeHandler,
          };
          const shipmentMethodFormSettings = getShipmentMethodsFormSettings(
                                              `${checkoutFormsNames.shipmentMethodBase}${carrierName}`,
                                              shipmentMethodsParams
          );
          shipmentMethodsForms.push(<SprykerForm key={carrierName} form={shipmentMethodFormSettings} />);
        }

        return (
          <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.shipmentMethodsParentForms}>
              {shipmentMethodsForms}
            </Grid>
          </Grid>
        );
      }}
    </CheckoutPageContext.Consumer>
  );
};

export const ShipmentMethod = withStyles(formStyles)(ShipmentMethodBase);
