// tslint:disable:max-line-length
import * as React from 'react';
import Loadable from 'react-loadable';

export const LoadableHomePage = Loadable({
  loader: () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "LoadableHomePage" */
      'src/shared/components/Pages/HomePage').then(
      module => module.default,
    ),
  loading: () => <div style={ {minHeight: '100vh', textAlign: 'center'} }>Loading...</div>,
});
