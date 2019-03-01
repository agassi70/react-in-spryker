import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import {styles} from './styles';
import {IOrderPriceModeProps} from "./types";


export const OrderPriceModeBase: React.SFC<IOrderPriceModeProps> = (props): JSX.Element => {
  const {
    classes,
    priceMode,
    title,
  } = props;

  return (
    <Typography component="span" color="inherit" >
      {`${title}${priceMode}`}
    </Typography>
  );
};

export const OrderPriceMode = withStyles(styles)(OrderPriceModeBase);
