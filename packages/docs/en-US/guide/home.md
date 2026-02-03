# Home Layout

Learn how to create an attractive homepage with the Dux theme.

## Basic Configuration

The homepage uses the `layout: home` layout and is configured via frontmatter.

```markdown
---
layout: home

hero:
  name: Site Name
  text: Main Title
  tagline: Subtitle description
  actions:
    - theme: brand
      text: Primary Button
      link: /guide/
    - theme: alt
      text: Secondary Button
      link: /reference/

features:
  - icon: 🚀
    title: Feature Title
    details: Feature description
---
```

## Hero Section

The most prominent area of the homepage to present key information.

### Basic Properties

```yaml
hero:
  name: VitePress    # Brand name (optional)
  text: Next-gen     # Main title
  tagline: Static Site Generator  # Subtitle
  subtitle: New Release  # Top badge (optional)
```

### Action Buttons

```yaml
hero:
  actions:
    - theme: brand    # Primary button style
      text: Quick Start
      link: /guide/quick-start
      target: _self   # Optional
    
    - theme: alt      # Secondary button
      text: View on GitHub
      link: https://github.com
      target: _blank  # Open in new tab
```

### Hero Image

```yaml
hero:
  image: false        # Hide image and show placeholder
  # or
  image:
    src: /hero.png    # Image path
    alt: Hero Image   # Alt text
  
  mockUrl: myapp.dev  # Mock browser address bar URL
```

## Features Section

Showcase core features of your product or project.

### Basic Configuration

```yaml
features:
  - icon: ⚡        # Emoji
    title: Fast
    details: Built on Vite for fast dev experience
    color: blue    # Icon background color
    
  - icon: icon-[heroicons--rocket-launch]  # Icon class
    title: Modern
    details: Latest web tech stack
    color: green
    
  - icon: /icons/feature.svg  # Image icon
    title: Flexible
    details: Highly customizable theme system
    color: purple
```

### Add Links

Make a feature card clickable:

```yaml
features:
  - icon: 📚
    title: Full Docs
    details: Detailed guides and API references
    link: /guide/
    target: _self  # Optional
```

### Features Config

Global configs for the Features section:

```yaml
featuresConfig:
  badge: Core Features
  title: Why Choose Us
  subtitle: Powerful Capabilities
  description: We provide the best solution
  
  extraSection:
    title: And More
    description: Explore more powerful features
    tags:
      - High Performance
      - Easy to Use
      - Extensible
```

## QuickStart Section

Show steps to get started quickly.

```yaml
quickStart:
  badge: Quick Start
  title: Start in Three Steps
  subtitle: Just a Few Minutes
  description: Follow these steps to start your project
  
  steps:
    - step: "01"
      title: Install Dependencies
      description: Use your favorite package manager
      code: npm install @duxweb/vitepress-theme
      icon: icon-[heroicons--arrow-down-tray]
      color: blue
      
    - step: "02"
      title: Configure Theme
      description: Import the theme in the config file
      code: import DuxTheme from '@duxweb/vitepress-theme'
      icon: icon-[heroicons--cog-8-tooth]
      color: green
      
    - step: "03"
      title: Start Development
      description: Start the dev server
      code: npm run docs:dev
      icon: icon-[heroicons--rocket-launch]
      color: purple
  
  helpText: Need help?
  helpLink: /guide/
  helpLinkText: View full docs
```

## Custom Content

You can add custom Markdown content:

```markdown
---
layout: home
# ... hero and features
---

## Extra Content Area

Any Markdown content here will appear below the features.

### Why Choose Us

- ✅ Reason One
- ✅ Reason Two
- ✅ Reason Three

### Testimonials

> "The best docs theme I've used!" - User A
>
> "Elegant and powerful." - User B
```

## Full Example

```markdown
---
layout: home

hero:
  name: Dux Theme
  text: Modern VitePress Theme
  tagline: Build elegant technical documentation
  subtitle: v1.0 Released
  actions:
    - theme: brand
      text: Get Started
      link: /guide/quick-start
    - theme: alt
      text: GitHub
      link: https://github.com/duxweb/vitepress-theme
      target: _blank
  image: false
  mockUrl: dux-theme.dev

features:
  - icon: ⚡
    title: Lightning Fast
    details: Built on Vite for a lightning-fast dev experience
    color: blue
    link: /guide/performance
    
  - icon: 🎨
    title: Beautiful Design
    details: Modern UI design with dark mode
    color: purple
    link: /guide/design
    
  - icon: 🌍
    title: Internationalization
    details: Built-in multi-language support
    color: green
    link: /guide/i18n

featuresConfig:
  badge: Core Features
  title: Made for Modern Docs
  description: The best writing and reading experience

quickStart:
  title: Quick Start
  steps:
    - step: "1"
      title: Install
      code: pnpm add @duxweb/vitepress-theme
      icon: icon-[heroicons--arrow-down-tray]
      color: blue
    - step: "2"
      title: Configure
      code: import DuxTheme from '@duxweb/vitepress-theme'
      icon: icon-[heroicons--cog-8-tooth]
      color: green
---

## 🎯 Built for Developers

Focus on content creation with an excellent authoring experience.

## 🤝 Join the Community

Let’s build a better documentation experience together!
```

## Notes

1. Choose appropriate icons (emoji, icon class, or image)
2. Use color wisely to highlight key points
3. Keep content concise
4. Strong CTAs guide users
5. Responsive design is built-in
