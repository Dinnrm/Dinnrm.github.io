import { featured } from '../data/content.js'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">Selected Projects</p>
      <h2 className="section-title">重点项目</h2>
      <div>
        {featured.map((p) => (
          <article key={p.id} className="feature">
            <div
              className="feature-media"
              style={{ '--c1': p.c1, '--c2': p.c2 }}
            >
              {p.title}
            </div>
            <div className="feature-body">
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
