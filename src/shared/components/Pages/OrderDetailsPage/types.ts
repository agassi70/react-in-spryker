import { WithStyles } from '@material-ui/core';
import { styles } from 'src/shared/components/Pages/OrderDetailsPage/styles';
import { RouteProps } from 'react-router';
import { TRouterMatchParam } from 'src/shared/selectors/Common/router';
import { IOrderDetailsParsed, IOrderDetailsSelectedItems } from 'src/shared/interfaces/order';
import {TAppCurrency, TAppTimeZone} from 'src/shared/reducers/Common/Init';
import { ICartCreatePayload } from 'src/shared/services/Common/Cart/types';
import { TCartAddItemCollection, TCartId } from 'src/shared/interfaces/cart';

export interface IOrderDetailsPageProps extends WithStyles<typeof styles>, RouteProps {
  isLoading: boolean;
  isRejected: boolean;
  isFulfilled: boolean;
  isAppDataSet: boolean;
  isUserLoggedIn: boolean;
  isInitiated: boolean;
  isOrderExist: boolean;
  getOrderData: Function;
  orderIdParam: TRouterMatchParam;
  order: IOrderDetailsParsed;
  currency: TAppCurrency;

  payloadForCreateCart: ICartCreatePayload;
  cartId: TCartId;
  addMultipleItemsToCart: Function;
  timeZone: TAppTimeZone;
}

export interface IOrderDetailsPageState {
  selectedItems: IOrderDetailsSelectedItems;
  selectedItemsData: TCartAddItemCollection;
}
