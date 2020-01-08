import { decorate, observable, action, runInAction } from 'mobx'
import * as api from '@/api/auth'

import { ILoginParams, IRegisterParams } from '@/typings/auth';
export class AuthStore {
  constructor() {}

  successMessage: any = {}
  loading: boolean = false
  error: any = {}

  login = async (payload: ILoginParams): Promise<any> => {
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

  register = async (payload: IRegisterParams): Promise<any> => {
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
}

decorate<any>(AuthStore, {
  successMessage: observable,
  loading: observable,
  register: action,
  login: action,
})
