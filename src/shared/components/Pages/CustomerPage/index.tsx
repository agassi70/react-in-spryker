import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import {ClickEvent, WithRouter} from 'src/shared/interfaces/common/react';
import {
  pathAddressFormPage,
  pathCustomerAddressesPage,
  pathCustomerPage,
  pathCustomerProfilePage,
  pathOrderDetailsPage,
  pathOrderHistoryPage,
  pathWishListPage,
  pathWishListsPage,
} from 'src/shared/routes/contentRoutes';

import { AppMain } from '../../Common/AppMain';
import { LoadableWishListPage } from '../WishListPage/loadable';
import { LoadableWishlistDetail } from '../WishlistDetail/loadable';
import { LoadableCustomerAddressPage } from '../CustomerAddressesPage/loadable';
import { AddressFormPage } from '../CustomerAddressesPage/AddressForm';
import { LoadableOrderDetailsPage } from '../OrderDetailsPage/loadable';
import { LoadableOrderHistoryPage } from '../OrderHistoryPage/loadable';
import { LoadableCustomerProfilePage } from '../CustomerProfilePage/loadable';
import { Logo } from './logo';
import { styles } from './styles';
import { connect } from './connect';
import {customerProfileNavLinks} from "src/shared/constants/navLinks/index";
import {LogOutBtnTitle} from "src/shared/constants/buttons/index";
import {INavLinkData} from "src/shared/interfaces/navLinks/index";

interface CustomerPageProps extends WithStyles<typeof styles>, WithRouter {
  isUserLoggedIn: boolean;
  logout?: () => void;
}

@connect
@(withRouter as any)
export class CustomerPageBase extends React.PureComponent<CustomerPageProps> {

  public handleLogout = (e: ClickEvent) => {
    e.preventDefault();
    this.props.logout();
  };

  public render() {
    const {classes, location} = this.props;

    return (
      <AppMain>
        <Grid container justify="space-between" className={classes.customerContainer}>
          <Grid item xs={12} sm={4} md={3} container direction="column">
            <Paper className={classes.rootPaper}>
              {/*<Logo />*/}

              <MenuList>
                {customerProfileNavLinks.map((item: INavLinkData) => {
                  const isSelected = (location.pathname === item.path) || location.pathname.includes(item.path);
                  return (
                    <MenuItem
                      key={item.title}
                      selected={isSelected}
                    >
                      <NavLink to={item.path} className={ classes.link } >{item.title}</NavLink>
                    </MenuItem>
                  );
                })}
              </MenuList>
              <Divider />

              <div
                className={ `${classes.link} ${classes.logoutLink}` }
                onClick={this.handleLogout}
              >
                {LogOutBtnTitle}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Grid container className={classes.rightPart}>
              <Grid item xs={12}>
                <Switch>
                  <Route path={ pathCustomerPage } exact component={ LoadableCustomerProfilePage }/>
                  <Route path={ pathCustomerAddressesPage } exact component={ LoadableCustomerAddressPage }/>
                  <Route path={ pathAddressFormPage } component={ AddressFormPage }/>
                  <Route path={ pathWishListsPage } component={ LoadableWishListPage }/>
                  <Route path={ pathWishListPage } component={ LoadableWishlistDetail }/>
                  <Route path={ pathOrderHistoryPage } exact component={ LoadableOrderHistoryPage }/>
                  <Route path={ pathOrderDetailsPage } component={ LoadableOrderDetailsPage }/>
                  <Route path={ pathCustomerProfilePage } component={ LoadableCustomerProfilePage }/>
                </Switch>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppMain>
    );
  }
}

export const CustomerPage = withStyles(styles)(CustomerPageBase);

export default CustomerPage;
