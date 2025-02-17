import React from "react";
import "@dotlottie/player-component"; // Import the Lottie player component
import "./localizacao.css"; // Import the CSS file
import GoogleMapComponent from "../../components/google-maps/google-map-component"; // Import the GoogleMapComponent

const Localizacao = () => {
  return (
    <div className="localizacao-container">
      <div className="lottie-player-container">
        <dotlottie-player
          src="https://lottie.host/6aebbfe8-164f-483a-9f6f-9cf20b59e857/0SEBNudFPu.lottie"
          background="transparent"
          speed="1"
          style={{ width: "500px", height: "500px" }}
          loop
          autoplay
        ></dotlottie-player>
        <div className="localizacao-label">LOCALIZAÇÃO</div>
        <div className="localizacao-address-container">
          <dotlottie-player
            src="https://lottie.host/ae0b12fc-639c-4c8c-b9b2-c4ed637b9662/Z1MlOrSyY2.lottie"
            background="transparent"
            speed="1"
            style={{ width: "50px", height: "50px" }}
            loop
            autoplay
          ></dotlottie-player>
          <div className="localizacao-address">
            Avenida Doutor Severino Tostes Meirelles,<br></br>1660 - São Miguel,
            Franca São Paulo
          </div>
        </div>
      </div>
      <div className="google-maps-container">
        <GoogleMapComponent /> {/* Add the GoogleMapComponent */}
      </div>
    </div>
  );
};

export default Localizacao;
