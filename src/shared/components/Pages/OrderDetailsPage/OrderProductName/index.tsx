import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import {styles} from './styles';
import {IOrderProductNameProps} from "./types";


export const OrderProductNameBase: React.SFC<IOrderProductNameProps> = (props): JSX.Element => {
  const {
    classes,
    productName,
    titleSKU,
    sku,
  } = props;

  return (
    <Typography component="p" color="inherit" >
      {productName}
      <Typography component="span" className={classes.sku} >
        {`${titleSKU}${sku}`}
      </Typography>
    </Typography>
  );
};

export const OrderProductName = withStyles(styles)(OrderProductNameBase);
