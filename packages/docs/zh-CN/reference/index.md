# 配置参考概述

Dux VitePress 主题提供了丰富的配置选项，让你能够打造独特的文档站点。

## 配置文件结构

主题配置主要分为两个层面：

### VitePress 配置 (`.vitepress/config.mts`)

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  // 站点基础配置
  title: '站点标题',
  description: '站点描述',
  
  // 主题配置
  themeConfig: {
    // Dux 主题相关配置
  }
})
```

### 页面级配置 (Markdown Frontmatter)

```markdown
---
layout: home
title: 页面标题

# 页面特定配置
hero:
  name: 首页标题
---
```

## 配置分类

### 基础配置

这些配置影响整个站点的基础设置：

| 配置类别 | 描述 | 文档链接 |
|---------|------|---------|
| [站点配置](./site-config) | VitePress 基础站点配置 | 标题、描述、语言等 |
| [主题配置](./theme-config) | Dux 主题全局配置 | 导航、搜索、社交链接等 |

### 页面配置

不同页面布局的专门配置：

| 页面类型 | 布局名称 | 文档链接 | 说明 |
|---------|---------|---------|------|
| [首页配置](./home-config) | `layout: home` | Hero、Features、QuickStart |
| [文档配置](./doc-config) | `layout: doc` | 文档页面特定配置 |
| [单页配置](./page-config) | `layout: page` | 单页面布局配置 |
| [赞助页配置](./sponsor-config) | `layout: sponsor` | 支付方式、支持者列表 |
| [更新日志配置](./changelog-config) | `layout: changelog` | 版本更新记录 |

### 组件配置

页面组件的详细配置：

| 组件类别 | 文档链接 | 说明 |
|---------|---------|------|
| [导航栏配置](./nav-config) | 顶部导航菜单配置 |
| [侧边栏配置](./sidebar-config) | 左侧文档导航配置 |
| [页脚配置](./footer-config) | 底部页脚和文档页脚配置 |

## 配置优先级

配置的生效优先级从高到低：

1. **页面 Frontmatter** - 页面级别的配置
2. **语言配置** - 特定语言的主题配置
3. **全局主题配置** - `themeConfig` 中的配置
4. **默认配置** - 主题内置默认值

## 快速查找

### 按功能查找

- **外观定制** → [主题配置](./theme-config)、[自定义样式](../guide/custom-style)
- **导航设置** → [导航栏配置](./nav-config)、[侧边栏配置](./sidebar-config)
- **首页设计** → [首页配置](./home-config)
- **多语言** → [站点配置](./site-config)、[国际化指南](../guide/i18n)
- **搜索功能** → [搜索功能](../guide/search)

### 按配置类型查找

- **字符串配置** → 标题、描述、链接等
- **对象配置** → Hero、Features、导航菜单等
- **数组配置** → 菜单项、特性列表、支持者列表等
- **布尔配置** → 开关类设置

