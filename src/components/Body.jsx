import React from 'react';
import Confetti from 'react-confetti';  // Import react-confetti
import './Body.css';  // Assuming you have your styles in Body.css

const Body = () => {
  return (
    <div className="body-container">
      {/* Confetti Effect */}
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}  // Adjust the number of confetti pieces
        gravity={0.2}  // Controls the speed at which the confetti falls
        recycle={false}  // Prevents the confetti from reappearing after it falls
      />

      {/* Birthday Content */}
      <div className="content" id="home">
        <h1 className="birthday-message">Happy Birthday, My Love! 🎉</h1>
        <p className="message-details">You make every day special. Today, let the world celebrate *you*! 💖</p>
        {/* Cake Image */}
        <div className="cake-image-container">
          <img 
            src="/pics/birthdayCake.png"  // Replace with the actual path to your cake image
            alt="BirthdayCake"
            className="birthday-cake"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
