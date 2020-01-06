import http from '@/utils/http'

export const fetchList = () => http.get('/commands')
export const create = (command:any) => http.post('/commands', command, {
  headers: {
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
  },
})
export const update = ({ commandId, command }:any) => http.put(`/commands/${commandId}`, command)
export const remove = (id:any) => http.delete(`/commands/${id}`)
