import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import {
  profile,
  awards,
  projects,
  designWorks,
  photos,
} from './data/content.js'
import portrait from './assets/portrait.png'

const NAV = [
  { id: 'home', label: '主页', en: 'Home' },
  { id: 'education', label: '教育', en: 'Edu' },
  { id: 'awards', label: '获奖', en: 'Awards' },
  { id: 'projects', label: '项目', en: 'Projects' },
  { id: 'works', label: '设计', en: 'Works' },
  { id: 'photos', label: '摄影', en: 'Photos' },
  { id: 'contact', label: '联系', en: 'Contact' },
]

// 通用滑块分段控件
function Segmented({ options, value, onChange, activeBg = 'var(--accent)' }) {
  const innerRef = useRef(null)
  const pillRef = useRef(null)
  const itemRefs = useRef({})

  useLayoutEffect(() => {
    const el = itemRefs.current[value]
    const inner = innerRef.current
    const pill = pillRef.current
    if (!el || !inner || !pill) return
    const innerRect = inner.getBoundingClientRect()
    const rect = el.getBoundingClientRect()
    pill.style.left = rect.left - innerRect.left + 'px'
    pill.style.width = rect.width + 'px'
  }, [value])

  return (
    <div className="seg">
      <span className="nav-inner" ref={innerRef}>
        <span className="pill" ref={pillRef} style={{ background: activeBg }} />
        {options.map((o) => (
          <button
            key={o.value}
            ref={(el) => (itemRefs.current[o.value] = el)}
            className={'nav-item' + (value === o.value ? ' active' : '')}
            onClick={() => onChange(o.value)}
            aria-label={o.label}
          >
            {o.label}
          </button>
        ))}
      </span>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState('home')
  const [dark, setDark] = useState(false)
  const [lang, setLang] = useState('zh')
  const itemRefs = useRef({})
  const innerRef = useRef(null)
  const pillRef = useRef(null)

  const go = (id) => setView(id)

  useLayoutEffect(() => {
    const el = itemRefs.current[view]
    const inner = innerRef.current
    const pill = pillRef.current
    if (!el || !inner || !pill) return
    const innerRect = inner.getBoundingClientRect()
    const rect = el.getBoundingClientRect()
    pill.style.left = rect.left - innerRect.left + 'px'
    pill.style.width = rect.width + 'px'
  }, [view])

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
  }, [dark])

  return (
    <>
      <div className="nav-wrap">
        <nav className="nav">
          <span className="nav-inner" ref={innerRef}>
            <span className="pill" ref={pillRef} />
            {NAV.map((n) => (
              <button
                key={n.id}
                ref={(el) => (itemRefs.current[n.id] = el)}
                className={'nav-item' + (view === n.id ? ' active' : '')}
                onClick={() => go(n.id)}
              >
                {lang === 'zh' ? n.label : n.en}
              </button>
            ))}
          </span>
        </nav>
        <div className="nav-right">
          <Segmented
            options={[
              { value: 'light', label: '☀' },
              { value: 'dark', label: '☾' },
            ]}
            value={dark ? 'dark' : 'light'}
            onChange={(v) => setDark(v === 'dark')}
            activeBg="#1d1d1f"
          />
          <Segmented
            options={[
              { value: 'zh', label: '中' },
              { value: 'en', label: 'EN' },
            ]}
            value={lang}
            onChange={setLang}
          />
        </div>
      </div>

      <main className="stage">
        {view === 'home' && (
          <section className="view">
            <div className="hero">
              <div>
                <p className="hello">{lang === 'zh' ? '你好，我是' : 'Hi, I am'}</p>
                <h1 className="big-name">丁若木<span className="dot">.</span></h1>
                <p className="hero-sub">{profile.intro}</p>
                <div className="hero-btns">
                  <button className="btn-dark" onClick={() => go('works')}>
                    {lang === 'zh' ? '查看我的作品' : 'View Works'} <span className="arrow">↗</span>
                  </button>
                  <button className="btn-ghost" onClick={() => go('contact')}>
                    {lang === 'zh' ? '联系我' : 'Contact'}
                  </button>
                </div>
              </div>
              <div className="hero-photo">
                <img src={portrait} alt="丁若木肖像" />
              </div>
            </div>
          </section>
        )}

        {view === 'education' && (
          <section className="view">
            <p className="eyebrow">Education</p>
            <h2 className="h2">{lang === 'zh' ? '教育经历' : 'Education'}</h2>
            <div className="edu-block">
              <h3>山东艺术学院</h3>
              <p>视觉传达设计专业 · 本科</p>
              <p>视觉传达设计（传统文化传承与创新方向）· 硕士在读</p>
            </div>
          </section>
        )}

        {view === 'awards' && (
          <section className="view">
            <p className="eyebrow">Honors</p>
            <h2 className="h2">{lang === 'zh' ? '竞赛获奖' : 'Awards'}</h2>
            <p className="sub">{lang === 'zh' ? '累计国家级 4 项、省级十余项设计竞赛奖项。' : '4 national and over ten provincial design awards.'}</p>
            <div className="award-list">
              {awards.map((a, i) => (
                <div className="award-row" key={i}>
                  <span className={a.level === '国家级' ? 'lvl national' : 'lvl'}>{a.level}</span>
                  <span>{a.name}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {view === 'projects' && (
          <section className="view">
            <p className="eyebrow">Projects</p>
            <h2 className="h2">{lang === 'zh' ? '落地项目' : 'Projects'}</h2>
            <div className="projects">
              {projects.map((p) => (
                <div className="project-card" key={p.title}>
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {view === 'works' && (
          <section className="view">
            <p className="eyebrow">Works</p>
            <h2 className="h2">{lang === 'zh' ? '设计作品' : 'Design Works'}</h2>
            <div className="works-grid">
              {designWorks.map((w) => (
                <div className="work-tile" style={{ '--c1': w.c1, '--c2': w.c2 }} key={w.title}>
                  {w.title}
                </div>
              ))}
            </div>
          </section>
        )}

        {view === 'photos' && (
          <section className="view">
            <p className="eyebrow">Photography</p>
            <h2 className="h2">{lang === 'zh' ? '摄影作品' : 'Photography'}</h2>
            <div className="photo-grid">
              {photos.map((p) => (
                <div className="photo-tile" style={{ '--c1': p.c1, '--c2': p.c2 }} key={p.title}>
                  {p.title}
                </div>
              ))}
            </div>
          </section>
        )}

        {view === 'contact' && (
          <section className="view center">
            <p className="eyebrow">Contact</p>
            <h2 className="h2">{lang === 'zh' ? '期待合作' : 'Get in touch'}</h2>
            <a className="contact-mail" href="mailto:hello@example.com">hello@example.com</a>
          </section>
        )}
      </main>

      <footer className="footer">© 2026 丁若木 Dinnrm · GitHub Pages</footer>
    </>
  )
}
