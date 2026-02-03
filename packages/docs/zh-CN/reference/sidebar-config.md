# 侧边栏配置

侧边栏导航配置选项。

## sidebar

- 类型: `Sidebar`
- 默认值: `undefined`

侧边栏菜单配置，可以是数组（单一侧边栏）或对象（多页面侧边栏）。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  themeConfig: {
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '介绍', link: '/guide/' },
          { text: '安装', link: '/guide/installation' }
        ]
      }
    ]
  }
})
```

## SidebarItem 接口

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `text` | `string` | - | 侧边栏项显示文字 |
| `link` | `string` | - | 链接地址 |
| `items` | `SidebarItem[]` | - | 子项目，设置后将显示为可折叠分组 |
| `collapsed` | `boolean` | `false` | 是否默认折叠（仅在有子项目时有效） |
| `base` | `string` | - | 基础路径 |