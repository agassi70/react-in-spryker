import { WithStyles } from '@material-ui/core';
import { styles } from './styles';
import {IOrderDetailsParsed} from "src/shared/interfaces/order/index";
import {TAppCurrency} from "src/shared/reducers/Common/Init";


export interface IOrderDetailsTotalsProps extends WithStyles<typeof styles> {
  currency: TAppCurrency;
  expenses: IOrderDetailsParsed["expenses"];
  totals: IOrderDetailsParsed["totals"];
}

