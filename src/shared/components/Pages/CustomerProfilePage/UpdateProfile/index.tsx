import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {styles} from '../styles';
import { SprykerButton } from 'src/shared/components/UI/SprykerButton';
import { SprykerForm } from 'src/shared/components/UI/SprykerForm';
import {
  TCustomerEmail,
  TCustomerFirstName,
  TCustomerLastName,
  TCustomerSalutation,
  TSalutationVariant,
} from 'src/shared/interfaces/customer';
import { salutationVariants } from 'src/shared/constants/customer';
import {
  InputLabelSalutation,
  InputLabelFirstName,
  InputLabelLastName,
  InputLabelEmail,
} from 'src/shared/constants/forms/labels';

interface UpdateProfileProps extends WithStyles<typeof styles> {
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
  inputChangeHandler: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => void;
  firstName: TCustomerFirstName;
  lastName: TCustomerLastName;
  salutation: TCustomerSalutation;
  email: TCustomerEmail;
}


export const UpdateProfileBase: React.SFC<UpdateProfileProps> = (props): JSX.Element => {
  const {
    classes,
    submitHandler,
    inputChangeHandler,
    firstName,
    lastName,
    salutation,
    email,
  } = props;

  return (
    <SprykerForm
      form={{
        formName: 'profileForm',
        onChangeHandler: inputChangeHandler,
        onSubmitHandler: submitHandler,
        fields: [
          [{
            type: 'select',
            inputName: 'salutation',
            inputValue: salutation,
            spaceNumber: 2,
            isRequired: true,
            label: InputLabelSalutation,
            isError: false,
            menuItems: salutationVariants
              .map((item: TSalutationVariant) => ({value: item.value, name: item.label})),
          }, {
            type: 'input',
            inputName: 'firstName',
            inputValue: firstName,
            spaceNumber: 5,
            isRequired: true,
            label: InputLabelFirstName,
            isError: false,
          }, {
            type: 'input',
            inputName: 'lastName',
            inputValue: lastName,
            spaceNumber: 5,
            isRequired: true,
            label: InputLabelLastName,
            isError: false,
          }], [{
            type: 'input',
            inputName: 'email',
            inputValue: email,
            inputType: 'email',
            spaceNumber: 5,
            isRequired: true,
            label: InputLabelEmail,
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

export const UpdateProfile = withStyles(styles)(UpdateProfileBase);
