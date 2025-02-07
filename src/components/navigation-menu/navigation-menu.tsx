"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import Logo from "../../assets/logo-francauto-locadora.svg";
import "./navigation-menu.css";

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", offset: -70 },
    { id: "localizacao", label: "Localização", offset: 0 },
    { id: "planos", label: "Planos", offset: -70 },
    { id: "contate-nos", label: "Contate-nos", offset: -70 },
    { id: "duvidas", label: "Dúvidas", offset: -70 },
  ];

  const handleSetActive = (to) => {
    setActiveItem(to);
  };

  const handleClick = (to) => {
    setActiveItem(to);
    setMenuOpen(false);
  };

  const isActive = (id) => {
    return activeItem === id ? "active" : "";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navigation-menu ${scrolled ? "scrolled" : ""}`}>
      <img
        src={Logo || "/placeholder.svg"}
        alt="Francauto Locadora Logo"
        width="200"
        className="logo"
      />
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul className={menuOpen ? "open" : ""}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <ScrollLink
              to={item.id}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
              onSetActive={handleSetActive}
              className={isActive(item.id)}
              onClick={() => handleClick(item.id)}
              activeClass="active"
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
