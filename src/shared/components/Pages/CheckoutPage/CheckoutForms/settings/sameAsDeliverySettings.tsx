import {
  InputLabelSameAsDelivery,
} from "src/shared/constants/forms/labels";
import {IFormSettings} from "src/shared/components/UI/SprykerForm/types";
import {ISameAsDeliveryParams} from "src/shared/components/Pages/CheckoutPage/types/formSettingsTypes";


export const getSameAsDeliveryFormSettings = ( formName: string, params: ISameAsDeliveryParams): IFormSettings => {
  const {
    isSameAsDelivery,
    submitHandler,
    inputChangeHandler,
  } = params;

  const formSettings: IFormSettings = {
    formName,
    onChangeHandler: inputChangeHandler,
    onSubmitHandler: submitHandler,
    fields: [
      [
        {
          type: 'checkbox',
          inputName: "sameAsDelivery",
          inputValue: isSameAsDelivery,
          spaceNumber: 12,
          isRequired: false,
          label: InputLabelSameAsDelivery,
          isError: false,
        }
      ]
    ],
  };

  return formSettings;
};
