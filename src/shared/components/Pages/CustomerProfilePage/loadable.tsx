// tslint:disable:max-line-length
import * as React from 'react';
import Loadable from 'react-loadable';

export const LoadableCustomerProfilePage = Loadable({
  loader: () =>
    import(/* webpackPrefetch: true, webpackChunkName: "LoadableCustomerProfilePage" */ 'src/shared/components/Pages/CustomerProfilePage').then(
      module => module.default,
    ),
  loading: () => <div>Loading...</div>,
});
