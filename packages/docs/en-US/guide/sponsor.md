# Sponsor Page Guide

The Sponsor Page is a special layout designed for donations and sponsorships. It provides payment method switching, QR code display, supporter list, and statistics to help open-source projects or individuals receive support.

## Overview

- Multiple payment methods (WeChat, Alipay, PayPal, etc.)
- Automatic QR code display for each method
- Supporter list with messages and dates
- Statistics: total amount and supporters
- Responsive layout
- I18n support for UI labels

## Basic Example

### 1. Minimal configuration

```markdown
---
layout: sponsor
title: Support Us
description: Your support is our motivation
paymentMethods:
  wechat:
    name: WeChat Pay
    color: green
    icon: 💰
    qrcode: /images/wechat-qr.png
    description: Scan to pay with WeChat
  alipay:
    name: Alipay
    color: blue  
    icon: 💳
    qrcode: /images/alipay-qr.png
    description: Scan to pay with Alipay
sponsors:
  - name: Alice
    amount: 100
    message: Support open source!
    date: 2024-01-15
  - name: Bob
    amount: 50
    message: Thanks for your efforts
    date: 2024-01-10
---

Thank you for considering supporting our project! Every contribution helps us continue development and maintenance.
```

## Frontmatter Options

| Option | Type | Default | Description |
|------|------|--------|------|
| `layout` | `string` | `'sponsor'` | Use sponsor layout |
| `title` | `string` | - | Page title |
| `description` | `string` | - | Page description |
| `paymentMethods` | `object` | `{}` | Payment methods |
| `sponsors` | `array` | `[]` | Supporter records |

### Payment Method Options

| Option | Type | Required | Description |
|------|------|----------|-------------|
| `name` | `string` | Yes | Display name |
| `color` | `string` | No | Button theme color |
| `icon` | `string` | No | Icon |
| `qrcode` | `string` | No | QR code image path |
| `link` | `string` | No | External payment link (exclusive with qrcode) |
| `description` | `string` | No | Description text |

#### Color values

- `green`, `blue`, `indigo`, `red`, `yellow`, `purple`

#### Icon formats

- Emoji
- Iconify class (e.g., `icon-[tabler--brand-wechat]`)
- Image URL
- Inline SVG

### Supporter Record

| Field | Type | Required | Description |
|------|------|----------|-------------|
| `name` | `string` | Yes | Supporter name |
| `amount` | `number` | Yes | Amount |
| `message` | `string` | No | Message |
| `date` | `string` | No | Date |

## Full Example

```markdown
---
layout: sponsor
title: Support DuxCMS
description: Thank you for supporting open source. Every cent helps ongoing development
paymentMethods:
  wechat:
    name: WeChat Pay
    color: green
    icon: tabler--brand-wechat
    qrcode: /images/sponsor/wechat-qr.png
    description: Scan with WeChat to pay
  alipay:
    name: Alipay
    color: blue
    icon: tabler--brand-alipay
    qrcode: /images/sponsor/alipay-qr.png
    description: Scan with Alipay to pay
  paypal:
    name: PayPal
    color: indigo
    icon: tabler--brand-paypal
    link: https://paypal.me/yourname
    description: Click to open PayPal payment page
sponsors:
  - name: User A
    amount: 200
    message: Great project!
    date: 2024-01-20
  - name: Dev B
    amount: 100
    message: Thanks for the useful tools
    date: 2024-01-18
  - name: Company C
    amount: 500
    message: We use this in production, keep it up
    date: 2024-01-15
---

## Why Support?

### 🛠️ Ongoing Development
- Feature improvements
- Bug and security fixes
- Keep the codebase active

### 📚 Documentation
- Write and update guides
- Create tutorials and examples
- Translate docs

### 🏗️ Infrastructure
- Maintain demo site and docs
- CDN and server costs
- Automated testing and deployment

Thanks for your support! ❤️
```