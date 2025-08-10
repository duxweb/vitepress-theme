# @duxweb/vitepress-theme

现代、优雅、可定制的 VitePress 文档主题。

- ✨ 现代设计 · 亮/暗色支持
- 🌍 多语言 · 语言跳转页
- 📚 多布局 · Home / Doc / Page / Sponsor / Changelog / Jump
- 🔍 本地搜索 · Minisearch 集成

## 要求
- Node.js ≥ 18
- VitePress ^1.6.4

## 安装
```bash
pnpm add @duxweb/vitepress-theme
# 或
npm i @duxweb/vitepress-theme
```

## 快速使用
在你的文档项目中：

```ts
// .vitepress/theme/index.ts
import theme from '@duxweb/vitepress-theme'
import '@duxweb/vitepress-theme/dist/index.css'

export default {
  extends: theme
}
```

> 提示：主题 CSS 已为编译产物，通常无需再次压缩。

> 搜索提示：默认无需配置即可运行；若需启用完整搜索，请参考下方“搜索使用说明”（在 `.vitepress/config` 中配置 `vite.ssr.noExternal`）。

## 基础配置示例
```ts
// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  description: 'Modern VitePress Theme',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' }
    ],
    search: { provider: 'local' }
  }
})
```

## 搜索使用说明
- 默认无需额外配置即可运行；若未做额外配置，搜索会“优雅降级”为空索引（不报错，但无结果）。
- 如需启用“完整搜索”，请在 `.vitepress/config.(ts|mts)` 中加入：
  ```ts
  import { defineConfig } from 'vitepress'
  export default defineConfig({
    vite: {
      ssr: { noExternal: ['@duxweb/vitepress-theme'] },
      // 可选：避免预打包，确保转换时机
      optimizeDeps: { exclude: ['@duxweb/vitepress-theme'] }
    }
  })
  ```

说明：主题内部已实现“动态导入 + 优雅降级”。当未按上面配置时，控制台会输出一次中文提示，搜索以空索引运行（不影响站点其它功能）。

## 首页示例
```md
---
layout: home
hero:
  name: My Project
  text: Modern VitePress Theme
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
features:
  - icon: ⚡
    title: Fast
    details: Built on VitePress
---
```

## 许可证
MIT

