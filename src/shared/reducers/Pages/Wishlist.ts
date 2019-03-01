import produce from 'immer';
import { IReduxState } from 'src/typings/app';
import {
  ADD_ITEM_WISHLIST,
  ADD_WISHLIST,
  DELETE_ITEM_WISHLIST,
  DELETE_WISHLIST,
  DETAIL_WISHLIST,
  UPDATE_WISHLIST,
  WISHLIST_ALL_LISTS,
} from '../../constants/ActionTypes/Pages/Wishlist';
import { IWishlist, IWishlistItem } from '../../interfaces/wishlist';

export interface WishlistState extends IReduxState {
  data: {
    wishlists: IWishlist[],
    currentWishlist: IWishlist | null,
    currentItems: Array<IWishlistItem>,
    isInitial: boolean,
  };
}

export const initialState: WishlistState = {
  data: {
    wishlists: [],
    currentWishlist: null,
    currentItems: [],
    isInitial: false,
  },
};

export const pageWishlist = produce<WishlistState>(
  (draft: WishlistState, action: any) => {
    switch (action.type) {
      case `${WISHLIST_ALL_LISTS}_PENDING`:
      case `${ADD_WISHLIST}_PENDING`:
      case `${DELETE_WISHLIST}_PENDING`:
      case `${UPDATE_WISHLIST}_PENDING`:
      case `${DELETE_ITEM_WISHLIST}_PENDING`:
      case `${ADD_ITEM_WISHLIST}_PENDING`:
        draft.error = false;
        draft.pending = true;
        draft.fulfilled = false;
        draft.rejected = false;
        draft.initiated = true;
        break;
      case `${DETAIL_WISHLIST}_PENDING`:
        draft.data.currentWishlist = null;
        draft.data.currentItems = [];
        draft.error = false;
        draft.pending = true;
        draft.fulfilled = false;
        draft.rejected = false;
        draft.initiated = true;
        break;
      case `${WISHLIST_ALL_LISTS}_REJECTED`:
      case `${ADD_WISHLIST}_REJECTED`:
      case `${DELETE_WISHLIST}_REJECTED`:
      case `${UPDATE_WISHLIST}_REJECTED`:
        draft.data.isInitial = false;
        draft.error = action.error;
        draft.pending = false;
        draft.fulfilled = false;
        draft.rejected = true;
        draft.initiated = true;
        break;
      case `${DETAIL_WISHLIST}_REJECTED`:
      case `${DELETE_ITEM_WISHLIST}_REJECTED`:
      case `${ADD_ITEM_WISHLIST}_REJECTED`:
        draft.error = action.error;
        draft.pending = false;
        draft.fulfilled = false;
        draft.rejected = true;
        draft.initiated = true;
        break;
      case `${WISHLIST_ALL_LISTS}_FULFILLED`:
        draft.data.wishlists = action.wishlists;
        draft.data.isInitial = true;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      case `${ADD_WISHLIST}_FULFILLED`: {
        const wishlists: IWishlist[] = [...draft.data.wishlists, action.wishlist];
        draft.data.wishlists = wishlists;
        draft.data.isInitial = true;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      }
      case `${DELETE_WISHLIST}_FULFILLED`: {
        const wishlists: IWishlist[] = draft.data.wishlists.filter((
          wishlist: IWishlist,
        ) => wishlist.id !== action.wishlistId);
        draft.data.wishlists = wishlists;
        draft.data.isInitial = true;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      }
      case `${UPDATE_WISHLIST}_FULFILLED`: {
        const wishlists: IWishlist[] = draft.data.wishlists.map((
          wishlist: IWishlist,
        ) => wishlist.id === action.wishlistId ? action.data : wishlist);
        draft.data.wishlists = wishlists;
        draft.data.isInitial = true;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      }
      case `${DETAIL_WISHLIST}_FULFILLED`: {
        draft.data.currentWishlist = action.wishlist;
        draft.data.currentItems = action.items;
        draft.data.isInitial = true;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      }
      case `${ADD_ITEM_WISHLIST}_FULFILLED`: {
        const wishlists: IWishlist[] = draft.data.wishlists.map((
          wishlist: IWishlist,
          ) => wishlist.id === action.wishlist.id
          ? action.wishlist
          : wishlist,
        );
        draft.data.wishlists = wishlists;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      }
      case `${DELETE_ITEM_WISHLIST}_FULFILLED`: {
        const currentItems: IWishlistItem[] = draft.data.currentItems.filter((
          item: IWishlistItem,
        ) => item.sku !== action.sku);
        const wishlists: IWishlist[] = draft.data.wishlists.map((
          wishlist: IWishlist,
        ) => wishlist.id === action.wishlistId
          ? {...wishlist, numberOfItems: currentItems.length}
          : wishlist,
        );
        draft.data.wishlists = wishlists;
        draft.data.currentItems = currentItems;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      }
      default:
        break;
    }
  },
  initialState,
);

function isStateExist(state: any, props: any): boolean {
  return Boolean(state.pageWishlist);
}

export function isPageWishlistStateLoading(state: any, props: any): boolean {
  return (state.pageWishlist && state.pageWishlist.pending && state.pageWishlist.pending === true);
}

export function isWishlistsCollectionExist(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.pageWishlist.data.wishlists);
}

export function getWishlistsCollectionFromStore(state: any, props: any): IWishlist[] | null {
  return isWishlistsCollectionExist(state, props) ? state.pageWishlist.data.wishlists : null;
}

export function isWishlistsCollectionInitiated(state: any, props: any): boolean {
  return isStateExist(state, props) ? state.pageWishlist.data.isInitial : false;
}
