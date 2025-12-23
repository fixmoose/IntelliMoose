import { Link } from 'react-router-dom';
import EcosystemDiagram from '../components/EcosystemDiagram';
import LegalFooter from '../components/LegalFooter';
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
          Platform + AI widgets that contractors actually use—because AI handles the data entry.
        </p>

        <p className="hero-description">
          IntelliMoose powers 3.5M skilled tradespeople with FixMoose (job management platform) and AI widgets (VoiceMoose, SnapMoose, EyeMoose).
          Job tracking, invoicing, customer management, compliance—all powered by AI that listens to your voice, watches through your camera, and monitors job sites automatically.
          <strong> Get started FREE, upgrade as you grow.</strong>
        </p>

        <div className="hero-cta">
          <button className="glow-button primary" onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}>
            See How FixMoose Works
          </button>
          <button className="glow-button secondary" onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}>
            View Investment Opportunity
          </button>
        </div>

        <div className="hero-metrics">
          <div className="metric">
            <div className="metric-value">FREE</div>
            <div className="metric-label">Start with Basic Plan</div>
          </div>
          <div className="metric">
            <div className="metric-value">$30 → $269</div>
            <div className="metric-label">Revenue Per User (12 months)</div>
          </div>
          <div className="metric">
            <div className="metric-value">3-4 Patents</div>
            <div className="metric-label">Defensible IP Portfolio</div>
          </div>
          <div className="metric">
            <div className="metric-value">$1-3B</div>
            <div className="metric-label">Exit Target (4-6 years)</div>
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

      {/* How FixMoose Works */}
      <section className="platform-section" id="platform">
        <h2 className="section-heading">How FixMoose Works</h2>
        <p className="section-subheading">
          One platform, three AI input methods. Start free, upgrade as you grow.
        </p>

        <div className="platform-diagram">
          <div className="platform-core">
            <h3>FixMoose Core Platform</h3>
            <p>Job management • Invoicing • Customer CRM • Compliance tracking • Material lists • Photo documentation</p>
            <div className="platform-tiers">
              <span className="tier-badge free">Basic: 6 months FREE → $19/mo (or FREE with any widget)</span>
              <span className="tier-badge">Pro: $49/mo</span>
              <span className="tier-badge">Teams: $99/mo</span>
              <span className="tier-badge">Enterprise: $299/mo</span>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              <strong>Try it now:</strong> <a href="https://fixmoose.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '700' }}>FixMoose.com</a> (demo account available)
            </p>
          </div>

          <div className="ai-widgets-header">
            <h3>+ AI Input Widgets (Optional Add-Ons)</h3>
            <p>Each AI widget subscription includes FREE FixMoose Basic account</p>
          </div>

          <div className="widgets-grid">
            <div className="widget-card">
              <div className="widget-icon">🎙️</div>
              <h4>VoiceMoose</h4>
              <p><strong>$30/month</strong></p>
              <p>Talk while you work. AI extracts materials, labor, generates work orders and invoices from your voice.</p>
              <Link to="/voicemoose" className="widget-link">Learn More →</Link>
            </div>

            <div className="widget-card">
              <div className="widget-icon">📸</div>
              <h4>SnapMoose</h4>
              <p><strong>$50/month</strong></p>
              <p>Point phone at electrical panel. AI detects code violations, references NEC, prevents failed inspections.</p>
              <Link to="/snapmoose" className="widget-link">Learn More →</Link>
            </div>

            <div className="widget-card">
              <div className="widget-icon">👁️</div>
              <h4>EyeMoose</h4>
              <p><strong>$200 + $50/month</strong></p>
              <p>Camera watches job site 24/7. AI detects PPE violations, hazards, near-misses. Audio alerts + OSHA reports.</p>
              <Link to="/eyemoose" className="widget-link">Learn More →</Link>
            </div>
          </div>
        </div>

        <div className="platform-strategy">
          <h3>The Trojan Horse Strategy: Free Tier → Platform Lock-In</h3>
          <div className="strategy-flow">
            <div className="strategy-step">
              <div className="step-number">1</div>
              <h4>Hook with Free Tier</h4>
              <p>Contractor signs up for FREE FixMoose Basic (6 months free, then $19/mo). OR buys VoiceMoose ($30/mo) and gets FixMoose Basic FREE with subscription.</p>
            </div>
            <div className="strategy-arrow">→</div>
            <div className="strategy-step">
              <div className="step-number">2</div>
              <h4>Hit Limits in 2-3 Months</h4>
              <p>After 6th job or 100MB storage, can't add more jobs. All historical data trapped in platform. Must upgrade to continue.</p>
            </div>
            <div className="strategy-arrow">→</div>
            <div className="strategy-step">
              <div className="step-number">3</div>
              <h4>Upsell to Pro ($49/month)</h4>
              <p>Unlocks unlimited jobs, 10GB storage, homeowner portal. Total spend: $79/mo (VoiceMoose $30 + FixMoose Pro $49). Homeowners see invoices, approve work.</p>
            </div>
            <div className="strategy-arrow">→</div>
            <div className="strategy-step">
              <div className="step-number">4</div>
              <h4>Add More Widgets</h4>
              <p>Buys SnapMoose ($50/month) to prevent failed inspections. Then EyeMoose ($50/month) for insurance discounts. Total: $179/month.</p>
            </div>
            <div className="strategy-arrow">→</div>
            <div className="strategy-step">
              <div className="step-number">5</div>
              <h4>Grow Team → Teams Plan</h4>
              <p>Hires 2 more electricians. Needs Teams plan ($99/month + $20/user) for permissions, contractor-only notes. Total: $269/month.</p>
            </div>
          </div>

          <div className="ltv-callout">
            <h3>Lifetime Value Expansion</h3>
            <p>
              <strong>Month 1:</strong> $0/month (FixMoose Basic - 6 months free trial)
              <br />
              <strong>Month 3:</strong> $30/month (Buys VoiceMoose, gets FixMoose Basic FREE with subscription)
              <br />
              <strong>Month 5:</strong> $79/month (Upgrades to FixMoose Pro $49 for unlimited jobs + homeowner portal)
              <br />
              <strong>Month 8:</strong> $129/month (Adds SnapMoose widget $50)
              <br />
              <strong>Month 11:</strong> $179/month (Adds EyeMoose widget $50)
              <br />
              <strong>Month 14:</strong> $269/month (Upgrades to Teams plan $99 + $60 for 3 users)
            </p>
            <p className="ltv-highlight">
              <strong>∞ → $269/mo in 14 months.</strong> Average customer LTV: $3,400 in year 1, $11,000+ over 3 years.
            </p>
          </div>
        </div>

        <div className="platform-moats">
          <h3>Why Customers Can't Leave (Network Effects & Data Lock-In)</h3>
          <div className="moats-grid">
            <div className="moat-card">
              <h4>📊 Historical Data Trap</h4>
              <p>3 years of job history, customer notes, pricing, materials. Switching means losing all context. Export doesn't capture relationships.</p>
            </div>
            <div className="moat-card">
              <h4>👥 Customer Expectations</h4>
              <p>Homeowners trained on FixMoose portal. They expect to see invoices, approve work, view photos. Switching breaks customer experience.</p>
            </div>
            <div className="moat-card">
              <h4>🔐 Permission Layers</h4>
              <p>Contractor sees all notes (even violations). Homeowner sees approved items only. Inspector sees compliance-only view. Custom roles = lock-in.</p>
            </div>
            <div className="moat-card">
              <h4>🏆 Team Training & Certifications</h4>
              <p>Team certified on EyeMoose, trained on VoiceMoose workflows. Switching means retraining entire crew. Muscle memory = moat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Diagram */}
      <EcosystemDiagram />

      {/* Deep Dives into Each Widget */}
      <section className="products-overview" id="products">
        <h2 className="section-heading">AI Widget Deep Dives</h2>
        <p className="section-subheading">
          Click any widget below to see full technical details, use cases, and ROI analysis.
        </p>

        <div className="products-grid">
          {/* VoiceMoose */}
          <Link to="/voicemoose" className="product-card">
            <div className="product-icon">🎙️</div>
            <h3>VoiceMoose</h3>
            <p className="product-tagline">Voice → Documentation in Real-Time</p>
            <p className="product-description">
              "Roger Observe" → talk while you work → "Roger Stop" → get work orders, invoices, compliance docs.
              Works with any Bluetooth earpiece. 95% offline. Includes FREE FixMoose Basic.
            </p>
            <div className="product-stats">
              <div className="stat">
                <span className="stat-value">2-3 hrs/day</span>
                <span className="stat-label">Time Saved</span>
              </div>
              <div className="stat">
                <span className="stat-value">$30/mo</span>
                <span className="stat-label">+ FREE FixMoose</span>
              </div>
              <div className="stat">
                <span className="stat-value">10-14 days</span>
                <span className="stat-label">Build Time</span>
              </div>
            </div>
            <span className="product-cta">Learn More →</span>
          </Link>

          {/* SnapMoose */}
          <Link to="/snapmoose" className="product-card">
            <div className="product-icon">📸</div>
            <h3>SnapMoose</h3>
            <p className="product-tagline">Instant Code Compliance Checking</p>
            <p className="product-description">
              Point phone at electrical panel → AI detects NEC violations → get inspection-ready PDF.
              Works offline with on-device YOLOv8. Includes FREE FixMoose Basic.
            </p>
            <div className="product-stats">
              <div className="stat">
                <span className="stat-value">$7K avg</span>
                <span className="stat-label">Re-work Prevented</span>
              </div>
              <div className="stat">
                <span className="stat-value">$50/mo</span>
                <span className="stat-label">+ FREE FixMoose</span>
              </div>
              <div className="stat">
                <span className="stat-value">10-14 days</span>
                <span className="stat-label">Build Time</span>
              </div>
            </div>
            <span className="product-cta">Learn More →</span>
          </Link>

          {/* EyeMoose */}
          <Link to="/eyemoose" className="product-card">
            <div className="product-icon">👁️</div>
            <h3>EyeMoose</h3>
            <p className="product-tagline">AI-Powered Safety Monitoring</p>
            <p className="product-description">
              $200 camera kit watches job sites 24/7 → detects PPE violations, hazards, near-misses → real-time audio alerts + OSHA reports.
              Includes FREE FixMoose Basic.
            </p>
            <div className="product-stats">
              <div className="stat">
                <span className="stat-value">$40B/yr</span>
                <span className="stat-label">Market Size</span>
              </div>
              <div className="stat">
                <span className="stat-value">$200 + $50/mo</span>
                <span className="stat-label">+ FREE FixMoose</span>
              </div>
              <div className="stat">
                <span className="stat-value">12-16 days</span>
                <span className="stat-label">Build Time</span>
              </div>
            </div>
            <span className="product-cta">Learn More →</span>
          </Link>

          {/* Platform Strategy */}
          <Link to="/platform" className="product-card highlight">
            <div className="product-icon">🔗</div>
            <h3>Platform Strategy Deep Dive</h3>
            <p className="product-tagline">Why This Becomes a $1B+ Exit</p>
            <p className="product-description">
              Free tier lock-in → network effects → proprietary datasets → multi-product bundling → acquisition leverage.
              The Slack/Dropbox playbook for skilled trades.
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
            <p>Seed round to build FixMoose platform + 3 AI widgets, file patents, and launch with 100+ beta customers</p>
          </div>

          <div className="investment-card">
            <h3>18-Month Milestones</h3>
            <ul className="milestones-list">
              <li>✓ FixMoose platform + 3 AI widgets launched</li>
              <li>✓ 3-4 provisional patents filed</li>
              <li>✓ 100+ paying customers ($30/month avg)</li>
              <li>✓ 40% upsold to FixMoose Pro ($79/month avg)</li>
              <li>✓ $350K ARR (with expansion revenue)</li>
              <li>✓ Series A ready ($8-12M at $40-60M valuation)</li>
            </ul>
          </div>

          <div className="investment-card">
            <h3>Use of Funds</h3>
            <div className="funds-breakdown">
              <div className="fund-item">
                <span>Product Development (Platform + Widgets)</span>
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

        <div className="platform-economics">
          <h3>Why Investors Love This Model: The Slack/Dropbox Playbook</h3>
          <div className="economics-grid">
            <div className="econ-card">
              <h4>Free Tier Hook</h4>
              <p>Every AI widget ($30-50/month) includes FREE FixMoose Basic (5 jobs, 100MB). Customer acquires themselves—no sales needed.</p>
              <p><strong>CAC: $50</strong> (just Google Ads, no salespeople)</p>
            </div>
            <div className="econ-card">
              <h4>Forced Upgrade in 2-3 Months</h4>
              <p>After 6th job, contractor hits free tier limit. All historical data locked in platform. Must upgrade to FixMoose Pro ($49/month) to continue.</p>
              <p><strong>Conversion rate: 60%+</strong> (historical data = hostage)</p>
            </div>
            <div className="econ-card">
              <h4>Widget Expansion</h4>
              <p>Customer buys 2nd widget (SnapMoose $50/month), then 3rd (EyeMoose $50/month). Each widget feeds into same FixMoose platform—more lock-in.</p>
              <p><strong>Attach rate: 2.1 widgets per customer</strong> (by month 9)</p>
            </div>
            <div className="econ-card">
              <h4>Team Plan Upsell</h4>
              <p>Contractor grows team, needs multi-user access. Upgrades to Teams plan ($99/month + $20/user). Adds 2 workers = $139/month + widgets.</p>
              <p><strong>Team conversion: 30%</strong> (of customers by year 2)</p>
            </div>
          </div>

          <div className="economics-grid" style={{ marginTop: '3rem' }}>
            <div className="econ-card" style={{ gridColumn: '1 / -1', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))', border: '2px solid var(--primary)' }}>
              <h4>AI Cost Economics: 1000%+ Margin on Claude API</h4>
              <p>
                <strong>The Challenge:</strong> AI widgets use Claude API for intelligence. Can't give away AI for free—costs add up fast.
                <br /><br />
                <strong>Our Solution:</strong> $30/month VoiceMoose subscription covers ~20 customers' Claude API costs. We charge $30, Claude costs us ~$2/month per user = <strong>1,400% margin.</strong>
                <br /><br />
                <strong>How we achieve this:</strong>
                <br />• 95% of processing happens on-device (Whisper, YOLOv8) = FREE (no API calls)
                <br />• Only 5% of requests hit Claude API (complex queries, edge cases)
                <br />• Average user: 50 API calls/month × $0.04/call = $2/month in Claude costs
                <br />• We charge $30/month → $28 gross margin per user (93% gross margin!)
                <br /><br />
                <strong>Scale Economics:</strong> At 10,000 VoiceMoose users → $300K/month revenue, $20K/month Claude API costs. $280K gross profit (93% margin). This is SaaS-level economics with AI intelligence.
                <br /><br />
                <strong>Widget subscribers get FixMoose Basic FREE with subscription</strong> because the widget margins cover platform costs. Non-widget users pay $19/month after 6-month trial (platform-only, no AI).
              </p>
            </div>
          </div>

          <div className="ltv-breakdown">
            <h3>LTV Expansion: $0 → $269 in 14 Months</h3>
            <div className="ltv-timeline">
              <div className="ltv-month">
                <div className="month-label">Month 1</div>
                <div className="month-revenue">$0</div>
                <div className="month-detail">FixMoose Basic only (6 months free trial)</div>
              </div>
              <div className="ltv-arrow">→</div>
              <div className="ltv-month">
                <div className="month-label">Month 3</div>
                <div className="month-revenue">$30</div>
                <div className="month-detail">Buys VoiceMoose ($30), gets FixMoose Basic FREE with subscription</div>
              </div>
              <div className="ltv-arrow">→</div>
              <div className="ltv-month">
                <div className="month-label">Month 5</div>
                <div className="month-revenue">$79</div>
                <div className="month-detail">Hits 5-job limit, upgrades to FixMoose Pro ($49)</div>
              </div>
              <div className="ltv-arrow">→</div>
              <div className="ltv-month">
                <div className="month-label">Month 8</div>
                <div className="month-revenue">$129</div>
                <div className="month-detail">Adds SnapMoose widget ($50) to prevent failed inspections</div>
              </div>
              <div className="ltv-arrow">→</div>
              <div className="ltv-month">
                <div className="month-label">Month 11</div>
                <div className="month-revenue">$179</div>
                <div className="month-detail">Adds EyeMoose widget ($50) for insurance discounts</div>
              </div>
              <div className="ltv-arrow">→</div>
              <div className="ltv-month">
                <div className="month-label">Month 14</div>
                <div className="month-revenue">$269</div>
                <div className="month-detail">Grows team, upgrades to Teams plan ($99 + $60 for 3 users)</div>
              </div>
            </div>
            <div className="ltv-summary">
              <p><strong>∞ → $269/mo expansion in 14 months.</strong></p>
              <p>Year 1 LTV: $3,400 | Year 3 LTV: $11,000+ | Churn: &lt;5% annually (data lock-in)</p>
              <p><strong>LTV/CAC Ratio: 68:1</strong> (by year 3) — Best-in-class SaaS economics</p>
            </div>
          </div>
        </div>

        <div className="exit-strategy">
          <h3>Exit Strategy: Multiple Paths to $1B+</h3>
          <p className="exit-intro">
            Platform strategy creates competitive bidding among 5+ strategic acquirers. Each sees different value proposition:
          </p>
          <div className="acquirers-grid">
            <div className="acquirer-card">
              <h4>Salesforce</h4>
              <p>Service Cloud AI layer for field service. FixMoose = pre-built vertical SaaS with 100K+ contractors locked in.</p>
              <span className="comparable">Ref: Slack $28B (free tier → platform lock-in)</span>
            </div>
            <div className="acquirer-card">
              <h4>Microsoft</h4>
              <p>Azure AI for Dynamics 365 Field Service. Wants AI widgets + contractor network for enterprise upsell.</p>
              <span className="comparable">Ref: Nuance $20B (vertical AI)</span>
            </div>
            <div className="acquirer-card">
              <h4>ServiceTitan / Jobber / Housecall Pro</h4>
              <p>FSM platforms need AI layer. FixMoose adds voice, vision, safety—missing pieces in their stack.</p>
              <span className="comparable">Ref: ServiceTitan $9.5B valuation (2023)</span>
            </div>
            <div className="acquirer-card">
              <h4>Insurance (Travelers, Liberty Mutual)</h4>
              <p>Workers' comp carriers want safety data. EyeMoose = $40B market for risk reduction tech.</p>
              <span className="comparable">Ref: Motive $3.5B (fleet safety platform)</span>
            </div>
            <div className="acquirer-card">
              <h4>Tool OEMs (Hilti, DeWalt, Milwaukee)</h4>
              <p>White-label FixMoose for contractors who buy their tools. Locks in hardware + software revenue.</p>
              <span className="comparable">Ref: ServiceMax $915M (field service platform)</span>
            </div>
          </div>
          <div className="exit-timeline">
            <p><strong>Target: $1-3B exit in 4-6 years</strong></p>
            <p>Year 2: Series A ($40-60M valuation) | Year 4: Series B ($200-300M valuation) | Year 6: Acquisition ($1-3B) or IPO</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Build the Future of Skilled Trades?</h2>
        <p>
          We're building the Slack/Dropbox of skilled trades. Free tier hook → platform lock-in → 9x LTV expansion → $1B+ exit.
        </p>
        <p>
          Working prototypes in 6 weeks. Paying customers in 12 weeks. 100+ customers + Series A in 18 months.
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

      {/* Legal Footer */}
      <LegalFooter />
    </div>
  );
};

export default HomePage;
