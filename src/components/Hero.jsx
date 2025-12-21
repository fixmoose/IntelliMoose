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
            <span className="tagline">Smart Glasses for Smart Trades</span>
          </h1>

          <p className="hero-description">
            Your expert assistant, <span className="neon-text">right before your eyes</span>.
            AI-powered safety glasses that put manufacturer manuals, code books,
            and technical documentation at your fingertips—hands-free.
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

          <button
            className="glow-button hero-cta"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Early Access
          </button>
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
