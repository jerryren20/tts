<template>
  <div class="video-player-page">
    <h1>{{ $t('videoPlayer') }}</h1>
    
    <div class="video-container">
      <div class="video-controls">
        <el-input
          v-model="videoUrl"
          :placeholder="$t('videoUrl')"
          class="video-url-input"
        >
          <template #append>
            <el-button @click="loadVideo">{{ $t('playVideo') }}</el-button>
          </template>
        </el-input>
      </div>
      
      <div class="video-wrapper">
        <video
          ref="videoPlayer"
          controls
          class="video-element"
          crossorigin="anonymous"
          playsinline
        >
          <source :src="currentVideoUrl" type="application/x-mpegURL">
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div class="video-actions">
        <el-button type="primary" @click="playVideo" :disabled="!currentVideoUrl">
          {{ $t('playVideo') }}
        </el-button>
        <el-button @click="pauseVideo" :disabled="!currentVideoUrl">
          {{ $t('pauseVideo') }}
        </el-button>
        <el-button @click="toggleFullscreen">
          {{ $t('fullscreen') }}
        </el-button>
      </div>
      
      <div class="sample-videos">
        <h3>示例视频</h3>
        <div class="sample-list">
          <el-button
            v-for="video in sampleVideos"
            :key="video.url"
            @click="loadSampleVideo(video.url)"
            class="sample-btn"
          >
            {{ video.name }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const videoUrl = ref('')
const currentVideoUrl = ref('')
const videoPlayer = ref<HTMLVideoElement | null>(null)

const sampleVideos = [
  { name: '示例视频 1', url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
  { name: '示例视频 2', url: 'https://bitdash-a.akamaihd.net/s/content/media/Manifest.m3u8' },
  { name: '示例视频 3', url: 'https://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8' }
]

const loadVideo = () => {
  if (videoUrl.value) {
    currentVideoUrl.value = videoUrl.value
  }
}

const loadSampleVideo = (url: string) => {
  videoUrl.value = url
  currentVideoUrl.value = url
}

const playVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.play()
  }
}

const pauseVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.pause()
  }
}

const toggleFullscreen = () => {
  if (!videoPlayer.value) return
  
  if (!document.fullscreenElement) {
    if (videoPlayer.value.requestFullscreen) {
      videoPlayer.value.requestFullscreen()
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<style scoped>
.video-player-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.video-container {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.video-controls {
  margin-bottom: 20px;
}

.video-url-input {
  margin-bottom: 10px;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 20px;
  background: #000;
  border-radius: 4px;
  overflow: hidden;
}

.video-element {
  width: 100%;
  height: auto;
  max-height: 500px;
  display: block;
}

.video-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
}

.sample-videos {
  margin-top: 30px;
}

.sample-videos h3 {
  margin-bottom: 15px;
  color: #333;
}

.sample-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.sample-btn {
  margin-bottom: 10px;
}
</style>