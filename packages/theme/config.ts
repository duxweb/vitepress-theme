import { defineConfig } from 'vitepress'
import type { UserConfig } from 'vitepress'

type DuxConfig = UserConfig & {
  vite?: UserConfig['vite']
}

function uniq(items: string[]) {
  return Array.from(new Set(items))
}

function mergeNoExternal(value: unknown): true | (string | RegExp)[] {
  if (value === true) return true
  if (Array.isArray(value)) {
    const hasNonString = value.some((item) => typeof item !== 'string')
    if (hasNonString) {
      const exists = value.some((item) => item === '@duxweb/vitepress-theme')
      return exists ? value.slice() : [...value, '@duxweb/vitepress-theme']
    }
    return uniq([...value, '@duxweb/vitepress-theme'])
  }
  if (typeof value === 'string') return uniq([value, '@duxweb/vitepress-theme'])
  if (value instanceof RegExp) return [value, '@duxweb/vitepress-theme']
  return ['@duxweb/vitepress-theme']
}

function mergeExclude(value?: string[]) {
  const list = Array.isArray(value) ? value : []
  return uniq([...list, '@duxweb/vitepress-theme'])
}

export function withDuxTheme(config: DuxConfig): UserConfig {
  const vite = config.vite ?? {}
  const ssr = {
    ...(vite.ssr ?? {}),
    noExternal: mergeNoExternal(vite.ssr?.noExternal)
  }
  const optimizeDeps = {
    ...(vite.optimizeDeps ?? {}),
    exclude: mergeExclude(vite.optimizeDeps?.exclude)
  }

  return defineConfig({
    ...config,
    vite: {
      ...vite,
      ssr,
      optimizeDeps
    }
  })
}
