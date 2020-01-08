import http from '@/utils/http'

import { ILoginParams, IRegisterParams } from '@/typings/auth';

export const register = (payload: IRegisterParams["values"]) => http.post('/auth/register', payload)
export const login = (payload: ILoginParams["values"]) => http.post('/auth/login', payload)
