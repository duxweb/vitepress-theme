# 页脚配置

页脚配置选项。

## footer

- 类型: `Footer`
- 默认值: `undefined`

全站页脚配置。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  themeConfig: {
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 <a href="https://duxweb.cn">DuxWeb</a>'
    }
  }
})
```

## Footer 接口

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `message` | `string` | - | 页脚消息，支持 HTML |
| `copyright` | `string` | - | 版权信息，支持 HTML |