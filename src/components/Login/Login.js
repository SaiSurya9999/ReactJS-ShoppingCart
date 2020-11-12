import React, { Component } from 'react';
import $ from 'jquery';

import './Login.css';

class Login extends Component {
    state = {
        route: false,
        loginForm: {
            email: "",
            password: "",
        },
        signUpForm: {
            email: "",
            password: "",
            termsChecked: false
        }
    };

    componentDidMount() {
        // Similar to ngOninit()
        document.body.style["background-image"] = "repeating-linear-gradient(105deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),repeating-linear-gradient(333deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),linear-gradient(90deg, hsl(300,76%,69%),hsl(351.429,76%,69%),hsl(42.857,76%,69%),hsl(94.286,76%,69%),hsl(145.714,76%,69%),hsl(197.143,76%,69%),hsl(248.571,76%,69%))";
    }

    componentWillUnmount() {
        // Similar to ngOnDestroy()
        document.body.style["background-image"] = "repeating-linear-gradient(135deg, rgba(189,189,189,0.1) 0px, rgba(189,189,189,0.1) 2px,transparent 2px, transparent 4px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))";
    }

    loginHandler(ev) {
        ev.preventDefault();
        this.formValidator(this.state.loginForm).then(isValid => {
            if (isValid) {
                console.log(this.state.loginForm);
            } else {

            }
        });
    }

    signUpHandler(ev) {
        ev.preventDefault();
        this.formValidator(this.state.signUpForm).then(isValid => {
           if(isValid){
               console.log(this.state.signUpForm);
           }
        });
    }

    

    formValidator(form) {
        return new Promise((resolve) => {
            let keys = Object.keys(form);
            let valid = true;
            for (let k in keys) {
                let keyValue = keys[k];
                // Combined String and boolean validation
                if (typeof(form[keyValue]) === "string" ? (form[keyValue] === "") : (!form[keyValue])) {
                    // Control is Invalid
                    $("#" + keyValue).removeClass("is-valid");
                    $("#" + keyValue).addClass("is-invalid");
                    valid = false;
                } else {
                    // Control is Valid
                    $("#" + keyValue).removeClass("is-invalid");
                    $("#" + keyValue).addClass("is-valid");
                }
            }
            resolve(valid);
        });
    }

    inputChangeHandler(ev, type, formName) {
        let classID = ev.target.id;
        let inputValue = ev.target.value;
        if(ev.target.type === "checkbox"){
            inputValue = ev.target.checked;
            if (!ev.target.checked) {
                $("#" + classID).removeClass('is-valid');
                $("#" + classID).addClass('is-invalid');
            } else {
                $("#" + classID).removeClass('is-invalid');
                $("#" + classID).addClass('is-valid');
            } 
        } else
        if (ev.target.value === "") {
            $("#" + classID).removeClass('is-valid');
            $("#" + classID).addClass('is-invalid');
        } else {
            $("#" + classID).removeClass('is-invalid');
            $("#" + classID).addClass('is-valid');
        }
        // Two Way Binding
        let temp = { ...this.state[formName] };
        temp[type] = inputValue;
        let obj = {};
        obj[formName] = temp;
        this.setState(obj);
    }

    switchHandler() {
        this.setState({
            route: !this.state.route
        });
    }


    render() {
        let loginPage = <form id="loginForm" noValidate onSubmit={(event) => this.loginHandler(event)}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input onChange={(event) => this.inputChangeHandler(event, "email", "loginForm")}
                    onBlur={(event) => this.inputChangeHandler(event, "email", "loginForm")} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    onBlur={(event) => this.inputChangeHandler(event, "password", "loginForm")}
                    onChange={(event) => this.inputChangeHandler(event, "password", "loginForm")} type="password" className="form-control" id="password" placeholder="Password" />
            </div>

            <br></br>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>;

        let signUpPage = <form id="signupForm" noValidate onSubmit={(event) => this.signUpHandler(event)}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" onChange={(event) => this.inputChangeHandler(event, "email", "signUpForm")}
                    onBlur={(event) => this.inputChangeHandler(event, "email", "signUpForm")} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                    onChange={(event) => this.inputChangeHandler(event, "password", "signUpForm")}
                    onBlur={(event) => this.inputChangeHandler(event, "password", "signUpForm")}
                    className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-check">
                <input
                    onChange={(event) => this.inputChangeHandler(event, "termsChecked", "signUpForm")}
                    onBlur={(event) => this.inputChangeHandler(event, "termsChecked", "signUpForm")}
                    type="checkbox" className="form-check-input" id="termsChecked" />
                <label className="form-check-label" htmlFor="termsChecked">Terms & Conditions</label>
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>;

        return (
            <div className="login">
                <div className="col-md-5 shadow mr-auto ml-auto mr-5 mt-5 text-left p-2">
                    <h3 className="text-center"><i className="fas fa-gifts"></i> JustShop</h3>
                    <div className="border-login rounded">
                        <button onClick={() => this.switchHandler()} className={this.state.route ? "btn" : "btn btn-secondary"}>Login</button>
                        <button onClick={() => this.switchHandler()} className={this.state.route ? "btn  btn-secondary" : "btn"}>Signup</button>
                    </div>
                    <hr></hr>
                    {this.state.route ? signUpPage : loginPage}
                </div>
            </div>
        );
    }


};

export default Login;