import { FaUsers, FaPhone, FaPhoneAlt, FaBluetooth, FaCloudUploadAlt, FaServer } from 'react-icons/fa';
import './TeamFeatures.css';

const TeamFeatures = () => {
  return (
    <section className="team-features">
      <div className="content">
        <h2 className="section-heading">
          Built For The Entire Crew
        </h2>

        <p className="team-intro">
          IntelliMoose isn't just personal AI—it's a complete job site communication and knowledge-sharing platform.
          Your entire team stays connected, informed, and productive.
        </p>

        {/* Voice Communication */}
        <div className="feature-showcase glass-card">
          <div className="showcase-header">
            <div className="icon-badge">
              <FaPhone />
            </div>
            <div>
              <h3>Voice-Activated Team Communication</h3>
              <p className="subtitle">Hands-free walkie-talkie, triggered by voice</p>
            </div>
          </div>

          <div className="communication-examples">
            <div className="comm-example">
              <div className="comm-step">
                <span className="step-label">You say:</span>
                <p className="voice-command">"Ring Samuel"</p>
              </div>
              <div className="comm-arrow">→</div>
              <div className="comm-step">
                <span className="step-label">Samuel hears:</span>
                <p className="notification">*Beep* Joe wants to speak</p>
              </div>
              <div className="comm-arrow">→</div>
              <div className="comm-step">
                <span className="step-label">Result:</span>
                <p className="channel-open">10-second open channel via local UHF</p>
              </div>
            </div>

            <div className="comm-feature">
              <h4>Quick Messages</h4>
              <div className="message-example">
                <p className="you">"Hey Rob, don't forget to bring the couplings too"</p>
                <p className="delivery">→ Rob receives voice message instantly</p>
              </div>
            </div>

            <div className="comm-feature">
              <h4>Share AI Answers</h4>
              <div className="message-example">
                <p className="you">"Share this answer with Rob too, he needs it"</p>
                <p className="delivery">→ Rob hears: "Samuel wanted me to share this answer with you: the connection should be made only after de-energizing the modbus unit"</p>
              </div>
            </div>

            <div className="comm-feature">
              <h4>Channel Control</h4>
              <div className="control-info">
                <span className="control-item">
                  <strong>Open Channel:</strong> 10 seconds auto-open
                </span>
                <span className="control-item">
                  <strong>Close Channel:</strong> Say "Over Over" (twice)
                </span>
                <span className="control-item">
                  <strong>Range:</strong> Local UHF - entire job site
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Connectivity Options */}
        <div className="connectivity-grid">
          <div className="connectivity-card glass-card">
            <div className="icon-badge">
              <FaBluetooth />
            </div>
            <h3>Smartphone Integration</h3>
            <p>Connect via Bluetooth to the <strong>IntelliGlass App</strong></p>
            <ul>
              <li>Access cloud AI instead of local LLM</li>
              <li>Sync manuals and documents</li>
              <li>Remote configuration</li>
              <li>Extended features via app</li>
            </ul>
          </div>

          <div className="connectivity-card glass-card">
            <div className="icon-badge">
              <FaServer />
            </div>
            <h3>Local LLM Hub</h3>
            <p>Shared AI processing for the entire crew</p>
            <ul>
              <li>One hub serves multiple glasses</li>
              <li>Works offline on remote sites</li>
              <li>Shared knowledge base</li>
              <li>Cost-effective for teams</li>
            </ul>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="team-benefits">
          <h3>Why Teams Love IntelliMoose</h3>
          <div className="benefits-grid">
            <div className="benefit">
              <FaUsers />
              <h4>Stay Connected</h4>
              <p>Voice-activated communication keeps hands free for work</p>
            </div>
            <div className="benefit">
              <FaPhoneAlt />
              <h4>Instant Messaging</h4>
              <p>Quick voice messages without stopping work</p>
            </div>
            <div className="benefit">
              <FaServer />
              <h4>Shared Knowledge</h4>
              <p>One hub serves the entire crew with AI assistance</p>
            </div>
            <div className="benefit">
              <FaCloudUploadAlt />
              <h4>Remote Management</h4>
              <p>Supervisors update manuals and instructions in real-time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamFeatures;
