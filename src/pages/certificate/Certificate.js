import React, { useState } from "react";
import axios from "axios";
import './certificate.css';

const events = [
  "Binary Duels", "Arduino Forge", "BGMI Punks", "Project Conclave",
  "Nexus Quiz", "Neon Maze", "Neon Run", "Cyber Kick", "Cyber Track"
];

function Certificate() {
 const [formData, setFormData] = useState({ name: "", email: "", usn: "", event: "" });
  const [feedback, setFeedback] = useState({ q1: "", q2: "", q3: "" });
  const [states, setStates] = useState({
    showFeedback: false,
    feedbackSubmitted: false,
    loading: false,
    error: "",
    success: "",
  });

  const handleInputChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFeedbackChange = (e) =>
    setFeedback((prev) => ({ ...prev, [e.target.name]: e.target.value }));

 const handleFeedbackSubmit = async () => {
  const { q1, q2, q3 } = feedback;
  const { email, event, usn } = formData;

  if (!q1 || !q2 || !q3) {
    return alert("⚠️ Please answer all feedback questions.");
  }

  if (!event.trim() || (!email.trim() && !usn.trim())) {
    alert("⚠️ Please fill in the Event and either Email or USN.");
    return;
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedEvent = event.trim();
    const normalizedUsn = usn.trim();

    const payload = {
      name: formData.name,
      event: normalizedEvent,
      answers: feedback,
    };

    if (email.trim()) {
      payload.email = normalizedEmail;
    } else if (usn.trim()) {
      payload.usn = normalizedUsn;
    }

    const res = await axios.post(
      "https://robcorbackend-5.onrender.com/api/feedback/submit-feedback",
      payload
    );

    if (res.status === 201) {
      setStates((prev) => ({ ...prev, feedbackSubmitted: true }));
      alert("✅ Feedback submitted successfully!");
    } else {
      alert(res.data.message || "❌ Unknown error occurred.");
    }
  } catch (err) {
    alert(err.response?.data?.message || "❌ Failed to submit feedback.");
  }
};


  const generateCertificate = async () => {
    const { name, email,usn, event } = formData;

    if (!formData.name.trim() || !formData.event.trim() || (!formData.email.trim() && !formData.usn.trim())) {
  setStates((prev) => ({ ...prev, error: "Please fill Name, Event, and either Email or USN", success: "" }));
  return;
}


    setStates({ ...states, error: "", success: "", loading: true });

    try {
      const res = await axios.post(
  "https://robcorbackend-5.onrender.com/api/certificate/generate-certificate",
  { name, email, usn, event },
  { responseType: "blob" }
);


      const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${event}_certificate.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      setStates((prev) => ({ ...prev, success: "✅ Certificate generated!", loading: false }));
    } catch (err) {
      setStates((prev) => ({
        ...prev,
        error: "❌ Failed to generate certificate.",
        loading: false,
      }));
    }
  };

  return (
    <div className="cyber-bg">
      <h1 className="neon-text">Certificate Generator</h1>

      <img
        src="https://res.cloudinary.com/dfli7mciv/image/upload/v1748098054/notfound_mea7cs.png"
        alt="Robot"
        className="robot-image"
      />
      <div className="cyber-card">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control arc-input mb-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control arc-input mb-3"
          />
          <input
            type="text"
            name="usn"
            placeholder="Enter your USN (optional if Email filled)"
            value={formData.usn}
            onChange={handleInputChange}
            className="form-control arc-input mb-3"
/>

          <select
            name="event"
            value={formData.event}
            onChange={handleInputChange}
            className="form-select arc-input mb-3"
          >
            <option value="">Select Event</option>
            {events.map((event) => (
              <option key={event} value={event}>
                {event}
              </option>
            ))}
          </select>

          <button
            onClick={generateCertificate}
            className="cyber-button mb-3"
            disabled={!states.feedbackSubmitted}
          >
            Generate Certificate
           
          </button>

          {states.error && <p style={{ color: "red" }}>{states.error}</p>}
          {states.success && <p style={{ color: "lime" }}>{states.success}</p>}

          {!states.feedbackSubmitted && (
            <>
              <button
                onClick={() => setStates((s) => ({ ...s, showFeedback: !s.showFeedback }))}
                className="cyber-button mb-3"
              >
                {states.showFeedback ? "Hide" : "Show"} Feedback
              </button>

              {states.showFeedback && (
                <div className="feedback">
                  {/* Q1 */}
                  <div className="feedback-box mb-4">
                    <label className="form-label d-block question-text">
                      Q1: How was your experience participating in ROBOCOR'25?
                    </label>
                    {["Excellent", "Good", "Average", "Bad"].map((label, index) => (
                      <div className="form-check form-check-inline cyber-radio" key={`q1-${index}`}>
                        <input
                          type="radio"
                          name="q1"
                          value={label}
                          checked={feedback.q1 === label}
                          onChange={handleFeedbackChange}
                          id={`q1-${index}`}
                        />
                        <label htmlFor={`q1-${index}`}>{label}</label>
                      </div>
                    ))}
                  </div>

                  {/* Q2 */}
                  <div className="feedback-box mb-4">
                    <label className="form-label d-block question-text">
                      Q2: How was the event which you participated in?
                    </label>
                    {["Excellent", "Good", "Average", "Bad"].map((label, index) => (
                      <div className="form-check form-check-inline cyber-radio" key={`q2-${index}`}>
                        <input
                          type="radio"
                          name="q2"
                          value={label}
                          checked={feedback.q2 === label}
                          onChange={handleFeedbackChange}
                          id={`q2-${index}`}
                        />
                        <label htmlFor={`q2-${index}`}>{label}</label>
                      </div>
                    ))}
                  </div>

                  {/* Q3 */}
                  <div className="feedback-box mb-4">
                    <label className="form-label question-text">
                      Q3: Any suggestions or improvements you'd like to share?
                    </label>
                    <textarea
                      name="q3"
                      placeholder="Type your suggestions here..."
                      value={feedback.q3}
                      onChange={handleFeedbackChange}
                      className="form-control arc-input"
                      rows={4}
                    />
                  </div>

                  <button onClick={handleFeedbackSubmit} className="cyber-button">
                    Submit Feedback
                    
                  </button>
                </div>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Certificate;
