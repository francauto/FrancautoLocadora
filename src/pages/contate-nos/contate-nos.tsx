import React from "react";
import Image from "../../assets/contate-nos-image.svg";
import "./contate-nos.css";
import "@dotlottie/player-component";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Contatenos = () => {
  return (
    <div className="contate-nos-container">
      <div className="contate-nos-left">
        <h2 className="titulo-contate-nos">
          Nos siga nas <br /> Redes Sociais!
        </h2>
        <div className="social-media-container">
          <div className="contate-nos-row">
            <div className="contate-nos-item">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<InstagramIcon />}
                href="https://www.instagram.com/francautolocadora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Button>
            </div>
            <div className="contate-nos-item">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<FacebookIcon />}
                href="https://www.facebook.com/francautolocadora1?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Button>
            </div>
          </div>
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
              <p>(16) 99999-9999</p>
              <dotlottie-player
                src="https://lottie.host/ce0c0e73-a7dc-41c8-8a31-170643570b55/DEaqQ1BKDX.lottie"
                background="transparent"
                speed="1"
                style={{ width: "30px", height: "30px", marginLeft: "8px" }}
                loop
                autoplay
              ></dotlottie-player>
              <p>(16) 99999-9999</p>
            </div>
          </div>
          <div className="contate-nos-row">
            <div className="contate-nos-item">
              <dotlottie-player
                src="https://lottie.host/d0ac8511-2f03-4b79-bc6b-ef10040209a5/VbxGamgHMB.lottie"
                background="transparent"
                speed="1"
                style={{ width: "30px", height: "30px" }}
                loop
                autoplay
              ></dotlottie-player>
              <p>francatolocadora@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contate-nos-right">
        <img
          src={Image || "/placeholder.svg"}
          alt="Contate-nos"
          className="contate-nos-image"
        />
      </div>
    </div>
  );
};

export default Contatenos;
