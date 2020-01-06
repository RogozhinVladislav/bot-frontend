import http from '@/utils/http'

export const register = (payload:any) => http.post('/auth/register', payload)
export const login = (payload:any) => http.post('/auth/login', payload)
