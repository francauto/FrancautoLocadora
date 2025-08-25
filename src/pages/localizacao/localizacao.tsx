import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./localizacao.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const locationCoords: [number, number] = [-20.545735817532602, -47.42496940963758];
const address = "Avenida Doutor Severino Tostes Meirelles, 1660 - São Miguel, Franca - SP";
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${locationCoords[0]},${locationCoords[1]}`;
const phoneNumber = "5516999661580";

const visualVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeIn' } },
};

const Localizacao = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="localizacao-section">
      <div className="localizacao-container">
        <motion.h2
          className="localizacao-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Encontre o Caminho até a Francauto
        </motion.h2>

        <motion.div
            className="interactive-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          {/* A área que alterna entre Lottie e Mapa */}
          <div className="visual-box">
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.div key="lottie" variants={visualVariants} initial="initial" animate="animate" exit="exit">
                  <DotLottiePlayer
                    src="https://lottie.host/6aebbfe8-164f-483a-9f6f-9cf20b59e857/0SEBNudFPu.lottie"
                    background="transparent"
                    speed={1}
                    loop
                    autoplay
                    // Confirmando sua alteração de tamanho:
                    style={{ width: '85%', height: '85%' }}
                  />
                </motion.div>
              ) : (
                <motion.div key="map" className="map-wrapper" variants={visualVariants} initial="initial" animate="animate" exit="exit">
                  <MapContainer className="map-container" center={locationCoords} zoom={16} scrollWheelZoom={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={locationCoords}>
                      <Popup>Francauto Locadora</Popup>
                    </Marker>
                  </MapContainer>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* O card de endereço que aciona a troca */}
          <div className="address-card">
            <p className="address-card-instruction">
                Passe o mouse aqui para ver o mapa
            </p>
            <p className="address-text">{address}</p>
            <div className="cta-buttons">
              <a className="map-button" href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Abrir Rota
              </a>
              <a className="phone-button" href={`tel:${phoneNumber}`}>
                Ligar
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Localizacao;