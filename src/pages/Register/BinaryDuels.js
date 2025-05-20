import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import './register.css';
import bytewars from '../../assets/compressed/bytewars.jpg';
import rulebook from '../../assets/rulebook(2).pdf';
import character1 from '../../assets/compressed/character1.jpg';
import backgroundImg from '../../assets/demo.jpg';
import Loading from '../../components/Loading.js';

export const eventRules = {
  "Binary Duels": { min: 1, max: 2 },
  "Arduino Forge": { min: 1, max: 3 },
  "Cyber Track": { min: 1, max: 4 },
  "Neon Maze": { min: 1, max: 4 },
  "Project Conclave": { min: 1, max: 4 },
  "Cyber Kick": { min: 1, max: 4 },
  "Nexus Quiz": { min: 1, max: 1 },
  "Neon Run": { min: 1, max: 4 },
  "BGMI Punks": { min: 1, max: 4 },
};

// Validators
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;
//const usnRegex = /^[1-9][A-Z]{2}\d{2}[A-Z]{2}\d{3}$/i;

const Register = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [iframe, setIframe] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("Binary Duels");
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [registrationClosed, setRegistrationClosed] = useState(false);
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
      setTimeout(() => setClicked(true), 1500);
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
        <h1 className="sub-text">Online registrations closed</h1>
        <p className="subsub-text">On-spot Registrations at Media Centre</p>
      </div>
    );
  }

  if (clicked) {
    return (
     <> {!iframeLoaded && <Loading />}
      <iframe
        onLoad={() => setIframeLoaded(true)}
        width="100%"
        height="100%"
        style={{
          display: iframeLoaded ? 'block' : 'none',
          border: 'none',
          minHeight: "100vh"
        }}
           src="https://www.yepdesk.com/embed/buy-tickets/68233671c9e77c0001f16969/private/41854nuhco"
        />
      </>
    );
  }

  if (showRegistrationForm) {
    return (
      <div className="cyber-bg cyber-content-wrapper">
        <style>
          {`
            .cyber-bg::before {
              background-image: url(${backgroundImg});
            }
          `}
        </style>

        <div className="cyber-content">
          <div className="cyber-card d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="text-center" style={{ flex: 1, padding: '1rem' }}>
              <img src={character1} alt="Cyberpunk Character" className="arc-character-img event-image cyber-img" />
            </div>

            <div className="form-container" style={{ flex: 1 }}>
              <h1 className="mt-4">Binary Duels</h1>
              <p className="arc-quote mt-4">"Outcode, outsmart, outlast in the ultimate coding face-off!"</p>

              <div className="arc-form-card mt-4">
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Form onSubmit={handleSubmit}>
                  {formData.map((participant, index) => (
                    <div key={index} className="mb-3 p-3 border rounded text-light bg-dark">
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
                    <Button className="cyber-button mb-3 w-100" onClick={handleAddMember}>
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
    );
  }

  return (
    <div className="container-fluid cyber-bg" style={{ position: 'relative' }}>
      <style>
        {`
          .cyber-bg::before {
            background-image: url(${backgroundImg});
          }
        `}
      </style>

      <h1 className="neon-text">Register</h1>
      <div className="cyber-content">
        <div className="cyber-card row">
          <div className="col-md-6 text-center mb-3 mb-md-0">
            <img src={bytewars} className="event-image" alt="event" />
          </div>

          <div className="col-md-6">
            <h2 className="mt-4">{selectedEvent}</h2>
            <p className="cyber-head"><strong>Timing:</strong> 10:30 AM</p>
            <p className="cyber-head"><strong>Venue:</strong> TEL 101</p>
            <p className="cyber-head"><strong>Team Size:</strong> {eventRules[selectedEvent].min} - {eventRules[selectedEvent].max}</p>
            <p className="cyber-head"><strong>Fee:</strong> ₹100</p>
         <div className="flex gap-4 cyber-head ">
  <p>1st Prize : 4 K</p>
  <p>2nd Prize : 2 K</p>
</div>

            <h4 className="mt-4">Event Rules:</h4>
            <div className="content">
               <p>- For the first round, a set of 40 questions on coding aptitude will be provided.</p>
             <p>- Separate 1st round for 1st years and whoever comes first will get a consolation prize.</p>
             <p>- Top 10 teams of 1st round will be selected.</p>
             <p>- 2nd round will be organized on HackerRank.com</p>
             <p>- There will be 4 programming questions</p>
             <p>- All participants must report at the venue 30 minutes before the event's commencement.</p>
             <p>- The participants Id card must be signed by the coordinator.</p>
             <p>- No time extension will be provided.</p>
             <p>- Timing will be used as tie breaker.</p>
             <p>- Copy pasting of code will not be allowed.</p>
             <p>- Browsing or opening any other tab will not be allowed.</p>
            </div>

            <div className="container-fluid mt-4">
              <div className="container text-center mt-4">
                <div className="d-flex flex-column flex-sm-row justify-content-start align-items-center gap-3 ps-sm-4">
                  <a href={rulebook} download className="cyber-button">RULE BOOK</a>
                  <button className="cyber-button" onClick={handleProceedClick}>REGISTER</button>
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
