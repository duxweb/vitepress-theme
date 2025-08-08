# Custom Styles

Learn how to customize the Dux theme styles and override default colors and components.

## Global Styles

Import your custom stylesheet in `.vitepress/theme/index.ts`:

```ts
import theme from '@duxweb/vitepress-theme'
import '@duxweb/vitepress-theme/dist/index.css'
import './custom.css'

export default {
  extends: theme
}
```

Then override CSS variables and styles in `custom.css`:

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

## Homepage-only Styles

Target the home layout:

```css
.layout-home .hero {
  backdrop-filter: blur(6px);
}
```

## See Also

- Config Reference: [Theme Config](../reference/theme-config)
- Markdown Extensions: [Components](../reference/components)
