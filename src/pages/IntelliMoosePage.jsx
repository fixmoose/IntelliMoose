import '../App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import CompatibleDevices from '../components/CompatibleDevices';
import Features from '../components/Features';
import TeamFeatures from '../components/TeamFeatures';
import AdvancedFeatures from '../components/AdvancedFeatures';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import Contact from '../components/Contact';

function IntelliMoosePage() {
  return (
    <div className="app">
      <div className="animated-bg"></div>
      <div className="grid-overlay"></div>
      <Navbar />
      <div className="content">
        <Hero />
        <CompatibleDevices />
        <ProductShowcase />
        <Features />
        <TeamFeatures />
        <AdvancedFeatures />
        <HowItWorks />
        <UseCases />
        <Contact />
      </div>
    </div>
  );
}

export default IntelliMoosePage;
