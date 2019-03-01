import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { styles } from './styles';

interface AppPageTitleProps extends WithStyles<typeof styles> {
  title?: string;
  intro?: string | JSX.Element | null;
}

export const AppPageTitleBase: React.SFC<AppPageTitleProps> = (props) => {
  const {classes, title, intro} = props;

  return (
    <Grid container
          justify="flex-start"
          alignItems="center"
          className={ classes.root }
    >
      <Grid item xs={ 12 }>
        { title
          ? (<Typography component="h1"
                         color="inherit"
                         align="left"
                         className={ classes.pageHeader }
                         id="pageTitle"
          >
            { title }
          </Typography>)
          : null
        }
        { intro
          ? (
            <Typography color="inherit" paragraph className={ classes.paragraph }>
              { intro }
            </Typography>
          )
          : null
        }

      </Grid>
    </Grid>
  );
};

export const AppPageTitle = withStyles(styles)(AppPageTitleBase);
