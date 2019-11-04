import { createContext } from 'react'
import { decorate, observable, action, runInAction } from 'mobx'
import http from '@/utils/http'

export class CommandsStore {
  constructor() {}

  commands = []
  state = 'pending'

  fetchCommands = async () => {
    this.state = 'pending'

    try {
      const result = await http.get('/commands')
      console.log('resultmobx', result)
      // after await, modifying state again, needs an actions:
      runInAction(() => {
        this.state = 'done'
        this.commands = result.data
      })
    } catch (error) {
      runInAction(() => {
        this.state = 'error'
      })
    }
  }
}

decorate(CommandsStore, {
  commands: observable,
  state: observable,
  fetchCommands: action,
})

export default createContext(new CommandsStore())
