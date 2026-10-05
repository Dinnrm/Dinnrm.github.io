# 项目交接文档

最后更新：2026-10-05

## 当前实现

丁若木 / Dinnrm 的个人设计作品集。React 18 + Vite 6，自定义 CSS；GitHub Actions 构建 `dist/` 并发布到 GitHub Pages，部署配置保持原样。

- 网站：https://dinnrm.github.io/
- 仓库：https://github.com/Dinnrm/Dinnrm.github.io
- 当前改版分支：`codex/portfolio-redesign`
- 本次为本地设计改版，尚未发布。

## 设计与功能

依据用户提供的 `visual-content-websites` README 与 SKILL 改版：暖白底、深色文字、朱红强调色、衬线标题、保留完整肖像的纸张式展示。

由原先切换单个视图改为连续单页浏览，七个区块全部保留：主页、落地项目、设计、摄影、教育、获奖、联系。每个区块有原生锚点链接，桌面导航随滚动更新，手机菜单支持选择后关闭、Escape 关闭和焦点恢复。

设计分类筛选使用按钮选中状态和结果播报。中英文内容覆盖导航、正文、奖项、项目、可访问标签和页面元信息。深浅色默认跟随系统，手动偏好与语言保存在浏览器内并跨标签页同步；存储不可用时仍能切换。

## 内容保留与资产

`src/data/content.js`、`src/data/works.js` 和原始 `src/assets/portrait.png` 均未改动。

已展示完整个人介绍、4 个项目、15 项奖项、4 个设计分类、2 个摄影分类、教育经历及原有软件技能。未增加未经提供的项目、奖项、作品照片或联系资料。

肖像生成两个保持完整画面的展示副本，通过 `srcset` 按需加载：600 × 800 JPEG（约 70 KB）与 1050 × 1400 JPEG（约 176 KB）。原始约 2 MB 的 PNG 保留。

## 维护入口

- `src/App.jsx`：当前页面与交互。
- `src/styles.css`：全部视觉样式；配色集中在根级语义变量。
- `src/data/content.js`：原始中文内容。
- `src/data/works.js`：原有分类说明。
- `src/data/translations.js`：中英文对应内容。
- `src/hooks/usePreferences.js`：偏好、语言和主题逻辑。
- `index.html`：启动时应用偏好，避免主题闪烁。

`src/components/` 中的早期组件未启用，部分引用的旧数据字段已不在当前数据内。不要直接接入这些组件；使用当前 App，或先对齐数据再复用。

## 验证与后续

验证记录见 `DESIGN_QA.md`。项目没有现成的 lint 或 test 脚本；使用实际 Vite 生产构建和浏览器交互检查。

后续可替换的现有占位：

1. `hello@example.com` 仍为原有示例邮箱，页面明确标为待更新。
2. 当前设计和摄影只展示分类，尚无真实作品图。加入真实资产时保留作者、说明、图片尺寸和原片，避免把分类封面当成作品。
3. 自定义域名尚未配置。

常规命令：`npm ci`、`npm run dev`、`npm run build`、`npm run preview`。推送 `main` 会自动发布，因此发布应在用户确认要上线后执行。
