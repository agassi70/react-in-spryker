// tslint:disable:max-file-line-count

import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { toast } from 'react-toastify';

import {
  concreteProductType,
  defaultItemValueDropdown,
  IProductCardImages,
  IProductPropFullData,
} from 'src/shared/interfaces/product';
import { IImageSlide } from 'src/shared/components/Common/ImageSlider';
import {
  createPathToIdProductConcrete,
  findIdProductConcreteByPath,
  getAvailabilityDisplay,
  getInitialSuperAttrSelected,
  getCurrentProductDataObject,
} from 'src/shared/helpers/product';
import { TWishListName } from 'src/shared/interfaces/wishlist';
import { ICartAddItem } from 'src/shared/interfaces/cart';
import {ClickEvent} from 'src/shared/interfaces/common/react';
import { createCartItemAddToCart } from 'src/shared/helpers/cart';
import { AppMain } from '../../Common/AppMain';
import { ImageSlider } from '../../Common/ImageSlider';
import { SprykerButton } from '../../UI/SprykerButton';
import { ProductGeneralInfo } from './ProductGeneralInfo';
import { ProductSuperAttribute } from './ProductSuperAttribute';
import { connect } from './connect';
import { ProductPageProps as Props, ProductPageState as State } from './types';
import { styles } from './styles';
import {IFormSettings} from "src/shared/components/UI/SprykerForm/types";
import {SprykerForm} from "src/shared/components/UI/SprykerForm/index";
import {ChangeEvent} from "react";
import {getQuantityFormSettings, getWishListFormSettings} from "src/shared/components/Pages/ProductPage/settings/forms";
import {ProductDetail} from "src/shared/components/Pages/ProductPage/ProductDetail/index";
import {AddToCartBtnTitle, AddToWishlistBtnTitle} from "src/shared/constants/buttons/index";


const quantitySelectedInitial = 1;

@connect
export class ProductPageBase extends React.Component<Props, State> {

  public state: State = {
    attributeMap: null,
    superAttrSelected: {},
    quantitySelected: quantitySelectedInitial,
    superAttributes: null,
    productType: null,
    sku: null,
    name: null,
    images: null,
    availability: null,
    description: null,
    price: null,
    prices: null,
    priceOriginalGross: null,
    priceOriginalNet: null,
    priceDefaultGross: null,
    priceDefaultNet: null,
    attributes: null,
    attributeNames: null,
    quantity: null,
    wishListSelected: null,
    isBuyBtnDisabled: false,
    isProcessCartLoading: false,
  };

  // Component lifecycle methods

  public componentDidMount() {
    if (this.props.product) {
      this.setInitialData();
    } else {
      if (!this.props.isLoading && this.props.isAppDataSet) {
        this.props.getProductData(this.props.locationProductSKU);
      }
    }
  }

