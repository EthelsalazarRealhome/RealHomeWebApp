  import React, { useRef, useState } from "react";
  import videodron from '../video/videodron.mp4';

  const Video = () => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    };

    return (
      <div className="max-w-screen-md w-full relative justify-center items-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videodron}
          loop
          muted
          playsInline
          onClick={handlePlay}
        />
        {!playing && (
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            onClick={handlePlay}
          >
            <button className="bg-white text-black p-4 rounded-full">
              Play Video
            </button>
          </div>
        )}
      </div>
    );
  };

  export default Video;
