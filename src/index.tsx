import { install } from 'offline-plugin/runtime';
import React from 'react';
import { render } from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import App from './App';
import './assets/main.scss';

install();
smoothscroll.polyfill();

render(<App />, document.getElementById('app'));
