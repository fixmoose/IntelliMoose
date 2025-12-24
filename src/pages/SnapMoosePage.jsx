import { Link } from 'react-router-dom';
import LegalFooter from '../components/LegalFooter';
import './ProductPage.css';

const SnapMoosePage = () => {
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
        <h1 className="product-hero-title">SnapMoose</h1>
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
            <strong>SnapMoose is an AI-assisted mobile app (iOS & Android) that helps licensed contractors review electrical installations for potential code compliance issues.</strong>
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
            <strong>Download app → Point camera at panel/outlet/box → Get instant compliance review with AI-suggested issues for contractor confirmation.</strong>
            <br />No hardware to buy. Uses phone camera. Works in basements with no signal. Review installations before inspector arrives.
          </p>
        </div>
      </section>

      {/* FREE FixMoose Basic Callout */}
      <section className="product-section dark">
        <div className="fixmoose-callout">
          <div className="fixmoose-badge">🎁 INCLUDED FREE</div>
          <h2>Every SnapMoose Subscription Includes FREE FixMoose Basic Account</h2>

          <div className="fixmoose-details">
            <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '2rem' }}>
              SnapMoose detects code violations. FixMoose stores the reports, photos, and compliance docs for every job.
            </p>

            <div className="fixmoose-grid">
              <div className="fixmoose-feature">
                <h3>✓ What's Included (FREE)</h3>
                <ul>
                  <li>Store up to 5 active jobs</li>
                  <li>100MB storage (photos, docs, recordings)</li>
                  <li>25 customer contacts</li>
                  <li>Basic invoicing and work orders</li>
                  <li>Mobile app access (iOS & Android)</li>
                </ul>
              </div>

              <div className="fixmoose-feature">
                <h3>🚀 Upgrade to FixMoose Pro ($49/month)</h3>
                <ul>
                  <li>Unlimited jobs</li>
                  <li>10GB storage</li>
                  <li>Unlimited customer contacts</li>
                  <li>Customer portal (homeowners see invoices, approve work)</li>
                  <li>Permission layers (show/hide contractor notes)</li>
                  <li>Priority support</li>
                </ul>
              </div>
            </div>

            <div className="fixmoose-note">
              <p><strong>Why FixMoose?</strong> All your AI widgets (VoiceDoc, SnapMoose, SafetyEye) feed into one central platform.
              Job data, customer history, photos, compliance reports—everything in one place. Start free, upgrade when you outgrow the limits.</p>
              <Link to="/platform" className="fixmoose-link">Learn more about FixMoose Platform →</Link>
            </div>
          </div>
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
              <h3>AI-Assisted Analysis</h3>
              <p>
                Computer vision model (fine-tuned YOLOv8) identifies components: breakers, wires, outlets, boxes.
                GPT-4 Vision cross-references NEC 2023 code database to suggest potential violations for contractor review.
              </p>
            </div>
          </div>

          <div className="demo-arrow">→</div>

          <div className="demo-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Instant Compliance Review</h3>
              <ul className="output-list">
                <li>✓ Potential issues highlighted for contractor review</li>
                <li>✓ Specific NEC section citations (e.g., "NEC 210.8(A)(6)")</li>
                <li>✓ Plain-English explanation of potential concerns</li>
                <li>✓ Recommended fixes with parts list</li>
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
        <h2>Real-World Code Compliance Assistance Examples</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>GFCI Compliance Review</h3>
            <p>
              <strong>AI Detection:</strong> Identifies outlet types and locations (kitchens, bathrooms, garages, outdoors).
              <br /><br />
              <strong>AI Suggestion:</strong> "Review: Standard outlet in bathroom may require GFCI per NEC 210.8(A)(1). Contractor to confirm."
              <br /><br />
              <strong>Recommended Fix:</strong> "Replace with GFCI outlet (Leviton GFNT1-W, $18). Test monthly."
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔌</div>
            <h3>Wire Gauge Review Assistance</h3>
            <p>
              <strong>AI Detection:</strong> Reads wire labels (14 AWG, 12 AWG, 10 AWG) and breaker sizes.
              <br /><br />
              <strong>AI Suggestion:</strong> "Review: 14 AWG wire on 20-amp breaker may exceed NEC 240.4(D) max 15-amp. Contractor to verify."
              <br /><br />
              <strong>Recommended Fix:</strong> "Downgrade to 15-amp breaker OR replace with 12 AWG wire."
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

      {/* Plumbing Code Compliance */}
      <section className="product-section">
        <h2>Beyond Electrical: Plumbing Code Compliance</h2>

        <div className="problem-description">
          <p style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '3rem' }}>
            <strong>SnapMoose isn't just for electricians—it also detects plumbing code violations.</strong>
            <br />ABS pipe restrictions, drainage slope, vent sizing, trap requirements, and more.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚫</div>
            <h3>Pipe Material Code Compliance</h3>
            <p>
              <strong>Detection:</strong> Voice-tag pipe material (ABS, PVC, copper) → System checks jurisdiction code requirements.
              <br /><br />
              <strong>Potential Violation:</strong> ABS pipe in jurisdiction where only PVC is allowed (varies by state/municipality). AI suggests review.
              <br /><br />
              <strong>Fix:</strong> "Replace ABS with Schedule 40 PVC. Check local amendments—some areas ban ABS entirely due to fire concerns."
              <br /><br />
              <strong>Why it matters:</strong> Inspectors fail installations using banned materials. Re-piping costs $2,000-$5,000.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📐</div>
            <h3>90-Degree Bend Violations</h3>
            <p>
              <strong>Detection:</strong> Identifies 90-degree elbows in horizontal drainage runs.
              <br /><br />
              <strong>Violation:</strong> Sharp 90° elbow in horizontal drain (UPC 706.3 requires two 45° or long-sweep 90°).
              <br /><br />
              <strong>Fix:</strong> "Replace with two 45-degree elbows OR use long-sweep 90-degree elbow. Prevents clogs."
              <br /><br />
              <strong>Why it matters:</strong> Sharp bends restrict flow, cause clogs. Long-sweep elbows required for horizontal drainage.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔀</div>
            <h3>WYE vs TEE Requirements</h3>
            <p>
              <strong>Detection:</strong> Distinguishes between WYE (Y-shaped) and TEE (T-shaped) fittings in drainage systems.
              <br /><br />
              <strong>Violation:</strong> Sanitary TEE used horizontally in drain line (UPC 706.2 requires WYE or Combo WYE).
              <br /><br />
              <strong>Fix:</strong> "Replace horizontal TEE with WYE fitting. TEEs only allowed in vertical stacks."
              <br /><br />
              <strong>Why it matters:</strong> Horizontal TEEs cause turbulence and backups. WYE fittings ensure smooth drainage flow.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💧</div>
            <h3>Trap Seal Depth</h3>
            <p>
              <strong>Detection:</strong> Measures P-trap water seal depth using phone camera depth sensors.
              <br /><br />
              <strong>Violation:</strong> Trap seal only 1.5 inches deep (UPC 1002.1 requires 2-4 inches).
              <br /><br />
              <strong>Fix:</strong> "Replace trap. Water seal must be 2-4 inches to prevent sewer gas entry."
              <br /><br />
              <strong>Why it matters:</strong> Shallow traps allow sewer gas into building. Deep traps lose prime (water evaporates, breaks seal).
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌬️</div>
            <h3>Vent Stack Sizing</h3>
            <p>
              <strong>Detection:</strong> Reads pipe diameter labels, counts fixtures served by vent.
              <br /><br />
              <strong>Violation:</strong> 1.5" vent serving 3 toilets (UPC Table 702.1 requires 2" minimum for 3+ water closets).
              <br /><br />
              <strong>Fix:</strong> "Upgrade vent to 2-inch pipe. Undersized vents cause slow drainage and gurgling."
              <br /><br />
              <strong>Why it matters:</strong> Inadequate venting creates vacuum, slows drainage, causes trap siphonage (breaks seal).
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📏</div>
            <h3>Slope/Grade Verification</h3>
            <p>
              <strong>Detection:</strong> Uses phone accelerometer to measure pipe slope angle.
              <br /><br />
              <strong>Violation:</strong> Drain pipe at 1/16" per foot slope (UPC 704.1 requires minimum 1/8" per foot, max 1/4").
              <br /><br />
              <strong>Fix:</strong> "Adjust pitch to 1/8" per foot (1% slope). Too flat = clogs. Too steep = water outruns solids."
              <br /><br />
              <strong>Why it matters:</strong> Improper slope is #1 cause of chronic drainage problems. Inspector checks with level.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Material Compatibility</h3>
            <p>
              <strong>Detection:</strong> Identifies metal types at pipe joints (copper, galvanized steel, brass).
              <br /><br />
              <strong>Violation:</strong> Copper pipe directly connected to galvanized steel (causes galvanic corrosion).
              <br /><br />
              <strong>Fix:</strong> "Install dielectric union between dissimilar metals. Prevents electrochemical corrosion."
              <br /><br />
              <strong>Why it matters:</strong> Dissimilar metals create electrical current, corrode pipes from inside. Leaks in 5-10 years.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Cleanout Access Requirements</h3>
            <p>
              <strong>Detection:</strong> Traces drain runs, identifies cleanout locations and spacing.
              <br /><br />
              <strong>Violation:</strong> 80 feet of drain pipe with no cleanout (UPC 707.4 requires cleanout every 100 feet + at direction changes).
              <br /><br />
              <strong>Fix:</strong> "Install cleanout at base of stack and at direction changes. Required for clearing clogs."
              <br /><br />
              <strong>Why it matters:</strong> Without cleanouts, clogs require demolition to access pipes. $5,000+ repair vs $50 cleanout.
            </p>
          </div>
        </div>

        <div className="problem-description" style={{ marginTop: '3rem', background: 'rgba(139, 92, 246, 0.1)', border: '2px solid rgba(139, 92, 246, 0.3)', borderRadius: '16px', padding: '2rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--accent)' }}>🎯 3X Market Expansion: All Skilled Trades</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            <strong>Electricians:</strong> 750,000 in US (original target)
            <br />
            <strong>Plumbers:</strong> 500,000 in US (NOW addressable with plumbing features)
            <br />
            <strong>HVAC Technicians:</strong> 400,000 in US (FUTURE: duct sizing, refrigerant line compliance)
            <br /><br />
            <strong>Total Addressable Market: 1.65M skilled tradespeople → 3X revenue potential</strong>
            <br /><br />
            By expanding SnapMoose from electrical-only to <strong>all trades</strong>, we demonstrate the AI model is <strong>scalable and retrainable</strong>.
            Same YOLOv8 architecture, just retrain on plumbing/HVAC datasets. This proves SnapMoose is a <strong>platform, not a niche tool</strong>.
          </p>
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
            <h3>Real-Time Compliance Suggestions</h3>
            <p>
              As you take photos during installation, app suggests potential code issues for immediate contractor review.
              Licensed contractors verify and fix suggested issues before inspector arrives. Helps prevent expensive re-work.
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

      {/* Intellectual Property */}
      <section className="product-section">
        <h2>Intellectual Property Strategy</h2>

        <div className="patent-claims">
          <div className="patent-card">
            <h3>AI-Assisted Code Compliance Review</h3>
            <p>
              <strong>Innovation:</strong> AI-assisted system that helps licensed contractors review installations for potential
              NEC code issues, combining computer vision with trade-specific code databases for real-time suggestions.
            </p>
            <p>
              <strong>Approach:</strong> Human-in-the-loop design where AI suggests potential issues and licensed contractors
              make final determinations. This maintains professional responsibility while providing intelligent assistance.
            </p>
            <p>
              <strong>Value:</strong> Reduces inspection failure rate from 40% to &lt;5%. Saves $7K avg per prevented failure.
              Provides specific NEC citations in &lt;3 seconds vs. 10-15 minutes manual lookup.
            </p>
          </div>

          <div className="patent-card">
            <h3>Voice-Tagged Material Compliance</h3>
            <p>
              <strong>Innovation:</strong> Integration of voice-based material identification with code database lookup,
              allowing contractors to tag materials hands-free while AI cross-references jurisdiction requirements.
            </p>
            <p>
              <strong>Approach:</strong> Contractor identifies materials via voice (integrated with VoiceMoose), system checks
              jurisdiction-specific code requirements (e.g., ABS vs PVC restrictions), creates documentation trail.
            </p>
            <p>
              <strong>Value:</strong> Avoids material-specific blocking patents while providing same functionality. Creates
              audit trail of contractor material choices. Faster than camera-based detection in poor lighting.
            </p>
          </div>

          <div className="patent-card">
            <h3>Geometric Code Violation Detection</h3>
            <p>
              <strong>Innovation:</strong> Computer vision detection of geometric code violations (junction box accessibility,
              90-degree drain bends, trap depth, pipe slope) using shape recognition and smartphone sensors.
            </p>
            <p>
              <strong>Approach:</strong> Focus on shape/dimension detection rather than material identification. Uses phone
              accelerometer for slope, depth sensors for measurements, CV for geometric features.
            </p>
            <p>
              <strong>Value:</strong> Detects violations missed by traditional inspections. Accelerometer-based slope measurement
              more accurate than visual inspection. Patent-safe implementation avoiding prior art conflicts.
            </p>
          </div>
        </div>

        <div className="patent-note" style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '12px', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
          <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
            <strong>Note:</strong> For detailed patent landscape analysis, freedom-to-operate assessment, and IP strategy,
            see our <Link to="/patent-strategy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Patent Strategy Document</Link>.
            This includes analysis of blocking patents, design-around approaches, and provisional patent filing recommendations.
          </p>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="product-section dark">
        <h2>Competitive Landscape</h2>

        <div className="competitive-table">
          <div className="competitive-header">
            <div></div>
            <div>SnapMoose</div>
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
        <h2>Ready to Build SnapMoose?</h2>
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

      {/* Legal Footer */}
      <LegalFooter />
    </div>
  );
};

export default SnapMoosePage;
