import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import whatsapp from '../assets/whatsapp.png'; 

const Footer = () => (
  <footer className="text-white pt-5 pb-3" style={{ backgroundColor: '#111', borderTop: '5px solid #FFFF00' }}>
    <div className="container">
      <div className="row text-center text-md-start">
        {/* About */}
        <div className="col-12 col-md-4 mb-4">
          <h5 className="text-uppercase mb-3" style={{ borderBottom: '2px solid #FFFF00', display: 'inline-block' }}>
            CORSIT
          </h5>
          <p className="small" style={{ fontFamily: 'Poppins' }}>
            Corsit is the Robotics Club of Siddaganga Institute of Technology. Established in 2006, works under the
            patronage of e-Yantra cell of IIT Bombay.
          </p>
          <div
            className="d-flex gap-3 justify-content-center justify-content-md-start mt-3 fs-5"
            style={{ fontFamily: 'Poppins' }}
          >
            <a href="https://www.facebook.com/thecorsit" className="text-warning">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/corsit.sit/" className="text-warning">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/corsit" className="text-warning">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-12 col-md-4 mb-4">
          <h5 className="text-uppercase mb-3" style={{ borderBottom: '2px solid #FFFF00', display: 'inline-block' }}>
            Quick Links
          </h5>
          <ul className="list-unstyled" style={{ fontFamily: 'Poppins' }}>
            <li>
              <a href="#home" className="text-white text-decoration-none">Home</a>
            </li>
            <li>
              <a href="#events" className="text-white text-decoration-none">Events</a>
            </li>
            <li>
              <a href="https://www.corsit.in" className="text-white text-decoration-none" target="_blank" rel="noreferrer">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white text-decoration-none">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-12 col-md-4 mb-4">
          <h5 className="text-uppercase mb-3" style={{ borderBottom: '2px solid #FFFF00', display: 'inline-block' }}>
            Contact
          </h5>
          <ul className="list-unstyled small" style={{ fontFamily: 'Poppins' }}>
            <li className="mb-2">
              <i className="fas fa-map-marker-alt me-2 text-warning"></i>
              Siddaganga Institute of Technology, Tumkur, Karnataka
            </li>
             <li>
              <i className="fas fa-envelope me-2 text-warning"></i>
              <a href="mailto:corsit@sit.ac.in" className="text-white text-decoration-none">corsit@sit.ac.in</a>
            </li>
            <li>
              <i className="fas fa-globe me-2 text-warning"></i>
              <a href="https://www.corsit.in" className="text-white text-decoration-none" target="_blank" rel="noreferrer">
                www.corsit.in
              </a>
            </li>

            {/* WhatsApp Contacts */}
            <li className="mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div style={{ fontSize: '1.1rem', fontFamily: 'Popins' }} className="gradient-text">Jatin Sharma</div>
                  <div>Chairman</div>
                </div>
                <a
                  href="https://wa.me/+918104882160"
                  target="_blank"
                  rel="noreferrer"
                  className="social-media-link w-inline-block"
                >
                  <img
                    src={whatsapp}
                    style={{ width: '2.5rem' }}
                    loading="lazy"
                    alt="WhatsApp"
                    className="social-media-icon"
                  />
                </a>
              </div>
            </li>
            

            <li className="mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div style={{ fontSize: '1.1rem', fontFamily: 'Popins' }} className="gradient-text">Ujjwal Singh</div>
                  <div>Vice Chairman</div>
                </div>
                <a
                  href="https://wa.me/+919871324902"
                  target="_blank"
                  rel="noreferrer"
                  className="social-media-link w-inline-block"
                >
                  <img
                    src={whatsapp}
                    style={{ width: '2.5rem' }}
                    loading="lazy"
                    alt="WhatsApp Ashish"
                    className="social-media-icon"
                  />
                </a>
              </div>
            </li>

           
          </ul>
        </div>
      </div>
      <hr className="border-secondary" />
      <p className="text-center small mb-0" style={{ fontFamily: 'Poppins' }}>
        &copy; 2025 Robocor. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
