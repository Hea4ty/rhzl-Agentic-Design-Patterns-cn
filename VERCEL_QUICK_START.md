# ⚡ Vercel 快速部署清单

## 🎯 5 分钟部署步骤

### 1. 登录 Vercel
👉 访问：https://vercel.com
✅ 使用 GitHub 账号（fzy2012）登录

---

### 2. 导入项目
1. 点击 **"Add New..."** → **"Project"**
2. 选择仓库：`fzy2012/ruzl-Agentic-Design-Patterns-cn`
3. 点击 **"Import"**

---

### 3. 配置设置（⚠️ 重要！）

```
Framework Preset: Vite
Root Directory: website         ← 必须填写！
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**关键步骤：**
- ✅ 必须设置 **Root Directory** 为 `website`
- ✅ 其他选项会自动填充

---

### 4. 部署
点击 **"Deploy"** → 等待 2-3 分钟 → 完成！🎉

---

### 5. 访问网站
部署成功后，您会得到一个域名，例如：
`https://ruzl-agentic-design-patterns-cn.vercel.app`

---

## 🌐 绑定自定义域名（可选）

### 在 Vercel 中添加域名
1. **Settings** → **Domains**
2. 输入：`rhzk.ruhang365.cn`
3. 按提示添加 DNS 记录

### 在域名服务商（阿里云/腾讯云）添加记录

**推荐 A 记录：**
```
类型: A
主机记录: rhzk
记录值: 76.76.21.21
```

**或 CNAME 记录：**
```
类型: CNAME
主机记录: rhzk
记录值: cname.vercel-dns.com
```

等待 DNS 生效（5-30 分钟）→ 完成！

---

## ✅ 部署验证

访问网站，检查：
- [ ] 首页显示正常，Logo 正确
- [ ] 侧边栏显示中文标题
- [ ] 章节跳转正常
- [ ] 语言切换功能正常
- [ ] 移动端显示正常

---

## 📊 项目信息

- **GitHub 仓库：** https://github.com/fzy2012/ruzl-Agentic-Design-Patterns-cn
- **分支：** feature/interactive-website
- **网站目录：** website/
- **构建输出：** website/dist/

---

## 🆘 遇到问题？

### 部署失败？
- ✅ 检查是否设置了 `Root Directory: website`
- ✅ 查看构建日志找到具体错误

### 页面 404？
- ✅ 确认 vercel.json 配置正确
- ✅ 确认 dist 目录有文件

### 需要帮助？
- 📖 查看完整文档：`VERCEL_DEPLOYMENT.md`
- 🌐 Vercel 官方文档：https://vercel.com/docs

---

**现在就开始部署吧！🚀**
