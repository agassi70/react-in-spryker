import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import {styles} from './styles';
import {IEmptyOrderProps} from "./types";


export const EmptyOrderBase: React.SFC<IEmptyOrderProps> = (props): JSX.Element => {
  const {
    classes,
    intro
  } = props;

  return (
    <Typography component="p" color="inherit" className={classes.intro} >
      {intro}
    </Typography>
  );
};

export const EmptyOrder = withStyles(styles)(EmptyOrderBase);
