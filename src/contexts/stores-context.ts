import React from 'react'
import { AuthStore, CommandsStore, InteractionsStore } from '@/stores'

export const storesContext = React.createContext({
  authStore: new AuthStore(),
  commandsStore: new CommandsStore(),
  interactionsStore: new InteractionsStore(),
})
