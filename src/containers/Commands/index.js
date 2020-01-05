import React, { useState, useEffect, useContext } from 'react'
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import List from './components/List'
import CommandForm from './components/CommandForm'
import Command from './components/Command'

import { useStores } from '@/hooks'

const Commands = observer(props => {
  let { path } = useRouteMatch()
  const { commandsStore } = useStores()

  useEffect(() => {
    commandsStore.fetchCommands()
  }, [])

  return (
    <div>
      <h1>Создание команды</h1>
      <CommandForm createCommand={commandsStore.createCommand} />
      <List commands={commandsStore.commands} deleteCommand={commandsStore.deleteCommand} />

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:commandId`}>
          <Command updateCommand={commandsStore.updateCommand} commands={commandsStore.commands} />
        </Route>
      </Switch>
    </div>
  )
})

export default Commands
