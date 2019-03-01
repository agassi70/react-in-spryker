import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {FormattedDate} from 'react-intl';

import {styles} from './styles';
import {IOrderDateProps} from "./types";
import {formatDateToString, getDateUtcUnix} from "src/shared/helpers/common/dates";


export const OrderDateBase: React.SFC<IOrderDateProps> = (props): JSX.Element => {
  const {
    classes,
    date,
    title,
    timeZone,
  } = props;
  const dateObj = new Date(date);
  const dateToShow = formatDateToString(dateObj);
  const dateUTC = getDateUtcUnix(dateObj);

  return (
    <React.Fragment>
      {`${title} ${dateToShow}, `}
      <FormattedDate
        value={dateUTC}
        timeZone={timeZone}
        hour12={true}
        hour="2-digit"
        minute="2-digit"
      />
    </React.Fragment>
  );
};

export const OrderDate = withStyles(styles)(OrderDateBase);
