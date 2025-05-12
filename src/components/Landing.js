import React, { useEffect, useState } from "react";
import "./Landing.css";
import backgroundImg from '../assets/demo.jpg';
import bytewarsImg from '../assets/compressed/bytewars.jpg';
import droidkickImg from '../assets/compressed/droidkick.jpg';
import droidraceImg from '../assets/compressed/droidrace.jpg';
import projectSymposiumImg from '../assets/compressed/projectSymposium.jpg';
import quizImg from '../assets/compressed/quiz.jpg';
import starcrawlImg from '../assets/compressed/starcrawl.jpg';
import starlinkImg from '../assets/compressed/starlink.jpg';
import Aboutimg  from '../assets/compressed/IMAGE1.jpg';
import MouseParticles from "react-mouse-particles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import { Container, Row, Col } from "react-bootstrap";
import robotImg from '../assets/character1.png';
import characterMob from '../assets/charactermob.png'; // adjust the path based on your file location




import Slider from "react-slick";

import sponsor1 from '../assets/compressed/sponsor1.png';
import sponsor2 from '../assets/compressed/sponsor2.jpg';
import sponsor3 from '../assets/compressed/sponsor3.png';
import sponsor4 from '../assets/compressed/sponsor4.jpeg';
import sponsor5 from '../assets/compressed/sponsor5.jpeg';
import sponsor6 from '../assets/compressed/sponsor6.jpeg';
import sponsor7 from '../assets/compressed/sponsor7.jpeg';


const Landing = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  

  return (
    <>
      {/* Mouse Particles - Cyberpunk Style */}
      <MouseParticles
        g={2}
        color="random"
        cull="MuiSvgIcon-root"
        level={10}
        shape="circle"
        size="small"
        force={2}
        opacity={0.6}
        style={{
          zIndex: 2,
        }}
      />

<>
  {/* Desktop/Tablet Landing Section */}
  <section id="landing" className="desktop-landing" style={{ position: 'relative', overflow: 'hidden' }}>
    {/* Top Half with Image and Black Overlay */}
    <div
      className="landing-top"
      style={{
        height: '70vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        filter: 'grayscale(100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '5%',
        color: 'white',
        textAlign: 'left',
      }}
    >
      <section className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center" style={{ paddingLeft: '3rem' }}>
          <motion.div
            initial={{ y: '-100vh' }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <h1 className="fw-bold display-1 mb-2" style={{ color: 'yellow', letterSpacing: '2px' }}>ROBOCOR'25</h1>
            <h4 className="fw-semibold mb-4" style={{ color: 'yellow', letterSpacing: '1px' }}>Rewriting the code of combat</h4>
          </motion.div>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fw-bold display-4"
          >
            <ReactTyped
              strings={["May 22nd"]}
              typeSpeed={30}
              backSpeed={50}
              loop
              style={{ color: 'yellow',letterSpacing:'1.5px' }}
            />
          </motion.div>
        </div>
      </section>
    </div>

    {/* Bottom Half with Yellow Background */}
    <div
      className="landing-bottom"
      style={{
        height: '30vh',
        backgroundColor: '#FFFF00',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 5%',
        position: 'relative',
      }}
    >
      <img
        src={robotImg}
        alt="Robot"
        style={{
          position: 'absolute',
          top: '-80px',
          right: '20%',
          transform: 'translateY(-50%) rotateX(5deg) rotateY(-10deg)',
          width: '250px',
          zIndex: 2,
          filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.6))',
          transition: 'transform 0.3s ease-in-out',
        }}
      />
    </div>
  </section>

  {/* Mobile Landing Section */}
<section id="mobile-landing" className="mobile-landing">
  <style>
    {`
     
      @media (min-width: 768px) {
        .mobile-landing { display: none; }
        .desktop-landing { display: block; }
      }

      @media (max-width: 768px) {
        .mobile-landing {
          display: block;
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          font-family: 'Cyberpunk', sans-serif;
        }

        .desktop-landing { display: none; }

        .mobile-landing::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${backgroundImg});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: grayscale(100%);
          z-index: 0;
        }

        .mobile-landing::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #FFFF00 50%, #000 50%);
          opacity: 0.85;
          z-index: 1;
        }

        .hero-text-mobile {
          position: absolute;
          top: 20%;
          left: 10%;
          transform: translate(0, -50%);
          text-align: left;
          color: #000;
          z-index: 2;
          width: 80%;
        }

        .hero-text-mobile h1 {
          font-size: 2.2rem;
          font-weight: bold;
          margin-bottom: 0.4rem;
          letter-spacing: 2px;
        }

        .hero-text-mobile h4 {
          font-size: 1.1rem;
          margin-bottom: 0.6rem;
          letter-spacing: 1px;
        }

        .typed-mobile {
          font-size: 1.1rem;
          font-weight: bold;
          letter-spacing: 1.5px; 
        }

        .center-card {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          border-radius: 1rem;
          overflow: hidden;
          z-index: 3;
          border: 5px solid white;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
        }

        .center-card img {
          width: 100%;
          display: block;
        }
      }
    `}
  </style>

  {/* Hero Text in Yellow Section */}
  <motion.div
    className="hero-text-mobile"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.9 }}
  >
    <h1>ROBOCOR'25</h1>
    <h4>Rewriting the code of combat</h4>
    <div className="typed-mobile">
      <ReactTyped
        strings={["May 22nd"]}
        typeSpeed={30}
        backSpeed={50}
        loop
      />
    </div>
  </motion.div>

  {/* Centered Character Image Across Yellow/Black Border */}
  <div className="center-card">
    <img src={characterMob} alt="Hero" />
  </div>
</section>

