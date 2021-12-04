import React, { Component } from 'react'
import * as CallAPI from "../../../constanst/CallAPI";
import { APITypeRoom } from "../../../constanst/API"
import { parseInt } from 'lodash';
import Title from '../../Home/Title';
export default class AddTypeRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTypeRoom: "",
            price: 0,
            description: "",
            message: 0,
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
    addTypeRoom = (ev) => {
        ev.preventDefault();
        const { nameTypeRoom, price, description } = this.state
        if (nameTypeRoom === "" || price === "") {
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
            const addItem = {
                nameTypeRoom,
                price: parseInt(price),
                description
            }
            CallAPI.POST(APITypeRoom, addItem).then(res => {
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
                            nameTypeRoom: "",
                            price: 0,
                            description: ""
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
        const { nameTypeRoom, price, message, description } = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <Title title="Loại phòng"></Title>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Thêm loại phòng</header>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên loại phòng</label>
                                            <input className="mdl-textfield__input" type="text" onChange={this.onChange} value={nameTypeRoom} name="nameTypeRoom" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Giá</label>
                                            <input className="mdl-textfield__input" type="number" onChange={this.onChange} value={price} name="price" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Mô tả</label>
                                            <input className="mdl-textfield__input" type="text" onChange={this.onChange} value={description} name="description" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.addTypeRoom} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Thêm loại phòng</button>
                                        <p style={message === 3 ? { color: "green" } : { color: "red" }}>{message === 1 ? "Thông tin không được để trống" : message === 4 ? "Giá phải lớn hơn 0" : message === 2 ? "Thêm thất bại, vui lòng kiểm tra lại thông tin và thử lại" : message === 3 ? "Thêm thành công" : ""}</p>
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
