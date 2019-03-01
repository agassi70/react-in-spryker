import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import { styles } from './styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { IRangeInputError } from 'src/shared/components/UI/SprykerRangeFilter';
import { BlurEvent, InputChangeEvent } from "src/shared/interfaces/common/react";

interface RangeInputProps extends WithStyles<typeof styles>, IRangeInputError {
  title: string;
  className: string;
  handleChangeValues: (event: InputChangeEvent) => void;
  currentValue: string | number;
  max: number;
  min: number;
  attributeName: string;
  isMin: boolean;
  handleBlur: (event: BlurEvent) => void;
}

const titlePartMax = ' to';
const titlePartMin = ' from';

export const RangeInputBase: React.SFC<RangeInputProps> = (props) => {
  const {
    classes,
    className,
    isMin,
    title,
    handleChangeValues,
    currentValue,
    min,
    max,
    attributeName,
    handleBlur,
    isMoreError,
    isLessError,
  } = props;

  let errorText: string;
  const isError = (isMoreError || isLessError);
  if (isError) {
    errorText = `It can't be ${isLessError ? `less` : `more`} than ${isLessError ? min : max}!`;
  }

  return (
    <FormControl className={ className }>
      <Grid container justify="flex-start" alignItems="center">
        <Grid item>
          <span className={ classes.title }>{ isMin ? `${title} ${titlePartMin}` : `${title} ${titlePartMax}` }</span>
        </Grid>
        <Grid item>
          { isError
            ? <label className={ classes.label }>{ errorText }</label>
            : null
          }
          <TextField
            id={ `${attributeName}` }
            error={ isError }
            InputProps={ {
              disableUnderline: false,
              classes: {input: classes.value, error: classes.error},
            } }
            InputLabelProps={ {
              FormLabelClasses: {
                root: classes.label,
              },
            } }
            type="text"
            value={ currentValue }
            onChange={ handleChangeValues }
            onBlur={ handleBlur }
          />
        </Grid>
      </Grid>
    </FormControl>
  );
};

export const RangeInput = withStyles(styles)(RangeInputBase);
