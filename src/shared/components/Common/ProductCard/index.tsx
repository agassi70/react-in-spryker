import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {
  IProductCard,
  IProductLabel,
  IProductPricesItem,
  priceTypeNameDefault,
  priceTypeNameOriginal,
  TProductCurrency,
  TProductName,
  TProductSKU,
} from '../../../interfaces/product';
import { styles } from './styles';
import { AppPrice } from '../AppPrice';
import { ProductLabel } from 'src/shared/components/Common/ProductLabel';
import { getOneProductImage } from 'src/shared/helpers/product/imageSetsParser';
import { ClickEvent } from "src/shared/interfaces/common/react";

interface ProductCardProps extends WithStyles<typeof styles>, IProductCard {
  onSelectProduct: Function;
  currency: TProductCurrency;
  name: TProductName;
  sku: TProductSKU;
  label: IProductLabel | null;
}

export const ProductCardBase: React.SFC<ProductCardProps> = (props) => {
  const {classes, images, name = 'No name', prices, sku, label} = props;

  let actualPriceGross = 0;
  let actualPriceNet = 0;
  let oldPriceGross = 0;
  let oldPriceNet = 0;

  if (prices && prices.length > 0) {
    prices.forEach((data: IProductPricesItem) => {
      if (data.priceTypeName === priceTypeNameDefault) {
        actualPriceGross = data.grossAmount;
        actualPriceNet = data.netAmount;
      }
      if (data.priceTypeName === priceTypeNameOriginal) {
        oldPriceGross = data.grossAmount;
        oldPriceNet = data.netAmount;
      }
    });
  }

  const image = getOneProductImage(images);

  const handleProductClick = (e: ClickEvent) => {
    e.preventDefault();
    props.onSelectProduct(sku);
  };

  return (
    <Card className={ classes.card } raised={ true }>
      <CardActionArea onClick={ handleProductClick } className={ classes.actionArea }>
        { image
          ? <CardMedia
            component="img"
            className={ classes.media }
            image={ image }
            title={ name }
          />
          : null
        }
        <ProductLabel label={ label }/>
        <div className={ classes.actionAreaOverlay }></div>
      </CardActionArea>
      <CardContent className={ classes.cardContent }>
        <Typography gutterBottom component="h2" className={ classes.productName } data-type="productName">
          { name }
        </Typography>
        <div className={ classes.productPrice }>
          <Typography
            component="span"
            color="textPrimary"
            data-type="priceToShow"
            className={ classes.productCurrentPrice }
          >
            <AppPrice value={ actualPriceGross }/>
          </Typography>
          {oldPriceGross
            ?  <Typography
                component="span"
                color="textPrimary"
                className={ classes.productOldPrice }
                >
                  <AppPrice value={ oldPriceGross } priceType={ priceTypeNameOriginal }/>
                </Typography>
            : null
          }
        </div>
      </CardContent>
    </Card>
  );
};

export const ProductCard = withStyles(styles)(ProductCardBase);
