import { decorate, observable, action, runInAction } from 'mobx'
import * as api from 'Api/auth'

export class AuthStore {
  constructor() {}

  state = {}
  loading = false
  error = {}

  register = async payload => {
    this.loading = true
    try {
      const result = await api.register(payload)
      debugger
      runInAction(() => {
        this.loading = false
        this.state = result.data
      })
    } catch (error) {
      runInAction(() => {
        this.loading = false
        this.error = error
      })
    }
  }

  login = async payload => {
    this.loading = true
    try {
      const result = await api.login(payload)
      runInAction(() => {
        this.loading = false
        this.state = result.data
      })
    } catch (error) {
      runInAction(() => {
        this.loading = false
        this.error = error
      })
    }
  }
}

decorate(AuthStore, {
  state: observable,
  loading: observable,
  register: action,
  login: action,
})
