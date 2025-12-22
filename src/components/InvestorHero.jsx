import './InvestorHero.css';

const InvestorHero = () => {
  return (
    <section className="investor-hero">
      <div className="hero-badge">
        <span className="badge-dot"></span>
        <span>SEEKING SEED INVESTMENT</span>
      </div>

      <h1 className="hero-title">
        The <span className="gradient-text">Edge AI Platform</span>
        <br />
        Powering Offline Intelligence
      </h1>

      <p className="hero-tagline">
        One core technology. Multiple billion-dollar markets.
      </p>

      <p className="hero-description">
        IntelliMoose is building the infrastructure for private, offline AI across trades,
        security, fleet logistics, defense, and healthcare. We're not selling gadgets—we're
        delivering expertise-on-demand through a modular platform (app + portable RAG unit)
        that works in environments where cloud AI fails.
      </p>

      <div className="hero-cta-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
        <button
          className="glow-button hero-cta"
          onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ padding: '1rem 2rem', fontSize: '1rem', cursor: 'pointer' }}
        >
          View Investment Opportunity
        </button>
        <button
          className="glow-button secondary-cta"
          onClick={() => window.location.href = '/intellimoose'}
          style={{ padding: '1rem 2rem', fontSize: '1rem', cursor: 'pointer' }}
        >
          See Product Demo →
        </button>
      </div>

      <div className="hero-metrics">
        <div className="metric">
          <div className="metric-value">$500B+</div>
          <div className="metric-label">Total Addressable Market</div>
        </div>
        <div className="metric">
          <div className="metric-value">5 Verticals</div>
          <div className="metric-label">Initial Market Focus</div>
        </div>
        <div className="metric">
          <div className="metric-value">100% Offline</div>
          <div className="metric-label">Zero Cloud Dependency</div>
        </div>
      </div>

      <div className="hero-problem">
        <h2>The Problem We're Solving</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">🔒</div>
            <h3>Privacy Concerns Are Growing</h3>
            <p>Ring uploads to Amazon. Nest uploads to Google. Consumers and businesses want AI without surveillance.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">💰</div>
            <h3>Subscription Fatigue Is Real</h3>
            <p>Ring charges $10-20/month. Fleet telematics $50-200/month. Businesses are tired of recurring cloud fees.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🎯</div>
            <h3>Generic AI Lacks Domain Expertise</h3>
            <p>ChatGPT can't tell you NEC wire gauge requirements. Our AI is pre-loaded with trade-specific manuals and codes.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">👥</div>
            <h3>Skilled Labor Shortage Crisis</h3>
            <p>500,000 electrician shortage by 2028. Average tradesperson is 55+ years old. Companies can't find experienced workers, but our AI delivers expert-level guidance to anyone with basic training.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🌐</div>
            <h3>Cloud AI Doesn't Work Everywhere</h3>
            <p>Trucks, ships, basements, rural sites—millions of professionals work where internet is unreliable or unavailable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorHero;
