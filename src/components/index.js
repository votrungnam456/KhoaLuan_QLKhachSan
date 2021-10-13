import React, { Component } from 'react'
import Footer from './Home/Footer.js'
import Header from './Home/Header.js'
import SettingTheme from './Home/SettingTheme.js'
import Sidebar from './Home/Sidebar.js'
import routes from '../router/Router.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default class index extends Component {
    render() {
        return (

            <div className="page-wrapper">
                {/* start header */}
                <Header />
                {/* end header */}
                {/* start page container */}
                <div className="page-container">
                    {/* start sidebar menu */}
                    <Sidebar />
                    {/* end sidebar menu */}
                    {/* start page content */}
                    {/* <Content /> */}
                    <Switch>
                        {this.setRoutes(routes)}
                    </Switch>
                    {/* <ListRoom /> */}
                    {/* end page content */}
                    {/* start chat sidebar */}
                    <SettingTheme />
                    {/* end chat sidebar */}
                </div>
                {/* end page container */}
                {/* start footer */}
                <Footer />
                {/* end footer */}
            </div>
        )
    }
    setRoutes = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (<Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>)
            })
        }
        return result
    }
}
