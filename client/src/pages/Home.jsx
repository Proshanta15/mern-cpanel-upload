import '../style/home.css'

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <p className="hero-tag">Build Better Web Experiences</p>
        <h1>Welcome to your web development launchpad</h1>
        <p>
          From modern frontend interfaces to scalable backend APIs, we help you
          craft fast, secure, and user-friendly web applications.
        </p>
      </section>

      <section className="home-services">
        <h2>Our Web Services</h2>
        <div className="services-grid">
          <article className="service-card">
            <h3>Frontend Development</h3>
            <p>
              Responsive and interactive UI built with modern frameworks for a
              smooth user journey.
            </p>
          </article>

          <article className="service-card">
            <h3>Backend & API Solutions</h3>
            <p>
              Reliable server-side logic, authentication, and REST APIs designed
              for real-world performance.
            </p>
          </article>

          <article className="service-card">
            <h3>Deployment & Optimization</h3>
            <p>
              End-to-end deployment setup, monitoring, and optimization to keep
              your app stable and fast.
            </p>
          </article>
        </div>
      </section>

      <section className="home-stats">
        <h2>What We Have Achieved</h2>
        <div className="stats-grid">
          <article className="stat-card">
            <p className="stat-value">1000+</p>
            <p className="stat-label">Projects Completed</p>
          </article>

          <article className="stat-card">
            <p className="stat-value">500+</p>
            <p className="stat-label">Happy Clients</p>
          </article>

          <article className="stat-card">
            <p className="stat-value">8+</p>
            <p className="stat-label">Years of Experience</p>
          </article>

          <article className="stat-card">
            <p className="stat-value">24/7</p>
            <p className="stat-label">Support Availability</p>
          </article>
        </div>
      </section>

      <section className="home-cta">
        <h2>Get Started Today</h2>
        <p>
          Turn your idea into a production-ready web product. Start your journey
          with us and build something impactful.
        </p>
        <button type="button">Get Started Now</button>
      </section>
    </main>
  )
}
