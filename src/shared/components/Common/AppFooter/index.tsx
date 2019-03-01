import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Links } from './parts/Links';
import { Logos } from './parts/Logos';
import { Logo } from './parts/Logo';
import { categoriesLinks, socialMediaLinks } from './footer-links';
import { AppFooterProps as Props } from './types';
import { styles } from './styles';

export const AppFooterComponent: React.SFC<Props> = ({classes}) => (
  <div className={ classes.footer }>
    <div className={ classes.footerContainer }>
      <div className={ `${classes.footerCol} ${classes.logo}` }>
        <Logo/>
      </div>
      <div className={ classes.footerCol }>
        <Links title="Categories" links={ categoriesLinks }/>
      </div>
      <div className={ classes.footerCol }>
        <Links title="Social Media" links={ socialMediaLinks } external/>
      </div>
      <div className={ `${classes.footerCol} ${classes.partners}` }>
        <Logos/>
      </div>
    </div>
  </div>
);

export const AppFooter = withStyles(styles)(AppFooterComponent);
