import { decorate, observable, action, runInAction } from 'mobx'
import * as api from 'Api/auth'

export class AuthStore {
  constructor() {}

  successMessage = {}
  loading = false
  error = {}

  register = async payload => {
    this.loading = true
    try {
      const { values, onSuccess } = payload;
      const result = await api.register(values)
      runInAction(() => {
        this.loading = false
        this.successMessage = result.data.message
        onSuccess()
      })
    } catch (err) {
      runInAction(() => {
        this.loading = false
        this.error = err.response.data
      })
    }
  }

  login = async payload => {
    this.loading = true
    try {
      const { values, authLogin } = payload;
      const result = await api.login(values)
      runInAction(() => {
        this.loading = false
        this.successMessage = result.data.message
        const { token, userId } = result.data
        authLogin(token, userId)
      })
    } catch (err) {
      runInAction(() => {
        this.loading = false
        this.error = err.response.data
      })
    }
  }
}

decorate(AuthStore, {
  successMessage: observable,
  loading: observable,
  register: action,
  login: action,
})
