import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const sideBarQL = [
    {
        icon: "business_center",
        title: "Đặt/Nhận/Trả phòng",
        subMenus: [
            {
                to: "/booking-room",
                title: "Đặt phòng"
            },
            {
                to: "/check-in-room",
                title: "Nhận phòng"
            },
            {
                to: "/check-out-room",
                title: "Trả phòng"
            },
        ]
    },
    {
        icon: "vpn_key",
        title: "Quản lý phòng",
        subMenus: [
            {
                to: "/add-room",
                title: "Thêm phòng"
            },
            {
                to: "/list-room",
                title: "Danh sách phòng"
            },
            {
                to: "/edit-room",
                title: "Sửa thông tin phòng"
            },
            {
                to: "/list-type-room",
                title: "Danh sách loại phòng"
            },
            {
                to: "/add-type-room",
                title: "Thêm loại phòng"
            },
            {
                to: "/edit-type-room",
                title: "Sửa thông tin loại phòng"
            },
        ]
    },
    {
        icon: "group",
        title: "Nhân viên",
        subMenus: [
            {
                to: "/add-employee",
                title: "Thêm nhân viên"
            },
            {
                to: "/list-employee",
                title: "Xem danh sách nhân viên"
            },
            {
                to: "/edit-employee",
                title: "Sửa thông tin nhân viên"
            },
        ]
    },
    {
        icon: "directions_run",
        title: "Quản lý thông tin khách hàng",
        subMenus: [
            {
                to: "/add-customer",
                title: "Thêm khách hàng"
            },
            {
                to: "/list-customer",
                title: "Xem danh sách khách hàng"
            },
            {
                to: "/edit-customer",
                title: "Sửa thông tin khách hàng"
            },
            {
                to: "/delegation",
                title: "Khách đoàn"
            },
            {
                to: "/add-delegation",
                title: "Thêm khách đoàn"
            },
            {
                to: "/edit-delegation",
                title: "Sửa thông tin khách đoàn"
            },
        ]
    },
    {
        icon: "card_travel",
        title: "Quản lý dịch vụ",
        subMenus: [
            {
                to: "/add-service",
                title: "Thêm dịch vụ"
            },
            {
                to: "/list-service",
                title: "Xem danh sách dịch vụ"
            },
            {
                to: "/edit-service",
                title: "Sửa thông tin dịch vụ"
            },
        ]
    },
    {
        icon: "grain",
        title: "Quản lý thiết bị kho",
        subMenus: [
            {
                to: "/add-device",
                title: "Thêm thiết bị"
            },
            {
                to: "/list-device",
                title: "Xem danh sách thiết bị"
            },
            {
                to: "/edit-device",
                title: "Sửa thông tin thiết bị"
            },
        ]
    },
    {
        icon: "timeline",
        title: "Thống kê",
        subMenus: [
            {
                to: "/timeline-1",
                title: "Thống kê 1"
            },
            {
                to: "/timeline-2",
                title: "Thống kê 2"
            },
            {
                to: "/timeline-3",
                title: "Thống kê 3"
            },
        ]
    },
    {
        icon: "info",
        title: "Thông tin nhóm",
        subMenus: [
            {
                to: "/vtn",
                title: "Võ Trung Nam"
            },
            {
                to: "/ntl",
                title: "Nguyễn Thành Long"
            },
            {
                to: "/dvd",
                title: "Dương Văn Đại"
            },
        ]
    },
]
const sideBarNVKho = [
    {
        icon: "grain",
        title: "Quản lý thiết bị kho",
        subMenus: [
            {
                to: "/add-device",
                title: "Thêm thiết bị"
            },
            {
                to: "/list-device",
                title: "Xem danh sách thiết bị"
            },
            {
                to: "/edit-device",
                title: "Sửa thông tin thiết bị"
            },
        ]
    },
    {
        icon: "timeline",
        title: "Thống kê",
        subMenus: [
            {
                to: "/timeline-1",
                title: "Thống kê 1"
            },
            {
                to: "/timeline-2",
                title: "Thống kê 2"
            },
            {
                to: "/timeline-3",
                title: "Thống kê 3"
            },
        ]
    },
    {
        icon: "info",
        title: "Thông tin nhóm",
        subMenus: [
            {
                to: "/vtn",
                title: "Võ Trung Nam"
            },
            {
                to: "/ntl",
                title: "Nguyễn Thành Long"
            },
            {
                to: "/dvd",
                title: "Dương Văn Đại"
            },
        ]
    },
]
const sideBarNVTiepTan = [
    {
        icon: "business_center",
        title: "Đặt/Nhận/Trả phòng",
        subMenus: [
            {
                to: "/booking-room",
                title: "Đặt phòng"
            },
            {
                to: "/check-in-room",
                title: "Nhận phòng"
            },
            {
                to: "/check-out-room",
                title: "Trả phòng"
            },
        ]
    },
    {
        icon: "vpn_key",
        title: "Quản lý phòng",
        subMenus: [
            {
                to: "/add-room",
                title: "Thêm phòng"
            },
            {
                to: "/list-room",
                title: "Danh sách phòng"
            },
            {
                to: "/edit-room",
                title: "Sửa thông tin phòng"
            },
            {
                to: "/list-type-room",
                title: "Danh sách loại phòng"
            },
            {
                to: "/add-type-room",
                title: "Thêm loại phòng"
            },
            {
                to: "/edit-type-room",
                title: "Sửa thông tin loại phòng"
            },
        ]
    },
    {
        icon: "directions_run",
        title: "Quản lý thông tin khách hàng",
        subMenus: [
            {
                to: "/add-customer",
                title: "Thêm khách hàng"
            },
            {
                to: "/list-customer",
                title: "Xem danh sách khách hàng"
            },
            {
                to: "/edit-customer",
                title: "Sửa thông tin khách hàng"
            },
            {
                to: "/delegation",
                title: "Khách đoàn"
            },
            {
                to: "/add-delegation",
                title: "Thêm khách đoàn"
            },
            {
                to: "/edit-delegation",
                title: "Sửa thông tin khách đoàn"
            },
        ]
    },
    {
        icon: "card_travel",
        title: "Dịch vụ",
        subMenus: [
            {
                to: "/list-service",
                title: "Xem danh sách dịch vụ"
            },
        ]
    },
    {
        icon: "timeline",
        title: "Thống kê",
        subMenus: [
            {
                to: "/timeline-1",
                title: "Thống kê 1"
            },
            {
                to: "/timeline-2",
                title: "Thống kê 2"
            },
            {
                to: "/timeline-3",
                title: "Thống kê 3"
            },
        ]
    },
    {
        icon: "info",
        title: "Thông tin nhóm",
        subMenus: [
            {
                to: "/vtn",
                title: "Võ Trung Nam"
            },
            {
                to: "/ntl",
                title: "Nguyễn Thành Long"
            },
            {
                to: "/dvd",
                title: "Dương Văn Đại"
            },
        ]
    },
]
const SideBarItem = (item, index) => {
    return (
        <li key={index} className="nav-item">
            <a href=" " className="nav-link nav-toggle">
                <i className="material-icons">{item.icon}</i>
                <span className="title">{item.title}</span>
                <span className="arrow" />
            </a>
            <ul className="sub-menu">
                {item.subMenus.map((sub, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <Link to={sub.to} className="nav-link">
                                <span className="title">{sub.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </li>
    )
}
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: this.props.user || {
                email: "namvt@runsystem.net",
                password: "123",
                name: "Võ Trung Nam",
                role: "Quản lý",
                roleId: "role1"
            }
        }
    }
    loadSideBar(sideBarItem) {
        let result = null
        if (sideBarItem.length > 0) {
            result = sideBarItem.map((item, index) => {
                return SideBarItem(item, index)
            })
        }
        return result
    }
    render() {
        const { userLogin } = this.state
        return (
            <div className="sidebar-container">
                <div className="sidemenu-container navbar-collapse collapse fixed-menu">
                    <div id="remove-scroll">
                        <ul className="sidemenu page-header-fixed p-t-20" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed={200}>
                            <li className="sidebar-toggler-wrapper hide">
                                <div className="sidebar-toggler">
                                    <span />
                                </div>
                            </li>
                            <li className="sidebar-user-panel">
                                <div className="user-panel">
                                    <div className="row">
                                        <div className="sidebar-userpic">
                                            <img src="assets/img/dp.jpg" className="img-responsive" alt="" /> </div>
                                    </div>
                                    <div className="profile-usertitle">
                                        <div className="sidebar-userpic-name"> {userLogin.name} </div>
                                        <div className="profile-usertitle-job">{userLogin.role} </div>
                                    </div>
                                    <div className="sidebar-userpic-btn">
                                        <Link className="tooltips" to="/employee-profile" data-placement="top" data-original-title="Profile">
                                            <i className="material-icons">person_outline</i>
                                        </Link>
                                        <Link className="tooltips" to="/login" data-placement="top" data-original-title="Logout">
                                            <i className="material-icons">input</i>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-heading">
                                <span>Menu</span>
                            </li>
                            {userLogin.roleId === "role1" ? this.loadSideBar(sideBarQL) : userLogin.roleId === "role2" ? this.loadSideBar(sideBarNVTiepTan) : this.loadSideBar(sideBarNVKho)}
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}
