// contate-nos.tsx

import "./contate-nos.css";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CardContatenos from "../../components/card-contate-nos/card-contate-nos";
import { DotLottiePlayer } from "@dotlottie/react-player";
import '@dotlottie/player-component';
import { motion } from "framer-motion";

const Contatenos = () => {
  return (
    <div className="contate-nos-container">
      <div className="contate-nos-card">
        <div className="contate-nos-content"> 
          <motion.div 
            className="contate-nos-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            // ALTERAÇÃO AQUI: 'once' removido
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="titulo-contate-nos">
              Nos siga nas <br /> Redes Sociais!
            </h2>
            <div className="social-media-container">
              <div className="contate-nos-row">
                <div className="contate-nos-button">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#833AB4",
                      color: "white",
                      borderRadius: "10px",
                    }}
                    startIcon={<InstagramIcon />}
                    href="https://www.instagram.com/francautolocadora"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Button>
                </div>
                <div className="contate-nos-button">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#3b5998",
                      color: "white",
                      borderRadius: "10px",
                    }}
                    startIcon={<FacebookIcon />}
                    href="https://www.facebook.com/francautolocadora1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contate-nos-right"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            // ALTERAÇÃO AQUI: 'once' removido
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          > 
            <h3 className="subtitulo-contatos">Contatos</h3>
            <div className="contate-nos-row">
              <div className="contate-nos-item">
                <DotLottiePlayer
                  src="https://lottie.host/c00ab8df-73b8-4f23-8556-fcee37a20bab/US0mU7ZLwv.lottie"
                  background="transparent"
                  speed={1}
                  style={{ width: "30px", height: "30px" }}
                  loop
                  autoplay
                ></DotLottiePlayer>
                <a
                  href="tel:+5516999661580"
                  className="text no-wrap"
                  style={{ fontSize: "16px" }}
                >
                  (16) 99966-1580
                </a>
                <DotLottiePlayer
                  src="https://lottie.host/ce0c0e73-a7dc-41c8-8a31-170643570b55/DEaqQ1BKDX.lottie"
                  background="transparent"
                  speed={1}
                  style={{ width: "30px", height: "30px", marginLeft: "8px" }}
                  loop
                  autoplay
                ></DotLottiePlayer>
                <a
                  href="https://wa.me/5516999661580"
                  className="text no-wrap"
                  style={{ fontSize: "16px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (16) 99966-1580
                </a>
              </div>
            </div>
            <div className="contate-nos-row">
              <div className="contate-nos-item">
                <DotLottiePlayer
                  src="https://lottie.host/22b0ad59-7153-4e78-a3c6-42d0d7ac45c6/Eup1p4J0nJ.lottie"
                  background="transparent"
                  speed={1}
                  style={{ width: "30px", height: "30px" }}
                  loop
                  autoplay
                ></DotLottiePlayer>
                <a
                  href="mailto:francautolocadora@gmail.com"
                  className="text no-wrap"
                  style={{ fontSize: "16px" }}
                >
                  francautolocadora@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <CardContatenos />
      </motion.div>
    </div>
  );
};

export default Contatenos;