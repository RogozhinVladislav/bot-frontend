import React, { useState, useEffect, useContext } from 'react'
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import { CommandsContext } from '@/contexts/commands-context'
import { CommandList } from './components/List'
import { CommandForm } from './components/CommandForm'
import { Command } from './components/Command'

import { useStores } from '@/hooks'

export const Commands = observer(props => {
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
        <CommandList />

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
