<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Setting, ArrowDown } from '@element-plus/icons-vue'

const { locale } = useI18n()

// 切换语言
function changeLang(lang: 'zh' | 'en') {
  locale.value = lang
  localStorage.setItem('lang', lang)
}

// 初始化读取本地存储
function initLang() {
  const cache = localStorage.getItem('lang') as 'zh' | 'en'
  if (cache === 'zh' || cache === 'en') {
    locale.value = cache
  }
}
initLang()
</script>

<template>
  <div class="lang-switcher">
    <el-dropdown @command="changeLang">
      <span class="dropdown-trigger">
        <el-icon>
          <Setting />
        </el-icon>
        <span class="lang-text">{{ locale === 'zh' ? '中文' : 'English' }}</span>
        <el-icon class="el-icon--right">
          <ArrowDown />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="zh" :disabled="locale === 'zh'">
            中文
          </el-dropdown-item>
          <el-dropdown-item command="en" :disabled="locale === 'en'">
            English
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped>
.lang-switcher {
  display: flex;
  align-items: center;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  margin: 0;
}

.dropdown-trigger:hover {
  color: #e6e6e6;
}

:deep(.el-icon) {
  color: #fff;
}

:deep(.el-dropdown) {
  border: none;
}

:deep(.el-dropdown__caret-button) {
  border-left: none;
  background: transparent;
}

:deep(.el-dropdown__caret-button:hover) {
  background: transparent;
}
</style>