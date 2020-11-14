import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';

import './App.css';

// import PageNotFound from './components/PageNotFound/PageNotFound'; || Lazy loading using React Package
const PageNotFound = React.lazy(() => import('./components/PageNotFound/PageNotFound'));

const App = () => {
  return (
    <BrowserRouter basename="/reactjs/">
      <div className="App">
        <Navbar></Navbar>
        <div className="container-fluid">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />

            <Route render={() => {
              return <Suspense fallback={<div>Loading...</div>}>
                <PageNotFound />
              </Suspense>
            }}></Route>
          </Switch>
        </div>
      </div>
      <div id="spinner" hidden="hidden" className="spinner"></div>
    </BrowserRouter>

  );
}

export default App;

/* Lazy Loading Component Manually

import lazyLoader from './components/Auxilary/lazyLoader';

const Login = lazyLoader(() => {
  return import('./components/Login/Login');
});

*/
