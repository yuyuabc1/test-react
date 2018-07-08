import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import welcome from '@welcome'
// import * as pages from '@pages'

export default class Routes extends React.Component {
  render () {
    return (
      <Router Component={welcome}>
        <Route path="/welcome" component={welcome}></Route>
      </Router>
    )
  }
}
