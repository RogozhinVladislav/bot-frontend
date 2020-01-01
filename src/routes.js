import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={Register} />
    </Switch>
  )
}
