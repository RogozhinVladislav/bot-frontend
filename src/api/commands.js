import http from '@/utils/http'

export const fetchList = () => http.get('/commands')
export const create = command => http.post('/commands', command, {
  headers: {
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
  },
})
export const update = ({ commandId, command }) => http.put(`/commands/${commandId}`, command)
export const remove = id => http.delete(`/commands/${id}`)
