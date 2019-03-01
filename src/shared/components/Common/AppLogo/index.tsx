import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { NavLink } from 'react-router-dom';

import { IconLogo } from '../../../assets/icons/IconLogo';
import { styles } from './styles';
import { pathHomePage } from '../../../routes/contentRoutes';

interface AppLogoProps extends WithStyles<typeof styles> {

}

export const AppLogoBase: React.SFC<AppLogoProps> = (props) => {
  const {classes} = props;
  return (
    <NavLink className={ classes.logo } id="AppLogo" to={ pathHomePage }><IconLogo/></NavLink>
  );
};

export const AppLogo = withStyles(styles)(AppLogoBase);
