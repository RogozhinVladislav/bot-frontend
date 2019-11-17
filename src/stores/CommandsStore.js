import { createContext } from 'react'
import { decorate, observable, action, runInAction } from 'mobx'
import * as api from 'Api/commands'

export class CommandsStore {
  constructor() {}

  commands = []
  state = 'pending'

  fetchCommands = async () => {
    this.state = 'pending'
    try {
      const result = await api.fetchList()
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

  createCommand = async payload => {
    this.state = 'pending'
    try {
      const result = await api.create(payload)
      runInAction(() => {
        this.state = 'done'
        this.commands = [...this.commands, result.data]
      })
    } catch (error) {
      runInAction(() => {
        this.state = 'error'
      })
    }
  }

  updateCommand = async payload => {
    this.state = 'pending'
    try {
      const result = await api.update(payload)
      runInAction(() => {
        this.state = 'done'
        this.commands = [
          ...this.commands.filter(command => command._id !== payload.commandId),
          result.data,
        ]
      })
    } catch (error) {
      runInAction(() => {
        this.state = 'error'
      })
    }
  }

  deleteCommand = async id => {
    this.state = 'pending'
    try {
      const result = await api.remove(id)
      runInAction(() => {
        this.state = 'done'
        this.commands = this.commands.filter(command => command._id !== id)
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
  createCommand: action,
})
