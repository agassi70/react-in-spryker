import { WithStyles } from '@material-ui/core/styles/withStyles';
import {formStyles} from "./styles";


export interface ICheckoutFormsProps extends WithStyles<typeof formStyles> {
  panels: {
    first: IPanelData;
    second: IPanelData;
    third: IPanelData;
    fourth: IPanelData;
  };
}

export interface IPanelData {
  title: string;
  isDisabled: boolean;
}
