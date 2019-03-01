import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton/IconButton';

import { merge } from 'src/shared/helpers/common';
// import { Lang } from '../lang';
import { User } from '../user';
import { Cart } from '../cart';
import { AddNavProps as Props } from './types';
import { styles } from './styles';
import {getPopoverPosition} from "src/shared/components/Common/AppHeader/helpers";
import {appFixedDimensions} from "src/shared/theme/properties/new/appFixedDimensions";

export const AddNavComponent: React.SFC<Props> = (props) => {
  const {classes, showSearch, handleSearch, isSticky, pageWidth, pageHeight} = props;

  const popoverCartPos = getPopoverPosition({
    pageWidth,
    isSticky,
    showSearch,
    overFlow: appFixedDimensions.headerPopover.overFlow,
    popoverWidth: appFixedDimensions.cartDrop.width,
  });

  const popoverUserPos = getPopoverPosition({
    pageWidth,
    isSticky,
    showSearch,
    overFlow: appFixedDimensions.headerPopover.overFlow,
    popoverWidth: appFixedDimensions.userDrop.width,
  });

  return (
    <div className={classes.addNavContainer}>
      <div className={merge([classes.addNavItem, showSearch ? classes.addNavSearch : ''])}>
        <IconButton onClick={handleSearch} aria-label="Search">
          <Search/>
        </IconButton>
      </div>
      {/*<div className={ classes.addNavItem }><Lang/></div>*/}
      <div className={classes.addNavItem}>
        <User
          popoverPosLeft={popoverUserPos.left}
          popoverPosTop={popoverUserPos.top}
        />
      </div>
      <div className={`${classes.addNavItem}`}>
        <Cart
          popoverPosLeft={popoverCartPos.left}
          popoverPosTop={popoverCartPos.top}
        />
      </div>
    </div>
  );
};

export const AddNav = withStyles(styles)(AddNavComponent);
