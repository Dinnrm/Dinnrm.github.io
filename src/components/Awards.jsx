import { awards, research } from '../data/content.js'

export default function Awards() {
  return (
    <section id="awards" className="section">
      <p className="section-label">Honors</p>
      <h2 className="section-title">获奖与科研</h2>

      <ul className="award-list">
        {awards.map((a, i) => (
          <li key={i} className="award-item">
            <span className={a.level === '国家级' ? 'badge national' : 'badge'}>
              {a.level}
            </span>
            <span>{a.name}</span>
          </li>
        ))}
      </ul>

      <div className="research">
        <h3 className="research-title">科研与论文</h3>
        {research.map((r, i) => (
          <div key={i} className="research-item">
            <h4>{r.title}</h4>
            <p>{r.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
