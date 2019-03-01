import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import { styles } from './styles';

interface AppMainProps extends WithStyles<typeof styles> {
}

export const AppMainBase: React.SFC<AppMainProps> = (props) => {
  const {classes} = props;
  return (
    <main className={ classes.layout }>
      <Grid item
            xs={ 12 }
            container
            direction="row"
            alignItems="flex-start"
            className={ classes.container }
      >
        { props.children }
      </Grid>
    </main>
  );
};

export const AppMain = withStyles(styles)(AppMainBase);
