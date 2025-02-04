import React, { useState } from "react";
import Logo from "../../assets/logo-francauto-locadora.svg";
import "./navigation-menu.css"; // Import the CSS file for styling

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (hash) => {
    setActiveItem(hash);
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navigation-menu">
      <img
        src={Logo}
        alt="Francauto Locadora Logo"
        width="200"
        className="logo"
      />{" "}
      {/* Added className="logo" */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={menuOpen ? "open" : ""}>
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
            className={activeItem === "#contatos" ? "active" : ""}
            onClick={() => handleClick("#contatos")}
          >
            Contatos
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
            href="#monte-o-seu"
            className={activeItem === "#monte-o-seu" ? "active" : ""}
            onClick={() => handleClick("#monte-o-seu")}
          >
            Monte o seu
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
