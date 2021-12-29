import React, { Component } from 'react'
import { APICustomer } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import Title from '../../Home/Title';
export default class AddCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            card:"",
            nationality:"",
            phone:"",
            email:"",
            message: 0
        }
    }
    onChange = (ev) => {
        this.setState({
            message:0
        })
        let name = ev.target.name;
        let value = ev.target.value;
        this.setState({
            [name]: value
        })
    }
    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    addCustomer = (ev) => {
        const { name, card, nationality,phone,email } = this.state
        ev.preventDefault();
        if (name === "" || card === "" || nationality === "" ||phone === "" ||email === "" ) {
            this.setState({
                message: 1
            })
        }
        else if(phone.length !== 10){
            this.setState({
                message: 2
            })
        }
        else if(!this.validateEmail(email)){
            this.setState({
                message: 5
            })
        }
        else {
            const customerAdd = {
                nameCustomer:name,
                identityCard:card,
                nationality, 
                phoneNumber:phone, 
                email
            }
            CallAPI.POST(APICustomer, customerAdd).then(res => {
                if (res.status === 200) {
                    this.setState({
                        message: 4,
                        name: "",
                        card:"",
                        nationality:"",
                        phone:"",
                        email:"",
                    })
                }
                else {
                    this.setState({
                        message: 3
                    })
                }
            }).catch(err => console.log(err.response));
        }
    }

    render() {
        const { name, card, nationality,phone,email,message } = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Khách hàng"></Title>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Thêm khách hàng</header>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên khách hàng</label>
                                            <input className="mdl-textfield__input" type="text" name="name" onChange={this.onChange} value={name}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Chứng minh thư</label>
                                            <input className="mdl-textfield__input" type="text" name="card" onChange={this.onChange} value={card}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Quốc tịch</label>
                                            <input className="mdl-textfield__input" type="text" name="nationality" onChange={this.onChange} value={nationality}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Số điện thoại</label>
                                            <input className="mdl-textfield__input" type="text" name="phone" onChange={this.onChange} value={phone} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Email</label>
                                            <input className="mdl-textfield__input" type="text" name="email" onChange={this.onChange} value={email} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.addCustomer} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Thêm khách hàng</button>
                                        <p style={message === 4 ? { color: "green" } : { color: "red" }}>{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Số điện thoại phải 10 số":message === 3 ? "Thêm phòng thất bại, vui lòng kiểm tra lại thông tin và thử lại" : message === 4 ? "Thêm thành công" : message === 5 ? "Sai định dạng email" : ""}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
