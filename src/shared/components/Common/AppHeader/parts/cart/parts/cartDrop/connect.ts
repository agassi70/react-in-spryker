import { bindActionCreators, Dispatch } from 'redux';

import { reduxify } from 'src/shared/lib/redux-helper';
import { cartDeleteItemAction, removeItemGuestCartAction } from 'src/shared/actions/Common/Cart';
import { ICartState } from 'src/shared/reducers/Common/Cart/types';
import { isUserAuthenticated } from 'src/shared/reducers/Pages/Login';
import { getAnonymId } from 'src/shared/reducers/Common/Init';
import {getCartId, isCartStateLoading} from "src/shared/reducers/Common/Cart/selectors";

const mapStateToProps = (state: any, ownProps: any) => {
  const cartProps: ICartState = state.cart ? state.cart : null;
  const isUserLoggedIn = isUserAuthenticated(state, ownProps);
  const anonymId = getAnonymId(state, ownProps);
  const isCartLoading = isCartStateLoading(state, ownProps);

  return ({
    cartId: getCartId(state, ownProps),
    totals: cartProps && cartProps.data ? cartProps.data.totals : ownProps.totals,
    cartItems: cartProps && cartProps.data ? cartProps.data.items : ownProps.items,
    isUserLoggedIn,
    anonymId,
    isCartLoading,
  });
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      cartDeleteItemAction,
      removeItemGuestCartAction,
    },
    dispatch,
  );

export const connect = reduxify(mapStateToProps, mapDispatchToProps);
