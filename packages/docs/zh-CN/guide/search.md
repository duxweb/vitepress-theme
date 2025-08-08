# 搜索功能

Dux 主题内置本地搜索能力，支持中英文分词。

## 启用本地搜索

在 `.vitepress/config.mts` 中开启：

```ts
export default defineConfig({
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
```

## 国际化

可通过 `options.locales` 为不同语言定制占位文案：

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

## 最佳实践

- 使用清晰的标题层级（h2/h3）便于检索
- 为重要页面添加摘要（description）
- 合理组织侧边栏与链接结构
