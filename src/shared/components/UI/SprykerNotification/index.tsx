import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import {ClickEvent} from 'src/shared/interfaces/common/react';
import { styles } from './styles';


interface SprykerNotificationProps extends WithStyles<typeof styles>, SnackbarOrigin {
  message: string;
  onClickClose: (event: ClickEvent, reason?: string) => void;
  onClickOpen: Function;
  extraClasses?: string;
  isOpen?: boolean;
}

export const SprykerNotificationBase: React.SFC<SprykerNotificationProps> = (props) => {
  const {
    classes,
    message = 'Empty message',
    extraClasses = '',
    isOpen,
    onClickClose,
    horizontal,
    vertical,
  } = props;

  return (
    <Snackbar
      anchorOrigin={ {vertical, horizontal} }
      open={ isOpen }
      onClose={ onClickClose }
      ContentProps={ {
        'aria-describedby': 'message-id',
      } }
      message={ <span id="message-id">{ message }</span> }
      className={ `${classes.root} ${extraClasses}` }
      autoHideDuration={ 1000 }
      action={ [
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={ classes.close }
          onClick={ onClickClose }
        >
          <CloseIcon/>
        </IconButton>,
      ] }
    />
  );
};

export const SprykerNotification = withStyles(styles)(SprykerNotificationBase);
