import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import modal from './modal/index';
import App from './app';

const store = createStore(modal)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
