//bytewars
//import Footer from '../../components/Footer.jsx';
import './register.css';
//import Btn from '../../components/btn.jsx';
//import BtnDesktop from '../../components/btnDesktop.jsx';
import droidrace from '../../assets/compressed/droidrace.jpg';
import rulebook from '../../assets/rulebook.pdf';
import { useState } from 'react';

const Register = () => {
  const [clicked, setClicked] = useState(false);
  const [iframe, setIframe] = useState(false);

  return (
    <>
      {!clicked ? (
        <>
          <div className="container-fluid cyber-bg text-light py-5">
            <div className="text-center mb-5">
              <h1 className="neon-text display-3">Register</h1>
            </div>

            <div className="row cyber-card shadow-lg p-3 mb-5 rounded">
              <div className="col-md-6 text-center">
                <img
                  src={droidrace}
                  className="img-fluid rounded"
                  alt="bytewars"
                />
              </div>
              <div className="col-md-6">
                <h2 className="neon-text">Bytewars</h2>
                <div className="mt-3">
                  <p><span className="label">Timing:</span> 10:30 AM</p>
                  <p><span className="label">Venue:</span> TEL 101</p>
                  <p><span className="label">Team Size:</span> 2</p>
                  <p><span className="label">Minimum:</span> 1</p>
                </div>

                <h4 className="neon-text mt-4">Event Rules:</h4>
                <a href={rulebook} download="Robocor'24(RuleBook).pdf">
                  <button className="btn glitch-button">More</button>
                </a>
                <ul className="mt-3">
                  <li>40 coding aptitude questions in round 1.</li>
                  <li>Separate round for 1st years with a consolation prize.</li>
                  <li>Top 10 teams selected.</li>
                  <li>2nd round on HackerRank with 4 questions.</li>
                  <li>Report 30 mins before start time.</li>
                  <li>ID cards must be signed by the coordinator.</li>
                  <li>No time extensions.</li>
                  <li>Timing used as tiebreaker.</li>
                  <li>No copy-pasting or tab switching allowed.</li>
                </ul>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <span className="neon-text h4">Fee: ₹100</span>
                  <div className="d-flex gap-2">
                    <a href={rulebook} download>
                      <button className="btn glitch-button">Rule Book</button>
                    </a>
                    <button
                      onClick={() => setClicked(true)}
                      className="btn glitch-button"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </>
      ) : (
        <>
          <div className="cyber-bg d-flex flex-column justify-content-center align-items-center vh-100 text-center text-light">
            <h1 className="neon-text">Online registrations closed</h1>
            <p className="mt-3">On-spot Registrations at Media Centre</p>
          </div>

          <div style={{ display: 'none' }}>
            {!iframe ? (
              <div className="cyber-bg d-flex justify-content-center align-items-center vh-100">
                <h1 className="neon-text">Loading...</h1>
              </div>
            ) : null}
            <iframe
              onLoad={() => setIframe(true)}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              src="https://www.yepdesk.com/embed/buy-tickets/66234ccc46e0fb0001bb7ebc/private/fvqooqrbrv"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Register;
