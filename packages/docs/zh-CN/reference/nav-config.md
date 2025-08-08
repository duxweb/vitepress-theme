# 导航栏配置

导航栏菜单配置选项。

## nav

- 类型: `NavItem[]`
- 默认值: `[]`

导航菜单配置。

```typescript
export default defineConfig({
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '参考', link: '/reference/' },
      { text: '关于', link: '/about' }
    ]
  }
})
```

## NavItem 接口

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `text` | `string` | - | 导航显示文字 |
| `link` | `string` | - | 导航链接 |
| `items` | `NavItem[]` | - | 子菜单项 |
| `activeMatch` | `string` | - | 激活匹配规则（正则） |
| `target` | `string` | - | 链接打开方式 |
| `rel` | `string` | - | 链接 rel 属性 |