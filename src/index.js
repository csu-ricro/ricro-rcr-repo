// import React from 'react';
// import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
// import App from 'ricro-app-template';
//
// import config from './config.json';
// import Section from './Section';
// import sections from './assets/sections.json';
//
// import packageJson from '../package.json';
//
// console.log(`v${packageJson.version}`);
//
// ReactDOM.render(
//   <App
//     config={config}
//     reduxMiddleware={
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()}
//   >
//     {sections.map((section, i) => <Section key={i} section={section} />)}
//   </App>,
//   document.getElementById('root'),
// );
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import App from 'colostate-ricro-ui';
import registerServiceWorker from './registerServiceWorker';
import config from './config.json';
import SectionsContainer from './Section';
import { version, name as appName } from '../package.json';

console.log(`${appName}@${version}`); // eslint-disable-line no-console

const routes = [<Route key={0} path="/" exact component={SectionsContainer} />];

const reduxMiddleware =
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
  <App config={config} routes={routes} reduxMiddleware={reduxMiddleware} />,
  document.getElementById('root'),
);
registerServiceWorker();
