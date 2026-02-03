# 快速开始

本指南将帮助你快速上手使用 Dux VitePress 主题。

## 安装

### 创建新项目

```bash
# 使用 npm
npm create vitepress@latest my-docs

# 使用 pnpm
pnpm create vitepress@latest my-docs

# 使用 yarn
yarn create vitepress my-docs
```

### 安装主题

进入项目目录并安装 Dux 主题：

```bash
cd my-docs

# 使用 npm
npm install @duxweb/vitepress-theme

# 使用 pnpm
pnpm add @duxweb/vitepress-theme

# 使用 yarn
yarn add @duxweb/vitepress-theme
```

## 配置主题

### 配置 VitePress（最小化）

在 `.vitepress/config.ts` 中使用最小化配置：

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  // 你的站点配置...
  mermaidPlugin: {}
})
```

### 配置主题文件

在 `.vitepress/theme/index.ts` 中配置主题：

```typescript
// 默认主题
import Theme from '@duxweb/vitepress-theme'
// 引入主题样式
import '@duxweb/vitepress-theme/dist/index.css'

export default Theme
```

## 创建首页

在项目根目录创建 `index.md`：

```markdown
---
layout: home

hero:
  name: 我的文档站点
  text: 基于 VitePress 的现代化文档
  tagline: 使用 Dux 主题构建优雅的文档站点
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 查看 GitHub
      link: https://github.com

features:
  - icon: ⚡
    title: 极速体验
    details: 基于 Vite 构建，享受极快的开发体验
  - icon: 📝
    title: Markdown 优先
    details: 专注于内容创作，使用 Markdown 编写文档
  - icon: 🎨
    title: 主题定制
    details: 丰富的主题配置，打造独特的文档风格
---
```

## 启动开发服务器

```bash
# 使用 npm
npm run docs:dev

# 使用 pnpm
pnpm docs:dev

# 使用 yarn
yarn docs:dev
```

现在访问 `http://localhost:5173` 即可查看你的文档站点！

## 下一步

- [了解目录结构](./structure)
- [配置首页布局](./home)
- [了解多语言配置](./i18n)
