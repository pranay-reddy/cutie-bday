import React from 'react';
import './Christmas.css';  // You can create a custom CSS file for Christmas theme
import Snowfall from './Snowfall';

const Christmas = () => {
  return (
    <>
    <div className="christmas-container">
      <Snowfall/>
      <h1 className="christmas-header">Merry Christmas!</h1>
      <p className="christmas-message">
        Wishing you a season filled with love, joy, and warmth. 
        May your Christmas be merry and bright!
        </p>
      <img src="/img/home-moon.png" alt="Moon Image" className="home__moon" />
      <img src="/img/home-trineo-santa.png" alt="Santa Image" className="home__trineo"/>
      <img src="/img/home-mountain-3.png" alt="Mountain3 Image" className="home__mountain-3"/>
      <img src="/img/home-mountain-2.png" alt="Mountain2 Image" className="home__mountain-2"/>
      <img src="/img/home-pine-tree.png" alt="pine Image" className="home__pine"/>
      <img src="/img/home-village.png" alt=" home Image" className="home__village"/>
      <img src="/img/home-snow.png" alt=" snow Image" className="home__snow"/>
      <img src="/img/home-mountain-1.png" alt="Mountain1 Image" className="home__mountain-1"/>
    </div>
    </>
  );
};

export default Christmas;

