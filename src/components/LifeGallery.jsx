import { life } from '../data/content.js'

export default function LifeGallery() {
  return (
    <section id="life" className="section">
      <p className="section-label">Off-screen</p>
      <h2 className="section-title">生活与观察</h2>
      <div className="life-grid">
        {life.map((l) => (
          <div
            key={l.id}
            className="life-tile"
            style={{ '--c1': l.c1, '--c2': l.c2 }}
          >
            {l.label}
          </div>
        ))}
      </div>
    </section>
  )
}
