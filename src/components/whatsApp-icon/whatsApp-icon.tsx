import  { useState } from 'react';
import './whatsApp-icon.css'; // Import the CSS file
import{DotLottiePlayer} from "@dotlottie/react-player";
import '@dotlottie/player-component'

const whatsAppIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const message = "Olá! tenho interesse em saber mais sobre os serviços da Francauto Locadora.";
    window.open(`https://wa.me/5516999661580?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      className="whatsAppIcon"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DotLottiePlayer
        src={isHovered ? "https://lottie.host/hovered-icon.lottie" : "https://lottie.host/ce0c0e73-a7dc-41c8-8a31-170643570b55/DEaqQ1BKDX.lottie"}
        background="transparent"
        speed={1}
        style={{ width: "70px", height: "70px", marginLeft: "8px" }} // Increased size
        loop
        autoplay
      ></DotLottiePlayer>
    </div>
  );
};

export default whatsAppIcon;