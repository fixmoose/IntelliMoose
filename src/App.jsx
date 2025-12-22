import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvestorPage from './pages/InvestorPage';
import IntelliMoosePage from './pages/IntelliMoosePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvestorPage />} />
        <Route path="/intellimoose" element={<IntelliMoosePage />} />
      </Routes>
    </Router>
  );
}

export default App;
