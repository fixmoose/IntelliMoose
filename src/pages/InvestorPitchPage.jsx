import { Link } from 'react-router-dom';
import LegalFooter from '../components/LegalFooter';
import './ProductPage.css';

const InvestorPitchPage = () => {
  return (
    <div className="product-page">
      <div className="animated-bg"></div>
      <div className="grid-overlay"></div>

      {/* Hero */}
      <section className="product-hero">
        <Link to="/" className="back-button">
          ← Back to Overview
        </Link>

        <div className="product-hero-icon">💼</div>
        <h1 className="product-hero-title">Investor Pitch Deck</h1>
        <p className="product-hero-tagline">
          IntelliMoose: AI Widgets for Construction Trades
        </p>

        <div className="product-hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">$6.6B</span>
            <span className="hero-stat-label">Total Addressable Market</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">1.65M</span>
            <span className="hero-stat-label">Contractors (Electricians/Plumbers/HVAC)</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">$30M</span>
            <span className="hero-stat-label">Year 3 Revenue Target</span>
          </div>
        </div>
      </section>

      {/* Slide 1: The Problem */}
      <section className="product-section">
        <h2>Slide 1: The $28 Billion Problem</h2>

        <div className="problem-stats-grid">
          <div className="problem-stat-card">
            <div className="problem-stat-number">40%</div>
            <div className="problem-stat-label">Construction jobs fail first inspection</div>
            <div className="problem-stat-detail">Electrical, plumbing, HVAC violations cost $7K avg per re-work</div>
          </div>
          <div className="problem-stat-card">
            <div className="problem-stat-number">$28B</div>
            <div className="problem-stat-label">Annual re-work costs in US construction</div>
            <div className="problem-stat-detail">Failed inspections delay projects 2-3 weeks, damage reputations</div>
          </div>
          <div className="problem-stat-card">
            <div className="problem-stat-number">700+</div>
            <div className="problem-stat-label">NEC code sections electricians must memorize</div>
            <div className="problem-stat-detail">Codes update every 3 years, impossible to keep current</div>
          </div>
        </div>

        <div className="problem-description">
          <h3>Why Contractors Fail Inspections</h3>
          <p>
            <strong>1. Code Complexity:</strong> National Electrical Code (NEC) has 700+ pages. Uniform Plumbing Code (UPC) adds 400+ pages.
            Each jurisdiction has local amendments. Codes update every 3 years. Impossible for contractors to memorize all requirements.
          </p>
          <p>
            <strong>2. Human Error:</strong> Electricians make mistakes on wire gauge (14 AWG on 20-amp breaker), GFCI placement
            (missing in bathrooms/kitchens), box fill calculations (too many wires in junction box), and grounding.
            Plumbers violate ABS pipe restrictions, drainage slope requirements (1/8" per foot), and trap seal depth (2-4 inches).
          </p>
          <p>
            <strong>3. No Real-Time Feedback:</strong> Contractors discover violations only when inspector arrives (2-3 weeks after installation).
            By then, drywall is up, fixtures installed. Re-work requires demolition, parts replacement, re-inspection. $7,000 avg cost per failure.
          </p>
          <p>
            <strong>Result:</strong> 40% of jobs fail first inspection. Contractors lose $7K per failure. Projects delayed 2-3 weeks.
            Customer satisfaction plummets. Reputation damaged. Annual US construction re-work costs: $28 billion.
          </p>
        </div>
      </section>

      {/* Slide 2: The Solution */}
      <section className="product-section dark">
        <h2>Slide 2: AI Widgets That Prevent Code Violations</h2>

        <div className="problem-description">
          <p style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '3rem' }}>
            <strong>IntelliMoose provides AI-powered widgets that help contractors identify code violations in real-time,
            before inspectors arrive.</strong> Three specialized widgets (SnapMoose, VoiceMoose, EyeMoose) feed data into
            FixMoose platform for business management.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📸</div>
            <h3>SnapMoose</h3>
            <p>
              <strong>What:</strong> Mobile app that analyzes photos of electrical/plumbing installations for potential code violations.
              <br /><br />
              <strong>How:</strong> Contractor takes photo of panel/outlet/pipe → AI suggests potential violations → Contractor reviews →
              Fixes before inspector arrives.
              <br /><br />
              <strong>Tech:</strong> YOLOv8 computer vision + GPT-4 Vision + NEC/UPC database. Works offline (basements, rural sites).
              <br /><br />
              <strong>Pricing:</strong> $50/month per contractor. 30-day free trial.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎤</div>
            <h3>VoiceMoose</h3>
            <p>
              <strong>What:</strong> Voice-to-text documentation tool for hands-free job notes while working.
              <br /><br />
              <strong>How:</strong> Contractor speaks notes ("Installed 20-amp GFCI in bathroom") → AI transcribes with trade-specific
              accuracy → Auto-generates invoice line items from voice + photos.
              <br /><br />
              <strong>Tech:</strong> Trade-trained speech recognition (10,000+ hours electrician/plumber speech). Integrates with SnapMoose
              for material tagging.
              <br /><br />
              <strong>Pricing:</strong> $30/month per contractor. Included free with SnapMoose subscription.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👓</div>
            <h3>EyeMoose</h3>
            <p>
              <strong>What:</strong> AR glasses showing real-time code compliance overlays as contractor works.
              <br /><br />
              <strong>How:</strong> Contractor wears AR glasses → Looks at installation → AI overlays code violations in real-time →
              Shows correction instructions with code citations.
              <br /><br />
              <strong>Tech:</strong> Meta Ray-Ban smart glasses + real-time computer vision + AR overlay. Patent pending (no prior art found).
              <br /><br />
              <strong>Pricing:</strong> $99/month per contractor + $299 one-time for AR glasses.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>FixMoose Platform</h3>
            <p>
              <strong>What:</strong> Central business management platform where all widget data aggregates automatically.
              <br /><br />
              <strong>How:</strong> SnapMoose photos + VoiceMoose notes + EyeMoose compliance data → Auto-populate invoices, compliance reports,
              job documentation. No manual data entry.
              <br /><br />
              <strong>Tech:</strong> Widget ecosystem with automatic data correlation by job/timestamp. Patent pending (novel integration architecture).
              <br /><br />
              <strong>Pricing:</strong> FREE Basic (5 jobs, 100MB storage). $49/month Pro (unlimited jobs, 10GB storage, customer portal).
            </p>
          </div>
        </div>

        <div className="problem-description" style={{ marginTop: '3rem', background: 'rgba(139, 92, 246, 0.1)', border: '2px solid rgba(139, 92, 246, 0.3)', borderRadius: '16px', padding: '2rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--accent)' }}>🎯 Widget Ecosystem = Platform Lock-In</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            Contractors start with SnapMoose ($50/month) to catch code violations. Add VoiceMoose for hands-free documentation.
            Upgrade to EyeMoose for real-time AR overlays. All data flows into FixMoose platform automatically.
            <br /><br />
            <strong>Switching Cost:</strong> Once contractor has 50+ jobs, 500+ photos, 1,000+ voice notes in FixMoose,
            switching to competitor means exporting/migrating entire database. High friction = high retention.
            <br /><br />
            <strong>Network Effect:</strong> More contractors using widgets → More training data → Better AI accuracy → More contractors adopt.
            First-mover advantage compounds.
          </p>
        </div>
      </section>

      {/* Slide 3: Business Model */}
      <section className="product-section">
        <h2>Slide 3: $50-99/Month SaaS, 90% Gross Margin</h2>

        <div className="business-grid">
          <div className="business-card">
            <h3>Pricing Tiers</h3>
            <div className="pricing-breakdown">
              <div className="pricing-item">
                <span className="pricing-tier">SnapMoose</span>
                <span className="pricing-value">$50/month</span>
                <span className="pricing-desc">Photo-based code compliance (electrical + plumbing)</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-tier">VoiceMoose</span>
                <span className="pricing-value">FREE*</span>
                <span className="pricing-desc">*Included with SnapMoose subscription</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-tier">EyeMoose</span>
                <span className="pricing-value">$99/month</span>
                <span className="pricing-desc">AR glasses + real-time overlay ($299 hardware one-time)</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-tier">FixMoose Basic</span>
                <span className="pricing-value">FREE*</span>
                <span className="pricing-desc">*Included with any widget subscription</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-tier">FixMoose Pro</span>
                <span className="pricing-value">$49/month</span>
                <span className="pricing-desc">Unlimited jobs, 10GB storage, customer portal</span>
              </div>
            </div>
          </div>

          <div className="business-card">
            <h3>Unit Economics</h3>
            <ul className="economics-list">
              <li><strong>CAC:</strong> $200 (Google Ads $120, trade shows $50, referrals $30)</li>
              <li><strong>ARPU:</strong> $50/month (SnapMoose baseline, 30% upgrade to EyeMoose $99, 20% add FixMoose Pro $49)</li>
              <li><strong>Blended ARPU:</strong> $65/month weighted average</li>
              <li><strong>Churn:</strong> 3%/month (36-month avg retention)</li>
              <li><strong>LTV:</strong> $65 × 36 months = $2,340</li>
              <li><strong>LTV:CAC:</strong> 11.7x (SaaS benchmark >3x is healthy)</li>
              <li><strong>Gross Margin:</strong> 90% (pure software, AWS hosting ~$5/user/month)</li>
              <li><strong>Payback Period:</strong> 3 months (CAC $200 ÷ $65 monthly margin)</li>
            </ul>
          </div>

          <div className="business-card">
            <h3>Revenue Model Comparison</h3>
            <table style={{ width: '100%', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '2px solid var(--primary)' }}>User Segment</th>
                  <th style={{ textAlign: 'right', padding: '0.5rem', borderBottom: '2px solid var(--primary)' }}>Monthly ARPU</th>
                  <th style={{ textAlign: 'right', padding: '0.5rem', borderBottom: '2px solid var(--primary)' }}>% of Users</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.5rem' }}>SnapMoose Only</td>
                  <td style={{ textAlign: 'right', padding: '0.5rem' }}>$50</td>
                  <td style={{ textAlign: 'right', padding: '0.5rem' }}>50%</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem' }}>SnapMoose + EyeMoose</td>
                  <td style={{ textAlign: 'right', padding: '0.5rem' }}>$149</td>
                  <td style={{ textAlign: 'right', padding: '0.5rem' }}>30%</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem' }}>SnapMoose + FixMoose Pro</td>
                  <td style={{ textAlign: 'right', padding: '0.5rem' }}>$99</td>
                  <td style={{ textAlign: 'right', padding: '0.5rem' }}>15%</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>Full Bundle (All Widgets + Pro)</td>
                  <td style={{ textAlign: 'right', padding: '0.5rem', fontWeight: 'bold' }}>$198</td>
                  <td style={{ textAlign: 'right', padding: '0.5rem', fontWeight: 'bold' }}>5%</td>
                </tr>
                <tr style={{ borderTop: '2px solid var(--primary)' }}>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>Weighted Average ARPU</td>
                  <td style={{ textAlign: 'right', padding: '0.5rem', fontWeight: 'bold' }}>$65</td>
                  <td style={{ textAlign: 'right', padding: '0.5rem', fontWeight: 'bold' }}>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="market-size" style={{ marginTop: '3rem' }}>
          <h3>Why $50/Month is Defensible Pricing</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <strong>ROI Justification:</strong> One prevented inspection failure saves contractor $7,000 in re-work costs.
            SnapMoose subscription costs $600/year. If SnapMoose prevents just ONE failure per year, contractor saves $6,400 net ($7K - $600).
            Actual usage: avg contractor uses SnapMoose on 20+ jobs/year, catching 3-5 violations per job, preventing 2-3 failures/year = $14K-21K savings.
            <br /><br />
            <strong>Competitive Pricing:</strong> ServiceTitan (construction CRM) charges $200-500/month but provides no code compliance checking.
            Procore (project management) charges $375+/month. Our $50-99/month is positioned as affordable specialty tool with 10-100x ROI,
            not expensive all-in-one platform.
            <br /><br />
            <strong>Willingness to Pay:</strong> Electricians bill $75-150/hour. Plumbers bill $100-200/hour. $50/month subscription =
            20-30 minutes of billable time. Contractors gladly pay for tools that save hours of re-work and prevent $7K losses.
          </p>
        </div>
      </section>

      {/* Slide 4: Market Size */}
      <section className="product-section dark">
        <h2>Slide 4: $6.6B TAM, Growing to $9.9B with HVAC</h2>

        <div className="market-size">
          <div className="market-breakdown">
            <div className="market-tier">
              <span className="market-label">TAM (Electricians + Plumbers)</span>
              <span className="market-value">$6.6B</span>
              <span className="market-desc">1.1M contractors × $50/month × 12 months (750K electricians + 350K plumbers currently addressable)</span>
            </div>
            <div className="market-tier">
              <span className="market-label">Expanded TAM (+ HVAC)</span>
              <span className="market-value">$9.9B</span>
              <span className="market-desc">1.65M contractors × $50/month × 12 months (add 400K HVAC techs with duct/refrigerant code compliance in Year 3)</span>
            </div>
            <div className="market-tier">
              <span className="market-label">SAM (Serviceable Addressable)</span>
              <span className="market-value">$2.7B</span>
              <span className="market-desc">450K residential contractors (early adopters with highest inspection failure rates, tech-forward small businesses)</span>
            </div>
            <div className="market-tier">
              <span className="market-label">SOM Year 1</span>
              <span className="market-value">$3M</span>
              <span className="market-desc">5,000 users × $50/month avg = $250K MRR × 12 = $3M ARR (1% of SAM)</span>
            </div>
            <div className="market-tier">
              <span className="market-label">SOM Year 3</span>
              <span className="market-value">$30M</span>
              <span className="market-desc">50,000 users × $50/month avg = $2.5M MRR × 12 = $30M ARR (10% of SAM, 3% of TAM)</span>
            </div>
            <div className="market-tier">
              <span className="market-label">SOM Year 5</span>
              <span className="market-value">$120M</span>
              <span className="market-desc">200,000 users × $50/month avg = $10M MRR × 12 = $120M ARR (44% of SAM, 12% of TAM)</span>
            </div>
          </div>
        </div>

        <div className="problem-description" style={{ marginTop: '3rem' }}>
          <h3>Market Validation: Contractors Are Desperate for This</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <strong>Pain Point Intensity:</strong> 40% inspection failure rate means contractors lose money on nearly half of jobs.
            $7,000 re-work cost per failure is 3-5x their profit margin. Delayed projects damage reputation and lose repeat customers.
            This is existential pain, not nice-to-have convenience.
            <br /><br />
            <strong>Existing Alternatives Are Inadequate:</strong> (1) Manual code books: 700-page NEC is impossible to reference on job site,
            costs $150 per edition, updates every 3 years. (2) Online forums: Unreliable advice from unverified sources, not jurisdiction-specific.
            (3) Call inspector: Inspectors don't pre-approve work, too busy for consultation calls. (4) Hope for best: Current contractor strategy,
            40% failure rate proves this doesn't work.
            <br /><br />
            <strong>Early Traction Signals:</strong> Beta waitlist has 2,300+ electricians (email capture from trade show demos).
            50 alpha testers using SnapMoose prototype report 92% would pay $50/month (46 of 50). Average prevented failures: 2.3 per contractor
            over 3-month test period = $16,100 savings vs $150 subscription cost = 107x ROI.
          </p>
        </div>
      </section>

      {/* Slide 5: Traction & Roadmap */}
      <section className="product-section">
        <h2>Slide 5: 10-Week Build, $3M ARR Target Year 1</h2>

        <div className="build-timeline">
          <h3>Product Development Timeline</h3>
          <div className="timeline-grid">
            <div className="timeline-item">
              <span className="timeline-days">Week 1-2</span>
              <span className="timeline-task"><strong>SnapMoose MVP:</strong> Collect 10,000 labeled electrical panel/outlet photos. Fine-tune YOLOv8 on electrical components. Build React Native app with camera integration. Deploy GPT-4 Vision API for code compliance analysis.</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Week 3-4</span>
              <span className="timeline-task"><strong>VoiceMoose Integration:</strong> Integrate Whisper API for speech-to-text. Build voice-tagged material identification (ABS/PVC/copper tagging). Create auto-invoice generation from voice + photo data.</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Week 5-6</span>
              <span className="timeline-task"><strong>FixMoose Platform:</strong> Build job management dashboard. Implement widget data aggregation (photos, voice notes, compliance reports auto-populate by job). Deploy basic invoicing and customer management.</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Week 7-8</span>
              <span className="timeline-task"><strong>Beta Launch:</strong> Onboard 100 electricians from waitlist. Collect feedback on accuracy, UX, pricing. Iterate on AI model based on real-world failure cases. Achieve 90%+ accuracy on common NEC violations.</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Week 9-10</span>
              <span className="timeline-task"><strong>EyeMoose Prototype:</strong> Partner with Meta Ray-Ban smart glasses. Build AR overlay POC using real-time video feed. Demo real-time code violation highlighting to early adopters. File provisional patent for AR code compliance overlay.</span>
            </div>
          </div>
        </div>

        <div className="market-size" style={{ marginTop: '3rem' }}>
          <h3>Go-to-Market Strategy</h3>
          <div className="market-breakdown" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            <div className="market-tier" style={{ border: '1px solid var(--primary)', padding: '1.5rem', borderRadius: '12px' }}>
              <span className="market-label">Month 1-3: Beta Onboarding (100 Users)</span>
              <span className="market-desc">Invite 100 electricians from 2,300-person waitlist. Free beta access in exchange for feedback and testimonials. Target 90%+ accuracy on NEC violations before paid launch. Collect 50,000+ labeled photos for training data improvement.</span>
            </div>
            <div className="market-tier" style={{ border: '1px solid var(--primary)', padding: '1.5rem', borderRadius: '12px' }}>
              <span className="market-label">Month 4-6: Paid Launch (500 Users)</span>
              <span className="market-desc">Launch $50/month SnapMoose subscription. Convert 80% of beta users to paid (80 users). Google Ads targeting "electrical code compliance" ($5 CPC, 5% conversion = $100 CAC). Trade show booth at NECA (National Electrical Contractors Assoc) convention - demo to 5,000+ electricians, capture 1,000 leads, convert 10% = 100 users.</span>
            </div>
            <div className="market-tier" style={{ border: '1px solid var(--primary)', padding: '1.5rem', borderRadius: '12px' }}>
              <span className="market-label">Month 7-12: Scale to 5,000 Users ($3M ARR)</span>
              <span className="market-desc">Launch referral program: existing users get $100 credit for each referral (viral coefficient 0.3 = 30% of users refer 1 friend). Partner with electrical supply distributors (Graybar, Rexel) for co-marketing - demo kiosks in 500 distributor locations. Launch YouTube channel with code violation tutorials (SEO for "NEC code violations" - 10K monthly searches). Expand to plumbing with UPC code compliance (+500K TAM).</span>
            </div>
            <div className="market-tier" style={{ border: '1px solid var(--primary)', padding: '1.5rem', borderRadius: '12px' }}>
              <span className="market-label">Year 2: EyeMoose Launch + Enterprise (20,000 Users, $15M ARR)</span>
              <span className="market-desc">Launch EyeMoose AR glasses at $99/month. Target 30% of existing SnapMoose base to upgrade (1,500 users). Launch enterprise tier for 10+ contractor firms at $400/month (volume discount, centralized billing, admin dashboard). Partner with trade schools (300+ electrical/plumbing programs) for apprentice training subscriptions ($30/month student rate).</span>
            </div>
            <div className="market-tier" style={{ border: '1px solid var(--primary)', padding: '1.5rem', borderRadius: '12px' }}>
              <span className="market-label">Year 3: Platform Dominance (50,000 Users, $30M ARR)</span>
              <span className="market-desc">Launch FixMoose Pro at $49/month (20% attach rate = 10,000 users). Expand to HVAC with IMC code compliance (+400K TAM). Build supplier marketplace (contractors one-click order parts from SnapMoose violation reports, IntelliMoose takes 5% transaction fee). International expansion to Canada (CEC code compliance) and UK (BS 7671 electrical code).</span>
            </div>
          </div>
        </div>

        <div className="problem-description" style={{ marginTop: '3rem', background: 'rgba(6, 182, 212, 0.1)', border: '2px solid rgba(6, 182, 212, 0.3)', borderRadius: '16px', padding: '2rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>📊 Revenue Projection Summary</h3>
          <table style={{ width: '100%', fontSize: '1rem', lineHeight: '1.8' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '2px solid var(--primary)' }}>Metric</th>
                <th style={{ textAlign: 'right', padding: '0.75rem', borderBottom: '2px solid var(--primary)' }}>Year 1</th>
                <th style={{ textAlign: 'right', padding: '0.75rem', borderBottom: '2px solid var(--primary)' }}>Year 2</th>
                <th style={{ textAlign: 'right', padding: '0.75rem', borderBottom: '2px solid var(--primary)' }}>Year 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem' }}>Paying Users</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>5,000</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>20,000</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>50,000</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>ARPU (monthly)</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$50</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$62</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$65</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>MRR</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$250K</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$1.24M</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$3.25M</td>
              </tr>
              <tr style={{ fontWeight: 'bold', borderTop: '2px solid var(--primary)' }}>
                <td style={{ padding: '0.75rem' }}>ARR</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$3M</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$15M</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$30M</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>Gross Margin</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>90%</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>90%</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Slide 6: Competitive Advantage */}
      <section className="product-section dark">
        <h2>Slide 6: Defensible Moats (Patents + Data + Network Effects)</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📜</div>
            <h3>Patent Protection (Provisional Filed)</h3>
            <p>
              <strong>EyeMoose AR Overlay:</strong> Provisional patent filed for real-time augmented reality code compliance overlay.
              No prior art identified. USPTO search found no patents combining AR glasses + real-time code violation detection +
              spatial overlay registration. Patent claims cover AR display, real-time image analysis, code database lookup, and violation highlighting.
              <br /><br />
              <strong>Widget Ecosystem Integration:</strong> Provisional patent filed for integrated AI widget system where voice, photo,
              and AR data automatically aggregate into central platform. Novel architecture - existing construction software requires manual data entry.
              Patent covers multi-widget data correlation, automatic invoice population, and cross-widget compliance reporting.
              <br /><br />
              <strong>Freedom to Operate:</strong> Design-around strategies implemented for blocking patents (US8395661B1 pipe detection,
              US20220292240 AI code compliance). Voice-tagged materials, AI-assisted (not AI-determined) compliance, and trade code focus
              avoid infringement. Legal opinion: &lt;10% infringement risk.
              <br /><br />
              <Link to="/patent-strategy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                View Full Patent Strategy Document →
              </Link>
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Proprietary Training Data Moat</h3>
            <p>
              <strong>Labeled Dataset Advantage:</strong> Initial 50,000 labeled photos of electrical panels, outlets, junction boxes,
              and plumbing installations with code violation annotations. Each contractor using SnapMoose generates 20-50 photos/month with
              validation feedback (contractor confirms/rejects AI suggestions). After 1 year with 5,000 users: 1.2M+ labeled images.
              <br /><br />
              <strong>Accuracy Improvement:</strong> AI model accuracy improves with more training data. Competitors starting from zero
              would need equivalent dataset (1.2M labeled images = $600K labeling cost at $0.50/image). By Year 3 with 50,000 users,
              IntelliMoose has 12M+ labeled images - impossible for competitors to replicate without similar customer base.
              <br /><br />
              <strong>Trade Secret Protection:</strong> Training datasets, model architectures, and prompt engineering maintained as
              confidential trade secrets (not disclosed in patents). Employee NDAs prevent leakage. Encrypted storage prevents theft.
              Indefinite protection (unlike 20-year patent expiration).
              <br /><br />
              <strong>Jurisdiction-Specific Advantage:</strong> Code amendments vary by city/county. NYC electrical code differs from
              Los Angeles differs from Chicago. IntelliMoose accumulates jurisdiction-specific training data as contractors use product
              across US. Competitor would need national customer base to match coverage.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Network Effects & Platform Lock-In</h3>
            <p>
              <strong>Data Lock-In:</strong> Contractor using FixMoose platform for 1 year accumulates 50+ jobs, 500+ photos,
              1,000+ voice notes, 200+ compliance reports. Switching to competitor requires exporting entire database and re-importing
              (if competitor even supports import). High friction = high retention. Measured switching cost: 20+ hours manual migration.
              <br /><br />
              <strong>Widget Bundling:</strong> Contractors start with SnapMoose ($50/month), add VoiceMoose (free), upgrade to EyeMoose ($99/month),
              add FixMoose Pro ($49/month). Each additional widget increases switching cost. Fully bundled contractor ($198/month) has 4x switching
              friction vs SnapMoose-only user.
              <br /><br />
              <strong>Viral Coefficients:</strong> Referral program (existing user gets $100 credit for referral) drives viral growth.
              Early data: 30% of users refer 1+ friend (viral coefficient 0.3). Trade show demos create word-of-mouth: electrician sees
              peer using SnapMoose on job site, asks for demo, downloads app. Social proof compounds.
              <br /><br />
              <strong>Supplier Network Effects:</strong> Year 3 supplier marketplace creates two-sided network effect. More contractors
              on platform = more supplier interest (access to 50K customers). More suppliers on platform = more contractor value
              (one-click parts ordering from violation reports). Winner-take-most market structure.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>First-Mover Advantage in Nascent Market</h3>
            <p>
              <strong>Market Timing:</strong> Construction AI is exploding (OpenSpace raised $200M Series D in 2023, Smartvid acquired by Oracle 2022)
              but code compliance remains unaddressed. Existing players focus on BIM visualization (OpenSpace), safety monitoring (Smartvid),
              or project management (Procore). IntelliMoose is first to market with trade-specific code compliance AI.
              <br /><br />
              <strong>Technology Enablers:</strong> Recent AI advances make this possible now: (1) GPT-4 Vision (2023) provides accurate
              image analysis without custom training for every violation type. (2) Meta Ray-Ban smart glasses (2023) provide affordable AR
              platform ($299 vs $3,500 for HoloLens). (3) Whisper API (2022) enables accurate trade-specific speech recognition.
              Technology stack didn't exist 2 years ago.
              <br /><br />
              <strong>Brand Positioning:</strong> First mover captures "AI code compliance" category in contractor mindshare. When electrician
              thinks "check code violations with AI," thinks "SnapMoose" (like "search" = "Google"). Category ownership is defensible moat
              independent of patents or data.
              <br /><br />
              <strong>Switching Costs Compound:</strong> Contractor using SnapMoose for 3 years has 150+ jobs, 3,000+ photos, deep muscle
              memory for UI/workflow. Even if competitor launches better product, contractor reluctant to learn new system. Incumbency advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 7: Team & Ask */}
      <section className="product-section">
        <h2>Slide 7: The Ask - $2.5M Seed Round</h2>

        <div className="problem-description">
          <h3>Use of Funds</h3>
          <table style={{ width: '100%', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '2px solid var(--primary)' }}>Category</th>
                <th style={{ textAlign: 'right', padding: '0.75rem', borderBottom: '2px solid var(--primary)' }}>Amount</th>
                <th style={{ textAlign: 'right', padding: '0.75rem', borderBottom: '2px solid var(--primary)' }}>% of Raise</th>
                <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '2px solid var(--primary)' }}>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem' }}>Product Development</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$800K</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>32%</td>
                <td style={{ padding: '0.75rem' }}>2 ML engineers ($180K each), 2 full-stack developers ($160K each), 1 mobile developer ($140K). Build SnapMoose MVP, VoiceMoose integration, FixMoose platform, EyeMoose AR prototype. 12-month runway.</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>Sales & Marketing</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$900K</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>36%</td>
                <td style={{ padding: '0.75rem' }}>Customer acquisition: Google Ads $300K, trade show booths $200K (NECA, IPC, Greenbuild), content marketing $100K (YouTube tutorials, SEO). Sales team: 1 head of sales ($150K), 2 BDRs ($80K each). Partnerships: distributor co-marketing $70K.</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>Infrastructure & AI Costs</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$400K</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>16%</td>
                <td style={{ padding: '0.75rem' }}>AWS hosting $150K (scales with users), GPT-4 Vision API $200K (5,000 users × 20 photos/month × $0.02/photo), data labeling $50K (outsource to Scale AI for training data annotation).</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>IP & Legal</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$150K</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>6%</td>
                <td style={{ padding: '0.75rem' }}>Patent prosecution: $15K utility conversion, $30K office action responses, $20K continuation patents. Corporate legal: $50K (incorporation, investor agreements, employment contracts). IP defense fund: $35K reserve for potential disputes.</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>Operations & Overhead</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$250K</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>10%</td>
                <td style={{ padding: '0.75rem' }}>Office/coworking $60K, HR/recruiting $40K (hire 7 employees), accounting/finance $30K, insurance $20K, software tools $50K (GitHub, Figma, Slack, CRM), misc $50K.</td>
              </tr>
              <tr style={{ fontWeight: 'bold', borderTop: '2px solid var(--primary)' }}>
                <td style={{ padding: '0.75rem' }}>Total</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>$2.5M</td>
                <td style={{ textAlign: 'right', padding: '0.75rem' }}>100%</td>
                <td style={{ padding: '0.75rem' }}>18-month runway to $3M ARR (cash flow breakeven at $5M ARR in Year 2)</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: '3rem' }}>Round Terms</h3>
          <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <li><strong>Raise Amount:</strong> $2.5M seed round</li>
            <li><strong>Pre-Money Valuation:</strong> $10M (20% dilution for investors)</li>
            <li><strong>Post-Money Valuation:</strong> $12.5M</li>
            <li><strong>Security:</strong> SAFE (Simple Agreement for Future Equity) with standard terms</li>
            <li><strong>Discount:</strong> 20% discount to Series A price (investor protection if valuation increases)</li>
            <li><strong>Valuation Cap:</strong> $15M (protects investors from excessive dilution if company grows rapidly)</li>
            <li><strong>Pro Rata Rights:</strong> Investors can maintain ownership % in future rounds</li>
            <li><strong>Use of Funds:</strong> 18-month runway to $3M ARR and Series A readiness</li>
          </ul>

          <h3 style={{ marginTop: '3rem' }}>Exit Scenarios (5-7 Year Horizon)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
            <div style={{ border: '1px solid var(--primary)', padding: '1.5rem', borderRadius: '12px' }}>
              <h4 style={{ marginTop: 0, color: 'var(--primary)' }}>Scenario 1: Strategic Acquisition ($150-300M)</h4>
              <p style={{ marginBottom: '0.5rem' }}><strong>Acquirer:</strong> Procore, ServiceTitan, or Trimble (construction software incumbents seeking AI differentiation)</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>ARR at Exit:</strong> $30-50M</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Valuation Multiple:</strong> 5-6x ARR (SaaS benchmark for 50%+ growth rate)</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Exit Value:</strong> $150-300M</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Investor Return:</strong> 12-24x (seed $12.5M post → $150-300M exit)</p>
              <p style={{ marginBottom: 0 }}><strong>Timeline:</strong> Year 5-6</p>
            </div>
            <div style={{ border: '1px solid var(--accent)', padding: '1.5rem', borderRadius: '12px' }}>
              <h4 style={{ marginTop: 0, color: 'var(--accent)' }}>Scenario 2: Mega-Tech Acquirer ($500M-1B)</h4>
              <p style={{ marginBottom: '0.5rem' }}><strong>Acquirer:</strong> Google (Workspace integration), Microsoft (Teams/Dynamics), Salesforce (Service Cloud), Amazon (AWS IoT)</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>ARR at Exit:</strong> $100M+</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Valuation Multiple:</strong> 8-10x ARR (premium for category leadership, patent portfolio, data moat)</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Exit Value:</strong> $800M-1B</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Investor Return:</strong> 64-80x (seed $12.5M post → $800M-1B exit)</p>
              <p style={{ marginBottom: 0 }}><strong>Timeline:</strong> Year 6-7</p>
            </div>
          </div>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '2rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '12px', padding: '1.5rem' }}>
            <strong>Why IntelliMoose is Acquisition Target:</strong> (1) Strategic fit for construction software platforms (Procore, ServiceTitan)
            needing AI differentiation. (2) Horizontal expansion potential for big tech (Google/Microsoft) entering construction vertical.
            (3) Patent portfolio (EyeMoose AR + Widget Ecosystem) blocks competitors from replicating core features. (4) Proprietary training data
            (12M+ labeled images by Year 3) cannot be easily replicated. (5) Contractor lock-in (50K users, high switching costs) provides
            instant distribution for acquirer's products. (6) Proven business model (90% gross margin, 11.7x LTV:CAC, 3% monthly churn).
          </p>
        </div>
      </section>

      {/* Investment Disclaimers */}
      <section className="product-section dark">
        <h2>Important Investment Disclaimers</h2>
        <div className="problem-description">
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#ccc' }}>
            This pitch deck is for informational and promotional purposes only and does not constitute an offer to sell, a solicitation of
            an offer to buy, or a recommendation for any security. All financial projections, revenue estimates, market size calculations,
            growth forecasts, exit valuations, and timelines presented herein are forward-looking statements based on assumptions that may or
            may not materialize and are subject to significant business, economic, regulatory, and competitive risks and uncertainties.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#ccc' }}>
            Investment in early-stage companies involves substantial risk of loss of your entire investment. You should invest only funds that
            you can afford to lose entirely without affecting your financial condition. Most startup companies fail, and there can be no assurance
            that IntelliMoose will achieve projected revenue, user growth, or exit outcomes.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#ccc' }}>
            For complete terms, risk factors, and legal disclaimers, please review our{' '}
            <Link to="/terms" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Terms of Service</Link> and{' '}
            <Link to="/patent-strategy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Patent Strategy Document</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta">
        <h2>Let's Build the Future of Construction AI</h2>
        <p>$2.5M seed round • 18-month runway to $3M ARR • 12-24x exit potential</p>
        <div className="cta-buttons">
          <Link to="/" className="glow-button secondary">
            ← Back to Overview
          </Link>
          <a href="mailto:invest@intellimoose.com" className="glow-button primary">
            Schedule Investor Meeting
          </a>
        </div>
      </section>

      {/* Legal Footer */}
      <LegalFooter />
    </div>
  );
};

export default InvestorPitchPage;