</>




      {/* Events Cards Section */}
      <section
       id="events"
        className={`content-section container py-5 ${isScrolled ? "fade-in" : ""}`}
        style={{
          background: '#FFFF00',
          color: 'white',
          padding: '50px',
          borderRadius: '10px',
        }}>
  

  {/* Overlayed Cyberpunk City Image */}
 
     <h1 className="section-title">Our Events</h1>



        <div className="row g-4 cyber-container">
  {[
    {
      title: "Binary Duels",
      img: bytewarsImg,
      about: "Competitive coding battle for sharp minds.",
      date: "10:30 AM",
      venue: "TEL 101",
      route: "/register/binaryduels"
    },
    {
      title: "Cyber Track",
      img: droidraceImg,
      about: "Race your innovation, follow the line, and conquer the track!",
      date: "12:00 PM",
      venue: "Lab 203",
      route: "/register/cybertrack"
    },
    {
      title: "Cyber Kick",
      img: droidkickImg,
      about: "Kick, score, and rule the field with your robotic soccer skills!",
      date: "11:00 AM",
      venue: "Room B-4",
      route: "/register/cyberkick"
    },
    {
      title: "Project Conclave",
      img: projectSymposiumImg,
      about: "Showcase your brilliance, innovate, and lead the future at Project Conclave!",
      date: "Starts 6 PM",
      venue: "Cyber Lab",
      route: "/register/projectconclave"
    },
    {
      title: "Nexus Quiz",
      img: quizImg,
      about: "Test your knowledge, challenge your mind, and emerge as the ultimate quiz champion!",
      date: "2:00 PM",
      venue: "Hall A",
      route: "/register/nexusquiz"
    },
    {
      title: "Neon Run",
      img: starcrawlImg,
      about: "Conquer the toughest terrains, endure the rugged race, and emerge victorious!",
      date: "4:00 PM",
      venue: "Mech Arena",
      route: "/register/neonrun"
    },
    {
      title: "Neon Maze",
      img: starlinkImg,
      about: "Navigate the glow, command with Bluetooth, and master the Neon Maze!",
      date: "3:00 PM",
      venue: "Room D-2",
      route: "/register/neonmaze"
    },
    {
      title: "Arduino Forge",
      img: projectSymposiumImg,
      about: "Debug, design, and dominate the circuit at Arduino Forge!",
      date: "3:00 PM",
      venue: "Room D-2",
      route: "/register/arduinoforge"
    },
    {
      title: "BGMI Punks",
      img: projectSymposiumImg,
      about: "Drop in, gear up, and battle your way to glory in BGMI Punks!",
      date: "3:00 PM",
      venue: "Room D-2",
      route: "/register/bgmipunks"
    }
  ].map((event, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="cyber-card-custom">
        <img
          src={event.img}
          alt={event.title}
          className="cyber-img"
        />
        <div className="cyber-card-body">
          <h5 className="neon-title">{event.title}</h5>
          <p>{event.about}</p>
         <p className="event-info"><strong>Time -</strong> {event.date}</p>
         <p className="event-info"><strong>Venue -</strong> {event.venue}</p>

          <Link to={event.route} className="cyber-button">Register</Link>
        </div>
      </div>
    </div>
  ))}
</div>
</section>
     
{/* About ROBOCOR Section */}
<section
  id="about"
  className="content-section container-fluid py-5"
  style={{
    background: 'black',
    color: '#FFFF00',
    padding: '40px',
    fontFamily:'Popins'

  }}
>
  <div className="container">
   <h2
  className="text-center mb-5"
  style={{
    color: 'yellow',
    fontFamily: "'Cyberpunk', sans-serif",
    fontSize: '3rem',
  }}
>
  About ROBOCOR
</h2>

    <div className="row align-items-center">
      <div className="col-md-6 mb-4 mb-md-0">
        <img
  src={Aboutimg}
  alt="ROBOCOR Robotics Competition"
  className="img-fluid rounded shadow"
  style={{
    borderLeft: '4px solid yellow',
    borderBottom: '4px solid yellow',
    borderTop: 'none',
    borderRight: 'none',
    borderRadius: '0.375rem' // To preserve the rounded class
  }}
/>

      </div>
      <div className="col-md-6">
        <p className="lead text-justify" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
          <strong>ROBOCOR</strong>, one of Karnataka's premier robotics competitions, is a nationally renowned event that brings together innovative minds from across the country.
          It serves as a platform for participants to showcase their creativity, technical expertise, and problem-solving skills while competing for glory.
  
        </p>
      </div>
    </div>
  </div>
</section>
{/* Sponsors Section - Carousel Style */}
<section
  id="sponsors"
  className="content-section container-fluid py-5"
  style={{
    background: '#FFFF00',
    color: 'white',
    padding: '40px',
    borderRadius: '10px',
  }}
>
  <div className="container text-center">
    <h2 className="section-title">Our Sponsors</h2>
    <Slider
  dots={true}
  infinite={true}
  speed={500}
  slidesToShow={3}
  slidesToScroll={1}
  autoplay={true}
  autoplaySpeed={2000}
  responsive={[
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ]}
>
  {[sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6,sponsor7].map((sponsor, index) => (
    <div key={index} className="px-3">
      <div className="p-3 bg-dark rounded shadow sponsor-carousel-card">
        <img
          src={sponsor}
          alt={`Sponsor ${index + 1}`}
          className="img-fluid"
          style={{
            maxHeight: "150px", // increased from 100px
            maxWidth: "100%",   // optional: ensures image doesn’t overflow
            margin: "0 auto",
            objectFit: "contain",
            display: "block",   // centers image
          }}
        />
      </div>
    </div>
  ))}
</Slider>

  </div>
</section>
</>
  );
};

export default Landing;
