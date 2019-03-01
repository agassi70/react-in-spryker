import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {connect} from './connect';
import {noOrderText} from 'src/shared/constants/messages/orders';
import {IOrderDetailsItem, IOrderDetailsSelectedItems} from 'src/shared/interfaces/order';
import {emptyValueErrorText} from 'src/shared/constants/messages/errors';
import {ICartAddItem} from 'src/shared/interfaces/cart';
import {OrderDetailsGeneralInfo} from './OrderDetailsGeneralInfo';
import {OrderProductList} from './OrderProductsList';
import {OrderDetailsTotals} from './OrderDetailsTotals';
import {styles} from './styles';
import {IOrderDetailsPageProps as Props, IOrderDetailsPageState as State} from './types';
import {OrderAddresses} from "src/shared/components/Pages/OrderDetailsPage/OrderAddresses/index";
import {getOrderSelectedItemsData} from "src/shared/components/Pages/OrderDetailsPage/helpers";
import {
  OrderDetailBillingAddressTitle,
  OrderDetailShippingAddressTitle
} from "src/shared/constants/orders/index";
import {EmptyOrder} from "src/shared/components/Pages/OrderDetailsPage/EmptyOrder/index";


@connect
export class OrderDetailsPageBase extends React.Component<Props, State> {
  public state: State = {
    selectedItems: {},
    selectedItemsData: null,
  };

  public componentDidMount = () => {
    if (!this.props.isOrderExist || (this.props.isOrderExist && this.props.orderIdParam !== this.props.order.id)) {
      this.initRequestData();
    }
  };

  public componentDidUpdate = (prevProps: Props, prevState: State) => {
    if (!this.props.isRejected && !this.props.isOrderExist) {
      this.initRequestData();
    }
  };

  public selectItemHandler = (event: any): any => {
    const key = event.target.value;

    if (!key) {
      throw new Error(emptyValueErrorText);
    }

    this.setState((prevState: State) => {
      const newSelectedItems = {
        ...prevState.selectedItems,
        [key]: !prevState.selectedItems[key],
      };

      return ({
        ...prevState,
        selectedItems: newSelectedItems,
        selectedItemsData: getOrderSelectedItemsData(newSelectedItems),
      });
    });
  };

  public reorderSelectedClickHandler = (event: any): any => {
    const items = [...this.state.selectedItemsData];
    if (!items) {
      return false;
    }
    this.props.addMultipleItemsToCart(items, this.props.cartId, this.props.payloadForCreateCart);
    return true;
  };

  private isReorderSelectedDisabled = (): boolean => {
    return Boolean(!this.state.selectedItemsData || !this.state.selectedItemsData.length);
  };

  public reorderAllClickHandler = (event: any): any => {
    const allSelectedItemsData = this.props.order.items.map((item: IOrderDetailsItem): ICartAddItem => ({
      sku: item.sku,
      quantity: item.quantity,
    }));

    const allSelectedItems: IOrderDetailsSelectedItems = {};
    for (const item of allSelectedItemsData) {
      allSelectedItems[item.sku] = true;
    }

    this.setState((prevState: State) => {
      return ({
        ...prevState,
        selectedItems: allSelectedItems,
        selectedItemsData: allSelectedItemsData,
      });
    });

    this.props.addMultipleItemsToCart(allSelectedItemsData, this.props.cartId, this.props.payloadForCreateCart);
    return true;
  };

  private isReorderAllDisabled = (): boolean => Boolean(!this.props.order.items.length);

  private initRequestData = () => {
    if (this.props.isLoading) {
      return;
    }
    if (this.props.isAppDataSet && this.props.orderIdParam) {
      this.props.getOrderData(this.props.orderIdParam as string);
      return true;
    }
    return false;
  };

  public render(): JSX.Element {
    const {classes, isOrderExist, isFulfilled, currency, order, timeZone} = this.props;

    return (
      <div className={classes.root}>
        { (isFulfilled === false)
          ? null
          : (
            <Grid container>
              { isOrderExist
                ? <Grid item xs={12}>
                    <OrderDetailsGeneralInfo
                      orderId={order.id}
                      date={order.dateCreated}
                      priceMode={order.priceMode}
                      timeZone={timeZone}
                    />
                    <OrderProductList items={order.items}/>
                    <OrderDetailsTotals
                      currency={currency}
                      expenses={order.expenses}
                      totals={order.totals}
                    />
                    <OrderAddresses
                      billingAddress={order.billingAddress}
                      shippingAddress={order.shippingAddress}
                      billingBlockTitle={OrderDetailBillingAddressTitle}
                      shippingBlockTitle={OrderDetailShippingAddressTitle}
                    />
                  </Grid>
                : <EmptyOrder intro={noOrderText} />
              }
            </Grid>
          )
        }
      </div>
    );
  }
}

export const OrderDetailsPage = withStyles(styles)(OrderDetailsPageBase);
export default OrderDetailsPage;
