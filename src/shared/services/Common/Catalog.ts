import api from '../api';
import { toast } from 'react-toastify';
import { parseCatalogSearchResponse } from 'src/shared/helpers/catalog/catalogSearchResponse';
import { ApiServiceAbstract } from '../apiAbstractions/ApiServiceAbstract';
import { IProductCard } from 'src/shared/interfaces/product';
import { ISearchQuery } from 'src/shared/interfaces/searchPageData';

export class CatalogService extends ApiServiceAbstract {
  public static async catalogSearch(ACTION_TYPE: string, dispatch: Function, params: ISearchQuery): Promise<void> {
    try {

      params.include = 'abstract-products,product-labels,';

      let response: any;
      response = await api.get('catalog-search', params, {withCredentials: true});

      if (response.ok) {
        const responseParsed = parseCatalogSearchResponse(response.data);
        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
          ...responseParsed,
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

  public static async catalogSuggestion(ACTION_TYPE: string, dispatch: Function, query: string): Promise<void> {
    try {

      const response: any = await api.get(
        'catalog-search-suggestions',
        {q: query, include: 'abstract-products,abstract-product-prices'},
        {withCredentials: true},
      );

      if (response.ok) {
        const {data}: any = response;

        const products: IProductCard[] = data.data[0].attributes.abstractProducts.slice(0, 4);
        let counter = 0;

        data.included && data.included.some((row: any) => {
          if (row.type === 'abstract-product-prices') {
            const product: IProductCard = products.find((prod: IProductCard) => prod.abstractSku === row.id);
            if (product && row.attributes.prices && row.attributes.prices.length) {
              counter++;
              product.prices = row.attributes.prices;
            }
          }

          return counter >= 4;
        });

        dispatch({
          type: ACTION_TYPE + '_FULFILLED',
          products,
          categories: data.data[0].attributes.categories,
          searchTerm: query,
          currency: data.data[0].attributes.currency || '',
          completion: data.data[0].attributes.completion,
        });
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch({
          type: ACTION_TYPE + '_REJECTED',
          error: errorMessage,
        });
        toast.error('Request Error: ' + errorMessage);
        return null;
      }

    } catch (error) {
      dispatch({
        type: ACTION_TYPE + '_REJECTED',
        error: error.message,
      });
      toast.error('Unexpected Error: ' + error.message);
    }
  }
}
