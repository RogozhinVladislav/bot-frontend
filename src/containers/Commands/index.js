import React, { useState, useEffect, useContext } from 'react'
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import List from './components/List'
import CreateCommandForm from './components/CreateCommandForm'
import Command from './components/Command'

import CommandsStore from '@/stores/CommandsStore'

const Commands = observer(props => {
  let { path } = useRouteMatch()
  const store = useContext(CommandsStore)

  useEffect(() => {
    store.fetchCommands()
  }, [])

  return (
    <div>
      <h1>Создание команды</h1>
      <CreateCommandForm createCommand={store.createCommand} />
      <List commands={store.commands} deleteCommand={store.deleteCommand} />

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:commandId`}>
          <Command commands={store.commands} />
        </Route>
      </Switch>
    </div>
  )
})

export default Commands
