import '../App.css';
import Hero from '../components/InvestorHero';
import MarketOpportunity from '../components/MarketOpportunity';
import PlatformEditions from '../components/PlatformEditions';
import CompetitiveLandscape from '../components/CompetitiveLandscape';
import TechArchitecture from '../components/TechArchitecture';
import BusinessModel from '../components/BusinessModel';
import PatentStrategy from '../components/PatentStrategy';
import Roadmap from '../components/Roadmap';
import TeamVision from '../components/TeamVision';
import Investment from '../components/Investment';
import LegalFooter from '../components/LegalFooter';

function InvestorPage() {
  return (
    <div className="app">
      <div className="animated-bg"></div>
      <div className="grid-overlay"></div>
      <div className="content">
        <Hero />
        <MarketOpportunity />
        <PlatformEditions />
        <CompetitiveLandscape />
        <TechArchitecture />
        <BusinessModel />
        <PatentStrategy />
        <Roadmap />
        <TeamVision />
        <Investment />
      </div>
      <LegalFooter />
    </div>
  );
}

export default InvestorPage;
