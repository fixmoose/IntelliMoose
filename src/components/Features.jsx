import { FaCamera, FaMicrophone, FaBook, FaBatteryFull, FaShieldAlt, FaCloud, FaPhone, FaBluetooth } from 'react-icons/fa';
import './Features.css';

const features = [
  {
    icon: <FaCamera />,
    title: 'Smart Vision',
    description: 'AI camera recognizes tools, wires, components, and terminals. Point, ask, and get context-aware answers instantly.',
    color: '#00f5ff'
  },
  {
    icon: <FaMicrophone />,
    title: 'Voice Control & AI',
    description: '"Hey Spotee, which color wire goes first?" Get immediate AI answers without touching anything.',
    color: '#8b5cf6'
  },
  {
    icon: <FaPhone />,
    title: 'Team Communication',
    description: 'Voice-activated walkie-talkie. Say "Ring Samuel" to connect. Send quick messages hands-free via local UHF.',
    color: '#10b981'
  },
  {
    icon: <FaBook />,
    title: 'Shared Knowledge Base',
    description: 'Upload manuals, code books, permit cards to local LLM hub. Share with crew, ask questions, get instant answers.',
    color: '#f59e0b'
  },
  {
    icon: <FaBluetooth />,
    title: 'IntelliGlass App',
    description: 'Connect via Bluetooth to your phone for cloud AI, extended features, and remote configuration.',
    color: '#06b6d4'
  },
  {
    icon: <FaBatteryFull />,
    title: 'All-Day Power',
    description: 'Portable battery pack provides 8-12 hours continuous use for both AI and communication.',
    color: '#8b5cf6'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Rugged & Affordable',
    description: 'Glasses are simple I/O devices—durable, cheap to replace. All intelligence lives in the processing unit.',
    color: '#ef4444'
  },
  {
    icon: <FaCloud />,
    title: 'Multi-Mode Connectivity',
    description: 'Local UHF for team communication, Local LLM for offline AI, or Cloud via Bluetooth for maximum power.',
    color: '#00f5ff'
  }
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="content">
        <h2 className="section-heading">
          Features That Work As Hard As You Do
        </h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glass-card"
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
                <div className="icon-glow" style={{ background: `${feature.color}33` }}></div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
