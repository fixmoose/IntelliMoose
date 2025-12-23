import { Link } from 'react-router-dom';
import LegalFooter from '../components/LegalFooter';
import './ProductPage.css';

const VoiceMoosePage = () => {
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
        <h1 className="product-hero-title">VoiceMoose</h1>
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

      {/* The Product */}
      <section className="product-section dark">
        <h2>The Product: What You Actually Get</h2>

        <div className="problem-description">
          <p style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '3rem' }}>
            <strong>VoiceMoose is a mobile app (iOS & Android) that works with any Bluetooth earpiece you already own.</strong>
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>The App</h3>
            <p>
              <strong>Download:</strong> App Store (iOS 14+) or Google Play (Android 10+)
              <br /><br />
              <strong>Size:</strong> 200MB download (includes AI models, runs 95% offline)
              <br /><br />
              <strong>Requirements:</strong> iPhone 11+ or equivalent Android (Snapdragon 855+). Works on 3-year-old phones.
              <br /><br />
              <strong>No special hardware needed.</strong> Uses your existing smartphone.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>Compatible Bluetooth Earpieces (Optional)</h3>
            <p>
              <strong>Works with any Bluetooth earpiece you already own:</strong>
              <br />• Jabra Talk 45 ($70)
              <br />• Plantronics Voyager 5200 ($80)
              <br />• Apple AirPods ($130)
              <br />• Any Bluetooth headset (even $20 truck stop models)
              <br /><br />
              <strong>Or use phone speaker/mic</strong> (no earpiece required for basic use)
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Subscription</h3>
            <p>
              <strong>Pricing:</strong> $30/month per worker
              <br /><br />
              <strong>Includes:</strong>
              <br />• Unlimited voice documentation
              <br />• All document types (work orders, invoices, compliance)
              <br />• Offline mode (works without internet)
              <br />• Integrations (QuickBooks, ServiceTitan, Jobber)
              <br />• Free updates, NEC code database refreshes
              <br /><br />
              <strong>30-day free trial, cancel anytime</strong>
            </p>
          </div>
        </div>

        <div className="problem-description" style={{ marginTop: '3rem' }}>
          <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>
            <strong>That's it. Download app → Connect Bluetooth earpiece → Start talking → Get documents.</strong>
            <br />No hardware to buy. No installation. No training required. Works day one.
          </p>
        </div>
      </section>

      {/* FREE FixMoose Basic Callout */}
      <section className="product-section dark">
        <div className="fixmoose-callout">
          <div className="fixmoose-badge">🎁 INCLUDED FREE</div>
          <h2>Every VoiceMoose Subscription Includes FREE FixMoose Basic Account</h2>

          <div className="fixmoose-details">
            <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '2rem' }}>
              VoiceMoose generates your work orders and invoices. FixMoose stores them, organizes them, and shares them with customers.
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
              <p><strong>Why FixMoose?</strong> All your AI widgets (VoiceMoose, CodeSnap, SafetyEye) feed into one central platform.
              Job data, customer history, photos, compliance reports—everything in one place. Start free, upgrade when you outgrow the limits.</p>
              <Link to="/platform" className="fixmoose-link">Learn more about FixMoose Platform →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="product-section">
        <h2>How It Works: Voice-to-Everything</h2>

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

      {/* Real-World Use Cases */}
      <section className="product-section">
        <h2>Real-World Use Cases: How It Actually Works</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>Use Case 1: Hands-Free via Bluetooth Earpiece</h3>
            <p>
              <strong>Scenario:</strong> Electrician Mike is working in an attic, hands full of wire. Can't pull out phone.
              <br /><br />
              <strong>Action:</strong> Mike says "Roger Observe" into his Bluetooth earpiece. App starts recording.
              <br /><br />
              <strong>Mike speaks while working:</strong> "Installing three-way switch in master bedroom, using 14-3 Romex from panel,
              running wire through attic joists, connecting to existing light fixture, two switches—one at bedroom door, one at hallway.
              Using Leviton switches, ivory color. Breaker 12, 15 amps. Customer wants dimmer on bedroom side, standard toggle on hallway side."
              <br /><br />
              <strong>Mike finishes:</strong> "Roger Stop."
              <br /><br />
              <strong>Result (3 seconds later):</strong>
              <ul className="output-list">
                <li>✓ Work order: "3-way switch installation, master bedroom"</li>
                <li>✓ Materials: 14-3 Romex (50ft), Leviton dimmer switch (ivory), Leviton toggle switch (ivory)</li>
                <li>✓ Labor: 1.5 hours estimated</li>
                <li>✓ Invoice line: "$185 labor + $67 materials = $252"</li>
                <li>✓ Compliance note: "Circuit 12, 15A breaker, 14-3 wire meets NEC 404.2 for 3-way switching"</li>
              </ul>
              <br />
              <strong>Offline?</strong> YES. On-device Whisper model transcribes speech locally. Basic extraction (detect materials, location)
              happens on-phone using lightweight GPT-4o-mini model (50MB). When Mike gets back to truck and reconnects to WiFi,
              full GPT-4 processing refines the documents with pricing, detailed compliance notes, and customer-ready formatting.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Use Case 2: Quick Voice Notes at Panel</h3>
            <p>
              <strong>Scenario:</strong> Electrician Sarah is at the breaker panel, needs to document what she's doing for inspector.
              <br /><br />
              <strong>Action:</strong> Opens VoiceMoose app, taps microphone button, speaks: "Adding 20-amp GFCI breaker for garage outlets,
              position 18, using Square D QO220GFI, wired with 12-2 copper, connected to bus bar, tested trip function, labeled 'Garage Outlets West Wall'."
              <br /><br />
              <strong>Result (instant):</strong>
              <ul className="output-list">
                <li>✓ Compliance doc: "Breaker: Square D QO220GFI, 20A GFCI, Position 18"</li>
                <li>✓ "Wire: 12-2 copper (meets NEC 210.12 for 20A circuit)"</li>
                <li>✓ "GFCI tested and operational per NEC 210.8"</li>
                <li>✓ "Panel label: 'Garage Outlets West Wall'"</li>
                <li>✓ Photo prompt: "Take photo of breaker panel for inspection report"</li>
              </ul>
              <br />
              <strong>Offline?</strong> Partial. Speech-to-text works 100% offline (Whisper on-device). Basic compliance template
              generated offline using pre-loaded NEC rules. Detailed code citations and inspector-ready formatting added when online.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚗</div>
            <h3>Use Case 3: End-of-Day Summary in Truck</h3>
            <p>
              <strong>Scenario:</strong> Plumber Tom finished 4 service calls. Sitting in truck, needs to document everything for billing.
              <br /><br />
              <strong>Action:</strong> Tom opens VoiceMoose, says: "Roger Observe. First job, 123 Oak Street, kitchen sink drain clog,
              snaked 25 feet, cleared hair blockage, tested flow, customer happy. Second job, 456 Maple, leaking toilet flange,
              replaced wax ring and closet bolts, Fluidmaster parts, tested for leaks. Third job, 789 Pine, no hot water, replaced
              40-gallon AO Smith water heater, included expansion tank, customer paid cash, $1,850. Fourth job, 321 Elm,
              estimate only, whole-house repipe, gave quote for $8,500, follows up next week. Roger Stop."
              <br /><br />
              <strong>Result:</strong>
              <ul className="output-list">
                <li>✓ 4 separate work orders auto-created</li>
                <li>✓ Job 1: Invoice $125 (drain service)</li>
                <li>✓ Job 2: Invoice $185 (toilet repair + parts)</li>
                <li>✓ Job 3: Invoice $1,850 (water heater, marked PAID CASH)</li>
                <li>✓ Job 4: Quote document $8,500 (repipe estimate, follow-up reminder set)</li>
                <li>✓ All synced to QuickBooks when truck WiFi connects</li>
              </ul>
              <br />
              <strong>Offline?</strong> Mostly YES. Transcription and basic document creation work offline. Pricing lookup
              (water heater cost, standard service rates) cached on device. QuickBooks sync happens when WiFi available.
              Tom can hand customer a printed invoice from truck printer using offline-generated data.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏗️</div>
            <h3>Use Case 4: Job Site Walk-Through Documentation</h3>
            <p>
              <strong>Scenario:</strong> HVAC tech Lisa walks through new construction site with superintendent, documenting
              what needs to be done for rough-in.
              <br /><br />
              <strong>Action:</strong> Lisa starts recording: "Roger Observe. Unit 1A, second floor, bedroom 1 needs supply
              and return duct, 6-inch flex duct to main trunk. Bedroom 2, same setup. Bathroom needs exhaust vent,
              4-inch duct to roof cap. Living room, two supply registers, 8-inch and 6-inch, return in hallway.
              Thermostat location marked on wall by door. Need to coordinate with electrician for power to condenser pad.
              Outdoor unit: 3-ton Carrier, customer selected efficiency model. Roger Stop."
              <br /><br />
              <strong>Result:</strong>
              <ul className="output-list">
                <li>✓ Rough-in checklist: Unit 1A, 5 duct runs identified</li>
                <li>✓ Material list: 6" flex duct (200ft est.), 8" supply (1), 6" supply (3), 4" exhaust (1)</li>
                <li>✓ Coordination note: "Electrician needed for condenser power"</li>
                <li>✓ Equipment spec: "3-ton Carrier high-efficiency unit"</li>
                <li>✓ Customer quote auto-drafted: "$4,200 estimated (rough-in + equipment + install)"</li>
              </ul>
              <br />
              <strong>Offline?</strong> YES. Construction sites often have no WiFi. On-device processing handles everything:
              transcription, room-by-room organization, material list extraction, rough cost estimates (based on cached pricing).
              Syncs to office when Lisa gets back to shop WiFi.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Use Case 5: Maintenance Rounds with Auto-Logging</h3>
            <p>
              <strong>Scenario:</strong> Industrial electrician James does monthly maintenance on 20 machines in factory.
              Needs to log every inspection for compliance.
              <br /><br />
              <strong>Action:</strong> James activates continuous recording mode. As he inspects each machine, he speaks:
              "Machine 3, conveyor belt motor, checked connections, tightened terminal 2, no corrosion, running normal.
              Machine 4, hydraulic pump, replaced contactor, Siemens 3TF50, tested cycle, operates correctly. Machine 5,
              packaging line, found loose ground wire on junction box, re-secured, tested ground continuity."
              <br /><br />
              <strong>Result (auto-generated after 2-hour maintenance round):</strong>
              <ul className="output-list">
                <li>✓ 20 separate maintenance logs (one per machine)</li>
                <li>✓ Machine 3: "Inspection OK, terminal tightened"</li>
                <li>✓ Machine 4: "Contactor replaced, part: Siemens 3TF50" (auto-added to parts inventory deduction)</li>
                <li>✓ Machine 5: "Safety repair: ground wire re-secured" (flagged for manager review)</li>
                <li>✓ Compliance report: "Monthly maintenance completed per OSHA 1910.147"</li>
              </ul>
              <br />
              <strong>Offline?</strong> 100% YES. Factory has no WiFi in production areas (Faraday cage from metal structure).
              Phone processes everything locally, stores logs on device. At end of shift, James walks to office, connects to WiFi,
              all 20 logs upload to maintenance management system automatically.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Use Case 6: Customer Conversation Auto-Capture</h3>
            <p>
              <strong>Scenario:</strong> Electrician Carlos meets customer at front door, discusses work scope while walking to electrical panel.
              <br /><br />
              <strong>Action:</strong> Carlos taps "Record Conversation" in app (kept in pocket). Customer says: "We need outlets
              added in the garage, at least 4, maybe 6. And can you put in some overhead lighting? The garage is dark.
              Oh, and we're thinking of getting an electric car next year, so maybe a charging station too?"
              Carlos responds: "I can do four 20-amp outlets on two circuits, two LED shop lights, and pre-wire for a Level 2 charger.
              I'll install a 50-amp circuit for the charger hookup, you can add the charger unit later when you get the car."
              <br /><br />
              <strong>Result:</strong>
              <ul className="output-list">
                <li>✓ Scope of work: "Garage electrical upgrade"</li>
                <li>✓ Customer requests: 4-6 outlets, overhead lighting, EV charger prep</li>
                <li>✓ Proposed solution: 4 outlets (2 circuits), 2 LED lights, 50A EV circuit (pre-wire)</li>
                <li>✓ Quote auto-drafted: "$1,850 (outlets + lights + EV circuit)"</li>
                <li>✓ Follow-up note: "Customer getting EV next year—offer charger installation when ready"</li>
              </ul>
              <br />
              <strong>Offline?</strong> Partial. Conversation transcription works offline. Scope extraction works offline.
              Quote pricing needs online (pulls current material costs, labor rates). But customer can get verbal quote immediately
              based on cached pricing, formal written quote sent later when online.
            </p>
          </div>
        </div>
      </section>

      {/* How Offline Processing Works */}
      <section className="product-section dark">
        <h2>Deep Dive: How Offline Processing Actually Works</h2>

        <div className="tech-stack">
          <div className="tech-layer">
            <h3>The Challenge: Why Most Voice AI Needs Cloud</h3>
            <ul>
              <li><strong>Speech recognition:</strong> Siri, Alexa, Google Assistant send audio to cloud servers. Models are too large to run on-device (multi-GB).</li>
              <li><strong>Language understanding:</strong> GPT-4, Claude run in data centers with massive GPU clusters. Too computationally expensive for phones.</li>
              <li><strong>Knowledge lookup:</strong> Pricing databases, NEC codes, product catalogs—typically cloud-hosted, too large for local storage.</li>
              <li><strong>Integration:</strong> QuickBooks, ServiceTitan, Jobber—all cloud APIs, require internet to sync.</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Our Solution: Hybrid Offline-First Architecture</h3>
            <ul>
              <li><strong>Layer 1 - Speech Recognition (100% Offline):</strong> OpenAI Whisper model, fine-tuned on electrician/plumber speech,
              compressed to 80MB using quantization. Runs on iPhone (CoreML) and Android (TFLite). Processes speech locally at 20x real-time
              speed (1 minute of speech transcribed in 3 seconds). Works in airplane mode, basements, anywhere.</li>

              <li><strong>Layer 2 - Basic Extraction (95% Offline):</strong> Lightweight language model (GPT-4o-mini quantized to 50MB)
              runs on-device. Trained on 10,000 work orders to recognize patterns: materials ("12-gauge Romex" → wire type),
              locations ("bedroom 2" → job location), actions ("installing" → work type). Extracts structured data without internet.</li>

              <li><strong>Layer 3 - Pricing and Formatting (Cached Offline):</strong> App downloads pricing database weekly when online:
              50,000 common materials with costs, labor rates by trade and region, tax rates by zip code. Stored in 20MB local database
              (SQLite). Generates quotes offline using cached prices. Refreshes when online to stay current.</li>

              <li><strong>Layer 4 - Cloud Enhancement (Online Only):</strong> When WiFi/cell available, audio + extracted data sent to
              GPT-4 for refinement: better formatting, detailed NEC citations, customer-ready wording. Sync to QuickBooks/ServiceTitan.
              But core functionality (transcription, extraction, quoting) works 100% offline.</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Bluetooth Earpiece Integration: Technical Details</h3>
            <ul>
              <li><strong>Wake word detection:</strong> "Roger Observe" triggers recording. Uses tiny 5MB wake word model (similar to "Hey Siri" tech).
              Listens continuously with &lt;1% battery drain. Runs on Bluetooth chip itself (offload from phone CPU).</li>

              <li><strong>Continuous streaming:</strong> Bluetooth audio (Hands-Free Profile or A2DP) streams to phone. Whisper processes in
              5-second chunks for responsiveness. Worker can talk for 10 minutes straight—all buffered and processed.</li>

              <li><strong>Stop command:</strong> "Roger Stop" detected by same wake word model. Finalizes transcription, runs extraction,
              generates documents. Vibration + earpiece beep confirms "recording saved."</li>

              <li><strong>Privacy mode:</strong> Recording only active between "Roger Observe" and "Roger Stop." No always-on recording.
              Audio deleted after transcription (only text kept). GDPR/privacy compliant.</li>

              <li><strong>Noise cancellation:</strong> Bluetooth earpieces (Jabra, Plantronics) have built-in noise reduction. Plus, Whisper
              model trained on noisy environments (construction sites, traffic, power tools). 90%+ accuracy even with background noise.</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>What Happens When You Go From Offline → Online</h3>
            <ul>
              <li><strong>Smart Sync:</strong> App detects WiFi/cell connection. Queues all offline-generated documents for cloud enhancement.
              Sends audio + extracted data to GPT-4 for refinement.</li>

              <li><strong>Retroactive Improvement:</strong> Offline work order: "Install GFCI outlet, bedroom" → Cloud-enhanced:
              "GFCI outlet installation in bedroom 2 per NEC 210.8(A)(1), customer-selected Leviton model, ivory finish, includes
              testing and labeling. Estimated completion: 45 minutes." Same data, professional formatting.</li>

              <li><strong>Pricing Updates:</strong> Offline quote used cached pricing (3 days old). Online sync checks current prices,
              adjusts quote if materials cost changed. Notifies user: "Quote updated: romex price decreased $5 since last sync."</li>

              <li><strong>Integration Sync:</strong> Pushes work orders to ServiceTitan, invoices to QuickBooks, compliance docs to Procore.
              Bidirectional sync: pulls customer info, previous job history, contract details.</li>

              <li><strong>Conflict Resolution:</strong> If worker edited document offline AND cloud version changed (e.g., office edited pricing),
              app shows diff and asks which version to keep. No data loss.</li>
            </ul>
          </div>

          <div className="tech-layer">
            <h3>Battery and Performance Impact</h3>
            <ul>
              <li><strong>Battery life:</strong> Continuous listening (wake word detection): &lt;1% battery per hour. Active recording +
              transcription: ~5% battery per hour. Full workday (8 hours, 2 hours of voice recording): ~15% battery drain. Phone lasts full shift.</li>

              <li><strong>Storage:</strong> App install: 200MB (includes Whisper model, GPT-4o-mini, pricing database). Recorded audio deleted
              after transcription—only text stored. 100 work orders = ~5MB of text. Months of work fits easily on phone.</li>

              <li><strong>Processing speed:</strong> Transcription: 3 seconds per minute of speech (20x real-time). Extraction: 1-2 seconds.
              Document generation: &lt;1 second. Total: worker says "Roger Stop," gets documents in ~5 seconds.</li>

              <li><strong>Works on old phones:</strong> Optimized for iPhone 11+ (2019) and Android equivalents (Snapdragon 855+). Doesn't require
              latest flagship. Budget phones work fine, just slightly slower (8 seconds instead of 5).</li>
            </ul>
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
            <div>VoiceMoose</div>
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
        <h2>Ready to Build VoiceMoose?</h2>
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

      {/* Legal Footer */}
      <LegalFooter />
    </div>
  );
};

export default VoiceMoosePage;
