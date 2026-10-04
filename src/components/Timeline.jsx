import { timeline } from '../data/content.js'

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <p className="section-label">Timeline</p>
      <h2 className="section-title">时间线</h2>
      <div className="timeline">
        {timeline.map((t) => (
          <div key={t.id} className="tl-item">
            <div className="yr">{t.year}</div>
            <h4>{t.title}</h4>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
