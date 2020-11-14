import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const Cart = (props) => {

    const [prevState,setState] = useState({
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        totalCost: 0
    });

    const priceCalucualte = () => {
        let totalCost = 0;
        let arr = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        for (let k = 0; k < arr.length; k++) {
            totalCost = totalCost + (arr[k].price * arr[k].qty)
        }
        return totalCost;
    };

    const cartHandler = (id, type) => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        let temp = 0;
        switch(type) {
          case "ADD":
              temp = (cart[id].qty + 1) < 6 ? cart[id].qty++ : null;
              break;
          case "SUB":
              temp = cart[id].qty > 1 ? cart[id].qty-- : null;
              break;
          case "REMOVE":
              cart.splice(id, 1);
              break;
           default:
               break;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        
        if(type === "REMOVE")
        props.cartUpdate();

        setState({
            ...prevState,
            cart: cart
        });
    };

    return (
        <React.Fragment>
            <h6 className="text-left">My Cart</h6>
            <hr></hr>

            {
                prevState.cart.length === 0 ? <div className="container">
                    <img style={{
                        width: "100%",
                        height: "auto"
                    }} src="https://i.imgur.com/xQU6em6.png" alt="Not Found"></img>

                </div> : null
            }
            <div className="row px-5">
                <div className="col-md-7">
                    <div className="col">
                        {
                            prevState.cart.map((item, index) => {
                                return (
                                    <div className="row shadow p-2 bg-white rounded border" key={index}>
                                        <div className="col">
                                            <img src={item.img} alt="Not Found!" />
                                        </div>
                                        <div className="col">
                                            <h5>{item.name}</h5>
                                            <h5><i className="fas fa-rupee-sign"></i> {item.price}</h5>
                                            <button onClick={() => cartHandler(index, "REMOVE")} className="btn btn-danger">Remove</button>
                                        </div>
                                        <div className="col ml-auto">
                                            <button onClick={() => cartHandler(index, "SUB")} className="rounded-circle btn btn-light">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button className="btn btn-light">{item.qty}</button>
                                            <button onClick={() => cartHandler(index, "ADD")} className="rounded-circle btn btn-light">
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>

                                    </div>
                                )

                            })
                        }



                    </div>
                </div>
                {
                    prevState.cart.length > 0 ? <div className="col-md-4 ml-auto mr-2 ">
                        <div className="col border p-3 shadow rounded bg-white">
                            <h6>PRICE DETAILS</h6>
                            <hr></hr>
                            <div className="row">

                                <div className="col text-left">

                                    <h6>Price ( {prevState.cart.length} items )</h6>
                                    <h6>Delivery Charges</h6>
                                    <hr></hr>
                                    <h6>Amount Payable: </h6>
                                </div>
                                <div className="col bg-white text-left">
                                    <h6><i className="fas fa-rupee-sign"></i> 150000</h6>
                                    <h6 style={{
                                        color: "green"
                                    }}>FREE</h6>
                                    <hr></hr>
                                    <h6><i className="fas fa-rupee-sign"></i> {priceCalucualte()}</h6>


                                </div>

                            </div>

                            <br></br>
                            <button className="btn btn-warning mr-1">Check Out</button>
                            <button onClick={() => { props.history.push('/home'); }} className="btn btn-primary">Shop More</button>

                        </div>
                    </div> : null
                }
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        cartCount: state.cartCount
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        cartUpdate: () => dispatch({ type: "cartUpdate" })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart));