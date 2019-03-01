import * as React from 'react';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import { LinksProps as Props } from './types';
import { styles } from './styles';

export const LinksComponent: React.SFC<Props> = ({classes, title, links, external}) => (
  <div>
    <p className={ classes.title }><strong>{ title }</strong></p>

    <ul className={ classes.linkList }>
      { links.map(link => (
        <li key={ link.name + link.path } className={ classes.linkItem }>
          { external ? (
            <a href={ link.path } className={ classes.link } target="_blank">
              { link.name }
            </a>
          ) : (
            <NavLink to={ link.path } className={ classes.link }>
              { link.name }
            </NavLink>
          ) }
        </li>
      )) }
    </ul>
  </div>
);

LinksComponent.defaultProps = {
  external: false,
};

export const Links = withStyles(styles)(LinksComponent);
