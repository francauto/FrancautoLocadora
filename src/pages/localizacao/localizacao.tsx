import React from "react";
import "@dotlottie/player-component"; // Import the Lottie player component
import "./localizacao.css"; // Import the CSS file

const Localizacao = () => {
  return (
    <div className="localizacao-container">
      <div className="lottie-player-container">
        <dotlottie-player
          src="https://lottie.host/6aebbfe8-164f-483a-9f6f-9cf20b59e857/0SEBNudFPu.lottie"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <div className="google-maps-container">
        {/* Google Maps component will be added here */}
      </div>
    </div>
  );
};

export default Localizacao;
