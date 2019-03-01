import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Popover from '@material-ui/core/Popover/Popover';

import { styles } from './styles';
import {IPopoverWrapperProps} from "./types";


export const PopoverWrapperBase: React.SFC<IPopoverWrapperProps> = (props) => {
  const {
    classes,
    children,
    popoverPosLeft,
    popoverPosTop,
    anchorEl,
    closePopoverHandler,
    extraContentClassName,
    extraHelperClassName,
  } = props;

  const open = Boolean(anchorEl);

  const popoverStyles = {
    top: popoverPosTop,
    left: 0,
  };

  const popoverProps = {
    open,
    anchorEl,
    elevation: 0,
    onClose: closePopoverHandler,
  };

  return (
    <Popover
      { ...popoverProps }
      className = {classes.popover}
      anchorReference="anchorPosition"
      anchorPosition={{ top: 0, left: popoverPosLeft }}
      style = {popoverStyles}
      PaperProps = {{
        classes: {
          root: `${classes.content} ${extraContentClassName ? extraContentClassName : ''}`
        }
      }}
    >
      <div className={classes.childWrapper}>
        <div className={`${open ? `${classes.helper} ${extraHelperClassName ? extraHelperClassName : ''}` : ''}`}></div>
        { children }
      </div>
    </Popover>
  );
};

export const PopoverWrapper = withStyles(styles)(PopoverWrapperBase);
