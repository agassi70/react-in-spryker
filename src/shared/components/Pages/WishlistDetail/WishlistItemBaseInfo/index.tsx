import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from '../styles';
import { WishListRowsProps as Props } from './types';

const WishlistItemBaseInfoComponent: React.SFC<Props> = ({classes, productItem, renderProduct}) => (
  <div className={ classes.product }>
    <span className={ classes.wrapProductImage }>
      <img src={ productItem.image } height={ 42 } width={ 42 }/>
    </span>
    <div className={ classes.productDescription }>
      <span className={ classes.tableAction } onClick={ renderProduct(productItem.sku, productItem.name) }>
        { productItem.name }
      </span>
      <span className={ classes.attributes }>SKU: { productItem.sku }</span>
      { productItem.attributes.map((attr: any, idx: number) => (
        <span className={ classes.attributes } key={ `attr-${productItem.sku}-${idx}` }>
          { `${Object.keys(attr)[0].split('_').join(' ')}: ${Object.values(attr)[0]}` }
        </span>
      )) }
    </div>
  </div>
);

export const WishlistItemBaseInfo = withStyles(styles)(WishlistItemBaseInfoComponent);
