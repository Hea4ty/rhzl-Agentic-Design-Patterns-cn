# 部署说明 - rhzk.ruhang365.cn

## 项目概述

这是《智能体设计模式》交互式阅读网站，提供中英文对照阅读体验。

## 在线预览地址

开发环境: https://3000-ib95ves9y7tlw9acfzl8l-8f57ffe2.sandbox.novita.ai

生产环境: https://rhzk.ruhang365.cn (待部署)

## 功能特性

✅ 现代化的响应式设计
✅ 侧边栏章节导航
✅ 中文/英文/双语对照三种阅读模式切换
✅ Markdown 内容渲染（支持代码高亮、表格、图片等）
✅ 阅读进度条显示
✅ 章节间快速导航
✅ 返回顶部按钮
✅ 移动端友好的界面
✅ 搜索功能（UI已实现）

## 部署步骤

### 1. 构建项目

```bash
cd /home/user/webapp/website
npm install
npm run build
```

构建产物将生成在 `dist/` 目录中。

### 2. 部署到服务器

将 `dist/` 目录的内容上传到服务器。

### 3. 配置 Web 服务器

#### Nginx 配置

```nginx
server {
    listen 80;
    server_name rhzk.ruhang365.cn;
    
    # 如果需要 HTTPS
    # listen 443 ssl http2;
    # ssl_certificate /path/to/cert.pem;
    # ssl_certificate_key /path/to/key.pem;
    
    root /path/to/webapp/website/dist;
    index index.html;
    
    # SPA 路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
}
```

#### Apache 配置

```apache
<VirtualHost *:80>
    ServerName rhzk.ruhang365.cn
    DocumentRoot /path/to/webapp/website/dist
    
    <Directory /path/to/webapp/website/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # SPA 路由支持
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

### 4. 设置域名解析

在 DNS 管理面板中添加 A 记录或 CNAME 记录：

```
类型: A 记录
主机记录: rhzk
记录值: 服务器IP地址
TTL: 600
```

### 5. 重启 Web 服务器

```bash
# Nginx
sudo nginx -t
sudo systemctl reload nginx

# Apache
sudo apachectl configtest
sudo systemctl reload apache2
```

## 技术栈

- React 19.1.1
- Vite 7.1.7
- React Router v7.9.4
- Tailwind CSS 4.1.16
- react-markdown 10.1.0
- Lucide React 0.548.0

## 项目结构

```
website/
├── public/              # Markdown 文件
├── src/
│   ├── components/      # UI 组件
│   ├── pages/          # 页面组件
│   ├── data/           # 章节数据
│   ├── utils/          # 工具函数
│   └── App.jsx         # 主应用
├── dist/               # 构建输出（部署此目录）
└── package.json
```

## 性能优化建议

1. 启用 Gzip/Brotli 压缩
2. 配置静态资源缓存
3. 使用 CDN 加速
4. 启用 HTTP/2
5. 添加 SSL 证书（推荐使用 Let's Encrypt）

## 维护说明

### 更新内容

如需更新 Markdown 内容：
1. 更新 `/home/user/webapp` 目录中的 `.md` 文件
2. 复制到 `website/public/` 目录
3. 重新构建并部署

### 添加新章节

1. 在 `src/data/chapters.js` 中添加章节信息
2. 将对应的 `.md` 文件放入 `public/` 目录
3. 重新构建

## 故障排查

### 路由404问题
确保 Web 服务器配置了 SPA 路由支持（所有路由都指向 index.html）

### 样式未加载
检查静态资源路径配置，确保 base path 正确

### Markdown 文件加载失败
检查 public 目录中是否包含所有 .md 文件

## 联系方式

如有问题，请联系项目维护者或在 GitHub 提 Issue。
