// tslint:disable:max-line-length
import * as React from 'react';
import Loadable from 'react-loadable';

export const LoadablePasswordResetPage = Loadable({
  loader: () =>
    import(/* webpackPrefetch: true, webpackChunkName: "LoadablePasswordReset" */ 'src/shared/components/Pages/LoginPage/ResetPassword').then(
      module => module.default,
    ),
  loading: () => <div>Loading...</div>,
});
