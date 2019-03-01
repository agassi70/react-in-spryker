import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {styles} from '../styles';
import { SprykerButton } from 'src/shared/components/UI/SprykerButton';
import { SprykerForm } from 'src/shared/components/UI/SprykerForm';
import { TCustomerPassword } from 'src/shared/interfaces/customer';
import {
  InputLabelPassword,
  InputLabelNewPassword,
  InputLabelConfirmPassword,
} from 'src/shared/constants/forms/labels';

interface ChangePasswordProps extends WithStyles<typeof styles> {
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
  inputChangeHandler: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => void;
  password: TCustomerPassword;
  newPassword: TCustomerPassword;
  confirmPassword: TCustomerPassword;
}

export const ChangePasswordBase: React.SFC<ChangePasswordProps> = (props): JSX.Element => {
  const {
    classes,
    submitHandler,
    inputChangeHandler,
    password,
    newPassword,
    confirmPassword,
  } = props;

  return (
    <SprykerForm
      form={{
        formName: 'passwordForm',
        onChangeHandler: inputChangeHandler,
        onSubmitHandler: submitHandler,
        fields: [
          [{
            type: 'input',
            inputName: 'password',
            inputValue: password,
            inputType: 'password',
            spaceNumber: 5,
            isRequired: true,
            label: InputLabelPassword,
            isError: false,
          }], [{
            type: 'input',
            inputName: 'newPassword',
            inputValue: newPassword,
            inputType: 'password',
            spaceNumber: 5,
            isRequired: true,
            label: InputLabelNewPassword,
            isError: false,
          }, {
            type: 'input',
            inputName: 'confirmPassword',
            inputValue: confirmPassword,
            inputType: 'password',
            spaceNumber: 5,
            isRequired: true,
            label: InputLabelConfirmPassword,
            isError: false,
          }]
        ]
      }}
      SubmitButton={
        <Grid container>
          <Grid item xs={12} sm={2}>
            <SprykerButton title="update" btnType="submit" extraClasses={classes.submitButton} />
          </Grid>
        </Grid>
      }
      formClassName={ classes.form }
    />
  );
};

export const ChangePassword = withStyles(styles)(ChangePasswordBase);
