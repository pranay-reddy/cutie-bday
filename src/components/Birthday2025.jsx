import React from "react";
import Confetti from "react-confetti";
import "./Birthday2025.css";

const Birthday2025 = () => {
  return (
    <div className="birthday2025-container">
      <Confetti 
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}
        gravity={0.2}
        recycle={false}
      />

      <div className="birthday2025-content">
        <h1 className="birthday-message">Happy Birthday, My Love! 🎉</h1>
        <p className="message-details">
          You make every day special. Today, let the world celebrate *you*! 💖
        </p>

        <div className="cake-image-container">
          <img 
            src="/pics/birthdayCake.png"
            alt="BirthdayCake"
            className="birthday-cake"
          />
        </div>
      </div>
    </div>
  );
};

export default Birthday2025;
