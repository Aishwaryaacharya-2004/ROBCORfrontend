import React, { useState } from "react";
import axios from "axios";

function App() {
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [eventName, setEventName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const generateCertificate = async () => {
        if (!Name.trim() || !email.trim() || !eventName.trim()) {
            setError("Please enter your name, email, and event name.");
            setSuccess("");
            return;
        }

        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5000/api/certificate/generate-certificate",
                { Name, email, eventName },
                { responseType: "blob" }
            );

            const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${eventName}_certificate.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setSuccess("✅ Certificate generated successfully!");
        } catch (error) {
            setError(error.response?.data?.error || "❌ Error generating certificate.");
        }

        setLoading(false);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>🎓 Generate Participation Certificate</h2>

            {error && <p style={styles.error}>{error}</p>}
            {success && <p style={styles.success}>{success}</p>}

            <input
                type="text"
                placeholder="Enter your name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
            />
            <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
            />
            <input
                type="text"
                placeholder="Enter event name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                style={styles.input}
            />

            <button onClick={generateCertificate} disabled={loading} style={styles.button}>
                {loading ? "Generating..." : "⚡ Generate Certificate"}
            </button>
        </div>
    );
}

// 🎨 Cyberpunk Styles
const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "'Orbitron', sans-serif",
        background: "linear-gradient(145deg, #0d0d0d, #1a1a1a)",
        padding: "40px",
        paddingTop:"150px",
        borderRadius: "16px",
        width: "90%",
        maxWidth: "600px",
        margin: "auto",
        boxShadow: "0 0 25px #0ff, 0 0 50px #f0f",
        border: "2px solid #0ff",
        animation: "pulseGlow 3s ease-in-out infinite",
    },
    title: {
        color: "#f0f",
        marginBottom: "30px",
        fontSize: "32px",
        textShadow: "0 0 8px #f0f, 0 0 20px #0ff, 0 0 35px #f0f"
    },
    input: {
        backgroundColor: "#111",
        color: "#0ff",
        border: "2px solid #0ff",
        padding: "14px",
        fontSize: "16px",
        width: "85%",
        margin: "10px 0",
        borderRadius: "10px",
        outline: "none",
        boxShadow: "0 0 10px #0ff",
        transition: "0.3s",
    },
    button: {
        padding: "14px 30px",
        fontSize: "18px",
        background: "linear-gradient(90deg, #0ff, #f0f)",
        color: "#000",
        border: "2px solid #f0f",
        borderRadius: "10px",
        cursor: "pointer",
        marginTop: "20px",
        boxShadow: "0 0 15px #0ff, 0 0 25px #f0f",
        transition: "transform 0.2s ease-in-out, box-shadow 0.3s ease",
    },
    error: {
        color: "#ff0033",
        fontWeight: "bold",
        marginTop: "10px",
        textShadow: "0 0 5px red"
    },
    success: {
        color: "#00ff99",
        fontWeight: "bold",
        marginTop: "10px",
        textShadow: "0 0 5px #00ff99"
    }
};


export default App;
