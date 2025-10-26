# 网站设置和使用指南

## 🎉 网站已创建完成！

我已经为《智能体设计模式》创建了一个现代化的交互式阅读网站。

## 📱 在线预览

**当前开发服务器地址**: https://3000-ib95ves9y7tlw9acfzl8l-8f57ffe2.sandbox.novita.ai

**目标部署域名**: rhzk.ruhang365.cn

## ✨ 功能特性

1. **📚 章节导航**: 左侧边栏显示所有章节，按类别组织（前言、核心模式、高级模式、集成模式、生产模式）
2. **🌐 多语言切换**: 支持三种阅读模式
   - 英文模式：只显示英文内容
   - 中文模式：只显示中文翻译（黄色高亮部分）
   - 双语对照模式：同时显示英文和中文
3. **📖 Markdown 渲染**: 完整支持 Markdown 格式，包括代码高亮、表格、链接等
4. **📊 阅读进度**: 页面顶部显示实时阅读进度条
5. **🔼 快速返回**: 向下滚动后出现"返回顶部"按钮
6. **⏭️ 章节导航**: 每章末尾有"上一章"和"下一章"导航按钮
7. **📱 响应式设计**: 完美支持桌面、平板、手机等各种设备
8. **🔍 搜索框**: 顶部搜索框（UI 已实现）

## 🚀 本地开发

### 安装依赖
```bash
cd website
npm install
```

### 启动开发服务器
```bash
npm run dev
```
服务器将在 http://localhost:3000 启动

### 构建生产版本
```bash
npm run build
```
构建产物将生成在 `dist/` 目录

### 预览生产构建
```bash
npm run preview
```

## 📦 部署到 rhzk.ruhang365.cn

### 方案一：静态文件部署

1. 构建项目：
```bash
cd website
npm run build
```

2. 将 `dist/` 目录上传到服务器

3. 配置 Nginx（推荐）：
```nginx
server {
    listen 80;
    server_name rhzk.ruhang365.cn;
    
    root /path/to/website/dist;
    index index.html;
    
    # SPA 路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

4. 重启 Nginx：
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 方案二：使用 Vercel/Netlify（最简单）

1. Fork 这个仓库到你的 GitHub 账号
2. 在 Vercel 或 Netlify 中导入项目
3. 设置构建命令：
   - Build command: `cd website && npm run build`
   - Output directory: `website/dist`
4. 绑定自定义域名 rhzk.ruhang365.cn

### 方案三：使用 GitHub Pages

1. 修改 `vite.config.js` 中的 base path
2. 构建并推送到 gh-pages 分支
3. 在仓库设置中启用 GitHub Pages
4. 配置自定义域名

## 📁 项目结构

```
website/
├── public/                  # Markdown 文件和静态资源
│   ├── 01-Dedication.md    # 各章节 Markdown 文件
│   ├── 02-Acknowledgment.md
│   └── ...
├── src/
│   ├── components/         # React 组件
│   │   ├── Header.jsx      # 顶部导航栏（语言切换、搜索、GitHub链接）
│   │   ├── Sidebar.jsx     # 左侧章节导航
│   │   └── MarkdownViewer.jsx  # Markdown 渲染器
│   ├── pages/             # 页面组件
│   │   ├── HomePage.jsx   # 首页（欢迎页面）
│   │   └── ChapterPage.jsx # 章节阅读页
│   ├── data/
│   │   └── chapters.js    # 章节配置数据
│   ├── utils/
│   │   └── markdownLoader.js  # Markdown 加载和处理工具
│   ├── App.jsx            # 主应用组件
│   ├── main.jsx           # 入口文件
│   └── index.css          # 全局样式
├── dist/                  # 构建输出目录
├── package.json
├── vite.config.js         # Vite 配置
└── tailwind.config.js     # Tailwind CSS 配置
```

## 🛠️ 技术栈

- **框架**: React 19.1.1
- **构建工具**: Vite 7.1.12
- **路由**: React Router v7.9.4
- **样式**: Tailwind CSS 4.1.16 + @tailwindcss/typography
- **Markdown**: react-markdown 10.1.0 + remark-gfm + rehype-raw
- **图标**: Lucide React 0.548.0

## 🎨 UI 设计说明

- **主色调**: 蓝色系（Blue 600/700）
- **字体**: Inter 字体家族
- **高亮**: 黄色背景（#fef08a）用于中文内容标记
- **布局**: 左侧固定侧边栏（320px）+ 主内容区域

## 📝 使用说明

### 添加新章节

1. 将 Markdown 文件放入 `public/` 目录
2. 在 `src/data/chapters.js` 中添加章节信息：
```javascript
{
  id: 'chapter-xx',
  title: 'Chapter Title',
  titleZh: '章节标题',
  file: 'XX-Chapter-Title.md',
  category: 'part-1',
  description: 'Chapter description'
}
```

### 修改样式

主要样式文件：
- `src/index.css`: 全局样式和 Markdown 渲染样式
- `tailwind.config.js`: Tailwind 配置
- 各组件内的 className: 组件级样式

## 🔧 故障排查

### Markdown 文件加载失败
检查文件是否在 `public/` 目录中，文件名是否与 `chapters.js` 中的配置匹配。

### 路由 404 错误
确保服务器配置了 SPA 路由支持（所有路由都指向 index.html）。

### 样式不生效
清除浏览器缓存或尝试硬刷新（Ctrl+Shift+R）。

## 📄 许可证

遵循原项目的 CC BY-NC 4.0 许可证。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个网站！
