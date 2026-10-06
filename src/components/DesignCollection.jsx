import { projects, designWorks } from '../data/content.js'
import { projectImages } from '../data/projectImages.js'
import { copy } from '../data/translations.js'

export default function DesignCollection({ lang, filter, setFilter }) {
  const en = lang === 'en'
  const t = copy[lang]
  const visible = projects.filter(project => filter === 'all' || project.categories.includes(filter))
  const series = visible.filter(project => project.images?.length)
  const textProjects = visible.filter(project => !project.images?.length)

  return (
    <section id="works" className="content-section section-shell" aria-labelledby="works-title">
      <div className="section-heading"><div><p className="section-label">Design practice</p><h2 id="works-title">{t.worksTitle}</h2></div><p className="section-note">{t.projectsNote}</p></div>
      <div className="work-filters" role="group" aria-label={t.filterLabel}>
        <button className={filter === 'all' ? 'is-selected' : ''} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>{t.all}</button>
        {designWorks.map(work => <button key={work.id} className={filter === work.id ? 'is-selected' : ''} aria-pressed={filter === work.id} onClick={() => setFilter(work.id)}>{en ? work.titleEn : work.title}</button>)}
      </div>
      <p className="sr-only" role="status">{t.showing.replace('{count}', visible.length)}</p>
      {series.length > 0 && <div className="series-grid">
        {series.map((project, order) => <article className="series-card motion-item" key={project.id} style={{ '--order': order }}>
          <div className="series-display">
            <div className="series-preview" data-protected-image>
              {project.images.map(key => {
                const img = projectImages[key]
                return <img key={key} src={img.thumb} srcSet={`${img.thumb} 320w, ${img.medium} 960w`} sizes="(max-width: 767px) 24vw, 150px" width={img.width} height={img.height} loading="lazy" decoding="async" draggable="false" alt={`${en ? project.titleEn : project.title} · ${en ? img.captionEn : img.caption}`} />
              })}
            </div>
            <div className="series-caption"><div><p className="project-tag">{en ? project.tagEn : project.tag}</p><h3 className="series-title">{en ? project.titleEn : project.title}</h3></div><span className="series-count">{t.imageCount.replace('{count}', project.images.length)}</span></div>
          </div>
          <p className="series-description">{en ? project.descEn : project.desc}</p>
        </article>)}
      </div>}
      {textProjects.length > 0 && <div className="project-index">
        {textProjects.map((project, order) => <article className="project-entry motion-item" key={project.id} style={{ '--order': order + series.length }}>
          <span className="project-entry-number" aria-hidden="true">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
          <div><p className="project-entry-category">{en ? project.tagEn : project.tag}</p><h3>{en ? project.titleEn : project.title}</h3>{project.desc && <p className="project-entry-description">{en ? project.descEn : project.desc}</p>}</div>
        </article>)}
      </div>}
      {!visible.length && <p className="empty-category">{t.emptyCategory}</p>}
    </section>
  )
}
