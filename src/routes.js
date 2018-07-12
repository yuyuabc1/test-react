import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import welcome from '@welcome'
import dashboard from './pages/dashboard'
import main from './pages/main'
import './App.css'
// import * as pages from '@pages'

export default class Routes extends React.Component {
  render () {
    return (
      <Router Component={welcome}>
        <Switch>
          <Route exact path="/" component={welcome} />
          <Route path="/dashboard" component={dashboard} />
          <Route path="/main/:topicId" component={main} />
          <Route exact path="/main" component={main} />
          <Route component={dashboard} />
        </Switch>
      </Router>
    )
  }
}
