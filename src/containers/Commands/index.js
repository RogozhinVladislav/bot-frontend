import React, { useState, useEffect, useContext } from 'react'
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import { CommandsContext } from '@/contexts'
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
    <CommandsContext.Provider value={{
      commands: commandsStore.commands,
      createCommand: commandsStore.createCommand,
      updateCommand: commandsStore.updateCommand,
      deleteCommand: commandsStore.deleteCommand,
    }}>
      <div>
        <h1>Создание команды</h1>
        <CommandForm />
        <List />

        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:commandId`}>
            <Command />
          </Route>
        </Switch>
      </div>
    </CommandsContext.Provider>
  )
})

export default Commands
