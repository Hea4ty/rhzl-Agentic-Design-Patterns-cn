# Agentic Design Patterns - Interactive Website

智能体设计模式 - 交互式阅读网站

## 项目简介

这是一个基于 React + Vite 构建的现代化交互式阅读网站，用于展示《Agentic Design Patterns》一书的中英文对照内容。

## 功能特性

- 📚 **章节导航** - 清晰的侧边栏章节列表，按分类组织
- 🌐 **多语言支持** - 支持中文、英文、双语对照三种阅读模式
- 🎨 **现代化UI** - 使用 Tailwind CSS 的响应式设计
- 📖 **Markdown渲染** - 完整支持 Markdown 格式，包括代码高亮
- 🔍 **阅读进度** - 实时显示阅读进度条
- 📱 **移动端友好** - 完全响应式，支持各种屏幕尺寸
- ⚡ **快速加载** - Vite 提供的极速开发体验

## 技术栈

- **框架**: React 19
- **构建工具**: Vite 7
- **路由**: React Router v7
- **样式**: Tailwind CSS 4
- **Markdown**: react-markdown + remark-gfm + rehype-raw
- **图标**: Lucide React

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署到域名

本网站将部署到: **rhzk.ruhang365.cn**

### 部署步骤

1. 构建生产版本:
```bash
npm run build
```

2. 将 `dist` 目录部署到服务器

3. 配置 Nginx 或其他 Web 服务器指向 dist 目录

### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name rhzk.ruhang365.cn;
    
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 项目结构

```
website/
├── public/              # 静态资源和 Markdown 文件
│   ├── *.md            # 所有章节的 Markdown 文件
├── src/
│   ├── components/     # React 组件
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── MarkdownViewer.jsx
│   ├── pages/          # 页面组件
│   │   ├── HomePage.jsx
│   │   └── ChapterPage.jsx
│   ├── data/           # 数据配置
│   │   └── chapters.js
│   ├── utils/          # 工具函数
│   │   └── markdownLoader.js
│   ├── App.jsx         # 主应用组件
│   ├── main.jsx        # 入口文件
│   └── index.css       # 全局样式
├── tailwind.config.js  # Tailwind 配置
├── vite.config.js      # Vite 配置
└── package.json        # 项目依赖
```

## License

本项目基于原书翻译项目，遵循 CC BY-NC 4.0 协议。

## 致谢

- 原书作者: Antonio Gulli
- 翻译团队: ginobefun 及社区贡献者
