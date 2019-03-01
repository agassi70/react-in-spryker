import * as React from 'react';
import { merge } from 'src/shared/helpers/common';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import { MainNavProps as Props } from './types';
import { styles } from './styles';
import { connect } from './connect';
import { navLinks } from './navLinks';

@connect
export class MainNavComponent extends React.PureComponent<Props> {
  public render() {
    const {classes, categoriesTree, mobileNavState} = this.props;

    return (
      <nav className={ merge([classes.mainNav, mobileNavState ? classes.mainNavOpened : '']) }>
        { navLinks.map(category => (
          <NavLink key={ category.name + category.path } className={ classes.mainNavLink } to={ category.path }>
            { category.name }
          </NavLink>
        )) }
      </nav>
    );
  }
}

export const MainNav = withStyles(styles)(MainNavComponent);
