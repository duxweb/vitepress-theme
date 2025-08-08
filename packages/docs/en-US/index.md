---
layout: home
title: Dux Docs
titleTemplate: Modern elegant VitePress theme

hero:
  name: Dux Docs
  text: A fully customizable and elegant VitePress theme
  tagline: Born for documentation, making writing more delightful
  subtitle: 🎉 New Release
  mockUrl: "dux-docs.com"
  image: true
  actions:
    - theme: brand
      text: Quick Start
      link: /en-US/guide/quick-start
    - theme: alt
      text: View on GitHub
      link: https://github.com/duxweb/vitepress-theme
      target: _blank
    - theme: alt
      text: View Guide
      link: /en-US/guide/

features:
  - icon: rocket-launch
    color: blue
    title: Out of the Box
    details: Simple installation with a beautiful docs site without complex configuration
    link: /en-US/guide/quick-start
  - icon: paint-brush
    color: purple
    title: Beautiful Design
    details: Modern design language with light/dark theme switching
    link: /en-US/guide/custom-style
  - icon: globe-alt
    color: green
    title: Internationalization
    details: Built-in multi-language support to easily build international documentation
    link: /en-US/guide/i18n
  - icon: device-phone-mobile
    color: orange
    title: Responsive
    details: Perfectly adapts to desktop, tablet and mobile devices
  - icon: bolt
    color: amber
    title: High Performance
    details: Built on Vite with fast HMR and build experience
    link: https://vitejs.dev
    target: _blank
  - icon: magnifying-glass
    color: indigo
    title: Full-text Search
    details: Powerful built-in local search
    link: /en-US/guide/search

featuresConfig:
  title: Why Choose Dux Theme?
  description: A modern theme designed specifically for technical documentation
  extraSection:
    title: Get Started Now
    description: Build a beautiful documentation site in just 3 steps and refresh your docs
    tags:
      - Quick Setup
      - Beautiful UI
      - TypeScript Support
      - Multiple Layouts
      - Multi-language
      - Responsive Design

quickStart:
  badge: 5-minute Setup
  title: Quick Start
  subtitle: Zero Config
  description: Create your beautiful documentation site in just a few simple steps
  steps:
    - step: "01"
      icon: "arrow-down-tray"
      color: "blue"
      title: "Install Theme"
      description: "Install quickly with your package manager"
      code: "npm install @duxweb/vitepress-theme"
    - step: "02"
      icon: "cog-8-tooth"
      color: "green"
      title: "Configure Theme"
      description: "Enable the theme in VitePress config"
      code: |
        import theme from '@duxweb/vitepress-theme'

        export default {
           extends: theme
         }
    - step: "03"
      icon: "rocket-launch"
      color: "purple"
      title: "Start Preview"
      description: "Run the dev server to preview"
      code: "npm run dev"
  helpText: "Need help? Check our detailed documentation"
  helpLink: "/en-US/guide/quick-start"
  helpLinkText: "Quick Start Guide"
---