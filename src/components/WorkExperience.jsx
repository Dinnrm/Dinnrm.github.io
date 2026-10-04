import { useState } from 'react'
import { experience } from '../data/content.js'

export default function WorkExperience() {
  const [openIds, setOpenIds] = useState(
    () => new Set(experience.map((e) => e.id)),
  )

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section id="experience" className="section">
      <p className="section-label">Social Work</p>
      <h2 className="section-title">社会服务与落地项目</h2>
      <div>
        {experience.map((e) => {
          const open = openIds.has(e.id)
          return (
            <div key={e.id} className={open ? 'acc-item open' : 'acc-item'}>
              <button
                className="acc-btn"
                onClick={() => toggle(e.id)}
                aria-expanded={open}
              >
                <span>
                  {e.role} · <span style={{ color: 'var(--muted)' }}>{e.org}</span>
                </span>
                <span style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span className="when">{e.period}</span>
                  <span className="plus">+</span>
                </span>
              </button>
              <div className="acc-panel">
                <div className="acc-panel-inner">{e.detail}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
