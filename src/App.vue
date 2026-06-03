<script setup lang="ts">
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import Navbar from "./components/Navbar.vue";
const { locale } = useI18n()

// 自动跟着 i18n 切换
const elementLocale = computed(() => {
  return locale.value === 'zh' ? zhCn : en
})
</script>

<template>
  <el-config-provider namespace="ep"  :locale="elementLocale">
<!--    <BaseHeader />-->
    <Navbar />
    <div class="main-container flex">

      <div w="full" py="4">
        <RouterView />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 4px);
}
</style>
