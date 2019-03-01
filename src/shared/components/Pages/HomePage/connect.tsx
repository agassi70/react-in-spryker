import * as React from 'react';
import { reduxify } from 'src/shared/lib/redux-helper';

const mapStateToProps = (state: any, ownProps: any) => {
  return ({
  });
};

export const connect = reduxify(
  mapStateToProps,
  (dispatch: Function) => ({
    dispatch
  }),
);
