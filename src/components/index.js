import React, { Component } from 'react'
import Footer from './Home/Footer.js'
import Header from './Home/Header.js'
import SettingTheme from './Home/SettingTheme.js'
import Sidebar from './Home/Sidebar.js'
import routes from '../router/Router.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login/Login.js'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        let userLocal = JSON.parse(localStorage.getItem("userLogin"));
        let userSession = JSON.parse(sessionStorage.getItem("userLogin"));
        console.log(userSession,userLocal)
        if (userLocal === null && userSession === null) {
            console.log(userSession,userLocal)
            this.props.history.push("/login")
            this.props.history.go(0);
            // return <Login />
            // <Redirect to="/login"/>
        }
        else {
            this.setState({
                user: userLocal || userSession
            })
        }
    }
    render() {
        const { user } = this.state;
        return (
            <div className="page-wrapper">
                {/* start header */}
                <Header user={user} />
                {/* end header */}
                {/* start page container */}
                <div className="page-container">
                    {/* start sidebar menu */}
                    <Sidebar user={user} />
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
