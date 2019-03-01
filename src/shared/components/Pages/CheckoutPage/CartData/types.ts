import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";
import { ICartItem, ICartTotals } from "src/shared/interfaces/cart";
import { ClickEvent } from 'src/shared/interfaces/common/react';

export interface CartDataProps extends WithStyles<typeof styles> {
  products: Array<ICartItem>;
  totals: ICartTotals;
  isSendBtnDisabled: boolean;
  sendData: (event: ClickEvent) => void;
  order: string;
}

export interface CartDataState {
  heightListItem: number;
}
