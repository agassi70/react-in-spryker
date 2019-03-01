// tslint:disable:max-file-line-count

import * as React from 'react';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider/Divider';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

import { ClickEvent } from 'src/shared/interfaces/common/react';
import { AppPrice } from 'src/shared/components/Common/AppPrice';
import { IProductPricesItem, priceTypeNameDefault, priceTypeNameOriginal } from 'src/shared/interfaces/product';
import { IWishlistItem } from 'src/shared/interfaces/wishlist';
import { createCartItemAddToCart } from 'src/shared/helpers/cart';
import { pathProductPageBase, pathWishListsPage } from 'src/shared/routes/contentRoutes';
import { AppPageTitle } from '../../Common/AppPageTitle';
import { AppTable } from '../../Common/AppTable';
import { WishlistItemBaseInfo } from './WishlistItemBaseInfo';
import { styles } from './styles';
import { WishlistPageProps as Props, WishlistPageState as State } from './types';
import { connect } from './connect';
import { ICellInfo, ITableRow } from "src/shared/components/Common/AppTable/types";


@connect
export class WishlistDetailBase extends React.Component<Props, State> {
  public state: State = {
    movedItem: '',
    multiProducts: [],
  };

  public componentDidUpdate(prevProps: Props, prevState: State) {
    const { cartItemsLength, cartId, wishlist } = this.props;
    if (prevState.movedItem && cartItemsLength > prevProps.cartItemsLength) {
      this.props.deleteItemAction(wishlist.id, prevState.movedItem);
      this.setState({ movedItem: '' });
    }

    if (prevState.multiProducts.length && cartItemsLength > prevProps.cartItemsLength) {
      this.props.deleteMultiItemsAction(wishlist.id, prevState.multiProducts);
      this.setState({ multiProducts: [] });
    }
  }

  public renderProduct = (sku: string, name: string) => (event: ClickEvent) => {
    event.persist();
    this.props.changeLocation(`${pathProductPageBase}/${sku.split('_')[0]}`);
  };

  public handleDeleteItem = (sku: string) => (event: ClickEvent) => {
    event.persist();
    this.props.deleteItemAction(this.props.wishlist.id, sku);
  };

  public moveToCart = (sku: string) => (event: ClickEvent) => {
    event.persist();
    this.setState(() => ({ movedItem: sku }));
    this.props.addItemToCartAction(createCartItemAddToCart(sku, 1), this.props.cartId);
  };

  public moveAllProductsToCart = (event: ClickEvent) => {
    event.persist();
    const { products, cartId, wishlist } = this.props;
    const availableProducts: string[] = products.filter(({availability}) => availability).map(({sku}) => sku);
    this.props.multiItemsCartAction(cartId, availableProducts);
    this.setState({ multiProducts: availableProducts });
  };

  public wishlistMenu = () => {
    const {classes, wishlist} = this.props;

    return (
      <MenuList className={ classes.menu }>
        <MenuItem className={ classes.menuItem }>
          <NavLink to={ pathWishListsPage } className={ classes.link }>Wishlist</NavLink>
        </MenuItem>
        {(wishlist && wishlist.name)
          ?  <MenuItem className={ classes.menuItem }>{wishlist.name}</MenuItem>
          : null
        }
      </MenuList>
    );
  };

  public render() {
    const {classes, products, isLoading, cartLoading, currency} = this.props;
    const tableAction = cartLoading ? classes.tableActionDisabled : classes.tableAction;

    if (!products.length && isLoading) {
      return null;
    }

    const headerCellPart = 'header-';
    const bodyCellPart = 'body-';
    const headerCells: Array<ICellInfo> = [
      {content: 'Product', id: `${headerCellPart}1`},
      {content: 'Price', id: `${headerCellPart}2`},
      {content: 'Availability', id: `${headerCellPart}3`},
      {content: '', id: `${headerCellPart}4`},
      {content: '', id: `${headerCellPart}5`},
    ];

    const bodyRows: Array<ITableRow> = products.map((item: IWishlistItem) => {
      const prices: {default: string, original: string} = {default: '', original: ''};

      item.prices.forEach((price: IProductPricesItem) => {
        if (price.priceTypeName.toLowerCase() === 'default') {
          prices.default = price.grossAmount + '';
        } else {
          if (price.priceTypeName.toLowerCase() === 'original') {
            prices.original = price.grossAmount + '';
          }
        }
      });

      return {
        id: item.sku,
        cells: [
          {
            content: (<WishlistItemBaseInfo productItem={item} renderProduct={this.renderProduct}/>),
            id: `${bodyCellPart}1`
          },
          {
            content: (
              <div className={ classes.vertical }>
                <AppPrice
                  value={ prices.original }
                  extraClassName={ classes.price }
                  currency={ currency }
                  priceType={ priceTypeNameOriginal }
                />
                <AppPrice
                  value={ prices.default }
                  extraClassName={ classes.price }
                  currency={ currency }
                  priceType={ priceTypeNameDefault }
                />
              </div>
            ),
            id: `${bodyCellPart}2`
          },
          {
            content: (
              <span className={ item.availability ? classes.available : classes.noAvailable }>
                { item.availability ? 'Available' : 'Not available' }
              </span>
            ),
            id: `${bodyCellPart}3`
          },
          {
            content: (
              <Typography component="span" className={ tableAction } onClick={ this.moveToCart(item.sku) }>
                Add to Cart
              </Typography>
            ),
            id: `${bodyCellPart}4`
          },
          {
            content: (
              <Typography component="span" className={ tableAction } onClick={ this.handleDeleteItem(item.sku) }>
                Remove
              </Typography>
            ),
            id: `${bodyCellPart}5`
          },
        ],
      };
    });

    return (
      <Grid container>
        <Grid item xs={ 12 }>
          <AppPageTitle
            classes={{root: classes.appPageTitleRoot, pageHeader: classes.appPageTitleRootPageHeader}}
            title="Wishlist"
          />
        </Grid>

        <Grid item xs={ 12 }>
          { this.wishlistMenu() }
          { bodyRows.length
            ? (
              <Paper elevation={ 0 }>
                <AppTable classes={{bodyCell: classes.bodyCell}} headerCells={headerCells} bodyRows={bodyRows}/>
                <Button
                  className={ classes.addAllBtn }
                  color="primary"
                  variant="contained"
                  onClick={ this.moveAllProductsToCart }
                  disabled={ isLoading || cartLoading }
                >
                  Add all available products to cart
                </Button>
              </Paper>
            ) : (
              <Paper elevation={ 0 }>
                <Divider/>
                <Typography paragraph className={classes.noItems}>Currently no items in your wishlist.</Typography>
              </Paper>
            )
          }
        </Grid>
      </Grid>
    );
  }
}

export const ConnectedWishlistDetailPage = withStyles(styles)(WishlistDetailBase);
export default ConnectedWishlistDetailPage;
