import * as React from 'react';
import { withRouter } from 'react-router';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';

import { ClickEvent } from 'src/shared/interfaces/common/react';
import { CartDrop } from './parts/cartDrop';
import { CartIcon } from './cart-icon';
import { CartProps as Props, CartState as State } from './types';
import { connect } from './connect';
import { styles } from './styles';
import { pathCartPage } from 'src/shared/routes/contentRoutes';
import { SprykerNotification } from 'src/shared/components/UI/SprykerNotification';
import {PopoverWrapper} from "src/shared/components/Common/AppHeader/parts/PopoverWrapper/index";

@(withRouter as any)
@connect
export class CartComponent extends React.PureComponent<Props, State> {
  public state: State = {
    anchorEl: null,
    isCartNotificationOpen: true,
  };

  public componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      this.closePopover();
    }

    if (this.props.cartProductsQuantity > prevProps.cartProductsQuantity) {
      this.handleOpenCartNotification();
    }

    if (this.props.cartProductsQuantity === 0 && prevProps.cartProductsQuantity > 0) {
      this.closePopover();
    }
  }

  private openPopover = ({currentTarget}: ClickEvent) => {
    const {cartItemsQuantity} = this.props;

    if (window.innerWidth < 500) {
      if (cartItemsQuantity !== 0) {
        this.props.history.push(pathCartPage);
      }
    } else {
      this.setState(() => ({anchorEl: cartItemsQuantity !== 0 ? currentTarget : null}));
    }
  };
  private closePopover = () => this.setState(() => ({anchorEl: null}));

  private handleCloseCartNotification = () => {
    this.setState(() => ({isCartNotificationOpen: false}));
  };

  private handleOpenCartNotification = () => {
    this.setState(() => ({isCartNotificationOpen: true}));
  };

  public render() {
    const {anchorEl, isCartNotificationOpen} = this.state;
    const {classes, cartItemsQuantity, popoverPosLeft, popoverPosTop} = this.props;
    const open = Boolean(anchorEl);

    const cartButton = (
      <IconButton aria-label="cart" onClick={ this.openPopover } color="inherit">
        <Badge
          badgeContent={ cartItemsQuantity }
          classes={ {
            colorPrimary: classes.badge,
            badge: cartItemsQuantity === 0 && classes.hideBadge,
          } }
          color="primary"
        >
          <CartIcon/>
        </Badge>
      </IconButton>
    );

    return (
      <div>
        { cartItemsQuantity === 0
          ? (<Tooltip disableFocusListener placement="top" title="Cart is empty">
              { cartButton }
            </Tooltip>)
          : cartButton
        }

        <PopoverWrapper
          popoverPosLeft={popoverPosLeft}
          popoverPosTop={popoverPosTop}
          anchorEl={anchorEl}
          closePopoverHandler={this.closePopover}
          extraContentClassName={classes.cartContent}
          extraHelperClassName={classes.popoverTriangle}
        >
          <CartDrop />
        </PopoverWrapper>

       {/* <SprykerNotification
          message="Your product was added to your cart"
          extraClasses={ classes.cartNotification }
          isOpen={ isCartNotificationOpen }
          onClickClose={ this.handleCloseCartNotification }
          onClickOpen={ this.handleOpenCartNotification }
          vertical="top"
          horizontal="right"
        />*/}
      </div>
    );
  }
}

export const Cart = withStyles(styles)(CartComponent);
