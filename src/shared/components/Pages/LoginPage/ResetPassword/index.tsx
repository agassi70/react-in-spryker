import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { reduxify } from 'src/shared/lib/redux-helper';
import { resetPasswordAction } from 'src/shared/actions/Pages/Login';
import { AppMain } from 'src/shared/components/Common/AppMain';
import { getRouterMatchParam, TRouterMatchParam } from 'src/shared/selectors/Common/router';
import { formStyles } from '../styles';

interface ResetPasswordPageProps extends WithStyles<typeof formStyles> {
  dispatch?: Function;
  restoreKey?: TRouterMatchParam;
}

interface ResetPasswordPageState {
  password: string;
  confirmPassword: string;
  submitted: boolean;
}

export class ResetPasswordPageBase extends React.Component<ResetPasswordPageProps, ResetPasswordPageState> {
  public state: ResetPasswordPageState = {
    password: '',
    confirmPassword: '',
    submitted: false,
  };

  public handleChange = (event: any) => {
    const {name, value}: any = event.target;
    this.setState({
      ...this.state, [name]: value,
    });
  };

  public submitRequest = (e: any) => {
    this.setState({submitted: true});
    if (this.state.password !== this.state.confirmPassword) {
      return;
    }

    const payload = {
      restorePasswordKey: this.props.restoreKey,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    this.props.dispatch(resetPasswordAction(payload));
  };

  public render() {
    const {classes} = this.props;

    return (
      <AppMain>
        <Grid
          item xs={ 12 }
          container
          justify="center"
        >
          <Paper className={ classes.forgot }>
            <Typography variant="headline" paragraph>Reset password</Typography>
            <div>Enter new password and confirm it.</div>
            <form noValidate autoComplete="off">

              <TextField
                required
                type="password"
                label="Password"
                name="password"
                value={ this.state.password }
                placeholder="Password"
                margin="normal"
                onChange={ this.handleChange }
                className={ classes.textField }
              />
              <TextField
                required
                type="password"
                error={ this.state.submitted && this.state.password !== this.state.confirmPassword }
                label="Confirm Password"
                name="confirmPassword"
                value={ this.state.confirmPassword }
                placeholder="Confirm Password"
                margin="normal"
                onChange={ this.handleChange }
                className={ classes.textField }
              />

            </form>
            <Button
              variant="contained"
              color="primary"
              onClick={ this.submitRequest }
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </AppMain>
    );
  }
}

const ResetPassword = withStyles(formStyles)(ResetPasswordPageBase);

export const ResetPasswordPage = reduxify(
  (state: any, ownProps: any) => {
    const restoreKey = getRouterMatchParam(state, ownProps, 'restoreKey');
    return (
      {restoreKey}
    );
  },
)(ResetPassword);

export default ResetPasswordPage;
