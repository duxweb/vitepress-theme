# Search

Dux theme includes built-in local search with multilingual support.

## Enable Local Search

Enable in `.vitepress/config.mts`:

```ts
export default defineConfig({
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
```

## Internationalization

Customize UI texts per locale:

```ts
search: {
  provider: 'local',
  options: {
    locales: {
      'zh-CN': {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          }
        }
      }
    }
  }
}
```

## Best Practices

- Use clear heading hierarchy (h2/h3)
- Provide meaningful page descriptions
- Keep sidebar and link structure organized
