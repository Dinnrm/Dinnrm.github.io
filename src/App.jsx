import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { profile } from './data/content.js'
import { copy } from './data/translations.js'
import { usePreferences } from './hooks/usePreferences.js'
import { CONTINUOUS_PAGES, NAV_PAGES, usePageNavigation } from './hooks/usePageNavigation.js'
import PortfolioPage from './components/PortfolioPage.jsx'
import Icon from './components/Icon.jsx'

export default function App() {
  const { theme, setTheme, lang, setLang } = usePreferences()
  const { view, desktopMode, navigate: changePage } = usePageNavigation()
  const t = copy[lang]
  const en = lang === 'en'
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const menuButton = useRef(null)
  const nav = useRef(null)
  const indicator = useRef(null)

  useEffect(() => {
    document.title = `${t.nav[view]} · Dinnrm — ${en ? 'Ding Ruomu' : profile.name}`
  }, [view, lang, t])

  useLayoutEffect(() => {
    const navigation = nav.current
    const marker = indicator.current
    let frame = 0
    const measure = () => {
      cancelAnimationFrame(frame)
      const selected = navigation.querySelector('[aria-current="page"]')
      if (!desktopMode || !selected || !navigation.getBoundingClientRect().width) {
        marker.style.opacity = '0'
        return
      }
      const item = selected.getBoundingClientRect()
      const parent = navigation.getBoundingClientRect()
      marker.style.width = `${item.width}px`
      marker.style.transform = `translate3d(${item.left - parent.left - navigation.clientLeft}px, 0, 0)`
      marker.style.opacity = '1'
      frame = requestAnimationFrame(() => { marker.dataset.ready = 'true' })
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(navigation)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [view, lang, menuOpen, desktopMode])

  useEffect(() => {
    if (!menuOpen) return
    const top = window.scrollY
    const left = window.scrollX
    const frame = requestAnimationFrame(() => {
      nav.current.querySelector('a')?.focus({ preventScroll: true })
      // Some embedded/mobile browsers still scroll sticky descendants on focus.
      window.scrollTo({ top, left, behavior: 'instant' })
    })
    const close = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus({ preventScroll: true })
      }
    }
    const desktop = window.matchMedia('(min-width: 1100px)')
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false) }
    window.addEventListener('keydown', close)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('keydown', close)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [menuOpen])

  function navigate(page, event) {
    if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0)) return
    if (menuOpen) menuButton.current?.focus({ preventScroll: true })
    setMenuOpen(false)
    changePage(page, event)
  }

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className={'site-header' + (desktopMode ? ' single-header' : '')} onBlur={(event) => {
        if (menuOpen && !event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false)
      }}>
        <div className="header-inner">
          <a className="wordmark" href="#/home" onClick={(event) => navigate('home', event)} aria-label={t.homeLabel}>Dinnrm<span className="brand-dot">.</span></a>
          <nav ref={nav} className={'main-nav' + (menuOpen ? ' is-open' : '')} id="main-navigation" aria-label={t.navigation}>
            <span ref={indicator} className="nav-indicator" aria-hidden="true" />
            {NAV_PAGES.map((id) => (
              <a key={id} href={`#/${id}`} className={view === id ? 'is-active' : ''} aria-current={view === id ? 'page' : undefined} onClick={(event) => navigate(id, event)}>{t.nav[id]}</a>
            ))}
          </nav>
          <div className="header-controls">
            <button className="language-control" onClick={() => setLang(en ? 'zh' : 'en')} aria-label={t.switchLanguage}><span className={!en ? 'selected' : ''}>中</span><span className="control-divider">/</span><span className={en ? 'selected' : ''}>EN</span></button>
            <button className="icon-button theme-control" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? t.lightMode : t.darkMode} title={theme === 'dark' ? t.lightMode : t.darkMode}><span className="theme-symbol" key={theme}><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></span></button>
            <button ref={menuButton} className="icon-button menu-control" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? t.closeMenu : t.openMenu}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
          </div>
        </div>
      </header>
      {menuOpen && <button className="menu-backdrop" onClick={() => setMenuOpen(false)} aria-label={t.closeMenu} tabIndex={-1} />}

      <main id="main" className={'page-stage' + (desktopMode ? ' is-single' : ' is-continuous')} tabIndex={-1}>
        <p className="sr-only" role="status">{t.nav[view]}</p>
        <div className="page-content" key={desktopMode ? view : 'continuous'} data-page={desktopMode ? view : 'continuous'}>
          {(desktopMode ? [view] : CONTINUOUS_PAGES).map(page => (
            <PortfolioPage key={page} view={page} lang={lang} filter={filter} setFilter={setFilter} navigate={navigate} />
          ))}
        </div>
      </main>

      <footer className={'site-footer section-shell' + (desktopMode ? ' single-footer' : '')}>
        <p>© 2026 {profile.name} Dinnrm <span className="footer-divider">/</span> GitHub Pages</p>
      </footer>
    </>
  )
}
