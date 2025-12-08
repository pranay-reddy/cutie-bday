import React, { useState } from "react";
import "./Envelope.css";

const Envelope = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="envelope-container">
      <div className={`envelope ${open ? "open" : ""}`} onClick={() => setOpen(true)}>
        <div className="flap"></div>
        <div className="body"></div>
      </div>

      {open && (
        <div className="letter-modal">
          <div className="letter-content">
            <button className="close-button" onClick={() => setOpen(false)}>
              ✕
            </button>
            <p>
              My dearest love, every day with you is a blessing.  
              You are my everything, my heart, my home. 💖  
              Happy Birthday, my beautiful wife!
            </p>
          </div>
        </div>
      )}
      <p className="envelope-instruction">Click the envelope to open 💌</p>
    </div>
  );
};

export default Envelope;
