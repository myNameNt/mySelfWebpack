import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './view/home/Home'
import Login from './view/login/Login'
interface appProps {

}
interface appState {
  
}
export default class App extends Component<appProps, appState> {
  constructor(props: appProps) {
    super(props)
  }
  componentDidMount() {
    console.log('1')
  }
  shouldComponentUpdate(nextProps: appProps, nextState: appState) {
    return true
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

