import { WithStyles } from '@material-ui/core';
import { RouteProps } from 'react-router';
import { styles } from './styles';
import {
  ICustomerDataParsed,
  ICustomerProfile,
  ICustomerProfileIdentity,
  ICustomerProfilePassword,
  ILoginDataToLocalStorage,
  TCustomerInputValue,
  TCustomerReference,
} from 'src/shared/interfaces/customer';

export interface ICustomerProfilePageProps extends WithStyles<typeof styles>, RouteProps {
  isLoading: boolean;
  isRejected: boolean;
  isFulfilled: boolean;
  isCustomerDataExist: boolean;
  isAppDataSet: boolean;
  isUserLoggedIn: boolean;
  customerReference: TCustomerReference;
  customerData: ICustomerDataParsed;
  passwordUpdated: boolean;
  routerPush: Function;
  getCustomerData(customerReference: TCustomerReference): void;
  updateCustomerData(customerReference: TCustomerReference, payload: ICustomerProfileIdentity): void;
  updateCustomerPassword(customerReference: TCustomerReference, payload: ICustomerProfilePassword): void;
  deleteCustomerEntity(customerReference: TCustomerReference): void;
}

export interface ICustomerProfilePageState {
  inputs: ICustomerProfile;
  isDeleteProfileDialogOpen: boolean;
}

export interface IProfileFieldInput {
  name: (keyof ICustomerProfile);
  value: TCustomerInputValue;
}
