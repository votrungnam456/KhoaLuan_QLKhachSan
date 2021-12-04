import React, { Component } from 'react'
import * as CallAPI from "../../constanst/CallAPI";
import { APILogin } from '../../constanst/API';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            messageError: 1,
            remember: false
        }
    }
    onChange = (ev) => {
        let name = ev.target.name;
        let value = name === "remember" ? ev.target.checked : ev.target.value;
        this.setState({
            [name]: value
        })
    }
    submitLogin = (ev) => {
        const { email, password, remember } = this.state;
        let { history } = this.props;
        ev.preventDefault();
        const userLogin = {
            email, passWord: password
        }
        CallAPI.POST(APILogin, userLogin).then(res => {
            if (remember) {
                localStorage.setItem("userLogin", JSON.stringify(res.data));
                history.push("/");
            }
            else {
                sessionStorage.setItem("userLogin", JSON.stringify(res.data));
                history.push("/");
            }
        }).catch(er => {
            this.setState({
                messageError: er.response.data.message
            })
            alert(er.response.data.message)
            return;
        })
    }
    componentDidMount() {

    }
    render() {
        let { email, password, messageError } = this.state;
        return (
            <div className="limiter">
                <div className="container-login100 page-background">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">
                            <span className="login100-form-logo">
                                <i className="zmdi zmdi-flower" />
                            </span>
                            <span className="login100-form-title p-b-34 p-t-27">
                                Log in
                            </span>
                            <div className="wrap-input100 validate-input" data-validate="Enter username">
                                <input onChange={this.onChange} value={email} className="input100 placeholder__white" type="text" name="email" placeholder="Email" />
                                <span className="focus-input100" />
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input onChange={this.onChange} value={password} className="input100 placeholder__white" type="password" name="password" placeholder="Password" />
                                <span className="focus-input100" />
                            </div>
                            <div className="contact100-form-checkbox">
                                <input className="input-checkbox100" onChange={this.onChange} id="ckb1" type="checkbox" name="remember" />
                                <label className="label-checkbox100" htmlFor="ckb1">
                                    Remember me
                                </label>
                            </div>
                            <p style={messageError === 1 ? { color: "red", display: "none" } : { color: "red", display: "inline" }}>{messageError}</p>
                            <div className="container-login100-form-btn">
                                <button onClick={this.submitLogin} className="login100-form-btn">
                                    Login
                                </button>
                            </div>
                            <div className="text-center p-t-90">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
