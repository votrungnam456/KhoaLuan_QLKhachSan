import React, { Component } from 'react'

export default class SettingTheme extends Component {
    render() {
        return (
            <div className="chat-sidebar-container" data-close-on-body-click="false">
                <div className="chat-sidebar">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a href="#quick_sidebar_tab_1" className="nav-link active tab-icon" data-toggle="tab">Theme
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
                    </div>
                </div>
            </div>
        )
    }
}
