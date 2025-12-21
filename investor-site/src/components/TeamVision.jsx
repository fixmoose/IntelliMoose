import './TeamVision.css';

const TeamVision = () => {
  return (
    <section className="team-vision">
      <h2 className="section-heading">Vision & Team</h2>
      <p className="section-subtitle">
        Building the infrastructure for AI in environments where cloud AI fails.
      </p>

      <div className="vision-statement glass-card highlight">
        <h3>Our Vision</h3>
        <p className="vision-text">
          <strong>By 2030, IntelliMoose will power 10 million edge AI devices</strong> across trades, security, logistics, defense, and healthcare.
        </p>
        <p className="vision-text">
          We believe AI should enhance human capability <em>without</em> surveillance capitalism. That expertise should be
          accessible instantly, even offline. That privacy is a feature, not a compromise.
        </p>
        <p className="vision-text">
          We're not building smart glasses. We're building the <strong>Stripe of Edge AI</strong>—a platform that any
          vertical can deploy to bring AI to environments where cloud solutions fail.
        </p>
      </div>

      <div className="founding-team">
        <h3>Founding Team</h3>
        <div className="team-grid">
          <div className="team-card glass-card">
            <div className="team-member-header">
              <div className="member-initials">DO</div>
              <div className="member-info">
                <h4>Dejan Obradovic</h4>
                <p className="member-title">Founder & CEO</p>
              </div>
            </div>
            <p className="member-bio">
              Serial entrepreneur and AI systems architect with deep expertise in edge computing and privacy-preserving AI.
              Previously built and scaled distributed systems at enterprise scale. Experienced electrician turned technologist—uniquely
              positioned to understand both the technical challenges of edge AI and the real-world needs of skilled professionals.
              Patent-pending innovations in offline LLM deployment and domain-specific RAG architectures. Passionate about building
              AI that enhances human capability without surveillance capitalism.
            </p>
            <div className="member-skills">
              <span>Edge AI</span>
              <span>Systems Architecture</span>
              <span>Product Strategy</span>
              <span>Hardware/Software Integration</span>
            </div>
          </div>

          <div className="team-card glass-card recruiting">
            <div className="recruiting-badge">HIRING</div>
            <h4>Head of Hardware Engineering</h4>
            <p>Lead hardware design, supply chain, manufacturing partnerships. Ideal: experience shipping consumer electronics at scale.</p>
          </div>

          <div className="team-card glass-card recruiting">
            <div className="recruiting-badge">HIRING</div>
            <h4>Head of AI/ML</h4>
            <p>Optimize edge inference, model compression, RAG pipelines. Ideal: background in on-device AI (Apple, Qualcomm, etc.).</p>
          </div>

          <div className="team-card glass-card recruiting">
            <div className="recruiting-badge">HIRING</div>
            <h4>Head of Sales (Enterprise)</h4>
            <p>Build enterprise GTM for fleet, defense, healthcare editions. Ideal: B2B SaaS/hardware sales experience, government contracts.</p>
          </div>
        </div>
      </div>

      <div className="advisors glass-card">
        <h3>Advisors & Supporters</h3>
        <p className="advisors-intro">
          We're building relationships with domain experts in AI, hardware, and our target verticals who bring
          deep technical expertise and industry credibility to the platform.
        </p>
        <div className="advisor-grid">
          <div className="advisor-card glass-card">
            <div className="advisor-header">
              <div className="advisor-initials">GC</div>
              <div className="advisor-info">
                <h4>Gifford Calenda</h4>
                <p className="advisor-title">Industry Advisor - Hardware & GUI Engineering</p>
              </div>
            </div>
            <p className="advisor-bio">
              Former Apple engineer with extensive experience in GUI design and hardware-software integration.
              Expert in user interface design for embedded systems and consumer electronics. Brings deep knowledge
              of manufacturing processes, supply chain management, and quality control from his tenure at one of
              the world's most demanding hardware companies. Advising on industrial design, user experience for
              heads-up displays, and scalable manufacturing strategies.
            </p>
            <div className="advisor-expertise">
              <span>GUI Engineering</span>
              <span>Hardware Design</span>
              <span>Apple Ecosystem</span>
              <span>Manufacturing</span>
            </div>
          </div>

          <div className="advisor-cat">
            <h5>🤖 AI/ML Advisors</h5>
            <p>[Recruiting - targeting ex-Meta/OpenAI researchers focused on edge AI and model compression]</p>
          </div>
          <div className="advisor-cat">
            <h5>🔧 Trade Industry Advisors</h5>
            <p>[Recruiting - targeting master electricians, HVAC specialists, and trade organization leaders]</p>
          </div>
          <div className="advisor-cat">
            <h5>💼 Investor Network</h5>
            <p>[In discussions with AI-focused seed funds and hardware-experienced angels]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamVision;
