import { projects, designWorks } from '../data/content.js'
import { projectImages } from '../data/projectImages.js'
import { copy } from '../data/translations.js'
import Icon from './Icon.jsx'

export default function DesignCollection({ lang, filter, setFilter, navigate }) {
  const en = lang === 'en'
  const t = copy[lang]
  const visible = projects.filter(project => filter === 'all' || project.categories.includes(filter))

  return (
    <section id="works" className="content-section section-shell" aria-labelledby="works-title">
      <div className="section-heading work-index-heading"><div><p className="section-label">Design practice</p><h2 id="works-title">{t.worksTitle}</h2></div><p className="section-note">{t.projectsNote}</p></div>
      <div className="work-filters" role="group" aria-label={t.filterLabel}>
        <button className={filter === 'all' ? 'is-selected' : ''} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>{t.all}</button>
        {designWorks.map(work => <button key={work.id} className={filter === work.id ? 'is-selected' : ''} aria-pressed={filter === work.id} onClick={() => setFilter(work.id)}>{en ? work.titleEn : work.title}</button>)}
      </div>
      <p className="sr-only" role="status">{t.showing.replace('{count}', visible.length)}</p>
      <div className="work-card-grid">
        {visible.map((project, order) => {
          const coverImages = (project.images || []).slice(0, 2).map(key => projectImages[key])
          const title = en ? project.titleEn : project.title
          return <article className="work-preview-card motion-item" key={project.id} style={{ '--order': order }}>
            <a className="work-preview-link" id={`project-link-${project.id}`} data-project-link href={`#/works/${project.id}`} onClick={event => navigate(`works/${project.id}`, event)} aria-label={`${t.viewProject} · ${title}`}>
              <div className={`work-cover ${coverImages.length ? 'has-artwork' : 'has-typography'}`} data-protected-image>
                {coverImages.length ? <div className="work-cover-artworks" style={{ '--preview-count': coverImages.length }}>
                  {coverImages.map(image => <img key={image.thumb} src={image.thumb} srcSet={`${image.thumb} 320w, ${image.medium} 960w`} sizes="(max-width: 767px) 120px, (max-width: 1099px) 190px, 240px" width={image.width} height={image.height} loading="lazy" decoding="async" draggable="false" alt="" />)}
                </div> : <div className="work-type-cover" aria-hidden="true"><span className="cover-discipline">{en ? project.tagEn : project.tag}</span><span className="cover-name">{en ? project.coverTitleEn : project.coverTitle}</span><span className="cover-rule" /></div>}
                <span className="work-cover-marker" aria-hidden="true">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
                <span className="work-cover-count">{coverImages.length ? t.imageCount.replace('{count}', project.images.length) : t.projectRecord}</span>
                <span className="work-cover-action" aria-hidden="true">{t.viewProject}<Icon /></span>
              </div>
              <div className="work-card-caption"><div><p className="work-card-category">{en ? project.tagEn : project.tag}</p><h3>{en ? project.listingTitleEn || title : project.listingTitle || title}</h3></div><span className="work-card-arrow" aria-hidden="true"><Icon /></span></div>
            </a>
          </article>
        })}
      </div>
      {!visible.length && <p className="empty-category">{t.emptyCategory}</p>}
    </section>
  )
}
