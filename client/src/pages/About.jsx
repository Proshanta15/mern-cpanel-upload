import '../style/about.css'
import { useAuth } from '../store/auth.jsx'

export default function About() {
  const { user } = useAuth();

  return (
    <main className="about-page">
      <section className="about-intro">
        <p className='about-tag'>Welcome, { user ? user.username : 'to our website'}</p>
        <p className="about-tag" style={{marginLeft:"20px"}}>About Our Team</p>
        <h1>We build websites that help businesses grow online</h1>
        <p>
          We combine design, development, and strategy to deliver web solutions
          that are clean, fast, and focused on real business results.
        </p>
      </section>

      <section className="about-choose-us">
        <h2>Why Choose Us</h2>
        <div className="about-grid">
          <article className="about-card">
            <h3>Experienced Developers</h3>
            <p>
              Our team has hands-on experience in modern web technologies and
              production-ready architecture.
            </p>
          </article>

          <article className="about-card">
            <h3>Client-First Approach</h3>
            <p>
              We listen carefully, understand your goals, and shape every
              feature around your business needs.
            </p>
          </article>

          <article className="about-card">
            <h3>Reliable Delivery</h3>
            <p>
              From planning to deployment, we maintain clear communication and
              deliver on time with quality.
            </p>
          </article>
        </div>
      </section>

      <section className="about-provide">
        <h2>What We Provide</h2>
        <ul>
          <li>Custom website and web app development</li>
          <li>Responsive UI design for all screen sizes</li>
          <li>Secure authentication and API integration</li>
          <li>Performance optimization and technical support</li>
        </ul>
      </section>

      <section className="about-work">
        <h2>How We Work</h2>
        <div className="work-steps">
          <article className="step-card">
            <span>01</span>
            <h3>Discover</h3>
            <p>
              We discuss your idea, goals, and audience to create a clear
              project roadmap.
            </p>
          </article>

          <article className="step-card">
            <span>02</span>
            <h3>Build</h3>
            <p>
              We design and develop your solution using modern tools and clean
              coding practices.
            </p>
          </article>

          <article className="step-card">
            <span>03</span>
            <h3>Launch & Support</h3>
            <p>
              We deploy your project, monitor performance, and continue support
              for long-term success.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
