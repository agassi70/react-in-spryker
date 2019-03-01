// tslint:disable:max-line-length
import * as React from 'react';
import Loadable from 'react-loadable';

export const LoadablePasswordForgotPage = Loadable({
  loader: () =>
    import(/* webpackPrefetch: true, webpackChunkName: "LoadablePasswordForgot" */ 'src/shared/components/Pages/LoginPage/ForgotPasswordPage').then(
      module => module.default,
    ),
  loading: () => <div>Loading...</div>,
});
