# 赞助页面使用教程

赞助页面（Sponsor Page）是 Dux VitePress Theme 专为接受捐赠、赞助而设计的特殊布局。它提供了支付方式选择、二维码展示、支持者列表等完整的赞助功能，帮助开源项目或个人获得资金支持。

## 页面介绍

赞助页面具有以下特点：
- **支付方式切换**：支持多种支付方式（微信、支付宝、PayPal等）
- **二维码展示**：自动显示对应的支付二维码
- **支持者列表**：展示历史赞助记录和感谢信息
- **统计信息**：显示总赞助金额和支持者数量
- **响应式布局**：适配桌面和移动设备
- **多语言支持**：支持自定义界面文本

## 基本配置示例

### 1. 最简单的赞助页配置

```markdown
---
layout: sponsor
title: 支持我们
description: 您的支持是我们前进的动力
paymentMethods:
  wechat:
    name: 微信支付
    color: green
    icon: 💰
    qrcode: /images/wechat-qr.png
    description: 扫描二维码用微信支付
  alipay:
    name: 支付宝
    color: blue  
    icon: 💳
    qrcode: /images/alipay-qr.png
    description: 扫描二维码用支付宝付款
sponsors:
  - name: 张三
    amount: 100
    message: 支持开源项目！
    date: 2024-01-15
  - name: 李四
    amount: 50
    message: 感谢你们的努力
    date: 2024-01-10
---

感谢您考虑支持我们的项目！您的每一份支持都将用于项目的持续开发和维护。
```

## 详细的配置选项说明

### Frontmatter 配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `layout` | `string` | `'sponsor'` | 指定使用赞助页面布局 |
| `title` | `string` | - | 页面标题 |
| `description` | `string` | - | 页面描述 |
| `paymentMethods` | `object` | `{}` | 支付方式配置 |
| `sponsors` | `array` | `[]` | 支持者列表 |

### 支付方式配置详解

每个支付方式支持以下配置选项：

| 选项 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `name` | `string` | 是 | 支付方式显示名称 |
| `color` | `string` | 否 | 按钮主题颜色 |
| `icon` | `string` | 否 | 显示图标 |
| `qrcode` | `string` | 否 | 支付二维码图片路径 |
| `link` | `string` | 否 | 支付链接（与qrcode二选一） |
| `description` | `string` | 否 | 支付方式说明文字 |

#### 颜色选项（color）

| 颜色值 | 效果 |
|--------|------|
| `green` | 绿色按钮（适合微信） |
| `blue` | 蓝色按钮（适合支付宝） |
| `indigo` | 靛蓝色按钮 |
| `red` | 红色按钮 |
| `yellow` | 黄色按钮 |
| `purple` | 紫色按钮 |

#### 图标配置（icon）

支持多种图标格式：

```markdown
# Emoji 表情
icon: 💰

# Iconify 图标类名
icon: icon-[tabler--brand-wechat]

# 图片 URL
icon: /images/wechat-icon.png

# SVG 代码
icon: <svg>...</svg>
```

### 支持者列表配置

每个支持者记录包含以下字段：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `name` | `string` | 是 | 支持者姓名 |
| `amount` | `number` | 是 | 赞助金额 |
| `message` | `string` | 否 | 留言信息 |
| `date` | `string` | 否 | 赞助日期 |

## 完整的使用示例

### 示例：开源项目赞助页

```markdown
---
layout: sponsor
title: 支持 DuxCMS 项目
description: 感谢您对开源项目的支持，每一分钱都将用于项目的持续发展
paymentMethods:
  wechat:
    name: 微信支付
    color: green
    icon: tabler--brand-wechat
    qrcode: /images/sponsor/wechat-qr.png
    description: 使用微信扫描上方二维码进行支付
  alipay:
    name: 支付宝
    color: blue
    icon: tabler--brand-alipay
    qrcode: /images/sponsor/alipay-qr.png
    description: 使用支付宝扫描上方二维码进行支付
  paypal:
    name: PayPal
    color: indigo
    icon: tabler--brand-paypal
    link: https://paypal.me/yourname
    description: 点击按钮跳转到 PayPal 支付页面
sponsors:
  - name: 热心网友A
    amount: 200
    message: 非常棒的项目，希望能持续发展！
    date: 2024-01-20
  - name: 开发者B
    amount: 100
    message: 感谢提供这么好用的工具
    date: 2024-01-18
  - name: 公司C
    amount: 500
    message: 我们公司在使用你们的项目，表示支持
    date: 2024-01-15
---

## 为什么需要您的支持？

### 🛠️ 持续开发
您的支持将帮助我们：
- 持续改进和添加新功能
- 修复 bug 和安全问题
- 保持代码库的活跃更新

### 📚 文档维护  
- 编写和更新详细的使用文档
- 制作视频教程和示例项目
- 翻译多语言文档

### 🏗️ 基础设施
- 维护演示站点和在线文档
- CDN 和服务器费用
- 自动化测试和部署

再次感谢您的支持！❤️
```


通过合理配置赞助页面，您可以为项目或个人创建专业的资金支持渠道。