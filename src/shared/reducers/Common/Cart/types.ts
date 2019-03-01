import { ICartDataResponse } from 'src/shared/interfaces/cart';
import { IReduxState } from 'src/typings/app';


export interface ICartData extends ICartDataResponse {
  cartCreated: boolean;
}

export interface ICartState extends IReduxState {
  data: ICartData;
}
