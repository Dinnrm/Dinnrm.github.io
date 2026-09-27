# 项目交接文档 (HANDOVER)

> 最后更新：2026-09-27
> 用途：下次打开这个项目时，先读这一份，就能直接接着做。

## 这是什么

Dinnrm 的个人设计作品集网站，托管在 GitHub Pages。
纯 HTML + CSS，无框架、无构建步骤、无 CDN。

- **GitHub 仓库**：https://github.com/Dinnrm/Dinnrm.github.io
- **线上地址**：https://dinnrm.github.io/
- **本地路径**：`~/Documents/GitHub/Dinnrm.github.io`
- **部署方式**：推送到 `main` 分支 → GitHub Pages 自动发布（分支 main，目录 root）

## 当前状态（2026-09-27）

- [x] 本地 Git 环境、gh CLI、登录账号 Dinnrm 已就绪
- [x] GitHub Pages 已启用并强制 HTTPS
- [x] 首页为中文作品集，结构：Hero → 关于我 → 作品（品牌/海报/书籍/摄影四类）→ 联系 → 页脚
- [x] 代码已提交并推送到 main
- [ ] 作品图、头像、真实文案、真实邮箱仍是占位内容
- [ ] 自定义域名未配置（等购买后再做）

## 文件结构

```
Dinnrm.github.io/
├── index.html        # 首页（所有内容都在这一页）
├── css/
│   └── style.css     # 全部样式，CSS 变量在 :root 里改配色
├── .gitignore
├── README.md
└── HANDOVER.md       # 本文件
```

## 日常改网站（重要）

```bash
cd ~/Documents/GitHub/Dinnrm.github.io

# 本地预览（浏览器开 http://localhost:8000）
python3 -m http.server 8000

# 改完后提交上线
git status
git add .
git commit -m "写清楚改了什么"
git push origin main
# 等 1~2 分钟刷新 https://dinnrm.github.io/
```

## 下次要继续做的事

1. **替换占位内容**：
   - 头像：`index.html` 里的 `<div class="intro-avatar">D</div>`，换成照片时把这行改成 `<img>`，或把图片放进 `images/` 目录。
   - 邮箱：现在是 `hello@example.com`，改成真实邮箱。
   - 自我介绍、作品卡片下方的描述文案，按真实情况改。
2. **加入真实作品图**：在 `css/style.css` 里每个卡片的 `.thumb` 目前是渐变色占位；换成图片时，把背景改成 `background-image: url('../images/xxx.jpg')`，建议作品图先放到新建的 `images/` 文件夹。
3. **自定义域名**：等买好域名，告诉我域名 + DNS 服务商 + 用根域名还是 www，再配置 Pages Custom Domain 和 DNS 记录。

## 环境备忘（这台电脑上的特殊设置）

- **必须开代理才能连 GitHub**：本机 Clash 在 `127.0.0.1:7890`，已写入 git 全局配置：
  ```bash
  git config --global http.proxy  http://127.0.0.1:7890
  git config --global https.proxy http://127.0.0.1:7890
  ```
  如果以后 Clash 端口变了，用上面两条命令改。
- **GitHub 登录**：`gh auth status` 可查看；如掉登录，运行 `gh auth login`（选 GitHub.com → HTTPS → 浏览器授权）。
- Git 身份：`Dinnrm` / `dinnrm020920@gmail.com`。
