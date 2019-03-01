import * as React from 'react';
import {GridSize} from "@material-ui/core/Grid";
import { WithStyles } from '@material-ui/core/styles/withStyles';
import {
  TCustomerEmail,
  TCustomerFirstName,
  TCustomerLastName,
  TCustomerPassword,
  TCustomerSalutation,
  TCustomerUsername
} from "src/shared/interfaces/customer";
import {
  TAddress,
  TAddressCity,
  TAddressCompany,
  TAddressCountry,
  TAddressPhone,
  TAddressZipCode,
  TIso2Code
} from "src/shared/interfaces/addresses/index";
import {SprykerSelectProps} from "src/shared/components/UI/SprykerSelect/index";
import {sprykerFormStyles} from "./sprykerFormStyles";
import {InputChangeEvent, BlurEvent, FormEvent} from "src/shared/interfaces/common/react";


export interface IFormField {
  type: 'input' | 'select' | 'checkbox' | 'radio';
  inputType?: 'email' | 'password' | 'number' | 'range' | 'tel';
  inputName: string;
  inputValue: TFormInputValue;
  spaceNumber: GridSize;
  isRequired?: boolean;
  onChangeOwnHandler?: React.EventHandler<any>;
  onBlurOwnHandler?: React.EventHandler<any>;
  label?: string;
  isError?: boolean;
  menuItems?: SprykerSelectProps["menuItems"];
  menuItemFirst?: SprykerSelectProps["menuItemFirst"];
  title?: SprykerSelectProps["title"];
  radioItems?: Array<IRadioItem>;
  isItemsInRow?: boolean;
  labelIcon?: JSX.Element | null;
  WrapperParentComponent?: React.SFC | null;
  WrapperChildComponent?: React.SFC | null;
}

export interface IFormSettings {
  formName: string;
  onChangeHandler?: (event: InputChangeEvent) => void;
  onBlurHandler?: (event: BlurEvent) => void;
  onSubmitHandler: (event: FormEvent) => void;
  fields: Array<Array<IFormField>>;
  controlsGroupClassName?: string;
}

export interface ISprykerFormProps extends WithStyles<typeof sprykerFormStyles> {
  form: IFormSettings;
  formClassName?: string;
  SubmitButton?: JSX.Element | null;
}

export interface IRadioItem {
  value: string;
  label: React.ReactNode;
}

export type TFormInputValue = string | number | boolean;
