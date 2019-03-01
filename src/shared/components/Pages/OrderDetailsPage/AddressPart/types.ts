import {WithStyles} from '@material-ui/core/styles/withStyles';
import {styles} from "./styles";

export interface IAddressPart {
  text: string | number | null;
  isBold?: boolean;
}

export interface IAddressPartRow {
  key: string;
  data: Array<IAddressPart>;
}

export interface IAddressPartProps extends WithStyles<typeof styles> {
  row: IAddressPartRow;
}
