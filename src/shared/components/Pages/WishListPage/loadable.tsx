// tslint:disable:max-line-length
import * as React from 'react';
import Loadable from 'react-loadable';

export const LoadableWishListPage = Loadable({
  loader: () =>
    import(/* webpackPrefetch: true, webpackChunkName: "LoadableWishListPage" */ 'src/shared/components/Pages/WishListPage').then(
      module => module.default,
    ),
  loading: () => <div style={ {minHeight: '100vh', textAlign: 'center'} }>Loading...</div>,
});
