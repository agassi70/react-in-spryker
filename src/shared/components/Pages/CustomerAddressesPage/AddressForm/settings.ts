import {
  InputLabelFirstName,
  InputLabelLastName,
  InputLabelSalutation,
  InputLabelCompany,
  InputLabelStreet,
  InputLabelNumber,
  InputLabelStreetExtra,
  InputLabelCity,
  InputLabelZipCode,
  InputLabelCountry,
  InputLabelPhone,
  InputLabelDefaultDeliveryAddress,
  InputLabelDefaultShippingAddress,
  InputSelectSalutationFirstItem,
  InputSelectCountryFirstItem,
} from "src/shared/constants/forms/labels";
import { salutationVariants } from "src/shared/constants/customer";
import { TSalutationVariant } from "src/shared/interfaces/customer";
import { ICountries } from "src/shared/reducers/Common/Init";
import { IFormField } from "src/shared/components/UI/SprykerForm/types";
import { AddressFormState } from './types';
import { InputChangeEvent } from "src/shared/interfaces/common/react";


export interface IFieldInput {
  name: string;
  value: string;
}

export const setFormFields = (
  currentState: AddressFormState,
  countries: ICountries[],
  handleCheckBox: (event: InputChangeEvent) => void
): Array<IFormField[]> => {
  const {
    salutation,
    firstName,
    lastName,
    company,
    address1,
    address2,
    address3,
    zipCode,
    city,
    iso2Code,
    phone,
    isDefaultShipping,
    isDefaultBilling,
    submitted,
  } = currentState;

  return ([
    [{
      type: 'select',
      inputName: 'salutation',
      inputValue: salutation || ' ',
      spaceNumber: 3,
      isRequired: true,
      label: InputLabelSalutation,
      isError: submitted && !salutation,
      menuItems: salutationVariants
        .map((item: TSalutationVariant) => ({value: item.value, name: item.label})),
      menuItemFirst: {
        value: " ",
        name: InputSelectSalutationFirstItem,
        selected: true,
        disabled: true,
      },
    }], [{
      type: 'input',
      inputName: 'firstName',
      inputValue: firstName,
      spaceNumber: 6,
      isRequired: true,
      label: InputLabelFirstName,
      isError: submitted && !firstName,
    }, {
      type: 'input',
      inputName: 'lastName',
      inputValue: lastName,
      spaceNumber: 6,
      isRequired: true,
      label: InputLabelLastName,
      isError: submitted && !lastName,
    }], [{
      type: 'input',
      inputName: 'company',
      inputValue: company,
      spaceNumber: 6,
      label: InputLabelCompany,
    }], [{
      type: 'input',
      inputName: 'address1',
      inputValue: address1,
      spaceNumber: 6,
      isRequired: true,
      label: InputLabelStreet,
      isError: submitted && !address1,
    }, {
      type: 'input',
      inputName: 'address2',
      inputValue: address2,
      spaceNumber: 3,
      isRequired: true,
      label: InputLabelNumber,
      isError: submitted && !address2,
    }], [{
      type: 'input',
      inputName: 'address3',
      inputValue: address3,
      spaceNumber: 6,
      label: InputLabelStreetExtra,
      isError: false,
    }], [{
      type: 'input',
      inputName: 'city',
      inputValue: city,
      spaceNumber: 6,
      isRequired: true,
      label: InputLabelCity,
      isError: submitted && !city,
    }, {
      type: 'input',
      inputName: 'zipCode',
      inputValue: zipCode,
      spaceNumber: 3,
      isRequired: true,
      label: InputLabelZipCode,
      isError: submitted && !zipCode,
    }], [{
      type: 'select',
      inputName: 'iso2Code',
      inputValue: iso2Code || ' ',
      spaceNumber: 6,
      isRequired: true,
      label: InputLabelCountry,
      isError: submitted && !iso2Code,
      menuItems: countries
        .map((country: ICountries) => ({value: country.iso2Code, name: country.name})),
      menuItemFirst: {
        value: " ",
        name: InputSelectCountryFirstItem,
        selected: true,
        disabled: true,
      },
    }, {
      type: 'input',
      inputName: 'phone',
      inputValue: phone,
      inputType: 'tel',
      spaceNumber: 6,
      label: InputLabelPhone,
    }], [{
      type: 'checkbox',
      inputName: 'isDefaultBilling',
      inputValue: isDefaultBilling,
      spaceNumber: 6,
      label: InputLabelDefaultDeliveryAddress,
      onChangeOwnHandler: handleCheckBox,
    }, {
      type: 'checkbox',
      inputName: 'isDefaultShipping',
      inputValue: isDefaultShipping,
      spaceNumber: 6,
      label: InputLabelDefaultShippingAddress,
      onChangeOwnHandler: handleCheckBox,
    }],
  ]);
};
