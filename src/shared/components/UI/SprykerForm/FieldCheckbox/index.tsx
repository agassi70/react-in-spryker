import * as React from "react";
import withStyles from '@material-ui/core/styles/withStyles';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {sprykerFormStyles} from "src/shared/components/UI/SprykerForm/sprykerFormStyles";
import {IFieldCheckboxProps} from "src/shared/components/UI/SprykerForm/FieldCheckbox/types";


export const FieldCheckboxBase: React.SFC<IFieldCheckboxProps> = (props): JSX.Element => {
  const {
    classes,
    inputName,
    label,
    isChecked,
    changeHandler
  } = props;

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={changeHandler}
          name={inputName}
          value={inputName}
          classes={{root: classes.inputCheckbox, checked: classes.checkedCheckbox}}
        />
      }
      label={label}
      classes={{root: classes.outerCheckbox, label: `${classes.label} ${classes.labelCheckbox}`}}
    />
  );
};

export const FieldCheckbox = withStyles(sprykerFormStyles)(FieldCheckboxBase);
