import Index from './components/index';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact={true} component={(history) => <Login history={history}></Login>}></Route>
        <Switch>
          <Index />
        </Switch>
      </Switch>
    </Router >
  );
}

export default App;
