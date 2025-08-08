# 首页配置 API

首页配置通过在首页 Markdown 文件的 frontmatter 中配置各个区块的选项。首页布局包含 Hero（英雄区）、Features（特性区）和 QuickStart（快速开始区）三个主要区域。

## 页面基础配置

### layout

- 类型: `string`
- 值: `'home'`
- 必需: 是

设置页面布局为首页布局。

```yaml
layout: home
```

### title

- 类型: `string`
- 默认值: `undefined`

页面标题，用于 SEO 和浏览器标签页显示。

### description

- 类型: `string` 
- 默认值: `undefined`

页面描述，用于 SEO meta 描述。

## Hero 区域配置

### hero

Hero 区域是首页顶部的主要展示区域。

```yaml
hero:
  name: "Dux VitePress"
  text: "现代优雅的 VitePress 文档主题"
  tagline: "简洁、美观、功能丰富的文档解决方案"
  subtitle: "🚀 新一代文档主题"
  mockUrl: "docs.example.com"
  image:
    src: "/hero-image.png"
    alt: "Dux VitePress Theme"
  actions:
    - text: "快速开始"
      link: "/guide/quick-start"
      theme: "brand"
    - text: "查看示例"
      link: "/examples"
      theme: "alt"
```

#### Hero 配置选项

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `name` | `string` | `undefined` | 主标题，通常是产品或项目名称 |
| `text` | `string` | `undefined` | 副标题，产品描述 |
| `tagline` | `string` | `undefined` | 标语，更详细的描述信息 |
| `subtitle` | `string` | `undefined` | 顶部徽章文字 |
| `mockUrl` | `string` | `'vitepress.dev'` | 模拟浏览器地址栏显示的 URL |
| `image` | `HeroImage` | `undefined` | 英雄区展示图片 |
| `actions` | `HeroAction[]` | `[]` | 操作按钮数组 |

#### HeroImage

图片配置对象：

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `src` | `string` | - | 图片路径 |
| `alt` | `string` | `''` | 图片替代文字 |

**特殊值**：如果设置 `image: false`，将显示内置的页面模拟效果。

#### HeroAction

操作按钮配置：

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `text` | `string` | - | 按钮文字 |
| `link` | `string` | - | 按钮链接 |
| `theme` | `'brand' \| 'alt'` | `'alt'` | 按钮主题样式 |
| `target` | `string` | `'_self'` | 链接打开方式 |

## Features 区域配置

### features

特性展示区域，以卡片网格形式展示产品特性。

```yaml
features:
  - title: "简洁优雅"
    details: "基于现代设计理念，提供简洁优雅的文档阅读体验"
    icon: "sparkles"
    color: "blue"
    link: "/guide/design"
    target: "_self"
  - title: "功能丰富"
    details: "内置多种布局和组件，满足不同类型文档的需求"
    icon: "🎨"
    color: "green"
  - title: "响应式设计"
    details: "完美适配桌面端和移动端，随时随地访问文档"
    icon: "icon-[heroicons--device-phone-mobile]"
    color: "purple"
```

#### Feature 配置选项

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `title` | `string` | - | 特性标题 |
| `details` | `string` | - | 特性详细描述 |
| `icon` | `string` | `'star'` | 图标，支持 heroicons 名称、emoji 或完整类名 |
| `color` | `FeatureColor` | `'blue'` | 图标背景颜色主题 |
| `link` | `string` | `undefined` | 点击链接（可选） |
| `target` | `string` | `'_self'` | 链接打开方式 |

#### FeatureColor

支持的颜色主题：

- `'blue'` - 蓝色
- `'green'` - 绿色  
- `'purple'` - 紫色
- `'orange'` - 橙色
- `'red'` - 红色
- `'pink'` - 粉色
- `'indigo'` - 靛蓝
- `'teal'` - 青色
- `'cyan'` - 青绿
- `'amber'` - 琥珀色

### featuresConfig

Features 区域的标题配置：

```yaml
featuresConfig:
  badge: "✨ 核心特性"
  title: "为什么选择"
  subtitle: "Dux VitePress"
  description: "现代化的文档主题，提供出色的阅读体验和丰富的功能特性"
  extraSection:
    title: "还有更多特性等你发现"
    description: "持续优化和更新，为你的文档项目提供最佳体验"
    tags:
      - "持续更新"
      - "社区驱动"
      - "开源免费"
```

#### FeaturesConfig 选项

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `badge` | `string` | `undefined` | 顶部徽章文字 |
| `title` | `string` | `undefined` | 主标题 |
| `subtitle` | `string` | `undefined` | 副标题（高亮显示） |
| `description` | `string` | `undefined` | 描述文字 |
| `tags` | `string[]` | `undefined` | 标签数组 |
| `extraSection` | `ExtraSection` | `undefined` | 额外展示区域 |

#### ExtraSection

额外区域配置：

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `title` | `string` | `undefined` | 区域标题 |
| `description` | `string` | `undefined` | 区域描述 |
| `tags` | `string[]` | `undefined` | 标签数组 |

