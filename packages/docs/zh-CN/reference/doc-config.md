# 文档配置

文档页面 Markdown 文件的 frontmatter 配置选项。

## 常用配置

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `title` | `string` | 自动提取 | 页面标题 |
| `description` | `string` | - | 页面描述 |
| `sidebar` | `boolean` | `true` | 是否显示侧边栏 |
| `outline` | `boolean \| number \| [number, number] \| 'deep'` | `2` | 大纲显示级别 |
| `prev` | `boolean \| string \| NavLink` | `true` | 上一页链接 |
| `next` | `boolean \| string \| NavLink` | `true` | 下一页链接 |

## 示例

```yaml
---
title: "快速开始指南"
description: "了解如何快速安装和配置 Dux VitePress 主题"

# 导航配置
sidebar: true
outline: [2, 3]

# 页面链接
prev:
  text: "介绍"
  link: "/guide/"
next:
  text: "配置主题"
  link: "/guide/theme-config"
---

# 快速开始

文档内容...
```