# 语言跳转页面使用教程

语言跳转页面（Jump Page）是 Dux VitePress Theme 为多语言网站设计的智能语言选择页面。当用户访问网站根路径时，系统会根据用户的语言偏好自动跳转到相应的语言版本，同时提供手动选择选项。

## 页面介绍

语言跳转页面具有以下特点：
- **智能检测**：自动检测用户的浏览器语言偏好
- **倒计时跳转**：可配置的自动跳转倒计时
- **手动选择**：提供所有可用语言的手动选择按钮
- **记忆功能**：记住用户的语言选择偏好
- **优雅界面**：现代化的渐变背景和动画效果
- **多种检测方式**：支持 URL 参数、本地存储、浏览器语言检测

## 基本配置示例

### 1. 最简单的跳转页配置

```markdown
---
layout: jump
title: 选择语言 / Choose Language
description: 请选择您的语言偏好 / Please choose your language preference
---

欢迎访问我们的网站！系统正在根据您的语言偏好自动跳转...
```

### 2. 自定义跳转配置

```markdown
---
layout: jump
title: Language Selection
description: We're redirecting you to your preferred language
jump:
  delay: 3000
  showManual: true
---

# 多语言支持

我们的网站支持多种语言，请选择您偏好的语言版本。
```

## 详细的配置选项说明

### Frontmatter 配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `layout` | `string` | `'jump'` | 指定使用语言跳转布局 |
| `title` | `string` | - | 页面标题 |
| `description` | `string` | - | 页面描述 |
| `jump` | `object` | - | 跳转相关配置 |

### 跳转配置详解

#### jump 对象配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `delay` | `number` | `1000` | 跳转延迟时间（毫秒） |
| `showManual` | `boolean` | `true` | 是否显示手动选择选项 |

### VitePress 多语言配置

语言跳转页面需要配合 VitePress 的多语言配置使用：

```typescript
// .vitepress/config.ts
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'DuxCMS 文档',
      description: '现代化的内容管理系统'
    },
    'en-US': {
      label: 'English',
      lang: 'en-US', 
      title: 'DuxCMS Docs',
      description: 'Modern Content Management System'
    },
    'ja-JP': {
      label: '日本語',
      lang: 'ja-JP',
      title: 'DuxCMS ドキュメント',
      description: 'モダンなコンテンツ管理システム'
    }
  }
})
```

### 多语言文本配置

可以在主题配置中自定义界面文本：

```typescript
// .vitepress/config.ts
themeConfig: {
  langs: {
    jump: {
      redirecting: '正在跳转到您偏好的语言版本...',
      redirectingSecondary: 'Redirecting to your preferred language...',
      orChooseLanguage: '或选择语言',
      orChooseLanguageSecondary: 'Or choose language',
      countdown: '秒'
    }
  }
}
```

## 完整的使用示例

### 示例 1：双语网站跳转页

```markdown
---
layout: jump
title: 语言选择 / Language Selection  
description: 欢迎访问我们的网站，请选择您的语言偏好 / Welcome to our website, please choose your language preference
jump:
  delay: 2000
  showManual: true
---

# 欢迎 / Welcome

我们的网站支持中文和英文两种语言。系统将根据您的浏览器设置自动跳转到合适的语言版本。

Our website supports both Chinese and English. The system will automatically redirect you to the appropriate language version based on your browser settings.
```

对应的 VitePress 配置：

```typescript
// .vitepress/config.ts
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '我的网站',
      description: '这是一个双语网站',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '关于', link: '/zh-CN/about' }
        ]
      }
    },
    'en-US': {
      label: 'English', 
      lang: 'en-US',
      title: 'My Website',
      description: 'This is a bilingual website',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en-US/' },
          { text: 'About', link: '/en-US/about' }
        ]
      }
    }
  },
  
  themeConfig: {
    langs: {
      jump: {
        redirecting: '正在跳转到您偏好的语言版本...',
        redirectingSecondary: 'Redirecting to your preferred language...',
        orChooseLanguage: '或选择语言',
        orChooseLanguageSecondary: 'Or choose language',
        countdown: '秒'
      }
    }
  }
})
```

### 示例 2：多语言文档站点

```markdown
---
layout: jump
title: DuxCMS 文档 - 语言选择
description: 选择您偏好的语言来浏览 DuxCMS 文档
jump:
  delay: 3000
  showManual: true
---

# DuxCMS 多语言文档

DuxCMS 是一个现代化的内容管理系统，我们提供多语言文档支持。

## 支持的语言

- **简体中文** - 完整的中文文档
- **English** - Complete English documentation  
- **日本語** - 完全な日本語ドキュメント
- **한국어** - 완전한 한국어 문서

系统将自动检测您的语言偏好并跳转到相应版本。
```

对应的配置：

```typescript
// .vitepress/config.ts
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'DuxCMS 文档',
      description: '现代化的内容管理系统文档'
    },
    'en-US': {
      label: 'English',
      lang: 'en-US', 
      title: 'DuxCMS Documentation',
      description: 'Modern Content Management System Documentation'
    },
    'ja-JP': {
      label: '日本語',
      lang: 'ja-JP',
      title: 'DuxCMS ドキュメント', 
      description: 'モダンなコンテンツ管理システムのドキュメント'
    },
    'ko-KR': {
      label: '한국어',
      lang: 'ko-KR',
      title: 'DuxCMS 문서',
      description: '현대적인 콘텐츠 관리 시스템 문서'
    }
  }
})
```

### 示例 3：即时跳转配置

```markdown
---
layout: jump
title: Redirecting...
description: Automatically redirecting to your preferred language
jump:
  delay: 0
  showManual: false
---

<!-- 立即跳转，不显示手动选择选项 -->
```

### 示例 4：长延迟跳转配置

```markdown
---
layout: jump
title: 语言选择中心
description: 我们支持多种语言，请选择您的偏好
jump:
  delay: 10000
  showManual: true
---

# 国际化支持

感谢您访问我们的网站！我们致力于为全球用户提供本地化体验。

## 我们的承诺

- 🌍 **多语言支持** - 支持 20+ 种语言
- 🎨 **本地化界面** - 适应不同文化的设计风格
- 📚 **本土化内容** - 针对不同地区的专门内容
- 🕒 **本地时区** - 显示您当地的时间和日期

系统将在 10 秒后自动跳转，或者您可以手动选择语言。
```

## 工作原理详解

### 1. 语言检测优先级

语言跳转页面按以下优先级检测用户语言偏好：

1. **URL 参数** - `?lang=zh-CN`
2. **本地存储** - `localStorage.getItem('vitepress-preferred-lang')`
3. **浏览器语言** - `navigator.language` 或 `navigator.languages[0]`
4. **默认语言** - 配置中的第一个语言（root）

### 2. 语言匹配逻辑

```javascript
// 完全匹配：zh-CN
const exactMatch = availableLocales.find(locale => 
  locale.key === browserLang
)

// 前缀匹配：zh
const prefixMatch = availableLocales.find(locale => 
  locale.key.startsWith(langPrefix)
)
```

### 3. 跳转路径生成

- `root` 语言 → `/`
- 其他语言 → `/{lang}/`

### 4. 用户偏好记忆

用户手动选择语言后，选择会保存到 `localStorage`：

```javascript
localStorage.setItem('vitepress-preferred-lang', selectedLang)
```


通过合理配置语言跳转页面，您可以为多语言网站提供智能的语言选择体验。