// tslint:disable:max-line-length
import * as React from 'react';
import Loadable from 'react-loadable';

export const LoadableCustomerAddressPage = Loadable({
  loader: () =>
    import(/* webpackPrefetch: true, webpackChunkName: "LoadableCustomerAddressPage" */ 'src/shared/components/Pages/CustomerAddressesPage').then(
      module => module.default,
    ),
  loading: () => <div>Loading...</div>,
});
