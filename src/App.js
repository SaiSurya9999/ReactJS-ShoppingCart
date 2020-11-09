import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="container-fluid">
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
