import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VoiceMoosePage from './pages/VoiceMoosePage';
import SnapMoosePage from './pages/SnapMoosePage';
import EyeMoosePage from './pages/EyeMoosePage';
import PlatformPage from './pages/PlatformPage';
import InvestorPitchPage from './pages/InvestorPitchPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import PatentStrategyPage from './pages/PatentStrategyPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/voicemoose" element={<VoiceMoosePage />} />
          <Route path="/snapmoose" element={<SnapMoosePage />} />
          <Route path="/eyemoose" element={<EyeMoosePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/pitch" element={<InvestorPitchPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/patent-strategy" element={<PatentStrategyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
