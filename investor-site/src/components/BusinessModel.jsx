import './BusinessModel.css';

const BusinessModel = () => {
  return (
    <section className="business-model">
      <h2 className="section-heading">Business Model & Economics</h2>
      <p className="section-subtitle">
        One-time hardware sales with optional recurring revenue. High margins, capital-efficient growth.
      </p>

      <div className="revenue-model glass-card">
        <h3>Revenue Streams</h3>
        <div className="revenue-grid">
          <div className="revenue-stream primary-stream">
            <div className="stream-header">
              <h4>Primary: Hardware Sales</h4>
              <div className="revenue-badge">70-80% of revenue</div>
            </div>
            <div className="pricing-table">
              <div className="pricing-row">
                <span>IntelliMoose (Trades)</span>
                <span className="price">$699</span>
              </div>
              <div className="pricing-row">
                <span>HomeSentinel (Security)</span>
                <span className="price">$399</span>
              </div>
              <div className="pricing-row">
                <span>FleetBrain (Logistics)</span>
                <span className="price">$999</span>
              </div>
              <div className="pricing-row">
                <span>TacticalAI (Defense)</span>
                <span className="price">$3,000-10,000</span>
              </div>
            </div>
            <div className="unit-economics">
              <h5>Unit Economics (avg)</h5>
              <div className="economics-row">
                <span>COGS (hardware + assembly)</span>
                <span>$200-400</span>
              </div>
              <div className="economics-row gross-margin">
                <span>Gross Margin</span>
                <span>50-65%</span>
              </div>
            </div>
          </div>

          <div className="revenue-stream">
            <div className="stream-header">
              <h4>Secondary: Recurring Revenue</h4>
              <div className="revenue-badge optional">20-30% of revenue</div>
            </div>
            <ul className="recurring-list">
              <li><strong>Content Updates:</strong> $29-49/year for updated code books, manuals</li>
              <li><strong>Enterprise Support:</strong> $500-2,000/year for fleet management, priority support</li>
              <li><strong>Custom Training:</strong> One-time fees for custom AI models ($5K-50K)</li>
              <li><strong>API Access:</strong> Optional cloud sync for teams ($10/user/month)</li>
            </ul>
            <p className="recurring-note">
              <strong>Note:</strong> Recurring revenue is <em>optional</em>. Devices work fully offline forever. This prevents churn and builds goodwill.
            </p>
          </div>
        </div>
      </div>

      <div className="financial-projections glass-card highlight">
        <h3>5-Year Financial Projections</h3>
        <div className="projections-table">
          <div className="proj-row header-row">
            <div className="proj-cell">Year</div>
            <div className="proj-cell">Units Sold</div>
            <div className="proj-cell">Revenue</div>
            <div className="proj-cell">Gross Margin</div>
          </div>

          <div className="proj-row">
            <div className="proj-cell year">2027 (Year 1)</div>
            <div className="proj-cell">2,500</div>
            <div className="proj-cell revenue">$1.5M</div>
            <div className="proj-cell">50%</div>
          </div>

          <div className="proj-row">
            <div className="proj-cell year">2028 (Year 2)</div>
            <div className="proj-cell">15,000</div>
            <div className="proj-cell revenue">$10M</div>
            <div className="proj-cell">55%</div>
          </div>

          <div className="proj-row">
            <div className="proj-cell year">2029 (Year 3)</div>
            <div className="proj-cell">50,000</div>
            <div className="proj-cell revenue">$35M</div>
            <div className="proj-cell">58%</div>
          </div>

          <div className="proj-row">
            <div className="proj-cell year">2030 (Year 4)</div>
            <div className="proj-cell">150,000</div>
            <div className="proj-cell revenue">$105M</div>
            <div className="proj-cell">60%</div>
          </div>

          <div className="proj-row">
            <div className="proj-cell year">2031 (Year 5)</div>
            <div className="proj-cell">400,000</div>
            <div className="proj-cell revenue">$280M</div>
            <div className="proj-cell">62%</div>
          </div>
        </div>

        <div className="projection-notes">
          <p><strong>Assumptions:</strong></p>
          <ul>
            <li>Year 1: Trades edition only, pilot customers</li>
            <li>Year 2: HomeSentinel launches, 3 editions live</li>
            <li>Year 3: All 5 editions live, enterprise sales ramp</li>
            <li>Year 4-5: Market penetration accelerates, defense contracts close</li>
            <li>Average selling price: $700 (blended across editions)</li>
          </ul>
        </div>
      </div>

      <div className="gtm-strategy">
        <h3>Go-to-Market Strategy</h3>
        <div className="gtm-grid">
          <div className="gtm-card glass-card">
            <h4>Phase 1: Trades (2027)</h4>
            <ul>
              <li>Direct sales to electrical contractors</li>
              <li>Trade show demos (NAHB, AHR Expo)</li>
              <li>Partnerships with tool distributors (Home Depot Pro)</li>
              <li>Target: 2,500 units Year 1</li>
            </ul>
          </div>

          <div className="gtm-card glass-card">
            <h4>Phase 2: Consumer Security (2027-28)</h4>
            <ul>
              <li>Kickstarter campaign ($500K target)</li>
              <li>Amazon storefront (compete with Ring directly)</li>
              <li>Reddit/community marketing (r/homedefense, r/privacy)</li>
              <li>Target: 10,000 units Year 2</li>
            </ul>
          </div>

          <div className="gtm-card glass-card">
            <h4>Phase 3: Enterprise (2028+)</h4>
            <ul>
              <li>Fleet logistics: Direct sales to trucking companies</li>
              <li>Defense: Government contracts (SAM.gov)</li>
              <li>Healthcare: Hospital/EMS procurement</li>
              <li>Target: $50M+ annual revenue by Year 3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
