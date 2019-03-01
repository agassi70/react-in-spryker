import * as React from 'react';
import { render } from 'react-dom';
import { App } from './containers/App';


function main() {
  render(<App/>, document.getElementById('app'));
}

main();
