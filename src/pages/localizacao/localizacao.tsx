import React, { useRef, useEffect } from "react";
import "@dotlottie/player-component";
import styled from "styled-components";
import breakpoints from "../../components/breakpoints/breakpoints";
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
  const lottiePlayerRef = useRef<HTMLElement>(null);

  return (
    <StyledLocalizacaoContainer>
      <StyledLottiePlayerContainer lottiePlayerRef={lottiePlayerRef}>
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
          <dotlottie-player
            src="https://lottie.host/ae0b12fc-639c-4c8c-b9b2-c4ed637b9662/Z1MlOrSyY2.lottie"
            background="transparent"
            speed="1"
            style={{ width: "50px", height: "50px" }}
            loop
            autoplay
          />
          <StyledLocalizacaoAddress>
            Avenida Doutor Severino Tostes Meirelles,<br />1660 - São Miguel,
            Franca São Paulo
          </StyledLocalizacaoAddress>
          <StyledMapContainer center={[-20.545735817532602, -47.42496940963758]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-20.545735817532602, -47.42496940963758]}>
              <Popup>Francauto - Concessionária</Popup>
            </Marker>
          </StyledMapContainer>
        </StyledLocalizacaoAddressContainer>
      </StyledLottiePlayerContainer>
    </StyledLocalizacaoContainer>
  );
};

export default Localizacao;

// Styled Components
const StyledLocalizacaoContainer = styled.div`

  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  padding-left: 0px; /* Removendo a margem inicial */

    /* Aplica a margem da esquerda conforme a tela aumenta */
  @media (min-width: 550px) {
    padding-left: 5px;
  }

  @media (min-width: 600px) {
    padding-left: 10px;
  }

  @media (min-width: 650px) {
    padding-left: 150px;
  }

  @media (min-width: 700px) {
    padding-left: 200px;
  }

  @media (min-width: 750px) {
    padding-left: 150px; /* Margem maior */
  }

  @media ${breakpoints.lg} {
    flex-direction: row;
  }
`;

const StyledLottiePlayerContainer = styled.div<{ lottiePlayerRef?: React.RefObject<HTMLElement> }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;

  margin-bottom: 20px;

  @media ${breakpoints.lg} {
    width: 45%;
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

const StyledLocalizacaoAddress = styled.div`

  font-size: 16px;
  color: black;
  font-family: "Open Sans", sans-serif;
  text-align: center;
`;

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 300px;
  margin-top: 20px;

  @media ${breakpoints.lg} {
    height: 400px;
  }
`;