import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { toast } from 'react-toastify';

import { TSalutationVariant } from 'src/shared/interfaces/customer';
import { salutationVariants } from 'src/shared/constants/customer';
import { emptyRequiredFieldsErrorText } from 'src/shared/constants/messages/errors';
import { formStyles } from '../styles';
import { RegisterFormProps as Props, RegisterFormState as State } from './types';
import { InputChangeEvent, FormEvent } from "src/shared/interfaces/common/react";

export class RegisterFormBase extends React.Component<Props, State> {
  public state = {
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  };

  public handleChangeSalutation = (event: InputChangeEvent): void => {
    this.setState(() => ({salutation: event.target.value}));
  };

  public handleChangeAgreement = (event: InputChangeEvent): void => {
    this.setState(() => ({acceptedTerms: !this.state.acceptedTerms}));
  };

  public handleChange = ({target: {name, value}}: InputChangeEvent): void => {
    this.setState(() => ({...this.state, [name]: value}));
  }

  public handleSubmitForm = (e: FormEvent): void => {
    const {salutation, firstName, lastName, email, password, confirmPassword, acceptedTerms} = this.state;
    e.preventDefault();
    if (!salutation || !firstName || !lastName || !email || !password || !confirmPassword || !acceptedTerms) {
      toast.warn(emptyRequiredFieldsErrorText);
      return null;
    }

    if (password !== confirmPassword) {
      toast.warn('The passwords must match');
      return null;
    }

    this.props.handleSubmit(this.state);
  };

  public render() {
    const {classes} = this.props;

    return (
      <React.Fragment>
        <Typography variant="title" color="inherit" noWrap>Register</Typography>
        <form
          className={ classes.container }
          noValidate
          autoComplete="off"
          onSubmit={ this.handleSubmitForm }
          id="RegisterForm"
        >
          <TextField
            required
            id="register-salutation"
            select
            label="Salutation"
            name="salutation"
            className={ classes.textField }
            value={ this.state.salutation }
            onChange={ this.handleChangeSalutation }
            SelectProps={ {
              MenuProps: {
                className: classes.menu,
              },
            } }
            margin="normal"
            fullWidth
            InputLabelProps={ {shrink: true} }
          >
            { salutationVariants.map((option: TSalutationVariant) => (
              <MenuItem key={ option.value } value={ option.value }>{ option.label }</MenuItem>
            )) }
          </TextField>

          <TextField
            required
            id="register-first-name"
            label="First Name"
            name="firstName"
            type="text"
            value={ this.state.firstName }
            className={ classes.textField }
            margin="normal"
            fullWidth
            onChange={ this.handleChange }
            InputLabelProps={ {shrink: true} }
            InputProps={ {className: classes.input} }
          />

          <TextField
            required
            id="register-last-name"
            label="Last Name"
            name="lastName"
            type="text"
            value={ this.state.lastName }
            onChange={ this.handleChange }
            className={ classes.textField }
            margin="normal"
            fullWidth
            InputLabelProps={ {shrink: true} }
            InputProps={ {className: classes.input} }
          />

          <TextField
            required
            id="register-email"
            label="Email"
            name="email"
            type="email"
            value={ this.state.email }
            onChange={ this.handleChange }
            className={ classes.textField }
            margin="normal"
            fullWidth
            InputLabelProps={ {shrink: true} }
            InputProps={ {className: classes.input} }
          />

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={ 16 }
          >
            <Grid item xs={ 12 } sm={ 6 }>
              <TextField
                required
                id="register-password"
                label="Password"
                name="password"
                type="password"
                value={ this.state.password }
                onChange={ this.handleChange }
                className={ classes.textField }
                margin="normal"
                fullWidth
                InputLabelProps={ {shrink: true} }
                InputProps={ {className: classes.input} }
              />
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <TextField
                required
                id="register-confirm-password"
                label="Confirm password"
                name="confirmPassword"
                type="password"
                value={ this.state.confirmPassword }
                onChange={ this.handleChange }
                className={ classes.textField }
                margin="normal"
                fullWidth
                InputLabelProps={ {shrink: true} }
                InputProps={ {className: classes.input} }
              />
            </Grid>
          </Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={ this.state.acceptedTerms }
                onChange={ this.handleChangeAgreement }
                name="acceptedTerms"
              />
            }
            label="Accept terms"
          />

          <Button type="submit" variant="contained" className={ classes.button }>Register</Button>
        </form>
      </React.Fragment>
    );
  }
}

export const RegisterForm = withStyles(formStyles)(RegisterFormBase);
