import {WithStyles} from '@material-ui/core/styles/withStyles';
import {styles} from "./styles";
import {IAddressItemOrder} from "src/shared/interfaces/addresses/index";


export interface IOrderAddressesProps extends WithStyles<typeof styles> {
  billingAddress: IAddressItemOrder;
  shippingAddress: IAddressItemOrder;
  billingBlockTitle: string;
  shippingBlockTitle: string;
}
