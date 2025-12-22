import { Link } from 'react-router-dom';
import './ProductPage.css';

const CodeSnapPage = () => {
  return (
    <div className="product-page">
      <div className="animated-bg"></div>
      <div className="grid-overlay"></div>

      {/* Hero */}
      <section className="product-hero">
        <Link to="/" className="back-button">
          ← Back to Overview
        </Link>

        <div className="product-hero-icon">📸</div>
        <h1 className="product-hero-title">CodeSnap</h1>
        <p className="product-hero-tagline">
          Point Your Phone. Know the Code. Avoid the Fine.
        </p>

        <div className="product-hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">40%</span>
            <span className="hero-stat-label">Jobs Fail First Inspection</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">$7K avg</span>
            <span className="hero-stat-label">Re-work Cost</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">10-14 days</span>
            <span className="hero-stat-label">Build Time</span>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="product-section">
        <h2>The Problem: Code Compliance Is Hard and Expensive</h2>
        <div className="problem-stats-grid">
          <div className="problem-stat-card">
            <div className="problem-stat-number">40%</div>
            <div className="problem-stat-label">Electrical jobs fail first inspection</div>
          </div>
          <div className="problem-stat-card">
            <div className="problem-stat-number">$7,000</div>
            <div className="problem-stat-label">Average re-work cost per failed inspection</div>
          </div>
          <div className="problem-stat-card">
            <div className="problem-stat-number">700+</div>
            <div className="problem-stat-label">NEC code sections electricians must know</div>
          </div>
        </div>

        <div className="problem-description">
          <p>
            The National Electrical Code (NEC) has 700+ pages. Electricians are expected to memorize:
            wire gauge requirements, breaker sizing, GFCI/AFCI placement rules, box fill calculations,
            grounding requirements, and spacing regulations.
          </p>
          <p>
            Common violations: Wrong wire gauge for circuit amperage. GFCI outlets missing in required locations
            (kitchens, bathrooms, outdoors). Overloaded junction boxes. Improper grounding. Breakers oversized for wire.
          </p>
          <p>
            Result: 40% of residential electrical work fails first inspection. Each failure costs $7K in re-work,
            delays project timelines by 2-3 weeks, and damages contractor reputation.
          </p>
        </div>
      </section>

      {/* The Product */}
      <section className="product-section dark">
        <h2>The Product: What You Actually Get</h2>

        <div className="problem-description">
          <p style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '3rem' }}>
            <strong>CodeSnap is a mobile app (iOS & Android) that uses your phone's camera to check electrical code compliance.</strong>
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>The App</h3>
            <p>
              <strong>Download:</strong> App Store (iOS 14+) or Google Play (Android 10+)
              <br /><br />
              <strong>Size:</strong> 100MB download (includes YOLOv8 vision model, NEC database)
              <br /><br />
              <strong>Requirements:</strong> Any smartphone with 12MP+ camera (iPhone 11+, or equivalent Android)
              <br /><br />
              <strong>Works with phone you already have.</strong> No special camera hardware needed.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📸</div>
            <h3>What's Included</h3>
            <p>
              <strong>On-Device:</strong>
              <br />• AI vision model (85% accuracy offline)
              <br />• NEC 2023/2020/2017 code database
              <br />• Canadian Electrical Code (CEC)
              <br />• Local amendments (auto-detected by GPS)
              <br /><br />
              <strong>Cloud-Enhanced (when online):</strong>
              <br />• GPT-4 Vision for 95%+ accuracy
              <br />• Detailed violation reports with photos
              <br />• Export to PDF, email to inspectors
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Subscription</h3>
            <p>
              <strong>Pricing:</strong> $50/month per electrician
              <br /><br />
              <strong>Includes:</strong>
              <br />• Unlimited photo scans
              <br />• All code versions (NEC, CEC, local)
              <br />• Offline mode (basic detection)
              <br />• Inspection-ready PDF reports
              <br />• Code database updates (every 3 years when NEC updates)
              <br /><br />
              <strong>30-day free trial, cancel anytime</strong>
            </p>
          </div>
        </div>

        <div className="problem-description" style={{ marginTop: '3rem' }}>
          <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>
            <strong>Download app → Point camera at panel/outlet/box → Get instant violation report.</strong>
            <br />No hardware to buy. Uses phone camera. Works in basements with no signal. Fix violations before inspector arrives.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="product-section">
        <h2>How It Works: AI Code Compliance Camera</h2>

        <div className="demo-flow">
          <div className="demo-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Take Photo</h3>
              <p>
                Point phone camera at electrical panel, outlet installation, or junction box.
                Works in any lighting conditions. No special hardware required—uses standard smartphone camera.
              </p>
            </div>
          </div>

          <div className="demo-arrow">→</div>

          <div className="demo-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>AI Analysis</h3>
              <p>
                Computer vision model (fine-tuned YOLOv8) identifies components: breakers, wires, outlets, boxes.
                GPT-4 Vision cross-references NEC 2023 code database to find violations.
              </p>
            </div>
          </div>

          <div className="demo-arrow">→</div>

          <div className="demo-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Instant Violation Report</h3>
              <ul className="output-list">
                <li>✓ Violations highlighted with red bounding boxes</li>
                <li>✓ Specific NEC section citations (e.g., "NEC 210.8(A)(6)")</li>
                <li>✓ Plain-English explanation of the problem</li>
                <li>✓ Recommended fix with parts list</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Offline */}
      <section className="product-section">
        <h2>How Offline Processing Works</h2>

        <div className="tech-stack">
          <div className="tech-layer">
            <h3>Why Offline Matters for Electricians</h3>
            <ul>
              <li>Job sites in basements with no cell signal (metal studs, concrete block construction)</li>
              <li>Rural residential construction with poor internet coverage</li>
              <li>Commercial buildings with metal-reinforced walls that block WiFi</li>
              <li>Industrial sites where WiFi is restricted for security (data centers, hospitals, government buildings)</li>
              <li>Privacy concerns—contractors don't want client property photos uploaded to cloud</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Hybrid On-Device + Cloud Architecture</h3>
            <ul>
              <li><strong>On-Device (when offline):</strong> Object detection runs locally using TensorFlow Lite model (15MB). Detects components with 85% accuracy. Provides basic warnings ("potential GFCI violation detected"). Works instantly, no internet required.</li>
              <li><strong>Cloud-Enhanced (when online):</strong> Photo + detected objects sent to GPT-4 Vision API. Full NEC database cross-reference. Detailed violation reports with specific code sections. Accuracy improves to 95%+.</li>
              <li><strong>Smart Sync:</strong> When back online, queued photos auto-upload for enhanced analysis. Results sync back to app with detailed reports.</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Technical Implementation Details</h3>
            <ul>
              <li><strong>Camera Processing:</strong> Standard smartphone camera (12MP minimum). Auto-focus and auto-exposure for varying lighting. Works with flash in dark panels.</li>
              <li><strong>On-Device ML:</strong> YOLOv8-Nano model (15MB) converted to TensorFlow Lite. Trained on 50,000 labeled images of electrical panels, outlets, junction boxes. Runs on iPhone (CoreML) and Android (TFLite) at 30 FPS.</li>
              <li><strong>Code Database:</strong> NEC 2023 full-text embedded in vector database (Pinecone). 700+ code sections indexed. Semantic search for relevant violations based on detected components.</li>
              <li><strong>GPT-4 Vision Prompting:</strong> Custom prompt engineering: "You are an electrical inspector. Analyze this image for NEC 2023 violations. For each violation, cite the specific code section, explain the issue, and recommend a fix."</li>
            </ul>
          </div>
        </div>

        <div className="build-timeline">
          <h3>Build Timeline: 10-14 Days</h3>
          <div className="timeline-grid">
            <div className="timeline-item">
              <span className="timeline-days">Day 1-3</span>
              <span className="timeline-task">Collect and label training dataset (panels, outlets, violations)</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Day 4-6</span>
              <span className="timeline-task">Fine-tune YOLOv8 on electrical components, convert to TFLite</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Day 7-9</span>
              <span className="timeline-task">Build NEC vector database, GPT-4 Vision integration</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Day 10-12</span>
              <span className="timeline-task">React Native app with camera integration</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Day 13-14</span>
              <span className="timeline-task">Beta testing with 5 electricians on real job sites</span>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="product-section dark">
        <h2>Real-World Violation Detection Examples</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>GFCI Violations</h3>
            <p>
              <strong>Detection:</strong> Identifies outlet types in kitchens, bathrooms, garages, outdoors.
              <br /><br />
              <strong>Violation:</strong> Standard outlet in bathroom (requires GFCI per NEC 210.8(A)(1)).
              <br /><br />
              <strong>Fix:</strong> "Replace with GFCI outlet (Leviton GFNT1-W, $18). Test monthly."
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔌</div>
            <h3>Wire Gauge Errors</h3>
            <p>
              <strong>Detection:</strong> Reads wire labels (14 AWG, 12 AWG, 10 AWG) and breaker sizes.
              <br /><br />
              <strong>Violation:</strong> 14 AWG wire on 20-amp breaker (max 15-amp per NEC 240.4(D)).
              <br /><br />
              <strong>Fix:</strong> "Downgrade to 15-amp breaker OR replace with 12 AWG wire."
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Box Fill Violations</h3>
            <p>
              <strong>Detection:</strong> Counts wires entering junction box, measures box volume.
              <br /><br />
              <strong>Violation:</strong> 8 wires in 18 cu.in. box (max 6 per NEC 314.16).
              <br /><br />
              <strong>Fix:</strong> "Upgrade to 22.5 cu.in. box OR split into two boxes."
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>AFCI Requirements</h3>
            <p>
              <strong>Detection:</strong> Identifies bedroom circuits, checks for AFCI breakers.
              <br /><br />
              <strong>Violation:</strong> Standard breaker on bedroom circuit (requires AFCI per NEC 210.12).
              <br /><br />
              <strong>Fix:</strong> "Install AFCI breaker (Eaton BR115AF, $45)."
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Grounding Issues</h3>
            <p>
              <strong>Detection:</strong> Verifies ground wire presence and proper bonding.
              <br /><br />
              <strong>Violation:</strong> Missing ground wire in metal junction box.
              <br /><br />
              <strong>Fix:</strong> "Run ground wire to box. Bond to box with green screw."
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📏</div>
            <h3>Clearance Violations</h3>
            <p>
              <strong>Detection:</strong> Measures distances using phone camera depth sensors.
              <br /><br />
              <strong>Violation:</strong> Panel mounted 4 feet high (min 6 feet per NEC 110.26).
              <br /><br />
              <strong>Fix:</strong> "Raise panel to 6 feet minimum. Ensure 3-foot clearance."
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="product-section">
        <h2>Key Features</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Works on Any Smartphone</h3>
            <p>
              No special hardware. iOS 14+ or Android 10+. Uses standard camera—no LiDAR or depth sensors required
              (though they improve accuracy if available).
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Multi-Code Support</h3>
            <p>
              NEC 2023 (primary), NEC 2020, NEC 2017. Canadian Electrical Code (CEC). Local amendments
              (California Title 24, NYC amendments). Switch between code versions in settings.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Inspection-Ready Reports</h3>
            <p>
              Generate PDF reports with photos, violations, code citations, and recommended fixes. Email to
              inspectors before scheduling inspection. Show compliance proactively.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Learning Mode</h3>
            <p>
              Quiz mode for apprentices: "What's wrong with this panel?" Shows violation after 3 guesses.
              Tracks progress—which code sections you struggle with. Apprentices learn faster.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Real-Time Alerts</h3>
            <p>
              As you take photos during installation, app alerts you immediately if it detects a violation.
              Fix it now, not after inspector finds it. Prevents expensive re-work.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Full NEC Database</h3>
            <p>
              Search full NEC text in-app. Bookmark frequently-used sections. Offline access to entire code book.
              No more carrying 700-page manual to job site.
            </p>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="product-section dark">
        <h2>Business Model & Market</h2>

        <div className="business-grid">
          <div className="business-card">
            <h3>Pricing</h3>
            <div className="pricing-value">$50/month</div>
            <p>Per electrician. Unlimited scans. Free NEC updates when new code is released (every 3 years).</p>
          </div>

          <div className="business-card">
            <h3>Target Market</h3>
            <ul className="market-list">
              <li>750,000 licensed electricians in US</li>
              <li>200,000 electrical contractors (multi-person firms)</li>
              <li>80,000 electrical inspectors (dual-use for pre-inspection)</li>
              <li>150,000 apprentices (learning tool)</li>
            </ul>
          </div>

          <div className="business-card">
            <h3>Unit Economics</h3>
            <ul className="economics-list">
              <li>CAC: $200 (trade shows, Google Ads, referrals)</li>
              <li>LTV: $1,800 (36-month avg retention)</li>
              <li>LTV:CAC = 9x</li>
              <li>Gross margin: 90% (pure software)</li>
            </ul>
          </div>
        </div>

        <div className="market-size">
          <h3>Market Size</h3>
          <div className="market-breakdown">
            <div className="market-tier">
              <span className="market-label">TAM</span>
              <span className="market-value">$6.6B</span>
              <span className="market-desc">1.1M electricians/inspectors × $50/mo × 12 months</span>
            </div>
            <div className="market-tier">
              <span className="market-label">SAM</span>
              <span className="market-value">$2.7B</span>
              <span className="market-desc">450K residential electricians (early adopters, highest failure rate)</span>
            </div>
            <div className="market-tier">
              <span className="market-label">SOM (Year 3)</span>
              <span className="market-value">$30M</span>
              <span className="market-desc">50K users at $50/month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Patentability */}
      <section className="product-section">
        <h2>Patentable Innovation</h2>

        <div className="patent-claims">
          <div className="patent-card">
            <h3>Real-Time Code Compliance Verification</h3>
            <p>
              <strong>Claim:</strong> System for real-time detection of electrical code violations using computer vision
              and natural language processing, with accuracy exceeding 95% on common NEC violations (GFCI, wire gauge, box fill).
            </p>
            <p>
              <strong>Prior Art Differentiation:</strong> Generic image recognition (Google Lens) can't interpret electrical codes.
              Manual code lookup is slow. Our automated code-to-image matching with specific violation detection is novel.
            </p>
            <p>
              <strong>Measurable Innovation:</strong> Reduces inspection failure rate from 40% to &lt;5%. Saves $7K avg per prevented failure.
              Provides specific NEC citations in &lt;3 seconds vs. 10-15 minutes manual lookup.
            </p>
          </div>

          <div className="patent-card">
            <h3>Hybrid Offline/Online Compliance Checking</h3>
            <p>
              <strong>Claim:</strong> Architecture for electrical code compliance verification that operates in offline mode
              with 85% accuracy using on-device ML, then enhances to 95%+ accuracy when synced to cloud database, with automatic
              reconciliation of offline predictions.
            </p>
            <p>
              <strong>Prior Art Differentiation:</strong> Cloud-only solutions (building.ai, others) require internet. Pure offline
              tools lack accuracy. Our hybrid approach with smart syncing and prediction reconciliation is novel.
            </p>
            <p>
              <strong>Measurable Innovation:</strong> Works in 100% of job site conditions (offline + online). 15MB on-device model
              vs. 500MB+ for competitor solutions. Offline predictions upgraded retroactively when online.
            </p>
          </div>

          <div className="patent-card">
            <h3>Multi-Code Version Compatibility Engine</h3>
            <p>
              <strong>Claim:</strong> System for simultaneously evaluating electrical installations against multiple code versions
              (NEC 2023, 2020, 2017) and regional amendments, with automatic jurisdiction detection based on GPS location.
            </p>
            <p>
              <strong>Prior Art Differentiation:</strong> Existing tools support single code version. Manual jurisdiction lookup is error-prone.
              Our automatic multi-code evaluation with location-aware amendments is novel.
            </p>
            <p>
              <strong>Measurable Innovation:</strong> Covers 95% of US jurisdictions automatically. Detects jurisdiction-specific amendments
              (e.g., "California requires AFCI in kitchens, but NEC 2023 doesn't"). Prevents costly mistakes in multi-state contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="product-section dark">
        <h2>Competitive Landscape</h2>

        <div className="competitive-table">
          <div className="competitive-header">
            <div></div>
            <div>CodeSnap</div>
            <div>Manual Code Books</div>
            <div>Generic Photo Apps</div>
          </div>

          <div className="competitive-row">
            <div>Code Violation Detection</div>
            <div className="check">✓ 95%+ accuracy, instant</div>
            <div className="neutral">Manual lookup, 15+ min</div>
            <div className="cross">✗ No code knowledge</div>
          </div>

          <div className="competitive-row">
            <div>Offline Capability</div>
            <div className="check">✓ 85% accuracy offline</div>
            <div className="check">✓ Works anywhere</div>
            <div className="cross">✗ Requires internet</div>
          </div>

          <div className="competitive-row">
            <div>Multi-Code Support</div>
            <div className="check">✓ NEC 2023/2020/2017 + local</div>
            <div className="neutral">Must buy each version</div>
            <div className="neutral">N/A</div>
          </div>

          <div className="competitive-row">
            <div>Inspection Reports</div>
            <div className="check">✓ Auto-generated PDFs</div>
            <div className="cross">✗ Manual documentation</div>
            <div className="neutral">Just photos</div>
          </div>

          <div className="competitive-row">
            <div>Cost</div>
            <div className="check">$50/month</div>
            <div className="neutral">$150 per code book</div>
            <div className="check">Free (no features)</div>
          </div>

          <div className="competitive-row">
            <div>Prevents Re-work</div>
            <div className="check">✓ Saves $7K avg</div>
            <div className="neutral">If you find it yourself</div>
            <div className="cross">✗ No code checking</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta">
        <h2>Ready to Build CodeSnap?</h2>
        <p>10-14 days to working prototype. $1-2K in build costs (dataset, API credits). $50/month SaaS revenue per user.</p>
        <div className="cta-buttons">
          <Link to="/" className="glow-button secondary">
            ← Back to Overview
          </Link>
          <a href="mailto:invest@intellimoose.com" className="glow-button primary">
            Let's Build This
          </a>
        </div>
      </section>
    </div>
  );
};

export default CodeSnapPage;
