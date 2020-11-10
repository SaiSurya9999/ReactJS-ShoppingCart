import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import "./Navbar.css";

const Navbar = (props) => {
    let cartCount = 0;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" ><i className="fas fa-gifts"></i> JustShop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact to="/home" activeClassName="active" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="login" activeClassName="active" className="nav-link" >Login/Signup</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            My Account
                                </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" >My Orders</a>
                            <a className="dropdown-item" >Settings</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" >Returns/Refunds</a>
                        </div>
                    </li>
                </ul>


                <div className="btn-group dropleft">
                    <button type="button" className="btn btn-secondary dropdown-toggle mr-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        All
                      </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item">All</a>
                        <a className="dropdown-item">Food and Beverages</a>
                        <a className="dropdown-item">Books</a>
                        <a className="dropdown-item">Electronics and Appliances</a>
                        <a className="dropdown-item">Fashion</a>
                    </div>
                </div>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                <Link to="/cart">
                    <button className="btn">
                        <h3><i style={{ color: "#fff" }} className="fas fa-shopping-cart"></i>
                            {
                                cartCount > 0 ? <span className='badge badge-warning' id='lblCartCount'> 50 </span> : null
                            }
                        </h3>
                    </button>
                </Link>
            </div>
        </nav>


    );
};

export default Navbar;