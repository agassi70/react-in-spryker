import * as React from 'react';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import { pathHomePage } from 'src/shared/routes/contentRoutes';

import { LogoProps as Props } from './types';
import { styles } from './styles';
import {SprykerLogoWhite} from "src/shared/assets/icons/SprykerLogoWhite";


export const LogoComponent: React.SFC<Props> = ({classes}) => (
  <div className={ classes.logoContainer }>
    <NavLink to={ pathHomePage } className={ classes.logo }>
      <SprykerLogoWhite />
    </NavLink>
  </div>
);

export const Logo = withStyles(styles)(LogoComponent);
