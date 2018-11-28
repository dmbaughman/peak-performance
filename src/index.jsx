import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { LocalizeProvider } from 'react-localize-redux';
import App from './containers/App';
import './scss/styles.scss';

render(
  <LocalizeProvider>
    <App />
  </LocalizeProvider>,
  document.getElementById('app-root')
);
