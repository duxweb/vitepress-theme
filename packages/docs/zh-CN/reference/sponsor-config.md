# 赞助页配置 API

赞助页布局专门用于展示项目赞助信息，包括支付方式选择、支持者列表和统计信息。这是一个功能完整的赞助页面解决方案。

## 页面基础配置

### layout

- 类型: `string`
- 值: `'sponsor'`
- 必需: 是

设置页面布局为赞助页布局。

```yaml
layout: sponsor
```

### title

- 类型: `string`
- 默认值: `undefined`

页面标题，显示在页面标题区域。

```yaml
title: "支持我们的项目"
```

### description

- 类型: `string`
- 默认值: `undefined`

页面描述，显示在标题下方。

```yaml
description: "你的支持是我们持续开发的动力，感谢每一份帮助！"
```

## 支付方式配置

### paymentMethods

- 类型: `Record<string, PaymentMethod>`
- 默认值: `{}`

支付方式配置对象，键为支付方式的唯一标识，值为支付方式详细信息。

```yaml
paymentMethods:
  wechat:
    name: "微信支付"
    icon: "💰"
    color: "green"
    qrcode: "/images/wechat-pay.png"
    description: "微信扫码支付"
  alipay:
    name: "支付宝"
    icon: "💙"
    color: "blue"
    qrcode: "/images/alipay.png"
    description: "支付宝扫码支付"
  paypal:
    name: "PayPal"
    icon: "icon-[tabler--brand-paypal]"
    color: "indigo"
    link: "https://paypal.me/username"
    description: "通过 PayPal 支付"
```

#### PaymentMethod

单个支付方式配置：

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `name` | `string` | - | 支付方式名称 |
| `icon` | `string` | - | 图标，支持 emoji、CSS 类名、图片 URL |
| `color` | `PaymentColor` | `'blue'` | 按钮颜色主题 |
| `qrcode` | `string` | - | 二维码图片路径（与 link 二选一） |
| `link` | `string` | - | 外部支付链接（与 qrcode 二选一） |
| `description` | `string` | - | 支付方式描述 |

#### PaymentColor

支持的颜色主题：

- `'green'` - 绿色（推荐用于微信）
- `'blue'` - 蓝色（推荐用于支付宝）
- `'indigo'` - 靛蓝色（推荐用于 PayPal）
- `'red'` - 红色
- `'yellow'` - 黄色
- `'purple'` - 紫色

## 支持者列表配置

### sponsors

- 类型: `Sponsor[]`
- 默认值: `[]`

支持者记录数组，用于展示最近的支持者信息和统计数据。

```yaml
sponsors:
  - name: "张三"
    amount: 100
    message: "加油，期待更多功能！"
    date: "2024-01-15"
  - name: "李四"
    amount: 50
    message: "很棒的项目，继续努力！"
    date: "2024-01-14"
  - name: "王五"
    amount: 200
    message: "支持开源精神"
    date: "2024-01-13"
```

#### Sponsor

支持者记录配置：

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `name` | `string` | - | 支持者姓名 |
| `amount` | `number` | - | 支持金额（人民币） |
| `message` | `string` | - | 支持者留言 |
| `date` | `string` | - | 支持日期 |

## 图标类型支持

支付方式的 `icon` 属性支持多种格式：

### Emoji 图标

```yaml
paymentMethods:
  wechat:
    name: "微信支付"
    icon: "💰"  # 直接使用 emoji
```

### CSS 类名图标

```yaml
paymentMethods:
  paypal:
    name: "PayPal"
    icon: "icon-[tabler--brand-paypal]"  # Iconify 格式
```

### 图片图标

```yaml
paymentMethods:
  custom:
    name: "自定义支付"
    icon: "/images/custom-payment-icon.png"  # 图片路径
```

### SVG 图标

```yaml
paymentMethods:
  bitcoin:
    name: "比特币"
    icon: "/icons/bitcoin.svg"  # SVG 文件
```

## 完整配置示例

