import * as React from 'react';
import { withRouter } from 'react-router';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton/IconButton';

import { ClickEvent } from 'src/shared/interfaces/common/react';
import { pathCustomerProfilePage, pathLoginPage } from 'src/shared/routes/contentRoutes';
import { PersonIcon } from './person-icon';
import { UserDrop } from './userDrop';
import { UserProps as Props, UserState as State } from './types';
import { connect } from './connect';
import { styles } from './styles';
import {PopoverWrapper} from "src/shared/components/Common/AppHeader/parts/PopoverWrapper";


@connect
@(withRouter as any)
export class UserComponent extends React.PureComponent<Props, State> {
  public state: State = {
    anchorEl: null,
  };

  public componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      this.closePopover();
    }
  }

  private openPopover = ({currentTarget}: ClickEvent) => {
    if (window.innerWidth < 500) {
      if (this.props.isUserLoggedIn) {
        this.props.history.push(pathCustomerProfilePage);
      } else {
        this.props.history.push(pathLoginPage);
      }
    } else {
      this.setState(() => ({anchorEl: currentTarget}));
    }
  };
  private closePopover = () => this.setState(() => ({anchorEl: null}));

  public render() {
    const {anchorEl} = this.state;
    const {classes, popoverPosLeft, popoverPosTop} = this.props;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton aria-label="person" onClick={ this.openPopover }>
          <PersonIcon/>
        </IconButton>

        <PopoverWrapper
          popoverPosLeft={popoverPosLeft}
          popoverPosTop={popoverPosTop}
          anchorEl={anchorEl}
          closePopoverHandler={this.closePopover}
          extraContentClassName={classes.userContent}
          extraHelperClassName={classes.popoverTriangle}
        >
          <UserDrop closePopoverHandler={this.closePopover} />
        </PopoverWrapper>

      </div>
    );
  }
}

export const User = withStyles(styles)(UserComponent);
