"use client";

import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo-francauto-locadora.svg";
import "./navigation-menu.css";

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const menuItems = [
    { id: "home", label: "Home", offset: -70 },
    { id: "localizacao", label: "Localização", offset: 0 },
    { id: "planos", label: "Planos", offset: -70 },
    { id: "contate-nos", label: "Contate-nos", offset: -70 },
    { id: "duvidas", label: "Dúvidas", offset: -70 },
  ];

  const handleClick = (to: string) => {
    setActiveItem(to);
    setMenuOpen(false);
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
              className={activeItem === item.id ? "active" : ""}
              onClick={() => handleClick(item.id)}
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
