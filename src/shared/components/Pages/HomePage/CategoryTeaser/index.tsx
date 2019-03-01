import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {ICategoryTeaserProps} from "./types";
import {styles} from "./styles";

import {AppBtnLink} from "src/shared/components/Common/AppBtnLink/index";


export const CategoryTeaserBase: React.SFC<ICategoryTeaserProps> = (props): JSX.Element => {
  const {
    classes, title, text, img, path, linkTitle, isOdd
  }  = props;

  const thumbnailStyles: React.CSSProperties = {
    backgroundImage: `url(${img})`
  };

  return (
    <Grid container className={classes.root} spacing={24} >
      <Grid item
            xs={12}
            sm={6}
            className={`${classes.imageHolder} ${isOdd ? classes.oddImage : classes.evenImage}`}
      >
        <div style={thumbnailStyles} className={classes.thumbnail} ></div>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.contentHolder}>
        <Grid item xs={12} className={classes.content}>
          <Typography component="h2"
                      color="inherit"
                      align="left"
                      className={classes.title}
          >
            {title}
          </Typography>
          <Typography component="p"
                      color="inherit"
                      align="left"
                      className={classes.text}
          >
            {text}
          </Typography>
          <AppBtnLink title={linkTitle} path={path} extraClassName={classes.btn} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export const CategoryTeaser = withStyles(styles)(CategoryTeaserBase);
