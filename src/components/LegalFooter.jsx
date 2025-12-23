import { Link } from 'react-router-dom';
import './LegalFooter.css';

const LegalFooter = () => {
  return (
    <footer className="legal-footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <span className="footer-separator">•</span>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <span className="footer-separator">•</span>
          <a href="mailto:invest@intellimoose.com" className="footer-link">Contact</a>
        </div>

        <div className="footer-copyright">
          <p>© 2025 IntelliMoose. All rights reserved.</p>
          <p className="footer-disclaimer-brief">
            This site is for informational purposes only. See <Link to="/terms" className="footer-link-inline">Terms</Link> for investment disclaimers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
