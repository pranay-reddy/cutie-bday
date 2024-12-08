import React, { useState } from 'react';
import './PicDump.css';  // Assuming you have your styles in PicDump.css

const PicDump = () => {
  const [images] = useState([
    { id: 1, src: '/pics/cutie1.png', alt: 'Pic 1' },
    { id: 2, src: '/pics/cutie2.png', alt: 'Pic 2' },
    { id: 3, src: '/pics/cutie3.png', alt: 'Pic 3' },
    { id: 4, src: '/pics/cutie4.png', alt: 'Pic 4' },
    { id: 5, src: '/pics/cutie5.png', alt: 'Pic 5' },
    { id: 6, src: '/pics/cutie6.png', alt: 'Pic 6' },
    { id: 7, src: '/pics/cutie7.png', alt: 'Pic 7' },
    { id: 8, src: '/pics/cutie8.png', alt: 'Pic 8' },
    { id: 9, src: '/pics/cutie9.png', alt: 'Pic 9' },
    { id: 10, src: '/pics/cutie10.png', alt: 'Pic 10' },
    { id: 11, src: '/pics/cutie11.png', alt: 'Pic 11' },
    { id: 12, src: '/pics/cutie12.png', alt: 'Pic 12' },
    { id: 13, src: '/pics/cutie13.png', alt: 'Pic 13' },
    { id: 14, src: '/pics/cutie14.png', alt: 'Pic 14' },
    { id: 15, src: '/pics/cutie15.png', alt: 'Pic 15' },
    { id: 16, src: '/pics/cutie16.png', alt: 'Pic 16' },
    { id: 17, src: '/pics/cutie17.png', alt: 'Pic 17' },
    
    // Add more images here
  ]);

  return (
    <div className="pic-dump-container">
      <h1 className="pic-dump-header">Our Picture Gallery</h1>
      <div className="pic-dump-grid">
        {images.map((image) => (
          <div key={image.id} className="pic-dump-item">
            <img src={image.src} alt={image.alt} className="pic-dump-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PicDump;
