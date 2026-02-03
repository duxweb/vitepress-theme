# Footer Configuration

Footer configuration options.

## footer

- Type: `Footer`
- Default: `undefined`

Global footer configuration.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  themeConfig: {
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2024 <a href="https://duxweb.cn">DuxWeb</a>'
    }
  }
})
```

## Footer Interface

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `message` | `string` | - | Footer message, supports HTML |
| `copyright` | `string` | - | Copyright text, supports HTML |