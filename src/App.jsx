import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Home from './view/home/Home'
import Login from './view/login/Login'
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}
