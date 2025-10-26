# 🚀 快速部署到 rhzk.ruhang365.cn

## ✅ 网站已构建完成

- **当前预览地址**: https://8080-ib95ves9y7tlw9acfzl8l-8f57ffe2.sandbox.novita.ai
- **目标域名**: http://rhzk.ruhang365.cn (或 https://rhzk.ruhang365.cn)
- **构建文件位置**: `/home/user/webapp/website/dist/`
- **打包文件**: `/home/user/webapp/rhzk-website-dist.tar.gz` (568KB)

---

## 📦 方式一：使用自动化脚本（推荐）

如果你有一台服务器，可以使用自动化部署脚本：

```bash
cd /home/user/webapp/website

# 运行部署脚本（替换为你的服务器地址）
./deploy.sh user@your-server-ip
```

脚本会自动完成：
1. ✅ 构建项目
2. ✅ 打包文件
3. ✅ 上传到服务器
4. ✅ 配置 Nginx
5. ✅ 重启服务

---

## 📋 方式二：手动部署（分步骤）

### 步骤 1: 下载构建文件

```bash
# 构建文件已打包在
/home/user/webapp/rhzk-website-dist.tar.gz
```

### 步骤 2: 上传到你的服务器

```bash
# 上传打包文件
scp /home/user/webapp/rhzk-website-dist.tar.gz user@your-server:/tmp/

# 上传 Nginx 配置
scp /home/user/webapp/website/nginx.conf user@your-server:/tmp/
```

### 步骤 3: 在服务器上配置

```bash
# SSH 登录服务器
ssh user@your-server

# 创建网站目录
sudo mkdir -p /var/www/rhzk.ruhang365.cn

# 解压文件
cd /tmp
tar -xzf rhzk-website-dist.tar.gz

# 移动文件到网站目录
sudo mv dist/* /var/www/rhzk.ruhang365.cn/

# 设置权限
sudo chown -R www-data:www-data /var/www/rhzk.ruhang365.cn
sudo chmod -R 755 /var/www/rhzk.ruhang365.cn

# 配置 Nginx
sudo cp /tmp/nginx.conf /etc/nginx/sites-available/rhzk.ruhang365.cn
sudo ln -s /etc/nginx/sites-available/rhzk.ruhang365.cn /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl reload nginx
```

### 步骤 4: 配置 DNS

在你的域名管理后台（如阿里云、腾讯云、Cloudflare）：

```
记录类型: A
主机记录: rhzk
记录值: 你的服务器IP地址
TTL: 600
```

### 步骤 5: 配置 HTTPS（推荐）

```bash
# 安装 certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# 获取免费 SSL 证书
sudo certbot --nginx -d rhzk.ruhang365.cn

# 设置自动续期
sudo certbot renew --dry-run
```

---

## 🌐 方式三：使用云平台（最简单）

### Vercel 部署

1. 安装 Vercel CLI:
```bash
npm install -g vercel
```

2. 部署:
```bash
cd /home/user/webapp/website
vercel --prod
```

3. 在 Vercel 控制台添加自定义域名 `rhzk.ruhang365.cn`

### Netlify 部署

1. 登录 [Netlify](https://www.netlify.com/)
2. 拖拽 `/home/user/webapp/website/dist` 目录
3. 在设置中添加自定义域名 `rhzk.ruhang365.cn`

---

## 📊 网站功能清单

✅ **首页** - 项目介绍和功能展示
✅ **章节导航** - 左侧边栏显示所有21个章节
✅ **三种语言模式** - 英文/中文/双语对照切换
✅ **Markdown 渲染** - 完整支持代码高亮、表格、链接
✅ **阅读进度** - 实时进度条显示
✅ **响应式设计** - 支持手机、平板、桌面
✅ **快速导航** - 上一章/下一章按钮
✅ **返回顶部** - 滚动时显示
✅ **GitHub 链接** - 直达源码仓库

---

## 🔍 验证部署

部署完成后，访问以下地址验证：

1. **首页**: http://rhzk.ruhang365.cn
2. **章节页**: http://rhzk.ruhang365.cn/chapter/introduction
3. **测试功能**:
   - 点击左侧菜单切换章节
   - 点击右上角切换语言
   - 测试移动端响应式

---

## 📁 项目文件结构

```
/home/user/webapp/
├── website/
│   ├── dist/                    # 构建产物（部署这个目录）
│   ├── src/                     # 源代码
│   ├── public/                  # Markdown 文件
│   ├── nginx.conf               # Nginx 配置模板
│   ├── deploy.sh                # 自动部署脚本
│   └── SETUP.md                 # 详细设置指南
├── rhzk-website-dist.tar.gz     # 打包的构建文件
├── DEPLOYMENT_GUIDE.md          # 完整部署指南
└── QUICK_DEPLOY.md              # 本文件
```

---

## 🆘 常见问题

### Q: 页面刷新后出现 404 错误
**A**: 确保 Nginx 配置了 `try_files $uri $uri/ /index.html;`（SPA 路由支持）

### Q: CSS 或 JS 加载失败
**A**: 检查文件权限：`sudo chmod -R 755 /var/www/rhzk.ruhang365.cn`

### Q: Markdown 文件无法加载
**A**: 确保 `dist` 目录中包含所有 `.md` 文件

### Q: 想要使用子路径（如 /book）
**A**: 需要修改 `vite.config.js` 中的 `base` 选项：
```javascript
export default defineConfig({
  base: '/book/',
  // ...其他配置
})
```
然后重新构建。

---

## 📞 需要帮助？

- 📖 详细部署指南: `/home/user/webapp/DEPLOYMENT_GUIDE.md`
- 🔧 网站设置说明: `/home/user/webapp/website/SETUP.md`
- 💻 在线预览: https://8080-ib95ves9y7tlw9acfzl8l-8f57ffe2.sandbox.novita.ai

---

## ✨ 一键命令参考

```bash
# 重新构建
cd /home/user/webapp/website && npm run build

# 本地预览
cd /home/user/webapp/website/dist && python3 -m http.server 8080

# 打包部署文件
cd /home/user/webapp/website && tar -czf ../rhzk-website-dist.tar.gz dist/

# 自动部署（需要服务器访问权限）
cd /home/user/webapp/website && ./deploy.sh user@your-server
```

祝部署顺利！🎉
