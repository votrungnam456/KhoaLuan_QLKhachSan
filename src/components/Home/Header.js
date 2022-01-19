import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {user} = this.props;
        return (
            <div className="page-header navbar navbar-fixed-top">
                <div className="page-header-inner ">
                    {/* logo start */}
                    <div className="page-logo">
                        <Link to="/">
                            <img alt="" src="assets/img/logo.png" />
                            <span className="logo-default">LNĐ</span> </Link>
                    </div>
                    {/* logo end */}
                    <ul className="nav navbar-nav navbar-left in">
                        <li><a className="menu-toggler sidebar-toggler"><i className="icon-menu" /></a></li>
                    </ul>
                    {/* start mobile menu */}
                    <a href=" " className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                        <span />
                    </a>
                    {/* end mobile menu */}
                    {/* start header menu */}
                    <div className="top-menu">
                        <ul className="nav navbar-nav pull-right">
                            {/* start manage user dropdown */}
                            <li className="dropdown dropdown-user">
                                <a href=" " className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <img alt="" className="img-circle " src="assets/img/dp.jpg" />
                                    <span className="username username-hide-on-mobile"> {user.nameEmployee} </span>
                                    <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-default animated jello">
                                    <li>
                                        <Link to={"/employee-profile/" + user.id}>
                                            <i className="icon-user" /> Profile </Link>
                                    </li>
                                    <li>
                                        <Link to="/login">
                                            <i className="icon-logout" /> Log Out </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
