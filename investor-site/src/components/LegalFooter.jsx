import './LegalFooter.css';

const LegalFooter = () => {
  const openDocument = (docPath) => {
    window.open(docPath, '_blank');
  };

  return (
    <footer className="legal-footer">
      <div className="footer-content">
        <div className="footer-warning">
          <h4>⚠️ Important Legal Information</h4>
          <p>
            This investor portal contains confidential information intended solely for accredited investors and qualified parties.
            By accessing this site, you agree to maintain confidentiality and acknowledge that investments in early-stage companies
            involve substantial risk, including the potential loss of your entire investment.
          </p>
        </div>

        <div className="footer-documents">
          <h5>Legal Documents & Disclosures</h5>
          <div className="document-links">
            <button
              className="doc-link"
              onClick={() => openDocument('/INVESTMENT_RISKS.md')}
            >
              📋 Investment Risk Disclosures
            </button>
            <button
              className="doc-link"
              onClick={() => openDocument('/PRIVACY_POLICY.md')}
            >
              🔒 Privacy Policy
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

        <div className="footer-disclaimers">
          <div className="disclaimer-item">
            <strong>No Offer or Solicitation:</strong> This site does not constitute an offer to sell or a solicitation
            of an offer to buy securities. Any such offer will be made only through definitive offering documents.
          </div>
          <div className="disclaimer-item">
            <strong>Forward-Looking Statements:</strong> Projections and estimates are speculative and involve risks and
            uncertainties. Actual results may differ materially. See Risk Disclosures for details.
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
            investments are illiquid and high-risk. Expect to hold for 7-10+ years with risk of total loss.
          </div>
          <div className="disclaimer-item">
            <strong>Independent Advice Required:</strong> Consult with your own legal, tax, and financial advisors before
            making any investment decision. Do not rely solely on information provided here.
          </div>
        </div>

        <div className="footer-domains">
          <h5>🌐 Secure Your Domains</h5>
          <p className="domains-note">
            <strong>intellimoose.com</strong> and <strong>intellimoose.ai</strong> are currently available.
            We recommend securing these domains immediately upon incorporation to protect the brand and establish
            online presence. Estimated cost: $20-50/year per domain.
          </p>
        </div>

        <div className="footer-bottom">
          <p>© 2025 IntelliMoose. Patent Pending. All Rights Reserved.</p>
          <p className="footer-status">
            <strong>Status:</strong> Pre-Incorporation | Delaware C-Corp Formation Pending
          </p>
          <p className="footer-contact">
            <strong>Contact:</strong> Dejan Obradovic | invest@intellimoose.ai
          </p>
          <p className="footer-version">
            Site Version 1.0 | Last Updated: December 21, 2025 | For Private Distribution Only
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
