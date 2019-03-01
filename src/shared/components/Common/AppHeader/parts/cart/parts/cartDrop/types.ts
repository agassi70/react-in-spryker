import { WithStyles } from '@material-ui/core/styles/withStyles';
import { ICartTotals, TCartId, ICartItem } from 'src/shared/interfaces/cart';
import { TProductSKU } from 'src/shared/interfaces/product';
import { styles } from './styles';

export interface CartDropProps extends WithStyles<typeof styles> {
  // connect
  totals: ICartTotals;
  cartItems: ICartItem[];
  isUserLoggedIn?: boolean;
  cartId: string;
  anonymId: string;
  isCartLoading: boolean;
  cartDeleteItemAction?(cartId: TCartId, itemId: TProductSKU): void;
  removeItemGuestCartAction?(cartId: TCartId, itemId: TProductSKU, anonymId: string): void;
}
