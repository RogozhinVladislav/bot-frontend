export type ILoginParams = {
  values: {
    email: string
    password: string
  },
  authLogin: Function
}

export type IRegisterParams = {
  values: {
    email: string
    password: string
    username: string
    remember: boolean
  },
  onSuccess: Function
}
