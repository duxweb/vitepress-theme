<script setup lang="ts">
import { computed } from 'vue'
import { useLink } from '../../composables/useLink'

// 定义按钮接口
interface HeroAction {
  text: string
  link: string
  theme?: 'brand' | 'alt'
  target?: string
}

// 定义 Hero 配置接口
interface HeroConfig {
  name?: string
  text?: string
  tagline?: string
  subtitle?: string
  image?: {
    src: string
    alt?: string
  } | false
  actions?: HeroAction[]
  mockUrl?: string  // 模拟浏览器地址栏的 URL
}

// 定义 Props
interface Props {
  hero: HeroConfig
}

const props = defineProps<Props>()
const { resolveLink, resolveAsset } = useLink()

// 使用 computed 使 actions 响应式
const processedActions = computed(() => 
  props.hero.actions?.map((action: HeroAction) => ({
    ...action,
    primary: action.theme === 'brand',
    href: resolveLink(action.link)
  })) || []
)

// 模拟URL也使用 computed
const mockUrl = computed(() => props.hero.mockUrl || 'vitepress.dev')
</script>

<template>
  <section v-if="hero.name || hero.text || hero.tagline" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-primary-100/50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800/50 dark:to-primary-950/30">
    <!-- 背景装饰元素 -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-32 w-80 h-80 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-32 w-96 h-96 bg-primary-300/15 dark:bg-primary-700/15 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/10 to-primary-200/10 dark:from-primary-900/10 dark:to-primary-800/10 rounded-full blur-3xl"></div>
    </div>
    
    <div class="container-section py-20 text-center z-1">
      <!-- 标签徽章 -->
      <div v-if="hero.subtitle" class="fade-in mb-8">
        <div class="badge-primary">
          <div class="icon-[heroicons--bolt] w-4 h-4 text-primary-600 dark:text-primary-400 mr-2"></div>
          <span class="text-sm font-medium text-primary-700 dark:text-primary-300">{{ hero.subtitle }}</span>
        </div>
      </div>

      <!-- 主标题 -->
      <div class="fade-in space-y-4 mb-8">
        <h1 class="text-hero-title">
          <span class="block text-primary-gradient mb-2">
            {{ hero.name }}
          </span>
        </h1>
        
        <p v-if="hero.text" class="max-w-3xl mx-auto font-medium text-2xl text-muted">
          {{ hero.text }}
        </p>

        <p v-if="hero.tagline" class="max-w-3xl mx-auto text-xl text-muted opacity-50">
          {{ hero.tagline }}
        </p>
      </div>

      <!-- 操作按钮 -->
      <div v-if="processedActions.length > 0" class="scale-in flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a 
          v-for="action in processedActions"
          :key="action.text"
          :href="action.href"
          :target="action.target || '_self'"
          :rel="action.target === '_blank' ? 'noopener noreferrer' : undefined"
          :class="action.primary ? 'btn-primary group' : 'btn-secondary group'"
        >
          <template v-if="action.primary">
            {{ action.text }}
            <div class="icon-[heroicons--arrow-right] ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"></div>
          </template>
          <template v-else>
            <div class="icon-[heroicons--code-bracket] mr-2 w-5 h-5"></div>
            {{ action.text }}
          </template>
        </a>
      </div>

      <!-- 产品截图展示区 -->
      <div v-if="hero.hasOwnProperty('image')" class="scale-in max-w-5xl mx-auto">
        <div class="relative group">
          <!-- 模拟浏览器窗口 -->
          <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
            <!-- 浏览器标题栏 -->
            <div class="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div class="flex-1 max-w-md mx-4">
                <div class="bg-white dark:bg-gray-600 rounded-md px-3 py-1 text-sm text-gray-600 dark:text-gray-300 text-center">
                  {{ mockUrl }}
                </div>
              </div>
              <div class="w-16"></div>
            </div>
            
            <!-- 图片内容或占位符 -->
            <div class="aspect-[16/8]">
              <!-- 实际图片 -->
              <img 
                v-if="hero.image && hero.image.src"
                :src="resolveAsset(hero.image.src)" 
                :alt="hero.image.alt || ''" 
                class="w-full h-full object-cover"
              />
              
              <!-- 占位符 - 当 image 为 false 时显示 -->
              <div v-else class="w-full h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 flex flex-col">
                <!-- 页面头部 -->
                <div class="text-center mb-8">
                  <div class="h-8 bg-gray-200 dark:bg-gray-600 rounded w-64 mx-auto mb-3"></div>
                  <div class="h-4 bg-gray-100 dark:bg-gray-700 rounded w-80 mx-auto"></div>
                </div>
                
                <!-- 导航栏模拟 -->
                <div class="flex justify-center space-x-8 mb-8">
                  <div class="h-3 bg-primary-500 rounded w-12"></div>
                  <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
                  <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-14"></div>
                  <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-18"></div>
                </div>
                
                <!-- 内容区域 -->
                <div class="flex-1 grid grid-cols-3 gap-6">
                  <div class="space-y-3">
                    <div class="h-4 bg-primary-200 dark:bg-primary-800 rounded"></div>
                    <div class="h-3 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div class="h-3 bg-gray-200 dark:bg-gray-600 rounded w-4/5"></div>
                    <div class="h-3 bg-gray-100 dark:bg-gray-700 rounded w-3/5"></div>
                  </div>
                  <div class="space-y-3">
                    <div class="h-4 bg-primary-200 dark:bg-primary-800 rounded"></div>
                    <div class="h-3 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div class="h-3 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                    <div class="h-3 bg-gray-100 dark:bg-gray-700 rounded w-2/3"></div>
                  </div>
                  <div class="space-y-3">
                    <div class="h-4 bg-primary-200 dark:bg-primary-800 rounded"></div>
                    <div class="h-3 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div class="h-3 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                    <div class="h-3 bg-gray-100 dark:bg-gray-700 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 悬停效果 -->
          <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/5 to-primary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>