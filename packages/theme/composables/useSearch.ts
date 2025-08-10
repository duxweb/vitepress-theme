import { ref, watch } from 'vue'
import MiniSearch from 'minisearch'
import type { Ref } from 'vue'

// 重要说明：不要对 `./search.data` 进行静态导入。
// 当主题作为已发布包放在 node_modules 中时，VitePress 可能不会对
// 依赖里的 `.data.ts` 应用转换（createContentLoader 仅在源码内被处理），
// 这会导致客户端运行时报错。这里改为“按需动态导入”，并在失败时优雅降级。

let docsDataCache: SearchResult[] | null = null

async function loadDocsData(): Promise<SearchResult[]> {
  if (docsDataCache) return docsDataCache

  // 1) 优先尝试从主题内置的 `./search.data` 加载（在 monorepo 或配置了 noExternal 时可用）
  try {
    const mod: any = await import('./search.data')
    const loaded = (mod?.data ?? mod?.default ?? []) as SearchResult[]
    docsDataCache = loaded
    return docsDataCache
  } catch {}

  // 2) 回退：尝试从站点源码侧加载（无需配置，只需在项目里新建该文件）
  //    因为它位于站点源码中，VitePress 一定会对其进行 `.data` 转换。
  //    你可以在你的项目创建：`/.vitepress/search.data.ts`，内容与主题内置版本一致即可。
  try {
    // 避免在打包时被 Rollup 解析为静态字符串导入（保持动态）
    let siteSpec: string | undefined
    try {
      // 允许用户通过 data-attr 指定自定义路径（可选）
      siteSpec = (document as any)?.documentElement?.getAttribute?.('data-vp-search')
    } catch {}
    siteSpec = siteSpec || '/.vitepress/search.data.ts'
    // @ts-ignore - 运行时由 Vite 处理解析
    const modSite: any = await import(/* @vite-ignore */ siteSpec)
    const loaded = (modSite?.data ?? modSite?.default ?? []) as SearchResult[]
    docsDataCache = loaded
    return docsDataCache
  } catch {}

  // 3) 最终降级：返回空数据，搜索功能将不会报错但没有结果。
  //    想获得完整搜索功能，请在使用方配置：
  //    vite: { ssr: { noExternal: ['@duxweb/vitepress-theme'] } }
  console.warn('[vitepress-theme] 搜索数据未就绪，已回退为空索引。建议配置 vite.ssr.noExternal 或在站点内创建 /.vitepress/search.data.ts')
  docsDataCache = []
  return docsDataCache
}

// 搜索结果接口
export interface SearchResult {
  id: string
  title: string
  text: string
  url: string
  section?: string
}

// 搜索状态
export const isSearchOpen = ref(false)
export const searchQuery = ref('')
export const searchResults: Ref<SearchResult[]> = ref([])
export const selectedIndex = ref(0)
export const searchIndex = ref<MiniSearch<SearchResult> | null>(null)
export const isLoading = ref(false)

// 初始化搜索索引
export async function initSearchIndex() {
  if (searchIndex.value) return
  
  isLoading.value = true
  
  try {
    // 创建 MiniSearch 实例，使用 VitePress 默认配置
    searchIndex.value = new MiniSearch<SearchResult>({
      fields: ['title', 'text', 'section'],
      storeFields: ['title', 'text', 'url', 'section']
    })
    
    // 动态加载文档数据（若 transform 未生效则为空数组）
    const docs = await loadDocsData()
    if (docs?.length) {
      searchIndex.value.addAll(docs as any)
    }
  } catch (error) {
    console.error('Failed to initialize search index:', error)
  } finally {
    isLoading.value = false
  }
}

// 执行搜索
export function performSearch(query: string) {
  if (!searchIndex.value || !query.trim()) {
    searchResults.value = []
    return
  }

  try {
    // 使用 VitePress 默认搜索配置
    const results = searchIndex.value.search(query, {
      fuzzy: 0.2,
      prefix: true,
      boost: { 
        title: 4, 
        text: 2, 
        section: 1 
      }
    })

    searchResults.value = results.map(result => ({
      id: result.id,
      title: result.title,
      text: result.text, 
      url: result.url,
      section: result.section
    }))
  } catch (error) {
    console.error('Search error:', error)
    searchResults.value = []
  }

  selectedIndex.value = 0
}

// 打开搜索
export function openSearch() {
  isSearchOpen.value = true
  searchQuery.value = ''
  searchResults.value = []
  selectedIndex.value = 0
  
  // 初始化索引（如果还没有初始化）
  if (!searchIndex.value) {
    initSearchIndex()
  }
}

// 关闭搜索
export function closeSearch() {
  isSearchOpen.value = false
  searchQuery.value = ''
  searchResults.value = []
  selectedIndex.value = 0
}

// 选择搜索结果
export function selectResult(index: number, navigate?: (url: string) => void) {
  const result = searchResults.value[index]
  
  if (result) {
    if (navigate) {
      navigate(result.url)
    } else {
      // 使用原生方式跳转
      window.location.href = result.url
    }
    closeSearch()
  }
}

// 键盘导航
export function navigateResults(direction: 'up' | 'down') {
  if (direction === 'up' && selectedIndex.value > 0) {
    selectedIndex.value--
  } else if (direction === 'down' && selectedIndex.value < searchResults.value.length - 1) {
    selectedIndex.value++
  }
}

// 监听搜索查询变化
watch(searchQuery, (query) => {
  performSearch(query)
})
