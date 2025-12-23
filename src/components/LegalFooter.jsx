import { Link } from 'react-router-dom';
import './LegalFooter.css';

const LegalFooter = () => {
  const openDocument = (docPath) => {
    window.open(docPath, '_blank');
  };

  return (
    <footer className="legal-footer">
      <div className="footer-table">
        <table className="footer-table-structure">
          <tbody>
            <tr className="footer-row">
              <td className="footer-cell">
                <div className="footer-warning" style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(245, 158, 11, 0.15))', border: '2px solid #ef4444' }}>
                  <h4 style={{ color: '#ef4444' }}>⚠️ CRITICAL INVESTOR DISCLAIMER ⚠️</h4>
                  <p>
                    <strong style={{ color: '#ef4444' }}>DEJAN OBRADOVIC IS NOT PERSONALLY LIABLE FOR ANY INVESTMENT LOSSES OR COMPANY OBLIGATIONS.</strong>
                    <br /><br />
                    This site is for informational purposes only and does NOT constitute an offer to sell securities.
                    All financial projections are forward-looking statements that may not materialize. Investing in startups carries EXTREME RISK—you may lose your entire investment.
                    <br /><br />
                    By viewing this site, you acknowledge that you are an accredited investor, have conducted independent due diligence,
                    and WAIVE ANY CLAIMS against Dejan Obradovic personally. You agree to binding arbitration and waive jury trial rights.
                    <br /><br />
                    <strong>READ THE FULL <Link to="/terms" style={{ color: '#ef4444', textDecoration: 'underline' }}>TERMS OF SERVICE</Link> BEFORE PROCEEDING.</strong>
                  </p>
                </div>
              </td>
            </tr>

            <tr className="footer-row">
              <td className="footer-cell">
                <div className="footer-documents">
                  <h5>Legal Documents & Disclosures</h5>
                  <div className="document-links">
                    <Link to="/privacy" className="doc-link" style={{ textDecoration: 'none' }}>
                      🔒 Privacy Policy
                    </Link>
                    <Link to="/terms" className="doc-link" style={{ textDecoration: 'none' }}>
                      📜 Terms of Service
                    </Link>
                    <button
                      className="doc-link"
                      onClick={() => openDocument('/INVESTMENT_RISKS.md')}
                    >
                      📋 Investment Risk Disclosures
                    </button>
                    <button
                      className="doc-link"
                      onClick={() => openDocument('/PATENT_STRATEGY.md')}
                    >
                      🛡️ Patent Strategy Document
                    </button>
                    <button
                      className="doc-link"
                      onClick={() => openDocument('/MARKET_EXPANSION_STRATEGY.md')}
                    >
                      📊 Market Expansion Strategy
                    </button>
                    <button
                      className="doc-link"
                      onClick={() => openDocument('/COMPETITIVE_STRATEGY.md')}
                    >
                      🎯 Competitive Strategy
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="footer-row">
              <td className="footer-cell">
                <div className="footer-disclaimers">
                  <div className="disclaimer-item" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '1rem', borderRadius: '8px' }}>
                    <strong style={{ color: '#ef4444' }}>🛡️ NO PERSONAL LIABILITY FOR DEJAN OBRADOVIC:</strong> Dejan Obradovic, individually, is NOT personally liable for any debts, obligations, losses, or damages arising from IntelliMoose, Inc. or from any investments made in the company. All claims must be brought against the corporate entity, not Dejan Obradovic personally. By viewing this site, you WAIVE any right to pursue personal liability claims against Dejan Obradovic.
                  </div>
                  <div className="disclaimer-item">
                    <strong>No Offer or Solicitation:</strong> This site does not constitute an offer to sell or a solicitation
                    of an offer to buy securities. Any such offer will be made only through definitive offering documents.
                  </div>
                  <div className="disclaimer-item">
                    <strong>Forward-Looking Statements:</strong> Projections and estimates are speculative and involve risks and
                    uncertainties. Actual results may differ materially. IntelliMoose and Dejan Obradovic make NO GUARANTEES regarding financial performance, exit valuations, or timelines presented.
                  </div>
                  <div className="disclaimer-item">
                    <strong>Confidential & Proprietary:</strong> All information on this site is confidential and proprietary to
                    IntelliMoose. Do not share, copy, or distribute without written permission.
                  </div>
                  <div className="disclaimer-item">
                    <strong>Accredited Investors Only:</strong> Offerings will be limited to accredited investors as defined under
                    Regulation D of the Securities Act of 1933. Verification may be required.
                  </div>
                  <div className="disclaimer-item">
                    <strong>No Guarantee of Return:</strong> There is no guarantee of profit or return on investment. Early-stage
                    investments are illiquid and high-risk. Expect to hold for 7-10+ years with risk of total loss. Most startups fail.
                  </div>
                  <div className="disclaimer-item">
                    <strong>Independent Advice Required:</strong> Consult with your own legal, tax, and financial advisors before
                    making any investment decision. Do not rely solely on information provided here. This is NOT investment advice.
                  </div>
                  <div className="disclaimer-item" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid #f59e0b', padding: '1rem', borderRadius: '8px' }}>
                    <strong style={{ color: '#f59e0b' }}>⚖️ BINDING ARBITRATION & CLASS ACTION WAIVER:</strong> Any disputes arising from this site or investments in IntelliMoose must be resolved through binding arbitration under AAA rules. You WAIVE any right to jury trial or class action participation. See full <Link to="/terms" style={{ color: '#f59e0b', textDecoration: 'underline' }}>Terms of Service</Link> for details.
                  </div>
                </div>
              </td>
            </tr>

            <tr className="footer-row">
              <td className="footer-cell">
                <div className="footer-domains">
                  <h5>🌐 Secure Your Domains</h5>
                  <p className="domains-note">
                    <strong>intellimoose.com</strong> has been secured. We recommend also acquiring <strong>intellimoose.ai</strong> to protect
                    the brand across AI-focused domain extensions. Estimated cost: $20-50/year per domain.
                  </p>
                </div>
              </td>
            </tr>

            <tr className="footer-row">
              <td className="footer-cell">
                <div className="footer-bottom">
                  <p>© 2025 IntelliMoose. Patent Pending. All Rights Reserved.</p>
                  <p className="footer-status">
                    <strong>Status:</strong> Pre-Incorporation | Delaware C-Corp Formation Pending
                  </p>
                  <p className="footer-contact">
                    <strong>Contact:</strong> Dejan Obradovic | invest@intellimoose.com
                  </p>
                  <p className="footer-version">
                    Site Version 1.0 | Last Updated: December 21, 2025 | For Private Distribution Only
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
};

export default LegalFooter;
