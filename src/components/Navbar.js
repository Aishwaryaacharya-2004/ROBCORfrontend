import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ["Home", "Events", "Sponsors", "About", "Certificate"];

  const handleNavClick = (id) => {
    const lowerId = id.toLowerCase();
    setMenuOpen(false);

    if (lowerId === "certificate") {
      navigate("/certificate");
    } else {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: lowerId } });
      } else {
        const el = document.getElementById(lowerId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay ensures DOM is ready
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <nav className="navbar" role="navigation">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {/* Desktop Navigation */}
      {!menuOpen && (
        <ul className="nav-links">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleNavClick(item)}
                className="nav-button"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="overlay"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dfli7mciv/image/upload/v1747155680/image_w4iog5.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <ul className="overlay-menu">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <button
                  className="btn neon-btn"
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
