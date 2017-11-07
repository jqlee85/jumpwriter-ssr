import React from 'react';
import ReactDOM from 'react-dom';
import styles from './scss/index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './routes';
registerServiceWorker();

ReactDOM.render((
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
), document.getElementById('root'));
