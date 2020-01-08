export type ICommand = {
  readonly _id: string,
  trigger: string,
  answer: string,
  imageAttachment?: string,
  audioAttachment?: string,
}
