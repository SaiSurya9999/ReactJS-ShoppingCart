import React, { Component } from 'react';

import './Login.css';



class Login extends Component {
    componentDidMount() {
        // Similar to ngOninit()
        document.body.style["background-image"] = "repeating-linear-gradient(105deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),repeating-linear-gradient(333deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),linear-gradient(90deg, hsl(300,76%,69%),hsl(351.429,76%,69%),hsl(42.857,76%,69%),hsl(94.286,76%,69%),hsl(145.714,76%,69%),hsl(197.143,76%,69%),hsl(248.571,76%,69%))";
    }

    componentWillUnmount() {
        // Similar to ngOnDestroy()
        document.body.style["background-image"] = "repeating-linear-gradient(135deg, rgba(189,189,189,0.1) 0px, rgba(189,189,189,0.1) 2px,transparent 2px, transparent 4px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))";
    }
    
    state = {
        route: false
    };

    render() {
        const switchHandler = () => {
            this.setState({
                route: !this.state.route
            });
        };

        let loginPage = <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <br></br>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>;

        let signUpPage = <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Terms & Conditions</label>
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>;

        return (
            <div className="login">
                <div className="col-md-5 shadow mr-auto ml-auto mr-5 mt-5 text-left p-2">
                    <h3 className="text-center"><i className="fas fa-gifts"></i> JustShop</h3>
                    <div className="border-login rounded">
                        <button onClick={() => switchHandler()} className={this.state.route ? "btn" : "btn btn-secondary"}>Login</button>
                        <button onClick={() => switchHandler()} className={this.state.route ? "btn  btn-secondary" : "btn"}>Signup</button>
                    </div>
                    <hr></hr>
                    {this.state.route ? signUpPage : loginPage}
                </div>
            </div>
        );
    }


};

export default Login;