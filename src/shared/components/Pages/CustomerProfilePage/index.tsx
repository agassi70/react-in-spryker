import * as React from 'react';
import { FormEvent, MouseEvent, SyntheticEvent } from 'react';
import { toast } from 'react-toastify';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  emptyRequiredFieldsErrorText,
  passwordsNotEqualErrorText,
} from 'src/shared/constants/messages/errors';
import { pathLoginPage } from 'src/shared/routes/contentRoutes';
import { SprykerDialog } from '../../UI/SprykerDialog';
import { UpdateProfile } from './UpdateProfile';
import { ChangePassword } from './ChangePassword';
import { AccountActions } from './AccountActions';
import { CustomerPageTitle } from 'src/shared/components/Common/CustomerPageTitle';
import { ICustomerProfilePageProps as Props, ICustomerProfilePageState as State, IProfileFieldInput } from './types';
import { styles } from './styles';
import { connect } from './connect';

const keySalutation = 'salutation';
const keyFirstName = 'firstName';
const keyLastName = 'lastName';
const keyEmail = 'email';
const keyNewPassword = 'newPassword';
const keyOldPassword = 'password';
const keyConfirmPassword = 'confirmPassword';
const deleteProfileContent = 'Are you sure you want to delete your account?';

@connect
export class CustomerProfilePageBase extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputs: {
        salutation: props.customerData ? props.customerData.salutation : '',
        firstName: props.customerData ? props.customerData.firstName : '',
        lastName: props.customerData ? props.customerData.lastName : '',
        email: props.customerData ? props.customerData.email : '',
        newPassword: '',
        password: '',
        confirmPassword: '',
      },
      isDeleteProfileDialogOpen: false,
    };
  }

  public componentDidMount = () => {
    if (!this.props.isCustomerDataExist) {
      this.initRequestData();
    }
  };

  public componentDidUpdate = (prevProps: Props, prevState: State) => {
    if (!this.props.isRejected && !this.props.isCustomerDataExist) {
      this.initRequestData();
    }
    if (this.props.passwordUpdated && !prevProps.passwordUpdated) {
      this.clearPasswords();
    }
    if (!prevProps.isCustomerDataExist && this.props.isCustomerDataExist) {
      this.setState({inputs: {
          ...prevState.inputs,
          salutation: this.props.customerData.salutation,
          firstName: this.props.customerData.firstName,
          lastName: this.props.customerData.lastName,
          email: this.props.customerData.email,
        }});
    }
  };

  public handleProfileInputChange = (event: {target: IProfileFieldInput}): void => {
    const {name, value}: IProfileFieldInput = event.target;
    const cleanValue = value.trim();
    const {inputs} = this.state;

    if (inputs.hasOwnProperty(name) && inputs[name] !== cleanValue) {
      this.setState({ inputs: {...inputs, [name]: cleanValue} });
    }
  };

  public handleSubmitUpdateProfile = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (this.props.isLoading || !this.props.customerReference) {
      return;
    }
    const {firstName, lastName, salutation, email} = this.state.inputs;

    if (!firstName || !lastName || !email || !salutation) {
      toast.warn(emptyRequiredFieldsErrorText);
      return null;
    }
    const profileData = {salutation, firstName, lastName, email};
    this.props.updateCustomerData(this.props.customerReference, profileData);
  };

  public handleSubmitPassword = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const {password, newPassword, confirmPassword}  = this.state.inputs;
    if (!password || !newPassword || !confirmPassword || !this.props.customerReference) {
      toast.warn(emptyRequiredFieldsErrorText);
      return null;
    }
    if (newPassword !== confirmPassword) {
      toast.warn(passwordsNotEqualErrorText);
      return null;
    }
    const passwordData = {password, newPassword, confirmPassword};
    this.props.updateCustomerPassword(this.props.customerReference, passwordData);
  };

  public handleSubmitDeleteAccount = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.setState(prev => ({isDeleteProfileDialogOpen: true}));
  };

  public handleDeleteProfileDialogShowing = (event: SyntheticEvent<{}>): void => {
    this.setState(prev => ({isDeleteProfileDialogOpen: !prev.isDeleteProfileDialogOpen}));
  };

  public handleDeleteProfileDialogAgree = (event: MouseEvent<HTMLElement>): void => {
    if (this.props.isLoading || !this.props.customerReference) {
      return;
    }
    this.props.deleteCustomerEntity(this.props.customerReference);
    this.handleDeleteProfileDialogShowing(event);
    this.props.routerPush(`${pathLoginPage}`);
  };

  public handleDeleteProfileDialogDisagree = (event: MouseEvent<HTMLElement>): void => {
    this.handleDeleteProfileDialogShowing(event);
  };

  private clearPasswords = (): void => {
    this.setState({inputs: {
        ...this.state.inputs,
        newPassword: '',
        password: '',
        confirmPassword: '',
      }});
  };

  private initRequestData = () => {
    if (!this.props.isLoading && this.props.isAppDataSet && this.props.customerReference) {
      this.props.getCustomerData(this.props.customerReference);
    }
  };

  public render(): JSX.Element {
    const {classes} = this.props;

    return (
      <div>
        <CustomerPageTitle title='profile' />
        <UpdateProfile
          submitHandler={ this.handleSubmitUpdateProfile }
          inputChangeHandler={ this.handleProfileInputChange }
          firstName={ this.state.inputs[keyFirstName] }
          lastName={ this.state.inputs[keyLastName] }
          salutation={ this.state.inputs[keySalutation] }
          email={ this.state.inputs[keyEmail] }
        />

        <CustomerPageTitle title='change password' />
        <ChangePassword
          submitHandler={ this.handleSubmitPassword }
          inputChangeHandler={ this.handleProfileInputChange }
          password={ this.state.inputs[keyOldPassword] }
          newPassword={ this.state.inputs[keyNewPassword] }
          confirmPassword={ this.state.inputs[keyConfirmPassword] }
        />

        <AccountActions submitDeleteHandler={ this.handleSubmitDeleteAccount }/>

        { this.state.isDeleteProfileDialogOpen
          ? (
            <SprykerDialog
              handleShow={ this.handleDeleteProfileDialogShowing }
              content={ deleteProfileContent }
              isOpen={ this.state.isDeleteProfileDialogOpen }
              handleAgree={ this.handleDeleteProfileDialogAgree }
              handleDisagree={ this.handleDeleteProfileDialogDisagree }
            />
          ) : null
        }
      </div>
    );
  }
}

export const CustomerProfilePage = withStyles(styles)(CustomerProfilePageBase);
export default CustomerProfilePage;
