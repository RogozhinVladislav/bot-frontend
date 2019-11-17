import React from 'react'
import { CommandsStore } from '@/stores'

export const storesContext = React.createContext({
  commandsStore: new CommandsStore(),
})
