import { WithStyles } from '@material-ui/core';
import {styles} from './styles';
import {IOrderDetailsParsed} from "src/shared/interfaces/order/index";
import {TAppTimeZone} from "src/shared/reducers/Common/Init";


export interface IOrderDateProps extends WithStyles<typeof styles> {
  date: IOrderDetailsParsed["dateCreated"];
  timeZone: TAppTimeZone;
  title: string;
}

