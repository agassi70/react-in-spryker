import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import { pathCartPage, pathCheckoutPage } from 'src/shared/routes/contentRoutes';
import { AppPrice } from 'src/shared/components/Common/AppPrice';

import { ProductItem } from '../productItem';
import { CartDropProps as Props } from './types';
import { styles } from './styles';
import { connect } from './connect';
import {CartDiscountsTitle, CartTitle, CartTotalTitle} from "src/shared/constants/cart/index";
import {CheckoutTitle} from "src/shared/constants/checkout/index";
import {AppBtnLink} from "src/shared/components/Common/AppBtnLink/index";
import {AppBackdrop} from "src/shared/components/Common/AppBackdrop/index";

@connect
export class CartDropComponent extends React.PureComponent<Props> {
  private deleteFromCart = (cartItemId: string) => {
    const {cartDeleteItemAction, removeItemGuestCartAction, cartId, anonymId, isUserLoggedIn} = this.props;

    if (isUserLoggedIn) {
      cartDeleteItemAction(cartId, cartItemId);
    } else {
      removeItemGuestCartAction(cartId, cartItemId, anonymId);
    }
  };

  public render() {
    const {classes, cartItems, totals, isCartLoading} = this.props;

    return (
      <div className={ classes.cartDrop }>
        {isCartLoading ? <AppBackdrop isOpen /> : null}

        <Typography gutterBottom component="h3" className={classes.title}>
          {CartTitle}
        </Typography>

        <ul className={ classes.cartDropProductsList }>
          { cartItems.map(cartItem => (
            <li key={cartItem.sku}>
              <ProductItem productData={ cartItem } deleteItem={ this.deleteFromCart }/>
            </li>
          )) }
        </ul>

        <div className={ classes.cartTotalContainer }>
          { (totals.discountTotal && totals.discountTotal > 0)
            ? <div className={ classes.cartTotal }>
              <Typography component="h5" className={ classes.fontTotal }>
                {CartDiscountsTitle}
              </Typography>
              <AppPrice
                value={totals.discountTotal }
                isMinus
                extraClassName={ classes.fontTotal }
              />
            </div>
            : null
          }
          <div className={ classes.cartTotal }>
            <Typography component="h5" className={ classes.fontTotal }>
              {CartTotalTitle}
            </Typography>
            <AppPrice
              value={ totals.grandTotal }
              extraClassName={ classes.fontTotal }
            />
          </div>
        </div>

        <div className={ classes.cartBtns }>
          <AppBtnLink title={CartTitle} path={pathCartPage} extraClassName={classes.action} />
          <AppBtnLink title={CheckoutTitle} path={pathCheckoutPage} type="black" extraClassName={classes.action} />
        </div>
      </div>
    );
  }
}

export const CartDrop = withStyles(styles)(CartDropComponent);
