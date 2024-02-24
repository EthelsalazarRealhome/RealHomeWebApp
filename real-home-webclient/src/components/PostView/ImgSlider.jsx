import React, { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';

const ImgSlider = ({  images=[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images?.length) % images?.length);
  };

  return (
    <div>
      <div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: '50%', height: 'auto', maxWidth: '100%' }}
        />
      </div>
      {/**Left arrow */}
      <div>
        <BsChevronCompactLeft/>
      </div>
      {/**Right arrow */}
      <div>
        <BsChevronCompactRight/>
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImgSlider;
