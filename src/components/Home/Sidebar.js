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
                to: "/list-type-room",
                title: "Danh sách loại phòng"
            },
            {
                to: "/add-type-room",
                title: "Thêm loại phòng"
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
            }
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
                to: "/list-delegation",
                title: "Khách đoàn"
            },
            {
                to: "/add-delegation",
                title: "Thêm khách đoàn"
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
                to: "/register-service-device",
                title: "Đăng ký dịch vụ/thiết bị cho khách"
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
        ]
    },
    {
        icon: "group",
        title: "Phân quyền / Chức vụ",
        subMenus: [
            {
                to: "/add-role",
                title: "Thêm quyền / chức vụ"
            },
            {
                to: "/list-role",
                title: "Danh sách phân quyền / chức vụ"
            }
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
                to: "/list-type-room",
                title: "Danh sách loại phòng"
            },
            {
                to: "/add-type-room",
                title: "Thêm loại phòng"
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
                to: "/list-delegation",
                title: "Khách đoàn"
            },
            {
                to: "/add-delegation",
                title: "Thêm khách đoàn"
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
            }
        ]
    },
    {
        icon: "group",
        title: "Phân quyền / Chức vụ",
        subMenus: [
            {
                to: "/add-role",
                title: "Thêm quyền / chức vụ"
            },
            {
                to: "/list-role",
                title: "Danh sách phân quyền / chức vụ"
            }
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

        }
    }
    loadSideBar = (sideBarItem) =>{
        let result = null
        if (sideBarItem.length > 0) {
            result = sideBarItem.map((item, index) => {
                return SideBarItem(item, index)
            })
        }
        return result
    }
    logOut = () =>{
        localStorage.removeItem("userLogin");
        sessionStorage.removeItem("userLogin");
        this.props.history.push("/login")
    }
    render() {
        const { user } = this.props
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
                                        <div className="sidebar-userpic-name"> {user.nameEmployee} </div>
                                        <div className="profile-usertitle-job">{user.nameRole} </div>
                                    </div>
                                    <div className="sidebar-userpic-btn">
                                        <Link className="tooltips" to={"/employee-profile/"+user.id} data-placement="top" data-original-title="Profile">
                                            <i className="material-icons">person_outline</i>
                                        </Link>
                                        <Link to="/login" className="tooltips" onClick={this.logOut} data-placement="top" data-original-title="Logout">
                                            <i className="material-icons">input</i>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-heading">
                                <span>Menu</span>
                            </li>
                            {user.codeRole === "ADMIN" ? this.loadSideBar(sideBarQL) : user.codeRole === "USER" ? this.loadSideBar(sideBarNVTiepTan) : user.codeRole === "USER_WAREHOUSE" ? this.loadSideBar(sideBarNVKho):""}
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}
