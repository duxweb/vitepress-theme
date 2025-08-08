import { defineConfig } from 'vitepress'

// Use repository path when building on GitHub Pages
const isGitHub = process.env.GITHUB_ACTIONS === 'true'
const BASE = isGitHub ? '/vitepress-theme/' : '/'

export default defineConfig({
  base: BASE,
  vite: {
    build: {
      cssMinify: false
    }
  },
  // 站点配置
  title: 'Dux Docs',
  description: 'A modern and elegant VitePress theme',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
  ],
  
  // 启用暗色模式
  appearance: true,
  
  // 启用最后更新时间
  lastUpdated: true,
  
  // Markdown 配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Dux Docs',
      description: '现代优雅的 VitePress 文档主题',
      link: '/zh-CN/',
      themeConfig: {
        // 中文导航
        nav: [
          { text: '指南', link: '/zh-CN/guide/' },
          { text: '参考', link: '/zh-CN/reference/' },
          { text: '关于', link: '/zh-CN/about' },
          { text: '捐赠', link: '/zh-CN/sponsor' }
        ],
        // 中文侧边栏
        sidebar: {
          '/zh-CN/guide/': [
            {
              text: '开始使用',
              items: [
                { text: '介绍', link: '/zh-CN/guide/' },
                { text: '快速开始', link: '/zh-CN/guide/quick-start' },
                { text: '目录结构', link: '/zh-CN/guide/structure' }
              ]
            },
            {
              text: '页面布局',
              items: [
                { text: '首页布局', link: '/zh-CN/guide/home' },
                { text: '文档布局', link: '/zh-CN/guide/doc' },
                { text: '单页布局', link: '/zh-CN/guide/page' },
                { text: '赞助页面', link: '/zh-CN/guide/sponsor' },
                { text: '更新日志', link: '/zh-CN/guide/changelog' },
                { text: '语言跳转', link: '/zh-CN/guide/jump' }
              ]
            },
            {
              text: '进阶功能',
              items: [
                { text: '多语言配置', link: '/zh-CN/guide/i18n' }
              ]
            }
          ],
          '/zh-CN/reference/': [
            {
              text: '基础配置',
              items: [
                { text: '概述', link: '/zh-CN/reference/' },
                { text: '站点配置', link: '/zh-CN/reference/site-config' },
                { text: '主题配置', link: '/zh-CN/reference/theme-config' }
              ]
            },
            {
              text: '页面配置',
              items: [
                { text: '首页配置', link: '/zh-CN/reference/home-config' },
                { text: '文档配置', link: '/zh-CN/reference/doc-config' },
                { text: '单页配置', link: '/zh-CN/reference/page-config' },
                { text: '赞助页配置', link: '/zh-CN/reference/sponsor-config' },
                { text: '更新日志配置', link: '/zh-CN/reference/changelog-config' }
              ]
            },
            {
              text: '组件配置',
              items: [
                { text: '导航栏配置', link: '/zh-CN/reference/nav-config' },
                { text: '侧边栏配置', link: '/zh-CN/reference/sidebar-config' },
                { text: '页脚配置', link: '/zh-CN/reference/footer-config' }
              ]
            },
            {
              text: '组件示例',
              items: [
                { text: '组件用法', link: '/zh-CN/reference/components' }
              ]
            }
          ],
        }
      }
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      title: 'Dux Docs',
      description: 'A modern and elegant VitePress theme',
      link: '/en-US/',
      themeConfig: {
        // 英文导航
        nav: [
          { text: 'Guide', link: '/en-US/guide/' },
          { text: 'Reference', link: '/en-US/reference/' },
          { text: 'About', link: '/en-US/about' },
          { text: 'Sponsor', link: '/en-US/sponsor' }
        ],
        // 英文侧边栏
        sidebar: {
          '/en-US/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/en-US/guide/' },
                { text: 'Quick Start', link: '/en-US/guide/quick-start' },
                { text: 'Directory Structure', link: '/en-US/guide/structure' }
              ]
            },
            {
              text: 'Page Layouts',
              items: [
                { text: 'Home', link: '/en-US/guide/home' },
                { text: 'Document', link: '/en-US/guide/doc' },
                { text: 'Single Page', link: '/en-US/guide/page' },
                { text: 'Sponsor', link: '/en-US/guide/sponsor' },
                { text: 'Changelog', link: '/en-US/guide/changelog' },
                { text: 'Language Jump', link: '/en-US/guide/jump' }
              ]
            },
            {
              text: 'Advanced',
              items: [
                { text: 'Internationalization', link: '/en-US/guide/i18n' }
              ]
            }
          ],
          '/en-US/reference/': [
            {
              text: 'Basic',
              items: [
                { text: 'Overview', link: '/en-US/reference/' },
                { text: 'Site Config', link: '/en-US/reference/site-config' },
                { text: 'Theme Config', link: '/en-US/reference/theme-config' }
              ]
            },
            {
              text: 'Page Config',
              items: [
                { text: 'Home Config', link: '/en-US/reference/home-config' },
                { text: 'Doc Config', link: '/en-US/reference/doc-config' },
                { text: 'Page Config', link: '/en-US/reference/page-config' },
                { text: 'Sponsor Config', link: '/en-US/reference/sponsor-config' },
                { text: 'Changelog Config', link: '/en-US/reference/changelog-config' }
              ]
            },
            {
              text: 'Components',
              items: [
                { text: 'Navbar Config', link: '/en-US/reference/nav-config' },
                { text: 'Sidebar Config', link: '/en-US/reference/sidebar-config' },
                { text: 'Footer Config', link: '/en-US/reference/footer-config' },
                { text: 'Markdown Extensions', link: '/en-US/reference/components' }
              ]
            }
          ]
        }
      }
    }
  },
  
  // 全局主题配置
  themeConfig: {
    // Logo 配置
    logo: '/logo.svg',
    
    // 搜索配置
    search: {
      provider: 'local'
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/duxweb/vitepress-theme' }
    ],
    
    // Footer 配置
    footer: {
      copyright: 'Copyright © 2024 <a href="https://duxweb.cn">DuxWeb</a>'
    }
  }
})