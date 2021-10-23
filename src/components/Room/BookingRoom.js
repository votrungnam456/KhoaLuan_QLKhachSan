import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class BookingRoom extends Component {
    render() {
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Đặt phòng</div>
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
                        <div className="col-md-3">
                            <label>Ngày đến: </label>
                            <input type="datetime-local" />
                        </div>
                        <div className="col-md-3">
                            <label>Ngày đi: </label>
                            <input type="datetime-local" />
                        </div>
                        <div className="col-md-3">
                            <label>Loại phòng: </label>
                            <select className="mdl-textfield__input">
                                <option value="1">Phòng đơn</option>
                                <option value="2">Phòng đôi</option>
                                <option value="3">Phòng đơn - VIP</option>
                                <option value="4">Phòng đôi - VIP</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-primary"> Tìm kiếm </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="m-b-20">
                                    <div className="doctor-profile">
                                        <div className="profile-header bg-b-purple">
                                            <div className="user-name">Phòng 101</div>
                                            {/* <div className="name-center">General Manager</div> */}
                                        </div>
                                        <img src="./assets/img/room.png" className="user-img" alt="" />
                                        <p>
                                            Mô tả phòng 101
                                        </p>
                                        <div>
                                            <p>
                                                Tình Trạng: Trống
                                            </p>
                                        </div>
                                        <div className="profile-userbuttons">
                                            <a href="staff_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Xem chi tiết</a>
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
