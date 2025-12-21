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
          The IntelliMoose System
        </h2>

        <p className="showcase-intro">
          A pocket AI device pre-loaded with your industry's manuals and code books.
          Connect it to any smart glasses, phone, or tablet. No internet required.
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

          <div className="showcase-card glass-card highlight">
            <div className="image-container">
              <img src={withTransceiver} alt="IntelliMoose Pocket AI Device" />
              <div className="image-glow"></div>
            </div>
            <h3>Pocket AI Brain</h3>
            <p>The core device: Offline LLM with your manuals pre-loaded. Connects to ANY display.</p>
          </div>
        </div>

        <div className="tech-highlights glass-card">
          <h3>Pocket AI Device - Technical Specifications</h3>
          <div className="specs-list">
            <div className="spec-item">
              <span className="spec-label">Processor</span>
              <span className="spec-value">ARM-based SoC (Raspberry Pi 5 or equivalent)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">AI Model</span>
              <span className="spec-value">Local LLM (Llama 3.2, Phi-3.5-vision, or similar)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Storage</span>
              <span className="spec-value">128GB - 512GB (for manuals & code books)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Connectivity</span>
              <span className="spec-value">Bluetooth 5.0, WiFi Direct, USB-C</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Battery Life</span>
              <span className="spec-value">8-12 hours active use</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Size</span>
              <span className="spec-value">Pocket-sized (approx. 4" × 2.5" × 0.8")</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Operating Mode</span>
              <span className="spec-value">100% Offline - No internet required</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Compatible Devices</span>
              <span className="spec-value">Any smart glasses, phones, tablets with BT/WiFi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
