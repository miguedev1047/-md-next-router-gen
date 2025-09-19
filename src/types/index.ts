export type FileType =
  | 'page'
  | 'layout'
  | 'template'
  | 'default'
  | 'route'
  | 'loading'
  | 'error'

export type TemplateContext = {
  dirName: string
  isTypescript: boolean
}
