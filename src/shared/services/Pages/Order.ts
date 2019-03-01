import api, { setAuthToken } from '../api';
import { toast } from 'react-toastify';
import { RefreshTokenService } from '../Common/RefreshToken';
import {
  orderDetailsFulfilledStateAction,
  orderDetailsPendingStateAction,
  orderDetailsRejectedStateAction,
  ordersCollectionFulfilledStateAction,
  ordersCollectionPendingStateAction,
  ordersCollectionRejectedStateAction,
} from 'src/shared/actions/Pages/Order';
import { orderAuthenticateErrorText } from 'src/shared/constants/messages/errors';
import { parseGetOrderDetailsResponse, parseGetOrdersCollectionResponse } from 'src/shared/helpers/order/response';
import { TOrderId } from 'src/shared/interfaces/order';
import { ApiServiceAbstract } from 'src/shared/services/apiAbstractions/ApiServiceAbstract';

export class OrderService extends ApiServiceAbstract {

  // Get collection of orders
  public static async getOrdersCollection(dispatch: Function): Promise<void> {
    try {
      dispatch(ordersCollectionPendingStateAction());

      let response: any;
      const token = await RefreshTokenService.getActualToken(dispatch);
      if (!token) {
        throw new Error(orderAuthenticateErrorText);
      }
      setAuthToken(token);
      response = await api.get('orders', null, {withCredentials: true});

      if (response.ok) {
        const responseParsed = parseGetOrdersCollectionResponse(response.data);
        dispatch(ordersCollectionFulfilledStateAction(responseParsed));
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch(ordersCollectionRejectedStateAction(errorMessage));
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch(ordersCollectionRejectedStateAction(error.message));
      toast.error('Unexpected Error: ' + error.message);
    }
  }

  // Get order by reference
  public static async getOrderDetails(dispatch: Function, orderId: TOrderId): Promise<void> {
    try {
      dispatch(orderDetailsPendingStateAction());

      let response: any;
      const token = await RefreshTokenService.getActualToken(dispatch);
      if (!token) {
        throw new Error(orderAuthenticateErrorText);
      }
      setAuthToken(token);
      const endpoint = `orders/${orderId}`;
      response = await api.get(endpoint, null, {withCredentials: true});

      if (response.ok) {
        const responseParsed = parseGetOrderDetailsResponse(response.data.data);
        dispatch(orderDetailsFulfilledStateAction(responseParsed));
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch(orderDetailsRejectedStateAction(errorMessage));
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch(orderDetailsRejectedStateAction(error.message));
      toast.error('Unexpected Error: ' + error.message);
    }
  }
}
