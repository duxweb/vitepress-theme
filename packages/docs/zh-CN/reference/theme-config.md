# 主题配置

主题配置选项，在 `.vitepress/config.ts` 文件的 `themeConfig` 中配置。

## 基础配置

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `logo` | `string` | - | 导航栏 logo |
| `siteTitle` | `string \| false` | - | 导航栏标题 |
| `nav` | `NavItem[]` | `[]` | 导航菜单 |
| `sidebar` | `Sidebar` | - | 侧边栏配置 |
| `search` | `SearchOptions` | - | 搜索功能 |
| `socialLinks` | `SocialLink[]` | `[]` | 社交链接 |
| `footer` | `Footer` | - | 页脚配置 |
| `editLink` | `EditLink` | - | 编辑链接 |
| `langs` | `LangConfig` | `{}` | 多语言文本 |

## 多语言文本配置

Dux 主题特有的多语言文本配置：

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  themeConfig: {
    langs: {
      notFound: {
        title: '页面未找到',
        content: '抱歉，我们无法找到您要查找的页面。',
        backToHome: '返回首页',
        previousPage: '返回上一页'
      },
      sponsor: {
        selectPaymentMethod: '选择支付方式',
        recentSupporters: '最近支持者',
        totalSupporters: '总支持者',
        totalAmount: '总金额'
      }
    }
  }
})
```