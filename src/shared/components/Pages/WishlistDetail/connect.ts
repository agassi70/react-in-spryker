import { bindActionCreators, Dispatch } from 'redux';
import { reduxify } from 'src/shared/lib/redux-helper';
import { RouteProps } from 'react-router';
import { WishlistState } from 'src/shared/reducers/Pages/Wishlist';
import { getAppCurrency, TAppCurrency } from 'src/shared/reducers/Common/Init';
import { TCartId } from 'src/shared/interfaces/cart';
import { deleteItemAction, deleteMultiItemsAction } from 'src/shared/actions/Pages/Wishlist';
import { addItemToCartAction, multiItemsCartAction } from 'src/shared/actions/Common/Cart';
import { push } from 'react-router-redux';
import {getCartId, getTotalItemsQuantity, isCartStateLoading} from "src/shared/reducers/Common/Cart/selectors";

const mapStateToProps = (state: any, ownProps: any) => {
  const routerProps: RouteProps = state.routing ? state.routing : {};
  const wishlistProps: WishlistState = state.pageWishlist ? state.pageWishlist : null;
  const currency: TAppCurrency = getAppCurrency(state, ownProps);
  const cartId: TCartId = getCartId(state, ownProps);
  const cartItemsLength: number = getTotalItemsQuantity(state, ownProps);
  const cartLoading: boolean = isCartStateLoading(state, ownProps);

  return ({
    location: routerProps.location ? routerProps.location : ownProps.location,
    wishlist: wishlistProps && wishlistProps.data ? wishlistProps.data.currentWishlist : ownProps.wishlist,
    products: wishlistProps && wishlistProps.data ? wishlistProps.data.currentItems : ownProps.products,
    isLoading: wishlistProps ? wishlistProps.pending : ownProps.isLoading,
    currency,
    cartId,
    cartItemsLength,
    cartLoading,
  });
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      changeLocation: (location: string) => push(location),
      deleteItemAction,
      addItemToCartAction,
      multiItemsCartAction,
      deleteMultiItemsAction,
    },
    dispatch,
  );

export const connect = reduxify(mapStateToProps, mapDispatchToProps);