## QuickStart 区域配置

### quickStart

快速开始区域，以步骤形式展示使用指南。

```yaml
quickStart:
  badge: "⚡ 3 分钟上手"
  subtitle: "快速"
  title: "开始使用"
  description: "三个简单步骤，快速搭建你的文档站点"
  helpText: "需要帮助？"
  helpLink: "/guide/help"
  helpLinkText: "查看完整指南"
  steps:
    - step: "01"
      title: "安装主题"
      description: "通过 npm 或 pnpm 安装 Dux VitePress 主题"
      code: "npm install vitepress"
      icon: "download"
      color: "blue"
    - step: "02"
      title: "配置主题"
      description: "在 .vitepress/config.ts 中配置使用 Dux 主题"
      code: "import { defineConfig } from 'vitepress'"
      icon: "cog-6-tooth"
      color: "green"
    - step: "03"
      title: "启动项目"
      description: "启动开发服务器，开始编写你的文档内容"
      code: "npm run docs:dev"
      icon: "rocket-launch"
      color: "purple"
```

#### QuickStart 配置选项

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `badge` | `string` | `undefined` | 顶部徽章文字 |
| `title` | `string` | `undefined` | 主标题 |
| `subtitle` | `string` | `undefined` | 副标题（高亮显示） |
| `description` | `string` | `undefined` | 描述文字 |
| `helpText` | `string` | `undefined` | 帮助提示文字 |
| `helpLink` | `string` | `undefined` | 帮助链接 |
| `helpLinkText` | `string` | `undefined` | 帮助链接文字 |
| `steps` | `QuickStartStep[]` | `[]` | 步骤数组 |

#### QuickStartStep

步骤配置：

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `step` | `string` | - | 步骤编号 |
| `title` | `string` | - | 步骤标题 |
| `description` | `string` | - | 步骤描述 |
| `code` | `string` | - | 代码示例 |
| `icon` | `string` | - | 图标，支持 heroicons 名称、emoji 或完整类名 |
| `color` | `StepColor` | `'blue'` | 图标背景颜色主题 |

#### StepColor

步骤图标颜色主题（与 FeatureColor 相同）：

- `'blue'`, `'green'`, `'purple'`, `'orange'`, `'red'`
- `'pink'`, `'indigo'`, `'teal'`, `'cyan'`, `'amber'`

## 完整配置示例

```yaml
---
layout: home
title: "Dux VitePress Theme - 现代优雅的文档主题"
description: "简洁美观、功能丰富的 VitePress 文档主题，提供出色的阅读体验"

hero:
  name: "Dux VitePress"
  text: "现代优雅的文档主题"
  tagline: "简洁、美观、功能丰富的文档解决方案"
  subtitle: "🚀 新一代主题"
  mockUrl: "docs.example.com"
  image:
    src: "/hero-screenshot.png"
    alt: "Dux VitePress Theme Screenshot"
  actions:
    - text: "快速开始"
      link: "/guide/quick-start"
      theme: "brand"
    - text: "查看示例"
      link: "/examples"
      theme: "alt"
      target: "_blank"

features:
  - title: "简洁优雅"
    details: "基于现代设计理念，提供简洁优雅的文档阅读体验"
    icon: "sparkles"
    color: "blue"
  - title: "功能丰富"
    details: "内置多种布局和组件，满足不同类型文档的需求"
    icon: "🎨"
    color: "green"
  - title: "响应式设计"
    details: "完美适配桌面端和移动端，随时随地访问文档"
    icon: "device-phone-mobile"
    color: "purple"

featuresConfig:
  badge: "✨ 核心特性"
  title: "为什么选择"
  subtitle: "Dux VitePress"
  description: "现代化的文档主题，提供出色的阅读体验和丰富的功能特性"

quickStart:
  badge: "⚡ 3 分钟上手"
  subtitle: "快速"
  title: "开始使用"
  description: "三个简单步骤，快速搭建你的文档站点"
  helpText: "需要帮助？"
  helpLink: "/guide/help"
  helpLinkText: "查看完整指南"
  steps:
    - step: "01"
      title: "安装主题"
      description: "通过 npm 或 pnpm 安装 Dux VitePress 主题"
      code: "npm install vitepress"
      icon: "download"
      color: "blue"
    - step: "02"
      title: "配置主题"
      description: "在 .vitepress/config.ts 中配置使用 Dux 主题"
      code: "import { defineConfig } from 'vitepress'"
      icon: "cog-6-tooth"
      color: "green"
    - step: "03"
      title: "启动项目"
      description: "启动开发服务器，开始编写你的文档内容"
      code: "npm run docs:dev"
      icon: "rocket-launch"
      color: "purple"
---

## 欢迎使用 Dux VitePress Theme

这里可以添加额外的 Markdown 内容，会显示在首页的最底部。

### 更多功能

- 支持 Mermaid 图表
- 内置搜索功能
- 多语言支持
- 自定义样式

```