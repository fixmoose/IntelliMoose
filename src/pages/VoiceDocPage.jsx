import { Link } from 'react-router-dom';
import './ProductPage.css';

const VoiceDocPage = () => {
  return (
    <div className="product-page">
      <div className="animated-bg"></div>
      <div className="grid-overlay"></div>

      {/* Hero */}
      <section className="product-hero">
        <Link to="/" className="back-button">
          ← Back to Overview
        </Link>

        <div className="product-hero-icon">🎙️</div>
        <h1 className="product-hero-title">VoiceDoc</h1>
        <p className="product-hero-tagline">
          Talk While You Work. AI Handles the Paperwork.
        </p>

        <div className="product-hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">2-3 hrs/day</span>
            <span className="hero-stat-label">Time Saved</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">$15K/year</span>
            <span className="hero-stat-label">Value Per Worker</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">10-14 days</span>
            <span className="hero-stat-label">Build Time</span>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="product-section">
        <h2>The Problem: Paperwork Is Killing Productivity</h2>
        <div className="problem-stats-grid">
          <div className="problem-stat-card">
            <div className="problem-stat-number">2-3 hours</div>
            <div className="problem-stat-label">Daily time on documentation</div>
          </div>
          <div className="problem-stat-card">
            <div className="problem-stat-number">40%</div>
            <div className="problem-stat-label">Of workday is non-billable admin</div>
          </div>
          <div className="problem-stat-card">
            <div className="problem-stat-number">30%</div>
            <div className="problem-stat-label">Of billing disputes from doc errors</div>
          </div>
        </div>

        <div className="problem-description">
          <p>
            Electricians, plumbers, HVAC techs spend hours every day on paperwork: work orders, material lists,
            invoicing, compliance notes. They document the same information 3-4 times across different systems.
          </p>
          <p>
            Meanwhile, they're losing billable hours, making transcription errors, and creating billing disputes
            with customers who question line items they can't verify.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="product-section dark">
        <h2>The Solution: Voice-to-Everything</h2>

        <div className="demo-flow">
          <div className="demo-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Worker Speaks</h3>
              <div className="voice-example">
                "Installing 20-amp GFCI outlet, bedroom 2, using 12-gauge Romex, purple box, breaker 14"
              </div>
            </div>
          </div>

          <div className="demo-arrow">→</div>

          <div className="demo-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>AI Processes</h3>
              <p>
                Fine-tuned Whisper model recognizes trade-specific terminology. GPT-4 structures the unstructured speech
                into formatted outputs.
              </p>
            </div>
          </div>

          <div className="demo-arrow">→</div>

          <div className="demo-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Auto-Generated Docs</h3>
              <ul className="output-list">
                <li>✓ Work order entry</li>
                <li>✓ Material list (Romex 12-2, GFCI outlet, purple box)</li>
                <li>✓ Invoice line item ($45 labor + $28 materials)</li>
                <li>✓ Compliance notes (NEC 210.8 GFCI required)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="product-section">
        <h2>Key Features</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Trade-Specific Vocabulary</h3>
            <p>
              Recognizes 10,000+ product codes, manufacturer names, NEC references. Trained on real electrician speech patterns.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Multi-Format Output</h3>
            <p>
              Work orders, material lists, invoices, compliance reports. Export to ServiceTitan, Jobber, QuickBooks.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>100% Offline</h3>
            <p>
              Processes speech on-device. No cloud upload. Works in basements, remote sites, anywhere without internet.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Real-Time Processing</h3>
            <p>
              Docs generated in &lt;3 seconds. No waiting. Review and edit on your phone before syncing to office.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Context-Aware</h3>
            <p>
              Understands "bedroom 2" means specific location in blueprint. Links to building plans, previous work orders.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Simple Mobile App</h3>
            <p>
              Press record, talk, done. No complicated UI. Designed for workers wearing gloves in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="product-section dark">
        <h2>Technical Implementation</h2>

        <div className="tech-stack">
          <div className="tech-layer">
            <h3>Speech Recognition Layer</h3>
            <ul>
              <li>Fine-tuned OpenAI Whisper on trade-specific dataset</li>
              <li>Custom vocabulary injection for product codes, manufacturer names</li>
              <li>Real-time streaming transcription (&lt;200ms latency)</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Processing Layer</h3>
            <ul>
              <li>GPT-4 Turbo for structured data extraction</li>
              <li>Custom prompt engineering for document generation</li>
              <li>Context-aware parsing (links to blueprints, previous work)</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Output Layer</h3>
            <ul>
              <li>Templates for work orders, invoices, compliance reports</li>
              <li>Integration APIs for ServiceTitan, Jobber, QuickBooks</li>
              <li>PDF generation, email delivery, cloud sync</li>
            </ul>
          </div>
        </div>

        <div className="build-timeline">
          <h3>Build Timeline: 10-14 Days</h3>
          <div className="timeline-grid">
            <div className="timeline-item">
              <span className="timeline-days">Day 1-3</span>
              <span className="timeline-task">Fine-tune Whisper on trade vocabulary</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Day 4-6</span>
              <span className="timeline-task">Build prompt engineering layer</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Day 7-9</span>
              <span className="timeline-task">React Native app (iOS/Android)</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Day 10-12</span>
              <span className="timeline-task">Output templates + integrations</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-days">Day 13-14</span>
              <span className="timeline-task">Beta testing with 5 electricians</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="product-section">
        <h2>Business Model & Market</h2>

        <div className="business-grid">
          <div className="business-card">
            <h3>Pricing</h3>
            <div className="pricing-value">$30/month</div>
            <p>Per worker. Unlimited usage. 30-day free trial.</p>
          </div>

          <div className="business-card">
            <h3>Target Market</h3>
            <ul className="market-list">
              <li>Electricians (750K in US)</li>
              <li>Plumbers (480K in US)</li>
              <li>HVAC techs (380K in US)</li>
              <li>General contractors (2.1M in US)</li>
            </ul>
          </div>

          <div className="business-card">
            <h3>Unit Economics</h3>
            <ul className="economics-list">
              <li>CAC: $150 (direct sales, trade shows)</li>
              <li>LTV: $1,080 (36-month avg retention)</li>
              <li>LTV:CAC = 7.2x</li>
              <li>Gross margin: 85%</li>
            </ul>
          </div>
        </div>

        <div className="market-size">
          <h3>Market Size</h3>
          <div className="market-breakdown">
            <div className="market-tier">
              <span className="market-label">TAM</span>
              <span className="market-value">$13.2B</span>
              <span className="market-desc">3.7M tradespeople × $30/mo × 12 months</span>
            </div>
            <div className="market-tier">
              <span className="market-label">SAM</span>
              <span className="market-value">$3.6B</span>
              <span className="market-desc">1M electricians/plumbers (early adopters)</span>
            </div>
            <div className="market-tier">
              <span className="market-label">SOM (Year 3)</span>
              <span className="market-value">$36M</span>
              <span className="market-desc">100K users at $30/month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Patentability */}
      <section className="product-section dark">
        <h2>Patentable Innovation</h2>

        <div className="patent-claims">
          <div className="patent-card">
            <h3>Domain-Specific Speech Recognition</h3>
            <p>
              <strong>Claim:</strong> Method for real-time speech recognition of trade-specific terminology
              including product codes, manufacturer names, and regulatory references, with accuracy exceeding
              95% in noisy job site environments.
            </p>
            <p>
              <strong>Prior Art Differentiation:</strong> Generic speech recognition (Siri, Alexa) fails on
              trade terminology. Our fine-tuning methodology + custom vocabulary injection is novel.
            </p>
          </div>

          <div className="patent-card">
            <h3>Automated Documentation Generation</h3>
            <p>
              <strong>Claim:</strong> System for generating structured compliance documents from unstructured
              natural language input, with context-aware linking to blueprints, building codes, and historical work orders.
            </p>
            <p>
              <strong>Prior Art Differentiation:</strong> Existing systems require manual input into forms.
              Our context-aware parsing and multi-format output is novel.
            </p>
          </div>

          <div className="patent-card">
            <h3>Hybrid On-Device/Cloud Processing</h3>
            <p>
              <strong>Claim:</strong> Architecture for privacy-preserving speech processing that performs
              transcription on-device and structured extraction via encrypted cloud API, with &lt;3s end-to-end latency.
            </p>
            <p>
              <strong>Prior Art Differentiation:</strong> Balances privacy (on-device transcription) with
              capability (cloud-based GPT-4) in a novel way optimized for field service.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="product-section">
        <h2>Competitive Landscape</h2>

        <div className="competitive-table">
          <div className="competitive-header">
            <div></div>
            <div>VoiceDoc</div>
            <div>Generic Voice Assistants</div>
            <div>Manual Documentation</div>
          </div>

          <div className="competitive-row">
            <div>Trade Terminology</div>
            <div className="check">✓ 95%+ accuracy</div>
            <div className="cross">✗ &lt;60% accuracy</div>
            <div className="neutral">N/A</div>
          </div>

          <div className="competitive-row">
            <div>Offline Capable</div>
            <div className="check">✓ Full functionality</div>
            <div className="cross">✗ Requires internet</div>
            <div className="check">✓ Works anywhere</div>
          </div>

          <div className="competitive-row">
            <div>Multi-Format Output</div>
            <div className="check">✓ 4+ document types</div>
            <div className="cross">✗ Transcription only</div>
            <div className="neutral">Manual entry</div>
          </div>

          <div className="competitive-row">
            <div>Time Savings</div>
            <div className="check">✓ 2-3 hrs/day</div>
            <div className="neutral">Minimal</div>
            <div className="cross">✗ 2-3 hrs/day lost</div>
          </div>

          <div className="competitive-row">
            <div>Cost</div>
            <div className="check">$30/month</div>
            <div className="neutral">Free (but limited)</div>
            <div className="cross">$15K/year in lost time</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta">
        <h2>Ready to Build VoiceDoc?</h2>
        <p>10-14 days to working prototype. $500-1K in build costs. $30/month SaaS revenue per user.</p>
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

export default VoiceDocPage;
