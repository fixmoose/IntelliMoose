import { Link } from 'react-router-dom';
import './ProductPage.css';

const TermsPage = () => {
  return (
    <div className="product-page">
      <div className="animated-bg"></div>
      <div className="grid-overlay"></div>

      {/* Hero */}
      <section className="product-hero">
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>

        <div className="product-hero-icon">📜</div>
        <h1 className="product-hero-title">Terms of Service</h1>
        <p className="product-hero-tagline">
          Legal terms governing use of IntelliMoose services
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
          <strong>Last Updated:</strong> December 22, 2025
        </p>
      </section>

      {/* CRITICAL INVESTOR DISCLAIMER */}
      <section className="product-section" style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(245, 158, 11, 0.15))', border: '3px solid #ef4444' }}>
        <h2 style={{ color: '#ef4444' }}>⚠️ CRITICAL DISCLAIMER FOR INVESTORS ⚠️</h2>

        <div className="problem-description">
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ef4444' }}>
            THIS WEBSITE IS FOR INFORMATIONAL PURPOSES ONLY AND DOES NOT CONSTITUTE AN OFFER TO SELL OR SOLICITATION OF AN OFFER TO BUY SECURITIES.
          </p>

          <div style={{ marginTop: '2rem', padding: '2rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', textAlign: 'left' }}>
            <p><strong style={{ color: '#ef4444' }}>NO PERSONAL LIABILITY:</strong></p>
            <ul style={{ lineHeight: '2', marginTop: '1rem' }}>
              <li>Dejan Obradovic, individually, is <strong>NOT</strong> personally liable for any obligations, debts, or liabilities of IntelliMoose, Inc.</li>
              <li>Dejan Obradovic makes <strong>NO GUARANTEES, WARRANTIES, OR REPRESENTATIONS</strong> regarding financial projections, revenue estimates, or exit valuations presented on this site.</li>
              <li>All financial projections are <strong>FORWARD-LOOKING STATEMENTS</strong> subject to risks and uncertainties. Actual results may differ materially.</li>
              <li>Dejan Obradovic <strong>CANNOT BE HELD LIABLE</strong> for investment losses, business failures, or any damages arising from use of this information.</li>
            </ul>

            <p style={{ marginTop: '2rem' }}><strong style={{ color: '#ef4444' }}>INVESTOR ACKNOWLEDGMENT:</strong></p>
            <ul style={{ lineHeight: '2', marginTop: '1rem' }}>
              <li>By viewing this site, you acknowledge that investing in startups carries <strong>EXTREME RISK</strong> and most startups fail.</li>
              <li>You are responsible for conducting your own due diligence. <strong>DO NOT INVEST</strong> based solely on information presented here.</li>
              <li>You understand that Dejan Obradovic is presenting a business plan, not making investment guarantees.</li>
              <li>You <strong>WAIVE ANY CLAIMS</strong> against Dejan Obradovic personally for investment losses or damages.</li>
              <li>You understand that any investment is made <strong>AT YOUR OWN RISK</strong> and you may lose your entire investment.</li>
            </ul>

            <p style={{ marginTop: '2rem' }}><strong style={{ color: '#ef4444' }}>NO ATTORNEY-CLIENT RELATIONSHIP:</strong></p>
            <ul style={{ lineHeight: '2', marginTop: '1rem' }}>
              <li>Nothing on this site creates an attorney-client, advisor-client, or fiduciary relationship.</li>
              <li>This information is <strong>NOT INVESTMENT ADVICE.</strong> Consult your own legal, financial, and tax advisors before investing.</li>
              <li>IntelliMoose, Inc. and Dejan Obradovic are <strong>NOT REGISTERED INVESTMENT ADVISORS</strong> and are not providing investment advice.</li>
            </ul>

            <p style={{ marginTop: '2rem' }}><strong style={{ color: '#ef4444' }}>INDEMNIFICATION:</strong></p>
            <p style={{ lineHeight: '2', marginTop: '1rem' }}>
              You agree to indemnify and hold harmless Dejan Obradovic and IntelliMoose, Inc. from any claims, damages, or liabilities arising from:
              <br />• Your investment decisions
              <br />• Reliance on information presented on this site
              <br />• Any legal disputes related to your investment
            </p>

            <p style={{ marginTop: '2rem' }}><strong style={{ color: '#ef4444' }}>GOVERNING LAW & ARBITRATION:</strong></p>
            <p style={{ lineHeight: '2', marginTop: '1rem' }}>
              Any disputes shall be resolved through binding arbitration under the rules of the American Arbitration Association.
              <br />Venue shall be in the jurisdiction of IntelliMoose, Inc.'s principal place of business.
              <br />You waive any right to a jury trial or to participate in class action lawsuits.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-section">
        <h2>Agreement to Terms</h2>
        <div className="problem-description">
          <p>
            <strong>By accessing or using IntelliMoose services (FixMoose platform, VoiceMoose, SnapMoose, EyeMoose),
            you agree to be bound by these Terms of Service.</strong>
          </p>
          <p>
            If you do not agree to these terms, <strong>DO NOT USE</strong> our services.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you and <strong>IntelliMoose, Inc.</strong> ("IntelliMoose," "we," "our," or "us").
          </p>
        </div>
      </section>

      {/* Service Description */}
      <section className="product-section dark">
        <h2>Description of Services</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>FixMoose Platform</h3>
            <p>
              Job management, invoicing, customer CRM, compliance tracking, quotes, contracts, change orders, purchase orders, expense tracking, and financial reporting for skilled tradespeople.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎙️</div>
            <h3>VoiceMoose Widget</h3>
            <p>
              AI-powered voice-to-documentation tool that generates work orders, invoices, and compliance reports from spoken descriptions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📸</div>
            <h3>SnapMoose Widget</h3>
            <p>
              AI-powered code compliance tool that analyzes photos of electrical and plumbing installations to detect code violations.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👁️</div>
            <h3>EyeMoose Widget</h3>
            <p>
              AI-powered safety monitoring system using cameras to detect PPE violations, hazards, and near-miss incidents on job sites.
            </p>
          </div>
        </div>

        <div className="problem-description" style={{ marginTop: '2rem' }}>
          <p>
            <strong>Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind.</strong>
            <br />We reserve the right to modify, suspend, or discontinue any service at any time without notice.
          </p>
        </div>
      </section>

      {/* User Responsibilities */}
      <section className="product-section">
        <h2>Your Responsibilities</h2>

        <div className="tech-stack">
          <div className="tech-layer">
            <h3>Account Registration</h3>
            <ul>
              <li>You must provide accurate, complete, and current information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials</li>
              <li>You are responsible for all activity that occurs under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>You must be at least 18 years old to create an account</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Prohibited Uses</h3>
            <p><strong>You may NOT:</strong></p>
            <ul>
              <li>Use IntelliMoose services for any illegal purpose or to violate any laws</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Attempt to hack, reverse engineer, or compromise our systems</li>
              <li>Scrape, copy, or redistribute our content without permission</li>
              <li>Impersonate another person or entity</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Use automated bots or scripts to access our services</li>
              <li>Resell or redistribute our services without authorization</li>
              <li>Remove or modify any proprietary notices or labels</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Content You Provide</h3>
            <ul>
              <li>You retain ownership of all content you upload (voice recordings, photos, job data)</li>
              <li>You grant IntelliMoose a license to use your content to provide services and improve our AI models</li>
              <li>You are responsible for ensuring you have rights to all content you upload</li>
              <li>You must not upload content that violates intellectual property rights, privacy rights, or laws</li>
              <li>IntelliMoose may remove any content that violates these Terms</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Compliance & Code Violations</h3>
            <p style={{ color: '#f59e0b', fontWeight: '700' }}>
              <strong>⚠️ CRITICAL: IntelliMoose is a tool, not a replacement for professional judgment</strong>
            </p>
            <ul>
              <li>SnapMoose code compliance detection is for reference only and may contain errors</li>
              <li>You are responsible for ensuring all work complies with applicable building codes</li>
              <li>IntelliMoose is NOT liable for failed inspections, code violations, or fines resulting from use of our tools</li>
              <li>EyeMoose safety monitoring does not guarantee prevention of accidents or injuries</li>
              <li>You must still follow all OSHA regulations and industry safety standards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="product-section dark">
        <h2>Payment & Subscription Terms</h2>

        <div className="tech-stack">
          <div className="tech-layer">
            <h3>Pricing</h3>
            <ul>
              <li><strong>FixMoose Basic:</strong> 6 months FREE, then $19/month (or FREE with any widget subscription)</li>
              <li><strong>FixMoose Pro:</strong> $49/month</li>
              <li><strong>FixMoose Teams:</strong> $99/month + $20/user</li>
              <li><strong>FixMoose Enterprise:</strong> $299/month (custom pricing for 50+ users)</li>
              <li><strong>VoiceMoose:</strong> $30/month per worker</li>
              <li><strong>SnapMoose:</strong> $50/month per worker</li>
              <li><strong>EyeMoose:</strong> $200 hardware + $50/month subscription per camera</li>
            </ul>
            <p style={{ marginTop: '1rem', fontWeight: '700' }}>
              Prices subject to change with 30 days' notice. Existing subscribers will be grandfathered at current rates for 12 months.
            </p>
          </div>

          <div className="tech-layer">
            <h3>Billing</h3>
            <ul>
              <li>Subscriptions are billed monthly or annually (your choice)</li>
              <li>Payment is due in advance at the start of each billing cycle</li>
              <li>We accept credit cards, debit cards, and ACH transfers (processed via Stripe)</li>
              <li>If payment fails, your account may be suspended after 7 days</li>
              <li>You authorize us to charge your payment method automatically each billing cycle</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Cancellation & Refunds</h3>
            <ul>
              <li>You may cancel your subscription at any time (no early termination fees)</li>
              <li>Cancellations take effect at the end of the current billing cycle</li>
              <li>No refunds for partial months or unused services</li>
              <li>Hardware purchases (EyeMoose cameras) are non-refundable after 30 days</li>
              <li>If you cancel, you retain access until the end of your paid period</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Free Trials</h3>
            <ul>
              <li>FixMoose Basic includes 6 months FREE (no credit card required)</li>
              <li>Widget subscriptions include 30-day free trials (credit card required, not charged until trial ends)</li>
              <li>Cancel anytime during trial to avoid charges</li>
              <li>Only one free trial per user/company</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="product-section">
        <h2>Intellectual Property Rights</h2>

        <div className="problem-description">
          <p>
            <strong>IntelliMoose owns all rights to:</strong>
            <br />• FixMoose platform and all associated software
            <br />• VoiceMoose, SnapMoose, and EyeMoose AI models and algorithms
            <br />• IntelliMoose branding, logos, and trademarks
            <br />• Documentation, training materials, and marketing content
            <br />• Patents pending on AI-powered code detection and voice-to-invoice technology
          </p>
          <p style={{ marginTop: '2rem' }}>
            <strong>You may NOT:</strong>
            <br />• Copy, modify, or create derivative works from our software
            <br />• Reverse engineer or decompile our applications
            <br />• Use our branding or trademarks without written permission
            <br />• Remove copyright notices or proprietary labels
          </p>
          <p style={{ marginTop: '2rem' }}>
            <strong>Feedback & Suggestions:</strong>
            <br />If you provide feedback, ideas, or suggestions, you grant IntelliMoose a perpetual, royalty-free license to use them without compensation or attribution.
          </p>
        </div>
      </section>

      {/* Disclaimers & Limitations */}
      <section className="product-section dark">
        <h2>Disclaimers & Limitation of Liability</h2>

        <div className="tech-stack">
          <div className="tech-layer" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '2px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444' }}>⚠️ NO WARRANTIES</h3>
            <p>
              <strong>INTELLIMOOSE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</strong>
            </p>
            <p style={{ marginTop: '1rem' }}>
              We disclaim all warranties, including but not limited to:
              <br />• Merchantability, fitness for a particular purpose, and non-infringement
              <br />• Accuracy, reliability, or completeness of information
              <br />• Uninterrupted or error-free service
              <br />• Security of data transmission or storage
              <br />• Compliance with building codes, OSHA regulations, or other laws
            </p>
            <p style={{ marginTop: '1rem', fontWeight: '700' }}>
              USE INTELLIMOOSE AT YOUR OWN RISK. WE DO NOT GUARANTEE THAT OUR SERVICES WILL MEET YOUR NEEDS OR EXPECTATIONS.
            </p>
          </div>

          <div className="tech-layer" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '2px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444' }}>⚠️ LIMITATION OF LIABILITY</h3>
            <p>
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, INTELLIMOOSE AND DEJAN OBRADOVIC SHALL NOT BE LIABLE FOR:</strong>
            </p>
            <ul style={{ marginTop: '1rem' }}>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Failed inspections, code violations, fines, or legal penalties</li>
              <li>Safety incidents, injuries, or deaths on job sites (EyeMoose is a monitoring tool, not a safety guarantee)</li>
              <li>Errors in AI-generated documents, invoices, or compliance reports</li>
              <li>Downtime, service interruptions, or data loss</li>
            </ul>
            <p style={{ marginTop: '1rem', fontWeight: '700' }}>
              EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p style={{ marginTop: '1rem', fontWeight: '700', fontSize: '1.1rem', color: '#ef4444' }}>
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS BEFORE THE CLAIM AROSE (OR $100, WHICHEVER IS GREATER).
            </p>
          </div>

          <div className="tech-layer" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '2px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444' }}>⚠️ NO LIABILITY FOR DEJAN OBRADOVIC PERSONALLY</h3>
            <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>
              DEJAN OBRADOVIC, AS AN INDIVIDUAL, IS NOT PERSONALLY LIABLE FOR ANY CLAIMS, DAMAGES, OR OBLIGATIONS ARISING FROM USE OF INTELLIMOOSE SERVICES OR INVESTMENT IN INTELLIMOOSE, INC.
            </p>
            <p style={{ marginTop: '1rem' }}>
              All claims must be brought against IntelliMoose, Inc. as a corporate entity, not against Dejan Obradovic personally.
              <br />You waive any right to pursue personal liability claims against Dejan Obradovic.
            </p>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="product-section">
        <h2>Termination</h2>

        <div className="problem-description">
          <p>
            <strong>We may terminate or suspend your account if:</strong>
            <br />• You violate these Terms of Service
            <br />• Payment fails after 14 days
            <br />• You engage in fraudulent or abusive behavior
            <br />• Required by law or regulatory authority
          </p>
          <p style={{ marginTop: '2rem' }}>
            <strong>Upon termination:</strong>
            <br />• Your access to IntelliMoose services will be immediately revoked
            <br />• You will have 30 days to export your data before it is deleted
            <br />• Outstanding balances become immediately due and payable
            <br />• Provisions regarding intellectual property, disclaimers, and limitations of liability survive termination
          </p>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="product-section dark">
        <h2>Dispute Resolution & Arbitration</h2>

        <div className="tech-stack">
          <div className="tech-layer">
            <h3>Binding Arbitration</h3>
            <p>
              <strong>Any dispute, claim, or controversy arising from these Terms or use of IntelliMoose services shall be resolved through binding arbitration.</strong>
            </p>
            <ul style={{ marginTop: '1rem' }}>
              <li>Arbitration shall be conducted under the rules of the American Arbitration Association (AAA)</li>
              <li>Venue shall be in the jurisdiction of IntelliMoose, Inc.'s principal place of business</li>
              <li>Arbitration shall be conducted by a single neutral arbitrator</li>
              <li>The arbitrator's decision is final and binding</li>
              <li>Each party pays their own costs (unless arbitrator awards fees to prevailing party)</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Class Action Waiver</h3>
            <p style={{ fontWeight: '700', color: '#f59e0b' }}>
              YOU WAIVE ANY RIGHT TO PARTICIPATE IN CLASS ACTION LAWSUITS OR CLASS-WIDE ARBITRATION.
            </p>
            <p style={{ marginTop: '1rem' }}>
              All disputes must be brought on an individual basis. You may not join your claim with claims of other users.
            </p>
          </div>

          <div className="tech-layer">
            <h3>Governing Law</h3>
            <p>
              These Terms are governed by the laws of the United States and the state where IntelliMoose, Inc. is incorporated, without regard to conflict of law principles.
            </p>
          </div>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="product-section">
        <h2>Changes to These Terms</h2>

        <div className="problem-description">
          <p>
            We may update these Terms of Service at any time. When we do:
            <br />• We will post the updated Terms on this page with a new "Last Updated" date
            <br />• We will notify you via email if changes materially affect your rights
            <br />• Continued use of IntelliMoose after changes means you accept the new Terms
          </p>
          <p style={{ marginTop: '2rem' }}>
            If you do not agree to the updated Terms, you must stop using IntelliMoose and cancel your account.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="product-section dark">
        <h2>Contact Us</h2>

        <div className="problem-description">
          <p>
            <strong>Questions about these Terms?</strong>
            <br />Email: <a href="mailto:legal@intellimoose.com" style={{ color: 'var(--primary)', fontWeight: '700' }}>legal@intellimoose.com</a>
            <br />
            <br /><strong>IntelliMoose, Inc.</strong>
            <br />Attn: Legal Department
            <br />Email: <a href="mailto:legal@intellimoose.com" style={{ color: 'var(--primary)' }}>legal@intellimoose.com</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta">
        <h2>By Using IntelliMoose, You Agree to These Terms</h2>
        <p>
          If you do not agree, please discontinue use immediately.
        </p>
        <div className="cta-buttons">
          <Link to="/" className="glow-button primary">
            ← Back to Home
          </Link>
          <Link to="/privacy" className="glow-button secondary">
            View Privacy Policy →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
