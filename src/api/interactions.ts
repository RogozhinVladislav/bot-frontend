import http from '@/utils/http'
import { IInteraction } from '@/typings/interactions';

export const fetchList = () => http.get('/interactions')
export const create = (interaction: IInteraction) => http.post('/interactions', interaction)
export const update = ({ interactionId, interaction }: { interactionId: string, interaction: IInteraction }) => http.put(`/commands/${interactionId}`, interaction)
export const remove = (id: string) => http.delete(`/interactions/${id}`)
