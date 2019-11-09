import http from '@/utils/http'

export const fetchList = () => http.get('/commands')
export const create = command => http.post('/commands', command)
export const update = ({ commandId, command }) => http.post(`/commands/${commandId}`, command)
export const remove = id => http.delete(`/commands/${id}`)
