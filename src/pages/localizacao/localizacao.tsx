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
          style={{ width: "400px", height: "400px" }} // Mantém o tamanho fixo
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
  flex-direction: column;  /* Empilha em telas menores */
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;  /* Ocupa pelo menos toda a altura da viewport */
  justify-content: center; /* Centraliza verticalmente */


  @media (min-width: 768px) {
    flex-direction: row;   /* Lado a lado em telas maiores */
    justify-content: space-around; /* Distribui o espaço */
    align-items: center;     /* Centraliza verticalmente */

  }
`;

const StyledLottiePlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;   /* Mantém a largura máxima */
  margin-bottom: 1rem; /* Espaço abaixo em telas menores */

  @media (min-width: 768px) {
        margin-bottom: 0;
  }

`;

const StyledLocalizacaoLabel = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-align: center;
`;

const StyledLocalizacaoAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
`;

const StyledAddressWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLocalizacaoAddress = styled.div`
  font-size: 1rem;
  color: black;
  text-align: center;
  margin-left: 0.5rem;
`;

const StyledMapContainer = styled(MapContainer)`
  width: 45vh;    /* Mantém a largura/altura originais */
  height: 45vh;
  max-width: 600px; /*  Largura máxima para o mapa */


  @media (max-width: 767px) { /*  Ajusta para telas menores, mas mantendo o tamanho */
        width: 80vw;  /*  Ocupa mais espaço na horizontal */
        height: 40vh;  /*  Reduz um pouco a altura */
        max-width: none; /* Remove o max-width em telas menores */
  }

`;