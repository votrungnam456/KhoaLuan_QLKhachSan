import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as CallAPI from "../../constanst/CallAPI";
import { APIEmployee } from '../../constanst/API';
export default class EmployeeProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            email: "",
            gender: "Nam",
            identityCard: "",
            nameEmployee: "",
            phoneNumber: "",
            isChangePassword:false,
            oldPwd:"",
            newPwd:"",
            confirmNewPwd:"",
            message:0
        }
    }
    componentDidMount() {
        CallAPI.GET(APIEmployee + this.props.match.params.idCustomer).then(res => {
            if (res.status === 200) {
                this.setState({
                    address: res.data.address,
                    email: res.data.email,
                    gender: res.data.gender,
                    identityCard: res.data.identityCard,
                    nameEmployee: res.data.nameEmployee,
                    phoneNumber: res.data.phoneNumber,
                })
            }
            else {
                alert("Load data failed!");
            }
        })
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
    toogleChangePwd = () =>{
        this.setState({
            isChangePassword : !this.state.isChangePassword
        })
    }
    changePwd  = () =>{
        const {newPwd,oldPwd,confirmNewPwd} = this.state;
        if(newPwd === ""||oldPwd==="" ||confirmNewPwd ===""){
            this.setState({
                message:1
            })
        }
        else if(newPwd !== confirmNewPwd){
            this.setState({
                message:2
            })
        }
        else{
            alert("Đổi mật khẩu thành công");
            this.setState({
                isChangePassword : false
            })
        }
    }
    render() {
        const { address, email, gender, identityCard, nameEmployee, phoneNumber,isChangePassword,oldPwd,newPwd,confirmNewPwd,message } = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Nhân viên</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Thông tin nhân viên</header>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên nhân viên: {nameEmployee}</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Giới tính: {gender}</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Chứng minh thư: {identityCard}</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Số điện thoại: {phoneNumber}</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Địa chỉ: {address}</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Email: {email}</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label>Mật khẩu: <a href="#changePwd" onClick={this.toogleChangePwd} style={{ color: "skyblue", borderBottom: "1px solid skyblue" }}>Đổi mật khẩu</a></label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <Link to="/edit-employee" type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa thông tin nhân viên</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isChangePassword ? ( 
                    <div id="changePwd" className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Đổi mật khẩu</header>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Mật khẩu cũ</label>
                                            <input className="mdl-textfield__input" type="text" value={oldPwd} name="oldPwd" onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Mật khẩu mới</label>
                                            <input className="mdl-textfield__input" type="text" value={newPwd} name="newPwd" onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Xác nhận mật khẩu mới</label>
                                            <input className="mdl-textfield__input" type="text" value={confirmNewPwd} name="confirmNewPwd" onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.changePwd} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-blue">Đổi mật khẩu</button>
                                        <p sstyle={{color:"red"}}>{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Mật khẩu mới và xác nhận mật khẩu không khớp" : message === 3 ? "Mật khẩu cũ bị sai" : message === 4 ? "Đổi thất bại, vui lòng thử lại":""}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ):
                    ""}              
                </div>
            </div>
        )
    }
}
