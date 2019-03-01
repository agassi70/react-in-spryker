import { RouteProps } from 'react-router';
import { WithStyles } from '@material-ui/core';
import { styles } from './styles';
import {
  IProductAttributeMap,
  IProductAttributes,
  IProductDataParsed,
  IProductPropFullData,
  ISuperAttributes,
  TProductQuantity,
} from 'src/shared/interfaces/product';
import { TAppPriceMode, TAppStore } from 'src/shared/reducers/Common/Init';
import { TCartId } from 'src/shared/interfaces/cart';
import { ICartCreatePayload } from 'src/shared/services/Common/Cart/types';
import { TRouterMatchParam } from 'src/shared/selectors/Common/router';
import { IWishlist, TWishListName } from 'src/shared/interfaces/wishlist';

export interface ProductPageProps extends WithStyles<typeof styles>, RouteProps {
  product: IProductDataParsed | null;
  isAppDataSet: boolean;
  isUserLoggedIn: boolean;
  appPriceMode: TAppPriceMode;
  appStore: TAppStore;
  addItemToCart: Function;
  addItemGuestCart: Function;
  getProductData: Function;
  getWishLists: Function;
  addToWishlist: Function;
  createCartAndAddItem: Function;
  cartCreated: boolean;
  cartId: TCartId;
  payloadForCreateCart: ICartCreatePayload;
  isLoading: boolean;
  isRejected: boolean;
  isFulfilled: boolean;
  isInitiated: boolean;
  locationProductSKU?: TRouterMatchParam;
  isWishListsFetched: boolean;
  wishLists: Array<IWishlist>;
  isProductExist: boolean;
  isWishListLoading: boolean;
  anonymId: string;
  getProductAvailability: Function;
}

export interface ProductPageState extends IProductPropFullData, ISuperAttributes {
  attributeMap: IProductAttributeMap | null;
  superAttrSelected: IProductAttributes;
  quantitySelected: TProductQuantity;
  wishListSelected: TWishListName | null;
  isBuyBtnDisabled: boolean;
  isProcessCartLoading: boolean;
}
