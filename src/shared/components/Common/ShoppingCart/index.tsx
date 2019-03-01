import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

import { styles } from './styles';
import { TProductQuantity } from '../../../interfaces/product';

interface ShoppingCartProps extends WithStyles<typeof styles> {
  cartItemsQuantity: TProductQuantity;
  cartProductsQuantity: TProductQuantity;
}

export const ShoppingCartBase: React.SFC<ShoppingCartProps> = ({cartItemsQuantity, cartProductsQuantity, classes}) => {

  const shoppingCart = (
    <ShoppingCartIcon className={ classes.icon }/>
  );

  const shoppingCartWithQuantity = (
    <Badge
      badgeContent={ cartItemsQuantity }
      color="primary"
      classes={ {badge: classes.badge} }
    >
      { shoppingCart }
    </Badge>
  );

  return (
    cartItemsQuantity ? shoppingCartWithQuantity : shoppingCart
  );
};

export const ShoppingCart = withStyles(styles)(ShoppingCartBase);
