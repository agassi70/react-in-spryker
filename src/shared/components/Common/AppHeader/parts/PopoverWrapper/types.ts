import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';


export interface IPopoverWrapperProps extends WithStyles<typeof styles> {
  popoverPosLeft: number;
  popoverPosTop: number;
  anchorEl: HTMLElement | null;
  closePopoverHandler: () => void;
  extraContentClassName?: string;
  extraHelperClassName?: string;
}
