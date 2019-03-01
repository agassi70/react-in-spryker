import {IFormSettings} from "src/shared/components/UI/SprykerForm/types";
import {
  IPaymentInvoiceParams
} from "src/shared/components/Pages/CheckoutPage/types/formSettingsTypes";
import {InputLabelPaymentDateOfBirth} from "src/shared/constants/forms/labels";


export const getInvoiceFormSettings = ( formName: string, params: IPaymentInvoiceParams): IFormSettings => {
  const {
    inputsData: {
      dateOfBirth,
    },
    inputsConfig: {
      dateOfBirth: dateOfBirthConfig,
    },
    submitHandler,
    inputChangeHandler,
    onBlurHandler,
  } = params;


  const formSettings: IFormSettings = {
    formName,
    onChangeHandler: inputChangeHandler,
    onSubmitHandler: submitHandler,
    onBlurHandler,
    fields: [
      [
        {
          type: 'input',
          inputName: dateOfBirthConfig.inputName,
          inputValue: dateOfBirth.value,
          spaceNumber: 6,
          isRequired: dateOfBirthConfig.isRequired,
          label: InputLabelPaymentDateOfBirth,
          isError: dateOfBirth.isError,
        },
      ],
    ],
  };
  return formSettings;
};
