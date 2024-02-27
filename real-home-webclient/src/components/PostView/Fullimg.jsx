import React from 'react';

const Fullimg = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
      <div className="max-w-full max-h-full overflow-auto">
        <img
          src={imageUrl}
          alt="Full Screen"
          className="w-full h-full object-contain"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Fullimg;
