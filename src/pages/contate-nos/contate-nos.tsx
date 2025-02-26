import React from "react";
import "./contate-nos.css";
import "@dotlottie/player-component";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CardContatenos from "../../components/card-contate-nos/card-contate-nos";

const Contatenos = () => {
  return (
    <div className="contate-nos-container">
      <div className="contate-nos-left">
        <h2 className="titulo-contate-nos">
          Nos siga nas <br /> Redes Sociais!
        </h2>
        <div className="social-media-container">
          <div className="contate-nos-row">
            <div className="contate-nos-button">
              <Button
                variant="contained"
                style={{ backgroundColor: "#833AB4", color: "white" ,borderRadius: "10px"}}
                startIcon={<InstagramIcon />}
                href="https://www.instagram.com/francautolocadora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Button>
            </div>
            <div className="contate-nos-button">
              <Button
                variant="contained"
                style={{ backgroundColor: "#3b5998", color: "white", borderRadius: "10px" }}
                startIcon={<FacebookIcon />}
                href="https://www.facebook.com/francautolocadora1?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Button>
            </div>
          </div>
          <h3 className="subtitulo-contatos">Contatos</h3>
          <div className="contate-nos-row">
            <div className="contate-nos-item">
              <dotlottie-player
                src="https://lottie.host/c00ab8df-73b8-4f23-8556-fcee37a20bab/US0mU7ZLwv.lottie"
                background="transparent"
                speed="1"
                style={{ width: "30px", height: "30px" }}
                loop
                autoplay
              ></dotlottie-player>
              <a href="tel:+5516999661580" className="text no-wrap" style={{ fontSize: "16px" }}>(16) 99966-1580</a>
              <dotlottie-player
                src="https://lottie.host/ce0c0e73-a7dc-41c8-8a31-170643570b55/DEaqQ1BKDX.lottie"
                background="transparent"
                speed="1"
                style={{ width: "30px", height: "30px", marginLeft: "8px" }}
                loop
                autoplay
              ></dotlottie-player>
              <a href="https://wa.me/5516999661580" className="text no-wrap" style={{ fontSize: "16px" }} target="_blank" rel="noopener noreferrer">(16) 99966-1580</a>
            </div>
          </div>
          <div className="contate-nos-row">
            <div className="contate-nos-item">
              <dotlottie-player
                src="https://lottie.host/22b0ad59-7153-4e78-a3c6-42d0d7ac45c6/Eup1p4J0nJ.lottie"
                background="transparent"
                speed="1"
                style={{ width: "30px", height: "30px" }}
                loop
                autoplay
              ></dotlottie-player>
              <a href="mailto:francautolocadora@gmail.com" className="text no-wrap" style={{ fontSize: "16px" }}>francautolocadora@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="contate-nos-right">
        <CardContatenos />
      </div>
    </div>
  );
};

export default Contatenos;
