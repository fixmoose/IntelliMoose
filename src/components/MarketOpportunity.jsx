import { FaHardHat, FaShieldAlt, FaTruck, FaMedkit, FaUserSecret } from 'react-icons/fa';
import './MarketOpportunity.css';

const MarketOpportunity = () => {
  const markets = [
    {
      icon: <FaHardHat />,
      name: "Skilled Trades",
      tam: "$12B",
      users: "~10M professionals (US)",
      examples: "Electricians, HVAC, plumbers, contractors",
      pricing: "$699/device",
      timing: "Launch Q2 2027",
      color: "#06b6d4"
    },
    {
      icon: <FaShieldAlt />,
      name: "Home Security",
      tam: "$75B",
      users: "100M+ smart camera owners",
      examples: "Ring, Nest, Arlo owners seeking privacy",
      pricing: "$399/device (vs $10-20/month subscriptions)",
      timing: "Launch Q3 2027",
      color: "#10b981"
    },
    {
      icon: <FaTruck />,
      name: "Fleet & Logistics",
      tam: "$200B",
      users: "15M+ commercial vehicles (US)",
      examples: "Trucking, delivery, maritime shipping",
      pricing: "$999/vehicle",
      timing: "Launch Q4 2027",
      color: "#8b5cf6"
    },
    {
      icon: <FaUserSecret />,
      name: "Defense & Law Enforcement",
      tam: "$40B",
      users: "Govt/military/LEO agencies",
      examples: "Tactical ops, body cams, field intelligence",
      pricing: "$3,000-10,000/unit",
      timing: "2028",
      color: "#f59e0b"
    },
    {
      icon: <FaMedkit />,
      name: "Healthcare",
      tam: "$12B",
      users: "EMS, rural clinics, disaster response",
      examples: "Paramedics, field hospitals, remote medicine",
      pricing: "$1,500-2,500/unit",
      timing: "2028",
      color: "#ef4444"
    }
  ];

  return (
    <section className="market-opportunity">
      <h2 className="section-heading">
        $500B+ Market Opportunity
      </h2>
      <p className="section-subtitle">
        One platform. Five massive markets. All united by a single insight:
        <strong> offline AI is worth more than cloud AI in these environments.</strong>
      </p>

      <div className="tam-summary glass-card highlight">
        <div className="tam-grid">
          <div className="tam-item">
            <h3>Total Addressable Market</h3>
            <div className="tam-value">$339B+</div>
            <p>Combined TAM across 5 initial verticals</p>
          </div>
          <div className="tam-item">
            <h3>Serviceable Market (Year 3)</h3>
            <div className="tam-value">$50B+</div>
            <p>Realistic penetration with 3 editions live</p>
          </div>
          <div className="tam-item">
            <h3>Target Market Share (Year 5)</h3>
            <div className="tam-value">2-5%</div>
            <p>$1-2.5B annual revenue potential</p>
          </div>
        </div>
      </div>

      <div className="markets-grid">
        {markets.map((market, index) => (
          <div key={index} className="market-card glass-card">
            <div className="market-header" style={{ borderColor: market.color }}>
              <div className="market-icon" style={{ color: market.color }}>
                {market.icon}
              </div>
              <h3>{market.name}</h3>
            </div>

            <div className="market-stat">
              <span className="stat-label">TAM</span>
              <span className="stat-value" style={{ color: market.color }}>{market.tam}</span>
            </div>

            <div className="market-stat">
              <span className="stat-label">Target Users</span>
              <span className="stat-value-sm">{market.users}</span>
            </div>

            <div className="market-examples">
              <strong>Use Cases:</strong>
              <p>{market.examples}</p>
            </div>

            <div className="market-pricing">
              <strong>Pricing:</strong>
              <p>{market.pricing}</p>
            </div>

            <div className="market-timing">
              <span className="timing-badge" style={{
                background: `linear-gradient(135deg, ${market.color}20, ${market.color}10)`,
                borderColor: `${market.color}40`
              }}>
                {market.timing}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="market-insights">
        <h3>Why These Markets?</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-number">1</div>
            <div className="insight-content">
              <h4>Internet Unreliability</h4>
              <p>Trucks, ships, basements, rural sites—cloud AI fails where these professionals work daily.</p>
            </div>
          </div>
          <div className="insight-card">
            <div className="insight-number">2</div>
            <div className="insight-content">
              <h4>Privacy Requirements</h4>
              <p>Security footage, medical data, classified intel—these industries can't use cloud AI.</p>
            </div>
          </div>
          <div className="insight-card">
            <div className="insight-number">3</div>
            <div className="insight-content">
              <h4>Domain Expertise Needed</h4>
              <p>Generic AI can't replace NEC codes, DOT regs, or medical formularies. We pre-load them.</p>
            </div>
          </div>
          <div className="insight-card">
            <div className="insight-number">4</div>
            <div className="insight-content">
              <h4>Subscription Fatigue</h4>
              <p>One-time purchase beats $10-200/month cloud fees. ROI in 6-24 months.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