  public componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.props.isRejected || this.props.isLoading || !this.props.isAppDataSet) {
      return;
    }

    // First load of the App
    // tslint:disable:max-line-length
    if (!this.props.isFulfilled
        && (!prevProps.product || prevProps.product.abstractProduct.sku !== this.props.locationProductSKU)
    ) {
      this.props.getProductData(this.props.locationProductSKU);
      return;
    }

    // Update of the product
    if (this.props.product.abstractProduct.sku !== this.props.locationProductSKU) {
      this.props.getProductData(this.props.locationProductSKU);
      return;
    }

    if (!prevProps.product || prevProps.product.abstractProduct.sku !== this.props.locationProductSKU) {
      this.setInitialData();
    }

    this.setInitialWishList();
    this.initRequestWishListsData();
    this.checkBuyBtnStatus();
  }

  // Action handlers

  public handleSuperAttributesChange = ({name, value}: {name: string, value: string}): void => {
    let productData: IProductPropFullData | null;

    if (value === defaultItemValueDropdown) {
      // If selected nothing
      productData = getCurrentProductDataObject(
        this.props.product.abstractProduct,
        null
      );
    } else {
      // If selected a concrete product
      const idProductConcrete = this.getIdProductConcrete(name, value);

      if (!idProductConcrete) {
        // Such product does not exist
        productData = getCurrentProductDataObject(this.props.product.abstractProduct, null);
      } else {
        // Such product exists
        productData = getCurrentProductDataObject(
          this.props.product.abstractProduct,
          this.props.product.concreteProducts[idProductConcrete],
        );
      }
    }

    this.setState((prevState: State) => {
      if (prevState.superAttrSelected[name] === value) {
        return;
      }
      return ({
        ...prevState,
        superAttrSelected: {
          ...prevState.superAttrSelected,
          [name]: value,
        },
        quantitySelected: quantitySelectedInitial,
        ...productData,
      });
    });
  };

  public handleProductQuantityChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>)
    : void => {

    const valueParsed: number = Number.parseInt(event.target.value, 10);
    this.setState((prevState: State) => {
      if (prevState.quantitySelected === valueParsed) {
        return;
      }
      return ({
        ...prevState,
        quantitySelected: valueParsed,
      });
    });
  };

  public handleWishListChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>)
    : void => {

    const value = event.target.value;
    this.setState((prevState: State) => {
      if (this.state.wishListSelected === value) {
        return;
      }
      return ({
        ...prevState,
        wishListSelected: value,
      });
    });
  };

  public handleBuyBtnClick = (event: ClickEvent): void => {
    const result = this.runProcessCart();
  };

  private runProcessCart = async (): Promise<any> => {
    try {
      await this.setState((prevState: State) => {
        return ({
          isBuyBtnDisabled: true,
          isProcessCartLoading: true,
        });
      });
      await this.runAddToCart();
     // await this.props.getProductAvailability(this.state.sku);
      await this.setState((prevState: State) => {
        return ({
          ...prevState,
          quantity: this.props.product.concreteProducts[this.state.sku].quantity,
          availability: this.props.product.concreteProducts[this.state.sku].availability,
          quantitySelected: quantitySelectedInitial,
          isBuyBtnDisabled: false,
          isProcessCartLoading: false,
        });
      });
    } catch(error) {
      toast.error('Error occurs during the adding product to the cart ');
    }
  };

  private runAddToCart = async (): Promise<any> => {
    const item: ICartAddItem = createCartItemAddToCart(this.state.sku, this.state.quantitySelected);
    let result;
    if (this.props.isUserLoggedIn && this.props.cartId) {
      result = await this.props.addItemToCart(
        item,
        this.props.cartId,
      );
    } else {
      if (this.props.isUserLoggedIn) {
        result = await this.props.createCartAndAddItem(this.props.payloadForCreateCart, item);
      } else {
        result = await this.props.addItemGuestCart(item, this.props.anonymId);
      }
    }
    return result;
  };

  private initRequestWishListsData = (): boolean => {
    if (this.props.product
      && this.props.isUserLoggedIn
      && !this.props.isWishListLoading
      && !this.props.isWishListsFetched
    ) {
      this.props.getWishLists();
      return true;
    }
    return false;
  };

  private setInitialWishList = (): boolean => {
    if (this.state.wishListSelected) {
      return false;
    }
    const wishListSelected = this.getFirstWishList();
    if (!wishListSelected) {
      return false;
    }
    this.setState((prevState: State) => {
      if (prevState.wishListSelected === wishListSelected) {
        return;
      }
      return ({
        ...prevState,
        wishListSelected,
      });
    });
    return true;
  };

  private setInitialData = (): boolean => {
    const concreteProductsIds = Object.keys(this.props.product.concreteProducts);
    const isOneConcreteProduct = Boolean(concreteProductsIds.length === 1);
    const productData: IProductPropFullData | null = getCurrentProductDataObject(
      this.props.product.abstractProduct,
      isOneConcreteProduct
        ? this.props.product.concreteProducts[concreteProductsIds[0]]
        : getCurrentProductDataObject(this.props.product.abstractProduct, null),
    );

    // Parsing superAttributes to set initial data for this.state.superAttrSelected
    const selectedAttrNames = getInitialSuperAttrSelected(this.props.product.superAttributes);

    this.setState((prevState: State) => ({
      ...prevState,
      superAttributes: this.props.product.superAttributes,
      attributeMap: this.props.product.attributeMap,
      superAttrSelected: selectedAttrNames,
      ...productData,
    }));

    return true;
  };

  private getFirstWishList = (): TWishListName | null => {
    if (!this.props.isWishListsFetched) {
      return null;
    }
    return (this.props.wishLists.length > 0) ? this.props.wishLists[0].id : null;
  };

  private getIdProductConcrete = (key: string, value: string) => {
    const selected = {...this.state.superAttrSelected};
    selected[key] = value;
    const path = createPathToIdProductConcrete(selected);
    if (!path) {
      return false;
    }

    return findIdProductConcreteByPath(path, this.state.attributeMap.attribute_variants);
  };

  private getImageData = (images: Array<IProductCardImages>): Array<IImageSlide> | null => images
    ? images.map((element: IProductCardImages, index: number) => ({
      id: index,
      src: element.externalUrlLarge,
    })) : null;

  private canShowQuantity = () => {
    return Boolean(this.state.productType === concreteProductType && this.state.availability);
  };

  private checkBuyBtnStatus = () => {
    if (this.state.isProcessCartLoading) {
      return;
    }
    if (this.state.isBuyBtnDisabled && this.canShowQuantity()) {
      this.setState((prevState: State) => {
        return ({
          isBuyBtnDisabled: false,
        });
      });
    } else if (!this.state.isBuyBtnDisabled && !this.canShowQuantity()) {
      this.setState((prevState: State) => {
        return ({
          isBuyBtnDisabled: true,
        });
      });
    }
  };

  private handleAddToWishlist = (event: ClickEvent) => {
    this.props.addToWishlist(this.state.wishListSelected, this.state.sku);
  };

  private isAddToWishListBtnDisabled = () => {
    return !this.props.isWishListsFetched || this.state.productType !== concreteProductType;
  };

  public render(): JSX.Element {
    const {classes} = this.props;
    const images = this.getImageData(this.state.images);

    const formQuantitySettings: IFormSettings = getQuantityFormSettings(
      {
        inputValue: this.state.quantitySelected,
        quantity: this.state.quantity,
        onChangeHandler: this.handleProductQuantityChange,
        controlsGroupClassName: classes.controlsGroupQuantity,
      }
    );
    const formWishListSettings: IFormSettings = getWishListFormSettings(
      {
        inputValue: this.state.wishListSelected,
        wishLists: this.props.wishLists,
        onChangeHandler: this.handleWishListChange,
      }
    );

    return (
      <AppMain>
        { (!this.props.product || !this.state.productType || !this.props.isAppDataSet || this.props.isRejected)
          ? null
          : (
            <div className={ classes.root }>
              <Grid container justify="center" className={ classes.productMain }>
                <Grid item xs={ 12 } sm={ 12 } md={ 7 } className={ classes.sliderParent }>
                  <div className={ classes.sliderParentContainer }>
                    <ImageSlider
                      images={ images }
                      uniqueKey={ this.state.sku }
                      showThumbs={ false }
                      showStatus={ false }
                    />
                  </div>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 5 } className={classes.generalInfoParent} >
                  <div className={classes.infoParent}>
                    <ProductGeneralInfo
                      name={ this.state.name }
                      sku={ this.state.sku }
                      price={this.state.priceDefaultGross}
                      oldPrice={this.state.priceOriginalGross ? this.state.priceOriginalGross : null}
                      availability={ getAvailabilityDisplay(this.state.availability) }
                    />

                    { this.state.superAttributes
                      ? <ProductSuperAttribute
                        productData={ this.state.superAttributes }
                        onChange={ this.handleSuperAttributesChange }
                      />
                      : null
                    }

                    <Grid container>
                      { this.canShowQuantity()
                        ? <Grid item xs={12} md={ 12 } className={classes.blockControl}>
                            <SprykerForm
                              form={formQuantitySettings}
                              formClassName={classes.formQuantity}
                            />
                          </Grid>
                        : null
                      }
                      <Grid item xs={ 12 } md={ 12 } className={ classes.buyBtnParent }>
                        <SprykerButton
                          title={ AddToCartBtnTitle }
                          extraClasses={ classes.buyBtn }
                          onClick={ this.handleBuyBtnClick }
                          disabled={ this.state.isBuyBtnDisabled }
                        />
                      </Grid>
                    </Grid>

                    { this.props.isUserLoggedIn
                      ? (<Grid container spacing={24} className={ classes.wishlistBtnArea }>
                          { this.state.wishListSelected
                            ?
                            <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                              <SprykerForm
                                form={formWishListSettings}
                                formClassName={classes.formWishList}
                              />
                            </Grid>
                            : null
                          }
                          <Grid item
                                xs={ 12 }
                                md={ this.state.wishListSelected ? 6 : 12 }
                                className={ classes.buyBtnParent }
                          >
                            <SprykerButton
                              title={ AddToWishlistBtnTitle }
                              extraClasses={ classes.wishListBtn }
                              onClick={ this.handleAddToWishlist }
                              disabled={ this.isAddToWishListBtnDisabled() }
                            />
                          </Grid>
                        </Grid>
                      )
                      : null
                    }
                  </div>
                </Grid>
              </Grid>
              <ProductDetail
                attributes={this.state.attributes}
                attributeNames={this.state.attributeNames}
                description={this.state.description}
                sku={this.state.sku ? this.state.sku : this.props.product.abstractProduct.sku}
              />
            </div>
          )
        }
      </AppMain>
    );
  }
}

export const ProductPage = withStyles(styles)(ProductPageBase);
export default ProductPage;
