# Navigation Configuration

Navbar menu configuration options.

## nav

- Type: `NavItem[]`
- Default: `[]`

Navigation menu configuration.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'About', link: '/about' }
    ]
  }
})
```

## NavItem Interface

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | - | Display text |
| `link` | `string` | - | Link path |
| `items` | `NavItem[]` | - | Submenu items |
| `activeMatch` | `string` | - | Active state regex |
| `target` | `string` | - | Link target |
| `rel` | `string` | - | Link rel attribute |