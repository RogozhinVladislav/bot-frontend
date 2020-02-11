import { createContext } from 'react'
import { IInteraction } from '@/typings/interactions';
export interface IInteractionContext {
  interactions: Array<IInteraction>;
  createInteraction: (payload: FormData) => void;
  updateInteraction: ({ interactionId, interaction }: { interactionId: string, interaction: IInteraction }) => void;
  deleteInteraction: (id: string) => void;
}

export const InteractionsContext = createContext({

} as IInteractionContext)
