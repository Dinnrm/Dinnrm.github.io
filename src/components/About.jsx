export default function About() {
  return (
    <section id="about" className="intro">
      <div className="intro-avatar" aria-hidden="true">
        D
      </div>
      <div className="intro-body">
        <h2>关于我</h2>
        <p className="intro-lead">
          我是一名设计师，日常工作围绕品牌视觉、海报与书籍展开，
          也用摄影记录生活。这里是我的作品预览，欢迎翻阅。
        </p>
        <ul className="facts">
          <li>
            <span>方向</span>品牌 · 平面 · 影像
          </li>
          <li>
            <span>所在地</span>中国 · 青岛
          </li>
          <li>
            <span>状态</span>接受合作邀约
          </li>
        </ul>
      </div>
    </section>
  )
}
