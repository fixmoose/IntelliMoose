import { FaMicrophone, FaEye, FaBrain } from 'react-icons/fa';
import glassesHero from '../assets/no background image white glasses.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="badge-container">
            <span className="badge patent">PATENT PENDING</span>
            <span className="badge funding">SEEKING FUNDING</span>
          </div>

          <h1 className="hero-title">
            <span className="brand-name">IntelliMoose</span>
            <span className="tagline">Pocket AI Assistant for Any Smart Glasses or Device</span>
          </h1>

          <p className="hero-description">
            Your <span className="neon-text">pocket AI assistant</span> loaded with manuals, code books, and specs.
            Works with ANY smart glasses, phone, or tablet via Bluetooth/WiFi.
            100% offline, private, and built for electricians, HVAC techs, and contractors.
          </p>

          <div className="hero-features">
            <div className="hero-feature">
              <FaMicrophone className="feature-icon" />
              <span>Voice Activated</span>
            </div>
            <div className="hero-feature">
              <FaEye className="feature-icon" />
              <span>Visual Recognition</span>
            </div>
            <div className="hero-feature">
              <FaBrain className="feature-icon" />
              <span>AI Powered</span>
            </div>
          </div>

          <div className="hero-cta-buttons">
            <button
              className="glow-button hero-cta"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Early Access
            </button>
            <button
              className="glow-button secondary-cta"
              onClick={() => window.open('http://localhost:5174', '_blank')}
            >
              Investor Overview →
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper floating">
            {/* Animated cloud layers */}
            <div className="cloud-layer cloud-1"></div>
            <div className="cloud-layer cloud-2"></div>
            <div className="cloud-layer cloud-3"></div>

            {/* Particle effects */}
            <div className="particles">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="particle" style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}></div>
              ))}
            </div>

            {/* Main glasses image */}
            <img src={glassesHero} alt="IntelliMoose Smart Glasses" className="glasses-main" />

            {/* Glow effects */}
            <div className="glow-effect primary"></div>
            <div className="glow-effect secondary"></div>
            <div className="glow-ring"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
