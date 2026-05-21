import section2Gradient from './assets/design/2nd Section Gradient background.png'
import buildingOverlay from './assets/design/2nd Section Building overlay.png'
import section3Gradient from './assets/design/3rd Section Gradient Background.png'
import section4Gradient from './assets/design/4th Section Gradient Background.png'
import section6Gradient from './assets/design/6th Section Gradient Background.png'
import footerGradient from './assets/design/Footer Gradient.png'
import linkedInIcon from './assets/design/Footer - Linkedin Icon.png'
import xIcon from './assets/design/Footer - X Icon.png'
import youtubeIcon from './assets/design/Footer - Youtube Icon.png'
import './App.css'

const navItems = ['About', 'Team', 'Docs', 'Contact']

const metrics = [
  { value: '$30M', label: 'Deployed across\n14 strategies' },
  { value: '~30%', label: 'Return\non capital' },
  { value: '1,000', label: 'Markets\nPerformed' },
]

const strategies = [
  {
    name: 'Akami',
    specialty: 'Institutional Intelligence',
    description:
      'Trained to think like a experienced pro with 14+ institutional grade strategies, scouring across 1,000 markets and a wealth of data sources mapped.',
  },
  {
    name: 'Shiromi',
    specialty: 'Yield Optimization',
    description:
      'Adaptive and responsive rehypothecation intelligence designed to make real time adjustments and detect underperformance.',
  },
  {
    name: 'Otoro',
    specialty: 'High Speed Execution Rail',
    description:
      'Hyper intent design to enable faster iterations on trading strategies, enabling efficient capital allocations and high performing output.',
  },
]

const team = [
  ['Marvin Das', 'Chief Executive Officer'],
  ['Niko Lai', 'Chief Technology Officer'],
  ['Samuel Plesnik', 'Chief Intelligence Officer'],
  ['Helen Kunisha', 'Chief Marketing Officer'],
  ['Gleb Pivovarov', 'Senior AI Engineer'],
  ['Tanessh Kumar', 'Senior AI Engineer'],
]

function App() {
  return (
    <main>
      <section className="hero-section" id="home" aria-labelledby="hero-title">
        <header className="site-header" aria-label="Primary navigation">
          <a href="#home" className="brand" aria-label="Eulerics home">
            Eulerics
          </a>
          <nav>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-pill">
                {item}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-copy">
          <h1 id="hero-title">Eulerics</h1>
          <p>
            Artificial intelligent high velocity growth engine powered by institutional grade
            strategies to deliver outcomes for sustained autonomous growth.
          </p>
        </div>
      </section>

      <section className="metrics-section" id="about" aria-label="Eulerics performance context">
        <img src={section2Gradient} className="section-art gradient top-gradient" alt="" />
        <img src={buildingOverlay} className="section-art building-overlay" alt="" />
        <div className="metric-grid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <p className="about-text">
          Traditional trading engines rely on static strategies that are periodically reviewed and
          manually adjusted.
          <br />
          <br />
          Eulerics brings an institutional-grade trading engine that combines proven systematic
          strategies with an adaptive AI layer designed to optimise yield performance in real-time.
        </p>
      </section>

      <section className="difference-section" aria-labelledby="difference-title">
        <img src={section3Gradient} className="section-art difference-gradient" alt="" />
        <div className="section-copy centered">
          <h2 id="difference-title">We’re Built Different.</h2>
          <h3>High Velocity Edges, Dynamically Real-Time.</h3>
          <p>
            Our agentic framework dynamically monitors market conditions and adjusts parameters,
            reweighs strategies and identify underperformance early, enabling faster iteration and
            more efficient capital allocation.
          </p>
        </div>
      </section>

      <section className="strategy-section" id="docs" aria-label="Eulerics strategy framework">
        <img src={section4Gradient} className="section-art strategy-gradient" alt="" />
        <div className="strategy-grid">
          {strategies.map((strategy) => (
            <article className="strategy-card" key={strategy.name}>
              <h2>{strategy.name}</h2>
              <div className="rule" aria-hidden="true" />
              <p className="specialty">{strategy.specialty}</p>
              <p>{strategy.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team-section" id="team" aria-labelledby="team-title">
        <img src={section6Gradient} className="section-art team-gradient" alt="" />
        <div className="team-intro">
          <h2 id="team-title">Built By Proven Pros</h2>
          <p>
            Eulerics features an award winning multidisciplinary and ethnically diverse team of
            professionals with a strong proven track record.
          </p>
        </div>
        <div className="team-grid">
          {team.map(([name, role]) => (
            <article className="team-member" key={name}>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <img src={footerGradient} className="section-art footer-gradient" alt="" />
        <a href="#home" className="brand footer-brand">
          Eulerics
        </a>
        <div className="footer-links" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#docs">Docs</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src={linkedInIcon} alt="" />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
            <img src={xIcon} alt="" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
            <img src={youtubeIcon} alt="" />
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
