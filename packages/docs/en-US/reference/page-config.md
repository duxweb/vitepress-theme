# Page Layout Configuration API

Single page layout for standalone pages such as About or Help.

## Page Basics

### layout

- Type: `string`
- Value: `'page'`
- Required: Yes

```yaml
layout: page
```

### title

- Type: `string`
- Default: `undefined`

Shown in the page header and browser tab.

```yaml
title: "About Us"
```

### description

- Type: `string`
- Default: `undefined`

Shown under the title and used for SEO.

```yaml
description: "Learn about our team, mission, and vision"
```

### head

- Type: `HeadConfig[]`
- Default: `[]`

Extra `<head>` tags for this page.

```yaml
head:
  - - meta
    - name: keywords
      content: "about,team,company"
```

## PageHero Options

### heroIcon

- Type: `string`
- Default: `''`

Icon in the header area. Supports Iconify CSS class names.

```yaml
heroIcon: "icon-[tabler--info-circle]"
# or
heroIcon: "icon-[heroicons--heart]"
```

### heroColor

- Type: `'primary' | 'sponsor' | 'success' | 'warning' | 'danger' | 'info' | 'gray'`
- Default: `'info'`

Color theme of header area.

```yaml
heroColor: "primary"
```

### heroSize

- Type: `'sm' | 'md' | 'lg'`
- Default: `'md'`

Header size.

```yaml
heroSize: "lg"
```

## Content Area

### maxWidth

- Type: `string`
- Default: `'max-w-6xl'`

Max width using Tailwind CSS classes.

```yaml
maxWidth: "max-w-4xl"
```

## Standard Options

### titleTemplate

- Type: `string | boolean`
- Default: inherit from site config

Customize title template.

```yaml
titleTemplate: ":title | My Site"
```

### sidebar

- Type: `boolean`
- Default: `false`

Show sidebar. Usually `false` for single pages.

```yaml
sidebar: false
```

### aside

- Type: `boolean | 'left'`
- Default: `true`

Show page outline.

```yaml
aside: false
```

### footer

- Type: `boolean`
- Default: `true`

Show footer.

```yaml
footer: true
```

## Full Example

```yaml
---
layout: page
title: "About Dux VitePress Theme"
description: "Understand the philosophy, features, and team behind Dux VitePress Theme"

# Header
heroIcon: "icon-[tabler--info-circle]"
heroColor: "primary"
heroSize: "lg"

# Content
maxWidth: "max-w-4xl"

# Others
titleTemplate: ":title | Dux Theme"
sidebar: false
aside: false
footer: true

# SEO
head:
  - - meta
    - name: keywords
      content: "about,dux,vitepress,theme,documentation"
  - - meta
    - property: "og:title"
      content: "About Dux VitePress Theme"
  - - meta
    - property: "og:description"
      content: "Learn about the philosophy and features of Dux VitePress Theme"
---

# About Dux VitePress Theme

Dux VitePress Theme is a modern, elegant VitePress documentation theme designed for a great reading experience.

## Philosophy

- Clean and elegant visual hierarchy
- Fully responsive across devices
- Easy to use and configure
- Highly customizable

## Key Features

- 🎨 Modern design
- 📱 Responsive
- 🌙 Dark mode
- 🔍 Local search
- 🌐 Internationalization
- ⚡ High performance

## License

MIT licensed.
```