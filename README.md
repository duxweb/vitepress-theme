<h1 align="center">Dux VitePress Theme</h1>

<p align="center">
  <strong>🎨 现代、优雅、可定制的 VitePress 文档主题</strong>
</p>

<p align="center">
  轻松打造高颜值、多语言、组件丰富的技术文档站点
</p>

<p align="center">
  <a href="https://duxweb.github.io/vitepress/" target="_blank">📖 在线文档</a> ·
  <a href="https://github.com/duxweb/vitepress-theme" target="_blank">🏠 GitHub</a> ·
  <a href="https://www.dux.cn" target="_blank">🌐 官网</a>
</p>

<p align="center">
  <strong>中文</strong> · <a href="./README.en.md">English</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green.svg" />
  <img alt="VitePress" src="https://img.shields.io/badge/VitePress-1.x-3b82f6" />
  <img alt="Node" src="https://img.shields.io/badge/Node-18%2B-333" />
  <img alt="PNPM" src="https://img.shields.io/badge/PNPM-9-ffa500" />
  <img alt="Stars" src="https://img.shields.io/github/stars/duxweb/vitepress-theme?style=social" />
</p>

---

## ✨ 特性亮点

- 🚀 **开箱即用**：一行命令安装，零配置快速上手
- 🎨 **现代设计**：优雅的 UI，支持亮/暗色主题
- 🌍 **多语言**：完整的 i18n 支持与语言跳转页
- 📚 **多种布局**：Home / Doc / Page / Sponsor / Changelog / Jump
- 🔍 **本地搜索**：内置搜索，支持中文分词
- 🧩 **丰富组件**：自定义容器、代码组、Badge、Mermaid 等
- ⚡ **高性能**：基于 VitePress 1.x 与按需构建

---

## 🧱 Monorepo 结构

本仓库为 Monorepo：

```
vitepress-monorepo/
├─ packages/
│  ├─ theme/     # 主题源码（发布包）
│  └─ docs/      # 文档站点（演示与说明）
├─ .github/workflows/deploy-docs.yml  # 自动部署文档到 GitHub Pages
└─ README.md
```

> 文档站点默认部署到 `https://duxweb.github.io/vitepress/`。

---

## 🚀 快速开始（在你的项目中使用主题）

安装主题：

```bash
# 使用 pnpm
pnpm add @duxweb/vitepress-theme

# 或 npm / yarn
npm i @duxweb/vitepress-theme
# yarn add @duxweb/vitepress-theme
```

启用主题：

```ts
// .vitepress/theme/index.ts
import theme from '@duxweb/vitepress-theme'
import '@duxweb/vitepress-theme/dist/index.css'

export default {
  extends: theme
}
```

搜索提示：
- 默认无需额外配置即可运行；若未做额外配置，搜索会“优雅降级”为空索引（不报错但无结果）。
- 如需启用“完整搜索”，在 `.vitepress/config` 添加：
  ```ts
  export default defineConfig({
    vite: {
      ssr: { noExternal: ['@duxweb/vitepress-theme'] },
      optimizeDeps: { exclude: ['@duxweb/vitepress-theme'] }
    }
  })
  ```

首页示例：

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

---

## 🧭 文档开发（本仓库）

```bash
# 开发文档站点
pnpm dev

# 构建所有包（主题与文档）
pnpm build

# 仅构建文档
pnpm build:docs

# 预览文档
pnpm preview
```

> 文档构建已根据 GitHub 环境自动设置 `base`：
> - 本地：`/`
> - GitHub Pages：`/vitepress/`

同时，文档项目默认关闭 CSS 压缩（主题 CSS 已为编译产物，避免多余压缩与警告）：

```ts
// packages/docs/.vitepress/config.mts（已内置）
export default defineConfig({
  vite: {
    build: {
      cssMinify: false
    }
  }
})
```

---

## 🧩 布局与能力

| 布局 | 用途 | 说明 |
|---|---|---|
| `home` | 首页 | Hero / Features / QuickStart |
| `doc` | 文档页 | 侧边栏 / 目录 / 页脚导航 |
| `page` | 单页 | 居中内容 + 自定义 PageHero |
| `sponsor` | 赞助页 | 支付方式 / 支持者列表 / 统计 |
| `changelog` | 更新日志 | 版本历史 / 类型分类 |
| `jump` | 语言跳转 | 智能检测语言并跳转 |

更多示例与 API 详见在线文档。

---

## 🤝 参与贡献

欢迎通过 Issue / PR 参与贡献：

1. Fork 本仓库
2. 新建分支：`feat/your-feature`
3. 提交代码并发起 PR

---

## 📄 协议

[MIT](./LICENSE)

---

<p align="center">
  Made with ❤️ by <a href="https://www.dux.cn" target="_blank">DuxWeb</a>
</p>
