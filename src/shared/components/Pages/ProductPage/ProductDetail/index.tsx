import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {styles} from './styles';
import {IProductDetailProps} from "./types";
import {ProductAttributes} from "src/shared/components/Pages/ProductPage/ProductAttributes";
import {ProductBlockTitleDescription, ProductSKUTitle} from "src/shared/constants/product";
import Typography from '@material-ui/core/Typography';


export const ProductDetailBase: React.SFC<IProductDetailProps> = (props) => {
  const {
    classes,
    attributes,
    attributeNames,
    description,
    sku,
  } = props;

  return (
    <div className={classes.contentHelper}>
      <Grid container className={classes.contentContainer}>
        <Grid item xs={12} sm={6} className={classes.productDetailsBlock }>
          <ProductAttributes attributes={attributes} attributeNames={attributeNames} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.descriptionBlock}>
          <Typography component="h3" color="inherit" className={ classes.descriptionTitle}>
            {ProductBlockTitleDescription}
          </Typography>
          <Typography color="inherit" variant="body2" component="p" gutterBottom={true}>
            {description}
          </Typography>
          <Typography
            variant="subheading"
            color="inherit"
            gutterBottom={true}
            className={classes.descriptionSku }
          >
            {ProductSKUTitle}: {sku}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export const ProductDetail = withStyles(styles)(ProductDetailBase);
