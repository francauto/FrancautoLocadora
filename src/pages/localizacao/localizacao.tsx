// localizacao.tsx

import { useState } from "react";
// NOVO: Importa o tipo Variants
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./localizacao.css";

import { FaMapMarkerAlt, FaClock, FaCar, FaSnowflake, FaWifi, FaRoute, FaPhoneAlt } from "react-icons/fa";

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
const address = "Avenida Doutor Severino Tostes Meirelles, 1660 – São Miguel, Franca – SP";
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${locationCoords[0]},${locationCoords[1]}`;
const phoneNumber = "5516999661580";

// ADICIONADO: Tipagem explícita para a constante, resolvendo o erro.
const visualVariants: Variants = {
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
          viewport={{}}
          transition={{ duration: 0.8 }}
        >
          Encontre o Caminho até a Francauto
        </motion.h2>

        <motion.p
          className="localizacao-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Estamos prontos para te receber. Visite nossa loja e conheça nossa frota de perto.
        </motion.p>

        <div className="localizacao-content-grid">
          {/* Coluna da Esquerda: Informações */}
          <motion.div 
            className="info-panel"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            // CORRIGIDO: Removido 'ease: "easeOut"' que causava o erro
            transition={{ duration: 0.8 }}
          >
            <div className="address-line">
              <FaMapMarkerAlt className="address-icon" />
              <p className="address-text">{address}</p>
            </div>

            <div className="cta-buttons">
              <motion.a className="map-button" href={googleMapsUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FaRoute /> Abrir Rota
              </motion.a>
              <motion.a className="phone-button" href={`tel:${phoneNumber}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FaPhoneAlt /> Ligar
              </motion.a>
            </div>

            <div className="info-section">
              <h4 className="info-title"><FaClock /> Horário de Funcionamento</h4>
              <p>Segunda a Sexta: 08:00 – 18:00</p>
              <p>Sábado: 08:00 – 12:00</p>
            </div>

            <div className="info-section">
              <h4 className="info-title"><FaCar /> Comodidades</h4>
              <ul className="amenities-list">
                <li className="amenity-item"><FaCar /> Estacionamento no local</li>
                <li className="amenity-item"><FaSnowflake /> Ambiente climatizado</li>
                <li className="amenity-item"><FaWifi /> Wi-Fi para clientes</li>
              </ul>
            </div>
          </motion.div>

          {/* Coluna da Direita: Lottie/Mapa Interativo */}
          <motion.div 
            className="visual-panel"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            // CORRIGIDO: Removido 'ease: "easeOut"' que causava o erro
            transition={{ duration: 0.8, delay: 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className="address-card-instruction">
                Passe o mouse aqui para ver o mapa
            </p>
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
                      style={{ width: '100%', height: '100%' }}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Localizacao;