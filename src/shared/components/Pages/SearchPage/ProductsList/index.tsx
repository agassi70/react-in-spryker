import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import { styles } from './styles';
import { IProductCard, IProductLabel } from 'src/shared/interfaces/product';
import { sprykerTheme } from 'src/shared/theme/sprykerTheme';
import { ProductCard } from 'src/shared/components/Common/ProductCard';
import { AppPageHeadline } from 'src/shared/components/Common/AppPageHeadline';
import { getProductLabel } from 'src/shared/helpers/product/label';
import { IProductsListProps } from 'src/shared/components/Pages/SearchPage/ProductsList/types';


const emptyTitle = 'Nothing to show.';
const loadingTitle = 'Waiting for results';

export const ProductsListBase: React.SFC<IProductsListProps> = (props) => {
  const {
    classes,
    products,
    selectProductHandler,
    currency,
    isLoading,
    productsLabeled,
    availableLabels,
  } = props;

  const isProductsExist = (Array.isArray(products) && products.length);

  return (
    <Grid container spacing={ sprykerTheme.appFixedDimensions.gridSpacing } className={ classes.root }>
      { isProductsExist
        ? products.map((product: IProductCard) => {
          let label: IProductLabel | null = null;
          if (productsLabeled) {
            const labelsIdArr = productsLabeled[product.abstractSku] || null;
            label = getProductLabel(labelsIdArr, availableLabels);
          }

          return (
            <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ product.abstractSku }>
              <ProductCard
                currency={ currency }
                images={ product.images }
                price={ product.price }
                prices={ product.prices }
                name={ product.abstractName }
                sku={ product.abstractSku }
                onSelectProduct={ selectProductHandler }
                label={ label }
              />
            </Grid>
          );
        })
        : <Grid item xs>
          <AppPageHeadline title={ isLoading ? loadingTitle : emptyTitle }/>
        </Grid>
      }
    </Grid>
  );
};

export const ProductsList = withStyles(styles)(ProductsListBase);
