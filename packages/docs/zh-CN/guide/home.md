# 首页布局

学习如何使用 Dux 主题创建一个吸引人的首页。

## 基本配置

首页使用 `layout: home` 布局，通过 frontmatter 配置各个部分。

```markdown
---
layout: home

hero:
  name: 站点名称
  text: 主要标题
  tagline: 副标题说明
  actions:
    - theme: brand
      text: 主要按钮
      link: /guide/
    - theme: alt
      text: 次要按钮
      link: /reference/

features:
  - icon: 🚀
    title: 特性标题
    details: 特性描述内容
---
```

## Hero 区域配置

Hero 是首页最醒目的区域，用于展示站点的核心信息。

### 基本属性

```yaml
hero:
  name: VitePress    # 品牌名称（可选）
  text: 下一代的     # 主标题
  tagline: 静态站点生成器  # 副标题
  subtitle: 新功能发布  # 顶部徽章文字（可选）
```

### 操作按钮

```yaml
hero:
  actions:
    - theme: brand    # 主要按钮样式
      text: 快速开始
      link: /guide/quick-start
      target: _self   # 链接打开方式（可选）
    
    - theme: alt      # 次要按钮样式
      text: 在 GitHub 查看
      link: https://github.com
      target: _blank  # 新窗口打开
```

### Hero 图片

```yaml
hero:
  image: false        # 不显示图片，显示占位符
  # 或
  image:
    src: /hero.png    # 图片路径
    alt: Hero Image   # 替代文本
  
  mockUrl: myapp.dev  # 模拟浏览器地址栏 URL
```

## Features 特性区域

展示产品或项目的核心特性。

### 基本配置

```yaml
features:
  - icon: ⚡        # 使用 emoji
    title: 极速
    details: 基于 Vite，启动快如闪电
    color: blue    # 图标背景色
    
  - icon: icon-[heroicons--rocket-launch]  # 使用图标类
    title: 现代化
    details: 使用最新的 Web 技术栈
    color: green
    
  - icon: /icons/feature.svg  # 使用图片
    title: 灵活
    details: 高度可定制的主题系统
    color: purple
```

### 添加链接

为特性卡片添加链接，使其可点击：

```yaml
features:
  - icon: 📚
    title: 完整文档
    details: 详细的使用指南和 API 文档
    link: /guide/
    target: _self  # 可选，默认当前窗口
```

### 特性配置

可以为 Features 区域添加整体配置：

```yaml
featuresConfig:
  badge: 核心特性
  title: 为什么选择我们
  subtitle: 强大功能
  description: 我们提供最好的解决方案
  
  extraSection:
    title: 还有更多
    description: 探索更多强大功能
    tags:
      - 高性能
      - 易使用
      - 可扩展
```

## QuickStart 快速开始

展示快速上手的步骤。

```yaml
quickStart:
  badge: 快速上手
  title: 三步开始使用
  subtitle: 只需几分钟
  description: 按照以下步骤快速开始你的项目
  
  steps:
    - step: "01"
      title: 安装依赖
      description: 使用你喜欢的包管理器安装
      code: npm install @duxweb/vitepress-theme
      icon: icon-[heroicons--arrow-down-tray]
      color: blue
      
    - step: "02"
      title: 配置主题
      description: 在配置文件中引入主题
      code: import DuxTheme from '@duxweb/vitepress-theme'
      icon: icon-[heroicons--cog-8-tooth]
      color: green
      
    - step: "03"
      title: 开始开发
      description: 启动开发服务器
      code: npm run docs:dev
      icon: icon-[heroicons--rocket-launch]
      color: purple
  
  helpText: 需要帮助？
  helpLink: /guide/
  helpLinkText: 查看完整文档
```

## 自定义内容

除了配置的内容外，还可以在 Markdown 中添加自定义内容：

```markdown
---
layout: home
# ... hero 和 features 配置
---

## 额外的内容区域

这里可以添加任何 Markdown 内容，会显示在特性区域下方。

### 为什么选择我们

- ✅ 理由一
- ✅ 理由二
- ✅ 理由三

### 用户评价

> "这是我用过最好的文档主题！" - 用户 A

> "简洁优雅，功能强大。" - 用户 B
```

## 完整示例

```markdown
---
layout: home

hero:
  name: Dux Theme
  text: 现代化 VitePress 主题
  tagline: 打造优雅的技术文档站点
  subtitle: v1.0 正式发布
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: GitHub
      link: https://github.com/duxweb/vitepress-theme
      target: _blank
  image: false
  mockUrl: dux-theme.dev

features:
  - icon: ⚡
    title: 极速体验
    details: 基于 Vite，享受快如闪电的开发体验
    color: blue
    link: /guide/performance
    
  - icon: 🎨
    title: 精美设计
    details: 现代化的界面设计，支持深色模式
    color: purple
    link: /guide/design
    
  - icon: 🌍
    title: 国际化
    details: 内置多语言支持，轻松构建国际化文档
    color: green
    link: /guide/i18n

featuresConfig:
  badge: 核心特性
  title: 为现代文档而生
  description: 提供最佳的文档编写和阅读体验

quickStart:
  title: 快速开始
  steps:
    - step: "1"
      title: 安装
      code: pnpm add @duxweb/vitepress-theme
      icon: icon-[heroicons--arrow-down-tray]
      color: blue
    - step: "2"
      title: 配置
      code: import DuxTheme from '@duxweb/vitepress-theme'
      icon: icon-[heroicons--cog-8-tooth]
      color: green
---

## 🎯 专为开发者设计

提供最佳的文档编写体验，让你专注于内容创作。

## 🤝 加入社区

欢迎加入我们的社区，一起打造更好的文档体验！
```

## 注意事项

1. **图标选择** - 可以使用 emoji、图标类或图片
2. **颜色搭配** - 合理使用颜色突出重点
3. **内容精简** - 首页内容要简洁有力
4. **行动引导** - 明确的 CTA 按钮引导用户
5. **响应式设计** - 主题会自动适配移动端
