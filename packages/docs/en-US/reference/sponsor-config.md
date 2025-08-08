# Sponsor Page Configuration API

The sponsor layout is designed to showcase project sponsorship information, including payment methods, supporter list, and statistics.

## Page Basics

### layout

- Type: `string`
- Value: `'sponsor'`
- Required: Yes

Set the layout to sponsor page.

```yaml
layout: sponsor
```

### title

- Type: `string`
- Default: `undefined`

Page title displayed in the header section.

```yaml
title: "Support Our Project"
```

### description

- Type: `string`
- Default: `undefined`

Page description displayed below the title.

```yaml
description: "Your support fuels our continuous development. Thank you!"
```

## Payment Methods

### paymentMethods

- Type: `Record<string, PaymentMethod>`
- Default: `{}`

A map of payment method configurations. Keys are unique identifiers, values are detailed configs.

```yaml
paymentMethods:
  wechat:
    name: "WeChat Pay"
    icon: "💰"
    color: "green"
    qrcode: "/images/wechat-pay.png"
    description: "Pay with WeChat by scanning the QR code"
  alipay:
    name: "Alipay"
    icon: "💙"
    color: "blue"
    qrcode: "/images/alipay.png"
    description: "Pay with Alipay by scanning the QR code"
  paypal:
    name: "PayPal"
    icon: "icon-[tabler--brand-paypal]"
    color: "indigo"
    link: "https://paypal.me/username"
    description: "Pay via PayPal"
```

#### PaymentMethod

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | - | Payment method name |
| `icon` | `string` | - | Icon: emoji, CSS class, or image URL |
| `color` | `PaymentColor` | `'blue'` | Button color theme |
| `qrcode` | `string` | - | QR code image path (exclusive with `link`) |
| `link` | `string` | - | External payment link (exclusive with `qrcode`) |
| `description` | `string` | - | Description text |

#### PaymentColor

- `green` - Recommended for WeChat
- `blue` - Recommended for Alipay
- `indigo` - Recommended for PayPal
- `red`
- `yellow`
- `purple`

## Supporters List

### sponsors

- Type: `Sponsor[]`
- Default: `[]`

Array of supporter records for displaying recent sponsors and statistics.

```yaml
sponsors:
  - name: "Alice"
    amount: 100
    message: "Keep it up!"
    date: "2024-01-15"
  - name: "Bob"
    amount: 50
    message: "Great project!"
    date: "2024-01-14"
```

#### Sponsor

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | - | Supporter name |
| `amount` | `number` | - | Amount (CNY or your currency) |
| `message` | `string` | - | Supporter message |
| `date` | `string` | - | Support date |

## Icon Types

The `icon` property supports multiple formats:

### Emoji

```yaml
paymentMethods:
  wechat:
    name: "WeChat Pay"
    icon: "💰"
```

### CSS Class Name

```yaml
paymentMethods:
  paypal:
    name: "PayPal"
    icon: "icon-[tabler--brand-paypal]"
```

### Image URL

```yaml
paymentMethods:
  custom:
    name: "Custom Pay"
    icon: "/images/custom-payment-icon.png"
```

### SVG

```yaml
paymentMethods:
  bitcoin:
    name: "Bitcoin"
    icon: "/icons/bitcoin.svg"
```

## Full Example

```yaml
---
layout: sponsor
title: "Support Dux VitePress Theme"
description: "Your support powers our continuous development and maintenance. Every contribution matters!"

# Payment methods
paymentMethods:
  wechat:
    name: "WeChat Pay"
    icon: "💰"
    color: "green"
    qrcode: "/images/sponsor/wechat-pay.png"
    description: "Scan with WeChat to pay"
  
  alipay:
    name: "Alipay"
    icon: "💙"
    color: "blue"
    qrcode: "/images/sponsor/alipay.png"
    description: "Scan with Alipay to pay"
  
  paypal:
    name: "PayPal"
    icon: "icon-[tabler--brand-paypal]"
    color: "indigo"
    link: "https://paypal.me/duxweb"
    description: "Pay internationally via PayPal"
  
  github:
    name: "GitHub Sponsors"
    icon: "icon-[tabler--brand-github]"
    color: "purple"
    link: "https://github.com/sponsors/duxweb"
    description: "Support via GitHub Sponsors"

# Supporter records
sponsors:
  - name: "Contributor A"
    amount: 188
    message: "Love the clean design!"
    date: "2024-01-20"
  - name: "Developer B"
    amount: 66
    message: "Docs are very helpful"
    date: "2024-01-19"
  - name: "Designer C"
    amount: 100
    message: "Great UI and responsive design"
    date: "2024-01-18"
  - name: "Student D"
    amount: 20
    message: "Support as a student!"
    date: "2024-01-17"
  - name: "Company E"
    amount: 500
    message: "Using in our company project, keep it up!"
    date: "2024-01-16"

# Other head tags
head:
  - - meta
    - name: keywords
      content: "sponsor,donation,support,dux,vitepress"
  - - meta
    - property: "og:title"
      content: "Support Dux VitePress Theme"
---

## Why Support?

Dux VitePress Theme is open source. We invest significant time and effort to develop and maintain it:

- 🎨 Continuous design improvement
- 🔧 Feature enhancements based on feedback
- 🐛 Bug fixes and compatibility updates
- 📖 Documentation maintenance and examples

## How to Support

### 💰 Financial Support

Choose any payment method above. Any amount is appreciated!

### 🌟 Other Ways

- Star us on GitHub
- Share with friends and colleagues
- Submit issues and pull requests
- Recommend us on social media

## Benefits for Supporters

- 💝 Special thanks on the project (if you wish)
- ⚡ Priority support
- 🎯 Feature suggestions considered with priority
- 📧 Direct contact with maintainers

Thanks to every supporter! ❤️
```

## Automatic Statistics

The sponsor page automatically calculates:

- Total number of supporters
- Total sponsored amount
- Most recent supporters (sorted by date)

These are updated in real time.

## Display Logic

- If `qrcode` is set: show QR code
- If `link` is set: show external link button
- QR code takes priority if both are set

## I18n for UI Text

You can localize UI labels via `themeConfig.langs.sponsor`:

```typescript
// .vitepress/config.ts
export default defineConfig({
  themeConfig: {
    langs: {
      sponsor: {
        selectPaymentMethod: 'Select Payment Method',
        recentSupporters: 'Recent Supporters',
        totalSupporters: 'Supporters',
        totalAmount: 'Total Amount'
      }
    }
  }
})
```