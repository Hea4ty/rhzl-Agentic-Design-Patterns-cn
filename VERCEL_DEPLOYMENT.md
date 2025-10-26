# 🚀 Vercel 部署指南

## 📋 部署步骤

### 1️⃣ 准备工作

✅ **已完成：**
- GitHub 仓库已创建：`fzy2012/ruzl-Agentic-Design-Patterns-cn`
- 代码已推送到分支：`feature/interactive-website`
- Vercel 配置文件已创建：`website/vercel.json`

### 2️⃣ 在 Vercel 上导入项目

#### 步骤 1：登录 Vercel
1. 访问 [https://vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录（fzy2012）

#### 步骤 2：导入 GitHub 仓库
1. 点击 **"Add New..."** → **"Project"**
2. 在 "Import Git Repository" 中选择：
   - 仓库：`fzy2012/ruzl-Agentic-Design-Patterns-cn`
3. 点击 **"Import"**

#### 步骤 3：配置项目设置

**⚠️ 重要配置：**

```
Framework Preset: Vite
Root Directory: website         ← 必须设置！
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**详细配置截图说明：**

1. **Root Directory（根目录）：** 
   - 点击 "Edit" 按钮
   - 输入：`website`
   - ⚠️ 这是最关键的设置！

2. **Build and Output Settings：**
   - Framework Preset: 选择 `Vite`
   - Build Command: `npm run build`（自动填充）
   - Output Directory: `dist`（自动填充）
   - Install Command: `npm install`（自动填充）

3. **Environment Variables（环境变量）：**
   - 暂时不需要添加任何环境变量

#### 步骤 4：部署
1. 点击 **"Deploy"** 按钮
2. 等待 2-3 分钟，Vercel 会自动构建和部署
3. 部署成功后，您会看到：
   - ✅ 成功页面
   - 🌐 自动生成的域名（例如：`ruzl-agentic-design-patterns-cn.vercel.app`）

### 3️⃣ 绑定自定义域名

#### 绑定 rhzk.ruhang365.cn

1. 在 Vercel 项目页面，点击 **"Settings"** → **"Domains"**

2. 输入您的域名：`rhzk.ruhang365.cn`

3. Vercel 会提示您添加 DNS 记录，需要在您的域名管理后台（阿里云/腾讯云等）添加：

   **类型 A（推荐）：**
   ```
   记录类型: A
   主机记录: rhzk
   记录值: 76.76.21.21
   ```

   **或类型 CNAME：**
   ```
   记录类型: CNAME
   主机记录: rhzk
   记录值: cname.vercel-dns.com
   ```

4. DNS 配置生效后（通常 5-30 分钟），Vercel 会自动配置 HTTPS

5. 访问 `https://rhzk.ruhang365.cn` 即可看到您的网站！

---

## 🔄 自动部署配置

### 设置自动部署（可选但推荐）

部署成功后，您可以配置自动部署：

1. 在 Vercel 项目页面，进入 **"Settings"** → **"Git"**

2. 配置生产分支：
   - Production Branch: `main`（或 `feature/interactive-website`）

3. 之后每次推送到该分支，Vercel 会自动重新部署

### 部署预览分支

- 推送到其他分支时，Vercel 会自动创建预览部署
- 每个 Pull Request 也会有独立的预览链接

---

## 📝 常见问题

### Q1: 部署失败，提示找不到 package.json？
**A:** 确保在配置时设置了 `Root Directory: website`

### Q2: 页面显示 404？
**A:** 检查 `vercel.json` 中的路由重写规则是否正确

### Q3: 如何查看部署日志？
**A:** 在 Vercel 项目页面点击具体的部署记录，查看详细日志

### Q4: 如何回滚到之前的版本？
**A:** 在 Deployments 页面找到历史部署，点击 "Promote to Production"

---

## 🎯 部署后验证

部署成功后，请验证以下功能：

- ✅ 首页正常显示，入行365 Logo 显示正确
- ✅ 侧边栏显示中文章节标题
- ✅ 点击章节可以正常跳转
- ✅ 语言切换功能正常（EN/ZH/Both）
- ✅ 搜索功能可用
- ✅ 移动端显示正常
- ✅ 版权声明显示正确

---

## 🔗 相关链接

- **GitHub 仓库：** https://github.com/fzy2012/ruzl-Agentic-Design-Patterns-cn
- **部署分支：** feature/interactive-website
- **Vercel 文档：** https://vercel.com/docs
- **Vite 部署指南：** https://vitejs.dev/guide/static-deploy.html#vercel

---

## 💡 提示

- Vercel 免费套餐限制：
  - ✅ 无限带宽
  - ✅ 无限部署
  - ✅ 自动 HTTPS
  - ✅ 全球 CDN
  - ⚠️ 每月 100GB 带宽（个人项目完全够用）
  - ⚠️ 商业使用需要升级到 Pro 套餐（$20/月）

- 本项目完全适合 Vercel 免费套餐！

---

**祝部署顺利！🎉**

如有问题，请参考 Vercel 官方文档或联系技术支持。
