import { projectImages } from '../data/projectImages.js'
import { copy } from '../data/translations.js'
import Icon from './Icon.jsx'

export default function ProjectDetail({ project, lang, navigate }) {
  const en = lang === 'en'
  const t = copy[lang]
  const title = en ? project.titleEn : project.title
  const description = en ? project.descEn : project.desc
  return (
    <section className="project-detail section-shell" aria-labelledby="project-title">
      <a className="project-back" href="#/works" onClick={event => navigate('works', event)}><Icon name="back" />{t.backWorks}</a>
      <header className="project-detail-heading"><p className="section-label">{en ? project.tagEn : project.tag}</p><h1 id="project-title" tabIndex={-1}>{title}</h1></header>
      <div className="project-description"><p>{description || t.descriptionPending}</p></div>
      {project.images?.length ? <div className="project-artwork-list">
        {project.images.map((key, index) => {
          const image = projectImages[key]
          const caption = en ? image.captionEn : image.caption
          return <figure className="project-artwork" key={key} data-protected-image>
            <div className="project-artwork-surface"><img src={image.medium} srcSet={`${image.thumb} 320w, ${image.medium} 960w`} sizes="(max-width: 767px) calc(100vw - 64px), 720px" width={image.width} height={image.height} alt={`${title} · ${caption}`} draggable="false" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" /></div>
            <figcaption><span>{caption}</span><span>{String(index + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}</span></figcaption>
          </figure>
        })}
      </div> : <p className="project-images-pending">{t.imagesPending}</p>}
    </section>
  )
}
