import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import { ProductAvailability } from '../ProductAvailability';

import { styles } from './styles';
import {
  priceTypeNameOriginal,
  TPriceTypeDefaultGross,
  TPriceTypeOriginalGross,
  TProductName,
  TProductSKU,
} from 'src/shared/interfaces/product';
import {AppPrice} from "src/shared/components/Common/AppPrice/index";

interface ProductGeneralInfoProps extends WithStyles<typeof styles> {
  name: TProductName;
  sku: TProductSKU;
  price: TPriceTypeOriginalGross;
  oldPrice: TPriceTypeDefaultGross;
  availability: string;
}


export const ProductGeneralInfoBase: React.SFC<ProductGeneralInfoProps> = (props): JSX.Element => {
  const {classes, name = 'No name', price = 'No price', oldPrice, availability} = props;

  return (
    <div className={ classes.root }>
      <Typography component="h1" color="inherit" className={classes.title}>
        { name }
      </Typography>
      <div className={ classes.productInfo }>
        {(price || oldPrice)
          ? <div className={ classes.priceBlock }>
              <Typography component="span"  color="inherit" className={ classes.price }>
                <AppPrice value={price} isStylesInherited />
              </Typography>
              { oldPrice
                ? (
                  <Typography component="span" className={ classes.oldPrice }>
                    <AppPrice value={oldPrice} priceType={priceTypeNameOriginal} isStylesInherited/>
                  </Typography>
                ) : null
              }
              <Typography component="span" className={classes.vat}>(Inc. 20% VAT)</Typography>
            </div>
          : null
        }
        <ProductAvailability availability={ availability }/>
      </div>
    </div>
  );
};

export const ProductGeneralInfo = withStyles(styles)(ProductGeneralInfoBase);

