import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VoiceDocPage from './pages/VoiceDocPage';
import CodeSnapPage from './pages/CodeSnapPage';
import SafetyEyePage from './pages/SafetyEyePage';
import PlatformPage from './pages/PlatformPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/voicedoc" element={<VoiceDocPage />} />
          <Route path="/codesnap" element={<CodeSnapPage />} />
          <Route path="/safetyeye" element={<SafetyEyePage />} />
          <Route path="/platform" element={<PlatformPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
