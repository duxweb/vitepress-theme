# 单页布局使用教程

单页布局（Single Page Layout）是 Dux VitePress Theme 专为着陆页、产品介绍页、关于页面等独立内容设计的布局。它提供了干净简洁的页面结构，支持自定义头部区域和灵活的内容配置。

## 页面介绍

单页布局具有以下特点：
- **页面头部（PageHero）**：支持自定义标题、描述、图标和颜色
- **内容居中**：内容区域居中显示，提供良好的阅读体验
- **响应式设计**：适配各种设备尺寸
- **灵活配置**：支持自定义最大宽度、头部样式等
- **无侧边栏**：专注内容展示，去除干扰元素

## 基本配置示例

### 1. 最简单的单页配置

```markdown
---
layout: page
title: 关于我们
description: 了解我们的团队和使命
---

# 我们的故事

这里是页面的主要内容...
```

### 2. 带自定义头部的配置

```markdown
---
layout: page
title: 产品介绍
description: 革命性的解决方案，让工作更轻松
heroIcon: tabler--rocket
heroColor: primary
heroSize: lg
---

# 产品特性

我们的产品具有以下特性...
```

## 详细的配置选项说明

### Frontmatter 配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `layout` | `string` | `'page'` | 指定使用单页布局 |
| `title` | `string` | - | 页面标题，显示在页面头部 |
| `description` | `string` | - | 页面描述，显示在标题下方 |
| `heroIcon` | `string` | - | 头部图标名称 |
| `heroColor` | `string` | `'info'` | 头部主题色 |
| `heroSize` | `string` | `'md'` | 头部尺寸大小 |
| `maxWidth` | `string` | `'max-w-6xl'` | 内容区域最大宽度 |

### 头部颜色（heroColor）选项

支持以下颜色主题：

| 颜色值 | 说明 | 视觉效果 |
|--------|------|----------|
| `primary` | 主色调 | 蓝色系渐变背景 |
| `info` | 信息色 | 浅蓝色系背景 |
| `success` | 成功色 | 绿色系背景 |
| `warning` | 警告色 | 橙色系背景 |
| `error` | 错误色 | 红色系背景 |
| `sponsor` | 赞助色 | 粉红色系背景 |

### 头部尺寸（heroSize）选项

| 尺寸值 | 说明 | 高度 |
|--------|------|------|
| `sm` | 小尺寸 | 较小的头部区域 |
| `md` | 中等尺寸 | 默认高度 |
| `lg` | 大尺寸 | 更突出的头部区域 |

### 图标（heroIcon）配置

支持多种图标格式：

#### 1. Iconify 图标类名
```markdown
---
heroIcon: tabler--rocket
---
```

#### 2. Emoji 表情符号
```markdown
---
heroIcon: 🚀
---
```

#### 3. 图片 URL
```markdown
---
heroIcon: /images/feature-icon.png
---
```

#### 4. SVG 图标
```markdown
---
heroIcon: <svg>...</svg>
---
```

### 最大宽度（maxWidth）配置

支持 Tailwind CSS 的宽度类名：

| 类名 | 说明 | 宽度 |
|------|------|------|
| `max-w-4xl` | 中等宽度 | 896px |
| `max-w-5xl` | 较大宽度 | 1024px |
| `max-w-6xl` | 大宽度（默认） | 1152px |
| `max-w-7xl` | 超大宽度 | 1280px |
| `max-w-full` | 全宽度 | 100% |


通过合理使用单页布局，您可以创建简洁美观的独立页面。