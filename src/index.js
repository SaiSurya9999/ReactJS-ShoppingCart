import React from 'react';
import ReactDOM from 'react-dom';


// CSS Package imports
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'animate.css/animate.css';

// Javascript Package Imports
import 'bootstrap/dist/js/bootstrap.js';
import axios from 'axios';
import 'jquery/dist/jquery';
import 'parsleyjs/dist/parsley';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux for better state management
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);



// RootUrl
axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.headers.common['authorization', localStorage.getItem('token') ? localStorage.getItem('token').toString() : "Not Available"]

// HTTP Request Interceptors. Eg: Loader Display and Adding Authorization headers etc
axios.interceptors.request.use(req => {
  return req;
}, err => {
  console.log(err);
  return Promise.reject(err);
});

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
