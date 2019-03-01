import * as React from "react";
import {WithStyles} from '@material-ui/core/styles/withStyles';
import {sprykerFormStyles} from "src/shared/components/UI/SprykerForm/sprykerFormStyles";
import {IFormField} from "src/shared/components/UI/SprykerForm/types";


export interface IFieldCheckboxProps extends WithStyles<typeof sprykerFormStyles> {
  label: IFormField["label"];
  inputName: IFormField["inputName"];
  isError: IFormField["isError"];
  isChecked: boolean;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
