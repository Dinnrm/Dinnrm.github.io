import { projectImages } from '../data/projectImages.js'

export default function ProjectCaseStudy({ project, lang }) {
  const en = lang === 'en'
  const title = en ? project.titleEn : project.title
  const { facts, sections, naturalArtwork } = project.bookDetails || project.caseStudy
  const leadKey = sections[0].leadImage
  function artwork(key, lead = false, reading = false) {
    const image = projectImages[key]
    const index = project.images.indexOf(key)
    const caption = en ? image.captionEn : image.caption
    const sizes = image.edgeToEdge ? '(max-width: 767px) calc(100vw - 56px), (max-width: 1232px) calc(100vw - 112px), 1120px' : lead ? '(max-width: 767px) 280px, (max-width: 1099px) calc(100vw - 112px), 960px' : reading ? '(max-width: 767px) 280px, (max-width: 1099px) 400px, 360px' : '(max-width: 767px) 280px, (max-width: 1099px) 400px, 520px'
    return <figure className={'project-artwork book-artwork' + (lead ? ' is-lead' : '') + (image.naturalRatio ? ' is-natural-ratio' : '') + (image.edgeToEdge ? ' is-edge-to-edge' : '') + (image.whiteSurface ? ' is-white-surface' : '')} key={key} data-protected-image>
      <div className="project-artwork-surface"><img src={image.medium} srcSet={`${image.thumb} 320w, ${image.medium} 960w`} sizes={sizes} width={image.width} height={image.height} alt={`${title} · ${caption}`} draggable="false" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" /></div>
      <figcaption><span>{caption}</span><span>{String(index + 1).padStart(2, '0')} / {project.images.length}</span></figcaption>
      {image.note && <p className="artwork-note">{en ? image.noteEn : image.note}</p>}
    </figure>
  }
  return <div className={'book-project-details' + (project.caseStudy ? ' identity-case-study' : '') + (naturalArtwork ? ' natural-book-details' : '')}>
    <div className={'book-project-hero' + (projectImages[leadKey].edgeToEdge ? ' is-edge-to-edge-hero' : '')}>{artwork(leadKey, true)}</div>
    <dl className="book-specs">{facts.map(fact => <div key={fact.label}><dt>{en ? fact.labelEn : fact.label}</dt><dd>{en ? fact.valueEn : fact.value}</dd></div>)}</dl>
    {sections.map((section, sectionIndex) => <section className={`book-gallery-section is-${section.id}` + (section.aspectRatio ? ' has-uniform-artwork' : '')} style={section.aspectRatio ? { '--artwork-ratio': section.aspectRatio } : undefined} aria-labelledby={`book-${section.id}`} key={section.id}>
      <header className="book-gallery-heading"><h2 className="project-section-title" id={`book-${section.id}`}><span className="book-section-number" aria-hidden="true">{String(sectionIndex + 1).padStart(2, '0')}</span>{en ? section.titleEn : section.title}</h2><p>{en ? section.textEn : section.text}</p></header>
      <div className={'book-artwork-grid' + (section.columns === 3 ? ' is-reading' : section.columns === 1 ? ' is-single-column' : '')}>
        {section.images.filter(key => key !== leadKey).map(key => artwork(key, section.wideImages?.includes(key) || section.columns === 1, section.columns === 3))}
      </div>
    </section>)}
  </div>
}
