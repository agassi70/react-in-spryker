// tslint:disable:max-file-line-count

import api, { setAuthToken } from '../api';
import { toast } from 'react-toastify';
import { RefreshTokenService } from '../Common/RefreshToken';
import { IWishlist, IWishlistItem } from 'src/shared/interfaces/wishlist';
import { ADD_WISHLIST } from 'src/shared/constants/ActionTypes/Pages/Wishlist';
import { wishlistAuthenticateErrorText } from 'src/shared/constants/messages/errors';
import {
  wishlistCreated,
  wishlistDeleted,
  wishlistAddProduct,
  wishlistRemoveItems,
} from 'src/shared/constants/messages/wishlist';
import { ApiServiceAbstract } from '../apiAbstractions/ApiServiceAbstract';
import * as cartActions from "src/shared/actions/Common/Cart";

interface IRequestBody {
  data: {
    type: string;
    include?: string;
    attributes: {};
  };
}


export class WishlistService extends ApiServiceAbstract {
  public static async getLists(ACTION_TYPE: string, dispatch: Function): Promise<void> {
    try {
      const token = await RefreshTokenService.getActualToken(dispatch);
      if (!token) {
        throw new Error(wishlistAuthenticateErrorText);
      }
      setAuthToken(token);
      const response: any = await api.get('wishlists', {}, {withCredentials: true});

      if (response.ok) {
        const wishlists: IWishlist[] = response.data.data.map((
          list: any
        ) => WishlistService.parseWishlistResponse(list));

        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
          wishlists,
        });
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch({
          type: ACTION_TYPE + '_REJECTED',
          error: errorMessage,
        });
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch({
        type: ACTION_TYPE + '_REJECTED',
        error: error.message,
      });
      toast.error('Unexpected Error: ' + error.message);
    }
  }

  public static async getWishlist(ACTION_TYPE: string, dispatch: Function, wishlistId: string): Promise<void> {
    try {
      const token = await RefreshTokenService.getActualToken(dispatch);
      setAuthToken(token);

      const response: any = await api.get(`wishlists/${wishlistId}`, {}, {withCredentials: true});

      if (response.ok) {
        let items: IWishlistItem[] = [];
        const wishlist: IWishlist = WishlistService.parseWishlistResponse(response.data.data);

        if (response.data.included) {
          items = WishlistService.parseWishlistItems(response.data.included);
        }

        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
          wishlist,
          items,
        });
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch({
          type: ACTION_TYPE + '_REJECTED',
          error: errorMessage,
        });
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch({
        type: ACTION_TYPE + '_REJECTED',
        error: error.message,
      });
      toast.error('Unexpected Error: ' + error.message);
    }
  }

  public static async addWishlist(ACTION_TYPE: string, dispatch: Function, name: string): Promise<string> {
    try {
      const token = await RefreshTokenService.getActualToken(dispatch);
      setAuthToken(token);

      const body: IRequestBody = {
        data: {
          type: 'wishlists',
          attributes: {name},
        },
      };

      const response: any = await api.post('wishlists', body, {withCredentials: true});

      if (response.ok) {
        toast.success(wishlistCreated);
        const parsedWishlist: IWishlist = WishlistService.parseWishlistResponse(response.data.data);
        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
          wishlist: parsedWishlist,
        });
        return parsedWishlist.id;
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch({
          type: ACTION_TYPE + '_REJECTED',
          error: errorMessage,
        });
        toast.error('Request Error: ' + errorMessage);
        return '';
      }

    } catch (error) {
      dispatch({
        type: ACTION_TYPE + '_REJECTED',
        error,
      });
      toast.error('Unexpected Error: ' + error.message);
      return '';
    }
  }

  public static async deleteWishlist(ACTION_TYPE: string, dispatch: Function, wishlistId: string): Promise<void> {
    try {
      const token = await RefreshTokenService.getActualToken(dispatch);
      setAuthToken(token);

      const response: any = await api.delete(`wishlists/${wishlistId}`, {}, {withCredentials: true});

      if (response.ok) {
        toast.success(wishlistDeleted);
        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
          wishlistId,
        });
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch({
          type: ACTION_TYPE + '_REJECTED',
          error: errorMessage,
        });
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch({
        type: ACTION_TYPE + '_REJECTED',
        error,
      });
      toast.error('Unexpected Error: ' + error.message);
    }
  }

  public static async updateWishlist(
    ACTION_TYPE: string, dispatch: Function, wishlistId: string, name: string
  ): Promise<void> {
    try {
      const token = await RefreshTokenService.getActualToken(dispatch);
      setAuthToken(token);

      const body: IRequestBody = {
        data: {
          type: 'wishlists',
          attributes: {name},
        },
      };

      const response: any = await api.patch(`wishlists/${wishlistId}`, body, {withCredentials: true});

      if (response.ok) {
        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
          data: WishlistService.parseWishlistResponse(response.data.data),
          wishlistId,
        });
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch({
          type: ACTION_TYPE + '_REJECTED',
          error: errorMessage,
        });
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch({
        type: ACTION_TYPE + '_REJECTED',
        error,
      });
      toast.error('Unexpected Error: ' + error.message);
    }
  }

  public static async addItemWishlist(
    ACTION_TYPE: string, dispatch: Function, wishlistId: string | null, sku: string
  ): Promise<void> {
    try {
      const token = await RefreshTokenService.getActualToken(dispatch);
      setAuthToken(token);
      let id: string | null = wishlistId;

      if (!wishlistId) {
        id = await WishlistService.addWishlist(ADD_WISHLIST, dispatch, 'My first wishlist');
      }

      if (!id) {
        throw new Error('Wishlist doesn`t created.');
      }

      const body: IRequestBody = {
        data: {
          type: 'wishlist-items',
          attributes: {sku},
        },
      };

      const response: any = await api.post(`wishlists/${id}/wishlist-items`, body, {withCredentials: true});

      if (response.ok) {
        const wishlistResponse: any = await api.get(`wishlists/${id}`, {include: ''}, {withCredentials: true});
        const wishlist: IWishlist = WishlistService.parseWishlistResponse(wishlistResponse.data.data);

        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
          wishlist,
        });
        toast.success(`${wishlistAddProduct} ${wishlist.name}.`);
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch({
          type: ACTION_TYPE + '_REJECTED',
          error: errorMessage,
        });
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch({
        type: ACTION_TYPE + '_REJECTED',
        error,
      });
      toast.error('Unexpected Error: ' + error.message);
    }
  }

  public static async deleteItemWishlist(
    ACTION_TYPE: string, dispatch: Function, wishlistId: string, sku: string
  ): Promise<void> {
    try {
      const token = await RefreshTokenService.getActualToken(dispatch);
      setAuthToken(token);

      const response: any = await api.delete(
        `wishlists/${wishlistId}/wishlist-items/${sku}`,
        {},
        {withCredentials: true}
      );

      if (response.ok) {
        toast.success(wishlistRemoveItems);
        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
          wishlistId,
          sku,
        });
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch({
          type: ACTION_TYPE + '_REJECTED',
          error: errorMessage,
        });
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch({
        type: ACTION_TYPE + '_REJECTED',
        error,
      });
      toast.error('Unexpected Error: ' + error.message);
    }
  }

  public static async removeMultiItems(dispatch: Function, wishlistId: string, productsList: string[]): Promise<void> {
    try {
      const token = await RefreshTokenService.getActualToken(dispatch);
      setAuthToken(token);

      for (const sku of productsList) {
        await api.delete(
          `wishlists/${wishlistId}/wishlist-items/${sku}`,
          {},
          {withCredentials: true}
        );
      }

      await WishlistService.getWishlist('DETAIL_WISHLIST', dispatch, wishlistId);
    } catch (err) {
      dispatch(cartActions.cartAddItemRejectedStateAction(err.message));
      toast.error('Unexpected Error: ' + err.message);
    }
  }

  private static parseWishlistResponse(data: any): IWishlist {
    const wishlist: IWishlist = {
      id: data.id,
      name: data.attributes.name,
      numberOfItems: data.attributes.numberOfItems || 0,
      createdAt: data.attributes.createdAt,
      updatedAt: data.attributes.updatedAt,
    };

    return wishlist;
  }

  private static parseWishlistItems(included: any[]): IWishlistItem[] {
    const items: {[key: string]: IWishlistItem} = {};

    included.forEach((row: any) => {
      if (!items[row.id]) {
        items[row.id] = {attributes: [], image: ''} as IWishlistItem;
      }

      if (row.type === 'concrete-product-image-sets') {
        if (
          row.attributes.imageSets &&
          row.attributes.imageSets.length &&
          row.attributes.imageSets[0].images &&
          row.attributes.imageSets[0].images.length
        ) {
          items[row.id].image = row.attributes.imageSets[0].images[0].externalUrlSmall;
        }
      } else {
        if (row.type === 'concrete-products') {
          items[row.id].sku = row.attributes.sku;
          items[row.id].name = row.attributes.name;
          Object.keys(row.attributes.attributes).forEach((attr: string) => {
            if (row.attributes.superAttributesDefinition.includes(attr)) {
              items[row.id].attributes.push({[attr]: row.attributes.attributes[attr]});
            }
          });
        } else {
          if (row.type === 'concrete-product-prices') {
            items[row.id].prices = row.attributes.prices;
          } else {
            if (row.type === 'concrete-product-availabilities') {
              items[row.id].availability = row.attributes.availability;
            }
          }
        }
      }
    });

    return Object.values(items);
  }
}
