import React, { useState } from 'react';
import './BdayCake.css'; // Import custom CSS for animations and styles

const Cake = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleBlowCandles = () => {
    setCandlesBlown(true); // Change state when candles are blown
  };

  return (
    <div id="birthday-cake">
      <div className="cake">
        <div className="middle"></div>
        <div className="chocs"></div>
        <div className="top"></div>
      </div>
      <div className="candles" onClick={handleBlowCandles}>
        {/* Conditional rendering based on the candlesBlown state */}
        {!candlesBlown && (
          <>
            <div className="flame"></div>
            <div className="flame2"></div>
            <div className="flame3"></div>
          </>
        )}
        <div className={`text ${candlesBlown ? 'show-text' : ''}`}>Happy Birthday!</div>
        <div className="shadows"></div>
      </div>
      <p className="text2">*Click on the flame to blow candles</p>
    </div>
  );
};

export default Cake;
