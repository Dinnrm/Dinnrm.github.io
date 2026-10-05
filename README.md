# Dinnrm — 个人设计作品集

丁若木的个人网站，使用 React 18、Vite 6 和自定义 CSS，托管在 GitHub Pages。

- 网站：https://dinnrm.github.io/
- 仓库：https://github.com/Dinnrm/Dinnrm.github.io

## 本地开发

使用 Node.js 22（与部署环境一致）：

```bash
npm ci
npm run dev
```

生产构建与预览：

```bash
npm run build
npm run preview
```

## 页面与设计

连续浏览的单页作品集，包含主页、落地项目、设计作品分类、摄影分类、教育经历、竞赛获奖和联系。各区块支持 `#home`、`#projects`、`#works`、`#photos`、`#education`、`#awards`、`#contact` 直接链接。

视觉采用暖白纸张、深色文字、朱红强调色，以及系统宋体与衬线字体。包含手机导航、设计分类筛选、中英文切换和深浅色模式。主题默认跟随系统，手动选择与语言偏好会保存在浏览器内；支持跨标签页同步、键盘焦点和减少动态效果偏好。

## 文件与内容维护

```text
src/
├── App.jsx                  # 页面布局、导航和分类筛选
├── styles.css               # 主题变量、排版和响应式布局
├── hooks/usePreferences.js  # 主题、语言和偏好同步
├── data/
│   ├── content.js           # 原始个人介绍、奖项、项目、分类
│   ├── works.js             # 原有作品分类说明
│   └── translations.js     # 中英文界面与英文内容对应文本
└── assets/
    ├── portrait.png         # 保留的原始肖像
    ├── portrait-800.jpg     # 页面展示副本，600 × 800
    └── portrait-1400.jpg    # 高清展示副本，1050 × 1400
```

`src/components/` 中保留了早期实现；当前发布入口是 `src/main.jsx` → `src/App.jsx`。修改页面请以当前入口为准。

原始中文数据和肖像未改动。当前只有真实肖像，没有项目作品图或摄影原片，设计封面与摄影条目明确作为分类呈现。`hello@example.com` 仍是原有示例邮箱，页面标注待更新。

修改内容时，同步更新 `content.js` 与 `translations.js` 的对应记录；若调整设计分类顺序，还需更新 `App.jsx` 中的分类映射。

## 发布

`.github/workflows/deploy.yml` 在推送到 `main` 时执行 `npm ci`、`npm run build`，并发布 `dist/`。Vite 使用根路径 `/`，符合此 GitHub Pages 用户站的部署方式。

本次改版在 `codex/portfolio-redesign` 分支完成；检查本地结果后，再按原工作流合并和发布。
