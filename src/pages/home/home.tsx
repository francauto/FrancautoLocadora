import React, { useState } from "react";
import "@dotlottie/player-component"; // Import the Lottie player
import "./home.css";
import CardHome from "../../components/card-home/card-home"; // Import the new CardHome component
import videoHome from "../../assets/video_home.mp4"; // Import the video file

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="home-background">
      <video className="home-video" src={videoHome} autoPlay loop muted />
      <button className="about-button-left" onClick={toggleCardVisibility}>
        <dotlottie-player
          src="https://lottie.host/62cb3163-01ba-4104-b97e-7aec390203fb/FmvunfuzbH.lottie"
          background="transparent"
          speed="1"
          style={{ width: "30px", height: "30px" }}
          loop
          autoplay
        ></dotlottie-player>
      </button>
      <div className={`home-content ${isVisible ? "visible" : ""}`}>
        <CardHome />
      </div>
    </div>
  );
};

export default Home;
