import { useState } from 'react'
import { CATEGORIES, works } from '../data/works.js'
import WorkCard from './WorkCard.jsx'

export default function WorkSection() {
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all' ? works : works.filter((w) => w.category === active)

  return (
    <section id="work" className="work">
      <div className="section-head">
        <h2>作品</h2>
        <span className="count">{filtered.length} 个类别</span>
      </div>

      <div className="filters" role="group" aria-label="按类别筛选作品">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            className={active === c.key ? 'chip active' : 'chip'}
            onClick={() => setActive(c.key)}
            aria-pressed={active === c.key}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((w) => (
          <WorkCard key={w.id} work={w} />
        ))}
      </div>
    </section>
  )
}
