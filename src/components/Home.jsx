// NewYearCountdown.js
import React, { useState, useEffect } from 'react';
import './NewYear.css';
import NMessage from './NewyearMsg';

const NewYearWishes = [
  "May your dreams take flight in the new year ✨",
  "Here's to new beginnings 🌟",
  "Chase your dreams in the coming year 🎯",
  "Make every moment count 💫",
  "Your best year yet awaits 🌈",
  "Remember I always love you, today and forever 💖",
  "Every moment with you is a blessing 🥰",
  "You make every day feel like New Year's Day 💝",
  "Here's to another year of making memories together ✨",
  "My love for you grows stronger with each passing day 💕",
  "You're the best part of all my years 🌹",
  "Together is my favorite place to be 🤗",
  "Thank you for making this year so special 💫",
  "You're my favorite New Year's resolution come true 🎯",
  "Looking forward to 365 more days with you 💑",
  "My heart beats for you, now and always 💓",
  "You make every year magical ✨",
  "Forever grateful for your love 🙏",
  "Here's to loving you more each day 💝",
  "You're my past, present, and future 🌟",
];

const NewYearCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [currentWish, setCurrentWish] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextYear = new Date(now.getFullYear() + 1, 0, 1);
      const difference = nextYear - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    const wishTimer = setInterval(() => {
      setCurrentWish((prev) => (prev + 1) % NewYearWishes.length);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(wishTimer);
    };
  }, []);

  return (
    <>
    <div className="countdown-wrapper">
      <div className="overlay"></div>
      <div className="countdown-content">
        <div className="year-display">
          <span className="next-year">{new Date().getFullYear() + 1}</span>
        </div>

        <div className="countdown-grid">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="time-block">
              <div className="time-value">{String(value).padStart(2, '0')}</div>
              <div className="time-unit">{unit}</div>
            </div>
          ))}
        </div>

        <div className="wish-slider">
          <p className="wish-text">{NewYearWishes[currentWish]}</p>
        </div>
      </div>
    </div>
    <NMessage/>
    </>
    
  );
};

export default NewYearCountdown;