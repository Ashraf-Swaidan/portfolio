import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectDetails from './components/ProjectDetails';
import PapionProjectPage from './components/PapionProjectPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/papion" element={<PapionProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
