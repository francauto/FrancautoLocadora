// Home.tsx -  Nenhuma mudança necessária aqui!
import React, { useRef, useEffect } from "react";
import videoHome from "../../assets/video_home.mp4";
import "./home.css";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="home-background">
      <video
        ref={videoRef}
        className="video-home"
        src={videoHome}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Home;