import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import 'normalize.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Root } from 'src/shared/containers/Root';


injectTapEventPlugin();

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

export const App = () => (
  <BrowserRouter>
    <Root history={ history }/>
  </BrowserRouter>
);
