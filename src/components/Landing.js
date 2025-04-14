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
import MouseParticles from "react-mouse-particles";

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

      {/* Landing Page */}
      <section
        id="landing"
        className="landing-section d-flex justify-content-center align-items-center text-white text-center"
        style={{
          height: "100vh",
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <div className="cyber-text">
          <h1 className="display-3 fw-bold glitch" data-text="Cyber Realm">Cyber Realm</h1>
          <p className="lead">Enter the future now...</p>
        </div>

        {/* Futuristic HUD Overlay */}
        <svg className="hud-overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 90,10 10,10" className="hud-line" />
          <polygon points="0,100 100,100 90,90 10,90" className="hud-line" />
          <line x1="0" y1="0" x2="100" y2="100" className="hud-line" />
          <line x1="100" y1="0" x2="0" y2="100" className="hud-line" />
        </svg>
      </section>

      {/* Events Cards Section */}
      <section
        id="register"
        className={`content-section container py-5 ${isScrolled ? "fade-in" : ""}`}
        style={{
          background: 'linear-gradient(135deg, #242f54, #ff0088)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <h2 className="text-center mb-5 neon-text">Our Events</h2>
        <div className="row g-4">
          {[...[
            {
              title: "Bytewars",
              img: bytewarsImg,
              about: "Competitive coding battle for sharp minds.",
              date: "10:30 AM",
              venue: "TEL 101",
              route: "/register/bytewars"
            },
            {
              title: "Droid Race",
              img: droidraceImg,
              about: "Code sprints that push your logic to the limit.",
              date: "12:00 PM",
              venue: "Lab 203",
              route: "/register/droidrace"
            },
            {
              title: "Droid Kick",
              img: droidkickImg,
              about: "Design stunning interfaces in a cyber world.",
              date: "11:00 AM",
              venue: "Room B-4",
              route: "/register/droidkick"
            },
            {
              title: "Project Symposium",
              img: projectSymposiumImg,
              about: "24hr hackathon – build your future, neon-style.",
              date: "Starts 6 PM",
              venue: "Cyber Lab",
              route: "/register/projectsymposium"
            },
            {
              title: "Quiz",
              img: quizImg,
              about: "Explore blockchain and decentralized apps.",
              date: "2:00 PM",
              venue: "Hall A",
              route: "/register/quiz"
            },
            {
              title: "Starcrawl",
              img: starcrawlImg,
              about: "Showcase your bots in battle.",
              date: "4:00 PM",
              venue: "Mech Arena",
              route: "/register/starcrawl"
            },
            {
              title: "Star Link",
              img: starlinkImg,
              about: "Challenge your tech knowledge in a quiz war.",
              date: "3:00 PM",
              venue: "Room D-2",
              route: "/register/starlink"
            }
          ]].map((event, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 cyber-card text-light shadow">
                <img
                  src={event.img}
                  className="card-img-top"
                  alt={event.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title neon-text">{event.title}</h5>
                    <p className="card-text">{event.about}</p>
                    <p><strong>Time:</strong> {event.date}</p>
                    <p><strong>Venue:</strong> {event.venue}</p>
                  </div>
                  <a href={event.route} className="btn btn-outline-light mt-3 cyber-button">Register</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Landing;
