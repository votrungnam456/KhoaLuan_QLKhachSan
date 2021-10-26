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
    // this.setState({
    //   user: [

    //   ]
    // })
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
