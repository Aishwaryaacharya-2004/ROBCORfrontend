import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import our custom styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top cyberpunk-topbar">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold neon-text" href="#landing">ROBOCOR</a>
          <button className="navbar-toggler" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="cyberpunk-sidebar">
          <a className="neon-button" href="#landing" onClick={closeMenu}>Home</a>
          <a className="neon-button" href="#events" onClick={closeMenu}>Events</a>
          <a className="neon-button" href="#sponsors" onClick={closeMenu}>Sponsors</a>
          <a className="neon-button" href="#footer" onClick={closeMenu}>About</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
