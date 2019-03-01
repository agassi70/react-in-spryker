import * as React from 'react';
import { RouteProps, withRouter } from 'react-router';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

import { reduxify } from 'src/shared/lib/redux-helper';
import { ILoginState } from 'src/shared/reducers/Pages/Login';
import { customerRegisterAction, loginCustomerAction } from 'src/shared/actions/Pages/Login';
import {ICustomerLoginData, ICustomerProfile, TCustomerReference} from 'src/shared/interfaces/customer';
import { getCustomerCartsAction } from 'src/shared/actions/Common/Cart';
import { pathCustomerPage, pathForgotPassword } from 'src/shared/routes/contentRoutes';
import { WithRouter } from 'src/shared/interfaces/common/react';

import { AppMain } from '../../Common/AppMain';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

import { styles } from './styles';

interface LoginPageProps extends WithStyles<typeof styles>, RouteProps, WithRouter {
  dispatch?: Function;
  customer?: TCustomerReference;
  isAuth?: boolean;
  refreshToken?: string;
  handleSubmitRegisterForm: Function;
  handleSubmitLoginForm: Function;
  getCustomerCart: Function;
}

interface LoginPageState {

}

@(withRouter as any)
export class LoginPageBase extends React.Component<LoginPageProps, LoginPageState> {
  public state: LoginPageState = {};

  public componentDidUpdate(prevProps: LoginPageProps) {
    if (!prevProps.isAuth && this.props.isAuth) {
      this.props.getCustomerCart();
      this.props.history.push(pathCustomerPage);
    }
  }

  public render() {
    const {classes} = this.props;

    return (
      <AppMain>
        <Grid item xs={ 12 } sm={ 12 } md={ 6 }
              direction="column"
              container
              justify="center"
              alignItems="center">
          <LoginForm handleSubmit={ this.props.handleSubmitLoginForm }
          />
          <div className={ classes.link }>
            <NavLink to={ pathForgotPassword }>
              Forgot Password
            </NavLink>
          </div>
        </Grid>
        <div className={ classes.divider } id="divider"/>
        <Grid item xs={ 12 } sm={ 12 } md={ 6 }
              direction="column"
              container
              justify="center"
              alignItems="center">
          <RegisterForm handleSubmit={ this.props.handleSubmitRegisterForm }/>
        </Grid>
      </AppMain>
    );
  }
}

const LoginPage = withStyles(styles)(LoginPageBase);

export const ConnectedLogin = reduxify(
  (state: any, ownProps: any) => {
    const routerProps: RouteProps = state.routing ? state.routing : {};
    const pagesLoginProps: ILoginState = state.pagesLogin ? state.pagesLogin : null;
    return (
      {
        location: routerProps.location ? routerProps.location : ownProps.location,
        customer: pagesLoginProps && pagesLoginProps.data ? pagesLoginProps.data.customerRef : ownProps.customer,
        isAuth: pagesLoginProps && pagesLoginProps.data ? pagesLoginProps.data.isAuth : ownProps.isAuth,
        refreshToken: pagesLoginProps && pagesLoginProps.data ? pagesLoginProps.data.refreshToken : ownProps.isAuth,
      }
    );
  },
  (dispatch: Function) => {
    return {
      dispatch,
      handleSubmitRegisterForm: (data: ICustomerProfile): void => dispatch(customerRegisterAction(data)),
      handleSubmitLoginForm: (payload: ICustomerLoginData): void => dispatch(loginCustomerAction(payload)),
      getCustomerCart: () => dispatch(getCustomerCartsAction()),
    };
  },
)(LoginPage);

export default ConnectedLogin;
