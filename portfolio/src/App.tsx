import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TwodoDetailsPage from './components/TwodoDetailsPage';
import PapionProjectPage from './components/PapionProjectPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/twodo" element={<TwodoDetailsPage />} />
          <Route path="/papion" element={<PapionProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
