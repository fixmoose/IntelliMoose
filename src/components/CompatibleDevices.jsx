import { FaBluetooth, FaWifi, FaCheckCircle } from 'react-icons/fa';
import './CompatibleDevices.css';

const CompatibleDevices = () => {
  const compatibleGlasses = [
    {
      name: "Ray-Ban Meta",
      image: "https://m.media-amazon.com/images/I/61HU7RpqJrL._AC_SL1500_.jpg",
      price: "$299",
      features: ["12MP Camera", "Built-in Speakers", "Voice Commands"],
      note: "Consumer-grade (not safety rated)"
    },
    {
      name: "Vuzix M400",
      image: "https://m.media-amazon.com/images/I/51xmN8EQAQL._AC_SL1000_.jpg",
      price: "$1,799",
      features: ["Industrial AR Display", "Voice Control", "Rugged Design"],
      note: "Professional AR glasses"
    },
    {
      name: "RealWear Navigator 520",
      image: "https://m.media-amazon.com/images/I/61QC6zYHi3L._AC_SL1500_.jpg",
      price: "$2,500",
      features: ["Fully Voice Controlled", "Ultra-Rugged", "ANSI Certified"],
      note: "Industrial-grade headset"
    },
    {
      name: "Rokid Air",
      image: "https://m.media-amazon.com/images/I/51KSj+yqZ-L._AC_SL1500_.jpg",
      price: "$379",
      features: ["120\" Virtual Display", "Lightweight", "USB-C Connection"],
      note: "AR entertainment/productivity"
    },
    {
      name: "TCL RayNeo X2",
      image: "https://m.media-amazon.com/images/I/61R8jxGHPJL._AC_SL1500_.jpg",
      price: "$599",
      features: ["Micro LED Display", "AI Assistant", "Camera"],
      note: "Consumer AR glasses"
    },
    {
      name: "XREAL Air 2",
      image: "https://m.media-amazon.com/images/I/51zDGLQ9zKL._AC_SL1500_.jpg",
      price: "$399",
      features: ["201\" Virtual Screen", "46° FOV", "3D Ready"],
      note: "Premium AR display"
    }
  ];

  return (
    <section className="compatible-devices">
      <div className="content">
        <div className="section-header">
          <h2 className="section-heading">
            Works With Smart Glasses You Already Own
          </h2>
          <p className="section-subtitle">
            IntelliMoose isn't just glasses—it's your <span className="highlight">pocket AI assistant</span> that connects
            to ANY smart eyewear via Bluetooth or WiFi. Own Ray-Ban Meta? Vuzix? RealWear? You're ready to go.
          </p>
        </div>

        <div className="value-proposition glass-card">
          <div className="value-points">
            <div className="value-point">
              <div className="value-icon">🧠</div>
              <div>
                <h3>What You're Actually Buying</h3>
                <p>A pocket-sized AI device pre-loaded with your trade's manuals, code books, and specs.
                The glasses are just the display—the real power is in the AI brain.</p>
              </div>
            </div>

            <div className="value-point">
              <div className="value-icon">🔌</div>
              <div>
                <h3>Universal Compatibility</h3>
                <p>Works with smart glasses, smartphones, tablets, or any device with Bluetooth/WiFi.
                No internet needed—100% offline and private.</p>
              </div>
            </div>

            <div className="value-point">
              <div className="value-icon">🔒</div>
              <div>
                <h3>Off-Grid & Private</h3>
                <p>Localized LLM means your data never leaves the device. No cloud uploads, no subscriptions,
                no tracking. Perfect for secure jobsites and remote locations.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="devices-grid">
          {compatibleGlasses.map((device, index) => (
            <div key={index} className="device-card glass-card">
              <div className="device-image">
                <img src={device.image} alt={device.name} />
                <div className="compatible-badge">
                  <FaCheckCircle /> Compatible
                </div>
              </div>
              <div className="device-info">
                <h3>{device.name}</h3>
                <p className="device-price">{device.price}</p>
                <ul className="device-features">
                  {device.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <p className="device-note">{device.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="connection-info glass-card">
          <h3>
            <FaBluetooth /> <FaWifi /> Connect via Bluetooth or WiFi
          </h3>
          <p>
            The IntelliMoose pocket device pairs with any smart glasses, smartphone, or tablet.
            Answers appear on your display, play through speakers, or both—your choice.
          </p>

          <div className="connection-steps">
            <div className="step">
              <span className="step-number">1</span>
              <p>Pair your device via Bluetooth or WiFi Direct</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <p>Ask questions by voice or type on your phone</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <p>Get instant answers from your personal AI assistant</p>
            </div>
          </div>
        </div>

        <div className="why-this-matters">
          <h3>Why This Is Better</h3>
          <div className="comparison-grid">
            <div className="comparison-item bad">
              <h4>❌ Other "Smart" Glasses</h4>
              <ul>
                <li>Locked to one brand</li>
                <li>Requires internet connection</li>
                <li>Uploads data to cloud</li>
                <li>General AI (not trade-specific)</li>
                <li>Monthly subscription fees</li>
              </ul>
            </div>
            <div className="comparison-item good">
              <h4>✅ IntelliMoose System</h4>
              <ul>
                <li>Works with ANY smart device</li>
                <li>100% offline capable</li>
                <li>All data stays on-device</li>
                <li>Pre-loaded with YOUR manuals</li>
                <li>One-time purchase, no subscriptions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cta-box glass-card highlight">
          <h3>Don't Own Smart Glasses Yet?</h3>
          <p>No problem! The IntelliMoose pocket AI works with your smartphone too.
          Upgrade to smart glasses later when you're ready.</p>
          <button
            className="glow-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompatibleDevices;
