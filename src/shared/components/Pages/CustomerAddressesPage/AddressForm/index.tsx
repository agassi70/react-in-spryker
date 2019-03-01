import * as React from 'react';
import { toast } from 'react-toastify';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { emptyRequiredFieldsErrorText } from 'src/shared/constants/messages/errors';
import { CustomerPageTitle } from 'src/shared/components/Common/CustomerPageTitle';
import { SprykerButton } from 'src/shared/components/UI/SprykerButton';
import { SprykerForm } from 'src/shared/components/UI/SprykerForm';

import { styles } from '../styles';
import { AddressFormProps as Props, AddressFormState as State } from './types';
import { connect } from './connect';
import { setFormFields, IFieldInput } from './settings';
import { FormEvent, InputChangeEvent } from "src/shared/interfaces/common/react";


@connect
export class AddressForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      salutation: props.currentAddress ? props.currentAddress.salutation : '',
      firstName: props.currentAddress ? props.currentAddress.firstName : '',
      lastName: props.currentAddress ? props.currentAddress.lastName : '',
      company: props.currentAddress ? props.currentAddress.company || '' : '',
      address1: props.currentAddress ? props.currentAddress.address1 : '',
      address2: props.currentAddress ? props.currentAddress.address2 : '',
      address3: props.currentAddress ? props.currentAddress.address3 || '' : '',
      zipCode: props.currentAddress ? props.currentAddress.zipCode : '',
      city: props.currentAddress ? props.currentAddress.city : '',
      country: props.currentAddress ? props.currentAddress.country : '',
      iso2Code: props.currentAddress ? props.currentAddress.iso2Code : '',
      phone: props.currentAddress ? props.currentAddress.phone || '' : '',
      isDefaultShipping: props.currentAddress ? props.currentAddress.isDefaultShipping : true,
      isDefaultBilling: props.currentAddress ? props.currentAddress.isDefaultBilling : true,
      submitted: false,
    };
  }

  public componentDidUpdate = (prevProps: Props) => {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.props.routerGoBack();
    }
  }

  public handleChange = (event: {target: IFieldInput}): void => {
    const {name, value}: IFieldInput = event.target;
    this.setState(state => ({...state, [name]: value}));
  };

  public handleCheckbox = (event: any): void => {
    event.persist();
    this.setState(prevState => ({...prevState, [event.target.name]: event.target.checked}));
  }

  public handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    const {salutation, firstName, lastName, address1, address2, zipCode, city, iso2Code} = this.state;
    this.setState(() => ({submitted: true}));

    if (!salutation || !firstName || !lastName || !address1 || !address2 || !zipCode || !city || !iso2Code) {
      toast.warn(emptyRequiredFieldsErrorText);
      return;
    }

    const payload = {...this.state};
    delete payload.submitted;

    if (this.props.currentAddress) {
      this.props.updateAddress(this.props.currentAddress.id, this.props.customer, payload);
    } else {
      this.props.addAddress(payload, this.props.customer);
    }
  };

  public render(): JSX.Element {
    const { classes, currentAddress, countries, routerGoBack, isLoading } = this.props;

    const pageTitle = `${currentAddress ? 'Edit' : 'Add New'} Address`;
    const currentState = { ...this.state };
   // delete currentState.submitted;

    return (
      <Grid container>
        <Grid item xs={ 12 }>
          <CustomerPageTitle title={ pageTitle } />
        </Grid>

        <Grid item xs={ 9 }>
          <SprykerForm
            form={{
              formName: 'addressForm',
              onChangeHandler: this.handleChange,
              onSubmitHandler: this.handleSubmitForm,
              fields: setFormFields(currentState, countries, this.handleCheckbox),
            }}
            SubmitButton={
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <SprykerButton
                    title="save"
                    btnType="submit"
                    extraClasses={classes.addButton} disabled={ isLoading }
                  />
                </Grid>
              </Grid>
            }
          />
        </Grid>
        <Grid item xs={ 12 } className={ classes.addButton }>
          <Button
            color="primary"
            onClick={ () => routerGoBack() }
            disabled={ isLoading }
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export const AddressFormPage = withStyles(styles)(AddressForm);
