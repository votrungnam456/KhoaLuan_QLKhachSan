import React, { Component } from 'react'
import * as CallAPI from "../../constanst/CallAPI";
import { APITypeRoom } from '../../constanst/API';
export default class AddTypeRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTypeRoom: "",
            price: "",
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
    addTypeRoom = (ev) =>{
        ev.preventDefault();
        const {nameTypeRoom,price} = this.state
        if(nameTypeRoom === "" || price === ""){
            this.setState({
                message:1
            })
            return;
        }
        else{
            const addItem = {
                nameTypeRoom,price
            }
            CallAPI.POST(APITypeRoom,addItem).then(res=>{
                console.log(res)
                if (res.status === 200) {
                    if(res.data.code !== 1){
                        this.setState({
                            message: 2
                        })
                        return;
                    }
                    else{
                        this.setState({
                            message: 3,
                            nameTypeRoom: "",
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
        const {nameTypeRoom,price,message} = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Phòng</div>
                            </div>
                            {/* <ol className="breadcrumb page-breadcrumb pull-right">
                                <li><i className="fa fa-home" />&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right" />
                                </li>
                                <li><a className="parent-item" href>Rooms</a>&nbsp;<i className="fa fa-angle-right" />
                                </li>
                                <li className="active">Add Room Details</li>
                            </ol> */}
                        </div>
                    </div>
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
                                            <input className="mdl-textfield__input" type="text" onChange={this.onChange} value={nameTypeRoom} name="nameTypeRoom"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Giá</label>
                                            <input className="mdl-textfield__input" type="text" onChange={this.onChange} value={price} name="price"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.addTypeRoom} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Thêm loại phòng</button>
                                        <p style={message === 3 ? { color: "green" } : { color: "red" }}>{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Thêm thất bại, vui lòng kiểm tra lại thông tin và thử lại" : message == 3 ? "Thêm thành công" : ""}</p>
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
