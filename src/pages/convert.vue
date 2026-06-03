<template>
  <div class="convert-page">
    <h1>{{ $t('videoConvert') }}</h1>
    
    <div class="convert-container">
      <el-card class="convert-card">
        <template #header>
          <div class="convert-header">
            <h2>{{ $t('videoConvert') }}</h2>
          </div>
        </template>
        
        <div class="convert-content">
          <el-form :model="convertForm" label-width="100px">
            <el-form-item :label="$t('videoUrl')">
              <el-input
                v-model="convertForm.videoUrl"
                :placeholder="$t('enterVideoUrl')"
                class="video-url-input"
              />
            </el-form-item>
            
            <el-form-item :label="$t('outputFormat')">
              <el-select v-model="convertForm.outputFormat" :placeholder="$t('videoFormat')">
                <el-option label="MP4" value="mp4" />
              </el-select>
            </el-form-item>
            
            <el-form-item>
              <el-button
                type="primary"
                @click="startConvert"
                :loading="isConverting"
                class="convert-btn"
              >
                {{ isConverting ? $t('converting') : $t('startConvert') }}
              </el-button>
            </el-form-item>
          </el-form>
          
          <div v-if="downloadUrl" class="download-section">
            <el-alert
              :title="$t('convertSuccess')"
              type="success"
              class="success-alert"
            />
            
            <div class="download-btn-group">
              <el-button
                type="success"
                @click="downloadVideo"
                class="download-btn"
              >
                <el-icon><Download /></el-icon>
                {{ $t('download') }}
              </el-button>
            </div>
          </div>
          
          <div v-if="errorMessage" class="error-section">
            <el-alert
              :title="errorMessage"
              type="error"
              class="error-alert"
            />
          </div>
        </div>
      </el-card>
      
      <el-card class="info-card">
        <template #header>
          <div class="info-header">
            <h3>{{ $t('videoConvertDesc') }}</h3>
          </div>
        </template>
        
        <div class="info-content">
          <p>1. {{ $t('enterVideoUrl') }}</p>
          <p>2. {{ $t('outputFormat') }}: MP4</p>
          <p>3. {{ $t('startConvert') }}</p>
          <p>4. {{ $t('downloadVideo') }}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Download } from '@element-plus/icons-vue'

interface ConvertForm {
  videoUrl: string
  outputFormat: string
}

const convertForm = ref<ConvertForm>({
  videoUrl: '',
  outputFormat: 'mp4'
})

const isConverting = ref(false)
const downloadUrl = ref('')
const errorMessage = ref('')

const startConvert = async () => {
  if (!convertForm.value.videoUrl) {
    errorMessage.value = '请输入 M3U8 视频地址'
    return
  }
  
  errorMessage.value = ''
  isConverting.value = true
  
  try {
    // 模拟转换过程
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 创建一个模拟的下载链接
    const blob = new Blob(['// M3U8 Video Download'], { type: 'text/plain' })
    downloadUrl.value = URL.createObjectURL(blob)
    
    errorMessage.value = ''
  } catch (error) {
    errorMessage.value = '转换失败，请稍后重试'
  } finally {
    isConverting.value = false
  }
}

const downloadVideo = () => {
  if (!downloadUrl.value) return
  
  const a = document.createElement('a')
  a.href = downloadUrl.value
  a.download = 'video.mp4'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  
  errorMessage.value = '下载完成'
  setTimeout(() => {
    errorMessage.value = ''
  }, 3000)
}
</script>

<style scoped>
.convert-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.convert-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.convert-card,
.info-card {
  margin-bottom: 20px;
}

.convert-header h2,
.info-header h3 {
  margin: 0;
  color: #333;
}

.convert-content {
  padding: 20px 0;
}

.video-url-input {
  margin-bottom: 20px;
}

.convert-btn {
  width: 100%;
  max-width: 300px;
}

.download-section {
  margin-top: 20px;
}

.success-alert {
  margin-bottom: 20px;
}

.download-btn-group {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.download-btn {
  padding: 12px 30px;
  font-size: 16px;
}

.error-section {
  margin-top: 20px;
}

.error-alert {
  margin-bottom: 20px;
}

.info-content {
  color: #666;
  line-height: 1.8;
}

.info-content p {
  margin: 10px 0;
}
</style>