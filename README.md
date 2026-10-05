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

电脑端采用独立栏目视图，一次只显示一个栏目；手机和 iPad 保留连续浏览的六个区块。导航顺序为主页、教育、获奖、设计、摄影、联系。原项目与设计已合并为“设计作品”，保留分类按钮及四个项目。链接使用 `#/home`、`#/education` 等形式，也兼容原有 `#education` 等链接；旧项目链接 `#/projects`、`#projects` 转到 `#/works`，支持刷新及浏览器前进、后退。

视觉采用暖白底色、深色文字、朱红强调色，以及统一的系统无衬线字体。电脑端使用圆角表面、轻微位移淡入、滑动导航选中背景和按压反馈。包含手机导航、设计分类筛选、中英文切换和深浅色模式。主题默认跟随系统，手动选择与语言偏好会保存在浏览器内；支持跨标签页同步、键盘焦点和减少动态效果偏好。

独立栏目仅在宽度至少 1100px、支持精细指针和悬停、且没有触控能力的环境启用。触控设备继续使用长页，包括接入触控板或使用桌面网站模式的 iPad；窄电脑窗口也使用长页。动效以 CSS 的透明度与位移为主，连续长页不会整体参与切页动画。

## 文件与内容维护

```text
src/
├── App.jsx                  # 页面容器、导航和分类筛选状态
├── components/
│   ├── PortfolioPage.jsx    # 六个栏目及保留的内容
│   └── Icon.jsx             # 共享图标
├── styles.css               # 主题变量、排版和响应式布局
├── hooks/
│   ├── usePreferences.js    # 主题、语言和偏好同步
│   └── usePageNavigation.js # 响应式页面模式、链接和滚动定位
├── data/
│   ├── content.js           # 原始个人介绍、奖项、项目、分类
│   ├── works.js             # 原有作品分类说明
│   └── translations.js     # 中英文界面与英文内容对应文本
└── assets/
    ├── portrait.png         # 保留的原始肖像
    ├── portrait-800.jpg     # 页面展示副本，600 × 800
    └── portrait-1400.jpg    # 高清展示副本，1050 × 1400
```

`src/components/` 中除上述两个组件外还保留了未启用的早期实现；当前发布入口是 `src/main.jsx` → `src/App.jsx` → `PortfolioPage.jsx`。修改页面请以当前入口为准。

原有介绍、奖项、项目和肖像均保留；按用户要求删除项目说明中的“已落地”、获奖行开头的级别标签及页脚返回主页、源码链接。主页移除顶部专业标签和底部导览行，常用软件位于作品按钮上方。教育页使用两张学历卡片与官方校徽，校园图片已移除，素材原始文件仍保留于 `src/assets/school/`。来源记录见该目录 `SOURCES.md`。

获奖电脑双栏按左栏从上到下、再右栏从上到下阅读，手机与平板仍为单列。设计分类依据 `content.js` 项目的 `categories` 数组筛选：全部 4 项、主视觉 4 项、品牌 1 项、书籍 1 项；海报暂没有单独条目，显示待补充。原四个大分类封面已删除。摄影仍为分类索引。`hello@example.com` 仍是原有示例邮箱，页面标注待更新。

修改内容时，同步更新 `content.js` 与 `translations.js` 的对应记录；若调整设计分类顺序，还需更新 `PortfolioPage.jsx` 中的分类映射。

## 发布

`.github/workflows/deploy.yml` 在推送到 `main` 时执行 `npm ci`、`npm run build`，并发布 `dist/`。Vite 使用根路径 `/`，符合此 GitHub Pages 用户站的部署方式。

本次改版在 `codex/portfolio-redesign` 分支完成；检查本地结果后，再按原工作流合并和发布。
