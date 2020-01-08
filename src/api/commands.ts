import http from '@/utils/http'
import { ICommand } from '@/typings/commands';

export const fetchList = () => http.get('/commands')
export const create = (command: ICommand) => http.post('/commands', command, {
  headers: {
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
  },
})
export const update = ({ commandId, command }: { commandId: string, command: ICommand }) => http.put(`/commands/${commandId}`, command)
export const remove = (id: string) => http.delete(`/commands/${id}`)
