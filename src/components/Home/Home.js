import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Product from '../Product/Product'
import './Home.css'
import $ from 'jquery/dist/jquery';


let products = [];

class Home extends Component {

    componentDidMount() {
        products = [];
        // API calling in Life Cycle Hook
        axios.get("/api/catlog/products").then(res => {
            if (res.data.result) {
                res.data.data.forEach((item, index) => {
                    products.push({
                        id: index,
                        name: item.productName,
                        desc: item.productDesc,
                        price: item.productPrice,
                        img: item.imagePath,
                        cart: false
                    });
                });
                let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];


                this.setState({
                    products: this.updateCart(products, cart)
                });
            }
        }).catch(err => {
            console.log(err);
        });

        // for (let k = 0; k < 30; k++) {
        //     products.push({
        //         id: "tomato" + k,
        //         name: "Tomato",
        //         desc: "This is a Tomato.",
        //         img: image,
        //         cart: false
        //     });
        // }
        // Checking the cart for button css


    }

    state = {
        products: products
    };

    removeFromCart(id, index) {
        let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

        let searchIndex = cart.map(item => { return item.id; }).indexOf(id);

        if (searchIndex > -1) {
            if (cart[searchIndex].qty > 1) {
                cart[searchIndex].qty--;
            } else {
                // Atleast one is required
                cart.splice(searchIndex, 1);
            }
        } else {
            // Item do not exist in cart
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        products = [...products];
        cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        this.setState({
            products: this.updateCart(products, cart)
        });

    }



    addToCart(id, index, type) {
        let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

        let searchIndex = cart.map(item => { return item.id; }).indexOf(id);

        if (searchIndex === -1) {
            // The item dont exist in the cart proceed to add
            cart.push($.extend(products[index], { qty: 1 }));
        } else {
            if ((cart[searchIndex].qty + 1) <= 5) {
                // Item exist in cart incrimenting the qty
                cart[searchIndex].qty++;
            } else {
                // Cart qty limit exceeded
            }
        }
        products = [...products];

        this.setState({
            products: this.updateCart(products, cart)
        });
        switch (type) {
            case "1":
                break;
            case "2":
                this.props.history.push("/cart");
                break;
            default:
                // Do Nothing
                break;
        }
    };

    updateCart(products, cart) {

        products = products.map(item => {
            item.cart = false;
            return item;
        });
        products.forEach((item, index) => {
            for (let k = 0; k < cart.length; k++) {
                if (cart[k].id === item.id) {
                    products[index].cart = true;
                }
            }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        return products;
    }
    render() {
        return (
            <React.Fragment>
                <div className="alert alert-danger text-left" role="alert">
                    <a href="/" target="_blank">Click here</a> to view <i className="fab fa-angular"></i>  Angular version of this app.
                 </div>
                <div className="home container-fluid">
                    {
                        this.state.products.map((item, index) => {
                            return <Product key={index} name={item.name} desc={item.desc} img={item.img}
                                click={() => this.addToCart(index, index, "1")}
                                buyClick={() => this.addToCart(index, index, "2")}
                                check={item.cart}
                                index={index}
                                cartUpdate={this.props.cartUpdate}
                                removeFromCart={() => this.removeFromCart(index, index)}>
                            </Product>
                        })
                    }


                </div>
            </React.Fragment>
        );
    }
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


export default connect(mapStateToProps, mapDispatchToProps)(Home);

// Re Render Causing Issue so this snippet placed out of the component to execute only once
// let products = [];
// for (let k = 0; k < 30; k++) {
//     products.push({
//         id: Math.floor(100000 + Math.random() * 900000),
//         name: "Tomato",
//         desc: "This is a Tomato.",
//         img: image,
//         cart: false
//     });
// }