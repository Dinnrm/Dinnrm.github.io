import { profile, awards, projects, designWorks, photos } from '../data/content.js'
import { copy, englishContent } from '../data/translations.js'
import Icon from './Icon.jsx'
import portrait from '../assets/portrait-800.jpg'
import portraitLarge from '../assets/portrait-1400.jpg'
import schoolEmblem from '../assets/school/sdca-emblem.webp'

const categoryKeys = ['poster', 'visual', 'brand', 'book']
const categoryNames = ['Poster design', 'Key visual', 'Brand identity', 'Book design']

function SectionHeading({ label, title, children }) {
  return <div className="section-heading"><div><p className="section-label">{label}</p><h2>{title}</h2></div>{children}</div>
}

export default function PortfolioPage({ view, lang, filter, setFilter, navigate }) {
  const en = lang === 'en'
  const t = copy[lang]
  const intro = en ? englishContent.intro : profile.intro
  const visibleProjects = projects.map((project, index) => ({ ...project, index })).filter(project => filter === 'all' || project.categories.includes(filter))

  switch (view) {
    case 'home':
      return (
        <section id="home" className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hello">{t.hello}</p>
            <h1 id="hero-title">{en ? 'Ding Ruomu' : profile.name}<span className="name-dot">.</span></h1>
            <p className="hero-signature">{en ? profile.name : 'Dinnrm'} <span>/ {t.designer}</span></p>
            <p className="hero-intro">{intro}</p>
            <div className="software-list"><p>{t.tools}</p><ul>{profile.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
            <div className="hero-actions">
              <a className="button button-primary" href="#/works" onClick={(event) => navigate('works', event)}>{t.viewWorks}<span className="button-icon"><Icon /></span></a>
              <a className="text-link" href="#/contact" onClick={(event) => navigate('contact', event)}>{t.contactMe}<Icon /></a>
            </div>
          </div>
          <figure className="portrait-panel">
            <div className="portrait-surface"><img src={portrait} srcSet={`${portrait} 600w, ${portraitLarge} 1050w`} sizes="(max-width: 767px) 350px, 410px" alt={t.portraitAlt} width="2160" height="2880" fetchpriority="high" decoding="async" /></div>
            <figcaption><span>{profile.name} <span className="caption-slash">/</span> {profile.pinyin}</span><span>{en ? 'Qingdao · Jinan' : profile.location}</span></figcaption>
          </figure>
        </section>
      )
    case 'works':
      return (
        <section id="works" className="content-section section-shell" aria-labelledby="works-title">
          <SectionHeading label="Design practice" title={<span id="works-title">{t.worksTitle}</span>}><p className="section-note">{t.projectsNote}</p></SectionHeading>
          <div className="work-filters" role="group" aria-label={t.filterLabel}>
            <button className={filter === 'all' ? 'is-selected' : ''} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>{t.all}</button>
            {designWorks.map((work, index) => <button key={work.title} className={filter === categoryKeys[index] ? 'is-selected' : ''} aria-pressed={filter === categoryKeys[index]} onClick={() => setFilter(categoryKeys[index])}>{en ? categoryNames[index] : work.title}</button>)}
          </div>
          <p className="sr-only" role="status">{t.showing.replace('{count}', visibleProjects.length)}</p>
          <div className="project-grid">
            {visibleProjects.map((project, order) => <article className="project-card motion-item" style={{ '--order': order }} key={project.title}>
              <div className="project-top"><span className="project-number">0{project.index + 1}</span><span className="project-tag">{en ? englishContent.projects[project.index].tag : project.tag}</span></div>
              <h3>{en ? englishContent.projects[project.index].title : project.title}</h3>
              <p>{en ? englishContent.projects[project.index].desc : project.desc}</p>
              <div className="project-bottom"><span>{en ? project.title : englishContent.projects[project.index].short}</span><span className="project-rule" /></div>
            </article>)}
          </div>
          {visibleProjects.length === 0 && <p className="empty-category">{t.emptyCategory}</p>}
        </section>
      )
    case 'photos':
      return (
        <section id="photos" className="content-section photography-section" aria-labelledby="photos-title">
          <div className="section-shell">
            <SectionHeading label="Through the lens" title={<span id="photos-title">{t.photosTitle}</span>}><p className="section-note">{t.photoDescription}</p></SectionHeading>
            <div className="photo-categories">{photos.map((photo, index) => <article className="photo-category motion-item" style={{ '--order': index }} key={photo.title}><span className="photo-index">0{index + 1}</span><div><p className="photo-english">{index === 0 ? 'Portrait' : 'Landscape'}</p><h3>{en ? englishContent.photos[index] : photo.title}</h3></div><span className="photo-category-label">{t.photoCategory}</span></article>)}</div>
          </div>
        </section>
      )
    case 'education':
      return (
        <section id="education" className="content-section section-shell education-section" aria-labelledby="education-title">
          <div className="education-heading"><p className="section-label">Background</p><h2 id="education-title">{t.educationTitle}</h2></div>
            <div className="education-degrees">
              {[{ degree: t.bachelor, major: t.bachelorMajor }, { degree: t.master, major: t.masterMajor }].map((item, index) => (
                <article className="degree-card motion-item" style={{ '--order': index + 1 }} key={index}>
                  <span className="school-emblem"><img src={schoolEmblem} alt={t.emblemAlt} width="234" height="240" decoding="async" loading="lazy" /></span>
                  <div className="degree-details"><p className="degree-label">{item.degree}</p><h3>{t.school}</h3><p className="degree-major">{item.major}</p></div>
                </article>
              ))}
            </div>
        </section>
      )
    case 'awards':
      return (
        <section id="awards" className="content-section section-shell" aria-labelledby="awards-title">
          <SectionHeading label="Recognition" title={<span id="awards-title">{t.awardsTitle}</span>}><p className="section-note">{t.awardsDescription}</p></SectionHeading>
          <ol className="award-list" style={{ '--award-rows': Math.ceil(awards.length / 2) }}>{awards.map((award, index) => <li className="award-row motion-item" style={{ '--order': index }} key={award.name}><span className="award-index">{String(index + 1).padStart(2, '0')}</span><p>{en ? englishContent.awards[index] : award.name}</p></li>)}</ol>
        </section>
      )
    case 'contact':
      return (
        <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="section-shell contact-inner"><p className="section-label">Get in touch</p><h2 id="contact-title">{t.contactTitle}<span className="name-dot">.</span></h2><div className="contact-bottom"><div><a className="contact-email" href="mailto:hello@example.com">hello@example.com<Icon /></a><p className="contact-note">{t.emailPending}</p></div><a className="text-link" href="https://github.com/Dinnrm" target="_blank" rel="noopener noreferrer">GitHub / Dinnrm<Icon /></a></div></div></section>
      )
    default:
      return null
  }
}
