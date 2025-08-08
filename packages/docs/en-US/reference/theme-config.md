# Theme Configuration

Theme configuration options under `themeConfig` in `.vitepress/config.ts`.

## Basic Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `logo` | `string` | - | Navbar logo |
| `siteTitle` | `string | false` | - | Navbar title |
| `nav` | `NavItem[]` | `[]` | Top navigation |
| `sidebar` | `Sidebar` | - | Sidebar configuration |
| `search` | `SearchOptions` | - | Search options |
| `socialLinks` | `SocialLink[]` | `[]` | Social links |
| `footer` | `Footer` | - | Footer configuration |
| `editLink` | `EditLink` | - | Edit link configuration |
| `langs` | `LangConfig` | `{}` | Theme i18n strings |

## Language Texts

Dux-specific language text configuration:

```typescript
export default defineConfig({
  themeConfig: {
    langs: {
      notFound: {
        title: 'Page not found',
        content: "Sorry, we couldn't find what you're looking for.",
        backToHome: 'Back to home',
        previousPage: 'Go back'
      },
      sponsor: {
        selectPaymentMethod: 'Select Payment Method',
        recentSupporters: 'Recent Supporters',
        totalSupporters: 'Total Supporters',
        totalAmount: 'Total Amount'
      }
    }
  }
})
```