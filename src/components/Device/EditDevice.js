import React, { Component } from 'react'
import * as CallAPI from "../../constanst/CallAPI";
import { APIDevice } from '../../constanst/API';
export default class EditDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameHotelDevice: "",
            price:0,
            quantity:0,
            message: 0
        }
    }
    componentDidMount() {
        CallAPI.GET(APIDevice + "/" + this.props.match.params.idDevice).then(res=>{
            if(res.status === 200){
                this.setState({
                    nameHotelDevice:res.data.nameHotelDevice,
                    price:res.data.price,
                    quantity:res.data.quantity
                })
            }
            else{
                alert("Load data failed!");
            }
        })
    }
    onChange = (ev) => {
        let name = ev.target.name;
        let value = ev.target.value;
        this.setState({
            [name]: value
        })
    }
    editDevice = (ev) => {
        const { nameHotelDevice, price, quantity } = this.state
        const {history} = this.props
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
            const deviceEdit = {
                nameHotelDevice,
                price:parseInt(price), quantity
            }
            CallAPI.PUT(APIDevice + "/" + this.props.match.params.idDevice, deviceEdit).then(res => {
                if (res.status === 200) {
                    history.goBack();
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
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Thiết bị</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Sửa thông tin thiết bị</header>
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
                                        <button onClick={this.editDevice} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa thông tin thiết bị</button>
                                        <p style={{color:"red"}} >{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Giá phải lớn hơn 0":message === 3 ? "Sửa thông tin phòng thất bại, vui lòng kiểm tra lại thông tin và thử lại" : ""}</p>
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
