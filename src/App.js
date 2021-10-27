import Index from './components/index';
import Login from './components/Login/Login';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page404 from './components/ErrorPage/Page404';
import { createBrowserHistory } from "history"
const customHistory = createBrowserHistory();
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    // let userLocal = JSON.parse(localStorage.getItem("userLogin"));
    // let userSession = JSON.parse(sessionStorage.getItem("userLogin"));
    // if (userLocal === null && userSession === null) {
    //     return <Login />
    //     // <Redirect to="/login"/>
    // }
    // else {
    //     this.setState({
    //         user: userLocal || userSession
    //     })
    // }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" exact={true} component={({ history }) => <Login history={history} />}></Route>
          <Index history={customHistory} />
          {/* <Route path="" exact={true} component={() => <Page404 />}></Route> */}
        </Switch>
      </Router >
    );
  }
}

export default App;