```yaml
---
layout: sponsor
title: "支持 Dux VitePress Theme"
description: "你的支持是我们持续开发和维护的动力，每一份帮助都很珍贵！"

# 支付方式配置
paymentMethods:
  wechat:
    name: "微信支付"
    icon: "💰"
    color: "green"
    qrcode: "/images/sponsor/wechat-pay.png"
    description: "使用微信扫描二维码支付"
    
  alipay:
    name: "支付宝"
    icon: "💙"
    color: "blue"
    qrcode: "/images/sponsor/alipay.png"
    description: "使用支付宝扫描二维码支付"
    
  paypal:
    name: "PayPal"
    icon: "icon-[tabler--brand-paypal]"
    color: "indigo"
    link: "https://paypal.me/duxweb"
    description: "通过 PayPal 国际支付"
    
  github:
    name: "GitHub Sponsors"
    icon: "icon-[tabler--brand-github]"
    color: "purple"
    link: "https://github.com/sponsors/duxweb"
    description: "通过 GitHub Sponsors 支持"

# 支持者记录
sponsors:
  - name: "热心用户A"
    amount: 188
    message: "非常喜欢这个主题的设计风格，简洁优雅！"
    date: "2024-01-20"
    
  - name: "开发者B"
    amount: 66
    message: "文档很详细，节省了很多开发时间"
    date: "2024-01-19"
    
  - name: "设计师C"
    amount: 100
    message: "UI设计很棒，响应式效果完美"
    date: "2024-01-18"
    
  - name: "学生D"
    amount: 20
    message: "学生党支持，加油！"
    date: "2024-01-17"
    
  - name: "公司E"
    amount: 500
    message: "用于公司项目，效果很好，继续维护！"
    date: "2024-01-16"

# 其他配置
head:
  - - meta
    - name: keywords
      content: "sponsor,donation,support,dux,vitepress"
  - - meta
    - property: "og:title"
      content: "支持 Dux VitePress Theme 项目"
---

## 为什么需要你的支持？

Dux VitePress Theme 是一个开源项目，我们投入了大量的时间和精力来开发和维护：

- 🎨 **持续的设计优化**：跟进最新的设计趋势
- 🔧 **功能改进和新特性**：根据用户反馈不断完善
- 🐛 **问题修复和兼容性更新**：确保稳定可靠
- 📖 **文档维护和示例更新**：提供更好的使用体验

## 支持方式

你可以通过以下方式支持我们的项目：

### 💰 资金支持

选择上方任意支付方式，任何金额的支持我们都深表感谢！

### 🌟 其他支持方式

- 在 GitHub 上给项目点个 Star
- 分享给你的朋友和同事
- 提交 Issue 和 Pull Request
- 在社交媒体上推荐我们

## 支持者权益

感谢所有支持者！你们将获得：

- 💝 **特别感谢**：在项目主页展示（如愿意）
- ⚡ **优先支持**：问题和需求获得更快响应
- 🎯 **功能建议**：优先考虑你的功能建议
- 📧 **直接联系**：获得开发者直接联系方式

再次感谢每一位支持者，是你们让开源项目更加美好！ ❤️
```

## 统计信息自动计算

赞助页面会自动计算并显示以下统计信息：

- **总支持者数量**：基于 `sponsors` 数组的长度
- **总支持金额**：所有 `amount` 字段的累计和
- **最近支持者**：按照日期排序显示最新的支持记录

这些统计信息会实时更新，无需手动配置。

## 支付方式显示逻辑

- 如果配置了 `qrcode`：显示二维码图片供用户扫描
- 如果配置了 `link`：显示外部链接按钮
- 优先显示二维码，如果同时配置了两者

## 多语言支持

赞助页面的界面文本支持多语言配置，在主题配置的 `langs.sponsor` 中设置：

```typescript
// .vitepress/config.ts
export default defineConfig({
  themeConfig: {
    langs: {
      sponsor: {
        selectPaymentMethod: "选择支付方式",
        recentSupporters: "最近支持者", 
        totalSupporters: "总支持者",
        totalAmount: "总金额"
      }
    }
  }
})
```