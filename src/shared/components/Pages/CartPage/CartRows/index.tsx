import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem/ListItem';
import IconButton from '@material-ui/core/IconButton/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField/TextField';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { AppPrice } from 'src/shared/components/Common/AppPrice';
import { SquareImage } from 'src/shared/components/Common/SquareImage';
import { ICartItem } from 'src/shared/interfaces/cart';
import { styles } from '../styles';
import { CartRowsProps as Props } from './types';

export const CartRowsComponent: React.SFC<Props> = (
  {classes, items, heightListItem, handleDeleteItem, handleChangeQty},
) => (
  <>
    { items.map((item: ICartItem) => {
      const quantities: number[] = [];
      const maxItems = item.availableQuantity < 10 ? item.availableQuantity : 10;

      for (let i = 0; i <= maxItems; i++) {
        quantities.push(i);
      }

      return (
        <ListItem
          key={ item.sku }
          disableGutters
          divider
          className={ classes.listItem }
        >
          <SquareImage
            image={ item.image }
            size={ heightListItem }
            alt={ item.name }
          />
          <div className={ classes.itemWrapper }>
            <div className={ classes.itemName }>{ item.name }</div>
            { item.superAttributes
              ? item.superAttributes.map((attr: {[key: string]: string}, idx: number) => (
                <div key={ `${item.sku}-attr-${idx}` } className={ `${classes.itemAttr} ${classes.textCapitalize}` }>
                  <span>{ Object.keys(attr)[0].split('_').join(' ') }</span>
                  <span style={ {marginRight: '5px'} }>:</span>
                  <span>{ Object.values(attr)[0] }</span>
                </div>
              ))
              : null
            }
            <div>
              <span className={ `${classes.itemAttr} ${classes.remove}` }>remove</span>
              <IconButton onClick={ () => handleDeleteItem(item.sku) }>
                <DeleteIcon/>
              </IconButton>
            </div>
          </div>

          <form
            noValidate
            autoComplete="off"
            className={ classes.quantityForm }
          >
            <TextField
              required
              select
              name={ item.sku }
              value={ item.quantity }
              onChange={ handleChangeQty }
              variant="outlined"
              SelectProps={ {
                SelectDisplayProps: {className: classes.select},
              } }
            >
              { quantities.map((i: number) => (
                <MenuItem
                  value={ i }
                  key={ `qty-${item.sku}-${i}` }
                >{ i }</MenuItem>
              )) }
            </TextField>
          </form>

          <div className={ classes.priceWrapper }>
            <div className={ classes.sumWrapper }>
              <AppPrice value={ item.calculations.sumPriceToPayAggregation } extraClassName={ classes.mainCurrency }/>
            </div>
            { item.quantity > 1
              ? (
                <div className={ classes.itemAttr }>
                  <span>(</span>
                  <AppPrice
                    value={ item.calculations.unitPriceToPayAggregation }
                    extraClassName={ `${classes.itemAttr} ${classes.eachCurrency}` }
                  />
                  <span> each)</span>
                </div>
              ) : null
            }
          </div>
        </ListItem>
      );
    }) }
  </>
);

export const CartRows = withStyles(styles)(CartRowsComponent);
