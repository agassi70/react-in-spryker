import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import { styles } from './styles';

interface AppPageHeadlineProps extends WithStyles<typeof styles> {
  title: string;
  extraClass?: string;
}

export const AppPageHeadlineBase: React.SFC<AppPageHeadlineProps> = (props) => {
  const {classes, title, extraClass} = props;

  if (!title) {
    return null;
  }

  return (
    <Typography
      component="h3"
      color="inherit"
      align="center"
      className={ `${classes.title} ${extraClass ? extraClass : ''}` }
    >
      { title }
    </Typography>
  );
};

export const AppPageHeadline = withStyles(styles)(AppPageHeadlineBase);
