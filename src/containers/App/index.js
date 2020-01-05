import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from '../../routes'
import { useAuth } from '@/hooks/auth.hook'
import { AuthContext } from '@/contexts/auth-context'

export default function App() {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>{routes}</Router>
    </AuthContext.Provider>
  )
}
