import * as React from 'react';
import { Route } from 'react-router';

import { AppHandler } from './containers/AppHandler';
import config from './config';

export const getRoutes = function() {
  return (
    <Route path={ config.WEB_PATH } component={ AppHandler }/>
  );
};
