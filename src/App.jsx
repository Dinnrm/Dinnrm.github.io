import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { profile, awards, projects, designWorks, photos } from './data/content.js'
import { works } from './data/works.js'
import { copy, englishContent } from './data/translations.js'
import { usePreferences } from './hooks/usePreferences.js'
import portrait from './assets/portrait-800.jpg'
import portraitLarge from './assets/portrait-1400.jpg'

const sections = ['home', 'projects', 'works', 'photos', 'education', 'awards', 'contact']
const categoryKeys = ['poster', 'visual', 'brand', 'book']
const categoryNames = ['Poster design', 'Key visual', 'Brand identity', 'Book design']
const categoryDescriptions = [works[1].desc, '展演活动主视觉系统搭建', works[0].desc, works[2].desc]

function Icon({ name = 'arrow', ...props }) {
  const paths = {
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    moon: <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />,
    menu: <path d="M4 8h16M4 16h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>
}

function SectionHeading({ label, title, children }) {
  return <div className="section-heading"><div><p className="section-label">{label}</p><h2>{title}</h2></div>{children}</div>
}

export default function App() {
  const { theme, setTheme, lang, setLang } = usePreferences()
  const t = copy[lang]
  const en = lang === 'en'
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const menuButton = useRef(null)
  const intro = en ? englishContent.intro : profile.intro

  useLayoutEffect(() => {
    // React mounts after the browser's first fragment lookup. Resolve direct links
    // once every section exists, before paint, without an initial scroll animation.
    const target = document.getElementById(window.location.hash.slice(1))
    target?.scrollIntoView({ behavior: 'instant' })
  }, [])

  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
          setActive('contact')
          return
        }
        const current = [...sections].reverse().find((id) => document.getElementById(id)?.getBoundingClientRect().top <= 160)
        setActive(current || 'home')
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const focusFrame = requestAnimationFrame(() => document.querySelector('.main-nav a')?.focus())
    const close = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 1100px)')
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false) }
    window.addEventListener('keydown', close)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      cancelAnimationFrame(focusFrame)
      window.removeEventListener('keydown', close)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const navigate = (id) => {
    setActive(id)
    closeMenu()
  }

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className="site-header" onBlur={(event) => {
        if (menuOpen && !event.currentTarget.contains(event.relatedTarget)) closeMenu()
      }}>
        <div className="header-inner">
          <a className="wordmark" href="#home" onClick={() => navigate('home')} aria-label={t.homeLabel}>Dinnrm<span className="brand-dot">.</span></a>
          <nav className={'main-nav' + (menuOpen ? ' is-open' : '')} id="main-navigation" aria-label={t.navigation}>
            {sections.map((id) => <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => navigate(id)}>{t.nav[id]}</a>)}
          </nav>
          <div className="header-controls">
            <button className="language-control" onClick={() => setLang(en ? 'zh' : 'en')} aria-label={t.switchLanguage}><span className={!en ? 'selected' : ''}>中</span><span className="control-divider">/</span><span className={en ? 'selected' : ''}>EN</span></button>
            <button className="icon-button theme-control" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? t.lightMode : t.darkMode} title={theme === 'dark' ? t.lightMode : t.darkMode}><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></button>
            <button ref={menuButton} className="icon-button menu-control" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? t.closeMenu : t.openMenu}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
          </div>
        </div>
      </header>
      {menuOpen && <button className="menu-backdrop" onClick={closeMenu} aria-label={t.closeMenu} tabIndex={-1} />}

      <main id="main">
        <section id="home" className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker"><span className="accent-mark" />{t.discipline}</p>
            <p className="hello">{t.hello}</p>
            <h1 id="hero-title">{en ? 'Ding Ruomu' : profile.name}<span className="name-dot">.</span></h1>
            <p className="hero-signature">{en ? profile.name : 'Dinnrm'} <span>/ {t.designer}</span></p>
            <p className="hero-intro">{intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#works" onClick={() => navigate('works')}>{t.viewWorks}<span className="button-icon"><Icon /></span></a>
              <a className="text-link" href="#contact" onClick={() => navigate('contact')}>{t.contactMe}<Icon /></a>
            </div>
          </div>
          <figure className="portrait-panel">
            <div className="portrait-surface"><img src={portrait} srcSet={`${portrait} 600w, ${portraitLarge} 1050w`} sizes="(max-width: 767px) 350px, 410px" alt={t.portraitAlt} width="2160" height="2880" fetchPriority="high" decoding="async" /></div>
            <figcaption><span>{profile.name} <span className="caption-slash">/</span> {profile.pinyin}</span><span>{en ? 'Qingdao · Jinan' : profile.location}</span></figcaption>
          </figure>
          <div className="hero-bottom"><p>{t.focus}</p><a href="#projects" className="scroll-link" onClick={() => navigate('projects')}>{t.explore}<Icon name="down" /></a></div>
        </section>

        <section id="projects" className="content-section section-shell" aria-labelledby="projects-title">
          <SectionHeading label="Selected projects" title={<span id="projects-title">{t.projectsTitle}</span>}><p className="section-note">{t.projectsNote}</p></SectionHeading>
          <div className="project-grid">
            {projects.map((project, index) => <article className="project-card" key={project.title}>
              <div className="project-top"><span className="project-number">0{index + 1}</span><span className="project-tag">{en ? englishContent.projects[index].tag : project.tag}</span></div>
              <h3>{en ? englishContent.projects[index].title : project.title}</h3>
              <p>{en ? englishContent.projects[index].desc : project.desc}</p>
              <div className="project-bottom"><span>{en ? project.title : englishContent.projects[index].short}</span><span className="project-rule" /></div>
            </article>)}
          </div>
        </section>

        <section id="works" className="content-section section-shell" aria-labelledby="works-title">
          <SectionHeading label="Design practice" title={<span id="works-title">{t.worksTitle}</span>}><p className="section-note">{t.categoriesNote}</p></SectionHeading>
          <div className="work-filters" role="group" aria-label={t.filterLabel}>
            <button className={filter === 'all' ? 'is-selected' : ''} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>{t.all}</button>
            {designWorks.map((work, index) => <button key={work.title} className={filter === categoryKeys[index] ? 'is-selected' : ''} aria-pressed={filter === categoryKeys[index]} onClick={() => setFilter(categoryKeys[index])}>{en ? categoryNames[index] : work.title}</button>)}
          </div>
          <p className="sr-only" role="status">{t.showing.replace('{count}', filter === 'all' ? designWorks.length : 1)}</p>
          <div className="design-grid">
            {designWorks.map((work, index) => (filter === 'all' || filter === categoryKeys[index]) && <article className={`design-card design-${categoryKeys[index]}`} key={work.title}>
              <div className="category-cover" aria-hidden="true"><span className="cover-label">{categoryNames[index]}</span><span className="cover-type">{['海报', '视觉', '品牌', '书籍'][index]}</span><span className="cover-line" /><span className="cover-caption">{t.designCategory}</span></div>
              <div className="category-info"><div><h3>{en ? categoryNames[index] : work.title}</h3><p>{en ? englishContent.categoryDescriptions[index] : categoryDescriptions[index]}</p></div><span className="category-index">0{index + 1}</span></div>
            </article>)}
          </div>
        </section>

        <section id="photos" className="content-section photography-section" aria-labelledby="photos-title">
          <div className="section-shell">
            <SectionHeading label="Through the lens" title={<span id="photos-title">{t.photosTitle}</span>}><p className="section-note">{t.photoDescription}</p></SectionHeading>
            <div className="photo-categories">{photos.map((photo, index) => <article className="photo-category" key={photo.title}><span className="photo-index">0{index + 1}</span><div><p className="photo-english">{index === 0 ? 'Portrait' : 'Landscape'}</p><h3>{en ? englishContent.photos[index] : photo.title}</h3></div><span className="photo-category-label">{t.photoCategory}</span></article>)}</div>
          </div>
        </section>

        <section id="education" className="content-section section-shell education-section" aria-labelledby="education-title">
          <div><p className="section-label">Background</p><h2 id="education-title">{t.educationTitle}</h2><p className="education-intro">{en ? englishContent.education : profile.education}</p></div>
          <div className="education-body"><h3>{t.school}</h3><div className="education-row"><span className="degree-label">{t.bachelor}</span><p>{t.bachelorMajor}</p></div><div className="education-row"><span className="degree-label">{t.master}</span><p>{t.masterMajor}</p></div><div className="software-list"><p>{t.tools}</p><ul>{profile.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div></div>
        </section>

        <section id="awards" className="content-section section-shell" aria-labelledby="awards-title">
          <SectionHeading label="Recognition" title={<span id="awards-title">{t.awardsTitle}</span>}><p className="section-note">{t.awardsDescription}</p></SectionHeading>
          <ol className="award-list">{awards.map((award, index) => <li className="award-row" key={award.name}><span className="award-index">{String(index + 1).padStart(2, '0')}</span><span className={award.level === '国家级' ? 'award-level national' : 'award-level'}>{en ? (award.level === '国家级' ? 'National' : 'Provincial') : award.level}</span><p>{en ? englishContent.awards[index] : award.name}</p></li>)}</ol>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="section-shell contact-inner"><p className="section-label">Get in touch</p><h2 id="contact-title">{t.contactTitle}<span className="name-dot">.</span></h2><div className="contact-bottom"><div><a className="contact-email" href="mailto:hello@example.com">hello@example.com<Icon /></a><p className="contact-note">{t.emailPending}</p></div><a className="text-link" href="https://github.com/Dinnrm" target="_blank" rel="noopener noreferrer">GitHub / Dinnrm<Icon /></a></div></div></section>
      </main>

      <footer className="site-footer section-shell"><p>© 2026 {profile.name} Dinnrm <span className="footer-divider">/</span> GitHub Pages</p><a href="#home" className="back-top" onClick={() => navigate('home')}>{t.backTop}<Icon name="down" /></a><a className="source-link" href="https://github.com/Dinnrm/Dinnrm.github.io" target="_blank" rel="noopener noreferrer">{t.source}<Icon /></a></footer>
    </>
  )
}
