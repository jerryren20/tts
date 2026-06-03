<template>
  <div class="articles-page">
    <h1>{{ $t('articles') }}</h1>
    
    <div class="articles-container">
      <div class="articles-list">
        <h2>{{ $t('articleList') }}</h2>
        
        <div class="articles-grid">
          <el-card
            v-for="article in articles"
            :key="article.id"
            class="article-card"
            shadow="hover"
          >
            <template #header>
              <div class="article-header">
                <h3>{{ article.title }}</h3>
                <span class="article-date">{{ article.date }}</span>
              </div>
            </template>
            
            <div class="article-content-preview">
              {{ article.content.substring(0, 150) }}...
            </div>
            
            <template #footer>
              <div class="article-footer">
                <span class="article-category">{{ article.category }}</span>
                <el-button type="primary" text @click="viewArticle(article.id)">
                  {{ $t('readMore') }}
                </el-button>
              </div>
            </template>
          </el-card>
        </div>
      </div>
      
      <div class="article-detail" v-if="selectedArticle">
        <el-card class="detail-card">
          <template #header>
            <div class="detail-header">
              <h2>{{ selectedArticle.title }}</h2>
              <div class="detail-meta">
                <span class="detail-date">{{ selectedArticle.date }}</span>
                <span class="detail-category">{{ selectedArticle.category }}</span>
              </div>
            </div>
          </template>
          
          <div class="detail-content">
            {{ selectedArticle.content }}
          </div>
          
          <template #footer>
            <div class="detail-footer">
              <el-button @click="selectedArticle = null">
                返回列表
              </el-button>
            </div>
          </template>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Article {
  id: number
  title: string
  content: string
  date: string
  category: string
}

const articles = ref<Article[]>([
  {
    id: 1,
    title: 'Vue 3 新特性介绍',
    content: 'Vue 3 带来了许多新特性，包括 Composition API、更好的 TypeScript 支持、性能优化等。Composition API 使得代码组织更加灵活，特别是对于大型项目。',
    date: '2024-01-15',
    category: '前端开发'
  },
  {
    id: 2,
    title: 'Element Plus 使用指南',
    content: 'Element Plus 是基于 Vue 3 的组件库，提供了丰富的 UI 组件。本文介绍如何快速上手 Element Plus，包括安装、配置和使用常见组件。',
    date: '2024-01-20',
    category: 'UI 组件'
  },
  {
    id: 3,
    title: 'M3U8 视频播放技术',
    content: 'M3U8 是 HTTP Live Streaming 的播放列表格式，支持自适应码率流媒体。本文介绍如何在 Web 应用中实现 M3U8 视频播放，包括使用原生 video 标签和 hls.js 库。',
    date: '2024-01-25',
    category: '多媒体'
  },
  {
    id: 4,
    title: 'Vite 构建工具优化',
    content: 'Vite 是新一代的前端构建工具，提供了极快的冷启动和热更新。本文分享 Vite 项目的优化技巧，包括代码分割、预加载和构建配置优化。',
    date: '2024-01-30',
    category: '构建工具'
  },
  {
    id: 5,
    title: '国际化最佳实践',
    content: '在 Vue 3 项目中实现国际化需要考虑多方面因素，包括语言切换、日期时间格式化、数字格式化等。本文介绍使用 vue-i18n 的最佳实践。',
    date: '2024-02-05',
    category: '国际化'
  },
  {
    id: 6,
    title: '响应式设计原则',
    content: '响应式设计是现代 Web 开发的重要部分，确保网站在不同设备上都能良好显示。本文介绍响应式设计的基本原则和实现技巧。',
    date: '2024-02-10',
    category: 'UI/UX'
  }
])

const selectedArticle = ref<Article | null>(null)

const viewArticle = (id: number) => {
  selectedArticle.value = articles.value.find(article => article.id === id) || null
}
</script>

<style scoped>
.articles-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.articles-container {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.articles-list h2 {
  margin-bottom: 20px;
  color: #333;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.article-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.article-header h3 {
  margin: 0;
  font-size: 16px;
  color: #333;
  flex: 1;
}

.article-date {
  font-size: 12px;
  color: #999;
  white-space: nowrap;
  margin-left: 10px;
}

.article-content-preview {
  color: #666;
  line-height: 1.6;
  margin: 10px 0;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-category {
  font-size: 12px;
  color: #409eff;
  background: #ecf5ff;
  padding: 2px 8px;
  border-radius: 10px;
}

.article-detail {
  margin-top: 30px;
}

.detail-card {
  margin-bottom: 20px;
}

.detail-header {
  margin-bottom: 20px;
}

.detail-header h2 {
  margin: 0 0 10px 0;
  color: #333;
}

.detail-meta {
  display: flex;
  gap: 15px;
  color: #999;
  font-size: 14px;
}

.detail-content {
  color: #333;
  line-height: 1.8;
  font-size: 15px;
  white-space: pre-line;
}

.detail-footer {
  display: flex;
  justify-content: flex-end;
}
</style>