import React, { useState, useEffect } from "react";
import Title from "../../Components/Title";

export default function ESignatureApp() {
  const [name, setName] = useState("Your Signature");
  const [date, setDate] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0", // Corrected unit
  };

  useEffect(() => {
    document.body.classList.add("custom-background"); // Add CSS class
    return () => {
      document.body.classList.remove("custom-background"); // Remove on unmount
    };
  }, []);

  return (
    <div className="container class-text">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ? "DOB" : date} />
      <p>
        Mein Haus (My House) Ich lebe in einem Haus mit drei Schlafzimmern und
        zwei Bädern. Das Haus ist zweistöckig und hat auch einen Keller. Im
        Erdgeschoss befinden sich das Wohnzimmer, die Küche und ein Esszimmer.
        Im Wohnzimmer haben wir ein bequemes Sofa und einen großen Fernseher. In
        der Küche gibt es eine Spülmaschine, einen Herd, einen Backofen und
        einen Kühlschrank. Das Esszimmer hat einen Esstisch mit sechs Stühlen.
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
          gap: "20px",
        }}
      >
        <input
          type="date"
          value={date}
          style={{ ...inputStyle, marginRight: "50px" }}
          onChange={handleDateChange}
        ></input>
        <input
          type="text"
          value={name}
          style={{ ...inputStyle, marginRight: "50px" }}
          onChange={handleNameChange}
        ></input>
      </footer>
    </div>
  );
}
