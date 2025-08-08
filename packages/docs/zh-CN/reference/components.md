# Markdown 扩展

## 提示容器

### 输入

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

### 输出

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

### 自定义标题

你可以通过在容器的 "类型" 之后附加文本来设置自定义标题。

#### 输入

```md
::: danger STOP
危险区域，请勿继续
:::

::: details 点击查看代码
```js
console.log('Hello, VitePress!')
```
:::
```

#### 输出

::: danger STOP
危险区域，请勿继续
:::

::: details 点击查看代码
```js
console.log('Hello, VitePress!')
```
:::

## 代码块

### 语法高亮

VitePress 使用 [Shiki](https://github.com/shikijs/shiki) 在 Markdown 代码块中使用彩色文本实现语法高亮。Shiki 支持多种编程语言。你需要做的就是将有效的语言别名附加到代码块的开头：

#### 输入

````md
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

#### 输出

```js
export default {
  name: 'MyComponent',
  // ...
}
```

### 行高亮

#### 输入

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

#### 输出

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单行之外，你还可以指定多个单行、多行，或两者均指定：

- 多行：例如 `{5-8}`、`{3-10}`、`{10-17}`
- 多个单行：例如 `{4,7,9}`
- 多行与单行：例如 `{4,7-13,16,23-27,40}`

#### 输入

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

#### 输出

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

### 代码块中的焦点

在某行上添加 `// [!code focus]` 注释将聚焦它，并模糊代码的其他部分。

此外，你可以使用 `// [!code focus:<lines>]` 定义要聚焦的行数。

#### 输入

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

#### 输出

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

### 代码块中的颜色差异

在某行添加 `// [!code --]` 或 `// [!code ++]` 注释将会为该行创建 diff，同时保留代码块的颜色。

#### 输入

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

#### 输出

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

### 错误和警告

在某行添加 `// [!code warning]` 或 `// [!code error]` 注释将会为该行相应地着色。

#### 输入

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

#### 输出

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

### 行号

你可以通过以下配置为每个代码块启用行号：

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

你可以在你的代码块中添加 `:line-numbers` / `:no-line-numbers` 标记来覆盖在配置中的设置。

#### 输入

````md
```ts {1}
// 默认禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

#### 输出

```ts {1}
// 默认禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

## 代码组

你可以将多个代码块分组：

#### 输入

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

#### 输出

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

## Markdown 文件包含

你可以在一个 Markdown 文件中包含另一个 Markdown 文件，甚至是嵌套的。

::: tip
你也可以使用 `@` 为包含路径添加前缀，该路径将相对于项目根目录进行解析。例如，你可以使用 `<!--@include: @/foo.md-->` 从相对于 `docs` 目录的项目根目录包含文件。
:::

**输入**

```md
# Docs

## 基础

<!--@include: ./parts/basics.md-->
```

**文件部分** (`parts/basics.md`)

```md
一些基础内容。

### 配置

可以使用 `.foorc.json` 创建配置。
```

**等效代码**

```md
# Docs

## 基础

一些基础内容。

### 配置

可以使用 `.foorc.json` 创建配置。
```

## Badge 徽章

### 输入

```html
Title <Badge type="info" text="default" />
Title <Badge type="tip" text="^1.9.0" />
Title <Badge type="warning" text="beta" />
Title <Badge type="danger" text="caution" />
```

### 输出

Title <Badge type="info" text="default" />
Title <Badge type="tip" text="^1.9.0" />
Title <Badge type="warning" text="beta" />
Title <Badge type="danger" text="caution" />

## 表格

### 输入

```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

### 输出

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Emoji 🎉

### 输入

```md
:tada: :100:
```

### 输出

:tada: :100:

[这里](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) 可以找到所有支持的 emoji 列表。

## 目录

### 输入

```md
[[toc]]
```

### 输出

[[toc]]

## 自定义容器

自定义容器可以通过它们的类型、标题和内容来定义。

### 默认标题

#### 输入

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

#### 输出

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

### 自定义标题

你可以通过在容器类型后面添加文本来设置自定义标题。

#### 输入

````md
::: danger STOP
危险区域，请勿继续
:::

::: details 点击查看代码
```js
console.log('Hello, VitePress!')
```
:::
````

#### 输出

::: danger STOP
危险区域，请勿继续
:::

::: details 点击查看代码
```js
console.log('Hello, VitePress!')
```
:::

### `raw`

这是一个特殊的容器，可以用来防止与 VitePress 的样式和路由冲突。这在记录组件库时特别有用。你可能还想查看 [whyframe](https://whyframe.dev/docs/integrations/vitepress) 以获得更好的隔离。

#### 语法

```md
::: raw
Wraps in a <div class="vp-raw">
:::
```

`vp-raw` 类也可以直接用于元素。样式隔离目前是可选的：

::: details

- 使用你喜欢的包管理器安装 `postcss`：

  ```sh
  $ npm add -D postcss
  ```

- 创建一个名为 `docs/postcss.config.mjs` 的文件，并将以下内容添加到其中：

  ```js
  import { postcssIsolateStyles } from 'vitepress'

  export default {
    plugins: [postcssIsolateStyles()]
  }
  ```

  它在底层使用 [`postcss-prefix-selector`](https://github.com/postcss/postcss-load-config)。你可以像这样传递它的选项：

  ```js
  postcssIsolateStyles({
    includeFiles: [/vp-doc\.css/] // 默认为 /base\.css/
  })
  ```

:::

## GitHub 风格的警报

VitePress 同样支持 [GitHub 风格的警报](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)，以突出显示关键信息。它们的渲染方式与[提示容器](#custom-containers)相同。

### 输入

```md
> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。
```

### 输出

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。