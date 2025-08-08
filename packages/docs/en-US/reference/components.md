# Markdown Extensions

## Info Containers

### Input

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

### Output

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Custom Titles

You can set a custom title by appending text after the container type.

#### Input

```md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click to view code
```js
console.log('Hello, VitePress!')
```
:::
```

#### Output

::: danger STOP
Danger zone, do not proceed
:::

::: details Click to view code
```js
console.log('Hello, VitePress!')
```
:::

## Code Blocks

### Syntax Highlighting

VitePress uses [Shiki](https://github.com/shikijs/shiki) for syntax highlighting in code fences. Shiki supports many languages. Simply add a valid language alias to the fence:

#### Input

````md
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

#### Output

```js
export default {
  name: 'MyComponent',
  // ...
}
```

### Line Highlighting

#### Input

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

#### Output

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

Besides single-line highlighting, you can specify multiple single lines, ranges, or both:

- Ranges: `{5-8}`, `{3-10}`, `{10-17}`
- Multiple single lines: `{4,7,9}`
- Mixed: `{4,7-13,16,23-27,40}`

#### Input

````md
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

#### Output

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

### Focus in Code Blocks

Add `// [!code focus]` to focus a line and blur the rest. Use `// [!code focus:<lines>]` to focus a block.

#### Input

````md
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```
````

#### Output

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

### Colored Diffs in Code Blocks

Add `// [!code --]` or `// [!code ++]` to mark removed/added lines while keeping highlight colors.

#### Input

````md
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```
````

#### Output

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

### Errors and Warnings

Add `// [!code warning]` or `// [!code error]` to color specific lines.

#### Input

````md
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```
````

#### Output

```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

### Line Numbers

Enable line numbers globally:

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

Override per block using `:line-numbers` / `:no-line-numbers`:

#### Input

````md
```ts {1}
// Line numbers disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// Enable line numbers
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

#### Output

```ts {1}
// Line numbers disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// Enable line numbers
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

## Code Groups

Group multiple code blocks:

#### Input

````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````

#### Output

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

## Markdown Includes

You can include one Markdown file into another, even nested.

::: tip
You can also use `@` as a path prefix relative to the project root. For example, `<!--@include: @/foo.md-->` includes a file from the project root relative to `docs`.
:::

**Input**

```md
# Docs

## Basics

<!--@include: ./parts/basics.md-->
```

**Included file** (`parts/basics.md`)

```md
Some basic content.

### Configuration

Create config with `.foorc.json`.
```

**Equivalent output**

```md
# Docs

## Basics

Some basic content.

### Configuration

Create config with `.foorc.json`.
```

## Badges

### Input

```html
Title <Badge type="info" text="default" />
Title <Badge type="tip" text="^1.9.0" />
Title <Badge type="warning" text="beta" />
Title <Badge type="danger" text="caution" />
```

### Output

Title <Badge type="info" text="default" />
Title <Badge type="tip" text="^1.9.0" />
Title <Badge type="warning" text="beta" />
Title <Badge type="danger" text="caution" />

## Tables

### Input

```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

### Output

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Emoji 🎉

### Input

```md
:tada: :100:
```

### Output

:tada: :100:

See the full emoji list [here](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json).

## Table of Contents

### Input

```md
[[toc]]
```

### Output

[[toc]]

## Custom Containers

Define containers by type, title, and content.

### Default Titles

#### Input

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

#### Output

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### `raw`

A special container to avoid style and router conflicts with VitePress. This is useful when documenting component libraries. Consider [whyframe](https://whyframe.dev/docs/integrations/vitepress) for better isolation.

#### Syntax

```md
::: raw
Wraps in a <div class="vp-raw">
:::
```

`vp-raw` can be applied directly. Style isolation is optional:

::: details

- Install `postcss` with your package manager:

  ```sh
  $ npm add -D postcss
  ```

- Create `docs/postcss.config.mjs` with:

  ```js
  import { postcssIsolateStyles } from 'vitepress'

  export default {
    plugins: [postcssIsolateStyles()]
  }
  ```

  It uses [`postcss-prefix-selector`](https://github.com/postcss/postcss-load-config) under the hood. You can pass its options:

  ```js
  postcssIsolateStyles({
    includeFiles: [/vp-doc\.css/] // default is /base\.css/
  })
  ```

:::

## GitHub-style Alerts

VitePress also supports [GitHub-style alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts), rendered similarly to [Custom Containers](#custom-containers).

### Input

```md
> [!NOTE]
> Important information that should not be missed.
>
> [!TIP]
> Helpful suggestions for users to achieve their goals.
>
> [!IMPORTANT]
> Crucial information for achieving goals.
>
> [!WARNING]
> Requires immediate attention due to potential risk.
>
> [!CAUTION]
> Possible negative impact.
```

### Output

> [!NOTE]
> Important information that should not be missed.
>
> [!TIP]
> Helpful suggestions for users to achieve their goals.
>
> [!IMPORTANT]
> Crucial information for achieving goals.
>
> [!WARNING]
> Requires immediate attention due to potential risk.
>
> [!CAUTION]
> Possible negative impact.
