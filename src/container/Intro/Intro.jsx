import React, { useRef, useState } from 'react';

import { meal } from '../../constants';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const video = useRef();

  const handleVideo = () => {
    if (playVideo) {
      video.current.pause();
      setPlayVideo(false);
    } else {
      video.current.play();
      setPlayVideo(true);
    }
  };

  return (
    <div className="app__video">
      <video ref={video} src={meal} type="video/mp4" loop></video>
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_controls">
          {playVideo ? (
            <BsPauseCircle
              color="#dcca87"
              className="app__video-overlay_icon"
              onClick={handleVideo}
            />
          ) : (
            <BsPlayCircle
              color="#dcca87"
              className="app__video-overlay_icon"
              onClick={handleVideo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
