import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

import {IFieldTextInputProps} from "src/shared/components/UI/SprykerForm/FieldTextInput/types";
import {OptionalPlaceholder} from "src/shared/constants/forms/labels";
import {sprykerFormStyles} from "src/shared/components/UI/SprykerForm/sprykerFormStyles";

export const FieldTextInputBase: React.SFC<IFieldTextInputProps> = (props): JSX.Element => {
  const {
    classes,
    inputValue,
    inputType,
    formName,
    inputName,
    onChangeHandler,
    label,
    isError,
    isRequired,
    onBlurHandler,
    placeholderText
  }  = props;

  const placeholder = placeholderText ? placeholderText : (isRequired ? null : OptionalPlaceholder);

  return (
    <TextField
      required={isRequired ? isRequired : false}
      id={`${formName}-${inputName}`}
      label={label ? label : null}
      name={inputName}
      error={isError}
      InputProps={{
        disableUnderline: true,
        classes: {root: classes.inputRoot, input: classes.input, error: classes.error},
      }}
      InputLabelProps={{
        shrink: true,
        FormLabelClasses: {
          root: classes.label
        }
      }}
      type={inputType || 'text'}
      value={inputValue}
      placeholder={placeholder}
      className={classes.textField}
      margin="normal"
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      fullWidth
    />
  );
};

export const FieldTextInput = withStyles(sprykerFormStyles)(FieldTextInputBase);
