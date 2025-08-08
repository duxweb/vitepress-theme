# Home Page Configuration API

The homepage is configured via frontmatter in the home Markdown file. The layout includes three main areas: Hero, Features, and QuickStart.

## Page Basics

### layout

- Type: `string`
- Value: `'home'`
- Required: Yes

Set the page layout to the home layout.

```yaml
layout: home
```

### title

- Type: `string`
- Default: `undefined`

Page title used for SEO and browser tab.

### description

- Type: `string`
- Default: `undefined`

Page description used for SEO meta description.

## Hero Section

### hero

The main display area at the top of the home page.

```yaml
hero:
  name: "Dux VitePress"
  text: "A modern and elegant VitePress documentation theme"
  tagline: "A simple, beautiful, and feature-rich documentation solution"
  subtitle: "🚀 Next-generation documentation theme"
  mockUrl: "docs.example.com"
  image:
    src: "/hero-image.png"
    alt: "Dux VitePress Theme"
  actions:
    - text: "Get Started"
      link: "/guide/quick-start"
      theme: "brand"
    - text: "View Examples"
      link: "/examples"
      theme: "alt"
```

#### Hero Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `undefined` | Main title, usually product or project name |
| `text` | `string` | `undefined` | Subtitle description |
| `tagline` | `string` | `undefined` | Tagline for more details |
| `subtitle` | `string` | `undefined` | Top badge text |
| `mockUrl` | `string` | `'vitepress.dev'` | Mock browser address bar URL |
| `image` | `HeroImage` | `undefined` | Hero image configuration |
| `actions` | `HeroAction[]` | `[]` | Action buttons |

#### HeroImage

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | - | Image path |
| `alt` | `string` | `''` | Alt text |

Special: set `image: false` to show the built-in page mock.

#### HeroAction

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | - | Button text |
| `link` | `string` | - | Button link |
| `theme` | `'brand' | 'alt'` | `'alt'` | Button theme style |
| `target` | `string` | `'_self'` | Link target |

## Features Section

### features

Feature grid showcasing product features.

```yaml
features:
  - title: "Simple & Elegant"
    details: "Modern design for a clean reading experience"
    icon: "sparkles"
    color: "blue"
    link: "/guide/design"
    target: "_self"
  - title: "Feature-rich"
    details: "Built-in layouts and components for various docs"
    icon: "🎨"
    color: "green"
  - title: "Responsive"
    details: "Perfect on desktop and mobile"
    icon: "icon-[heroicons--device-phone-mobile]"
    color: "purple"
```

#### Feature Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | - | Feature title |
| `details` | `string` | - | Feature description |
| `icon` | `string` | `'star'` | Icon: heroicons name, emoji, or class name |
| `color` | `FeatureColor` | `'blue'` | Icon background color theme |
| `link` | `string` | `undefined` | Optional link |
| `target` | `string` | `'_self'` | Link target |

#### FeatureColor

Supported colors:

- `blue`
- `green`
- `purple`
- `orange`
- `red`
- `pink`
- `indigo`
- `teal`
- `cyan`
- `amber`

### featuresConfig

Section header configuration:

```yaml
featuresConfig:
  badge: "✨ Core Features"
  title: "Why Choose"
  subtitle: "Dux VitePress"
  description: "Modern documentation theme with great UX and rich features"
  extraSection:
    title: "Even More"
    description: "Continuously optimized and updated for the best experience"
    tags:
      - "Active updates"
      - "Community-driven"
      - "Open source"
```

#### FeaturesConfig Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `badge` | `string` | `undefined` | Top badge text |
| `title` | `string` | `undefined` | Main title |
| `subtitle` | `string` | `undefined` | Highlighted subtitle |
| `description` | `string` | `undefined` | Description text |
| `tags` | `string[]` | `undefined` | Tag list |
| `extraSection` | `ExtraSection` | `undefined` | Extra section below features |

#### ExtraSection

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `undefined` | Section title |
| `description` | `string` | `undefined` | Section description |
| `tags` | `string[]` | `undefined` | Tags |

## QuickStart Section

### quickStart

Step-by-step getting started section.

