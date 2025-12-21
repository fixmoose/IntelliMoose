import './Roadmap.css';

const Roadmap = () => {
  const milestones = [
    {
      quarter: "Q1 2027",
      status: "In Progress",
      items: [
        "✅ Validate platform concept with trades edition",
        "✅ Build functional prototype (RPI 5 + Llama 3.2)",
        "🔄 Pilot with 50 electricians",
        "🔄 Integrate with 2 smart glasses brands (Vuzix, Ray-Ban Meta)"
      ]
    },
    {
      quarter: "Q2 2027",
      status: "Planned",
      items: [
        "Launch IntelliMoose (Trades Edition) - 500 units",
        "Close partnerships with tool distributors",
        "Begin HomeSentinel development",
        "Raise $4M seed round"
      ]
    },
    {
      quarter: "Q3 2027",
      status: "Planned",
      items: [
        "Launch HomeSentinel (Security Edition)",
        "Kickstarter campaign ($500K target)",
        "Ship 2,000 combined units",
        "Add 3 more smart glasses integrations"
      ]
    },
    {
      quarter: "Q4 2027",
      status: "Planned",
      items: [
        "Launch FleetBrain (Logistics Edition)",
        "First enterprise fleet pilot (100+ vehicles)",
        "Achieve $1.5M annual revenue run rate",
        "Team expansion to 8-10 people"
      ]
    },
    {
      quarter: "2028",
      status: "Roadmap",
      items: [
        "Launch TacticalAI (Defense Edition)",
        "First government contract",
        "Launch MedAssist (Healthcare Edition)",
        "$10M+ annual revenue",
        "Raise Series A ($10-15M)"
      ]
    },
    {
      quarter: "2029+",
      status: "Vision",
      items: [
        "Expand to 10+ vertical editions",
        "International expansion (EU, APAC)",
        "$35M+ annual revenue",
        "Establish IntelliMoose as the edge AI platform standard"
      ]
    }
  ];

  return (
    <section className="roadmap">
      <h2 className="section-heading">Product & Company Roadmap</h2>
      <p className="section-subtitle">
        Methodical execution, de-risked milestones, capital-efficient growth.
      </p>

      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="milestone glass-card">
            <div className="milestone-header">
              <h3>{milestone.quarter}</h3>
              <span className={`status-badge ${milestone.status.toLowerCase().replace(' ', '-')}`}>
                {milestone.status}
              </span>
            </div>
            <ul className="milestone-items">
              {milestone.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="key-risks glass-card highlight">
        <h3>Key Risks & Mitigation</h3>
        <div className="risks-grid">
          <div className="risk-item">
            <h4>❗ Risk: Hardware production delays</h4>
            <p><strong>Mitigation:</strong> Using off-the-shelf components (RPI 5, standard batteries). No custom silicon. 6-month buffer in timeline.</p>
          </div>

          <div className="risk-item">
            <h4>❗ Risk: AI model quality insufficient</h4>
            <p><strong>Mitigation:</strong> Open-source models (Llama, Phi) already proven. RAG approach reduces hallucinations. Pilot testing validates accuracy.</p>
          </div>

          <div className="risk-item">
            <h4>❗ Risk: Customer adoption slower than expected</h4>
            <p><strong>Mitigation:</strong> Multiple verticals = diversified risk. If trades is slow, pivot to HomeSentinel (larger TAM, consumer-friendly).</p>
          </div>

          <div className="risk-item">
            <h4>❗ Risk: Big Tech launches competing product</h4>
            <p><strong>Mitigation:</strong> They won't—offline AI conflicts with their cloud business model. Even if they do, we have 12-24 month head start.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
