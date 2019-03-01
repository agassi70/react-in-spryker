import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { PopovarDropProps as Props } from './types';
import { styles } from './styles';

export const PopoverDropComponent: React.SFC<Props> = ({classes, children}) => (
  <div className={classes.root}>
    { children }
  </div>
);

export const PopoverDrop = withStyles(styles)(PopoverDropComponent);
