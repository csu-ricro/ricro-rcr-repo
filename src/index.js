import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from 'ricro-app-template';

import config from './config.json';
import Section from './Section';
import sections from './assets/sections.json';

import packageJson from '../package.json';
console.log('v' + packageJson.version);

ReactDOM.render(
  <App config={config} reduxMiddleware={window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()}>
    {sections.map((section, i) => <Section key={i} section={section}/>)}
  </App>,
  document.getElementById('root')
);
registerServiceWorker();
