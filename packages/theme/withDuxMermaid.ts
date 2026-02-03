import type { UserConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

type DuxMermaidConfig = UserConfig & {
  mermaidPlugin?: {
    class?: string
    [key: string]: unknown
  }
}

function mergeMermaidClass(userClass?: string) {
  const base = 'mermaid dux-mermaid'
  if (!userClass) return base
  const merged = `${base} ${userClass}`.trim()
  const uniq = Array.from(new Set(merged.split(/\s+/).filter(Boolean)))
  return uniq.join(' ')
}

export function withDuxMermaid(config: UserConfig): UserConfig {
  const mermaidPlugin = {
    ...(config as DuxMermaidConfig).mermaidPlugin,
    class: mergeMermaidClass((config as DuxMermaidConfig).mermaidPlugin?.class)
  }

  return withMermaid({
    ...(config as DuxMermaidConfig),
    mermaidPlugin
  } as DuxMermaidConfig)
}
