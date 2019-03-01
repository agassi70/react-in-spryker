import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Backdrop from '@material-ui/core/Backdrop';

import { styles } from './styles';

interface AppBackdropProps extends WithStyles<typeof styles> {
  isOpen: boolean;
}

export const AppBackdropBase: React.SFC<AppBackdropProps> = (props) => {
  const {classes, isOpen} = props;

  return (
    <Backdrop open={ isOpen } classes={ {root: classes.root} }/>
  );
};

export const AppBackdrop = withStyles(styles)(AppBackdropBase);
