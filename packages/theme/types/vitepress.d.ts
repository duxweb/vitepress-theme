import 'vitepress'

declare module 'vitepress' {
  export interface UserConfig<Config = any> {
    mermaidPlugin?: {
      class?: string
      [key: string]: unknown
    }
  }
}
