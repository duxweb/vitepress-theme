# 文档布局使用教程

文档布局（Doc Layout）是 Dux VitePress Theme 的核心布局之一，专为技术文档、说明文档、API 文档等内容设计。它提供了完整的导航体系，包括侧边栏、右侧目录、文档页脚等功能。

## 页面介绍

文档布局具有以下特点：
- **智能侧边栏**：自动检测侧边栏配置，支持多级导航
- **右侧目录导航**：自动生成页面标题大纲，方便跳转
- **响应式设计**：在桌面端显示完整布局，移动端优化显示
- **文档页脚**：支持编辑链接、上一页/下一页导航
- **内容排版**：使用 Prose 样式，提供优秀的阅读体验

## 基本配置示例

### 1. 页面 Frontmatter 配置

```markdown
---
layout: doc
title: 文档标题
description: 文档描述信息
---

# 文档内容

这里是文档的正文内容...
```

### 2. VitePress 配置文件设置

```typescript
// .vitepress/config.ts
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  themeConfig: {
    // 侧边栏配置
    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quick-start' }
          ]
        }
      ]
    },
    
    // 编辑链接配置
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: '编辑此页'
    },
    
    // 最后更新时间
    lastUpdatedText: '最后更新于'
  }
})
```

## 详细的配置选项说明

### Frontmatter 配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `layout` | `string` | `'doc'` | 指定使用文档布局 |
| `title` | `string` | - | 页面标题，显示在页面顶部和浏览器标签 |
| `description` | `string` | - | 页面描述，显示在标题下方 |
| `sidebar` | `boolean` | `true` | 是否显示侧边栏 |
| `aside` | `boolean` | `true` | 是否显示右侧目录 |
| `outline` | `number \| [number, number] \| 'deep'` | `[2, 3]` | 目录显示的标题级别 |
| `editLink` | `boolean` | `true` | 是否显示编辑链接 |
| `lastUpdated` | `boolean` | `true` | 是否显示最后更新时间 |
| `prev` | `string \| { text: string, link: string }` | - | 自定义上一页链接 |
| `next` | `string \| { text: string, link: string }` | - | 自定义下一页链接 |

### 侧边栏配置详解

#### 单一侧边栏配置

```typescript
// 简单的数组配置
sidebar: [
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide/' },
  {
    text: '深入',
    items: [
      { text: '组件', link: '/advanced/components' },
      { text: '插件', link: '/advanced/plugins' }
    ]
  }
]
```

#### 多路径侧边栏配置

```typescript
// 不同路径使用不同的侧边栏
sidebar: {
  '/guide/': [
    {
      text: '基础指南',
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '安装', link: '/guide/installation' }
      ]
    }
  ],
  '/api/': [
    {
      text: 'API 参考',
      items: [
        { text: '概述', link: '/api/' },
        { text: '配置', link: '/api/config' }
      ]
    }
  ]
}
```

#### 折叠侧边栏分组

```typescript
sidebar: [
  {
    text: '基础功能',
    collapsed: true, // 默认折叠
    items: [
      { text: '安装', link: '/basic/installation' },
      { text: '配置', link: '/basic/configuration' }
    ]
  }
]
```

### 右侧目录配置

```markdown
---
# 只显示 h2 和 h3 标题
outline: [2, 3]

# 显示所有标题（深层目录）
outline: deep

# 显示 h2 到 h4 标题
outline: [2, 4]

# 禁用右侧目录
aside: false
---
```

### 编辑链接配置

```typescript
// .vitepress/config.ts
themeConfig: {
  // 编辑链接
  editLink: {
    pattern: 'https://github.com/username/repo/edit/main/docs/:path',
    text: '在 GitHub 上编辑此页'
  },
  
  // 最后更新时间
  lastUpdatedText: '最后更新于'
}
```

注意：上一页/下一页导航是根据侧边栏配置自动生成的，无需手动配置。



通过合理配置这些选项，您可以创建出功能完善的文档页面。
