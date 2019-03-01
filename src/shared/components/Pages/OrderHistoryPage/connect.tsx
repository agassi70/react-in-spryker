import { reduxify } from '../../../lib/redux-helper';
import { getOrdersCollectionAction } from '../../../actions/Pages/Order';
import {
  getOrdersCollectionFromStore,
  isOrderHistoryFulfilled,
  isOrderHistoryInitiated,
  isOrderHistoryItems,
  isOrderHistoryLoading,
  isOrderHistoryStateRejected,
} from '../../../reducers/Pages/OrderHistory';
import { isAppInitiated } from '../../../reducers/Common/Init';
import { isUserAuthenticated } from '../../../reducers/Pages/Login';


const mapStateToProps = (state: any, ownProps: any) => {
  const isLoading: boolean = isOrderHistoryLoading(state, ownProps);
  const isRejected: boolean = isOrderHistoryStateRejected(state, ownProps);
  const isFulfilled = isOrderHistoryFulfilled(state, ownProps);
  const isInitiated = isOrderHistoryInitiated(state, ownProps);
  const isAppDataSet: boolean = isAppInitiated(state, ownProps);
  const isUserLoggedIn = isUserAuthenticated(state, ownProps);
  const isHasOrders = isOrderHistoryItems(state, ownProps);
  const orders = getOrdersCollectionFromStore(state, ownProps);

  return ({
    isLoading,
    isRejected,
    isFulfilled,
    isAppDataSet,
    isUserLoggedIn,
    isInitiated,
    isHasOrders,
    orders,
  });
};

export const connect = reduxify(
  mapStateToProps,
  (dispatch: Function) => ({
    dispatch,
    getOrdersCollection: () => dispatch(getOrdersCollectionAction()),
  }),
);
