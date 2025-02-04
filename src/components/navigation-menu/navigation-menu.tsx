"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import Logo from "../../assets/logo-francauto-locadora.svg";
import "./navigation-menu.css";

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "localizacao", label: "Localização" },
    { id: "planos", label: "Planos" },
    { id: "contate-nos", label: "Contate-nos" },
    { id: "duvidas", label: "Dúvidas" },
  ];

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveItem(to);
  };

  const handleClick = (to) => {
    setActiveItem(to);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navigation-menu">
      <img
        src={Logo || "/placeholder.svg"}
        alt="Francauto Locadora Logo"
        width="200"
        className="logo"
      />
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={menuOpen ? "open" : ""}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <ScrollLink
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={handleSetActive}
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
