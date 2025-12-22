import './PlatformEditions.css';

const PlatformEditions = () => {
  const editions = [
    {
      name: "IntelliMoose",
      subtitle: "Trades Edition",
      description: "AI assistant for electricians, HVAC techs, and contractors",
      status: "In Development",
      statusColor: "#10b981",
      price: "$699",
      features: [
        "Pre-loaded with NEC 2023, IBC, IRC codes",
        "Equipment manuals (100+ manufacturers)",
        "Voice-activated queries via smart glasses or phone",
        "Works 100% offline on jobsites",
        "Connects to any smart glasses (Ray-Ban, Vuzix, etc.)"
      ],
      integrations: ["Smart glasses (BT/WiFi)", "Smartphones", "Tablets"],
      aiModels: ["Llama 3.2 Vision", "Whisper (voice)", "RAG for manuals"],
      launch: "Q2 2027"
    },
    {
      name: "HomeSentinel",
      subtitle: "Home Security Edition",
      description: "Privacy-first AI for smart cameras and doorbells",
      status: "Planned",
      statusColor: "#06b6d4",
      price: "$399",
      features: [
        "Works with Ring, Nest, Arlo, and any RTSP camera",
        "Person/vehicle/package detection (YOLOv8)",
        "Facial recognition (100% local, encrypted)",
        "Behavior analysis (loitering, unusual activity)",
        "No cloud uploads—all processing on-device",
        "One-time purchase (vs. $10-20/month subscriptions)"
      ],
      integrations: ["Ring API", "Nest API", "RTSP cameras", "ONVIF DVRs"],
      aiModels: ["YOLOv8", "Face recognition", "Behavior analysis"],
      launch: "Q3 2027"
    },
    {
      name: "FleetBrain",
      subtitle: "Fleet & Logistics Edition",
      description: "Offline AI assistant for commercial vehicles",
      status: "Planned",
      statusColor: "#8b5cf6",
      price: "$999",
      features: [
        "Vehicle troubleshooting (check engine codes, repairs)",
        "DOT regulations and compliance lookup",
        "Route planning assistance",
        "Load documentation (BOL verification via OCR)",
        "Driver safety monitoring (dashcam AI)",
        "Works in dead zones (rural highways, tunnels)"
      ],
      integrations: ["Vehicle OBD-II", "Dashcams", "Fleet tablets", "ELDs"],
      aiModels: ["Llama 3.2", "OCR", "Vision AI (fatigue detection)"],
      launch: "Q4 2027"
    },
    {
      name: "TacticalAI",
      subtitle: "Defense & Law Enforcement Edition",
      description: "Air-gapped AI for secure environments",
      status: "Roadmap",
      statusColor: "#f59e0b",
      price: "$3,000-10,000",
      features: [
        "Equipment manuals (military/tactical gear)",
        "Tactical procedures and protocols",
        "Offline language translation",
        "Body cam AI (evidence documentation)",
        "100% air-gapped—no network connectivity",
        "MIL-SPEC ruggedized, encrypted storage"
      ],
      integrations: ["Body cams", "Ruggedized tablets", "Tactical displays"],
      aiModels: ["Classified/custom", "Offline translation", "OCR"],
      launch: "2028",
      certifications: ["FedRAMP", "FIPS 140-2", "ITAR"]
    },
    {
      name: "MedAssist",
      subtitle: "Healthcare Edition",
      description: "Medical AI for field and remote care",
      status: "Roadmap",
      statusColor: "#ef4444",
      price: "$1,500-2,500",
      features: [
        "Drug interaction checking (offline formulary)",
        "Diagnosis decision support",
        "Emergency protocols (ACLS, PALS, etc.)",
        "Medical reference (conditions, treatments)",
        "Works in ambulances, helicopters, disaster zones",
        "HIPAA-compliant (all data local)"
      ],
      integrations: ["Medical tablets", "EMS equipment", "Wearables"],
      aiModels: ["Medical LLM", "Symptom checker", "Drug database"],
      launch: "2028",
      certifications: ["HIPAA", "Medical-grade hardware"]
    }
  ];

  return (
    <section className="platform-editions">
      <h2 className="section-heading">
        One Platform, Multiple Editions
      </h2>
      <p className="section-subtitle">
        The same core hardware and AI stack, customized for each vertical's specific needs.
        This is how we achieve economies of scale while serving distinct markets.
      </p>

      <div className="platform-architecture glass-card">
        <h3>Shared Platform Architecture</h3>
        <div className="architecture-diagram">
          <div className="arch-layer">
            <div className="layer-title">Applications Layer</div>
            <div className="layer-boxes">
              <div className="layer-box">IntelliMoose</div>
              <div className="layer-box">HomeSentinel</div>
              <div className="layer-box">FleetBrain</div>
              <div className="layer-box">TacticalAI</div>
              <div className="layer-box">MedAssist</div>
            </div>
          </div>

          <div className="arch-arrow">↓</div>

          <div className="arch-layer core">
            <div className="layer-title">IntelliMoose Core Platform</div>
            <div className="core-features">
              <span>Offline LLM Inference</span>
              <span>Voice I/O (Whisper + TTS)</span>
              <span>RAG Pipeline</span>
              <span>Multi-device Connectivity</span>
              <span>Vector Database</span>
              <span>Display Abstraction</span>
            </div>
          </div>

          <div className="arch-arrow">↓</div>

          <div className="arch-layer">
            <div className="layer-title">Hardware Layer</div>
            <div className="hardware-specs">
              <span>ARM SoC (8-16GB RAM)</span>
              <span>256GB-1TB Storage</span>
              <span>BT/WiFi/USB-C</span>
              <span>8-24hr Battery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="editions-grid">
        {editions.map((edition, index) => (
          <div key={index} className="edition-card glass-card">
            <div className="edition-header">
              <div className="edition-title-group">
                <h3>{edition.name}</h3>
                <p className="edition-subtitle">{edition.subtitle}</p>
              </div>
              <div className="edition-status" style={{
                background: `${edition.statusColor}20`,
                color: edition.statusColor,
                borderColor: `${edition.statusColor}40`
              }}>
                {edition.status}
              </div>
            </div>

            <p className="edition-description">{edition.description}</p>

            <div className="edition-price">
              <span className="price-label">Pricing</span>
              <span className="price-value">{edition.price}</span>
            </div>

            <div className="edition-features">
              <h4>Key Features</h4>
              <ul>
                {edition.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="edition-tech">
              <div className="tech-section">
                <h5>Integrations</h5>
                <div className="tech-tags">
                  {edition.integrations.map((int, idx) => (
                    <span key={idx} className="tech-tag">{int}</span>
                  ))}
                </div>
              </div>

              <div className="tech-section">
                <h5>AI Models</h5>
                <div className="tech-tags">
                  {edition.aiModels.map((model, idx) => (
                    <span key={idx} className="tech-tag ai-tag">{model}</span>
                  ))}
                </div>
              </div>

              {edition.certifications && (
                <div className="tech-section">
                  <h5>Certifications</h5>
                  <div className="tech-tags">
                    {edition.certifications.map((cert, idx) => (
                      <span key={idx} className="tech-tag cert-tag">{cert}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="edition-launch">
              <strong>Target Launch:</strong> {edition.launch}
            </div>
          </div>
        ))}
      </div>

      <div className="platform-benefits glass-card highlight">
        <h3>Why the Platform Approach Wins</h3>
        <div className="benefits-grid">
          <div className="benefit">
            <div className="benefit-icon">📦</div>
            <h4>Economies of Scale</h4>
            <p>One hardware design, one core software stack. Costs drop as volume increases across all editions.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🔄</div>
            <h4>Fast Iteration</h4>
            <p>Improvements to core platform benefit all editions instantly. Security patch? All users get it.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">💰</div>
            <h4>Multiple Revenue Streams</h4>
            <p>Not dependent on one market. If trades is slow, security might be booming.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🚀</div>
            <h4>Faster Market Entry</h4>
            <p>New vertical? It's just new content + API integrations. Launch in weeks, not years.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformEditions;
