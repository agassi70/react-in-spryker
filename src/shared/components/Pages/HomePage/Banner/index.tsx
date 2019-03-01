import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {IBannerProps} from "./types";
import {styles} from "./styles";

import {AppBtnLink} from "src/shared/components/Common/AppBtnLink/index";


export const BannerBase: React.SFC<IBannerProps> = (props): JSX.Element => {
  const {
    classes, titleFirst, titleSecond, intro, linkPath, linkTitle
  }  = props;

  return (
    <Grid container className={classes.root} >
      <Grid item xs={12} className={classes.container}>
        <Grid container className={classes.content}>
          <Grid item xs={12} sm={8} lg={6} className={classes.holder}>
            <Typography component="h1"
                        color="inherit"
                        align="left"
                        className={classes.title}
            >
              <span className={classes.titlePart}>{titleFirst}</span>
              <span className={classes.titlePart}>{titleSecond ? titleSecond : null}</span>
            </Typography>
            <Typography component="p"
                        color="inherit"
                        align="left"
                        className={classes.text}
            >
              {intro}
            </Typography>
            <AppBtnLink title={linkTitle} path={linkPath} extraClassName={classes.btn} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const Banner = withStyles(styles)(BannerBase);
