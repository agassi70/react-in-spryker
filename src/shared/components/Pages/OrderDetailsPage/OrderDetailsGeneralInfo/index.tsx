import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';

import { styles } from './styles';
import {IOrderDetailsGeneralInfoProps} from "./types";
import {
  OrderDetailDateTitle,
  OrderDetailPageTitle,
  OrderDetailPriceModeTitle,
  OrderDetailViewAllOrders,
} from "src/shared/constants/orders";
import {CustomerPageTitle} from "src/shared/components/Common/CustomerPageTitle/index";
import {pathOrderHistoryPage} from "src/shared/routes/contentRoutes";
import {OrderDate} from "src/shared/components/Pages/OrderDetailsPage/OrderDate/index";
import {OrderPriceMode} from "src/shared/components/Pages/OrderDetailsPage/OrderPriceMode/index";


export const OrderDetailsGeneralInfoBase: React.SFC<IOrderDetailsGeneralInfoProps> = (props): JSX.Element => {
  const {classes, orderId, date, priceMode, timeZone} = props;

  return (
    <Grid container justify="space-between" className={classes.titleContainer}>
      <Grid item xs={12} sm={8}>
        <CustomerPageTitle
          title={`${OrderDetailPageTitle}${orderId}`}
          intro={
            <React.Fragment>
              <OrderDate
                date={date}
                timeZone={timeZone}
                title={OrderDetailDateTitle}
              />
              <OrderPriceMode
                title={OrderDetailPriceModeTitle}
                priceMode={priceMode}
              />
            </React.Fragment>

          }
          containerExtraClasses={classes.title}
        />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.linkBackOuter}>
        <NavLink
          to={`${pathOrderHistoryPage}`}
          className={classes.linkBack}
        >
          {OrderDetailViewAllOrders}
        </NavLink>
      </Grid>
    </Grid>
  );
};

export const OrderDetailsGeneralInfo = withStyles(styles)(OrderDetailsGeneralInfoBase);
