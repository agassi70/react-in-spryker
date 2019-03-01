import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import * as React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export const wrapIntoProviders = (component: React.ReactElement<any>) => component;

export const configureEnzyme = () => {
  configure({adapter: new Adapter()});
};
