import { FaBook, FaClipboardList, FaSearch, FaMobileAlt, FaShareAlt, FaCode } from 'react-icons/fa';
import './AdvancedFeatures.css';

const AdvancedFeatures = () => {
  return (
    <section className="advanced-features">
      <div className="content">
        <h2 className="section-heading">
          Even More Powerful Features
        </h2>

        <p className="advanced-intro">
          IntelliMoose goes beyond basic AI assistance. Upload code books, share permit card comments,
          find parts while working, and unlock extended features with the IntelliGlass app.
        </p>

        {/* Code Book Integration */}
        <div className="advanced-showcase glass-card">
          <div className="advanced-header">
            <div className="icon-badge code">
              <FaBook />
            </div>
            <div>
              <h3>Live Code Book Access</h3>
              <p className="subtitle">Always have the latest electrical code in your ear</p>
            </div>
          </div>

          <div className="feature-examples">
            <div className="example-box">
              <div className="example-question">
                <span className="label">You ask:</span>
                <p>"How many inches must the mast be away from the roof edge according to newest code change?"</p>
              </div>
              <div className="example-answer">
                <span className="label">IntelliMoose answers:</span>
                <p>"According to the 2023 NEC Section 230.28, the mast must be at least 18 inches from the roof edge..."</p>
              </div>
            </div>

            <div className="feature-benefits">
              <h4>Code Book Benefits</h4>
              <ul>
                <li>Upload newest NEC, IBC, IRC, or any code book</li>
                <li>Always have up-to-date requirements</li>
                <li>No more flipping through physical books</li>
                <li>Instant answers while you work</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Answer Sharing */}
        <div className="advanced-showcase glass-card highlight">
          <div className="advanced-header">
            <div className="icon-badge share">
              <FaShareAlt />
            </div>
            <div>
              <h3>Share AI Answers with Teammates</h3>
              <p className="subtitle">Knowledge sharing made effortless</p>
            </div>
          </div>

          <div className="share-examples">
            <div className="share-scenario">
              <div className="scenario-box user">
                <p className="speaker">Samuel asks AI:</p>
                <p className="message">"What torque spec for this bolt?"</p>
              </div>
              <div className="scenario-box ai">
                <p className="speaker">IntelliMoose answers:</p>
                <p className="message">"35 ft-lbs according to the service manual"</p>
              </div>
              <div className="scenario-box user">
                <p className="speaker">Samuel says:</p>
                <p className="message">"Share this answer with Rob too, he needs it"</p>
              </div>
              <div className="scenario-box team">
                <p className="speaker">Rob hears:</p>
                <p className="message">"Samuel wanted me to share this answer with you: 35 ft-lbs according to the service manual"</p>
              </div>
            </div>
          </div>
        </div>

        {/* App Extended Features */}
        <div className="app-features glass-card">
          <div className="advanced-header">
            <span style={{ fontSize: '2rem', color: '#06b6d4' }}>📱</span>
            <div>
              <h3>Glasses + Phone + App = Even More Power</h3>
              <p className="subtitle">Unlock extended features with the IntelliGlass app</p>
            </div>
          </div>

          <div className="app-features-grid">
            <div className="app-feature-card">
              <FaCode />
              <h4>Cloud AI Processing</h4>
              <p>Connect to more powerful AI models via cloud</p>
            </div>

            <div className="app-feature-card">
              <FaBook />
              <h4>Manual Library</h4>
              <p>Organize and sync all your manuals across devices</p>
            </div>

            <div className="app-feature-card">
              <FaClipboardList />
              <h4>Job Management</h4>
              <p>Track tasks, photos, and documentation per job</p>
            </div>

            <div className="app-feature-card">
              <FaSearch />
              <h4>Supplier Integration</h4>
              <p>Connect to parts suppliers for real-time pricing</p>
            </div>

            <div className="app-feature-card">
              <FaShareAlt />
              <h4>Team Dashboard</h4>
              <p>Manage crew, share documents, view activity</p>
            </div>

            <div className="app-feature-card">
              <FaMobileAlt />
              <h4>Remote Configuration</h4>
              <p>Adjust glasses settings from your phone</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdvancedFeatures;
