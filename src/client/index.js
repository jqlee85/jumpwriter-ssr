import React from 'react';
import ReactDOM from 'react-dom';
import styles from './scss/index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

registerServiceWorker();

ReactDOM.render((
  <BrowserRouter>
  <App />
  </BrowserRouter>
), document.getElementById('root'));
