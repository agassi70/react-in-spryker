import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {styles} from './styles';
import {IOrderDetailsTotalsProps} from "./types";
import {IOrderDetailsExpenseItem} from 'src/shared/interfaces/order';
import {TotalItem} from "src/shared/components/Pages/OrderDetailsPage/TotalItem/index";
import {
  OrderDetailCanceled,
  OrderDetailDiscount,
  OrderDetailGrandTotal,
  OrderDetailShipment,
  OrderDetailShipmentTotal,
  OrderDetailSubtotal,
  OrderDetailTax
} from "src/shared/constants/orders/index";


export const OrderDetailsTotalsBase: React.SFC<IOrderDetailsTotalsProps> = (props): JSX.Element => {
  const {
    classes,
    expenses,
    currency,
    totals: {
      canceledTotal,
      expenseTotal,
      discountTotal,
      taxTotal,
      subtotal,
      grandTotal,
    }
  } = props;

  return (
    <Grid container justify="flex-end" className={classes.root}>
      <Grid item xs={12} sm={7} md={4}>
        <TotalItem value={subtotal} title={OrderDetailSubtotal} />
        {(!expenses || !expenses.length)
          ? null
          : expenses.map((item: IOrderDetailsExpenseItem) => {
            return (
              <TotalItem key={item.name} value={item.sumPrice} title={`${OrderDetailShipment}`} />
            );
          })
        }
        {expenses.length > 1
          ? <TotalItem value={expenseTotal} title={OrderDetailShipmentTotal} />
          : null
        }
        <TotalItem value={canceledTotal} title={OrderDetailCanceled} />
        <TotalItem value={taxTotal} title={OrderDetailTax} />
        <TotalItem value={discountTotal} title={OrderDetailDiscount} valueSign="-" />
        <TotalItem value={grandTotal} title={OrderDetailGrandTotal} extraClassName={classes.bold} />
      </Grid>
    </Grid>
  );
};

export const OrderDetailsTotals = withStyles(styles)(OrderDetailsTotalsBase);
