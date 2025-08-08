# 单页配置 API

单页布局适用于展示独立的页面内容，如关于页面、帮助页面等。与文档布局不同，单页布局通常不显示侧边栏，内容居中显示，并且包含一个醒目的页面标题区域。

## 页面基础配置

### layout

- 类型: `string`
- 值: `'page'`
- 必需: 是

设置页面布局为单页布局。

```yaml
layout: page
```

### title

- 类型: `string`
- 默认值: `undefined`

页面标题，显示在页面标题区域和浏览器标签页中。

```yaml
title: "关于我们"
```

### description

- 类型: `string`
- 默认值: `undefined`

页面描述，显示在标题下方，也用于 SEO meta 描述。

```yaml
description: "了解我们的团队、使命和愿景"
```

### head

- 类型: `HeadConfig[]`
- 默认值: `[]`

为当前页面添加的额外 head 标签。

```yaml
head:
  - - meta
    - name: keywords
      content: "about,team,company"
```

## 页面标题区域配置

### heroIcon

- 类型: `string`
- 默认值: `''`

页面标题区域的图标。支持 CSS 类名格式，通常使用 iconify 图标。

```yaml
heroIcon: "icon-[tabler--info-circle]"
# 或
heroIcon: "icon-[heroicons--heart]"
```

### heroColor

- 类型: `'primary' | 'sponsor' | 'success' | 'warning' | 'danger' | 'info' | 'gray'`
- 默认值: `'info'`

页面标题区域的颜色主题。

```yaml
heroColor: "primary"    # 主色调
# 或  
heroColor: "sponsor"    # 赞助色调（粉红色系）
# 或
heroColor: "success"    # 成功色调（绿色系）
# 或
heroColor: "warning"    # 警告色调（黄色系）
# 或
heroColor: "danger"     # 危险色调（红色系）
# 或
heroColor: "info"       # 信息色调（蓝色系，默认）
# 或
heroColor: "gray"       # 灰色调
```

### heroSize

- 类型: `'sm' | 'md' | 'lg'`
- 默认值: `'md'`

页面标题区域的大小。

```yaml
heroSize: "sm"    # 小尺寸
# 或
heroSize: "md"    # 中等尺寸（默认）
# 或
heroSize: "lg"    # 大尺寸
```

## 内容区域配置

### maxWidth

- 类型: `string`
- 默认值: `'max-w-6xl'`

内容区域的最大宽度，使用 Tailwind CSS 的宽度类。

```yaml
maxWidth: "max-w-4xl"   # 更窄的内容宽度
# 或
maxWidth: "max-w-5xl"   # 中等内容宽度
# 或  
maxWidth: "max-w-6xl"   # 较宽的内容宽度（默认）
# 或
maxWidth: "max-w-7xl"   # 最宽的内容宽度
# 或
maxWidth: "max-w-full"  # 全宽显示
```

## 其他标准配置

单页布局同样支持标准的 VitePress frontmatter 配置：

### titleTemplate

- 类型: `string | boolean`
- 默认值: 继承站点配置

自定义页面标题模板。

```yaml
titleTemplate: ":title | 我的网站"
```

### sidebar

- 类型: `boolean`
- 默认值: `false`（单页布局通常不显示侧边栏）

是否显示侧边栏。在单页布局中通常设置为 `false`。

```yaml
sidebar: false
```

### aside

- 类型: `boolean | 'left'`
- 默认值: `true`

是否显示页面大纲。

```yaml
aside: false  # 隐藏大纲
```

### footer

- 类型: `boolean`
- 默认值: `true`

是否显示页脚。

```yaml
footer: true
```

## 完整配置示例

### 关于页面示例

