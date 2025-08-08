<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vitepress'

interface NavItem {
  text: string
  link?: string
  items?: NavItem[]
  target?: string
  activeMatch?: string
}

interface Props {
  item: NavItem
  depth?: number
}

const props = withDefaults(defineProps<Props>(), {
  depth: 0
})

const router = useRouter()
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement>()

// 判断是否有子菜单
const hasChildren = computed(() => {
  return props.item.items && props.item.items.length > 0
})

// 判断是否为外部链接
const isExternalLink = computed(() => {
  return props.item.link && /^https?:\/\//.test(props.item.link)
})

// 点击外部关闭下拉菜单
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

// 点击切换菜单
const toggleMenu = () => {
  if (hasChildren.value) {
    isOpen.value = !isOpen.value
  }
}

// 处理导航点击
const handleNavClick = (e: Event, item: NavItem) => {
  if (item.link && !isExternalLink.value) {
    e.preventDefault()
    router.go(item.link)
    isOpen.value = false
  }
}


onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div 
    class="nav-dropdown"
    :class="[`nav-dropdown-depth-${depth}`]"
    ref="dropdownRef"
  >
    <!-- 主菜单项 -->
    <button
      v-if="hasChildren"
      @click="toggleMenu"
      class="nav-dropdown-button"
      :aria-expanded="isOpen"
    >
      <span>{{ item.text }}</span>
    </button>
    
    <a
      v-else
      :href="item.link"
      :target="item.target || '_self'"
      :rel="item.target === '_blank' ? 'noopener noreferrer' : undefined"
      @click="handleNavClick($event, item)"
      class="nav-dropdown-link"
    >
      {{ item.text }}
      <div v-if="isExternalLink" class="nav-external-icon icon-[tabler--external-link]"></div>
    </a>

    <!-- 下拉菜单 -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 transform scale-95 -translate-y-2"
      enter-to-class="opacity-100 transform scale-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 transform scale-100 translate-y-0"
      leave-to-class="opacity-0 transform scale-95 -translate-y-2"
    >
      <div 
        v-if="hasChildren && isOpen" 
        class="nav-dropdown-menu"
        :class="[`nav-dropdown-menu-depth-${depth}`]"
      >
        <div class="nav-dropdown-menu-inner">
          <div
            v-for="(subItem, index) in item.items"
            :key="index"
            class="nav-dropdown-item"
          >
            <!-- 分组标题 -->
            <div v-if="!subItem.link && !subItem.items" class="nav-dropdown-group-title">
              {{ subItem.text }}
            </div>
            
            <!-- 递归渲染子菜单 -->
            <NavDropdown
              v-else
              :item="subItem"
              :depth="depth + 1"
            />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>