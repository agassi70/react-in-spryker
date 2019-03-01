import { WithStyles } from '@material-ui/core/styles/withStyles';
import { ICartItem } from 'src/shared/interfaces/cart';
import { styles } from './styles';

export interface ProductItemProps extends WithStyles<typeof styles> {
  productData: ICartItem;
  deleteItem(itemId: string): void;
}
