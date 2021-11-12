import React, { Component } from 'react'
import * as CallAPI from "../../constanst/CallAPI";
import { APIDevice } from '../../constanst/API';
import Title from '../Home/Title';
export default class AddDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameHotelDevice: "",
            price:0,
            quantity:0,
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
    addDevice = (ev) => {
        const { nameHotelDevice, price, quantity } = this.state
        ev.preventDefault();
        if (nameHotelDevice === "" || price === "" || quantity === "") {
            this.setState({
                message: 1
            })
        }
        else if(price === 0){
            this.setState({
                message: 2
            })
        }
        else {
            const deviceAdd = {
                nameHotelDevice,
                price:parseInt(price), quantity
            }
            CallAPI.POST(APIDevice, deviceAdd).then(res => {
                if (res.status === 200) {
                    this.setState({
                        message: 4,
                        nameHotelDevice: "",
                        price: 0,
                        quantity: 0,
                    })
                }
                else {
                    this.setState({
                        message: 3
                    })
                }
            });
        }

    }
    render() {
        const { nameHotelDevice, price, quantity, message } = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Thiết bị"></Title>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Thêm thiết bị</header>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên thiết bị</label>
                                            <input className="mdl-textfield__input" type="text" name="nameHotelDevice" onChange={this.onChange} value={nameHotelDevice} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Giá</label>
                                            <input className="mdl-textfield__input" type="number" name="price" onChange={this.onChange} value={price} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Số lượng</label>
                                            <input className="mdl-textfield__input" type="number" name="quantity" onChange={this.onChange} value={quantity} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.addDevice} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Thêm thiết bị</button>
                                        <p style={message === 4 ? { color: "green" } : { color: "red" }}>{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Giá phải lớn hơn 0":message === 3 ? "Thêm phòng thất bại, vui lòng kiểm tra lại thông tin và thử lại" : message === 4 ? "Thêm thành công" : ""}</p>
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
