export default function WorkCard({ work }) {
  return (
    <a
      className="card"
      href="#"
      style={{ '--c1': work.c1, '--c2': work.c2 }}
    >
      <div className="thumb">
        <span className="cat">{work.title}</span>
      </div>
      <div className="meta">
        <h3>{work.title}</h3>
        <p>{work.desc}</p>
      </div>
    </a>
  )
}
