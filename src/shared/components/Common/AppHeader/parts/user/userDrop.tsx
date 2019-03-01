import * as React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import {pathCustomerPage, pathLoginPage} from 'src/shared/routes/contentRoutes';
import { UserDropProps as Props } from './types';
import { connect } from './connect';
import { styles } from './styles';
import { ClickEvent } from 'src/shared/interfaces/common/react';
import {AccountTitle} from "src/shared/constants/customer/index";
import {LogInBtnTitle, LogOutBtnTitle, RegisterBtnTitle} from "src/shared/constants/buttons/index";
import {customerProfileNavLinks} from "src/shared/constants/navLinks/index";
import {AppBtnLink} from "src/shared/components/Common/AppBtnLink/index";
import {SprykerButton} from "src/shared/components/UI/SprykerButton/index";
import {INavLinkData} from "src/shared/interfaces/navLinks/index";


@connect
@(withRouter as any)
export class UserDropComponent extends React.PureComponent<Props> {

  public customerLogout = (e: ClickEvent) => {
    e.preventDefault();
    if (this.props.location.pathname.includes(pathCustomerPage)) {
      this.props.logout();
    } else {
      this.props.history.push(pathCustomerPage);
      setTimeout(this.props.logout, 250);
    }
  };

  public render() {
    const {classes, isUserLoggedIn} = this.props;

    const loggedInUser = (
     <React.Fragment>
       <ul className={ classes.userDropNav }>
         {customerProfileNavLinks.map((item: INavLinkData) => {
           return (
             <li  key={item.title} onClick={this.props.closePopoverHandler}>
               <NavLink to={item.path}>{item.title}</NavLink>
             </li>
           );
         })}
       </ul>
       <div className={ classes.userBtns }>
         <SprykerButton
           title={LogOutBtnTitle}
           onClick={this.customerLogout}
           extraClasses={classes.actionLogOut}
         />
       </div>
     </React.Fragment>
    );
    const notLoggedInUser = (
      <div className={ classes.userBtns }>
        <AppBtnLink title={RegisterBtnTitle} path={pathLoginPage} extraClassName={classes.action} />
        <AppBtnLink title={LogInBtnTitle} path={pathLoginPage} type="black" extraClassName={classes.action}/>
      </div>
    );

    return (
      <div className={ classes.userDrop }>
        <Typography component="h5" className={ classes.title }>
          {AccountTitle}
        </Typography>
        {isUserLoggedIn ? loggedInUser : notLoggedInUser}
      </div>
    );
  }
}

export const UserDrop = withStyles(styles)(UserDropComponent);
