import * as React from 'react';
import { TAppCurrency } from '../../../reducers/Common/Init';
import { IOrderDetailsSelectedItems } from '../../../interfaces/order';

type TOrderDetailsContext = {
  selectItemHandler(event: any): any,
  currency: TAppCurrency,
  selectedItems: IOrderDetailsSelectedItems,
};

export const OrderDetailsContext = React.createContext<TOrderDetailsContext>({
  selectItemHandler: (event: any) => {
    throw new Error('selectItemHandler() is not implemented');
  },
  currency: null,
  selectedItems: {},
});
