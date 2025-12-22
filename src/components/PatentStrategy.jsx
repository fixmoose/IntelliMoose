import './PatentStrategy.css';

const PatentStrategy = () => {
  return (
    <section className="patent-strategy">
      <h2 className="section-heading">Intellectual Property Strategy</h2>
      <p className="section-subtitle">
        Building defensible moats through comprehensive patent protection and trade secrets.
      </p>

      <div className="patent-status glass-card highlight">
        <div className="status-badge-large">
          <div className="badge-icon">🛡️</div>
          <h3>Patent Pending</h3>
          <p>Provisional patent filing in progress</p>
        </div>
      </div>

      <div className="ip-overview">
        <h3>Why Our Technology Is Patentable</h3>
        <div className="patentable-grid">
          <div className="patent-reason glass-card">
            <div className="reason-icon">✅</div>
            <h4>Novel System Architecture</h4>
            <p>
              First implementation of portable, offline LLM with domain-specific knowledge delivery for professional trades.
              No prior art exists for this specific combination of edge inference, RAG, and multi-device orchestration.
            </p>
          </div>

          <div className="patent-reason glass-card">
            <div className="reason-icon">✅</div>
            <h4>Non-Obvious Implementation</h4>
            <p>
              Combining edge LLMs (viable only since 2024), trade manual RAG, and multi-device connectivity in this
              configuration is not obvious to those skilled in the art. Unique technical challenges solved.
            </p>
          </div>

          <div className="patent-reason glass-card">
            <div className="reason-icon">✅</div>
            <h4>Demonstrated Utility</h4>
            <p>
              $500B+ market demand validates practical application. Solves real problems (offline expertise delivery)
              across multiple verticals. Clear commercial viability.
            </p>
          </div>

          <div className="patent-reason glass-card">
            <div className="reason-icon">✅</div>
            <h4>Defensible Claims</h4>
            <p>
              Multiple continuation patents possible for each vertical edition. Combination of system, method,
              and device patents creates strong IP portfolio.
            </p>
          </div>
        </div>
      </div>

      <div className="patent-claims">
        <h3>Key Patent Claims</h3>
        <div className="claims-grid">
          <div className="claim-card glass-card">
            <div className="claim-number">1</div>
            <h4>Core System Architecture</h4>
            <p className="claim-description">
              A portable AI inference system comprising an edge computing device with onboard language model,
              local vector database pre-loaded with domain-specific content, wireless connectivity for multi-device
              pairing, and context-aware retrieval engine.
            </p>
            <div className="claim-scope">
              <strong>Scope:</strong> Broad system claim covering entire platform architecture
            </div>
          </div>

          <div className="claim-card glass-card">
            <div className="claim-number">2</div>
            <h4>RAG Method for Trade Manuals</h4>
            <p className="claim-description">
              A method for offline knowledge retrieval comprising converting trade manuals into vector embeddings,
              performing context-aware semantic search without internet connectivity, and delivering answers via
              connected display devices.
            </p>
            <div className="claim-scope">
              <strong>Scope:</strong> Method claim for domain-specific RAG implementation
            </div>
          </div>

          <div className="claim-card glass-card">
            <div className="claim-number">3</div>
            <h4>Multi-Device Orchestration</h4>
            <p className="claim-description">
              An AI assistant device configured to discover and pair with multiple display types (smart glasses,
              phones, tablets), adapt output format based on capabilities, and maintain connection entirely
              without cloud connectivity.
            </p>
            <div className="claim-scope">
              <strong>Scope:</strong> Device claim for universal compatibility protocol
            </div>
          </div>

          <div className="claim-card glass-card">
            <div className="claim-number">4</div>
            <h4>Domain-Specific Model Compression</h4>
            <p className="claim-description">
              A method for compressing language models for domain-specific deployment by identifying core vocabulary,
              pruning non-relevant weights, quantizing to 4-bit/8-bit precision, and validating on domain test sets.
            </p>
            <div className="claim-scope">
              <strong>Scope:</strong> Method claim for trade-specific LLM optimization
            </div>
          </div>

          <div className="claim-card glass-card">
            <div className="claim-number">5</div>
            <h4>Privacy-Preserving Security</h4>
            <p className="claim-description">
              A security system for AI-powered wearables comprising on-device facial recognition without cloud upload,
              encrypted local storage of biometric data, and GDPR/CCPA-compliant design.
            </p>
            <div className="claim-scope">
              <strong>Scope:</strong> System claim for privacy-first architecture
            </div>
          </div>
        </div>
      </div>

      <div className="ip-portfolio">
        <h3>Planned IP Portfolio</h3>
        <p className="portfolio-intro">
          Strategic patent filing timeline designed to maximize protection while minimizing costs.
        </p>
        <div className="timeline-container">
          <div className="timeline-item glass-card">
            <div className="timeline-header">
              <div className="timeline-date">Q2 2027</div>
              <h4>Provisional Patent</h4>
            </div>
            <ul>
              <li>File core system architecture claims</li>
              <li>Establish priority date</li>
              <li>Cost: $2,000-5,000</li>
              <li>Protection: 12-month window to refine</li>
            </ul>
          </div>

          <div className="timeline-item glass-card">
            <div className="timeline-header">
              <div className="timeline-date">Q2 2028</div>
              <h4>Utility Patent</h4>
            </div>
            <ul>
              <li>Convert provisional to full utility patent</li>
              <li>Examination by USPTO</li>
              <li>Cost: $10,000-15,000</li>
              <li>Protection: 20 years from filing</li>
            </ul>
          </div>

          <div className="timeline-item glass-card">
            <div className="timeline-header">
              <div className="timeline-date">2028-2029</div>
              <h4>Continuation Patents</h4>
            </div>
            <ul>
              <li>HomeSentinel: Privacy-first camera AI</li>
              <li>FleetBrain: Vehicle-specific AI</li>
              <li>TacticalAI: Air-gapped secure AI</li>
              <li>Cost: $5,000-10,000 each</li>
            </ul>
          </div>

          <div className="timeline-item glass-card">
            <div className="timeline-header">
              <div className="timeline-date">2029+</div>
              <h4>International Patents (Optional)</h4>
            </div>
            <ul>
              <li>PCT filing for EU, China, Japan, Korea</li>
              <li>Strategic market protection</li>
              <li>Cost: $20,000-50,000 per country</li>
              <li>Decision based on Series A success</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="defensive-moats">
        <h3>Competitive Moats</h3>
        <div className="moats-comparison glass-card">
          <h4>Why Competitors Can't Easily Copy</h4>
          <div className="comparison-table">
            <div className="comparison-row header-row">
              <div className="comp-cell">Potential Competitor</div>
              <div className="comp-cell">Why They Won't Compete</div>
              <div className="comp-cell">Our Advantage</div>
            </div>

            <div className="comparison-row">
              <div className="comp-cell"><strong>Big Tech (Google, Meta, Amazon)</strong></div>
              <div className="comp-cell">Offline AI conflicts with cloud business model. No incentive to cannibalize cloud revenue.</div>
              <div className="comp-cell">12-24 month head start, patents filed before they pivot</div>
            </div>

            <div className="comparison-row">
              <div className="comp-cell"><strong>Smart Glasses Companies (Ray-Ban Meta, Vuzix)</strong></div>
              <div className="comp-cell">Hardware-focused, not AI experts. Would need to license our tech or build from scratch.</div>
              <div className="comp-cell">Domain expertise curation (manuals, codes) takes years to replicate</div>
            </div>

            <div className="comparison-row">
              <div className="comp-cell"><strong>Edge AI Startups</strong></div>
              <div className="comp-cell">General inference focus, not trade-specific. Don't have manual content partnerships.</div>
              <div className="comp-cell">First-mover in trades vertical, patent portfolio prevents copycat</div>
            </div>

            <div className="comparison-row">
              <div className="comp-cell"><strong>Tool Companies (DeWalt, Milwaukee)</strong></div>
              <div className="comp-cell">Manufacturing-focused, not software. Would need to acquire or partner.</div>
              <div className="comp-cell">We can partner as supplier, license IP, or be acquired</div>
            </div>
          </div>
        </div>
      </div>

      <div className="trade-secrets">
        <h3>Trade Secrets vs. Patents</h3>
        <p className="trade-secrets-intro">
          Some innovations are more valuable protected as trade secrets than patents. Our strategy combines both.
        </p>
        <div className="secrets-grid">
          <div className="secrets-card glass-card patent-protected">
            <h4>🛡️ Patent Protection</h4>
            <p className="protection-note">Public disclosure, 20-year exclusivity</p>
            <ul>
              <li>Core RAG architecture</li>
              <li>Multi-device connectivity protocol</li>
              <li>Model compression methods</li>
              <li>Privacy-first security system</li>
              <li>Domain-specific inference pipeline</li>
            </ul>
          </div>

          <div className="secrets-card glass-card trade-secret">
            <h4>🔒 Trade Secrets</h4>
            <p className="protection-note">Hidden in black box, indefinite protection</p>
            <ul>
              <li>Specific prompt engineering templates</li>
              <li>Manual embedding optimization processes</li>
              <li>Training data sources and curation</li>
              <li>Model fine-tuning procedures</li>
              <li>Performance optimization tricks</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ip-investment glass-card highlight">
        <h3>IP Investment & ROI</h3>
        <div className="roi-grid">
          <div className="roi-item">
            <div className="roi-label">5-Year Patent Cost</div>
            <div className="roi-value">$40K-50K</div>
            <p>From $2.5M seed (1.6-2%)</p>
          </div>
          <div className="roi-item">
            <div className="roi-label">Valuation Impact</div>
            <div className="roi-value">+30-50%</div>
            <p>$3-7.5M added enterprise value</p>
          </div>
          <div className="roi-item">
            <div className="roi-label">ROI on Patents</div>
            <div className="roi-value">6-10x</div>
            <p>Return on patent investment</p>
          </div>
        </div>
        <p className="roi-conclusion">
          <strong>Conclusion:</strong> Patent protection is essential for defending our competitive moats,
          increasing valuation, and attracting strategic acquirers. The $40K-50K investment will return
          $200K-500K in added enterprise value.
        </p>
      </div>

      <div className="disclosure-note glass-card">
        <h4>⚠️ Disclosure Protection</h4>
        <p>
          This patent strategy document shared with private investors and advisors establishes disclosure date.
          Any third party who views this material and subsequently files similar patent claims can be challenged
          based on this prior disclosure. Filing provisional patent within 30 days of first disclosure.
        </p>
        <p className="disclosure-date">
          <strong>First Disclosed:</strong> December 21, 2025 | <strong>Audience:</strong> Private Investors Only
        </p>
      </div>
    </section>
  );
};

export default PatentStrategy;
