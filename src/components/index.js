import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <body class="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white dark-sidebar-color logo-dark">
                <div className="page-wrapper">
                    {/* start header */}
                    <div className="page-header navbar navbar-fixed-top">
                        <div className="page-header-inner ">
                            {/* logo start */}
                            <div className="page-logo">
                                <a href="index.html">
                                    <img alt src="assets/img/logo.png" />
                                    <span className="logo-default">LNĐ</span> </a>
                            </div>
                            {/* logo end */}
                            <ul className="nav navbar-nav navbar-left in">
                                <li><a href="#" className="menu-toggler sidebar-toggler"><i className="icon-menu" /></a></li>
                            </ul>
                            {/* start mobile menu */}
                            <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                                <span />
                            </a>
                            {/* end mobile menu */}
                            {/* start header menu */}
                            <div className="top-menu">
                                <ul className="nav navbar-nav pull-right">
                                    {/* start notification dropdown */}
                                    <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                            <i className="fa fa-bell-o" />
                                            <span className="badge headerBadgeColor1"> 6 </span>
                                        </a>
                                        <ul className="dropdown-menu animated swing">
                                            <li className="external">
                                                <h3><span className="bold">Notifications</span></h3>
                                                <span className="notification-label purple-bgcolor">New 6</span>
                                            </li>
                                            <li>
                                                <ul className="dropdown-menu-list small-slimscroll-style" data-handle-color="#637283">
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="time">just now</span>
                                                            <span className="details">
                                                                <span className="notification-icon circle deepPink-bgcolor"><i className="fa fa-check" /></span> Congratulations!. </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="time">3 mins</span>
                                                            <span className="details">
                                                                <span className="notification-icon circle purple-bgcolor"><i className="fa fa-user o" /></span>
                                                                <b>John Micle </b>is now following you. </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="time">7 mins</span>
                                                            <span className="details">
                                                                <span className="notification-icon circle blue-bgcolor"><i className="fa fa-comments-o" /></span>
                                                                <b>Sneha Jogi </b>sent you a message. </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="time">12 mins</span>
                                                            <span className="details">
                                                                <span className="notification-icon circle pink"><i className="fa fa-heart" /></span>
                                                                <b>Ravi Patel </b>like your photo. </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="time">15 mins</span>
                                                            <span className="details">
                                                                <span className="notification-icon circle yellow"><i className="fa fa-warning" /></span> Warning! </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="time">10 hrs</span>
                                                            <span className="details">
                                                                <span className="notification-icon circle red"><i className="fa fa-times" /></span> Application error. </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="dropdown-menu-footer">
                                                    <a href="javascript:void(0)"> All notifications </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* end notification dropdown */}
                                    {/* start message dropdown */}
                                    <li className="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
                                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                            <i className="fa fa-envelope-o" />
                                            <span className="badge headerBadgeColor2"> 2 </span>
                                        </a>
                                        <ul className="dropdown-menu animated slideInDown">
                                            <li className="external">
                                                <h3><span className="bold">Messages</span></h3>
                                                <span className="notification-label cyan-bgcolor">New 2</span>
                                            </li>
                                            <li>
                                                <ul className="dropdown-menu-list small-slimscroll-style" data-handle-color="#637283">
                                                    <li>
                                                        <a href="#">
                                                            <span className="photo">
                                                                <img src="assets/img/user/user2.jpg" className="img-circle" alt />
                                                            </span>
                                                            <span className="subject">
                                                                <span className="from"> Sarah Smith </span>
                                                                <span className="time">Just Now </span>
                                                            </span>
                                                            <span className="message"> Jatin I found you on LinkedIn... </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="photo">
                                                                <img src="assets/img/user/user3.jpg" className="img-circle" alt />
                                                            </span>
                                                            <span className="subject">
                                                                <span className="from"> John Deo </span>
                                                                <span className="time">16 mins </span>
                                                            </span>
                                                            <span className="message"> Fwd: Important Notice Regarding Your Domain
                                                                Name... </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="photo">
                                                                <img src="assets/img/user/user1.jpg" className="img-circle" alt />
                                                            </span>
                                                            <span className="subject">
                                                                <span className="from"> Rajesh </span>
                                                                <span className="time">2 hrs </span>
                                                            </span>
                                                            <span className="message"> pls take a print of attachments. </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="photo">
                                                                <img src="assets/img/user/user8.jpg" className="img-circle" alt />
                                                            </span>
                                                            <span className="subject">
                                                                <span className="from"> Lina Smith </span>
                                                                <span className="time">40 mins </span>
                                                            </span>
                                                            <span className="message"> Apply for Ortho Surgeon </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="photo">
                                                                <img src="assets/img/user/user5.jpg" className="img-circle" alt />
                                                            </span>
                                                            <span className="subject">
                                                                <span className="from"> Jacob Ryan </span>
                                                                <span className="time">46 mins </span>
                                                            </span>
                                                            <span className="message"> Request for leave application. </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="dropdown-menu-footer">
                                                    <a href="#"> All Messages </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* end message dropdown */}
                                    {/* start manage user dropdown */}
                                    <li className="dropdown dropdown-user">
                                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                            <img alt className="img-circle " src="assets/img/dp.jpg" />
                                            <span className="username username-hide-on-mobile"> John </span>
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-default animated jello">
                                            <li>
                                                <a href="user_profile.html">
                                                    <i className="icon-user" /> Profile </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="icon-settings" /> Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a href="login.html">
                                                    <i className="icon-logout" /> Log Out </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* end manage user dropdown */}
                                    <li className="dropdown dropdown-quick-sidebar-toggler">
                                        <a id="headerSettingButton" className="mdl-button mdl-js-button mdl-button--icon pull-right" data-upgraded=",MaterialButton">
                                            <i className="material-icons">settings</i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* end header */}
                    {/* start page container */}
                    <div className="page-container">
                        {/* start sidebar menu */}
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
                                        <li className="nav-item">
                                            <a href="#" className="nav-link nav-toggle">
                                                <i className="material-icons">business_center</i>
                                                <span className="title">Đặt/Nhận/Trả phòng</span>
                                                <span className="arrow" />
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="nav-item">
                                                    <a href="new_booking.html" className="nav-link ">
                                                        <span className="title">Đặt phòng</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="view_booking.html" className="nav-link ">
                                                        <span className="title">Nhận phòng</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="edit_booking.html" className="nav-link ">
                                                        <span className="title">Trả phòng</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link nav-toggle">
                                                <i className="material-icons">vpn_key</i>
                                                <span className="title">Quản lý phòng</span>
                                                <span className="arrow" />
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="nav-item">
                                                    <a href="add_room.html" className="nav-link ">
                                                        <span className="title">Thêm phòng</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="edit_room.html" className="nav-link ">
                                                        <span className="title">Xem phòng</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="edit_room.html" className="nav-link ">
                                                        <span className="title">Sửa thông tin phòng</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link nav-toggle">
                                                <i className="material-icons">group</i>
                                                <span className="title">Nhân viên</span>
                                                <span className="arrow" />
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="nav-item">
                                                    <a href="add_staff.html" className="nav-link ">
                                                        <span className="title">Thêm nhân viên</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="all_staffs.html" className="nav-link ">
                                                        <span className="title">Xem thông tin nhân viên</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="edit_room.html" className="nav-link ">
                                                        <span className="title">Sửa thông tin nhân viên</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link nav-toggle">
                                                <i className="material-icons">directions_run</i>
                                                <span className="title">Khách hàng</span>
                                                <span className="arrow" />
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="nav-item">
                                                    <a href="add_vehicle.html" className="nav-link ">
                                                        <span className="title">Thêm khách hàng</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="all_vehicles.html" className="nav-link ">
                                                        <span className="title">Xem khách hàng</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="edit_vehicle.html" className="nav-link ">
                                                        <span className="title">Sửa thông tin khách hàng</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link nav-toggle">
                                                <i className="material-icons">card_travel</i>
                                                <span className="title">Quản lý dịch vụ</span> <span className="arrow" />
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="nav-item">
                                                    <a href="layout_boxed.html" className="nav-link "> <span className="title">Thêm dịch vụ</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="layout_full_width.html" className="nav-link "> <span className="title">Xem dịch vụ</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="layout_collapse.html" className="nav-link "> <span className="title">Sửa thông tin dịch vụ</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link nav-toggle">
                                                <i className="material-icons">grain</i>
                                                <span className="title">Quản lý thiết bị kho</span>
                                                <span className="arrow" />
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="nav-item">
                                                    <a href="chat.html" className="nav-link ">
                                                        <span className="title">Thêm thiết bị</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="contact_list.html" className="nav-link ">
                                                        <span className="title">Xem thiết bị</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="contact_grid.html" className="nav-link ">
                                                        <span className="title">Sửa thông tin thiết bị</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link nav-toggle">
                                                <i className="material-icons">timeline</i>
                                                <span className="title">Thống kê</span>
                                                <span className="arrow" />
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="nav-item">
                                                    <a href="chat.html" className="nav-link ">
                                                        <span className="title">Thống kê 1</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="contact_list.html" className="nav-link ">
                                                        <span className="title">Thống kê 2</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="contact_grid.html" className="nav-link ">
                                                        <span className="title">Thống kê 3</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link nav-toggle">
                                                <i className="material-icons">info</i>
                                                <span className="title">Thông tin về nhóm</span>
                                                <span className="arrow" />
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="nav-item">
                                                    <a href="chat.html" className="nav-link ">
                                                        <span className="title">Nguyễn Thành Long</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="contact_list.html" className="nav-link ">
                                                        <span className="title">Võ Trung Nam</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="contact_grid.html" className="nav-link ">
                                                        <span className="title">Dương Văn Đại</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* end sidebar menu */}
                        {/* start page content */}
                        <div className="page-content-wrapper">
                            <div className="page-content">
                                <div className="page-bar">
                                    <div className="page-title-breadcrumb">
                                        <div className=" pull-left">
                                            <div className="page-title">Dashboard</div>
                                        </div>
                                        <ol className="breadcrumb page-breadcrumb pull-right">
                                            <li><i className="fa fa-home" />&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right" />
                                            </li>
                                            <li className="active">Dashboard</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end page content */}
                        {/* start chat sidebar */}
                        <div className="chat-sidebar-container" data-close-on-body-click="false">
                            <div className="chat-sidebar">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a href="#quick_sidebar_tab_1" className="nav-link active tab-icon" data-toggle="tab">Theme
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#quick_sidebar_tab_2" className="nav-link tab-icon" data-toggle="tab"> Chat
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#quick_sidebar_tab_3" className="nav-link tab-icon" data-toggle="tab"> Settings
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane chat-sidebar-settings in show active animated shake" role="tabpanel" id="quick_sidebar_tab_1">
                                        <div className="slimscroll-style">
                                            <div className="theme-light-dark">
                                                <h6>Sidebar Theme</h6>
                                                <button type="button" data-theme="white" className="btn lightColor btn-outline btn-circle m-b-10 theme-button">Light
                                                    Sidebar</button>
                                                <button type="button" data-theme="dark" className="btn dark btn-outline btn-circle m-b-10 theme-button">Dark
                                                    Sidebar</button>
                                            </div>
                                            <div className="theme-light-dark">
                                                <h6>Sidebar Color</h6>
                                                <ul className="list-unstyled">
                                                    <li className="complete">
                                                        <div className="theme-color sidebar-theme">
                                                            <a href="#" data-theme="white"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="dark"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="blue"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="indigo"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="cyan"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="green"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="red"><span className="head" /><span className="cont" /></a>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <h6>Header Brand color</h6>
                                                <ul className="list-unstyled">
                                                    <li className="theme-option">
                                                        <div className="theme-color logo-theme">
                                                            <a href="#" data-theme="logo-white"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="logo-dark"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="logo-blue"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="logo-indigo"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="logo-cyan"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="logo-green"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="logo-red"><span className="head" /><span className="cont" /></a>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <h6>Header color</h6>
                                                <ul className="list-unstyled">
                                                    <li className="theme-option">
                                                        <div className="theme-color header-theme">
                                                            <a href="#" data-theme="header-white"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="header-dark"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="header-blue"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="header-indigo"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="header-cyan"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="header-green"><span className="head" /><span className="cont" /></a>
                                                            <a href="#" data-theme="header-red"><span className="head" /><span className="cont" /></a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Doctor Chat */}
                                    <div className="tab-pane chat-sidebar-chat animated slideInRight" id="quick_sidebar_tab_2">
                                        <div className="chat-sidebar-list">
                                            <div className="chat-sidebar-chat-users slimscroll-style" data-rail-color="#ddd" data-wrapper-class="chat-sidebar-list">
                                                <div className="chat-header">
                                                    <h5 className="list-heading">Online</h5>
                                                </div>
                                                <ul className="media-list list-items">
                                                    <li className="media"><img className="media-object" src="assets/img/user/user3.jpg" width={35} height={35} alt="..." />
                                                        <i className="online dot" />
                                                        <div className="media-body">
                                                            <h5 className="media-heading">John Deo</h5>
                                                            <div className="media-heading-sub">Spine Surgeon</div>
                                                        </div>
                                                    </li>
                                                    <li className="media">
                                                        <div className="media-status">
                                                            <span className="badge badge-success">5</span>
                                                        </div> <img className="media-object" src="assets/img/user/user1.jpg" width={35} height={35} alt="..." />
                                                        <i className="busy dot" />
                                                        <div className="media-body">
                                                            <h5 className="media-heading">Rajesh</h5>
                                                            <div className="media-heading-sub">Director</div>
                                                        </div>
                                                    </li>
                                                    <li className="media"><img className="media-object" src="assets/img/user/user5.jpg" width={35} height={35} alt="..." />
                                                        <i className="away dot" />
                                                        <div className="media-body">
                                                            <h5 className="media-heading">Jacob Ryan</h5>
                                                            <div className="media-heading-sub">Ortho Surgeon</div>
                                                        </div>
                                                    </li>
                                                    <li className="media">
                                                        <div className="media-status">
                                                            <span className="badge badge-danger">8</span>
                                                        </div> <img className="media-object" src="assets/img/user/user4.jpg" width={35} height={35} alt="..." />
                                                        <i className="online dot" />
                                                        <div className="media-body">
                                                            <h5 className="media-heading">Kehn Anderson</h5>
                                                            <div className="media-heading-sub">CEO</div>
                                                        </div>
                                                    </li>
                                                    <li className="media"><img className="media-object" src="assets/img/user/user2.jpg" width={35} height={35} alt="..." />
                                                        <i className="busy dot" />
                                                        <div className="media-body">
                                                            <h5 className="media-heading">Sarah Smith</h5>
                                                            <div className="media-heading-sub">Anaesthetics</div>
                                                        </div>
                                                    </li>
                                                    <li className="media"><img className="media-object" src="assets/img/user/user7.jpg" width={35} height={35} alt="..." />
                                                        <i className="online dot" />
                                                        <div className="media-body">
                                                            <h5 className="media-heading">Vlad Cardella</h5>
                                                            <div className="media-heading-sub">Cardiologist</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="chat-header">
                                                    <h5 className="list-heading">Offline</h5>
                                                </div>
                                                <ul className="media-list list-items">
                                                    <li className="media">
                                                        <div className="media-status">
                                                            <span className="badge badge-warning">4</span>
                                                        </div> <img className="media-object" src="assets/img/user/user6.jpg" width={35} height={35} alt="..." />
                                                        <i className="offline dot" />
                                                        <div className="media-body">
                                                            <h5 className="media-heading">Jennifer Maklen</h5>
                                                            <div className="media-heading-sub">Nurse</div>
                                                            <div className="media-heading-small">Last seen 01: 20 AM</div>
                                                        </div>
                                                    </li>
                                                    <li className="media"><img className="media-object" src="assets/img/user/user8.jpg" width={35} height={35} alt="..." />
                                                        <i className="offline dot" />
                                                        <div className="media-body">
                                                            <h5 className="media-heading">Lina Smith</h5>
                                                            <div className="media-heading-sub">Ortho Surgeon</div>
                                                            <div className="media-heading-small">Last seen 11: 14 PM</div>
                                                        </div>
                                                    </li>
                                                    <li className="media">
                                                        <div className="media-status">
                                                            <span className="badge badge-success">9</span>
                                                        </div> <img className="media-object" src="assets/img/user/user9.jpg" width={35} height={35} alt="..." />
                                                        <i className="offline dot" />
                                                        <div className="media-body">
                                                            <h5 className="media-heading">Jeff Adam</h5>
                                                            <div className="media-heading-sub">Compounder</div>
                                                            <div className="media-heading-small">Last seen 3: 31 PM</div>
                                                        </div>
                                                    </li>
                                                    <li className="media"><img className="media-object" src="assets/img/user/user10.jpg" width={35} height={35} alt="..." />
                                                        <i className="offline dot" />
                                                        <div className="media-body">
                                                            <h5 className="media-heading">Anjelina Cardella</h5>
                                                            <div className="media-heading-sub">Physiotherapist</div>
                                                            <div className="media-heading-small">Last seen 7: 45 PM</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Doctor Chat */}
                                    {/* Start Setting Panel */}
                                    <div className="tab-pane chat-sidebar-settings animated slideInUp" id="quick_sidebar_tab_3">
                                        <div className="chat-sidebar-settings-list slimscroll-style">
                                            <div className="chat-header">
                                                <h5 className="list-heading">Layout Settings</h5>
                                            </div>
                                            <div className="chatpane inner-content ">
                                                <div className="settings-list">
                                                    <div className="setting-item">
                                                        <div className="setting-text">Sidebar Position</div>
                                                        <div className="setting-set">
                                                            <select className="sidebar-pos-option form-control input-inline input-sm input-small ">
                                                                <option value="left" selected="selected">Left</option>
                                                                <option value="right">Right</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="setting-item">
                                                        <div className="setting-text">Header</div>
                                                        <div className="setting-set">
                                                            <select className="page-header-option form-control input-inline input-sm input-small ">
                                                                <option value="fixed" selected="selected">Fixed</option>
                                                                <option value="default">Default</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="setting-item">
                                                        <div className="setting-text">Sidebar Menu </div>
                                                        <div className="setting-set">
                                                            <select className="sidebar-menu-option form-control input-inline input-sm input-small ">
                                                                <option value="accordion" selected="selected">Accordion</option>
                                                                <option value="hover">Hover</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="setting-item">
                                                        <div className="setting-text">Footer</div>
                                                        <div className="setting-set">
                                                            <select className="page-footer-option form-control input-inline input-sm input-small ">
                                                                <option value="fixed">Fixed</option>
                                                                <option value="default" selected="selected">Default</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-header">
                                                    <h5 className="list-heading">Account Settings</h5>
                                                </div>
                                                <div className="settings-list">
                                                    <div className="setting-item">
                                                        <div className="setting-text">Notifications</div>
                                                        <div className="setting-set">
                                                            <div className="switch">
                                                                <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-1">
                                                                    <input type="checkbox" id="switch-1" className="mdl-switch__input" defaultChecked />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="setting-item">
                                                        <div className="setting-text">Show Online</div>
                                                        <div className="setting-set">
                                                            <div className="switch">
                                                                <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-7">
                                                                    <input type="checkbox" id="switch-7" className="mdl-switch__input" defaultChecked />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="setting-item">
                                                        <div className="setting-text">Status</div>
                                                        <div className="setting-set">
                                                            <div className="switch">
                                                                <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-2">
                                                                    <input type="checkbox" id="switch-2" className="mdl-switch__input" defaultChecked />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="setting-item">
                                                        <div className="setting-text">2 Steps Verification</div>
                                                        <div className="setting-set">
                                                            <div className="switch">
                                                                <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-3">
                                                                    <input type="checkbox" id="switch-3" className="mdl-switch__input" defaultChecked />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-header">
                                                    <h5 className="list-heading">General Settings</h5>
                                                </div>
                                                <div className="settings-list">
                                                    <div className="setting-item">
                                                        <div className="setting-text">Location</div>
                                                        <div className="setting-set">
                                                            <div className="switch">
                                                                <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-4">
                                                                    <input type="checkbox" id="switch-4" className="mdl-switch__input" defaultChecked />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="setting-item">
                                                        <div className="setting-text">Save Histry</div>
                                                        <div className="setting-set">
                                                            <div className="switch">
                                                                <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-5">
                                                                    <input type="checkbox" id="switch-5" className="mdl-switch__input" defaultChecked />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="setting-item">
                                                        <div className="setting-text">Auto Updates</div>
                                                        <div className="setting-set">
                                                            <div className="switch">
                                                                <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-6">
                                                                    <input type="checkbox" id="switch-6" className="mdl-switch__input" defaultChecked />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end chat sidebar */}
                    </div>
                    {/* end page container */}
                    {/* start footer */}
                    <div className="page-footer">
                        <div className="page-footer-inner"> 2021 © LNĐ Hotel Mananger
                            <a href="#" target="_top" className="makerCss">RedStar Theme</a>
                        </div>
                        <div className="scroll-to-top">
                            <i className="icon-arrow-up" />
                        </div>
                    </div>
                    {/* end footer */}
                </div>
            </body>
        )
    }
}
