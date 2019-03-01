import api from '../api';
import { toast } from 'react-toastify';
import { parseProductResponse } from 'src/shared/helpers/product';
import {
  getProductAvailabilityFulfilledStateAction,
  getProductAvailabilityPendingStateAction,
  getProductAvailabilityRejectedStateAction,
  getProductDataFulfilledStateAction,
  getProductDataItemPendingStateAction,
  getProductDataRejectedStateAction,
} from 'src/shared/actions/Pages/Product';
import { ApiServiceAbstract } from 'src/shared/services/apiAbstractions/ApiServiceAbstract';
import {IConcreteProductAvailability, TProductSKU} from "src/shared/interfaces/product/index";
import {parseProductAvailabilityResponse} from "src/shared/helpers/product/productResponse";


export class ProductService extends ApiServiceAbstract {
  public static async getAbstractData(dispatch: Function, sku: string): Promise<void> {
    try {
      dispatch(getProductDataItemPendingStateAction());
      let response: any;
      response = await api.get(`abstract-products/${sku}`, {
        include: 'abstract-product-image-sets,' +
        'abstract-product-prices,' +
        'abstract-product-availabilities,' +
        'concrete-products,' +
        'concrete-product-image-sets,' +
        'concrete-product-prices,' +
        'concrete-product-availabilities',
      });

      if (response.ok) {
        const responseParsed: any = parseProductResponse(response.data);
        dispatch(getProductDataFulfilledStateAction(responseParsed));
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch(getProductDataRejectedStateAction(errorMessage));
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch(getProductDataRejectedStateAction(error.message));
      toast.error('Unexpected Error: ' + error);
    }
  }

  public static async getConcreteProductAvailability(dispatch: Function, sku: TProductSKU): Promise<any> {
    try {
      dispatch(getProductAvailabilityPendingStateAction());
      let response: any;
      response = await api.get(`concrete-products/${sku}/concrete-product-availabilities`);

      if (response.ok) {
        const responseParsed: null | IConcreteProductAvailability = parseProductAvailabilityResponse(response.data);
        dispatch(getProductAvailabilityFulfilledStateAction(responseParsed));
        return responseParsed;
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch(getProductAvailabilityRejectedStateAction(errorMessage));
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch(getProductAvailabilityRejectedStateAction(error.message));
      toast.error('Unexpected Error: ' + error);
    }
  }
}
