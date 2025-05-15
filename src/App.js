import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import RegisterBinaryDuels from './pages/Register/BinaryDuels.js';
import RegisterCyberKick from './pages/Register/Cyberkick.js';
import RegisterCyberTrack from './pages/Register/Cybertrack.js';
import RegisterProjectConclave from './pages/Register/Projectconclave.js';
import RegisterNexusQuiz from './pages/Register/Nexusquiz.js';
import RegisterNeonRun from './pages/Register/Neonrun.js';
import RegisterNeonMaze from './pages/Register/Neonmaze.js';
import Registerarduinoforge from './pages/Register/ArduinoForge.js';
import RegisterBgmi from './pages/Register/Bgmipunks.js';
import Certificate from './pages/certificate/Certificate.js';
import PaymentSuccess from './components/Paymentsucess.js';
import NotFoundPage from './pages/Notfound.js';

import ReactGA from 'react-ga4';

ReactGA.initialize('G-HM7B4BL0YK'); 

ReactGA.send({ hitType: "pageview", page: window.location.pathname });



const App = () => {
  const homeRef = useRef();
  usePageTracking(); 

  return (
    <Router>
      <Navbar homeRef={homeRef} />
      <Routes>
        <Route path="/" element={<Landing homeRef={homeRef} />} />
        <Route path="/register/binaryduels" element={<RegisterBinaryDuels />} />
        <Route path="/register/cyberkick" element={<RegisterCyberKick />} /> 
        <Route path="/register/cybertrack" element={<RegisterCyberTrack />} />
        <Route path="/register/projectconclave" element={<RegisterProjectConclave />} />
        <Route path="/register/nexusquiz" element={<RegisterNexusQuiz />} />
        <Route path="/register/neonrun" element={<RegisterNeonRun />} />
        <Route path="/register/neonmaze" element={<RegisterNeonMaze />} />
        <Route path="/register/arduinoforge" element={<Registerarduinoforge />} />
        <Route path="/register/bgmipunks" element={<RegisterBgmi />} />
        <Route path="/certificate/certificate" element={<Certificate />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <div id="contacts">
        <Footer />
      </div>
    </Router>
  );
};

export default App;
