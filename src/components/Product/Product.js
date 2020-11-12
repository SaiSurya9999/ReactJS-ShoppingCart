import React from 'react';
// Adds Routing props to the props as it is not rendered directly from route component
import { withRouter } from 'react-router-dom';

import './Product.css';

const Product = (prop) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body p-0">
                    <img src={prop.img} alt="Not Found!"></img>
                </div>
            </div>
            <div className="card-footer text-left">

                <strong>{prop.name}</strong>
                <p> {prop.desc}</p>
                <strong> <i className="fas fa-rupee-sign"></i> 100</strong> <br></br>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <button className="btn btn-link">1 Review</button>
                <br></br>
                <small className="text-muted">Seller: Big Basket</small>
                <br></br>

                <br></br>
                {
                    !prop.check ? <button onClick={() => { prop.click(); prop.cartUpdate(); }} className={prop.check ? "btn btn-warning disabled" : "btn btn-warning"}>Add to Cart</button>
                        : <div> <button onClick={() => { prop.removeFromCart(); prop.cartUpdate(); }} className="btn btn-light"> <i className="fas fa-minus"></i> </button>
                            <button onClick={() => { prop.click(); prop.cartUpdate(); }} className="btn btn-light"> <i className="fas fa-plus"></i> </button> </div>
                }

                <button onClick={() => { prop.buyClick(); prop.cartUpdate(); }} className="btn btn-primary ml-2">Buy Now</button>

            </div>
        </div>
    );
};

export default withRouter(Product);