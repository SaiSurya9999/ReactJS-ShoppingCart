import React, { Component } from 'react';

import Product from '../Product/Product'

import './Home.css'
import image from '../../assets/tomato.jpg';



let products = [];

class Home extends Component {

    componentDidMount() {
        
        // API calling in Life Cycle Hook
        for (let k = 0; k < 30; k++) {
            products.push({
                id: Math.floor(100000 + Math.random() * 900000),
                name: "Tomato",
                desc: "This is a Tomato.",
                img: image,
                cart: false
            });
        }
        this.setState({
            products: products
        });

    }

    state = {
        products: products
    };



    addToCart(id, index) {
        console.log(id);
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }

        if (cart.indexOf(id) === -1) {
            // The item dont exist in the cart proceed to add
            cart.push(id);
        }
        products = [...products];
        products.forEach((item, index) => {
            for (let k = 0; k < cart.length; k++) {
                if (cart[k] === item.id.toString()) {
                    item.cart = true;
                }
            }
        });

        this.setState({
            products: products
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
    };
    render() {
        return (
            <div className="home container-fluid">
                {
                    this.state.products.map((item, index) => {
                        return <Product key={item.id} name={item.name} desc={item.desc} img={item.img}
                            click={() => this.addToCart(item.id.toString(), index)} check={item.cart}>
                        </Product>
                    })
                }


            </div>
        );
    }
};

export default Home;

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