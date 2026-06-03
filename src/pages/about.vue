<template>
  <div class="about-page">
    <h1>{{ $t('aboutTitle') }}</h1>
    
    <div class="about-container">
      <el-card class="about-card">
        <template #header>
          <div class="about-header">
            <h2>{{ $t('companyInfo') }}</h2>
          </div>
        </template>
        
        <div class="about-content">
          <p>{{ $t('aboutContent') }}</p>
          
          <div class="features-list">
            <h3>项目特点</h3>
            <ul>
              <li>基于 Vue 3 和 Composition API</li>
              <li>使用 Element Plus UI 组件库</li>
              <li>支持 M3U8 视频播放</li>
              <li>多语言国际化支持</li>
              <li>响应式设计，支持移动端</li>
              <li>使用 Vite 构建工具</li>
            </ul>
          </div>
        </div>
      </el-card>
      
      <el-card class="contact-card">
        <template #header>
          <div class="contact-header">
            <h2>{{ $t('contactUs') }}</h2>
          </div>
        </template>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <el-icon :size="20" class="contact-icon">
                <Message />
              </el-icon>
              <div class="contact-details">
                <h4>{{ $t('email') }}</h4>
                <p>contact@example.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <el-icon :size="20" class="contact-icon">
                <Phone />
              </el-icon>
              <div class="contact-details">
                <h4>{{ $t('phone') }}</h4>
                <p>+86 123-4567-8900</p>
              </div>
            </div>
            
            <div class="contact-item">
              <el-icon :size="20" class="contact-icon">
                <Location />
              </el-icon>
              <div class="contact-details">
                <h4>{{ $t('address') }}</h4>
                <p>北京市朝阳区某某路 123 号</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h3>发送消息</h3>
            <el-form :model="contactForm" label-width="80px">
              <el-form-item label="姓名">
                <el-input v-model="contactForm.name" placeholder="请输入您的姓名" />
              </el-form-item>
              
              <el-form-item label="邮箱">
                <el-input v-model="contactForm.email" placeholder="请输入您的邮箱" />
              </el-form-item>
              
              <el-form-item label="消息">
                <el-input
                  v-model="contactForm.message"
                  type="textarea"
                  :rows="4"
                  placeholder="请输入您的消息"
                />
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary" @click="submitContactForm">
                  发送
                </el-button>
                <el-button @click="resetContactForm">
                  重置
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-card>
      
      <el-card class="tech-card">
        <template #header>
          <div class="tech-header">
            <h2>技术栈</h2>
          </div>
        </template>
        
        <div class="tech-content">
          <div class="tech-grid">
            <div class="tech-item" v-for="tech in technologies" :key="tech.name">
              <div class="tech-icon">
                <el-icon :size="30">
                  <component :is="tech.icon" />
                </el-icon>
              </div>
              <div class="tech-info">
                <h4>{{ tech.name }}</h4>
                <p>{{ tech.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Message, Phone, Location } from '@element-plus/icons-vue'

interface ContactForm {
  name: string
  email: string
  message: string
}

interface Technology {
  name: string
  description: string
  icon: any
}

const contactForm = ref<ContactForm>({
  name: '',
  email: '',
  message: ''
})

const technologies = ref<Technology[]>([
  { name: 'Vue 3', description: '渐进式 JavaScript 框架', icon: 'Brush' },
  { name: 'Element Plus', description: '基于 Vue 3 的组件库', icon: 'Tools' },
  { name: 'Vite', description: '下一代前端构建工具', icon: 'VideoPlay' },
  { name: 'TypeScript', description: 'JavaScript 的超集', icon: 'Globe' },
  { name: 'i18n', description: '国际化解决方案', icon: 'Globe' },
  { name: 'M3U8', description: 'HTTP Live Streaming', icon: 'VideoPlay' }
])

const submitContactForm = () => {
  console.log('提交联系表单:', contactForm.value)
  ElMessage.success('消息发送成功！')
  resetContactForm()
}

const resetContactForm = () => {
  contactForm.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.about-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-card,
.contact-card,
.tech-card {
  margin-bottom: 20px;
}

.about-header h2,
.contact-header h2,
.tech-header h2 {
  margin: 0;
  color: #333;
}

.about-content {
  color: #333;
  line-height: 1.8;
}

.features-list {
  margin-top: 20px;
}

.features-list h3 {
  margin-bottom: 10px;
  color: #333;
}

.features-list ul {
  list-style-type: none;
  padding-left: 0;
}

.features-list li {
  padding: 5px 0;
  color: #666;
  position: relative;
  padding-left: 20px;
}

.features-list li:before {
  content: '✓';
  color: #409eff;
  position: absolute;
  left: 0;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.contact-icon {
  color: #409eff;
  margin-top: 4px;
}

.contact-details h4 {
  margin: 0 0 5px 0;
  color: #333;
}

.contact-details p {
  margin: 0;
  color: #666;
}

.contact-form h3 {
  margin-bottom: 20px;
  color: #333;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tech-icon {
  color: #409eff;
}

.tech-info h4 {
  margin: 0 0 5px 0;
  color: #333;
}

.tech-info p {
  margin: 0;
  color: #666;
  font-size: 13px;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>