import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import welcome from '@welcome'
import dashboard from './pages/dashboard'
import './App.css'
// import * as pages from '@pages'

export default class Routes extends React.Component {
  render () {
    return (
      <Router Component={welcome}>
        <Switch>
          <Route exact path="/" component={welcome} />
          <Route exact path="/dashboard" component={dashboard} />
          <Route component={dashboard} />
        </Switch>
      </Router>
    )
  }
}
