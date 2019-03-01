// tslint:disable:max-line-length
import * as React from 'react';
import Loadable from 'react-loadable';

export const LoadableCheckoutPage = Loadable({
  loader: () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "LoadableCheckoutPage" */
      'src/shared/components/Pages/CheckoutPage').then(
      module => module.default,
    ),
  loading: () => <div style={ {minHeight: '100vh', textAlign: 'center'} }>Loading...</div>,
});
