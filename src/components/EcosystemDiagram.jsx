import './EcosystemDiagram.css';

const EcosystemDiagram = () => {
  return (
    <div className="ecosystem-section">
      <h2 className="ecosystem-title">The IntelliMoose Ecosystem</h2>
      <p className="ecosystem-subtitle">
        FixMoose is the captain of the ship—all AI widgets feed data into one unified platform
      </p>

      <div className="ecosystem-diagram">
        {/* Central Hub - FixMoose */}
        <div className="hub-container">
          <div className="hub-node">
            <div className="hub-icon">⚙️</div>
            <h3>FixMoose</h3>
            <p className="hub-subtitle">Central Platform Hub</p>
            <div className="hub-features">
              <span>CRM</span>
              <span>Invoicing</span>
              <span>Scheduling</span>
              <span>Reporting</span>
            </div>
          </div>
        </div>

        {/* Data Flow Arrows */}
        <div className="data-flow-arrows">
          <div className="arrow arrow-left">
            <div className="arrow-line"></div>
            <div className="arrow-head"></div>
            <div className="data-label">Voice Data</div>
          </div>
          <div className="arrow arrow-center">
            <div className="arrow-line"></div>
            <div className="arrow-head"></div>
            <div className="data-label">Photo Data</div>
          </div>
          <div className="arrow arrow-right">
            <div className="arrow-line"></div>
            <div className="arrow-head"></div>
            <div className="data-label">Video Data</div>
          </div>
        </div>

        {/* Widget Nodes */}
        <div className="widgets-container">
          {/* VoiceMoose */}
          <div className="widget-node voicemoose">
            <div className="widget-glow voicemoose-glow"></div>
            <div className="widget-icon">🎙️</div>
            <h4>VoiceMoose</h4>
            <p className="widget-price">$30/mo</p>
            <ul className="widget-data-points">
              <li>Work descriptions</li>
              <li>Material lists</li>
              <li>Labor hours</li>
              <li>Customer notes</li>
            </ul>
            <div className="widget-badge">Voice Input</div>
          </div>

          {/* SnapMoose */}
          <div className="widget-node snapmoose">
            <div className="widget-glow snapmoose-glow"></div>
            <div className="widget-icon">📸</div>
            <h4>SnapMoose</h4>
            <p className="widget-price">$50/mo</p>
            <ul className="widget-data-points">
              <li>Code violations</li>
              <li>Compliance reports</li>
              <li>Photo documentation</li>
              <li>NEC references</li>
            </ul>
            <div className="widget-badge">Photo Input</div>
          </div>

          {/* EyeMoose */}
          <div className="widget-node eyemoose">
            <div className="widget-glow eyemoose-glow"></div>
            <div className="widget-icon">👁️</div>
            <h4>EyeMoose</h4>
            <p className="widget-price">$200 + $50/mo</p>
            <ul className="widget-data-points">
              <li>Safety violations</li>
              <li>PPE compliance</li>
              <li>Incident clips</li>
              <li>OSHA reports</li>
            </ul>
            <div className="widget-badge">Video Input</div>
          </div>
        </div>
      </div>

      {/* Network Effects Explanation */}
      <div className="ecosystem-benefits">
        <div className="benefit-card">
          <div className="benefit-icon">🔗</div>
          <h4>Network Effects</h4>
          <p>
            Each widget makes FixMoose more valuable. Voice creates invoices. Photos verify code. Video proves safety.
            All data flows into one platform contractors can't leave.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">🛡️</div>
          <h4>Data Moat</h4>
          <p>
            Years of job history, customer relationships, compliance records, and safety data locked in FixMoose.
            Switching costs become insurmountable.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">📈</div>
          <h4>Revenue Compounding</h4>
          <p>
            Contractor starts with FREE FixMoose, adds VoiceMoose ($30), then SnapMoose ($50), then EyeMoose ($200 + $50).
            From $0 → $130/month per user. 3,300 contractors = $4.3M ARR.
          </p>
        </div>
      </div>

      {/* Platform Strategy */}
      <div className="platform-strategy">
        <h3>Why This Architecture Wins</h3>
        <div className="strategy-grid">
          <div className="strategy-item">
            <span className="strategy-number">1</span>
            <div className="strategy-content">
              <h5>Trojan Horse Entry</h5>
              <p>FREE FixMoose gets us in the door. No friction, no risk. Contractors start managing jobs, customers, invoices.</p>
            </div>
          </div>

          <div className="strategy-item">
            <span className="strategy-number">2</span>
            <div className="strategy-content">
              <h5>AI Widget Upsells</h5>
              <p>Once hooked on FixMoose, contractors see prompts: "Save 2 hours/day with VoiceMoose" or "Never fail inspection again with SnapMoose."</p>
            </div>
          </div>

          <div className="strategy-item">
            <span className="strategy-number">3</span>
            <div className="strategy-content">
              <h5>Data Lock-In</h5>
              <p>After 6 months, contractor has entire business in FixMoose. Customer history, invoices, compliance records. Switching = career suicide.</p>
            </div>
          </div>

          <div className="strategy-item">
            <span className="strategy-number">4</span>
            <div className="strategy-content">
              <h5>Platform Dominance</h5>
              <p>FixMoose becomes the OS for contractors. All tools feed into it. Competitors can't replicate the ecosystem.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow Visualization */}
      <div className="data-flow-section">
        <h3>How Data Flows Through the Ecosystem</h3>
        <div className="flow-steps">
          <div className="flow-step">
            <div className="flow-icon">🎙️</div>
            <div className="flow-arrow">→</div>
            <div className="flow-description">
              <strong>VoiceMoose:</strong> Contractor dictates work while on-site. AI extracts: "Replaced 200A panel, ran 3x #2 AWG copper, installed GFCI outlets."
              <span className="flow-result">→ Auto-populates FixMoose invoice with line items.</span>
            </div>
          </div>

          <div className="flow-step">
            <div className="flow-icon">📸</div>
            <div className="flow-arrow">→</div>
            <div className="flow-description">
              <strong>SnapMoose:</strong> Contractor snaps photo of finished panel. AI detects: "NEC 110.26(A) violation - clearance only 32 inches (requires 36)."
              <span className="flow-result">→ Logs violation in FixMoose, prevents failed inspection, saves $500+ rework.</span>
            </div>
          </div>

          <div className="flow-step">
            <div className="flow-icon">👁️</div>
            <div className="flow-arrow">→</div>
            <div className="flow-description">
              <strong>EyeMoose:</strong> Camera detects worker without hard hat at 2:47 PM. Audio alert sounds. Incident clip saved.
              <span className="flow-result">→ OSHA report auto-generated in FixMoose, reduces insurance premiums 15-30%.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Advantage */}
      <div className="competitive-advantage">
        <h3>Why Competitors Can't Replicate This</h3>
        <div className="advantage-grid">
          <div className="advantage-item">
            <div className="advantage-icon">🎯</div>
            <h5>Point Solutions vs. Platform</h5>
            <p>Competitors sell isolated tools. We sell an ecosystem. Voice tool alone? Meh. Voice + Photos + Video all feeding into business management? Unbeatable.</p>
          </div>

          <div className="advantage-item">
            <div className="advantage-icon">🔐</div>
            <h5>Data Gravity</h5>
            <p>More data = better AI = more value. VoiceMoose learns contractor's voice patterns. SnapMoose learns their common code violations. EyeMoose learns their job site risks. This gets better over time, not worse.</p>
          </div>

          <div className="advantage-item">
            <div className="advantage-icon">💰</div>
            <h5>Revenue Stacking</h5>
            <p>ServiceTitan charges $500/month flat. We start FREE, then stack widgets. Contractor paying $130/month feels like they're getting a deal because each widget solves a distinct pain point. Psychology of micro-commitments.</p>
          </div>

          <div className="advantage-item">
            <div className="advantage-icon">⚡</div>
            <h5>Speed to Market</h5>
            <p>We can launch widgets independently. SnapMoose ready before VoiceMoose? Ship it. EyeMoose hardware delayed? No problem, other widgets still drive FixMoose adoption. Modular = fast iteration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemDiagram;
