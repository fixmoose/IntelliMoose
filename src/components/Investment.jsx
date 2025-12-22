import { Link } from 'react-router-dom';
import './Investment.css';

const Investment = () => {
  return (
    <section className="investment">
      <div className="investment-hero">
        <h2 className="section-heading">The Investment Opportunity</h2>
        <p className="investment-tagline">
          Join us in building the edge AI platform that powers the next generation of private, offline intelligence.
        </p>
      </div>

      <div className="raise-details glass-card highlight">
        <div className="raise-header">
          <h3>Seed Round</h3>
          <div className="raise-amount">$4M</div>
        </div>

        <div className="raise-grid">
          <div className="raise-section">
            <h4>Use of Funds</h4>
            <div className="funds-breakdown">
              <div className="fund-item">
                <div className="fund-bar" style={{width: '35%', background: 'var(--primary)'}}></div>
                <div className="fund-details">
                  <span className="fund-label">Product Development</span>
                  <span className="fund-amount">$1.4M (35%)</span>
                </div>
                <p className="fund-description">
                  Hardware engineering & prototyping, AI model optimization, manufacturing setup, safety certifications (ANSI Z87.1, FCC, CE)
                </p>
              </div>

              <div className="fund-item">
                <div className="fund-bar" style={{width: '30%', background: 'var(--accent)'}}></div>
                <div className="fund-details">
                  <span className="fund-label">Team Expansion</span>
                  <span className="fund-amount">$1.2M (30%)</span>
                </div>
                <p className="fund-description">
                  Head of Hardware Engineering, Head of AI/ML, 3-4 engineers (firmware, embedded, ML), Head of Sales, operations manager
                </p>
              </div>

              <div className="fund-item">
                <div className="fund-bar" style={{width: '20%', background: 'var(--secondary)'}}></div>
                <div className="fund-details">
                  <span className="fund-label">Go-to-Market</span>
                  <span className="fund-amount">$800K (20%)</span>
                </div>
                <p className="fund-description">
                  Trade shows, Kickstarter campaign, pilot programs (500 units), distributor partnerships, marketing, initial inventory
                </p>
              </div>

              <div className="fund-item">
                <div className="fund-bar" style={{width: '10%', background: 'rgba(139, 92, 246, 0.8)'}}></div>
                <div className="fund-details">
                  <span className="fund-label">IP & Legal</span>
                  <span className="fund-amount">$400K (10%)</span>
                </div>
                <p className="fund-description">
                  Patent portfolio (provisional + utility + continuations), LLC formation (Delaware C-Corp), legal counsel, IP protection, insurance
                </p>
              </div>

              <div className="fund-item">
                <div className="fund-bar" style={{width: '5%', background: 'rgba(245, 158, 11, 0.8)'}}></div>
                <div className="fund-details">
                  <span className="fund-label">Operations & Runway</span>
                  <span className="fund-amount">$200K (5%)</span>
                </div>
                <p className="fund-description">
                  Accounting, payroll, office/tools, cloud infrastructure, contingency buffer
                </p>
              </div>
            </div>
          </div>

          <div className="raise-section">
            <h4>18-Month Milestones</h4>
            <ul className="milestones-list">
              <li>✓ Ship 2,500+ devices (IntelliMoose + HomeSentinel)</li>
              <li>✓ Achieve $1.5M annual revenue run rate</li>
              <li>✓ 3 platform editions live in market</li>
              <li>✓ Partnerships with 5+ smart glasses brands</li>
              <li>✓ Team of 8-10 people</li>
              <li>✓ Ready for Series A ($8-12M at $40-60M valuation)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="why-invest">
        <h3>Why Invest in IntelliMoose?</h3>
        <div className="reasons-grid">
          <div className="reason-card glass-card">
            <div className="reason-number">1</div>
            <h4>Massive, Underserved Market</h4>
            <p>
              $500B+ TAM across 5 verticals. No one is building offline-first AI for these markets.
              We're creating a new category, not competing in a crowded space.
            </p>
          </div>

          <div className="reason-card glass-card">
            <div className="reason-number">2</div>
            <h4>Platform Economics</h4>
            <p>
              One core technology → multiple $100M+ verticals. Margins improve with scale.
              Not a single-product company—this is infrastructure.
            </p>
          </div>

          <div className="reason-card glass-card">
            <div className="reason-number">3</div>
            <h4>Defensible Moats</h4>
            <p>
              Big Tech won't compete (conflicts with cloud model). Domain knowledge curation is manual
              and time-consuming. First-mover advantage in each vertical.
            </p>
          </div>

          <div className="reason-card glass-card">
            <div className="reason-number">4</div>
            <h4>Perfect Timing</h4>
            <p>
              Open-source LLMs matured in 2023-24. Edge hardware caught up. Privacy backlash peaked.
              This product wasn't viable 2 years ago—and competitors are 12-24 months behind.
            </p>
          </div>

          <div className="reason-card glass-card">
            <div className="reason-number">5</div>
            <h4>Capital Efficient</h4>
            <p>
              Using off-the-shelf components (RPI 5, standard parts). No custom silicon required.
              $1.5M gets us to revenue, traction, and Series A.
            </p>
          </div>

          <div className="reason-card glass-card">
            <div className="reason-number">6</div>
            <h4>Multiple Exit Paths</h4>
            <p>
              Acquisition targets: Apple (privacy angle), Qualcomm (edge AI), Honeywell/3M (industrial),
              or IPO if we execute on platform vision.
            </p>
          </div>
        </div>
      </div>

      <div className="investment-terms glass-card">
        <h3>Investment Terms</h3>
        <div className="terms-grid">
          <div className="term-item">
            <span className="term-label">Raise Amount</span>
            <span className="term-value">$4M</span>
          </div>
          <div className="term-item">
            <span className="term-label">Instrument</span>
            <span className="term-value">SAFE / Priced Round</span>
          </div>
          <div className="term-item">
            <span className="term-label">Valuation Cap (SAFE)</span>
            <span className="term-value">$18-22M</span>
          </div>
          <div className="term-item">
            <span className="term-label">Discount</span>
            <span className="term-value">20%</span>
          </div>
          <div className="term-item">
            <span className="term-label">Target Close</span>
            <span className="term-value">Q2 2027</span>
          </div>
          <div className="term-item">
            <span className="term-label">Minimum Check</span>
            <span className="term-value">$50K</span>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h3>Let's Build the Future of Edge AI Together</h3>
        <p>
          We're in conversations with AI-focused seed funds and strategic angels.
          If you're interested in learning more, let's connect.
        </p>

        <div className="cta-buttons">
          <button className="glow-button primary">
            Schedule a Meeting
          </button>
          <button className="glow-button secondary">
            Download Pitch Deck
          </button>
          <Link to="/glasses" className="glow-button secondary">
            View Product Demo Site →
          </Link>
        </div>

        <div className="contact-info">
          <p><strong>Contact:</strong></p>
          <p>Email: invest@intellimoose.ai</p>
        </div>
      </div>

      <div className="footer">
        <p>© 2025 IntelliMoose. Patent Pending. Confidential - For Investor Review Only.</p>
      </div>
    </section>
  );
};

export default Investment;
