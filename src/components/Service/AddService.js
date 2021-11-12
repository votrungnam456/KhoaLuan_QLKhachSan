import React, { Component } from 'react'
import * as CallAPI from "../../constanst/CallAPI";
import { APIService } from "../../constanst/API";
import { parseInt } from 'lodash';
import Title from '../Home/Title';
export default class AddService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameService: "",
            price: 0,
            message: 0
        }
    }
    onChange = (ev) => {
        this.setState({
            message: 0
        })
        let name = ev.target.name;
        let value = ev.target.value;
        this.setState({
            [name]: value
        })
    }
    addTypeService = (ev) => {
        ev.preventDefault();
        const { nameService, price } = this.state
        if (nameService === "" || price === "") {
            this.setState({
                message: 1
            })
        }
        else if (price === 0) {
            this.setState({
                message: 4
            })
        }
        else {
            const addService = {
                nameService,
                price: parseInt(price)
            }
            CallAPI.POST(APIService, addService).then(res => {
                console.log(res)
                if (res.status === 200) {
                    if (res.data.code !== 1) {
                        this.setState({
                            message: 2
                        })
                        return;
                    }
                    else {
                        this.setState({
                            message: 3,
                            nameService: "",
                            price: "",
                        })
                    }
                }
                else {
                    this.setState({
                        message: 2
                    })
                }
            })
        }
    }
    render() {
        const { nameService, price, message } = this.state;
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <Title title="Dịch vụ"></Title>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Thêm dịch vụ</header>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên dịch vụ</label>
                                            <input className="mdl-textfield__input" name="nameService" onChange={this.onChange} value={nameService} type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Giá</label>
                                            <input className="mdl-textfield__input" name="price" onChange={this.onChange} value={price} type="number" id="txtRoomNo" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.addTypeService} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Thêm dịch vụ</button>
                                        <p style={message === 3 ? { color: "green" } : { color: "red" }}>{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Thêm thất bại, vui lòng kiểm tra lại thông tin và thử lại" : message === 3 ? "Thêm thành công" : message === 4 ? "Giá phải lớn hơn 0" : ""}</p>
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
