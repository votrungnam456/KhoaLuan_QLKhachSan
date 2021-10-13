import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let sideBarItem = [
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
                to: "/addroom",
                title: "Thêm phòng"
            },
            {
                to: "/listroom",
                title: "Xem phòng"
            },
            {
                to: "/editroom",
                title: "Sửa thông tin phòng"
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
                to: "/add-employee",
                title: "Thêm khách hàng"
            },
            {
                to: "/list-employee",
                title: "Xem danh sách khách hàng"
            },
            {
                to: "/edit-employee",
                title: "Sửa thông tin khách hàng"
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
                to: "/add-service",
                title: "Thêm thiết bị"
            },
            {
                to: "/list-service",
                title: "Xem danh sách thiết bị"
            },
            {
                to: "/edit-service",
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

const SideBarItem = (item) => {
    return (
        <li className="nav-item">
            <a href="true" className="nav-link nav-toggle">
                <i className="material-icons">{item.icon}</i>
                <span className="title">{item.title}</span>
                <span className="arrow" />
            </a>
            <ul className="sub-menu">
                {item.subMenus.map(sub => {
                    return (
                        <li className="nav-item">
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
    loadSideBar(sideBarItem) {
        let result = null
        if (sideBarItem.length > 0) {
            result = sideBarItem.map(item => {
                return SideBarItem(item)
            })
        }
        return result
    }
    render() {
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
                                            <img src="assets/img/dp.jpg" className="img-responsive" alt /> </div>
                                    </div>
                                    <div className="profile-usertitle">
                                        <div className="sidebar-userpic-name"> Võ Trung Nam </div>
                                        <div className="profile-usertitle-job"> Quản lý </div>
                                    </div>
                                    <div className="sidebar-userpic-btn">
                                        <a className="tooltips" href="user_profile.html" data-placement="top" data-original-title="Profile">
                                            <i className="material-icons">person_outline</i>
                                        </a>
                                        <a className="tooltips" href="login.html" data-placement="top" data-original-title="Logout">
                                            <i className="material-icons">input</i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-heading">
                                <span>Menu</span>
                            </li>
                            {this.loadSideBar(sideBarItem)}
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}
