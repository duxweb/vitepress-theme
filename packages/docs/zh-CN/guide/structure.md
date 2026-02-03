# 目录结构

了解 Dux VitePress 主题的项目目录结构。

## 基本结构

一个典型的 Dux VitePress 项目结构如下：

```
my-docs/
├── .vitepress/
│   ├── config.mts          # VitePress 配置文件
│   ├── theme/              # 主题相关配置
│   │   └── index.ts        # 主题入口文件
│   └── cache/              # 缓存目录（自动生成）
├── public/                  # 静态资源目录
│   ├── logo.svg            # 站点 Logo
│   └── images/             # 图片资源
├── guide/                   # 指南文档
│   ├── index.md            # 指南首页
│   └── ...                 # 其他指南页面
├── reference/               # 参考文档
│   ├── index.md            # 参考首页
│   └── ...                 # 其他参考页面
├── index.md                 # 站点首页
├── about.md                # 关于页面
├── sponsor.md              # 赞助页面
├── changelog.md            # 更新日志
└── package.json            # 项目配置文件
```

## 配置文件

### `.vitepress/config.mts`

VitePress 的主配置文件，用于配置站点信息、主题配置、插件等。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  // 站点配置
  title: '站点标题',
  description: '站点描述',
  lang: 'zh-CN',
  
  // 主题配置
  themeConfig: {
    // 导航栏、侧边栏、社交链接等
  }
})
```

### `.vitepress/theme/index.ts`

主题入口文件，用于注册 Dux 主题：

```typescript
import DuxTheme from '@duxweb/vitepress-theme'
import '@duxweb/vitepress-theme/dist/index.css'

export default DuxTheme
```

## 内容目录

### 文档目录

建议按功能模块组织文档：

- `guide/` - 使用指南
- `reference/` - API 参考
- `components/` - 组件文档
- `examples/` - 使用示例

### 多语言目录

如果需要支持多语言，建议使用以下结构：

```
docs/
├── zh-CN/              # 中文文档
│   ├── guide/
│   └── reference/
├── en-US/              # 英文文档
│   ├── guide/
│   └── reference/
└── index.md            # 语言跳转页
```

## 静态资源

### public 目录

所有放在 `public` 目录下的文件都会被直接复制到输出目录的根目录。

```
public/
├── logo.svg            # /logo.svg
├── favicon.ico         # /favicon.ico
└── images/
    └── hero.png        # /images/hero.png
```

### 在 Markdown 中引用

```markdown
<!-- 引用 public 目录下的资源 -->
![Logo](/logo.svg)
![Hero](/images/hero.png)

<!-- 引用相对路径资源 -->
![示例](./images/example.png)
```

## 特殊页面

### 首页 (index.md)

使用 `layout: home` 创建首页：

```markdown
---
layout: home
hero:
  name: 站点名称
  text: 主标题
  tagline: 副标题
---
```

### 单页布局

使用 `layout: page` 创建单页面：

```markdown
---
layout: page
title: 关于我们
---
```

### 赞助页面

使用 `layout: sponsor` 创建赞助页面：

```markdown
---
layout: sponsor
title: 支持我们
---
```

### 更新日志

使用 `layout: changelog` 创建更新日志：

```markdown
---
layout: changelog
title: 更新日志
---
```

## 构建输出

运行构建命令后，生成的文件结构：

```
.vitepress/dist/
├── index.html          # 首页
├── guide/              # 指南页面
├── reference/          # 参考页面
├── assets/             # 静态资源
│   ├── chunks/         # JS 代码块
│   └── styles/         # CSS 文件
└── ...                 # 其他生成的文件
```

## 最佳实践

1. **组织结构清晰** - 按功能模块组织文档目录
2. **命名规范** - 使用小写字母和连字符命名文件
3. **资源管理** - 图片等静态资源放在 public 目录
4. **配置分离** - 将复杂配置拆分到单独的文件
5. **版本控制** - 忽略 `.vitepress/cache` 和 `.vitepress/dist` 目录
