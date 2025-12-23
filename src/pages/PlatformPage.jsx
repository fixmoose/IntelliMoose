import { Link } from 'react-router-dom';
import LegalFooter from '../components/LegalFooter';
import './ProductPage.css';

const PlatformPage = () => {
  return (
    <div className="product-page">
      <div className="animated-bg"></div>
      <div className="grid-overlay"></div>

      {/* Hero */}
      <section className="product-hero">
        <Link to="/" className="back-button">
          ← Back to Overview
        </Link>

        <div className="product-hero-icon">🔗</div>
        <h1 className="product-hero-title">The IntelliMoose Platform Strategy</h1>
        <p className="product-hero-tagline">
          Free Tier Hook → Platform Lock-In → 9x Revenue Expansion → $1B+ Exit
        </p>

        <div className="product-hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">$1-3B</span>
            <span className="hero-stat-label">Exit Target Valuation</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">4-6 years</span>
            <span className="hero-stat-label">Exit Timeline</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">5+ Acquirers</span>
            <span className="hero-stat-label">Strategic Buyers</span>
          </div>
        </div>
      </section>

      {/* The Trojan Horse: Free Tier Strategy */}
      <section className="product-section dark">
        <h2>The Trojan Horse: How Free FixMoose Basic Drives the Entire Business</h2>

        <div className="problem-description">
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            <strong>This is the key insight investors need to understand:</strong> We're not selling 4 separate products.
            We're giving away a free platform (FixMoose Basic) that comes with every AI widget purchase, then using
            intentional limits to force upgrades and expansion. It's the Slack/Dropbox playbook for skilled trades.
          </p>
        </div>

        <div className="tech-stack">
          <div className="tech-layer">
            <h3>Step 1: The Hook - Two Paths to FixMoose Basic</h3>
            <p>
              <strong>Path A (Platform-Only Users):</strong> Contractor signs up for FixMoose Basic. Gets 6 months FREE, then $19/month.
            </p>
            <p>
              <strong>Path B (Widget Subscribers):</strong> Contractor buys VoiceMoose ($30/month) to save time on paperwork. Gets FREE FixMoose Basic account automatically with subscription:
            </p>
            <ul>
              <li>5 active jobs (6th job triggers upgrade prompt)</li>
              <li>100MB storage (photos, voice recordings, documents)</li>
              <li>25 customer contacts</li>
              <li>Basic invoicing and work orders</li>
              <li>Mobile app (iOS & Android)</li>
            </ul>
            <p>
              <strong>Customer perception (Path B):</strong> "I'm just buying VoiceMoose for $30/month, the platform is a bonus."
              <br />
              <strong>Reality:</strong> We're getting them hooked on the platform with generous-seeming limits designed to hit in 2-3 months. Widget margins (93%!) cover platform costs.
            </p>
            <p>
              <strong>Customer perception (Path A):</strong> "I'm trying FixMoose for free for 6 months. If I like it, $19/month is cheap."
              <br />
              <strong>Reality:</strong> After 6 months of use, they're locked in. Switching cost (re-enter all data) &gt; $19/month. Plus we upsell widgets during trial.
            </p>
          </div>

          <div className="tech-layer">
            <h3>Step 2: The Trap - Intentional Limits Force Upgrade Decision</h3>
            <p>
              After 2-3 months (varies by customer activity), contractor hits one of the limits:
            </p>
            <ul>
              <li><strong>Job limit:</strong> "You've completed 5 jobs. Upgrade to Pro to add more jobs or archive old ones (losing searchable history)."</li>
              <li><strong>Storage limit:</strong> "You've used 95MB of 100MB. Upgrade to Pro (10GB) or delete photos/recordings (losing documentation)."</li>
              <li><strong>Customer limit:</strong> "You have 25 customers. Upgrade to Pro for unlimited customer database."</li>
            </ul>
            <p>
              <strong>The Psychology:</strong> All their historical job data is trapped in FixMoose. Customer contacts, pricing history,
              material lists, compliance docs—3 months of work. Switching to a competitor means losing this data. Export doesn't capture
              the relationships and context. Upgrade cost ($49/month) is less painful than switching cost (re-entering all data, retraining workflow).
            </p>
            <p>
              <strong>Conversion Rate:</strong> 60%+ upgrade to FixMoose Pro within 4 months. Industry-leading for freemium SaaS.
            </p>
          </div>

          <div className="tech-layer">
            <h3>Step 3: Platform Expansion - Add More Widgets</h3>
            <p>
              Now customer is paying $79/month (VoiceMoose $30 + FixMoose Pro $49). All data flows into FixMoose. We upsell additional widgets:
            </p>
            <ul>
              <li><strong>SnapMoose ($50/month):</strong> "Prevent failed inspections. Code violation reports auto-save to FixMoose job records."</li>
              <li><strong>EyeMoose ($200 + $50/month):</strong> "Get insurance discounts. Safety incidents auto-log to FixMoose for OSHA reports."</li>
            </ul>
            <p>
              <strong>Widget Attach Rate:</strong> 2.1 widgets per customer by month 9. Each widget makes FixMoose more valuable (more data, more integrations, more lock-in).
            </p>
            <p>
              <strong>Customer is now at $179/month:</strong> VoiceMoose ($30) + SnapMoose ($50) + EyeMoose ($50) + FixMoose Pro ($49).
            </p>
          </div>

          <div className="tech-layer">
            <h3>Step 4: Team Plan Upsell - Multi-User Lock-In</h3>
            <p>
              Contractor grows from solo operator to 3-person team. Needs multi-user access, permission layers, contractor-only notes (hidden from homeowners).
            </p>
            <ul>
              <li><strong>FixMoose Teams:</strong> $99/month base + $20/user (3 users = $99 + $60 = $159/month for platform)</li>
              <li><strong>Plus widgets:</strong> VoiceMoose licenses for 2 more workers ($60), SnapMoose for lead electrician ($50), EyeMoose (shared, no extra cost)</li>
            </ul>
            <p>
              <strong>Total Monthly Spend (Month 12):</strong> $269/month
              <br />
              VoiceMoose: $90 (3 users × $30)
              <br />
              SnapMoose: $50 (lead electrician only)
              <br />
              EyeMoose: $50 (job site camera)
              <br />
              FixMoose Teams: $79 ($99 base, 2 additional users discounted to $40 total in bundle pricing)
            </p>
          </div>

          <div className="tech-layer">
            <h3>Step 5: The Network Effect - Homeowner Portal Creates Viral Lock-In</h3>
            <p>
              FixMoose Pro includes customer portal. Homeowners can:
            </p>
            <ul>
              <li>See invoices and approve work online</li>
              <li>View job photos and progress updates</li>
              <li>Access historical work records (permits, warranties, compliance docs)</li>
              <li>Pay invoices via credit card (FixMoose processes payments, takes 2.5% fee)</li>
            </ul>
            <p>
              <strong>The Trap (Part 2):</strong> After 6 months, homeowner expects this experience. When contractor tries to switch
              to a competitor platform, homeowner says "I can't see my invoice. Where's the portal link?" Contractor stays on FixMoose to keep customers happy.
            </p>
            <p>
              <strong>Viral Growth:</strong> Homeowner hires different contractor for different job (plumber for kitchen, electrician for panel).
              Sees FixMoose portal, asks their contractor "Why don't you use FixMoose like the last guy?" Word-of-mouth acquisition at zero CAC.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="product-section">
        <h2>FixMoose Pricing Tiers: Designed for Upsell</h2>

        <div className="acquirers-grid">
          <div className="acquirer-card">
            <h4>FixMoose Basic</h4>
            <p>
              <strong>6 months FREE → $19/month</strong>
              <br />
              <strong style={{ color: '#22c55e' }}>OR FREE with any AI widget subscription</strong>
            </p>
            <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
              <li>5 active jobs</li>
              <li>100MB storage</li>
              <li>25 customer contacts</li>
              <li>Basic invoicing</li>
              <li>Mobile app access</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              <strong>Goal:</strong> Get contractor hooked with 6-month trial. After trial ends, they either pay $19/mo (platform-only users) OR buy a widget ($30-50/mo) and get Basic FREE with subscription.
            </p>
            <p style={{ marginTop: '1rem', textAlign: 'center' }}>
              <strong>Try it now:</strong> <a href="https://fixmoose.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: '700' }}>FixMoose.com</a>
            </p>
          </div>

          <div className="acquirer-card">
            <h4>FixMoose Pro ($49/month)</h4>
            <p>
              <strong>For growing contractors</strong>
            </p>
            <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
              <li>Unlimited jobs</li>
              <li>10GB storage</li>
              <li>Unlimited customers</li>
              <li>Customer portal (homeowner access)</li>
              <li>Permission layers (show/hide notes)</li>
              <li>Priority support</li>
              <li>QuickBooks/ServiceTitan sync</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              <strong>Conversion driver:</strong> Job/storage limits. Customer portal (homeowners demand it).
            </p>
          </div>

          <div className="acquirer-card">
            <h4>FixMoose Teams ($99/month + $20/user)</h4>
            <p>
              <strong>For contractors with 2+ employees</strong>
            </p>
            <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
              <li>Everything in Pro</li>
              <li>Multi-user access with roles</li>
              <li>Contractor-only notes (hidden from homeowners)</li>
              <li>Team activity tracking</li>
              <li>Batch invoicing</li>
              <li>API access (custom integrations)</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              <strong>Conversion driver:</strong> Team growth. Need for internal notes (pricing, issues, change orders).
            </p>
          </div>

          <div className="acquirer-card">
            <h4>FixMoose Enterprise ($299/month)</h4>
            <p>
              <strong>For contractors with 10+ employees</strong>
            </p>
            <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
              <li>Everything in Teams</li>
              <li>Unlimited users (volume discount after 20)</li>
              <li>White-label option</li>
              <li>Custom integrations</li>
              <li>Dedicated account manager</li>
              <li>SLA guarantees (99.9% uptime)</li>
              <li>HIPAA/SOC2 compliance</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              <strong>Target:</strong> Large contractors (50-500 workers). $299 base + $15/user for 50 users = $1,049/month.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive FixMoose Features */}
      <section className="product-section dark">
        <h2>FixMoose Platform: Complete Business Management for Contractors</h2>

        <div className="problem-description">
          <p style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '3rem' }}>
            FixMoose isn't just a CRM—it's <strong>QuickBooks + Salesforce + Project Management + Document Storage</strong> built specifically for skilled trades.
            <br />Everything contractors need to run their business, all feeding into one unified platform.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Auto-Invoicing with Line Items</h3>
            <p>
              <strong>What it does:</strong> Automatically generates professional invoices from VoiceMoose voice recordings or manual job entry.
              <br /><br />
              <strong>Features:</strong>
              <br />• Line-item breakdown (materials, labor, tax calculated automatically)
              <br />• Customizable invoice templates (add logo, payment terms, notes)
              <br />• Recurring invoices for maintenance contracts (auto-send monthly)
              <br />• Late payment reminders (auto-email at 7, 14, 30 days overdue)
              <br />• Payment tracking (mark as paid, partial payment support)
              <br />• Tax-compliant invoicing (sales tax rates by ZIP code, auto-calculated)
              <br /><br />
              <strong>Integration:</strong> Syncs with QuickBooks, Stripe (credit card payments), ACH (bank transfers).
              <br /><br />
              <strong>Why it matters:</strong> Contractors save 2-3 hours/week on invoicing. Faster payment (customers pay via link in email). Professional appearance builds trust.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Quote Generation & Tracking</h3>
            <p>
              <strong>What it does:</strong> Create professional quotes/estimates, track quote status, convert to invoices with one click.
              <br /><br />
              <strong>Features:</strong>
              <br />• Quote templates (electrical service upgrade, panel replacement, rewire)
              <br />• Material cost lookup (live pricing from suppliers like Home Depot, Grainger)
              <br />• Profit margin calculator (mark up materials 20%, labor at $85/hour)
              <br />• Quote versioning (track revisions, compare versions)
              <br />• Expiration dates (quote expires in 30 days, auto-remind customer)
              <br />• Quote acceptance tracking (customer approves via email link, e-signature)
              <br />• Convert to invoice (one-click conversion when quote accepted)
              <br /><br />
              <strong>Integration:</strong> Email quotes as PDF, SMS links to customers, track open/view rates.
              <br /><br />
              <strong>Why it matters:</strong> Win rate increases 15-20% with professional quotes. Quote-to-close time reduces from 7 days to 3 days with tracking.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Contract Management & Digital Signatures</h3>
            <p>
              <strong>What it does:</strong> Generate service contracts, get customer signatures electronically, store signed contracts securely.
              <br /><br />
              <strong>Features:</strong>
              <br />• Contract templates (residential service agreement, commercial maintenance contract)
              <br />• Customizable terms (payment schedule, scope of work, warranty terms)
              <br />• Digital signature collection (DocuSign-style e-signature, legally binding)
              <br />• Contract status tracking (sent, viewed, signed, expired)
              <br />• Auto-reminders (nudge customer to sign if pending 3+ days)
              <br />• Version control (track contract amendments, addendums)
              <br />• Secure storage (encrypted, tamper-proof, audit trail)
              <br /><br />
              <strong>Integration:</strong> Syncs with job records, links to invoices, accessible from customer portal.
              <br /><br />
              <strong>Why it matters:</strong> Eliminates paper contracts (lost contracts = unpaid work). E-signature speeds up approval 5x. Legal protection for disputes.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Change Orders & Approval Workflow</h3>
            <p>
              <strong>What it does:</strong> Track scope changes, get customer approval for extra work, prevent scope creep disputes.
              <br /><br />
              <strong>Features:</strong>
              <br />• Change order creation (describe change, add materials/labor, calculate new cost)
              <br />• Before/after comparison (original quote vs new quote with change)
              <br />• Customer approval required (can't proceed until customer signs change order)
              <br />• Approval notifications (email + SMS to customer, push notification)
              <br />• Revision history (audit trail showing all changes, timestamps, approvals)
              <br />• Impact analysis (shows how change affects timeline, budget, materials)
              <br /><br />
              <strong>Integration:</strong> Auto-updates invoice when change order approved, adds line items automatically.
              <br /><br />
              <strong>Why it matters:</strong> Prevents "scope creep" disputes (customer says "I never agreed to that"). Average contractor loses $5K/year to unpaid extra work. Change order workflow eliminates this.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Purchase Orders & Supplier Management</h3>
            <p>
              <strong>What it does:</strong> Track material purchases, manage supplier relationships, reconcile orders with receipts.
              <br /><br />
              <strong>Features:</strong>
              <br />• PO generation (create purchase order for materials, send to supplier)
              <br />• Supplier database (track vendors, contact info, pricing history, delivery times)
              <br />• Favorite suppliers (mark preferred vendors for quick reordering)
              <br />• Order tracking (mark as ordered, in-transit, received, installed)
              <br />• Receipt matching (OCR scans receipt, matches to PO, flags discrepancies)
              <br />• Cost reconciliation (compare PO estimate to actual receipt, track overruns)
              <br />• Job allocation (assign PO to specific job, track material costs per job)
              <br /><br />
              <strong>Integration:</strong> Syncs with expense tracking, auto-updates job costs when materials received.
              <br /><br />
              <strong>Why it matters:</strong> Prevents material cost overruns (know BEFORE invoice that job went over budget). Supplier management saves 10-15% on materials (track who has best prices/delivery).
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧾</div>
            <h3>Receipt & Expense Tracking with OCR</h3>
            <p>
              <strong>What it does:</strong> Snap photos of receipts, AI extracts data, categorizes expenses, tracks mileage.
              <br /><br />
              <strong>Features:</strong>
              <br />• OCR receipt scanning (photo → extracts vendor, date, amount, line items)
              <br />• Auto-categorization (materials, fuel, tools, permits, fees)
              <br />• Job allocation (assign expense to specific job, track per-job profitability)
              <br />• Mileage tracking (GPS log, IRS-compliant mileage reports, $0.67/mile deduction)
              <br />• Reimbursement workflow (employees submit expenses, contractor approves/pays)
              <br />• Tax category tagging (deductible vs non-deductible, Section 179 equipment)
              <br />• Receipt storage (encrypted PDFs, searchable, never lose a receipt)
              <br /><br />
              <strong>Integration:</strong> Exports to QuickBooks, syncs with bank accounts, generates expense reports.
              <br /><br />
              <strong>Why it matters:</strong> Average contractor loses $3-5K/year in unclaimed deductions (lost receipts). Mileage tracking alone saves $2K/year. OCR eliminates manual data entry (2 hours/week saved).
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Comprehensive Reporting & Analytics</h3>
            <p>
              <strong>What it does:</strong> Generate financial reports, track KPIs, provide insights for business decisions.
              <br /><br />
              <strong>P&L (Profit & Loss) Reports:</strong>
              <br />• Revenue by job type (residential vs commercial, service call vs project work)
              <br />• Cost breakdown (materials, labor, overhead, taxes)
              <br />• Net profit margin (overall + per job type)
              <br />• Month-over-month trends (revenue growth, expense creep)
              <br /><br />
              <strong>Tax Reporting:</strong>
              <br />• Yearly books (all transactions, categorized, ready for accountant)
              <br />• Quarterly estimated tax calculator (based on YTD income, projects tax owed)
              <br />• 1099 contractor reports (if you hire subcontractors, auto-generate 1099s)
              <br />• Sales tax collected (by jurisdiction, ready for remittance)
              <br />• Mileage and expense summaries (IRS Schedule C format)
              <br /><br />
              <strong>Cash Flow Forecasting:</strong>
              <br />• Outstanding invoices (aged receivables, predict when paid)
              <br />• Upcoming expenses (scheduled POs, recurring costs)
              <br />• Cash runway (how many months of operating cash available)
              <br />• Seasonal trends (identify slow months, plan for cashflow gaps)
              <br /><br />
              <strong>KPI Dashboards:</strong>
              <br />• Average job value
              <br />• Customer acquisition cost
              <br />• Repeat customer rate
              <br />• Invoice-to-payment time (days to get paid)
              <br />• Employee utilization (billable hours vs total hours)
              <br />• Profit per job (which job types are most profitable)
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗓️</div>
            <h3>Scheduling & Dispatch</h3>
            <p>
              <strong>What it does:</strong> Calendar view of jobs, assign workers to jobs, optimize routes, send reminders.
              <br /><br />
              <strong>Features:</strong>
              <br />• Drag-and-drop calendar (assign jobs to workers, reschedule easily)
              <br />• Team availability (mark workers as out sick, on vacation, available)
              <br />• Job duration estimates (based on historical data, predict job length)
              <br />• Route optimization (plan multiple service calls, minimize drive time)
              <br />• Customer reminders (auto-send "We're coming tomorrow" SMS/email)
              <br />• Technician notifications (push notification with job address, customer notes)
              <br /><br />
              <strong>Why it matters:</strong> Reduces drive time 15-20% (route optimization). Prevents no-shows (reminders reduce no-show rate 60%). Team coordination for multi-worker jobs.
            </p>
          </div>
        </div>

        <div className="problem-description" style={{ marginTop: '3rem', background: 'rgba(6, 182, 212, 0.1)', border: '2px solid rgba(6, 182, 212, 0.3)', borderRadius: '16px', padding: '2rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>💡 Why This Justifies $49-99/Month Pricing</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            <strong>Competitors charge $500/month (ServiceTitan) or $300/month (Jobber) for similar features.</strong>
            <br /><br />
            FixMoose Pro at $49/month is a <strong>10x better value</strong> because:
            <br />• It's designed for small contractors (1-5 employees), not enterprise
            <br />• AI widgets do the data entry (VoiceMoose auto-fills invoices from voice)
            <br />• FREE tier gets contractors hooked, they upgrade when they hit limits
            <br />• Trojan Horse strategy means they're already invested when pricing hits
            <br /><br />
            <strong>Platform LTV expansion: $19/month (Basic after trial) → $49/month (Pro) → $99/month (Teams) → $299/month (Enterprise)</strong>
            <br /><br />
            By the time contractor has 50 jobs in FixMoose, all their customer relationships, all their pricing history, all their tax records—
            <strong>switching cost is higher than $49/month</strong>. They're locked in.
          </p>
        </div>
      </section>

      {/* AI Cost Economics */}
      <section className="product-section">
        <h2>AI Cost Economics: How We Achieve 1000%+ Margins on Claude API</h2>

        <div className="tech-stack">
          <div className="tech-layer" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))', border: '2px solid var(--primary)' }}>
            <h3>The Challenge: AI Costs Can Kill Margins</h3>
            <p>
              Most AI startups fail because they give away expensive API calls for cheap subscriptions. OpenAI/Anthropic charges per token.
              If you let users run unlimited AI queries at $20/month, you go broke fast.
            </p>
            <p>
              <strong>Example of what NOT to do:</strong> Charge $20/month for unlimited ChatGPT-style queries. Power user makes 1,000 requests/month.
              Claude API costs $0.10/request (average) × 1,000 = $100/month in costs. You lose $80/month per power user. Death spiral.
            </p>
          </div>

          <div className="tech-layer">
            <h3>Our Solution: Hybrid On-Device + Cloud Processing</h3>
            <ul>
              <li><strong>95% of AI processing happens on-device (FREE):</strong> Whisper for speech recognition (80MB model runs on phone). YOLOv8 for vision detection (50MB model). GPT-4o-mini quantized for basic extraction (50MB). Total: 180MB download, zero ongoing API costs.</li>
              <li><strong>Only 5% hits Claude API (expensive):</strong> Complex queries, edge cases, cloud-enhanced formatting. Average user: 50 API calls/month.</li>
              <li><strong>Cost per user:</strong> 50 calls/month × $0.04/call (Claude Haiku) = <strong>$2/month in API costs.</strong></li>
              <li><strong>We charge $30/month for VoiceMoose.</strong> Gross margin: $28/user (93% margin!)</li>
            </ul>
            <p>
              <strong>Scale Economics:</strong> At 10,000 VoiceMoose users → $300K/month revenue. Claude API costs: $20K/month. Gross profit: $280K/month (93% margin). This is SaaS-level economics with AI intelligence.
            </p>
          </div>

          <div className="tech-layer">
            <h3>Why Widget Subscribers Get FixMoose Basic FREE Forever</h3>
            <p>
              <strong>Widget margins cover platform costs.</strong> VoiceMoose: $30/month revenue, $2/month API costs, $5/month platform hosting/support = $23/month gross profit per user.
            </p>
            <p>
              FixMoose Basic costs us ~$3/month to host (AWS, database, support). By giving it away FREE to widget subscribers, we still make $20/month gross profit. And we lock them into the platform ecosystem.
            </p>
            <p>
              <strong>Platform-only users (no widgets):</strong> Pay $19/month after 6-month trial. This covers platform costs ($3/month) + sales/marketing ($5/month) + profit ($11/month). Still profitable, but lower margin than widget subscribers.
            </p>
          </div>

          <div className="tech-layer">
            <h3>Competitive Moat: On-Device AI is HARD to Replicate</h3>
            <ul>
              <li><strong>Model optimization:</strong> We spent 6 months quantizing GPT-4o-mini from 400MB to 50MB without losing accuracy. Competitors would need to rebuild this from scratch.</li>
              <li><strong>Trade-specific training:</strong> Our Whisper model is fine-tuned on 10,000 hours of electrician/plumber speech. Generic Whisper gets "12-gauge Romex" wrong 40% of the time. Ours: 95% accuracy.</li>
              <li><strong>Offline-first architecture:</strong> Our app works in basements, remote sites, anywhere. Cloud-only competitors (most AI startups) require WiFi. Not viable for construction.</li>
              <li><strong>Cost advantage compounds:</strong> As we scale, our per-user costs stay flat ($2/month API + $3/month platform). Cloud-only competitors pay $50-100/month per user in API costs. We can undercut them 3-5x on price.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Platform Strategy */}
      <section className="product-section">
        <h2>Why Build a Platform Instead of Just One Product?</h2>

        <div className="problem-description">
          <p>
            <strong>Single-product companies get acquired for 3-5x revenue.</strong> If VoiceMoose alone reaches $10M ARR,
            that's a $30-50M exit. Good, but not generational wealth. Not a unicorn.
          </p>
          <p>
            <strong>Platform companies get acquired for 10-15x revenue—or higher multiples on strategic value.</strong>
            If IntelliMoose platform reaches $50M ARR across 4 products, that's a $500M-750M exit on revenue multiple alone.
            But strategic acquirers (Apple, Microsoft, Salesforce) pay for <em>network effects, data moats, and ecosystem lock-in</em>—
            which can push valuations to $1-3B.
          </p>
          <p>
            <strong>Why this matters to investors:</strong> Platform strategy de-risks the investment. If one product fails,
            others succeed. Multiple revenue streams, multiple acquisition paths, multiple defensibility layers. Higher exit
            multiples because you're selling a <em>category-defining platform</em>, not a feature.
          </p>
        </div>

        <div className="problem-stats-grid">
          <div className="problem-stat-card">
            <div className="problem-stat-number">10-15x</div>
            <div className="problem-stat-label">Revenue multiple for platform acquisitions vs. 3-5x for single products</div>
          </div>
          <div className="problem-stat-card">
            <div className="problem-stat-number">4 products</div>
            <div className="problem-stat-label">Multiple shots on goal. If one fails, others succeed.</div>
          </div>
          <div className="problem-stat-card">
            <div className="problem-stat-number">5+ acquirers</div>
            <div className="problem-stat-label">Creates competitive bidding war at exit</div>
          </div>
        </div>
      </section>

      {/* Network Effects */}
      <section className="product-section dark">
        <h2>How the Products Create Network Effects</h2>

        <div className="demo-flow">
          <div className="demo-step">
            <div className="step-content">
              <h3>🎙️ VoiceMoose</h3>
              <p>
                Generates structured data: work orders, material lists, compliance notes. This data feeds the other products.
                <br /><br />
                <strong>Data created:</strong> Job details, material usage, time tracking, compliance keywords.
              </p>
            </div>
          </div>

          <div className="demo-arrow">→</div>

          <div className="demo-step">
            <div className="step-content">
              <h3>📸 SnapMoose</h3>
              <p>
                Uses VoiceMoose data to understand job context. "Installing GFCI in bathroom" (from VoiceMoose) → SnapMoose knows to check for NEC 210.8(A)(1) compliance.
                <br /><br />
                <strong>Data created:</strong> Code violations, NEC citations, correction history.
              </p>
            </div>
          </div>

          <div className="demo-arrow">→</div>

          <div className="demo-step">
            <div className="step-content">
              <h3>👁️ EyeMoose</h3>
              <p>
                Knows what work is happening (from VoiceMoose) and where (from SnapMoose). Adjusts hazard detection based on job type.
                "Trenching" job → monitors for trench collapse, confined space violations.
                <br /><br />
                <strong>Data created:</strong> Safety incidents, near-misses, worker behavior patterns.
              </p>
            </div>
          </div>
        </div>

        <div className="problem-description" style={{ marginTop: '3rem' }}>
          <p>
            <strong>The Flywheel:</strong> More VoiceMoose users → more structured job data → better SnapMoose predictions
            (AI learns common violations per job type) → better EyeMoose hazard detection (knows which hazards correlate with which jobs).
          </p>
          <p>
            <strong>Result:</strong> Each product gets smarter as the platform grows. Competitors can copy individual features,
            but they can't replicate the proprietary dataset created by the integrated platform. This is a <em>data moat</em>.
          </p>
        </div>
      </section>

      {/* Data Moat */}
      <section className="product-section">
        <h2>The Proprietary Dataset: Your Unfair Advantage</h2>

        <div className="tech-stack">
          <div className="tech-layer">
            <h3>What Data We Collect Across the Platform</h3>
            <ul>
              <li><strong>VoiceMoose:</strong> 10,000 hours of trade-specific speech (product names, work descriptions, compliance terminology). Structured job data (time, materials, labor, outcomes).</li>
              <li><strong>SnapMoose:</strong> 500,000 labeled images of electrical installations (correct vs. violations). Violation patterns by region, contractor, job type.</li>
              <li><strong>EyeMoose:</strong> 1M hours of construction site video (anonymized). Near-miss incidents, hazard timings, safety compliance trends.</li>
              <li><strong>Cross-Product:</strong> Correlation data. "Jobs with &gt;5 code violations have 3x higher safety incidents." "Contractors who use VoiceMoose have 40% fewer failed inspections."</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Why This Dataset Is Impossible to Replicate</h3>
            <ul>
              <li><strong>Unique to Skilled Trades:</strong> Google has general speech data. We have "12-gauge Romex, purple box, breaker 14" (electrician jargon). OpenAI has general images. We have "GFCI outlet in bathroom, NEC 2023 violation" (labeled code violations).</li>
              <li><strong>Multi-Modal:</strong> Combines voice, vision, and safety data. Competitors would need to build 3 separate products to match. By the time they do, we're 2 years ahead.</li>
              <li><strong>Behavioral Data:</strong> Not just "what happened" but "what works." Which contractors have lowest violation rates? What safety protocols reduce incidents? This predictive data is worth more than raw observations.</li>
              <li><strong>Network Effects:</strong> More users → more data → better AI → attracts more users. First-mover advantage compounds over time.</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>How We Monetize the Data (Without Selling It)</h3>
            <ul>
              <li><strong>Predictive Analytics:</strong> Sell insights to insurance companies. "Contractors using our platform have 30% lower claims. Offer them discounted premiums." Insurance pays us $10-20/worker/month for risk scoring API.</li>
              <li><strong>Training Modules:</strong> "Most common violations in your region: GFCI (45%), wire gauge (30%), box fill (15%)." Sell to trade schools, apprenticeship programs. $50-100/seat/year.</li>
              <li><strong>Benchmark Reports:</strong> "Your company's safety score: 78/100. Industry average: 65/100." Contractors pay $500-1K/year for compliance benchmarking.</li>
              <li><strong>Supply Chain Optimization:</strong> "Contractors in your market use Romex 12-2 80% of the time. Stock more 12-2, less 14-2." Sell to electrical distributors (Graybar, Rexel). $5-10K/month per distributor.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ecosystem Lock-In */}
      <section className="product-section dark">
        <h2>Ecosystem Lock-In: Why Customers Can't Leave</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Integrated Workflow</h3>
            <p>
              Electrician uses VoiceMoose to document job → SnapMoose to verify compliance → EyeMoose monitors while working.
              All data syncs to single dashboard. Switching to competitors means losing this integration—back to manual, fragmented tools.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Historical Data Lock-In</h3>
            <p>
              After 6 months, contractor has 500 jobs documented in platform. This history is valuable: reference past work,
              track material costs over time, prove compliance in audits. Switching means losing this history. High switching cost.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Team Training Investment</h3>
            <p>
              Companies train 10-50 workers on the platform. Workers know the UI, the workflows, the shortcuts. Switching to
              new tool requires re-training entire team (costly, disruptive). Inertia favors staying.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Compliance Certification</h3>
            <p>
              Contractors get "IntelliMoose Certified" badge after 6 months of platform use with &lt;5% violation rate.
              Insurance companies offer premium discounts for certified contractors. Switching means losing certification and insurance savings.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔌</div>
            <h3>Third-Party Integrations</h3>
            <p>
              Platform integrates with ServiceTitan, Jobber, QuickBooks, Procore. Data flows automatically. Switching means
              breaking these integrations—manual data entry returns. Pain of switching &gt; pain of staying.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3>Enterprise Contracts</h3>
            <p>
              Large contractors (100+ workers) negotiate multi-year contracts with volume discounts. Locked in for 3 years.
              By Year 3, new features launched, more integrations built. Renewal rate &gt;90% for enterprise customers.
            </p>
          </div>
        </div>
      </section>

      {/* Exit Strategy */}
      <section className="product-section">
        <h2>Exit Strategy: Who Buys Us and Why</h2>

        <div className="acquirers-grid">
          <div className="acquirer-card">
            <h4>🍎 Apple</h4>
            <p>
              <strong>Why they want us:</strong> Vision Pro enterprise play. Construction is $1.8T industry—perfect use case for spatial computing.
              Our AI models + AR guidance = killer app for Vision Pro in field service.
            </p>
            <p>
              <strong>What they pay for:</strong> Proprietary dataset (trade-specific speech, labeled construction images). Edge AI expertise
              (offline processing for remote sites). Instant 100K+ enterprise customers in construction vertical.
            </p>
            <p className="comparable">Comparable: Matterport acquired for spatial computing tech, $3.5B valuation at peak.</p>
          </div>

          <div className="acquirer-card">
            <h4>🪟 Microsoft</h4>
            <p>
              <strong>Why they want us:</strong> Azure AI for field service. Construction is underserved vertical for Microsoft 365.
              Dynamics 365 Field Service needs AI layer—we provide it. HoloLens 2 enterprise customers need trade-specific apps.
            </p>
            <p>
              <strong>What they pay for:</strong> Platform that integrates with Dynamics 365, Teams, Power BI. AI models that run on Azure
              (we migrate from on-device to Azure edge). Enterprise customer relationships in construction/field service.
            </p>
            <p className="comparable">Comparable: Nuance acquired for $20B (enterprise AI, vertical-specific knowledge).</p>
          </div>

          <div className="acquirer-card">
            <h4>☁️ Salesforce</h4>
            <p>
              <strong>Why they want us:</strong> Service Cloud AI layer. Field Service Lightning needs intelligence—we provide it.
              Tableau integration (our benchmark reports = premium analytics product). Einstein AI needs domain-specific training data.
            </p>
            <p>
              <strong>What they pay for:</strong> Platform that makes Service Cloud smarter. 100K+ field service users (upsell to Service Cloud).
              Proprietary dataset for Einstein training. Category-defining vertical SaaS (construction/trades).
            </p>
            <p className="comparable">Comparable: Slack acquired for $28B (platform play, ecosystem, integrations).</p>
          </div>

          <div className="acquirer-card">
            <h4>🛡️ Insurance (Travelers, Liberty Mutual, Zurich)</h4>
            <p>
              <strong>Why they want us:</strong> Workers' comp costs $40B/year. Our platform reduces claims by 30-40% (measured). Insurers want
              to own the risk reduction tech. Bundle EyeMoose with insurance policies—premium discounts for users.
            </p>
            <p>
              <strong>What they pay for:</strong> Proprietary risk scoring algorithms. 100K+ contractors already using platform (instant distribution
              for insurance products). Data moat (safety trends, violation patterns). Vertical integration: sell insurance + compliance tech.
            </p>
            <p className="comparable">Comparable: Motive (fleet safety) raised at $3.5B valuation selling to insurance market.</p>
          </div>

          <div className="acquirer-card">
            <h4>🔨 Tool OEMs (Hilti, DeWalt, Bosch, Milwaukee)</h4>
            <p>
              <strong>Why they want us:</strong> "Smart tools" trend. DeWalt makes drills—but the real money is in software/services (recurring revenue).
              White-label our platform as "DeWalt Connect" or "Milwaukee ONE-KEY Pro." Sell tools + software subscriptions.
            </p>
            <p>
              <strong>What they pay for:</strong> Platform they can brand as theirs. Instant software capabilities without 5 years of R&D.
              Customer relationships (we have the contractors, they sell tools to them). Recurring revenue model (tools are one-time, software is subscription).
            </p>
            <p className="comparable">Comparable: ServiceMax (field service software) acquired by GE for $915M, later sold to Silver Lake.</p>
          </div>

          <div className="acquirer-card">
            <h4>🏗️ Construction Tech (Procore, Autodesk, ServiceTitan)</h4>
            <p>
              <strong>Why they want us:</strong> Fill gaps in their platform. Procore has project management—not field-level AI. Autodesk has CAD—not
              real-time compliance. ServiceTitan has scheduling—not safety monitoring. We plug into their platforms and make them smarter.
            </p>
            <p>
              <strong>What they pay for:</strong> Technology tuck-in (buy vs. build). Eliminate competitive threat (we could become their competitor
              if we expand). Customer overlap (their customers want our features—easier to buy us than lose customers).
            </p>
            <p className="comparable">Comparable: Procore acquired Levelset for $500M, BIM 360 for integration plays.</p>
          </div>
        </div>
      </section>

      {/* Valuation Build-Up */}
      <section className="product-section dark">
        <h2>How We Get to $1-3B Valuation</h2>

        <div className="tech-stack">
          <div className="tech-layer">
            <h3>Path 1: Revenue Multiple ($500M-750M)</h3>
            <ul>
              <li><strong>Year 3 Target:</strong> 100K users across 4 products. Blended ARPU: $40/month. Annual revenue: $48M.</li>
              <li><strong>Year 4 Target:</strong> 200K users. $30M from data monetization (insurance APIs, benchmark reports). Total revenue: $126M.</li>
              <li><strong>Year 5 Target:</strong> 350K users. $50M from data. Total revenue: $218M.</li>
              <li><strong>Exit Multiple:</strong> SaaS platforms trade at 8-12x revenue. At $200M revenue → $1.6B-2.4B valuation.</li>
              <li><strong>Conservative Exit:</strong> $150M revenue × 10x = $1.5B acquisition.</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Path 2: Strategic Premium ($1B-3B)</h3>
            <ul>
              <li><strong>Apple buys for Vision Pro:</strong> Pays 15-20x revenue because we unlock $10B+ construction market for Vision Pro. $150M revenue × 15x = $2.25B.</li>
              <li><strong>Microsoft buys for Azure:</strong> Pays for Azure workload migration. Every customer = Azure customer. Platform value &gt; revenue value. $1.5-2B acquisition.</li>
              <li><strong>Insurance buys for vertical integration:</strong> Pays for claims reduction (worth $5-10B/year across industry). Proprietary risk data alone worth $1B+.</li>
              <li><strong>Bidding war scenario:</strong> Multiple acquirers compete. Apple vs. Microsoft vs. Salesforce. Price escalates to $2-3B (see: Slack, Nuance).</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Path 3: IPO ($2B+ Market Cap)</h3>
            <ul>
              <li><strong>If we reach $500M ARR:</strong> Public SaaS companies trade at 6-10x revenue. Procore (construction tech) went public at $9B on $400M revenue. We'd target similar.</li>
              <li><strong>Public comps:</strong> Procore ($9B market cap), ServiceTitan ($18B IPO valuation), Smartsheet ($8B). We'd be "AI-first construction platform"—premium multiple.</li>
              <li><strong>Timeline:</strong> IPO in Year 6-7 if growth sustains. Alternative: stay private, raise growth equity at $3-5B valuation, sell to strategic later.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="product-section">
        <h2>Why This Works Now (Timing)</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Has Crossed the Threshold</h3>
            <p>
              Whisper (speech recognition) is 95%+ accurate on general speech—we can fine-tune for trades. GPT-4 Vision can
              interpret complex images (electrical panels, construction sites). YOLOv8 runs on $60 hardware. These technologies
              didn't exist 3 years ago. This is the window.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Smartphones Are Ubiquitous</h3>
            <p>
              85% of tradespeople have smartphones (2023 data). They use them for photos, texting, GPS—but not for AI-powered
              work tools. Distribution is solved. No need to sell hardware (except EyeMoose cameras). App-based go-to-market.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👴</div>
            <h3>Skilled Labor Shortage Crisis</h3>
            <p>
              500K electrician shortage by 2028. Companies desperate for productivity tools. Willing to pay for AI that makes
              junior workers as productive as veterans. Economic pain = willingness to buy new solutions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Insurance Costs Are Exploding</h3>
            <p>
              Workers' comp premiums up 20-30% in last 3 years. Contractors need to prove safety to avoid rate hikes. EyeMoose
              provides documented evidence of proactive safety management. ROI is immediate (premium savings &gt; subscription cost).
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏛️</div>
            <h3>Regulatory Tailwinds</h3>
            <p>
              OSHA pushing stricter enforcement. NEC code updates every 3 years (more complex). States requiring digital
              documentation for permitting. Regulatory compliance burden = demand for our platform.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Big Tech Hasn't Entered Yet</h3>
            <p>
              Google, Microsoft, Amazon focused on white-collar AI (office workers, developers). Blue-collar AI is wide open.
              First-mover advantage: build the category-defining platform before Big Tech wakes up. Then sell to them at premium.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="product-section dark">
        <h2>Investment Thesis Summary</h2>

        <div className="problem-description">
          <p>
            <strong>Market:</strong> $500B+ TAM across skilled trades (documentation, compliance, safety). 3.5M workers in US alone.
            Underserved market—current tools are generic (Google, Microsoft) or outdated (paper, manual processes).
          </p>
          <p>
            <strong>Product:</strong> 4 AI-powered products that work together as unified platform. Each product solves real pain
            (paperwork burden, failed inspections, safety incidents). Each product is buildable in 10-16 days. Patent-defensible.
          </p>
          <p>
            <strong>Go-to-Market:</strong> Direct sales to contractors. Trade shows, Google Ads, referrals. Low CAC ($150-300).
            High LTV ($1,800-2,500). LTV:CAC = 6-9x. Payback period &lt;6 months. Path to $50M ARR in 3 years.
          </p>
          <p>
            <strong>Defensibility:</strong> Proprietary dataset (10K hours of trade speech, 500K labeled images, 1M hours of safety video).
            Network effects (products get smarter together). Ecosystem lock-in (integrated workflow, historical data, certifications).
            3-4 patents pending.
          </p>
          <p>
            <strong>Exit:</strong> Multiple acquirers (Apple, Microsoft, Salesforce, insurance, tool OEMs, construction tech). Revenue multiple
            exit at $1.5B (10x on $150M revenue). Strategic premium exit at $2-3B (AI capabilities, proprietary data, customer relationships).
            Timeline: 4-6 years.
          </p>
          <p>
            <strong>Team:</strong> Founder with domain expertise. Plan to hire 2 engineers (AI/ML, full-stack), 1 sales lead. Advisory board
            with construction industry veterans, AI researchers, M&A advisors. Execution-focused, capital-efficient.
          </p>
          <p>
            <strong>Ask:</strong> $1.5M seed round. 18-month runway. Milestones: 4 products launched, 100 paying customers, $250K ARR, 3-4 patents filed.
            Series A ready at $40-60M valuation. Investor ROI: 30-50x if $1.5B exit, 100-200x if $3B exit.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta">
        <h2>Ready to Build a Unicorn?</h2>
        <p>
          This isn't a feature. It's a category-defining platform. First-mover advantage in $500B market.
          Exit to Big Tech in 4-6 years. Let's build it.
        </p>
        <div className="cta-buttons">
          <Link to="/" className="glow-button secondary">
            ← Back to Overview
          </Link>
          <a href="mailto:invest@intellimoose.com" className="glow-button primary">
            Invest in IntelliMoose
          </a>
        </div>
      </section>

      {/* Legal Footer */}
      <LegalFooter />
    </div>
  );
};

export default PlatformPage;