```yaml
---
layout: page
title: "关于 Dux VitePress Theme"
description: "了解 Dux VitePress Theme 的开发理念、特性和团队信息"

# 页面标题区域配置
heroIcon: "icon-[tabler--info-circle]"
heroColor: "primary"
heroSize: "lg"

# 内容区域配置
maxWidth: "max-w-4xl"

# 其他配置
titleTemplate: ":title | Dux Theme"
sidebar: false
aside: false
footer: true

# SEO 配置
head:
  - - meta
    - name: keywords
      content: "about,dux,vitepress,theme,documentation"
  - - meta
    - property: "og:title"
      content: "关于 Dux VitePress Theme"
  - - meta
    - property: "og:description"
      content: "了解 Dux VitePress Theme 的开发理念和特性"
---

# 关于 Dux VitePress Theme

Dux VitePress Theme 是一款现代、优雅的 VitePress 文档主题，专为提供出色的阅读体验而设计。

## 设计理念

我们相信优秀的文档不仅需要清晰的内容，更需要美观的展示和流畅的交互体验。Dux Theme 基于以下设计理念：

- **简洁优雅**：清晰的视觉层次，减少视觉干扰
- **响应式设计**：完美适配各种设备和屏幕尺寸  
- **易于使用**：简化配置，开箱即用
- **高度可定制**：提供丰富的配置选项和自定义能力

## 主要特性

- 🎨 **现代设计**：基于最新的设计趋势
- 📱 **响应式**：完美适配移动端
- 🌙 **暗色模式**：内置暗色主题支持
- 🔍 **搜索功能**：集成本地搜索
- 🌐 **多语言**：完整的国际化支持
- ⚡ **高性能**：优化的加载速度

## 开源协议

本项目基于 MIT 协议开源，欢迎大家使用和贡献。
```

### 帮助页面示例

```yaml  
---
layout: page
title: "获取帮助"
description: "遇到问题？这里有完整的帮助指南和支持资源"

# 页面标题区域配置  
heroIcon: "icon-[tabler--help]"
heroColor: "info"
heroSize: "md"

# 内容区域配置
maxWidth: "max-w-5xl"

# 其他配置
sidebar: false
aside: true
footer: true
---

# 获取帮助

如果在使用 Dux VitePress Theme 过程中遇到任何问题，可以通过以下方式获取帮助：

## 常见问题

### 安装问题

**Q: 安装主题时出现依赖冲突怎么办？**

A: 请确保你的 Node.js 版本 >= 16，并使用最新版本的包管理器。

### 配置问题

**Q: 如何自定义主题颜色？**

A: 可以通过 CSS 变量或创建自定义样式文件来覆盖默认样式。

## 获取支持

- 📖 [查看文档](/guide/)
- 🐛 [报告问题](https://github.com/duxweb/vitepress-theme/issues)
- 💬 [讨论区](https://github.com/duxweb/vitepress-theme/discussions)
- 📧 [发送邮件](mailto:support@example.com)
```

## 颜色主题效果

不同的 `heroColor` 值会产生不同的视觉效果：

| 颜色值 | 主色调 | 适用场景 |
| --- | --- | --- |
| `primary` | 蓝色系 | 通用页面、功能介绍 |
| `sponsor` | 粉红色系 | 赞助页面、捐赠相关 |
| `success` | 绿色系 | 成功页面、完成状态 |
| `warning` | 黄色系 | 警告页面、注意事项 |
| `danger` | 红色系 | 错误页面、紧急通知 |
| `info` | 蓝色系 | 信息页面、帮助文档 |
| `gray` | 灰色系 | 中性页面、简洁风格 |

## 尺寸选择建议

| 尺寸值 | 效果 | 适用场景 |
| --- | --- | --- |
| `sm` | 紧凑显示 | 简短内容、次要页面 |
| `md` | 标准显示 | 大多数情况的默认选择 |
| `lg` | 突出显示 | 重要页面、首要内容 |

## 图标使用建议

推荐使用 Tabler Icons 或 Heroicons 图标库：

```yaml
# Tabler Icons
heroIcon: "icon-[tabler--info-circle]"
heroIcon: "icon-[tabler--heart]"
heroIcon: "icon-[tabler--help]"
heroIcon: "icon-[tabler--user]"

# Heroicons  
heroIcon: "icon-[heroicons--information-circle]"
heroIcon: "icon-[heroicons--heart]"
heroIcon: "icon-[heroicons--question-mark-circle]"
heroIcon: "icon-[heroicons--user]"
```