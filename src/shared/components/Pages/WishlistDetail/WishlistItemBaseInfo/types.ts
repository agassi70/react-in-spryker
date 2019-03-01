import { WithStyles } from '@material-ui/core';
import { IWishlistItem } from 'src/shared/interfaces/wishlist';
import { styles } from '../styles';

export interface WishListRowsProps extends WithStyles<typeof styles> {
  productItem: IWishlistItem;
  renderProduct: Function;
}
