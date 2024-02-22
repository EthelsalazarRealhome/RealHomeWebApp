import React, { useState } from 'react';
import img1 from '../../img/slides/slide1.jpeg';
import img2 from '../../img/slides/slide2.jpeg';
import img3 from '../../img/slides/slide3.jpeg';
import img4 from '../../img/slides/slide4.jpeg';

const ImgSlider = () => {
  const images = [img1, img2, img3,img4]; 

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ width: '100%', height: 'auto' }} />
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImgSlider;
