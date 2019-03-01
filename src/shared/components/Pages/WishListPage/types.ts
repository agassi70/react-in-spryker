import { WithStyles } from '@material-ui/core';
import { styles } from 'src/shared/components/Pages/WishListPage/styles';
import { IWishlist } from 'src/shared/interfaces/wishlist';

export interface WishlistPageProps extends WithStyles<typeof styles> {
  dispatch: Function;
  wishlists: IWishlist[];
  isLoading: boolean;
  isInitial: boolean;

  addWishlistAction(name: string): void;
  deleteWishlistAction(wishlistId: string): void;
  getDetailWishlistAction(wishlistId: string): void;
  getWishlistsAction(): void;
  updateWishlistAction(wishlistId: string, name: string): void;
}

export interface WishlistPageState {
  name: string;
  updatedName: string;
  updatedList: string;
}
