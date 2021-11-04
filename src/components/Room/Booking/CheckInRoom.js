import React, { Component } from 'react'

export default class CheckInRoom extends Component {
    render() {
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Nhận phòng</div>
                            </div>
                            {/* <ol className="breadcrumb page-breadcrumb pull-right">
                                <li><i className="fa fa-home" />&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right" />
                                </li>
                                <li><a className="parent-item" href>Booking</a>&nbsp;<i className="fa fa-angle-right" />
                                </li>
                                <li className="active">All Bookings</li>
                            </ol> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Tên khách hàng: </label>
                            <select className="mdl-textfield__input">
                                <option value="1">Nguyễn Văn A</option>
                                <option value="2">Cao Quang Sơn</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label>CMND: </label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary"> Tìm kiếm </button>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="m-b-20">
                                    <div className="doctor-profile">
                                        <div className="profile-header bg-b-purple">
                                            <div className="user-name">Phòng 102</div>
                                            {/* <div className="name-center">General Manager</div> */}
                                        </div>
                                        <img src="./assets/img/room.png" className="user-img" alt="room icon" />
                                        <p>
                                            Mô tả phòng 101 <br /> Khách hàng: Nguyễn Văn A
                                        </p>
                                        <div>
                                            <p>
                                                Tình Trạng: Trống
                                            </p>
                                        </div>
                                        <div className="profile-userbuttons">
                                            <a href="staff_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Xem chi tiết</a>
                                            <a href="staff_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Nhận phòng</a>
                                        </div>
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
