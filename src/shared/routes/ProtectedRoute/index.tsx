import * as React from 'react';
import { toast } from 'react-toastify';
import { Route, withRouter } from 'react-router';

import { Props } from './types';
import { connect } from './connect';
import { pathLoginPage } from '../contentRoutes';
import {customerLogout} from "src/shared/constants/messages/customer";

@connect
@(withRouter as any)
export class ProtectedRoute extends React.PureComponent<Props> {
  public static defaultProps = {
    pageTitle: '',
  };

  // Component lifecycle methods

  public componentDidMount(): void {
    this.checkAuthorized(false);
  }

  public componentDidUpdate(prevProps: Props): void {
    if (prevProps.isUserLoggedIn && !this.props.isUserLoggedIn) {
      this.props.history.push(pathLoginPage);
      toast.success(customerLogout);
      setTimeout(() => { this.props.getGuestCartAction(this.props.anonymId); }, 100);
    }

    this.checkAuthorized(prevProps.isUserLoggedIn);
  }

  // Helper functions

  private checkAuthorized = (prevIsUserLoggedIn: boolean): void => {
    if (!prevIsUserLoggedIn && !this.props.isUserLoggedIn) {
      this.props.history.push(pathLoginPage);
    }
  };

  public render(): React.ReactNode {
    return this.props.isUserLoggedIn
      ? <Route { ...this.props } />
      : null;
  }
}
