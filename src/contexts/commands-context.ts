import { createContext } from 'react'
import { ICommand } from '@/typings/commands';
export interface ICommandContext {
  commands: Array<ICommand>;
  createCommand: (payload: FormData) => void;
  updateCommand: ({ commandId, command }: { commandId: string, command: ICommand }) => void;
  deleteCommand: (id: string) => void;
}

export const CommandsContext = createContext({

} as ICommandContext)
