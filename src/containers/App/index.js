import React from 'react'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from '../Home'
import Login from '../Login'

export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Redirect exact from="/" to={Login} /> */}
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}
