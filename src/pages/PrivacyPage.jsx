import { Link } from 'react-router-dom';
import LegalFooter from '../components/LegalFooter';
import './ProductPage.css';

const PrivacyPage = () => {
  return (
    <div className="product-page">
      <div className="animated-bg"></div>
      <div className="grid-overlay"></div>

      {/* Hero */}
      <section className="product-hero">
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>

        <div className="product-hero-icon">🔒</div>
        <h1 className="product-hero-title">Privacy Policy</h1>
        <p className="product-hero-tagline">
          How IntelliMoose protects your data
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
          <strong>Last Updated:</strong> December 22, 2025
        </p>
      </section>

      {/* Introduction */}
      <section className="product-section">
        <h2>Introduction</h2>
        <div className="problem-description">
          <p>
            <strong>IntelliMoose</strong> ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect,
            use, store, and share information when you use our platform (FixMoose) and AI widgets (VoiceMoose, SnapMoose, EyeMoose).
          </p>
          <p>
            <strong>By using our services, you agree to this Privacy Policy.</strong> If you do not agree, please do not use our services.
          </p>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="product-section dark">
        <h2>Information We Collect</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>Account Information</h3>
            <p>
              When you create a FixMoose account, we collect:
              <br />• Name, email address, phone number
              <br />• Company name, trade/industry
              <br />• Billing and payment information (processed securely via Stripe)
              <br />• Business address and location
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎙️</div>
            <h3>VoiceMoose Data</h3>
            <p>
              VoiceMoose processes voice recordings to generate work orders and invoices:
              <br />• <strong>Audio recordings:</strong> Stored temporarily during transcription, then deleted (only text retained)
              <br />• <strong>Transcribed text:</strong> Work descriptions, materials, labor hours
              <br />• <strong>On-device processing:</strong> 95% of audio processed locally on your phone (never sent to cloud)
              <br />• <strong>Cloud processing:</strong> Complex queries sent to Claude API for refinement (encrypted in transit)
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📸</div>
            <h3>SnapMoose Data</h3>
            <p>
              SnapMoose analyzes photos for code compliance:
              <br />• <strong>Photos:</strong> Electrical panels, outlets, plumbing installations
              <br />• <strong>On-device analysis:</strong> YOLOv8 model runs locally (95% offline)
              <br />• <strong>Cloud enhancement:</strong> Complex violations sent to GPT-4 Vision for detailed reports
              <br />• <strong>Storage:</strong> Photos stored in your FixMoose account (encrypted at rest)
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👁️</div>
            <h3>EyeMoose Data</h3>
            <p>
              EyeMoose monitors job sites for safety violations:
              <br />• <strong>Video clips:</strong> Only violation clips saved (30-day retention), not continuous recording
              <br />• <strong>On-site processing:</strong> Raspberry Pi + Coral TPU processes video locally
              <br />• <strong>Cloud alerts:</strong> Violation notifications sent to your dashboard
              <br />• <strong>OSHA reports:</strong> Aggregated safety data (anonymized for benchmarking)
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Platform Usage Data</h3>
            <p>
              To improve FixMoose, we collect:
              <br />• Job data: customer names, job descriptions, invoices, quotes
              <br />• Usage analytics: features used, time spent, error logs
              <br />• Device information: phone model, OS version, app version
              <br />• Location data: GPS coordinates for job site tracking (optional, you can disable)
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🍪</div>
            <h3>Cookies & Tracking</h3>
            <p>
              Our website and apps use cookies for:
              <br />• Authentication (keeping you logged in)
              <br />• Analytics (Google Analytics to understand site traffic)
              <br />• Performance (caching preferences)
              <br />You can disable cookies in your browser, but some features may not work.
            </p>
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="product-section">
        <h2>How We Use Your Information</h2>

        <div className="problem-description">
          <p><strong>We use your data to:</strong></p>
          <ul style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', lineHeight: '2' }}>
            <li>✓ Provide and improve our services (FixMoose platform + AI widgets)</li>
            <li>✓ Process payments and manage subscriptions</li>
            <li>✓ Send transactional emails (invoices, receipts, account notifications)</li>
            <li>✓ Provide customer support and respond to inquiries</li>
            <li>✓ Train AI models to improve accuracy (voice recognition, code detection, safety alerts)</li>
            <li>✓ Generate aggregated, anonymized insights (e.g., "40% of electricians fail first inspection")</li>
            <li>✓ Comply with legal obligations (tax reporting, OSHA compliance)</li>
          </ul>
          <p style={{ marginTop: '2rem' }}>
            <strong>We do NOT:</strong>
            <br />❌ Sell your data to third parties
            <br />❌ Use your data for advertising outside our platform
            <br />❌ Share customer names or job details without consent
          </p>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="product-section dark">
        <h2>When We Share Your Information</h2>

        <div className="tech-stack">
          <div className="tech-layer">
            <h3>Third-Party Service Providers</h3>
            <p>We share data with trusted partners who help us operate:</p>
            <ul>
              <li><strong>Anthropic (Claude API):</strong> Processes complex AI queries for VoiceMoose and SnapMoose</li>
              <li><strong>Stripe:</strong> Handles payment processing (PCI-DSS compliant)</li>
              <li><strong>AWS:</strong> Cloud hosting for FixMoose platform and data storage</li>
              <li><strong>Google Analytics:</strong> Website traffic and usage analytics</li>
              <li><strong>QuickBooks, ServiceTitan, Jobber:</strong> Integrations for invoicing and job management (only if you enable)</li>
            </ul>
            <p><strong>All third parties are contractually required to protect your data and use it only for services we request.</strong></p>
          </div>

          <div className="tech-layer">
            <h3>Legal Requirements</h3>
            <p>We may disclose your information if required by law:</p>
            <ul>
              <li>Compliance with subpoenas, court orders, or legal processes</li>
              <li>Protecting IntelliMoose's rights, property, or safety</li>
              <li>Preventing fraud or security threats</li>
              <li>Responding to government requests (law enforcement, regulators)</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Business Transfers</h3>
            <p>
              If IntelliMoose is acquired, merged, or sold, your data may be transferred to the new owner.
              We will notify you via email before your data is transferred or becomes subject to a different privacy policy.
            </p>
          </div>

          <div className="tech-layer">
            <h3>Aggregated & Anonymized Data</h3>
            <p>
              We may share <strong>anonymized, aggregated data</strong> for research and industry insights:
              <br />• Example: "Contractors using our platform have 30% lower insurance claims"
              <br />• This data cannot identify you personally
              <br />• Used for marketing, partnerships, and product development
            </p>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="product-section">
        <h2>Data Retention & Deletion</h2>

        <div className="problem-description">
          <p>
            <strong>How long we keep your data:</strong>
            <br />• <strong>Active accounts:</strong> We retain data as long as your account is active
            <br />• <strong>Deleted accounts:</strong> Data deleted within 90 days of account closure (except what we must keep for legal/tax purposes)
            <br />• <strong>VoiceMoose audio:</strong> Deleted immediately after transcription (only text retained)
            <br />• <strong>EyeMoose video clips:</strong> 30-day retention, then auto-deleted
            <br />• <strong>SnapMoose photos:</strong> Stored until you delete them manually or close account
            <br />• <strong>Financial records:</strong> Kept for 7 years per tax law requirements
          </p>
          <p style={{ marginTop: '2rem' }}>
            <strong>To delete your account:</strong> Email <a href="mailto:privacy@intellimoose.com" style={{ color: 'var(--primary)' }}>privacy@intellimoose.com</a> with "Delete My Account" in the subject line.
            We will confirm deletion within 30 days.
          </p>
        </div>
      </section>

      {/* Your Rights */}
      <section className="product-section dark">
        <h2>Your Privacy Rights</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Access Your Data</h3>
            <p>
              You have the right to request a copy of all data we have about you.
              <br />Email <a href="mailto:privacy@intellimoose.com" style={{ color: 'var(--primary)' }}>privacy@intellimoose.com</a> to request your data export.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✏️</div>
            <h3>Correct Your Data</h3>
            <p>
              If any information is incorrect, you can update it in your FixMoose account settings.
              <br />Or contact us to make corrections.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗑️</div>
            <h3>Delete Your Data</h3>
            <p>
              You can delete your account and all associated data at any time.
              <br />Email <a href="mailto:privacy@intellimoose.com" style={{ color: 'var(--primary)' }}>privacy@intellimoose.com</a> to request deletion.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚫</div>
            <h3>Opt Out of Marketing</h3>
            <p>
              Unsubscribe from marketing emails by clicking the "Unsubscribe" link in any email.
              <br />You will still receive transactional emails (invoices, account notifications).
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Location Tracking</h3>
            <p>
              You can disable GPS tracking in your phone settings or FixMoose app.
              <br />Note: Some features (job site mapping) may not work without location.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>GDPR & CCPA Rights</h3>
            <p>
              If you are in the EU or California, you have additional rights under GDPR/CCPA:
              <br />• Right to portability (export data in machine-readable format)
              <br />• Right to restrict processing
              <br />• Right to object to automated decision-making
            </p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="product-section">
        <h2>Data Security</h2>

        <div className="problem-description">
          <p>
            <strong>We take security seriously:</strong>
            <br />• <strong>Encryption in transit:</strong> All data sent over HTTPS/TLS
            <br />• <strong>Encryption at rest:</strong> Database and file storage encrypted with AES-256
            <br />• <strong>Access controls:</strong> Only authorized IntelliMoose employees can access your data (logged and audited)
            <br />• <strong>SOC 2 compliance:</strong> Undergoing certification (expected Q2 2026)
            <br />• <strong>Penetration testing:</strong> Annual third-party security audits
            <br />• <strong>Bug bounty program:</strong> Rewards for security researchers who find vulnerabilities
          </p>
          <p style={{ marginTop: '2rem' }}>
            <strong>What you should do:</strong>
            <br />✓ Use a strong, unique password for your FixMoose account
            <br />✓ Enable two-factor authentication (2FA) in account settings
            <br />✓ Never share your login credentials
            <br />✓ Log out on shared devices
          </p>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="product-section dark">
        <h2>Children's Privacy</h2>

        <div className="problem-description">
          <p>
            IntelliMoose is not intended for children under 18. We do not knowingly collect data from minors.
            <br />If you believe a child has provided us with personal information, contact us at <a href="mailto:privacy@intellimoose.com" style={{ color: 'var(--primary)' }}>privacy@intellimoose.com</a> and we will delete it.
          </p>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="product-section">
        <h2>Changes to This Privacy Policy</h2>

        <div className="problem-description">
          <p>
            We may update this Privacy Policy from time to time. When we do:
            <br />• We will post the updated policy on this page with a new "Last Updated" date
            <br />• We will notify you via email if changes materially affect how we use your data
            <br />• Continued use of IntelliMoose after changes means you accept the new policy
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="product-section dark">
        <h2>Contact Us</h2>

        <div className="problem-description">
          <p>
            <strong>Questions about this Privacy Policy?</strong>
            <br />Email: <a href="mailto:privacy@intellimoose.com" style={{ color: 'var(--primary)', fontWeight: '700' }}>privacy@intellimoose.com</a>
            <br />
            <br /><strong>IntelliMoose, Inc.</strong>
            <br />Attn: Privacy Officer
            <br />Email: <a href="mailto:privacy@intellimoose.com" style={{ color: 'var(--primary)' }}>privacy@intellimoose.com</a>
          </p>
          <p style={{ marginTop: '2rem' }}>
            <strong>For GDPR/CCPA data requests:</strong>
            <br />Use subject line: "GDPR Data Request" or "CCPA Data Request"
            <br />We will respond within 30 days as required by law.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta">
        <h2>Your Privacy Matters</h2>
        <p>
          We built IntelliMoose for contractors, by contractors. Your trust is everything.
        </p>
        <div className="cta-buttons">
          <Link to="/" className="glow-button primary">
            ← Back to Home
          </Link>
          <Link to="/terms" className="glow-button secondary">
            View Terms of Service →
          </Link>
        </div>
      </section>

      {/* Legal Footer */}
      <LegalFooter />
    </div>
  );
};

export default PrivacyPage;
