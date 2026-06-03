<template>
  <div class="nav-wrapper">
    <!-- 桌面端横向菜单 -->
    <el-menu
        v-show="!isMobile"
        mode="horizontal"
        default-active="/"
        class="nav-menu"
        background-color="#1d2129"
        text-color="#fff"
        active-text-color="#409eff"
    >
      <div class="logo">Element Plus 后台</div>
      <el-menu-item index="/">首页</el-menu-item>
      <el-sub-menu index="1">
        <template #title>功能管理</template>
        <el-menu-item index="/1-1">菜单1</el-menu-item>
        <el-menu-item index="/1-2">菜单2</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/2">系统设置</el-menu-item>
      <el-menu-item index="/3">关于我们</el-menu-item>
    </el-menu>

    <!-- 移动端菜单按钮 -->
    <div class="mobile-header" v-show="isMobile">
      <div class="logo">Element Plus 后台</div>
      <el-icon size="24" color="#fff" @click="isCollapse = !isCollapse">
        <Menu />
      </el-icon>
    </div>

    <!-- 移动端折叠菜单 -->
    <el-menu
        v-show="isMobile && isCollapse"
        mode="vertical"
        default-active="/"
        class="mobile-menu"
        background-color="#1d2129"
        text-color="#fff"
        active-text-color="#409eff"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-sub-menu index="1">
        <template #title>功能管理</template>
        <el-menu-item index="/1-1">菜单1</el-menu-item>
        <el-menu-item index="/1-2">菜单2</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/2">系统设置</el-menu-item>
      <el-menu-item index="/3">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu } from '@element-plus/icons-vue'

const isMobile = ref(false)
const isCollapse = ref(false)

// 判断屏幕尺寸
const checkScreen = () => {
  isMobile.value = window.innerWidth < 768
  if (!isMobile.value) isCollapse.value = false
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
  background: #1d2129;
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
</style>