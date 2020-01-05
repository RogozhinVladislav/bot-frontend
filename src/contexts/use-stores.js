import React from 'react'
import { CommandsStore, AuthStore } from '@/stores'

export const storesContext = React.createContext({
  commandsStore: new CommandsStore(),
  authStore: new AuthStore(),
})
