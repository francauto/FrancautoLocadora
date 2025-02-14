import React, { useState } from 'react';
import '@dotlottie/player-component'; // Import the dotlottie player
import './whatsApp-icon.css'; // Import the CSS file

const whatsAppIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://wa.me/5516999661580', '_blank');
  };

  return (
    <div
      className="whatsAppIcon"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <dotlottie-player
        src={isHovered ? "https://lottie.host/hovered-icon.lottie" : "https://lottie.host/ce0c0e73-a7dc-41c8-8a31-170643570b55/DEaqQ1BKDX.lottie"}
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