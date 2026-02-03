# Sidebar Configuration

Sidebar navigation configuration options.

## sidebar

- Type: `Sidebar`
- Default: `undefined`

Sidebar menu configuration. Can be an array (single sidebar) or an object (different sidebars per path).

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  themeConfig: {
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' }
        ]
      }
    ]
  }
})
```

## SidebarItem Interface

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | - | Display text |
| `link` | `string` | - | Link path |
| `items` | `SidebarItem[]` | - | Children; group collapsible if set |
| `collapsed` | `boolean` | `false` | Collapse by default (only when `items` exists) |
| `base` | `string` | - | Base path |