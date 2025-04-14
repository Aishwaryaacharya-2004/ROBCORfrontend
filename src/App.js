import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Sponsors from './components/Sponsors';
import About from './components/About';
import RegisterBytewars from './pages/Register/Bytewars.js';
import RegisterDroidKick from './pages/Register/Droidkick.js';
import RegisterDroidRace from './pages/Register/Droidrace.js';
import RegisterProjectSymposium from './pages/Register/Projectsymposium.js';
import RegisterQuiz from './pages/Register/Quiz.js';
import RegisterStarCrawl from './pages/Register/Starcrawl.js';
import RegisterStarLink from './pages/Register/Starlink.js'; // Adjust path as needed
import './styles/Global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/about" element={<About />} />
        
        {/* Registration Routes */}
        <Route path="/register/bytewars" element={<RegisterBytewars />} />
        {/* Add other events similarly like: */}
         <Route path="/register/droidkick" element={<RegisterDroidKick />} /> 
         <Route path="/register/droidrace" element={<RegisterDroidRace />} />
         <Route path="/register/projectsymposium" element={<RegisterProjectSymposium />} />
         <Route path="/register/quiz" element={<RegisterQuiz />} />
         <Route path="/register/starcrawl" element={<RegisterStarCrawl />} />
         <Route path="/register/starlink" element={<RegisterStarLink />} />
      </Routes>
    </Router>
  );
};

export default App;
