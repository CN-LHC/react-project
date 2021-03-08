import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import modal from './modal/index';
import Demo from './routes/demo/index';

const store = createStore(modal)
ReactDOM.render(<Provider store={store}><Demo /></Provider>, document.getElementById('root'));