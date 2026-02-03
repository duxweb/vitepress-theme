---
layout: home
title: Dux Docs
titleTemplate: 现代优雅的 VitePress 主题

hero:
  name: Dux Docs
  text: 一款完全自定义且优雅的 VitePress 主题
  tagline: 为文档而生，让写作更美好
  subtitle: 🎉 全新发布
  mockUrl: "dux-docs.com"
  image: true
  actions:
    - theme: brand
      text: 快速开始
      link: /zh-CN/guide/quick-start
    - theme: alt
      text: 在 GitHub 查看
      link: https://github.com/duxweb/vitepress-theme
      target: _blank
    - theme: alt
      text: 查看指南
      link: /zh-CN/guide/

features:
  - icon: rocket-launch
    color: blue
    title: 开箱即用
    details: 简单安装，无需复杂配置即可拥有美观的文档站点
    link: /zh-CN/guide/quick-start
  - icon: paint-brush
    color: purple
    title: 精美设计
    details: 现代化的设计语言，支持亮色/暗色主题切换
    link: /zh-CN/guide/custom-style
  - icon: globe-alt
    color: green
    title: 国际化
    details: 内置多语言支持，轻松构建国际化文档
    link: /zh-CN/guide/i18n
  - icon: device-phone-mobile
    color: orange
    title: 响应式
    details: 完美适配桌面、平板和移动设备
  - icon: bolt
    color: amber
    title: 高性能
    details: 基于 Vite 构建，快速的热重载和构建体验
    link: https://vitejs.dev
    target: _blank
  - icon: magnifying-glass
    color: indigo
    title: 全文搜索
    details: 内置强大的本地搜索功能
    link: /zh-CN/guide/search

featuresConfig:
  title: 为什么选择 Dux Theme？
  description: 专为技术文档而设计的现代化主题
  extraSection:
    title: 立即开始体验
    description: 仅需 3 步即可搭建精美的文档站点，让你的文档焕然一新
    tags:
      - 快速搭建
      - 精美界面
      - TypeScript 支持
      - 多种布局
      - 多语言
      - 响应式设计

quickStart:
  badge: 5 分钟上手
  title: 快速开始
  subtitle: 零配置
  description: 简单几步即可创建属于你的美观文档站点
  steps:
    - step: "01"
      icon: "arrow-down-tray"
      color: "blue"
      title: "安装主题"
      description: "使用包管理器快速安装"
      code: "npm install @duxweb/vitepress-theme"
    - step: "02"
      icon: "cog-8-tooth"
      color: "green"
      title: "配置主题"
      description: "在 VitePress 配置中启用主题"
      code: |
        import DuxTheme from '@duxweb/vitepress-theme'

        export default {
           extends: DuxTheme
         }
    - step: "03"
      icon: "rocket-launch"
      color: "purple"
      title: "启动预览"
      description: "运行开发服务器查看效果"
      code: "npm run dev"
  helpText: "需要帮助？查看我们的详细文档"
  helpLink: "/zh-CN/guide/quick-start"
  helpLinkText: "快速开始指南"
---
