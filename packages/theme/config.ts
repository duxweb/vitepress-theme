import { defineConfig } from 'vitepress'
import type { UserConfig } from 'vitepress'
import type { Alias, AliasOptions } from 'vite'

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

function mergeAlias(value?: AliasOptions): Alias[] {
  const aliasList: Alias[] = [
    {
      find: /^dayjs$/,
      replacement: 'dayjs/esm/index.js'
    },
    {
      find: /^dayjs\/plugin\//,
      replacement: 'dayjs/plugin/'
    },
    {
      find: /^dayjs\/esm\/index\.js\/plugin\//,
      replacement: 'dayjs/plugin/'
    }
  ]

  if (Array.isArray(value)) {
    aliasList.push(...value)
  } else if (value && typeof value === 'object') {
    for (const [find, replacement] of Object.entries(value)) {
      aliasList.push({ find, replacement })
    }
  }

  const hasSanitizeAlias = aliasList.some((item) => {
    if (item.find instanceof RegExp) return item.find.test('@braintree/sanitize-url')
    return item.find === '@braintree/sanitize-url'
  })

  if (!hasSanitizeAlias) {
    aliasList.push({
      find: /^@braintree\/sanitize-url$/,
      replacement: '@duxweb/vitepress-theme/shims/sanitize-url'
    })
  }

  return aliasList
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
  const resolve = {
    ...(vite.resolve ?? {}),
    alias: mergeAlias(vite.resolve?.alias)
  }

  return defineConfig({
    ...config,
    vite: {
      ...vite,
      ssr,
      optimizeDeps,
      resolve
    }
  })
}
