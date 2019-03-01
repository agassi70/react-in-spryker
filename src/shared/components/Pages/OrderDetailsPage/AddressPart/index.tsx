import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import {styles} from "./styles";
import {IAddressPart, IAddressPartProps} from "./types";


export const AddressPartBase: React.SFC<IAddressPartProps> = (props): JSX.Element => {
  const {
    classes,
    row,
  }  = props;

  if (!row || !Array.isArray(row) || !row.length) {
    return null;
  }

  const isNotEmpty = row.some(({text}) => (Boolean(text) === true));

  if (!isNotEmpty) {
    return null;
  }

  return (
    <Typography align="left"
                component="p"
                color="inherit"
    >
      { row.map(({text, isBold}: IAddressPart) => {
        if (!text) {
          return null;
        }
        let classNames = classes.item;
        if (isBold) {
          classNames += ` ${classes.bold}`;
        }
        return (
          <span key={text} className={classNames}>{text}</span>
        );
      })
      }

    </Typography>
  );
};

export const AddressPart = withStyles(styles)(AddressPartBase);
