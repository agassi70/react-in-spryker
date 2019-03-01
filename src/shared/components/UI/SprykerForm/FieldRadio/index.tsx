import * as React from "react";
import withStyles from '@material-ui/core/styles/withStyles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import {sprykerFormStyles} from "src/shared/components/UI/SprykerForm/sprykerFormStyles";
import {IFieldRadioProps} from "src/shared/components/UI/SprykerForm/FieldRadio/types";
import {IRadioItem} from "src/shared/components/UI/SprykerForm/types";


export const FieldRadioBase: React.SFC<IFieldRadioProps> = (props): JSX.Element => {
  const {
    classes,
    inputName,
    currentMode,
    radioItems,
    label,
    labelIcon,
    changeHandler,
    isItemsInRow,
  } = props;

  const isRadioItemsExist = (radioItems.length > 0);
  const isGroupLabelExists = (labelIcon || label);
  if (!isRadioItemsExist) {
    return null;
  }

  return (
    <React.Fragment>
      { (isGroupLabelExists)
        ? (<FormLabel
              component="legend"
              classes={{root: `${classes.label} ${classes.radioGroupLabel}`}}
            >
              {labelIcon ? labelIcon : label}
            </FormLabel>
        )
        : null
      }

      <RadioGroup
        aria-label={label}
        name={inputName}
        value={currentMode}
        onChange={changeHandler}
        classes={{
          root: `${isItemsInRow ? classes.radioGroupInRow : ''} ${isGroupLabelExists ? '' : classes.radioGroupNoLabel}`
        }}
      >

        {radioItems.map((item: IRadioItem) => {
          let itemClasses = `${classes.inputRadio}`;
          if (currentMode === item.value) {
            itemClasses += ` ${classes.checkedInputRadio}`;
          }
          if (isItemsInRow) {
            itemClasses += ` ${classes.inputItemsInRow}`;
          }

          return (
            <FormControlLabel
              value={item.value}
              key={`${item.value}`}
              classes={{
                root: itemClasses,
                label: `${(currentMode === item.value) ? classes.checkedRadioLabel : '' }`,
              }}
              control={<Radio
                classes={{root: classes.radio, checked: classes.checkedRadio}}
              />
              }
              label={item.label}
            />
          );
        })}

      </RadioGroup>
    </React.Fragment>
  );
};

export const FieldRadio = withStyles(sprykerFormStyles)(FieldRadioBase);
