import React, { useState, useEffect, useContext } from 'react'
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import List from './components/List'
import CreateCommandForm from './components/CreateCommandForm'
import Command from './components/Command'
import http from '@/utils/http'

import CommandsStore from '@/stores/CommandsStore'

const Commands = observer(props => {
  let { path } = useRouteMatch()
  const [data, setData] = useState([])
  const store = useContext(CommandsStore)

  useEffect(() => {
    const fetchData = async () => {
      store.fetchCommands()
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Создание команды</h1>
      <CreateCommandForm />
      <List commands={store.commands} />

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:commandId`}>
          <Command />
        </Route>
      </Switch>
    </div>
  )
})

export default Commands
