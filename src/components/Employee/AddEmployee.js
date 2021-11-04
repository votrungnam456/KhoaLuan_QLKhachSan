import React, { Component } from 'react'
import * as CallAPI from "../../constanst/CallAPI";
import { APIEmployee } from '../../constanst/API';
export default class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            email: "",
            gender: "Nam",
            identityCard: "",
            nameEmployee: "",
            phoneNumber: "",
            message:0
        }
    }
    componentDidMount() {

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
    clearData = () => {
        this.setState({
            address: "",
            email: "",
            gender: "",
            identityCard: "",
            nameEmployee: "",
            phoneNumber: ""
        })
    }
    addEmployee = (ev) => {
        const { address, email, gender, identityCard, nameEmployee, phoneNumber } = this.state
        ev.preventDefault();
        if (address === "" || email === "" || identityCard === "" || nameEmployee === "" || phoneNumber === "") {
            this.setState({
                message: 1
            })
        }
        else {
            if (identityCard.length === 9 || identityCard.length === 12) {
                const employeeAdd = {
                    address,
                    email, gender, identityCard, nameEmployee, phoneNumber
                }
                CallAPI.POST(APIEmployee, employeeAdd).then(res => {
                    if (res.status === 200) {
                        this.setState({
                            message: 4
                        })
                        this.clearData();
                    }
                    else {
                        this.setState({
                            message: 2
                        })
                    }
                });
            }else{
                this.setState({
                    message: 3
                })
            }

        }
    }
    render() {
        const { address, email, gender, identityCard, nameEmployee, phoneNumber,message } = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Nhân viên</div>
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
                                    <header>Thêm nhân viên</header>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên nhân viên</label>
                                            <input className="mdl-textfield__input" type="text" value={nameEmployee} name="nameEmployee" onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Giới tính</label>
                                            <select name="gender" onChange={this.onChange} value={gender} className="mdl-textfield__input">
                                                <option value="Nam">Nam</option>
                                                <option value="Nữ">Nữ</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Email</label>
                                            <input className="mdl-textfield__input" type="text" name="email" value={email} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Số điện thoại</label>
                                            <input className="mdl-textfield__input" type="text" name="phoneNumber" value={phoneNumber} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Địa chỉ</label>
                                            <input className="mdl-textfield__input" type="text" name="address" value={address} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Chứng minh thư</label>
                                            <input className="mdl-textfield__input" type="text" name="identityCard" value={identityCard} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.addEmployee} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Thêm nhân viên</button>
                                        <p style={message === 3 ? { color: "green" } : { color: "red" }}>{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Thêm thất bại, vui lòng kiểm tra lại thông tin và thử lại" : message === 3 ? "Chứng minh thư phải là CMND(9 số) hoặc CCCD(12 số)" : message === 4 ? "Thêm thành công":""}</p>
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
