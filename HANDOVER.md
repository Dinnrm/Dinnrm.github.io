# 项目交接文档 (HANDOVER)

> 最后更新：2026-09-27
> 用途：下次打开这个项目时，先读这一份，就能直接接着做。

## 这是什么

Dinnrm 的个人设计作品集网站，托管在 GitHub Pages。
技术栈：**React 18 + Vite 6**（纯自定义 CSS，无 UI 框架），按 visual-content-websites skill 搭建。

- **GitHub 仓库**：https://github.com/Dinnrm/Dinnrm.github.io
- **线上地址**：https://dinnrm.github.io/
- **本地路径**：`~/Documents/GitHub/Dinnrm.github.io`
- **部署方式**：push 到 `main` → GitHub Actions（`.github/workflows/deploy.yml`）自动 `npm ci && npm run build` 并发布 `dist/`。Pages 的 Source 已设为 **GitHub Actions**。

## 当前状态（2026-09-27）

- [x] Node 22 / npm 已就绪；React + Vite 工程已搭建并成功构建
- [x] GitHub Actions 部署流水线跑通，线上已是 React 版
- [x] 页面：Hero → 关于我 → 作品（全部/品牌/海报/书籍/摄影 可筛选）→ 联系
- [ ] 作品图、头像、真实文案、真实邮箱仍是占位
- [ ] 自定义域名未配置（等购买后再做）

## 目录结构

```
Dinnrm.github.io/
├── index.html              # Vite 入口
├── package.json
├── vite.config.js
├── .github/workflows/deploy.yml   # Actions 自动部署
├── src/
│   ├── main.jsx            # 入口
│   ├── App.jsx             # 页面组装
│   ├── styles.css          # 全部样式（改配色在 :root）
│   ├── data/
│   │   └── works.js        # 作品数据（加真实作品在这里加条目）
│   └── components/
│       ├── Header.jsx  Hero.jsx  About.jsx
│       ├── WorkSection.jsx  WorkCard.jsx
│       ├── Contact.jsx  Footer.jsx
└── HANDOVER.md
```

## 日常开发命令

```bash
cd ~/Documents/GitHub/Dinnrm.github.io

# 本地开发（热更新），浏览器访问 http://localhost:5173
npm run dev

# 本地预览生产构建（等同线上效果）
npm run build && npm run preview

# 提交上线（Actions 会自动构建部署，等约 1 分钟）
git add .
git commit -m "写清楚改了什么"
git push origin main
```

> 注意：改完代码**不需要手动部署**，push 后 Actions 自动构建。
> 可在仓库 Actions 页查看构建状态，或 `gh run list`。

## 下次要继续做的事

1. **加真实作品**：在 `src/data/works.js` 里追加条目；图片放到 `src/assets/` 或 `public/images/`，在 WorkCard 里用 `<img>` 替换渐变色块。
2. **替换占位**：头像（About.jsx）、邮箱（Contact.jsx 的 hello@example.com）、自我介绍文案。
3. **后续可扩展**（按 skill）：图片灯箱（dialog 模态 + 键盘左右切换）、深色模式、作品详情页。
4. **自定义域名**：买好后告诉我域名 + DNS 服务商 + 根域/www，再配 Pages Custom Domain。

## 环境备忘（这台电脑）

- **必须开代理才能连 GitHub**：本机 Clash 在 `127.0.0.1:7890`，已写入 git 全局配置：
  ```bash
  git config --global http.proxy  http://127.0.0.1:7890
  git config --global https.proxy http://127.0.0.1:7890
  ```
- **npm 走代理**（首次 install 时）：`HTTP_PROXY=http://127.0.0.1:7890 HTTPS_PROXY=http://127.0.0.1:7890 npm install`
- **GitHub 登录**：`gh auth status`；如掉登录运行 `gh auth login`。当前 token 已含 `workflow` scope（推送 Actions 文件需要）。
- Git 身份：`Dinnrm` / `dinnrm020920@gmail.com`。
