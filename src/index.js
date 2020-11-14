import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

// CSS Package imports
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'animate.css/animate.css';
import 'toastr/build/toastr.css';

// Javascript Package Imports
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery';
import 'toastr/toastr';


import interceptRequest from './interceptor/interceptor';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux for better state management
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

// Request Interceptor for adding authorization headers and spinner
interceptRequest();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
