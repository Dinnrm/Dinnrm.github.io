import { profile } from '../data/content.js'
import portrait from '../assets/portrait.png'

export default function About() {
  return (
    <section id="about" className="section about">
      <p className="section-label">Profile</p>
      <div className="about-wrap">
        <img className="portrait" src={portrait} alt="丁若木的肖像照" />
        <div className="about-body">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            {profile.name}
            <span className="pinyin"> / {profile.pinyin}</span>
          </h2>
          <p className="about-intro">{profile.intro}</p>
          <ul className="facts">
            <li>
              <span>常用软件</span>
              {profile.skills.join(' · ')}
            </li>
            <li>
              <span>常驻</span>
              {profile.location}
            </li>
            <li>
              <span>热爱</span>
              {profile.hobby}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
