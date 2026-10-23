import { projectImages } from '../data/projectImages.js'
import { copy } from '../data/translations.js'
import Icon from './Icon.jsx'

export default function ProjectDetail({ project, lang, navigate }) {
  const en = lang === 'en'
  const t = copy[lang]
  const title = en ? project.titleEn : project.title
  const description = en ? project.descEn : project.desc
  const showcase = project.galleryLayout === 'showcase'
  return (
    <section className="project-detail section-shell" aria-labelledby="project-title">
      <a className="project-back" href="#/works" onClick={event => navigate('works', event, { restoreCollection: true })}><Icon name="back" />{t.backWorks}</a>
      <header className="project-detail-heading"><p className="section-label">{en ? project.tagEn : project.tag}</p><h1 id="project-title" tabIndex={-1}>{title}</h1></header>
      <div className="project-description"><h2 className="project-section-title">{t.projectNotes}</h2><div className="project-description-body">{(description || t.descriptionPending).split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></div>
      <div className={'project-artwork-block' + (showcase ? ' has-showcase' : '')}><h2 className="project-section-title">{t.projectGallery}</h2>
      {project.images?.length ? <div className={'project-artwork-list' + (showcase ? ' is-showcase' : '')}>
        {project.images.map((key, index) => {
          const image = projectImages[key]
          const caption = en ? image.captionEn : image.caption
          const full = showcase && image.gallerySpan === 'full'
          const sizes = showcase ? (full ? '(max-width: 767px) 250px, (max-width: 1099px) calc(100vw - 160px), 960px' : '(max-width: 767px) 250px, (max-width: 1099px) calc(50vw - 100px), 500px') : '(max-width: 767px) 250px, (max-width: 1099px) 440px, 600px'
          return <figure className={'project-artwork' + (full ? ' is-wide' : '') + (showcase && image.height > image.width ? ' is-portrait' : '')} key={key} data-protected-image>
            <div className="project-artwork-surface"><img src={image.medium} srcSet={`${image.thumb} 320w, ${image.medium} 960w`} sizes={sizes} width={image.width} height={image.height} alt={`${title} · ${caption}`} draggable="false" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" /></div>
            <figcaption><span>{caption}</span><span>{String(index + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}</span></figcaption>
          </figure>
        })}
      </div> : <p className="project-images-pending">{t.imagesPending}</p>}</div>
    </section>
  )
}
