import './TechArchitecture.css';

const TechArchitecture = () => {
  return (
    <section className="tech-architecture">
      <h2 className="section-heading">Technical Architecture</h2>
      <p className="section-subtitle">
        Built on open-source AI, optimized for edge inference, designed for zero cloud dependency.
      </p>

      <div className="tech-stack glass-card">
        <h3>Core Technology Stack</h3>
        <div className="stack-grid">
          <div className="stack-layer">
            <h4>AI/ML Layer</h4>
            <ul>
              <li><strong>LLM:</strong> Llama 3.2 (3B/8B), Phi-3.5-vision</li>
              <li><strong>Vision:</strong> YOLOv8, custom face recognition</li>
              <li><strong>Voice:</strong> Whisper.cpp (offline STT), Piper (TTS)</li>
              <li><strong>RAG:</strong> ChromaDB/FAISS for vector search</li>
            </ul>
          </div>

          <div className="stack-layer">
            <h4>Software Stack</h4>
            <ul>
              <li><strong>OS:</strong> Custom Linux (Debian-based)</li>
              <li><strong>Runtime:</strong> Python 3.11+, llama.cpp</li>
              <li><strong>Inference:</strong> ONNX Runtime, TensorRT Lite</li>
              <li><strong>Connectivity:</strong> BlueZ (BT), wpa_supplicant (WiFi)</li>
            </ul>
          </div>

          <div className="stack-layer">
            <h4>Hardware Platform</h4>
            <ul>
              <li><strong>Processor:</strong> ARM Cortex-A76 (RPI 5 class)</li>
              <li><strong>RAM:</strong> 8-16GB LPDDR4X</li>
              <li><strong>Storage:</strong> 256GB-1TB NVMe</li>
              <li><strong>Battery:</strong> 10,000-20,000 mAh Li-Po</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="tech-advantages glass-card highlight">
        <h3>Technical Advantages</h3>
        <div className="advantages-grid">
          <div className="advantage">
            <div className="advantage-icon">⚡</div>
            <h4>Fast Inference</h4>
            <p>50-200ms response time vs. 500ms-2s for cloud AI. 4-10x faster for users.</p>
          </div>
          <div className="advantage">
            <div className="advantage-icon">🔋</div>
            <h4>All-Day Battery</h4>
            <p>8-12 hours active use. Optimized models use 5-10W vs. 30W+ for cloud uploads.</p>
          </div>
          <div className="advantage">
            <div className="advantage-icon">🔒</div>
            <h4>Encrypted Storage</h4>
            <p>AES-256 encryption for all data. Face databases, manuals, logs—fully encrypted at rest.</p>
          </div>
          <div className="advantage">
            <div className="advantage-icon">🛡️</div>
            <h4>Air-Gapped Security</h4>
            <p>Optional isolated hub extension: internet-connected bridge that writes to shared I/O (human-readable text files). RAG unit reads via one-way interface—physically impossible to hack the AI core.</p>
          </div>
          <div className="advantage">
            <div className="advantage-icon">🔄</div>
            <h4>OTA Updates</h4>
            <p>Over-the-air model and software updates. Deploy improvements to entire fleet instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArchitecture;
