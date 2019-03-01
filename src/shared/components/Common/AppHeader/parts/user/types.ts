import { WithStyles } from '@material-ui/core/styles/withStyles';
import { WithRouter } from 'src/shared/interfaces/common/react';
import { styles } from './styles';


export interface UserProps extends WithStyles<typeof styles>, WithRouter {
  // connect
  isUserLoggedIn?: boolean;
  popoverPosLeft: number;
  popoverPosTop: number;
}

export interface UserState {
  anchorEl: HTMLElement | null;
}

export interface UserDropProps extends WithStyles<typeof styles>, WithRouter {
  // connect
  isUserLoggedIn?: boolean;
  logout?(): void;
  closePopoverHandler: () => void;
}
