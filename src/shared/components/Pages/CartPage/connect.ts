import { bindActionCreators, Dispatch } from 'redux';

import { reduxify } from 'src/shared/lib/redux-helper';
import {
  cartDeleteItemAction,
  removeItemGuestCartAction,
  updateItemInCartAction,
  updateGuestCartAction
} from 'src/shared/actions/Common/Cart';
import { isUserAuthenticated } from 'src/shared/reducers/Pages/Login';
import { getAnonymId } from 'src/shared/reducers/Common/Init';
import { RouteProps } from "react-router";
import {ICartTotals, ICartItem, TCartId } from "src/shared/interfaces/cart";
import {getCartId, getCartTotals, getProductsFromCart} from "src/shared/reducers/Common/Cart/selectors";

const mapStateToProps = (state: any, ownProps: any) => {
  const isUserLoggedIn: boolean = isUserAuthenticated(state, ownProps);
  const routerProps: RouteProps = state.routing ? state.routing : {};
  const {items, totalQty}: {items: ICartItem[], totalQty: number} = getProductsFromCart(state, ownProps);
  const cartId: TCartId = getCartId(state, ownProps);
  const totals: ICartTotals = getCartTotals(state, ownProps);
  const anonymId: string = getAnonymId(state, ownProps);

  return (
    {
      location: routerProps.location ? routerProps.location : ownProps.location,
      items,
      totals,
      cartId,
      isUserLoggedIn,
      anonymId,
      totalQty,
    }
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      cartDeleteItemAction,
      removeItemGuestCartAction,
      updateItemInCartAction,
      updateGuestCartAction,
    },
    dispatch,
  );

export const connect = reduxify(mapStateToProps, mapDispatchToProps);
