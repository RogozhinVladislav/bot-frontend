import { decorate, observable, action, runInAction } from 'mobx'
import * as api from 'Api/interactions'

export class InteractionsStore {
  constructor() {}

  interactions:any[] = []
  loading: any = false
  error: any = {}

  fetchInteractions = async () => {
    this.loading = true
    try {
      const result = await api.fetchList()
      // after await, modifying state again, needs an actions:
      runInAction(() => {
        this.loading = false
        this.interactions = result.data
      })
    } catch (error) {
      runInAction(() => {
        this.loading = false
        this.error = error
      })
    }
  }

  createInteraction = async (payload:any) => {
    this.loading = true
    try {
      const result = await api.create(payload)
      runInAction(() => {
        this.loading = false
        this.interactions = [...this.interactions, result.data]
      })
    } catch (error) {
      runInAction(() => {
        this.loading = false
        this.error = error
      })
    }
  }

  updateInteraction = async (payload:any) => {
    this.loading = true
    try {
      const result = await api.update(payload)
      runInAction(() => {
        this.loading = false
        this.interactions = [
          ...this.interactions.filter(interaction => interaction._id !== payload.interactionId),
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

  deleteInteraction = async (id: string) => {
    this.loading = true
    try {
      const result = await api.remove(id)
      runInAction(() => {
        this.loading = false
        this.interactions = this.interactions.filter(interaction => interaction._id !== id)
      })
    } catch (error) {
      runInAction(() => {
        this.loading = false
        this.error = error
      })
    }
  }
}

decorate<any>(InteractionsStore, {
  interactions: observable,
  state: observable,
  fetchInteractions: action,
  createInteraction: action,
  updateInteraction: action,
  deleteInteraction: action,
})
