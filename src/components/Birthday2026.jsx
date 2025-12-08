import React from "react";
import CanvasHearts from "./CanvasHearts";
import Envelope from "./Envelope";
import "./Birthday2026.css";

const images = [
  "/pics/Photo1.jpg",
  "/pics/Photo2.jpg",
  "/pics/Photo3.jpg",
  "/pics/Photo4.jpg",
  "/pics/Photo7.jpg",
  "/pics/Photo6.jpg",
  "/pics/Photo8.jpg",
  
];

const Birthday2026 = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="birthday2026-container">
      {/* Canvas Hearts */}
      <CanvasHearts />

      <div className="birthday2026-content">
        {/* Title */}
        <h1 className="birthday2026-title">Happy Birthday, My Beautiful Wife 🎀</h1>

        {/* Subtitle */}
        <p className="birthday2026-subtitle">
          Another year with you… another year of magic, joy, and love.  
          You are my softest place to fall, my warmest home, and my forever girl. 💞
        </p>

        {/* Envelope */}
        <Envelope />

        {/* Cake Image */}
        <div className="birthday2026-image-wrapper">
          <img
            src="/pics/2026cake.jpg"
            alt="birthday cake"
            className="birthday2026-image"
          />
        </div>

        {/* Note */}
        <p className="birthday2026-note">  
          Every moment with you feels like a gift. Today, the stars seem to sparkle just
          for you — the sweetest part of my life. Happy Birthday, love. 🎂💗
        </p>

        {/* Photo Carousel */}
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevImage}>‹</button>
          <img src={images[currentImage]} alt="romantic" className="carousel-image" />
          <button className="carousel-btn next" onClick={nextImage}>›</button>
        </div>
      </div>
    </div>
  );
};

export default Birthday2026;
