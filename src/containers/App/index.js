import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from '../Home'
import Login from '../Login'

export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Redirect exact from="/" to={Login} /> */}
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}
