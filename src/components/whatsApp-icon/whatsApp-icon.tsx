import React from 'react';
import '@dotlottie/player-component'; // Import the dotlottie player
import './whatsApp-icon.css'; // Import the CSS file

const whatsAppIcon = () => {
  return (
    <div className="whatsAppIcon">
      <dotlottie-player
        src="https://lottie.host/ce0c0e73-a7dc-41c8-8a31-170643570b55/DEaqQ1BKDX.lottie"
        background="transparent"
        speed="1"
        style={{ width: "70px", height: "70px", marginLeft: "8px" }} // Increased size
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default whatsAppIcon;