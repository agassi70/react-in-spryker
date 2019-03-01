import * as React from "react";
import {WithStyles} from '@material-ui/core/styles/withStyles';
import {sprykerFormStyles} from "src/shared/components/UI/SprykerForm/sprykerFormStyles";
import {IFormField, IRadioItem} from "src/shared/components/UI/SprykerForm/types";


export interface IFieldRadioProps extends WithStyles<typeof sprykerFormStyles> {
  label: IFormField["label"];
  inputName: IFormField["inputName"];
  currentMode: IRadioItem["value"];
  radioItems: IFormField["radioItems"];
  isError: IFormField["isError"];
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelIcon?: IFormField["labelIcon"];
  isItemsInRow?: IFormField["isItemsInRow"];
}
