import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="animated-bg"></div>
      <div className="grid-overlay"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>SEEKING $1.5M SEED INVESTMENT</span>
        </div>

        <h1 className="hero-title">
          IntelliMoose
          <br />
          <span className="gradient-text">AI Infrastructure for Skilled Trades</span>
        </h1>

        <p className="hero-tagline">
          One platform. Four breakthrough products. $500B+ market opportunity.
        </p>

        <p className="hero-description">
          We're building the AI operating system for 3.5M skilled tradespeople in the US alone.
          Voice-to-documentation, computer vision for code compliance, AI safety monitoring, and AR guidance—
          all working together as a unified platform.
        </p>

        <div className="hero-cta">
          <button className="glow-button primary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Our Products
          </button>
          <button className="glow-button secondary" onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}>
            View Investment Opportunity
          </button>
        </div>

        <div className="hero-metrics">
          <div className="metric">
            <div className="metric-value">$500B+</div>
            <div className="metric-label">Total Addressable Market</div>
          </div>
          <div className="metric">
            <div className="metric-value">4 Products</div>
            <div className="metric-label">Launching in 18 Months</div>
          </div>
          <div className="metric">
            <div className="metric-value">3-4 Patents</div>
            <div className="metric-label">Defensible IP Portfolio</div>
          </div>
          <div className="metric">
            <div className="metric-value">6 Weeks</div>
            <div className="metric-label">To Working Prototypes</div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="problem-section">
        <h2 className="section-heading">The $200B Problem</h2>
        <p className="section-subheading">
          Skilled tradespeople spend 40% of their time on non-billable work
        </p>

        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">📝</div>
            <h3>Paperwork Burden</h3>
            <p>2-3 hours per day on documentation, invoicing, and compliance reports. That's $15K/year in lost productivity per worker.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">⚠️</div>
            <h3>Safety Violations</h3>
            <p>$40B/year in workers' comp claims. OSHA fines averaging $7-15K per violation. Human oversight misses 60% of near-miss incidents.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">❌</div>
            <h3>Failed Inspections</h3>
            <p>40% of electrical work fails first inspection. Average re-work cost: $7,000. Root cause: simple code compliance errors.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">👨‍🏫</div>
            <h3>Training Bottleneck</h3>
            <p>500,000 electrician shortage by 2028. Average tradesperson is 55+. Takes 4 years to train an apprentice to journeyman level.</p>
          </div>
        </div>

        <div className="problem-callout">
          <h3>The Bottom Line</h3>
          <p>
            Tradespeople need AI tools that work <strong>offline</strong>, understand <strong>domain-specific knowledge</strong>,
            and integrate into their <strong>existing workflows</strong>. Cloud-based generic AI doesn't cut it.
          </p>
        </div>
      </section>

      {/* Products Overview */}
      <section className="products-overview" id="products">
        <h2 className="section-heading">Our Product Suite</h2>
        <p className="section-subheading">
          Four products. One platform. Built for acquisition.
        </p>

        <div className="products-grid">
          {/* VoiceDoc */}
          <Link to="/voicedoc" className="product-card">
            <div className="product-icon">🎙️</div>
            <h3>VoiceDoc</h3>
            <p className="product-tagline">Voice → Documentation in Real-Time</p>
            <p className="product-description">
              Talk while you work. AI generates work orders, material lists, invoices, and compliance notes automatically.
            </p>
            <div className="product-stats">
              <div className="stat">
                <span className="stat-value">2-3 hrs/day</span>
                <span className="stat-label">Time Saved</span>
              </div>
              <div className="stat">
                <span className="stat-value">$30/mo</span>
                <span className="stat-label">SaaS Pricing</span>
              </div>
              <div className="stat">
                <span className="stat-value">10-14 days</span>
                <span className="stat-label">Build Time</span>
              </div>
            </div>
            <span className="product-cta">Learn More →</span>
          </Link>

          {/* CodeSnap */}
          <Link to="/codesnap" className="product-card">
            <div className="product-icon">📸</div>
            <h3>CodeSnap</h3>
            <p className="product-tagline">Instant Code Compliance Checking</p>
            <p className="product-description">
              Point your phone at any electrical panel. AI identifies violations, references NEC codes, generates compliance reports.
            </p>
            <div className="product-stats">
              <div className="stat">
                <span className="stat-value">$7K avg</span>
                <span className="stat-label">Cost Prevented</span>
              </div>
              <div className="stat">
                <span className="stat-value">$50/mo</span>
                <span className="stat-label">SaaS Pricing</span>
              </div>
              <div className="stat">
                <span className="stat-value">10-14 days</span>
                <span className="stat-label">Build Time</span>
              </div>
            </div>
            <span className="product-cta">Learn More →</span>
          </Link>

          {/* SafetyEye */}
          <Link to="/safetyeye" className="product-card">
            <div className="product-icon">👁️</div>
            <h3>SafetyEye</h3>
            <p className="product-tagline">AI-Powered Safety Monitoring</p>
            <p className="product-description">
              $150 camera watches job sites 24/7. Detects PPE violations, hazards, near-misses. Audio alerts + OSHA reports.
            </p>
            <div className="product-stats">
              <div className="stat">
                <span className="stat-value">$40B/yr</span>
                <span className="stat-label">Market Size</span>
              </div>
              <div className="stat">
                <span className="stat-value">$200 + $50/mo</span>
                <span className="stat-label">Hardware + SaaS</span>
              </div>
              <div className="stat">
                <span className="stat-value">12-16 days</span>
                <span className="stat-label">Build Time</span>
              </div>
            </div>
            <span className="product-cta">Learn More →</span>
          </Link>

          {/* Platform Vision */}
          <Link to="/platform" className="product-card highlight">
            <div className="product-icon">🔗</div>
            <h3>The Platform Play</h3>
            <p className="product-tagline">Why This Becomes a $1B+ Exit</p>
            <p className="product-description">
              Individual products prove the tech. Together, they create network effects, proprietary datasets, and acquisition leverage.
            </p>
            <div className="product-stats">
              <div className="stat">
                <span className="stat-value">$1-3B</span>
                <span className="stat-label">Exit Target</span>
              </div>
              <div className="stat">
                <span className="stat-value">4-6 years</span>
                <span className="stat-label">Exit Timeline</span>
              </div>
              <div className="stat">
                <span className="stat-value">5+ Acquirers</span>
                <span className="stat-label">Strategic Buyers</span>
              </div>
            </div>
            <span className="product-cta">View Platform Strategy →</span>
          </Link>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="investment-section" id="investment">
        <h2 className="section-heading">The Investment Opportunity</h2>

        <div className="investment-grid">
          <div className="investment-card">
            <h3>The Ask</h3>
            <div className="ask-amount">$1.5M</div>
            <p>Seed round to build all 4 products, file patents, and launch with 100+ beta customers</p>
          </div>

          <div className="investment-card">
            <h3>18-Month Milestones</h3>
            <ul className="milestones-list">
              <li>✓ 4 working products launched</li>
              <li>✓ 3-4 provisional patents filed</li>
              <li>✓ 100+ paying customers</li>
              <li>✓ $250K ARR</li>
              <li>✓ Series A ready ($8-12M at $40-60M valuation)</li>
            </ul>
          </div>

          <div className="investment-card">
            <h3>Use of Funds</h3>
            <div className="funds-breakdown">
              <div className="fund-item">
                <span>Product Development</span>
                <span>$600K (40%)</span>
              </div>
              <div className="fund-item">
                <span>Team (2 engineers, 1 sales)</span>
                <span>$450K (30%)</span>
              </div>
              <div className="fund-item">
                <span>Go-to-Market</span>
                <span>$300K (20%)</span>
              </div>
              <div className="fund-item">
                <span>IP & Legal</span>
                <span>$150K (10%)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="exit-strategy">
          <h3>Exit Strategy: Multiple Paths to $1B+</h3>
          <div className="acquirers-grid">
            <div className="acquirer-card">
              <h4>Apple</h4>
              <p>Spatial computing for Vision Pro enterprise</p>
              <span className="comparable">Ref: Matterport $3.5B valuation</span>
            </div>
            <div className="acquirer-card">
              <h4>Microsoft</h4>
              <p>Azure AI for field service</p>
              <span className="comparable">Ref: Nuance $20B</span>
            </div>
            <div className="acquirer-card">
              <h4>Salesforce</h4>
              <p>Service Cloud AI layer</p>
              <span className="comparable">Ref: Slack $28B</span>
            </div>
            <div className="acquirer-card">
              <h4>Insurance (Travelers, Liberty Mutual)</h4>
              <p>Risk reduction tech for workers' comp</p>
              <span className="comparable">Ref: Motive $3.5B</span>
            </div>
            <div className="acquirer-card">
              <h4>Tool OEMs (Hilti, DeWalt, Bosch)</h4>
              <p>White-label AI platform</p>
              <span className="comparable">Ref: ServiceMax $915M</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Build the Future of Skilled Trades?</h2>
        <p>
          We have working prototypes in 6 weeks. Paying customers in 12 weeks. Series A in 18 months.
        </p>
        <div className="cta-buttons">
          <a href="mailto:invest@intellimoose.com" className="glow-button primary">
            Schedule a Meeting
          </a>
          <Link to="/platform" className="glow-button secondary">
            Deep Dive: Platform Strategy
          </Link>
        </div>
        <div className="contact-info">
          <p><strong>Dejan Obradovic</strong></p>
          <p>Founder & CEO, IntelliMoose</p>
          <p>Email: <a href="mailto:invest@intellimoose.com">invest@intellimoose.com</a></p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
