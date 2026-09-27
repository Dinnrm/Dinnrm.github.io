export default function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#top">
        Dinnrm<span className="dot">.</span>
      </a>
      <nav className="nav" aria-label="主导航">
        <a href="#about">关于我</a>
        <a href="#work">作品</a>
        <a href="#contact">联系</a>
      </nav>
    </header>
  )
}
