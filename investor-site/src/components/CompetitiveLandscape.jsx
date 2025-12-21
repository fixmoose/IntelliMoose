import './CompetitiveLandscape.css';

const CompetitiveLandscape = () => {
  return (
    <section className="competitive-landscape">
      <h2 className="section-heading">
        Why We Win
      </h2>
      <p className="section-subtitle">
        We're not competing with Ray-Ban Meta or ChatGPT. We're creating a new category:
        <strong> offline, private, domain-expert AI.</strong>
      </p>

      <div className="comparison-table glass-card">
        <h3>Competitive Positioning</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Cloud AI<br/><span>(ChatGPT, Ring, etc.)</span></th>
                <th className="highlight-col">IntelliMoose Platform</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Internet Required</strong></td>
                <td><span className="bad">Yes</span></td>
                <td><span className="good">No - 100% offline</span></td>
              </tr>
              <tr>
                <td><strong>Data Privacy</strong></td>
                <td><span className="bad">Uploads to cloud</span></td>
                <td><span className="good">All data stays on-device</span></td>
              </tr>
              <tr>
                <td><strong>Pricing Model</strong></td>
                <td><span className="bad">$10-200/month</span></td>
                <td><span className="good">One-time purchase</span></td>
              </tr>
              <tr>
                <td><strong>Domain Expertise</strong></td>
                <td><span className="bad">Generic knowledge</span></td>
                <td><span className="good">Pre-loaded with trade manuals/codes</span></td>
              </tr>
              <tr>
                <td><strong>Response Latency</strong></td>
                <td><span className="bad">500ms-2s (cloud roundtrip)</span></td>
                <td><span className="good">50-200ms (local)</span></td>
              </tr>
              <tr>
                <td><strong>Works in Dead Zones</strong></td>
                <td><span className="bad">No</span></td>
                <td><span className="good">Yes - basements, rural, ships</span></td>
              </tr>
              <tr>
                <td><strong>Security Clearance</strong></td>
                <td><span className="bad">Not air-gapped</span></td>
                <td><span className="good">Can work in SCIFs, classified envs</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="moats">
        <h3>Our Competitive Moats</h3>
        <div className="moats-grid">
          <div className="moat-card glass-card">
            <div className="moat-number">1</div>
            <h4>Offline-First DNA</h4>
            <p>Big Tech (Google, Meta, OpenAI) is cloud-first. Rewriting for edge is a cultural and technical shift they won't make. We're building offline from day one.</p>
          </div>

          <div className="moat-card glass-card">
            <div className="moat-number">2</div>
            <h4>Domain Knowledge Curation</h4>
            <p>NEC codes, DOT regulations, medical formularies—we're manually curating and pre-loading content that generic AI can't access. First-mover advantage in each vertical.</p>
          </div>

          <div className="moat-card glass-card">
            <div className="moat-number">3</div>
            <h4>Privacy Positioning</h4>
            <p>Amazon and Google <em>can't</em> credibly claim privacy—their business model is data collection. We have no cloud business to protect. This is defensible.</p>
          </div>

          <div className="moat-card glass-card">
            <div className="moat-number">4</div>
            <h4>Platform Economics</h4>
            <p>One core hardware design = economies of scale. Competitors would have to build bespoke solutions for each market. We win on unit economics.</p>
          </div>

          <div className="moat-card glass-card">
            <div className="moat-number">5</div>
            <h4>Integration Network Effects</h4>
            <p>Once we integrate with Ring, Vuzix, ELDs, body cams, etc., switching costs are high. Partners benefit from our platform—they won't support 10 competitors.</p>
          </div>

          <div className="moat-card glass-card">
            <div className="moat-number">6</div>
            <h4>Certification Barriers</h4>
            <p>FedRAMP, FIPS 140-2, HIPAA, ANSI—these take time and money. We're investing early. Competitors will be 12-24 months behind in regulated markets.</p>
          </div>
        </div>
      </div>

      <div className="why-now glass-card highlight">
        <h3>Why Now?</h3>
        <div className="why-now-grid">
          <div className="why-now-item">
            <div className="year">2023-2024</div>
            <h4>Open-Source LLMs Mature</h4>
            <p>Llama 3.2, Phi-3.5 match GPT-3.5 quality and run on edge devices. This wasn't possible 2 years ago.</p>
          </div>

          <div className="why-now-item">
            <div className="year">2024</div>
            <h4>Edge Hardware Catches Up</h4>
            <p>Raspberry Pi 5 can run vision models in real-time. Edge inference is finally viable at consumer price points.</p>
          </div>

          <div className="why-now-item">
            <div className="year">2024-2025</div>
            <h4>Privacy Backlash Peaks</h4>
            <p>Ring/Amazon lawsuits, GDPR enforcement, TikTok bans—consumers and enterprises want alternatives to Big Tech surveillance.</p>
          </div>

          <div className="why-now-item">
            <div className="year">2025</div>
            <h4>Subscription Fatigue</h4>
            <p>Average household pays $200+/month in subscriptions. One-time purchase products are having a moment (Framework laptops, etc.).</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveLandscape;
