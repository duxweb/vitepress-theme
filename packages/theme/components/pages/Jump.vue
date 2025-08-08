<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useData } from 'vitepress'
import { useLocale } from '../../composables/useLocale'

const { site, frontmatter } = useData()

// 使用语言包
const jumpTexts = useLocale('jump')

// 跳转配置 - 简化配置项
interface JumpConfig {
  delay?: number // 跳转延迟（毫秒）
  showManual?: boolean // 是否显示手动选择
}

// 从 frontmatter 获取配置，带默认值
const jumpConfig: JumpConfig = {
  delay: 1000,
  showManual: true,
  ...frontmatter.value.jump
}

const showManualSelect = ref(false)
const countdown = ref(Math.floor(jumpConfig.delay! / 1000))

// 获取所有可用语言 - 按配置顺序
const availableLocales = computed(() => {
  const locales = site.value.locales || {}
  return Object.entries(locales).map(([key, locale]) => ({
    key: key === 'root' ? '' : key,
    label: (locale as any).label || key,
    path: key === 'root' ? '/' : `/${key}/`
  }))
})

// 获取主语言和第二语言
const primaryLocale = computed(() => availableLocales.value[0])
const secondaryLocale = computed(() => availableLocales.value[1])

// 获取本地化文本 - 简化逻辑
const localizedTexts = computed(() => ({
  redirecting: jumpTexts.value?.redirecting || 'Redirecting to preferred language...',
  redirectingSecondary: jumpTexts.value?.redirectingSecondary || '',
  orChooseLanguage: jumpTexts.value?.orChooseLanguage || 'Or choose language',
  orChooseLanguageSecondary: jumpTexts.value?.orChooseLanguageSecondary || '',
  countdown: jumpTexts.value?.countdown || 's'
}))

// 检测用户语言偏好
const detectUserLanguage = (): string => {
  if (typeof window === 'undefined') return ''
  
  // 从 URL 参数获取
  const urlParams = new URLSearchParams(window.location.search)
  const urlLang = urlParams.get('lang')
  if (urlLang) return urlLang
  
  // 从 localStorage 获取
  const savedLang = localStorage.getItem('vitepress-preferred-lang')
  if (savedLang) return savedLang
  
  // 从浏览器语言获取
  const browserLang = navigator.language || navigator.languages?.[0]
  if (browserLang) {
    // 匹配完整语言代码 (zh-CN)
    const exactMatch = availableLocales.value.find((locale: any) => 
      locale.key === browserLang || locale.key === browserLang.replace('_', '-')
    )
    if (exactMatch) return exactMatch.key
    
    // 匹配语言前缀 (zh)
    const langPrefix = browserLang.split('-')[0]
    const prefixMatch = availableLocales.value.find((locale: any) => 
      locale.key.startsWith(langPrefix)
    )
    if (prefixMatch) return prefixMatch.key
  }
  
  // 默认返回第一个语言（root）
  return availableLocales.value[0]?.key || ''
}

// 执行跳转
const jumpToLocale = (locale: string) => {
  if (typeof window === 'undefined') return
  
  // 保存用户选择
  localStorage.setItem('vitepress-preferred-lang', locale)
  
  // 构建目标路径
  const targetPath = locale ? `/${locale}/` : '/'
  window.location.href = targetPath
}

// 手动选择语言
const selectLanguage = (locale: string) => {
  jumpToLocale(locale)
}

onMounted(() => {
  // 如果已经在某个语言路径下，不执行跳转
  if (window.location.pathname !== '/') return
  
  const targetLocale = detectUserLanguage()
  
  // 开始倒计时
  if (jumpConfig.delay! > 0) {
    const interval = setInterval(() => {
      countdown.value--
      if (countdown.value <= 0) {
        clearInterval(interval)
        jumpToLocale(targetLocale)
      }
    }, 1000)
    
    // 显示手动选择
    if (jumpConfig.showManual) {
      showManualSelect.value = true
    }
  } else {
    // 立即跳转
    jumpToLocale(targetLocale)
  }
})
</script>

<template>
  <div class="jump-layout min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50/30 to-primary-100/50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800/50 dark:to-primary-950/30">
    <!-- 背景装饰元素 -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-32 w-80 h-80 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-32 w-96 h-96 bg-primary-300/15 dark:bg-primary-700/15 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/10 to-primary-200/10 dark:from-primary-900/10 dark:to-primary-800/10 rounded-full blur-3xl"></div>
    </div>

    <div class="text-center z-10 max-w-md mx-auto px-6">
      <!-- Logo 或标题 -->
      <div class="mb-8">
        <div class="icon-[heroicons--globe-alt] w-16 h-16 text-primary-500 mx-auto mb-4"></div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {{ frontmatter.title || site.title }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          {{ frontmatter.description || site.description }}
        </p>
      </div>

      <!-- 跳转提示 -->
      <div class="mb-8">
        <div class="flex items-center justify-center mb-4">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
        </div>
        
        <p class="text-gray-700 dark:text-gray-300 mb-2">
          {{ localizedTexts.redirecting }}
        </p>
        <p v-if="localizedTexts.redirectingSecondary" class="text-sm text-gray-500 dark:text-gray-400">
          {{ localizedTexts.redirectingSecondary }}
        </p>
        
        <div v-if="countdown > 0" class="mt-4">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300">
            <div class="icon-[heroicons--clock] w-4 h-4 mr-2"></div>
            {{ countdown }}{{ localizedTexts.countdown }}
          </div>
        </div>
      </div>

      <!-- 手动语言选择 -->
      <Transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 transform scale-95 translate-y-4"
        enter-to-class="opacity-100 transform scale-100 translate-y-0"
      >
        <div v-if="showManualSelect" class="mt-8">
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span>{{ localizedTexts.orChooseLanguage }}</span>
            <span v-if="localizedTexts.orChooseLanguageSecondary" class="block text-xs mt-1">
              {{ localizedTexts.orChooseLanguageSecondary }}
            </span>
          </p>
          
          <div class="flex flex-wrap justify-center gap-3">
            <button
              v-for="locale in availableLocales"
              :key="locale.key"
              @click="selectLanguage(locale.key)"
              class="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all group"
            >
              <span class="text-gray-700 dark:text-gray-300 group-hover:text-primary-700 dark:group-hover:text-primary-300 font-medium">
                {{ locale.label }}
              </span>
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>