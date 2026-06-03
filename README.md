# TTS Video Tools

> 基于 Vue 3 + Element Plus 的视频播放与格式转换工具

一个功能丰富的在线视频处理工具，支持 M3U8 视频播放、格式转换下载等功能。

## 功能特性

- **视频播放** - 支持 M3U8/HLS 视频流播放，提供播放、暂停、全屏等控制
- **格式转换** - 支持 M3U8 视频链接转换为 MP4 格式下载
- **文章浏览** - 技术文章列表与详情阅读
- **多语言支持** - 内置中英文国际化切换 (i18n)
- **响应式设计** - 适配桌面与移动端设备

## 技术栈

- **框架**: Vue 3 (Composition API) + TypeScript
- **UI 组件库**: Element Plus
- **构建工具**: Vite
- **路由**: Vue Router (文件系统路由)
- **国际化**: vue-i18n
- **图标**: @element-plus/icons-vue + Iconify

## 项目结构

```
src/
├── components/       # 公共组件 (Navbar, LanguageSwitcher)
├── locales/          # 国际化资源文件 (zh, en)
├── pages/            # 页面组件
│   ├── index.vue     # 首页 - 视频播放
│   ├── video.vue     # 视频页面
│   ├── convert.vue   # 视频格式转换
│   ├── articles.vue  # 文章列表
│   └── about.vue     # 关于页面
├── styles/           # 样式文件
├── App.vue           # 根组件
└── main.ts           # 入口文件
```

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 开发命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览构建结果 |
| `npm run typecheck` | TypeScript 类型检查 |
| `npm run lint` | ESLint 代码检查 |

## License

[MIT](LICENSE)