// Localizacao.tsx
import { useRef } from "react";
import{DotLottiePlayer} from "@dotlottie/react-player";
import '@dotlottie/player-component'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "./localizacao.css"; // Importa o CSS

// Fix for default icon issue with Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Localizacao = () => {
  const lottiePlayerRef = useRef(null);

  return (
    <div className="localizacao-container">
      <div className="lottie-player-container">
        <DotLottiePlayer
          ref={lottiePlayerRef}
          src="https://lottie.host/6aebbfe8-164f-483a-9f6f-9cf20b59e857/0SEBNudFPu.lottie"
          background="transparent"
          speed={1}
          style={{ width: "400px", height: "400px" }}
          loop
          autoplay
        />
        <div className="localizacao-label">LOCALIZAÇÃO</div>
        <div className="localizacao-address-container">
          <div className="address-with-icon">
            <DotLottiePlayer
              src="https://lottie.host/ae0b12fc-639c-4c8c-b9b2-c4ed637b9662/Z1MlOrSyY2.lottie"
              background="transparent"
              speed={1}
              style={{ width: "50px", height: "50px" }}
              loop
              autoplay
            />
            <div className="localizacao-address">
              Avenida Doutor Severino Tostes Meirelles,
              <br />
              1660 - São Miguel, Franca São Paulo
            </div>
          </div>
        </div>
      </div>
      <MapContainer
        className="map-container"
        center={[-20.545735817532602, -47.42496940963758]}
        zoom={15}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[-20.545735817532602, -47.42496940963758]}>
          <Popup>Francauto - Concessionária</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Localizacao;