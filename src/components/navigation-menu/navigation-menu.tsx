import React, { useState } from "react";
import Logo from "../../assets/logo-francauto-locadora.svg";
import "./navigation-menu.css"; // Import the CSS file for styling

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState("#home");

  const handleClick = (hash) => {
    setActiveItem(hash);
  };

  return (
    <nav className="navigation-menu">
      <img src={Logo} alt="Francauto Locadora Logo" width="200" />{" "}
      {/* Change width here */}
      <ul>
        <li>
          <a
            href="#home"
            className={activeItem === "#home" ? "active" : ""}
            onClick={() => handleClick("#home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#localizacao"
            className={activeItem === "#localizacao" ? "active" : ""}
            onClick={() => handleClick("#localizacao")}
          >
            Localização
          </a>
        </li>
        <li>
          <a
            href="#planos"
            className={activeItem === "#planos" ? "active" : ""}
            onClick={() => handleClick("#planos")}
          >
            Planos
          </a>
        </li>
        <li>
          <a
            href="#contate-nos"
            className={activeItem === "#contate-nos" ? "active" : ""}
            onClick={() => handleClick("#contate-nos")}
          >
            Contate-nos
          </a>
        </li>
        <li>
          <a
            href="#duvidas"
            className={activeItem === "#duvidas" ? "active" : ""}
            onClick={() => handleClick("#duvidas")}
          >
            Dúvidas
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
