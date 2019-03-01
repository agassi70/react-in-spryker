import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import { styles } from './styles';

interface AppPageSubTitleProps extends WithStyles<typeof styles> {
  title: string;
  extraClass?: string;
}

export const AppPageSubTitleBase: React.SFC<AppPageSubTitleProps> = (props) => {
  const {classes, title, extraClass} = props;

  if (!title) {
    return null;
  }

  return (
    <Typography component="h2" color="inherit" className={ `${classes.title} ${extraClass ? extraClass : ''}` }>
      { title }
    </Typography>
  );
};

export const AppPageSubTitle = withStyles(styles)(AppPageSubTitleBase);
