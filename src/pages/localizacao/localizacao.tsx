import React, { useRef } from "react";
import "@dotlottie/player-component";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Localizacao = () => {
  const lottiePlayerRef = useRef(null);

  return (
    <StyledLocalizacaoContainer>
      <StyledLottiePlayerContainer>
        <dotlottie-player
          ref={lottiePlayerRef}
          src="https://lottie.host/6aebbfe8-164f-483a-9f6f-9cf20b59e857/0SEBNudFPu.lottie"
          background="transparent"
          speed="1"
          style={{ width: "400px", height: "400px" }}
          loop
          autoplay
        />
        <StyledLocalizacaoLabel>LOCALIZAÇÃO</StyledLocalizacaoLabel>
        <StyledLocalizacaoAddressContainer>
          <StyledAddressWithIcon>
            <dotlottie-player
              src="https://lottie.host/ae0b12fc-639c-4c8c-b9b2-c4ed637b9662/Z1MlOrSyY2.lottie"
              background="transparent"
              speed="1"
              style={{ width: "50px", height: "50px" }}
              loop
              autoplay
            />
            <StyledLocalizacaoAddress>
              Avenida Doutor Severino Tostes Meirelles,
              <br />
              1660 - São Miguel, Franca São Paulo
            </StyledLocalizacaoAddress>
          </StyledAddressWithIcon>
        </StyledLocalizacaoAddressContainer>
      </StyledLottiePlayerContainer>
      <StyledMapContainer
        center={[-20.545735817532602, -47.42496940963758]}
        zoom={15}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[-20.545735817532602, -47.42496940963758]}>
          <Popup>Francauto - Concessionária</Popup>
        </Marker>
      </StyledMapContainer>
    </StyledLocalizacaoContainer>
  );
};

export default Localizacao;

const StyledLocalizacaoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  margin-left: 0px;

    flex-direction: row;
    justify-content: center;

    @media (max-width: 1920px) {

    }

    @media (max-width: 1400px) {
    
    }

    @media (max-width: 1200px) {
        margin-left: -15vh;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        margin-left: 0;
    }

    @media (max-width: 900px) {
        margin-left: -10vh;
    }

   @media (max-width: 800px) {
        margin-left: -15vh;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 768px) {
        margin-left: -13vh;
    }
    @media (max-width: 700px) {
        margin-left: -20vh;
    }

    @media (max-width: 650px) {
        margin-left: -25vh;
    }

    @media (max-width: 630px) {
        margin-left: -28vh;
    }

    @media (max-width: 550px) {
        margin-left: -32vh;
    }

    @media (max-width: 500px) {
        margin-left: -36vh;
    }
    @media (max-width: 480px) {
      margin-left: -35vh;
    }

    @media (max-width: 450px) {
        margin-left: -38vh;
    }

    @media (max-width: 430px) {
        margin-left: -38vh;
    }

`;

const StyledLottiePlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  margin-bottom: 20px;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

const StyledLocalizacaoLabel = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  font-family: "Open Sans", sans-serif;
  text-align: center;
`;

const StyledLocalizacaoAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

const StyledAddressWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLocalizacaoAddress = styled.div`
  font-size: 16px;
  color: black;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  margin-left: 10px;
`;

const StyledMapContainer = styled(MapContainer)`
  width: 45vh;
  height: 45vh;
  margin-top: 20px;

  
    @media (max-width: 1000px) {
        width: 50%;
    }
        
    @media (max-width: 900px) {
        width: 50%;
    }

    @media (max-width: 800px) {
        width: 50%;  /* Smaller map on 800px breakpoint */
 
    }

    @media (max-width: 600px) {
        height: 300px;
    }
    
    @media (max-width: 500px) {
    width: 40%;
    }
`;