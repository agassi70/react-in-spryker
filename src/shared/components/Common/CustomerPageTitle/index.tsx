import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import { styles } from './styles';

interface CustomerPageTitleProps extends WithStyles<typeof styles> {
  title: string;
  intro?: string | JSX.Element | null;
  extraClasses?: string;
  containerExtraClasses?: string;
}

export const CustomerPageTitleBase: React.SFC<CustomerPageTitleProps> = (props): JSX.Element => {
  const {
    classes,
    extraClasses = '',
    containerExtraClasses,
    title,
    intro,
  } = props;

  return (
    <div className={`${classes.container} ${containerExtraClasses ? containerExtraClasses : ''}`}>
      <Typography
        component="h1"
        align="left"
        className={ extraClasses ? classes.pageHeader : `${classes.pageHeader} ${extraClasses}` }
      >
        { title }
      </Typography>
      { intro
        ? (
          <Typography color="inherit" component="p" className={classes.intro} >
            { intro }
          </Typography>
        )
        : null
      }
    </div>
  );
};

export const CustomerPageTitle = withStyles(styles)(CustomerPageTitleBase);
