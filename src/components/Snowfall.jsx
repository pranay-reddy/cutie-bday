import React, { useEffect } from "react";
import "./Snowfall.css"; // Ensure your CSS is imported

const Snowfall = () => {
  useEffect(() => {
    const snowflakes = [];

    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = Math.random() * 100 + "vw"; // Random position from 0 to 100vw
      snowflake.style.animationDuration = Math.random() * 3 + 3 + "s"; // Random animation speed
      snowflake.style.animationDelay = Math.random() * 2 + "s"; // Random delay before falling
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Random size
      snowflake.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity
      snowflake.style.transform = `rotate(${Math.random() * 360}deg)`; // Random rotation
      snowflake.style.backgroundImage = "url('/img/snow-img.png')";
      snowflake.style.backgroundSize = "contain";
      snowflake.style.backgroundRepeat = "no-repeat";
      snowflake.style.width = "30px"; // Snowflake size
      snowflake.style.height = "30px"; // Snowflake size

      document.body.appendChild(snowflake);
      snowflakes.push(snowflake);
    };

    const createSnowfall = () => {
      for (let i = 0; i < 50; i++) {
        createSnowflake();
      }
    };

    createSnowfall();

    return () => {
      // Cleanup snowflakes when component unmounts
      snowflakes.forEach(snowflake => snowflake.remove());
    };
  }, []);

  return <div id="snowfall-container"></div>;
};

export default Snowfall;
