import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BackIcon from '@material-ui/icons/ChevronLeft';

import { reduxify } from 'src/shared/lib/redux-helper';
import { forgotPasswordAction } from 'src/shared/actions/Pages/Login';
import { RouteProps } from 'react-router';

import { AppMain } from 'src/shared/components/Common/AppMain';

import { formStyles } from '../styles';
import { getRouterHistoryBack } from 'src/shared/selectors/Common/router';

interface ForgotPasswordPageProps extends WithStyles<typeof formStyles>, RouteProps {
  dispatch?: Function;
  routerGoBack: Function;
  sendForgotRequest: Function;
}

interface ForgotPasswordPageState {
  email: string;
}

export class ForgotPasswordPageBase extends React.Component<ForgotPasswordPageProps, ForgotPasswordPageState> {
  public state: ForgotPasswordPageState = {
    email: '',
  };

  public handleChange = (e: any) => {
    this.setState({email: e.target.value});
  };

  public submitRequest = (e: any) => {
    this.props.sendForgotRequest(this.state.email);
  };

  public render() {
    const {classes, routerGoBack} = this.props;

    return (
      <AppMain>
        <Grid
          item xs={ 12 }
          container
          justify="center"
        >
          <Paper className={ classes.forgot }>
            <Typography color="primary" variant="headline" paragraph>Recover my password</Typography>
            <Typography variant="title" paragraph>Enter the e-mail address associated with your account.</Typography>
            <form autoComplete="off">
              <TextField
                required
                inputProps={ {type: 'email'} }
                label="Email Address"
                className={ classes.email }
                value={ this.state.email }
                placeholder="Email Address"
                onChange={ this.handleChange }
              />
            </form>
            <Grid container justify="flex-end">
              <Button
                variant="outlined"
                color="primary"
                className={ classes.passwordButtons }
                onClick={ () => routerGoBack() }
              >
                <BackIcon/>
                <span>Back</span>
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={ classes.passwordButtons }
                onClick={ this.submitRequest }
              >
                Submit
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </AppMain>
    );
  }
}

const ForgotPassword = withStyles(formStyles)(ForgotPasswordPageBase);

export const ForgotPasswordPage = reduxify(
  (state: any, ownProps: any) => {
    const routerGoBack = getRouterHistoryBack(state, ownProps);
    return (
      {
        routerGoBack,
      }
    );
  },
  (dispatch: Function, ownProps: any) => {
    return {
      dispatch,
      sendForgotRequest: (email: string) => dispatch(forgotPasswordAction(email)),
    };
  },
)(ForgotPassword);

export default ForgotPasswordPage;
