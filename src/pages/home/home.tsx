// Home.tsx
import React, { useRef, useEffect } from "react";
import videoHome from "../../assets/video_home.mp4";
import "./home.css"; // Importa o arquivo CSS

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
    <div className="home-background"> {/* Usa a classe CSS */}
      <video
        ref={videoRef}
        className="video-home" /* Usa a classe CSS */
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