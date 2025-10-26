# 部署指南 - rhzk.ruhang365.cn

## 📦 准备工作

网站已经构建完成，所有静态文件位于：`/home/user/webapp/website/dist/`

## 🚀 部署方案

### 方案一：使用 Nginx（推荐）

#### 1. 上传文件到服务器

```bash
# 在你的服务器上创建目录
ssh user@your-server
mkdir -p /var/www/rhzk.ruhang365.cn

# 从本地上传构建文件
scp -r /home/user/webapp/website/dist/* user@your-server:/var/www/rhzk.ruhang365.cn/
```

#### 2. 配置 Nginx

创建配置文件：`/etc/nginx/sites-available/rhzk.ruhang365.cn`

```nginx
server {
    listen 80;
    server_name rhzk.ruhang365.cn;
    
    # 如果有 SSL 证书
    # listen 443 ssl http2;
    # ssl_certificate /path/to/ssl/cert.pem;
    # ssl_certificate_key /path/to/ssl/key.pem;
    
    root /var/www/rhzk.ruhang365.cn;
    index index.html;
    
    # 启用 gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json;
    
    # SPA 路由支持（重要！）
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|md)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}

# HTTP 到 HTTPS 重定向（如果使用 SSL）
# server {
#     listen 80;
#     server_name rhzk.ruhang365.cn;
#     return 301 https://$server_name$request_uri;
# }
```

#### 3. 启用站点并重启 Nginx

```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/rhzk.ruhang365.cn /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl reload nginx
```

#### 4. 配置 DNS

在你的 DNS 管理面板（如阿里云、腾讯云等）添加 A 记录：

```
类型: A
主机记录: rhzk
记录值: 你的服务器IP地址
TTL: 600
```

#### 5. 配置 SSL 证书（推荐使用 Let's Encrypt）

```bash
# 安装 certbot
sudo apt install certbot python3-certbot-nginx

# 自动获取并配置证书
sudo certbot --nginx -d rhzk.ruhang365.cn
```

---

### 方案二：使用 Apache

#### 1. 上传文件

```bash
mkdir -p /var/www/rhzk.ruhang365.cn/public_html
# 上传 dist 目录内容到 public_html
```

#### 2. 配置 Apache

创建配置文件：`/etc/apache2/sites-available/rhzk.ruhang365.cn.conf`

```apache
<VirtualHost *:80>
    ServerName rhzk.ruhang365.cn
    DocumentRoot /var/www/rhzk.ruhang365.cn/public_html
    
    <Directory /var/www/rhzk.ruhang365.cn/public_html>
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
    
    # 日志
    ErrorLog ${APACHE_LOG_DIR}/rhzk.ruhang365.cn-error.log
    CustomLog ${APACHE_LOG_DIR}/rhzk.ruhang365.cn-access.log combined
</VirtualHost>
```

#### 3. 启用站点

```bash
sudo a2ensite rhzk.ruhang365.cn.conf
sudo a2enmod rewrite
sudo systemctl reload apache2
```

---

### 方案三：使用 Vercel（最简单，适合快速部署）

#### 1. 安装 Vercel CLI

```bash
npm install -g vercel
```

#### 2. 在项目目录中部署

```bash
cd /home/user/webapp/website
vercel --prod
```

#### 3. 配置自定义域名

在 Vercel 控制台：
- 进入项目设置
- 选择 "Domains"
- 添加 `rhzk.ruhang365.cn`
- 按照提示配置 DNS

---

### 方案四：使用 Netlify

#### 1. 创建 netlify.toml

```toml
[build]
  publish = "dist"
  
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 2. 部署

- 登录 Netlify
- 拖拽 `dist` 目录到 Netlify
- 或连接 GitHub 仓库自动部署

#### 3. 配置自定义域名

在 Netlify 控制台添加自定义域名 `rhzk.ruhang365.cn`

---

## 📊 构建新版本

如果内容有更新，需要重新构建：

```bash
cd /home/user/webapp/website

# 更新 public 目录中的 Markdown 文件
cp ../*.md public/

# 重新构建
npm run build

# 上传新的 dist 目录到服务器
```

---

## 🔒 安全建议

1. **使用 HTTPS** - 强烈建议使用 SSL 证书
2. **配置防火墙** - 只开放必要的端口（80, 443）
3. **定期更新** - 保持服务器和依赖包更新
4. **备份数据** - 定期备份网站文件

---

## 📝 快速命令参考

### 打包当前构建文件

```bash
cd /home/user/webapp/website
tar -czf dist.tar.gz dist/
```

### 下载到本地

```bash
# 使用 scp
scp user@your-server:/home/user/webapp/website/dist.tar.gz .

# 解压
tar -xzf dist.tar.gz
```

---

## 🆘 故障排查

### 问题：页面刷新后 404

**解决方案**: 确保配置了 SPA 路由支持（所有路由都指向 index.html）

### 问题：CSS 或 JS 文件 404

**解决方案**: 检查文件路径和权限

```bash
# 修复权限
chmod -R 755 /var/www/rhzk.ruhang365.cn
chown -R www-data:www-data /var/www/rhzk.ruhang365.cn
```

### 问题：Markdown 文件加载失败

**解决方案**: 确保 public 目录中的 .md 文件被正确复制到 dist 目录

---

## 📞 需要帮助？

如有问题，可以：
1. 检查服务器错误日志
2. 使用浏览器开发者工具查看网络请求
3. 查看 Nginx/Apache 错误日志
