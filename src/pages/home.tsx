import React, { useState } from "react";
import backgroundhome from "../assets/background-home.svg";
import "./home.css";
import Button from "@mui/material/Button"; // Corrigido o import do botão do Material-UI

const Home = () => {
  const [cardVisible, setCardVisible] = useState(false);

  const handleButtonClick = () => {
    setCardVisible(!cardVisible);
  };

  return (
    <div className="home-background" style={{ height: "100vh" }}>
      <div className={`info-card ${cardVisible ? "visible" : ""}`}>
        <h2>Francauto Locadora</h2>
        <p>
          Oferecemos aluguel de veículos com frota moderna com segurança e
          praticidade!
        </p>
      </div>
      <Button
        variant="contained"
        className="about-button"
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          background: "	#00008B",
        }} // Adiciona o estilo do botão
        onClick={handleButtonClick} // Adiciona o evento de clique
      >
        Sobre Nós!
      </Button>
    </div>
  );
};

export default Home;
