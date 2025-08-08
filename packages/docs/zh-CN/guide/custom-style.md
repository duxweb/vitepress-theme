# 自定义样式

介绍如何为 Dux 主题编写自定义样式，覆盖默认配色与组件样式。

## 全局样式文件

在 `.vitepress/theme/index.ts` 中引入自定义样式文件：

```ts
import theme from '@duxweb/vitepress-theme'
import '@duxweb/vitepress-theme/dist/index.css'
import './custom.css'

export default {
  extends: theme
}
```

在 `custom.css` 中覆盖 CSS 变量与样式：

```css
:root {
  --vp-c-brand: #3b82f6;
  --vp-c-brand-light: #60a5fa;
  --vp-c-brand-dark: #2563eb;
}

.VPDoc h1 {
  letter-spacing: 0.2px;
}
```

## 仅在首页生效

为首页添加特定样式可借助布局选择器：

```css
.layout-home .hero {
  backdrop-filter: blur(6px);
}
```

## 进一步阅读

- 配置参考：[主题配置](../reference/theme-config)
- Markdown 扩展：[组件用法](../reference/components)
