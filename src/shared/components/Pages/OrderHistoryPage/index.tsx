import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {IOrderHistoryPageProps, IOrderHistoryPageState} from "./types";
import {connect} from './connect';
import {styles} from './styles';
import {noOrderText} from '../../../constants/messages/orders';
import {OrderList} from './OrderList';
import {OrdersHistoryPageTitle} from "src/shared/constants/orders";
import {CustomerPageTitle} from "src/shared/components/Common/CustomerPageTitle/index";
import {EmptyOrder} from "src/shared/components/Pages/OrderDetailsPage/EmptyOrder/index";


@connect
export class OrderHistoryPageBase extends React.Component<IOrderHistoryPageProps, IOrderHistoryPageState> {

  public state: IOrderHistoryPageState = {};

  public componentDidMount = () => {
    if (!this.props.isLoading && this.props.isAppDataSet) {
      this.props.getOrdersCollection();
    }
  };

  public componentDidUpdate = (prevProps: IOrderHistoryPageProps, prevState: IOrderHistoryPageState) => {
    if (this.props.isRejected || this.props.isLoading || !this.props.isAppDataSet) {
      return;
    }

    // First load of the App
    if (!this.props.isFulfilled && !prevProps.isHasOrders) {
      this.props.getOrdersCollection();
    }

  };

  private initRequestData = (): boolean => {
    if (!this.props.isInitiated && this.props.isAppDataSet) {
      this.props.getOrdersCollection();
      return true;
    }
    return false;
  };

  public render(): JSX.Element {
    const {classes, isHasOrders, isFulfilled, orders} = this.props;

    return (
      <div>
        { (isFulfilled === false)
          ? null
          : (
              <div className={classes.root}>
                <Grid container justify="center">
                  <Grid item xs={12}>
                    <CustomerPageTitle title={OrdersHistoryPageTitle} />
                  </Grid>
                </Grid>
                <Grid container>
                  { isHasOrders
                    ? <Grid item xs={12}>
                        <OrderList orders={orders} />
                      </Grid>
                    : <EmptyOrder intro={noOrderText} />
                  }
                </Grid>
              </div>
          )
        }
      </div>
    );
  }
}

export const OrderHistoryPage = withStyles(styles)(OrderHistoryPageBase);
export default OrderHistoryPage;
