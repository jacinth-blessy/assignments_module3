import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 10; // go back 10 seconds
  };

  const forwardVideo = () => {
    videoRef.current.currentTime += 10; // go forward 10 seconds
  };

  return (
    <>
      <video
        ref={videoRef}
        width="400"
        controls={true}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>

      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={rewindVideo}>Rewind</button>
        <button onClick={forwardVideo}>Forward</button>
      </div>
    </>
  );
}

export default VideoPlayer;