```yaml
quickStart:
  badge: "⚡ 3-min Setup"
  subtitle: "Quick"
  title: "Get Started"
  description: "Three simple steps to set up your docs"
  helpText: "Need help?"
  helpLink: "/guide/help"
  helpLinkText: "View full guide"
  steps:
    - step: "01"
      title: "Install Theme"
      description: "Install the Dux VitePress theme via npm or pnpm"
      code: "npm install vitepress"
      icon: "download"
      color: "blue"
    - step: "02"
      title: "Configure Theme"
      description: "Configure Dux theme in .vitepress/config.ts"
      code: "import { defineConfig } from 'vitepress'"
      icon: "cog-6-tooth"
      color: "green"
    - step: "03"
      title: "Start Project"
      description: "Start dev server and begin writing"
      code: "npm run docs:dev"
      icon: "rocket-launch"
      color: "purple"
```

#### QuickStart Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `badge` | `string` | `undefined` | Top badge text |
| `title` | `string` | `undefined` | Main title |
| `subtitle` | `string` | `undefined` | Highlighted subtitle |
| `description` | `string` | `undefined` | Description text |
| `helpText` | `string` | `undefined` | Help hint text |
| `helpLink` | `string` | `undefined` | Help link |
| `helpLinkText` | `string` | `undefined` | Help link text |
| `steps` | `QuickStartStep[]` | `[]` | Steps list |

#### QuickStartStep

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `step` | `string` | - | Step number |
| `title` | `string` | - | Step title |
| `description` | `string` | - | Step description |
| `code` | `string` | - | Code example |
| `icon` | `string` | - | Icon name |
| `color` | `StepColor` | `'blue'` | Icon background color |

#### StepColor

Same as `FeatureColor`:

- `blue`, `green`, `purple`, `orange`, `red`
- `pink`, `indigo`, `teal`, `cyan`, `amber`

## Full Example

```yaml
---
layout: home
title: "Dux VitePress Theme - Modern and Elegant"
description: "A beautiful and feature-rich VitePress documentation theme"

hero:
  name: "Dux VitePress"
  text: "Modern and elegant documentation theme"
  tagline: "Simple, beautiful, feature-rich documentation solution"
  subtitle: "🚀 Next-gen theme"
  mockUrl: "docs.example.com"
  image:
    src: "/hero-screenshot.png"
    alt: "Dux VitePress Theme Screenshot"
  actions:
    - text: "Get Started"
      link: "/guide/quick-start"
      theme: "brand"
    - text: "View Examples"
      link: "/examples"
      theme: "alt"
      target: "_blank"

features:
  - title: "Simple & Elegant"
    details: "Modern design for a clean reading experience"
    icon: "sparkles"
    color: "blue"
  - title: "Feature-rich"
    details: "Built-in layouts and components"
    icon: "🎨"
    color: "green"
  - title: "Responsive"
    details: "Perfect on desktop and mobile"
    icon: "device-phone-mobile"
    color: "purple"

featuresConfig:
  badge: "✨ Core Features"
  title: "Why Choose"
  subtitle: "Dux VitePress"
  description: "Modern theme with excellent reading experience and rich features"

quickStart:
  badge: "⚡ 3-min Setup"
  subtitle: "Quick"
  title: "Get Started"
  description: "Three simple steps to set up your docs"
  helpText: "Need help?"
  helpLink: "/guide/help"
  helpLinkText: "View full guide"
  steps:
    - step: "01"
      title: "Install Theme"
      description: "Install via npm or pnpm"
      code: "npm install vitepress"
      icon: "download"
      color: "blue"
    - step: "02"
      title: "Configure Theme"
      description: "Configure in .vitepress/config.ts"
      code: "import { defineConfig } from 'vitepress'"
      icon: "cog-6-tooth"
      color: "green"
    - step: "03"
      title: "Start Project"
      description: "Run dev server and start writing"
      code: "npm run docs:dev"
      icon: "rocket-launch"
      color: "purple"
---

## Welcome to Dux VitePress Theme

You can add extra Markdown content here, which will appear at the bottom of the homepage.

### More Features

- Mermaid diagrams support
- Built-in search
- Multi-language support
- Custom styles
```