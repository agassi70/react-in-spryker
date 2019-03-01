import {
  InputLabelCity,
  InputLabelCompany,
  InputLabelCountry,
  InputLabelFirstName,
  InputLabelLastName,
  InputLabelNumber,
  InputLabelPhone,
  InputLabelSalutation,
  InputLabelStreet,
  InputLabelStreetExtra,
  InputLabelZipCode,
  InputSelectCountryFirstItem,
  InputSelectSalutationFirstItem
} from "src/shared/constants/forms/labels";
import {salutationVariants} from "src/shared/constants/customer";
import {TSalutationVariant} from "src/shared/interfaces/customer";
import {IFormSettings} from "src/shared/components/UI/SprykerForm/types";
import {IAddressParams} from "src/shared/components/Pages/CheckoutPage/types/formSettingsTypes";
import {ICountries} from "src/shared/reducers/Common/Init";


export const getAddressFormSettings = (formName: string, params: IAddressParams): IFormSettings => {
  const {
    inputsData: {
      firstName,
      lastName,
      salutation,
      address1,
      address2,
      address3,
      zipCode,
      city,
      country,
      company,
      phone,
    },
    inputsConfig: {
      firstName: firstNameConfig,
      lastName: lastNameConfig,
      salutation: salutationConfig,
      address1: address1Config,
      address2: address2Config,
      address3: address3Config,
      zipCode: zipCodeConfig,
      city: cityConfig,
      country: countryConfig,
      company: companyConfig,
      phone: phoneConfig,
    },
    countriesCollection,
    submitHandler,
    inputChangeHandler,
    onBlurHandler,
  } = params;

  const isCountriesCollectionExist = Boolean(Array.isArray(countriesCollection) && countriesCollection.length > 0);

  const formSettings: IFormSettings = {
    formName,
    onChangeHandler: inputChangeHandler,
    onSubmitHandler: submitHandler,
    onBlurHandler,
    fields: [
      [
        {
          type: 'select',
          inputName: salutationConfig.inputName,
          inputValue: salutation.value,
          spaceNumber: 3,
          isRequired: salutationConfig.isRequired,
          label: InputLabelSalutation,
          isError: salutation.isError,
          menuItems: salutationVariants
            .map((item: TSalutationVariant) => ({value: item.value, name: item.label})),
          menuItemFirst: {
            value: " ",
            name: InputSelectSalutationFirstItem,
            selected: true,
            disabled: true,
          },
        }
      ],
      [
        {
          type: 'input',
          inputName: firstNameConfig.inputName,
          inputValue: firstName.value,
          spaceNumber: 6,
          isRequired: firstNameConfig.isRequired,
          label: InputLabelFirstName,
          isError: firstName.isError,
        },
        {
          type: 'input',
          inputName: lastNameConfig.inputName,
          inputValue: lastName.value,
          spaceNumber: 6,
          isRequired: lastNameConfig.isRequired,
          label: InputLabelLastName,
          isError: lastName.isError,
        }
      ],
      [
        {
          type: 'input',
          inputName: companyConfig.inputName,
          inputValue: company.value,
          spaceNumber: 6,
          isRequired: companyConfig.isRequired,
          label: InputLabelCompany,
          isError: company.isError,
        },
      ],
      [
        {
          type: 'input',
          inputName: address1Config.inputName,
          inputValue: address1.value,
          spaceNumber: 6,
          isRequired: address1Config.isRequired,
          label: InputLabelStreet,
          isError: address1.isError,
        },
        {
          type: 'input',
          inputName: address2Config.inputName,
          inputValue: address2.value,
          spaceNumber: 3,
          isRequired: address2Config.isRequired,
          label: InputLabelNumber,
          isError: address2.isError,
        }
      ],
      [
        {
          type: 'input',
          inputName: address3Config.inputName,
          inputValue: address3.value,
          spaceNumber: 6,
          isRequired: address3Config.isRequired,
          label: InputLabelStreetExtra,
          isError: address3.isError,
        },
      ],
      [
        {
          type: 'input',
          inputName: cityConfig.inputName,
          inputValue: city.value,
          spaceNumber: 6,
          isRequired: cityConfig.isRequired,
          label: InputLabelCity,
          isError: city.isError,
        },
        {
          type: 'input',
          inputName: zipCodeConfig.inputName,
          inputValue: zipCode.value,
          spaceNumber: 6,
          isRequired: zipCodeConfig.isRequired,
          label: InputLabelZipCode,
          isError: zipCode.isError,
        },
      ],
      [
        {
          type: 'select',
          inputName: countryConfig.inputName,
          inputValue: country.value,
          spaceNumber: 6,
          isRequired: countryConfig.isRequired,
          label: InputLabelCountry,
          isError: country.isError,
          menuItems: isCountriesCollectionExist
                     ? countriesCollection
                        .map((item: ICountries) => ({value: item.iso2Code, name: item.name}))
                     : null,
          menuItemFirst: {
            value: " ",
            name: InputSelectCountryFirstItem,
            selected: true,
            disabled: true,
          },
        },
        {
          type: 'input',
          inputName: phoneConfig.inputName,
          inputValue: phone.value,
          spaceNumber: 6,
          isRequired: phoneConfig.isRequired,
          label: InputLabelPhone,
          isError: phone.isError,
        },
      ],
    ],
  };
  return formSettings;
};
