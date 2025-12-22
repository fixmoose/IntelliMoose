import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VoiceDocPage from './pages/VoiceDocPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/voicedoc" element={<VoiceDocPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
