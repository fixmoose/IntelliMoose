import glassesWhite from '../assets/white.png';
import glassesBlack from '../assets/black .png';
import withCharger from '../assets/with portable charger.png';
import withTransceiver from '../assets/with transreceiver to local llm.png';
import './ProductShowcase.css';

const ProductShowcase = () => {
  return (
    <section className="product-showcase">
      <div className="content">
        <h2 className="section-heading">
          Meet IntelliMoose
        </h2>

        <p className="showcase-intro">
          The world's first AI-powered safety glasses designed specifically for skilled professionals.
          Every detail engineered for durability, comfort, and intelligent assistance.
        </p>

        <div className="showcase-grid">
          <div className="showcase-card glass-card">
            <div className="image-container">
              <img src={glassesWhite} alt="IntelliMoose White Edition" />
              <div className="image-glow"></div>
            </div>
            <h3>White Edition</h3>
            <p>Clean, professional design with AI camera and safety-rated lenses</p>
          </div>

          <div className="showcase-card glass-card">
            <div className="image-container">
              <img src={glassesBlack} alt="IntelliMoose Black Edition" />
              <div className="image-glow"></div>
            </div>
            <h3>Black Edition</h3>
            <p>Sleek design for demanding work environments</p>
          </div>

          <div className="showcase-card glass-card">
            <div className="image-container">
              <img src={withCharger} alt="With Portable Charger" />
              <div className="image-glow"></div>
            </div>
            <h3>All-Day Power</h3>
            <p>Portable battery pack for 8-12 hours continuous use</p>
          </div>

          <div className="showcase-card glass-card">
            <div className="image-container">
              <img src={withTransceiver} alt="Local LLM Option" />
              <div className="image-glow"></div>
            </div>
            <h3>Local AI Mode</h3>
            <p>Optional transceiver for offline AI processing</p>
          </div>
        </div>

        <div className="tech-highlights glass-card">
          <h3>Technical Specifications</h3>
          <div className="specs-list">
            <div className="spec-item">
              <span className="spec-label">Camera</span>
              <span className="spec-value">HD with wide-angle lens</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Audio</span>
              <span className="spec-value">Bone conduction speaker</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Protection</span>
              <span className="spec-value">ANSI Z87.1 safety rated</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Weight</span>
              <span className="spec-value">45g ultralight</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Battery</span>
              <span className="spec-value">8-12 hours continuous</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Connectivity</span>
              <span className="spec-value">USB-C + Wireless</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
