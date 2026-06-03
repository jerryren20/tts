<template>
  <div class="nav-wrapper">
    <!-- 桌面端横向菜单 -->
    <el-menu
      v-show="!isMobile"
      mode="horizontal"
      :default-active="defaultActive"
      @select="handleSelect"
      class="nav-menu"
      background-color="#409eff"
      text-color="#fff"
      active-text-color="#1d2129"
    >
      <div class="logo">M3U8 Video Player</div>
      <el-menu-item index="/"> {{ $t('home') }}</el-menu-item>
      <el-menu-item index="/convert">{{ $t('videoConvert') }}</el-menu-item>
      <el-menu-item index="/articles">{{ $t('articles') }}</el-menu-item>
      <el-menu-item index="/about">{{ $t('about') }}</el-menu-item>
      <div class="language-switcher">
        <LanguageSwitcher />
      </div>
    </el-menu>

    <!-- 移动端菜单按钮 -->
    <div class="mobile-header" v-show="isMobile">
      <div class="logo">M3U8 Video Player</div>
      <el-icon size="24" color="#fff" @click="isCollapse = !isCollapse">
        <Menu />
      </el-icon>
    </div>

    <!-- 移动端折叠菜单 -->
    <el-menu
      v-show="isMobile && isCollapse"
      mode="vertical"
      :default-active="defaultActive"
      @select="handleSelect"
      class="mobile-menu"
      background-color="#409eff"
      text-color="#fff"
      active-text-color="#1d2129"
    >
      <el-menu-item index="/"> {{ $t('home') }}</el-menu-item>
      <el-menu-item index="/convert">{{ $t('videoConvert') }}</el-menu-item>
      <el-menu-item index="/articles">{{ $t('articles') }}</el-menu-item>
      <el-menu-item index="/about">{{ $t('about') }}</el-menu-item>
      <div class="language-switcher">
        <LanguageSwitcher />
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const isMobile = ref(false)
const isCollapse = ref(false)

// 判断屏幕尺寸
const checkScreen = () => {
  isMobile.value = window.innerWidth < 768
  if (!isMobile.value) isCollapse.value = false
}

// 当前激活的菜单项
const defaultActive = computed(() => {
  return route.path
})

// 菜单项点击事件
const handleSelect = (index: string) => {
  router.push(index)
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen)
})
</script>

<style scoped>
.nav-wrapper {
  width: 100%;
  background: #409eff;
}

/* 桌面菜单 */
.nav-menu {
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: none;
}

.logo {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}

/* 移动端头部 */
.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 16px;
}

/* 移动端菜单 */
.mobile-menu {
  position: absolute;
  width: 100%;
  z-index: 999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

:deep(.el-menu) {
  height: 60px;
}

:deep(.el-sub-menu__title) {
  height: 60px !important;
  line-height: 60px !important;
}

:deep(.el-menu-item) {
  height: 60px !important;
  line-height: 60px !important;
}

.language-switcher {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
</style>