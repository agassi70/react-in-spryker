import { bindActionCreators, Dispatch } from 'redux';
import { reduxify } from 'src/shared/lib/redux-helper';
import { RouteProps } from 'react-router';
import { WishlistState } from 'src/shared/reducers/Pages/Wishlist';
import {
  addWishlistAction,
  deleteWishlistAction,
  getDetailWishlistAction,
  getWishlistsAction,
  updateWishlistAction,
} from 'src/shared/actions/Pages/Wishlist';

const mapStateToProps = (state: any, ownProps: any) => {
  const routerProps: RouteProps = state.routing ? state.routing : {};
  const wishlistProps: WishlistState = state.pageWishlist ? state.pageWishlist : null;

  return ({
    location: routerProps.location ? routerProps.location : ownProps.location,
    wishlists: wishlistProps && wishlistProps.data ? wishlistProps.data.wishlists : ownProps.wishlists,
    isInitial: wishlistProps && wishlistProps.data ? wishlistProps.data.isInitial : ownProps.isInitial,
    isLoading: wishlistProps ? wishlistProps.pending : ownProps.isLoading,
  });
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addWishlistAction,
      deleteWishlistAction,
      getDetailWishlistAction,
      getWishlistsAction,
      updateWishlistAction,
    },
    dispatch,
  );

export const connect = reduxify(mapStateToProps, mapDispatchToProps);
