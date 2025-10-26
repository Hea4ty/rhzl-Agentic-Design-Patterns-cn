# 🎯 Vercel 部署配置详解

## 📸 界面配置截图说明

### 步骤 1：导入项目界面

在 Vercel 导入页面，您会看到您的 GitHub 仓库列表。

**寻找并选择：**
```
fzy2012/ruzl-Agentic-Design-Patterns-cn
```

点击旁边的 **"Import"** 按钮。

---

### 步骤 2：配置项目（⚠️ 最关键的步骤）

导入后，您会看到 "Configure Project" 页面。

#### 📂 Root Directory（根目录设置）

**默认显示：**
```
Root Directory: ./
```

**⚠️ 必须修改为：**
```
Root Directory: website
```

**如何修改：**
1. 找到 "Root Directory" 旁边的 **"Edit"** 按钮
2. 点击 "Edit"
3. 在输入框中输入：`website`
4. 点击 "Continue"

**为什么要这样设置？**
- 我们的网站代码在 `website/` 目录下
- package.json 在 `website/package.json`
- 不设置会导致 Vercel 找不到项目配置

---

#### 🔧 Framework Preset（框架预设）

**应该显示：**
```
Framework Preset: Vite
```

✅ Vercel 会自动检测到 Vite 项目

---

#### 🛠️ Build and Output Settings（构建和输出设置）

**应该自动填充为：**
```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

✅ 这些通常不需要修改，Vercel 会自动配置

---

#### 🌍 Environment Variables（环境变量）

**当前不需要设置任何环境变量**

暂时留空即可。

---

### 步骤 3：开始部署

配置完成后：

1. 检查配置摘要：
   ```
   Root Directory: website  ✓
   Framework: Vite         ✓
   Build Command: npm run build  ✓
   ```

2. 点击底部的 **"Deploy"** 按钮

3. Vercel 开始构建和部署过程

---

## 🚀 部署过程

### 构建日志示例

您会看到类似这样的日志：

```
Installing dependencies...
> npm install

Building project...
> npm run build

✓ 2001 modules transformed
✓ built in 4.73s

Deployment completed!
```

**预计时间：** 2-3 分钟

---

## ✅ 部署成功

### 成功界面

部署成功后，您会看到：

- 🎉 庆祝动画
- 🌐 分配的域名（例如：`ruzl-agentic-design-patterns-cn-xxxxx.vercel.app`）
- 🔗 "Visit" 按钮

### 获取域名

**自动分配的域名格式：**
```
https://[项目名称]-[随机字符].vercel.app
或
https://[项目名称].vercel.app
```

点击 **"Visit"** 按钮即可访问您的网站！

---

## 🌐 自定义域名配置详解

### 在 Vercel 中添加域名

1. **进入项目设置**
   - 在项目页面顶部，点击 **"Settings"** 标签
   
2. **找到 Domains 设置**
   - 在左侧菜单中，点击 **"Domains"**
   
3. **添加域名**
   - 在 "Add Domain" 输入框中输入：`rhzk.ruhang365.cn`
   - 点击 **"Add"** 按钮

4. **查看 DNS 配置要求**
   - Vercel 会显示需要添加的 DNS 记录
   - 记下这些信息

---

### 在域名服务商配置 DNS

**示例：阿里云 DNS 配置**

登录阿里云控制台 → 域名管理 → 找到 `ruhang365.cn` → 解析设置

**添加记录（方式一 - A 记录）：**
```
记录类型: A
主机记录: rhzk
记录值: 76.76.21.21
TTL: 600（或默认）
```

**添加记录（方式二 - CNAME 记录）：**
```
记录类型: CNAME
主机记录: rhzk
记录值: cname.vercel-dns.com
TTL: 600（或默认）
```

**推荐：** 使用 A 记录方式更简单直接。

---

### DNS 生效验证

**检查 DNS 是否生效：**

```bash
# 方法 1：使用 nslookup
nslookup rhzk.ruhang365.cn

# 方法 2：使用 dig
dig rhzk.ruhang365.cn

# 方法 3：使用在线工具
访问：https://dnschecker.org/
输入：rhzk.ruhang365.cn
```

**生效时间：**
- 通常 5-30 分钟
- 最长可能需要 48 小时（极少见）

**验证成功标志：**
- Vercel 显示 ✓ Valid Configuration
- 域名旁边显示绿色的 "HTTPS" 标签

---

## 🔒 HTTPS 证书

**自动配置：**
- Vercel 会自动为您的域名申请 Let's Encrypt SSL 证书
- DNS 验证通过后自动配置
- 无需任何手动操作

**HTTPS 状态检查：**
- 在 Vercel Domains 页面查看域名状态
- 显示 🔒 绿色锁图标 = HTTPS 已启用

---

## 📱 访问测试

### 测试清单

部署成功后，请使用多个设备测试：

**桌面浏览器：**
- [ ] Chrome 浏览器测试
- [ ] Firefox 浏览器测试
- [ ] Safari 浏览器测试（Mac）
- [ ] Edge 浏览器测试

**移动设备：**
- [ ] iPhone Safari 测试
- [ ] Android Chrome 测试
- [ ] 横屏/竖屏切换测试

**功能测试：**
- [ ] 首页加载
- [ ] Logo 显示
- [ ] 侧边栏中文标题显示
- [ ] 章节跳转
- [ ] 语言切换（EN/ZH/Both）
- [ ] 搜索功能
- [ ] 版权声明显示

---

## 🔄 后续更新

### 如何更新网站内容

**步骤：**

1. **修改代码**
   ```bash
   # 修改 markdown 文件或代码
   vim translations/zh/某章节.md
   ```

2. **提交到 Git**
   ```bash
   git add .
   git commit -m "update: 更新内容"
   git push
   ```

3. **自动部署**
   - Vercel 检测到 push
   - 自动触发新的构建和部署
   - 2-3 分钟后更新生效

4. **查看部署状态**
   - 在 Vercel 控制台查看 "Deployments" 页面
   - 查看构建日志
   - 确认部署成功

---

## 🎯 部署完成后的项目信息

### 重要链接

- **GitHub 仓库：** https://github.com/fzy2012/ruzl-Agentic-Design-Patterns-cn
- **Vercel 项目：** 在 Vercel 控制台查看
- **自动域名：** Vercel 分配的 .vercel.app 域名
- **自定义域名：** https://rhzk.ruhang365.cn（配置后）

### 项目结构

```
ruzl-Agentic-Design-Patterns-cn/
├── translations/          # 翻译内容
│   └── zh/               # 中文翻译
├── website/              # 网站源码 ← Vercel 部署此目录
│   ├── src/              # React 源码
│   ├── public/           # 静态资源
│   ├── dist/             # 构建输出
│   ├── package.json      # 项目配置
│   ├── vite.config.js    # Vite 配置
│   └── vercel.json       # Vercel 配置
└── ...
```

---

## 💡 最佳实践

### 开发流程

**本地开发 → 测试 → 提交 → 自动部署**

```bash
# 1. 本地开发
cd website
npm run dev

# 2. 本地测试
npm run build
npm run preview

# 3. 提交代码
git add .
git commit -m "feat: 添加新功能"
git push

# 4. Vercel 自动部署
# 等待 2-3 分钟即可
```

### 分支策略

**推荐设置：**
- `main` 分支 → 生产环境（rhzk.ruhang365.cn）
- `feature/*` 分支 → 预览环境（自动生成预览链接）

---

**🎉 恭喜！您已经完成了 Vercel 部署配置！**

现在就去 Vercel 控制台开始部署吧！
