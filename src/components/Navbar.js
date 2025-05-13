import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
//import menuBg from "../assets/demo.jpg";
import logo from "../assets/Logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ["Home", "Events", "Sponsors", "About", "Contacts"];

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <nav className="navbar" role="navigation">
      <div className="logo">
  <img src={logo} alt="Logo" className="logo-img" />
</div>

      {/* Desktop Nav - Only show when menu is NOT open */}
      {!menuOpen && (
        <ul className="nav-links">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                onClick={() => handleNavClick(item.toLowerCase())}
                className="nav-button"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu Toggle"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="overlay"
          style={{ backgroundImage: `url("https://res.cloudinary.com/dfli7mciv/image/upload/v1747155680/image_w4iog5.jpg")` }}
        >
          <div>
            <ul className="overlay-menu">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  className="btn neon-btn"
                  onClick={() => handleNavClick(item.toLowerCase())}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
