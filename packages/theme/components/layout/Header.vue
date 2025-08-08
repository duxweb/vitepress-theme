<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useData, useRouter } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'
import SearchButton from '../search/SearchButton.vue'
import SocialIcons from '../common/SocialIcons.vue'
import NavDropdown from '../common/NavDropdown.vue'
import { useLocale } from '../../composables/useLocale'
import { useLink } from '../../composables/useLink'

// 使用 VitePress 的 useData 获取主题数据
const { isDark, site, theme, localeIndex } = useData()
const router = useRouter()
const ui = useLocale('ui')
const { resolveLink } = useLink()

// 安全访问 UI 文本的计算属性
const uiTexts = computed(() => ({
  switchTheme: {
    dark: ui.value?.switchTheme?.dark || 'Switch to dark mode',
    light: ui.value?.switchTheme?.light || 'Switch to light mode'
  },
  language: {
    ariaLabel: ui.value?.language?.ariaLabel || 'language',
    switchLanguage: ui.value?.language?.switchLanguage || 'Switch language'
  }
}))

// 定义 Props（保持向后兼容）
interface Props {
  themeConfig?: DefaultTheme.Config
  site?: any
  isDark?: boolean
  lang?: string
}

const props = defineProps<Props>()

// 使用 VitePress 提供的数据，Props 作为后备
const themeConfig = computed(() => props.themeConfig || theme.value)
const siteData = computed(() => props.site || site.value)

// 计算站点标题
const siteTitle = computed(() => 
  themeConfig.value.siteTitle !== false 
    ? (themeConfig.value.siteTitle || siteData.value.title)
    : false
)

// 处理导航数据
const navItems = computed(() => themeConfig.value.nav || [])

// 处理 Logo - 先不传递图片
const logo = computed(() => null)

// 多语言相关
const locales = computed(() => site.value.locales || {})
const currentLocale = computed(() => {
  const locale = locales.value[localeIndex.value]
  if (!locale || typeof locale !== 'object') return null
  return locale as any
})

// 生成语言切换链接 - 直接跳转到对应语言首页
const localeLinks = computed(() => {
  const links: Array<{key: string, label: string, link: string}> = []
  
  for (const [key, locale] of Object.entries(locales.value)) {
    if (key !== localeIndex.value && locale && typeof locale === 'object') {
      // 直接跳转到对应语言的首页
      const link = key === 'root' ? '/' : `/${key}/`
      
      links.push({
        key,
        label: (locale as any).label || key,
        link: resolveLink(link)  // 使用 resolveLink 处理链接
      })
    }
  }
  return links
})

// 语言切换菜单状态
const showLangMenu = ref(false)
const langMenuRef = ref<HTMLElement>()

// 点击外部关闭语言菜单
const handleClickOutside = (event: MouseEvent) => {
  if (langMenuRef.value && !langMenuRef.value.contains(event.target as Node)) {
    showLangMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// 切换语言 - 直接使用链接导航
const switchLocale = (link: string) => {
  router.go(link)
  showLangMenu.value = false
}

// VitePress 官方主题切换功能，支持 View Transitions
const toggleDark = () => {
  // 检查是否支持 View Transitions API 和用户偏好
  const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

  if (!enableTransitions()) {
    // 直接切换，不使用动画
    isDark.value = !isDark.value
    return
  }
}

// 移动端菜单状态
const toggleMobileMenu = () => {
  const menu = document.getElementById('mobile-menu')
  menu?.classList.toggle('hidden')
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
    <div class="container mx-auto flex h-16 max-w-screen-2xl items-center px-4">
      <!-- Logo -->
      <div class="mr-4 flex">
        <a :href="resolveLink('/')" class="mr-6 flex items-center space-x-2">
          <img v-if="logo" :src="logo" alt="Logo" class="h-6 w-6" />
          <span v-if="siteTitle" class="hidden font-bold sm:inline-block">{{ siteTitle }}</span>
        </a>
      </div>

      <!-- Desktop navigation menu -->
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <template v-for="item in navItems" :key="item.text">
          <!-- 使用下拉菜单组件处理多级菜单 -->
          <NavDropdown :item="item" />
        </template>
      </nav>

      <!-- 右侧操作区 -->
      <div class="flex flex-1 items-center justify-end space-x-2">

        <!-- Search button -->
        <SearchButton class="hidden md:flex" />

        <!-- 语言切换器 -->
        <div v-if="Object.keys(locales).length > 1" class="relative" ref="langMenuRef">
          <button
            type="button"
            class="btn-ghost px-2 [w-2rem] h-[2rem]"
            @click="showLangMenu = !showLangMenu"
            :aria-label="currentLocale?.label || uiTexts.language.ariaLabel"
            :title="currentLocale?.label || uiTexts.language.switchLanguage"
          >
            <div class="icon-[heroicons--language] h-4 w-4"></div>
          </button>
          
          <!-- 语言下拉菜单 -->
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 transform scale-95 -translate-y-1"
            enter-to-class="opacity-100 transform scale-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 transform scale-100 translate-y-0"
            leave-to-class="opacity-0 transform scale-95 -translate-y-1"
          >
            <div 
              v-if="showLangMenu" 
              class="absolute right-0 top-full mt-2 py-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 origin-top-right z-50"
            >
              <button
                v-for="locale in localeLinks"
                :key="locale.key"
                @click="switchLocale(locale.link)"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-md last:rounded-b-md transition-colors duration-150"
              >
                {{ locale.label }}
              </button>
            </div>
          </Transition>
        </div>

        <!-- 社交链接 -->
        <SocialIcons variant="header" />

        <!-- 主题切换按钮 -->
        <button
          type="button"
          class="btn-ghost px-2 theme-toggle"
          @click="toggleDark"
          :aria-label="isDark ? uiTexts.switchTheme.light : uiTexts.switchTheme.dark"
        >
          <div class="icon-[tabler--sun] h-4 w-4 sun-icon"></div>
          <div class="icon-[tabler--moon] h-4 w-4 moon-icon"></div>
        </button>


        <!-- 移动端菜单按钮 -->
        <button
          type="button"
          class="btn-ghost px-2 [w-2rem] h-[2rem] md:hidden"
          @click="toggleMobileMenu"
        >
          <div class="icon-[heroicons--bars-3] h-4 w-4"></div>
        </button>
        
        
      </div>

    </div>

    

    <!-- Mobile navigation menu -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4 py-4 space-y-4">
        <!-- Mobile search button -->
        <SearchButton class="w-full" />
        
        <!-- Mobile navigation links -->
        <nav class="flex flex-col space-y-2">
          <template v-for="item in navItems" :key="item.text">
            <NavDropdown :item="item" />
          </template>
        </nav>
      </div>
    </div>
  </header>
</template>