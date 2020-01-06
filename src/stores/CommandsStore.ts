import { decorate, observable, action, runInAction } from 'mobx'
import * as api from 'Api/commands'

export class CommandsStore {
  constructor() {}

  commands:any[] = []
  loading: any = false
  error: any = {}

  fetchCommands = async () => {
    this.loading = true
    try {
      const result = await api.fetchList()
      // after await, modifying state again, needs an actions:
      runInAction(() => {
        this.loading = false
        this.commands = result.data
      })
    } catch (error) {
      runInAction(() => {
        this.loading = false
        this.error = error
      })
    }
  }

  createCommand = async (payload:any) => {
    this.loading = true
    try {
      const result = await api.create(payload)
      runInAction(() => {
        this.loading = false
        this.commands = [...this.commands, result.data]
      })
    } catch (error) {
      runInAction(() => {
        this.loading = false
        this.error = error
      })
    }
  }

  updateCommand = async (payload:any) => {
    this.loading = true
    try {
      const result = await api.update(payload)
      runInAction(() => {
        this.loading = false
        this.commands = [
          ...this.commands.filter(command => command._id !== payload.commandId),
          result.data,
        ]
      })
    } catch (error) {
      runInAction(() => {
        this.loading = false
        this.error = error
      })
    }
  }

  deleteCommand = async (id:number) => {
    this.loading = true
    try {
      const result = await api.remove(id)
      runInAction(() => {
        this.loading = false
        this.commands = this.commands.filter(command => command._id !== id)
      })
    } catch (error) {
      runInAction(() => {
        this.loading = false
        this.error = error
      })
    }
  }
}

decorate<any>(CommandsStore, {
  commands: observable,
  state: observable,
  fetchCommands: action,
  createCommand: action,
  updateCommand: action,
  deleteCommand: action,
})
