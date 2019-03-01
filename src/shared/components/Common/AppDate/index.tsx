import * as React from 'react';
import {reduxify} from 'src/shared/lib/redux-helper';
import {FormattedDate} from 'react-intl';
import {getAppTimeZone, TAppTimeZone} from 'src/shared/reducers/Common/Init';
import {TOrderDate} from 'src/shared/interfaces/order';

interface AppDateProps {
  value: TOrderDate;
  timeZone: TAppTimeZone;
}

export const AppDateBase: React.SFC<AppDateProps> = props => {
  const {value, timeZone} = props;

  const date = new Date(value);
  const dateUtcUnix = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  );

  return value ? (
    <FormattedDate
      value={dateUtcUnix}
      timeZone={timeZone}
      year="numeric"
      month="2-digit"
      day="2-digit"
    />
  ) : null;
};

export const AppDate = reduxify((state: any, ownProps: any) => {
  const timeZone: TAppTimeZone = getAppTimeZone(state, ownProps);
  return {
    timeZone,
  };
})(AppDateBase);
