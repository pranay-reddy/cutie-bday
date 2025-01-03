import React from 'react';
import Christmas from './Christmas'; // Assuming you have the Christmas component
import Message from './Message'; // Import the Message component
import './DChristmas.css'; // Import the CSS for styling

const DChristmas = () => {
  return (
    <div className="home-container">
      <Christmas />
      <Message text="Wishing you a Merry Christmas and a Happy New Year!" />
    </div>
  );
};

export default DChristmas;