export default function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#top">
        丁若木<span className="dot">.</span>
      </a>
      <nav className="nav" aria-label="主导航">
        <a href="#about">关于</a>
        <a href="#experience">社会服务</a>
        <a href="#projects">项目</a>
        <a href="#awards">获奖</a>
        <a href="#life">生活</a>
        <a href="#contact">联系</a>
      </nav>
    </header>
  )
}
