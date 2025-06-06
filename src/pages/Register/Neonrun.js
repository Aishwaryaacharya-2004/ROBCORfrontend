import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import './register.css';
import starcrawl from '../../assets/compressed/starcrawl.jpg';
import rulebook from '../../assets/rulebook.pdf';
import character6 from '../../assets/compressed/character6.jpg';
import backgroundImg from '../../assets/demo.jpg';
import Loading from '../../components/Loading.js';

export const eventRules = {
  "Binary Duels": { min: 1, max: 2 },
  "Arduino Forge": { min: 1, max: 3 },
  "Cyber Track": { min: 1, max: 4 },
  "Neon Maze": { min: 1, max: 4 },
  "Project Conclave": { min: 1, max: 4 },
  "Cyber Kick": { min: 1, max: 4 },
  "Nexus Quiz":{min:1,max:1},
  "Neon Run":{min:1,max:4},
  "BGMI Punks":{min:1,max:4},
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;
//const usnRegex = /^[1-9][A-Z]{2}\d{2}[A-Z]{2}\d{3}$/i;


const Register = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [iframe, setIframe] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("Neon Run"); // default for demo
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [registrationClosed, setRegistrationClosed] = useState(false); // toggle manually if needed
  const [animateImage, setAnimateImage] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  
  
  useEffect(() => {
    setAnimateImage(true);
  }, []);

  useEffect(() => {
    const { min } = eventRules[selectedEvent];
    setFormData(Array.from({ length: min }, () => ({ name: "", email: "", usn: "", phone: "" })));
  }, [selectedEvent]);

  useEffect(() => {
          const isValid = formData.every(
            (p) =>
              p.name.trim() !== "" &&
              emailRegex.test(p.email) &&
              phoneRegex.test(p.phone)
          );
          setValidForm(isValid);
        }, [formData]);

  const handleChange = (index, e) => {
    const newFormData = [...formData];
    newFormData[index][e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const handleAddMember = () => {
    const { max } = eventRules[selectedEvent];
    if (formData.length < max) {
      setFormData([...formData, { name: "", email: "", usn: "", phone: "" }]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post("https://robcorbackend-5.onrender.com/api/register", {
        event: selectedEvent,
        members: formData,
      }, { withCredentials: true });

      setSuccess("Successfully registered!");
      setTimeout(() => setClicked(true), 1500); // Proceed to checkout
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleProceedClick = () => {
    setShowRegistrationForm(true);
  };
  if (loading) {
  return <Loading />;
}

  if (registrationClosed) {
    return (
      <div className="cyber-bg d-flex flex-column justify-content-center align-items-center vh-100 text-center text-light">
        <h1 className="neon-text">Online registrations closed</h1>
        <p className="mt-3">On-spot Registrations at Media Centre</p>
      </div>
    );
  }

  // Payment iframe page
  if (clicked) {
    return (
       <>
      {!iframeLoaded && <Loading />}
      <iframe
        onLoad={() => setIframeLoaded(true)}
        width="100%"
        height="100%"
        style={{
          display: iframeLoaded ? 'block' : 'none',
          border: 'none',
          minHeight: "100vh"
        }}
         src="https://www.yepdesk.com/embed/buy-tickets/68233c22c9e77c0001f176d9/private/ibb7lpvvb9"
        />
      </>
    );
  }

  // Registration form page
  if (showRegistrationForm) {
    return (
      <div className="cyber-bg cyber-content-wrapper">
        <style>
          {`
            .cyber-bg::before {
              background-image: url(${backgroundImg});
            }
      
            @media (max-width: 768px) {
              .arc-character-img {
                max-width: 100%;
                height: auto;
                margin-bottom: 1rem;
              }
              .form-container {
                width: 100%;
                padding: 1rem;
              }
            }
      
            @media (min-width: 768px) {
              .arc-character-img {
                max-width: 300px;
              }
              .form-container {
                padding: 1rem;
              }
            }
          `}
        </style>
      
        <div className="cyber-content">
          <div className="cyber-card">
            {/* Flex layout switches based on screen width */}
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
              {/* Image section */}
              <div className="text-center" style={{ flex: 1, padding: '1rem' }}>
                <img
        src={character6}
        alt="Cyberpunk Character"
        className="arc-character-img event-image cyber-img"
      />
      
              </div>
      
              {/* Form section */}
              <div className="form-container" style={{ flex: 1 }}>
                <h1 className="mt-4">Neon Run</h1>
                <p className="arc-quote mt-4">
                  "Conquer the toughest terrains, endure the rugged race, and emerge victorious!"
                </p>
      
                <div className="arc-form-card mt-4">
                  {error && <Alert variant="danger">{error}</Alert>}
                  {success && <Alert variant="success">{success}</Alert>}
      
                  <Form onSubmit={handleSubmit}>
                    {formData.map((participant, index) => (
                      <div
                        key={index}
                        className="mb-3 p-3 border rounded text-light bg-dark"
                      >
                        <h5 className="arc-neon-text">Participant {index + 1}</h5>
                        <Form.Group className="mb-2">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            className="arc-input"
                            type="text"
                            name="name"
                            value={participant.name}
                            onChange={(e) => handleChange(index, e)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            className="arc-input"
                            type="email"
                            name="email"
                            value={participant.email}
                            onChange={(e) => handleChange(index, e)}
                             isInvalid={participant.email && !emailRegex.test(participant.email)}
                          required
                          />
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Label>USN</Form.Label>
                          <Form.Control
                            className="arc-input"
                            type="text"
                            name="usn"
                            value={participant.usn}
                            onChange={(e) => handleChange(index, e)}
                           
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            className="arc-input"
                            type="text"
                            name="phone"
                            value={participant.phone}
                            onChange={(e) => handleChange(index, e)}
                            isInvalid={participant.phone && !phoneRegex.test(participant.phone)}
                            required
                          />
                        </Form.Group>
                      </div>
                    ))}
      
                    {formData.length < eventRules[selectedEvent].max && (
                      <Button
                        className="cyber-button mb-3 w-100"
                        onClick={handleAddMember}
                      >
                        Add Member
                      </Button>
                    )}
      
                    <Button
                      type="submit"
                      className="cyber-button mb-3 w-100"
                      disabled={loading || !validForm}
                    >
                      {loading ? <Spinner animation="border" size="sm" /> : 'Submit & Pay'}
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          );
        }
  

  // Event details page
  return (
    <div className="container-fluid cyber-bg"
        style={{
        position: 'relative',
         }}>
         {/* Inline style for background image overlay */}
        <style>
        {`
          .cyber-bg::before {
           background-image: url(${backgroundImg});  }
        `}
        </style>
        <h1 className="neon-text">Register</h1>
                 
        <div className="cyber-content">
           <div className="cyber-card row">
              <div className="col-md-6 text-center mb-3 mb-md-0">
                  <img src={starcrawl} className="event-image" alt="bytewars" />
                      </div>
                 
                      <div className="col-md-6">
                         <h2 className="mt-4">{selectedEvent}</h2>
                         <p className="cyber-head" ><strong >Timing:</strong> 10:30 AM</p>
                         <p className="cyber-head"><strong >Venue:</strong> Outdoor Stadium</p>
                         <p className="cyber-head"><strong >Team Size:</strong> {eventRules[selectedEvent].min} - {eventRules[selectedEvent].max}</p>
                         <p className="cyber-head"><strong >Fee:</strong> ₹400</p>
           <div className="flex gap-4 cyber-head ">
  <p>1st Prize : 5 K</p>
  <p>2nd Prize : 3 K</p>
</div>
                 
      <h4 className="mt-4">Event Rules:</h4>
      <div className="content">
<p>- The arena will consist of the following terrains: Pebble, Sand, Water, Bumps, Wedges and Other obstacles.</p>
<p>- The width of the track will be 65cm </p>
<p>- If the bot goes out of the track, penalty time will be added to the final track completion time</p>
<p>- The bot should fit in a box of dimensions 30cm x 30cm x 30cm</p>
<p>- The power supply used can be a maximum of 12 Volts which can either be on board or off board. IC Engines are not allowed</p>
<p>- The event will be carried out in two rounds</p>
<p>- In qualifying round, the bot has to pass through maximum number of checkpoints in a given time</p>
<p>- Only 2 members of a team are allowed to control the bot during the race</p>
<p>- The bot will be disqualified if any part fails or falls off in the arena and is unable to continue</p>

</div>
                 
                         <div className="container-fluid mt-4">
                   <div className="container px-3 py-4">
                   <div className="container text-center mt-4">
                   <div className="container mt-4">
                   <div className="d-flex flex-column flex-sm-row justify-content-start align-items-center gap-3 ps-sm-4">
                     <a href={rulebook} download className="cyber-button">
                       RULE BOOK
                     </a>
                     <button className="cyber-button" onClick={handleProceedClick}>
                       REGISTER
                     </button>
                   </div>
                 </div>
                 
                 </div>
                 
                 </div>
                 
                 </div>
                 
                 
                       </div>
                     </div>
                   </div>
                 </div>
  );
};

export default Register;
