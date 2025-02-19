import React, { useState } from "react";
import "@dotlottie/player-component"; // Import the Lottie player
import "./home.css";
 // Import the new CardHome component
import videoHome from "../../assets/video_home.mp4"; // Import the video file

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="home-background">
      <video className="home-video" src={videoHome} autoPlay loop muted />
     
        {/* Se for manter o card, faça o import aqui */}
        
      </div>
  );
};

export default Home;
