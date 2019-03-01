import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {styles} from "./styles";
import {IOrderAddressesProps} from "./types";
import {AddressItem} from "src/shared/components/Pages/OrderDetailsPage/AddressItem/index";


export const OrderAddressesBase: React.SFC<IOrderAddressesProps> = (props): JSX.Element => {
  const {
    classes, billingAddress, shippingAddress, billingBlockTitle, shippingBlockTitle
  }  = props;

  return (
    <Grid container className={classes.root} >
      <Grid item xs={12} className={classes.container}>
        <AddressItem {...shippingAddress} blockTitle={shippingBlockTitle} />
        <AddressItem {...billingAddress} blockTitle={billingBlockTitle} />
      </Grid>
    </Grid>
  );
};

export const OrderAddresses = withStyles(styles)(OrderAddressesBase);
