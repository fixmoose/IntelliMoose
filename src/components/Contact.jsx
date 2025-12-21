import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', interest: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="content">
        <h2 className="section-heading">
          Join The IntelliMoose Revolution
        </h2>

        <p className="contact-intro">
          We're seeking funding to bring IntelliMoose to market. This is more than a product—
          it's a new way of working that makes skilled trades safer, faster, and more accessible.
        </p>

        <div className="stats-grid">
          <div className="stat-card glass-card">
            <h3>$50B+</h3>
            <p>Market size for skilled trade tools and equipment</p>
          </div>

          <div className="stat-card glass-card">
            <h3>11M+</h3>
            <p>Electricians, HVAC techs, and contractors in US alone</p>
          </div>

          <div className="stat-card glass-card">
            <h3>30%</h3>
            <p>Time savings estimated from instant manual access</p>
          </div>
        </div>

        <div className="contact-form-wrapper glass-card">
          <h3>Express Your Interest</h3>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h4>Thank You!</h4>
              <p>We'll be in touch soon with updates on our progress.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">I'm interested as a...</option>
                  <option value="investor">Investor</option>
                  <option value="early-adopter">Early Adopter / Beta Tester</option>
                  <option value="distributor">Distributor / Retailer</option>
                  <option value="partner">Technology Partner</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your interest..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="glow-button submit-btn">
                <span>Submit Interest</span>
                <FaPaperPlane />
              </button>
            </form>
          )}
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>IntelliMoose™</h3>
              <p>Smart Glasses for Smart Trades</p>
              <p className="patent-info">Patent Pending • Technology in Development</p>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>info@intellimoose.com</p>
              <p>invest@intellimoose.com</p>
            </div>

            <div className="footer-section">
              <h4>Follow Development</h4>
              <p>@IntelliMoose</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 IntelliMoose. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
