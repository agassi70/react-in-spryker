import { WithStyles } from '@material-ui/core';
import { formStyles } from 'src/shared/components/Pages/LoginPage/styles';
import {
  TCustomerEmail,
  TCustomerFirstName,
  TCustomerLastName, TCustomerPassword,
  TCustomerSalutation,
} from 'src/shared/interfaces/customer';

export interface RegisterFormProps extends WithStyles<typeof formStyles> {
  handleSubmit: Function;
}

export interface RegisterFormState {
  salutation: TCustomerSalutation;
  firstName: TCustomerFirstName;
  lastName: TCustomerLastName;
  email: TCustomerEmail;
  password: TCustomerPassword;
  confirmPassword: TCustomerPassword;
  acceptedTerms: boolean;
}
