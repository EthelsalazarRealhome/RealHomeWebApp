import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const FullScreenImage = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '999',
      }}
      onClick={handleClickOutside}
    >
      <div
        style={{
          position: 'absolute',
          left: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          backgroundColor: 'black',
          borderRadius: '50%',
          padding: '10px',
        }}
      >
        <BsChevronCompactLeft
          size={30}
          color="white"
          onClick={onPrev}
          style={{
            cursor: 'pointer',
            borderRadius: '50%',
            backgroundColor: 'black',
            padding: '10px',
            marginLeft: '10px',
          }}
        />
      </div>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ maxWidth: '90%', maxHeight: '90%', cursor: 'pointer' }}
      />

      <div
        style={{
          position: 'absolute',
          right: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          backgroundColor: 'black',
          borderRadius: '50%',
          padding: '10px',
        }}
      >
        <BsChevronCompactRight
          size={30}
          color="white"
          onClick={onNext}
          style={{
            cursor: 'pointer',
            borderRadius: '50%',
            backgroundColor: 'black',
            padding: '10px',
            marginRight: '10px',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          cursor: 'pointer',
          padding: '10px',
          color: 'white',
        }}
        onClick={onClose}
      >
        Close
      </div>
    </div>
  );
};

const ImgSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images?.length) % images?.length);
  };

  const openFullScreen = () => {
    setShowFullScreen(true);
  };

  const closeFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    <div style={{ position: 'relative', width: '100%', margin: '0 auto',  }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          background: 'black',
          borderRadius: '50%',
          padding: '10px',
        }}
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} color="white" />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          background: 'black',
          borderRadius: '50%',
          padding: '10px',
        }}
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} color="white" />
      </div>

      <div style={{ width: '100%', cursor: 'pointer' }} onClick={openFullScreen}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: '100%' }}
        />
      </div>

      {showFullScreen && (
        <FullScreenImage
          images={images}
          currentIndex={currentIndex}
          onClose={closeFullScreen}
          onPrev={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images?.length) % images?.length)}
          onNext={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length)}
        />
      )}
    </div>
  );
};

export default ImgSlider;
