"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo-francauto-locadora.svg";
import "./navigation-menu.css";

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", offset: -70 },
    { id: "localizacao", label: "Localização", offset: -70 },
    { id: "planos", label: "Planos", offset: -70 },
    { id: "contate-nos", label: "Contate-nos", offset: -70 },
    { id: "duvidas", label: "Dúvidas", offset: -70 },
  ];

  const handleSetActive = (to: string) => {
    setActiveItem(to);
  };

  const handleClick = (to: string) => {
    setActiveItem(to);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Encontra qual seção está mais visível na tela
      const sections = menuItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      let maxVisibility = 0;
      let mostVisibleSection = "home";

      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibility = Math.min(
            Math.max(
              0,
              Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
            ),
            window.innerHeight
          );

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSection = id;
          }
        }
      });

      setActiveItem(mostVisibleSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificação inicial

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul className={menuOpen ? "open" : ""}>
        {menuItems.map((item, index) => (
          <li key={item.id} style={{ "--i": index } as React.CSSProperties}>
            <ScrollLink
              to={item.id}
              spy={false}
              smooth={true}
              offset={item.offset}
              duration={500}
              className={activeItem === item.id ? "active" : ""}
              onClick={() => handleClick(item.id)}
              onSetActive={() => handleSetActive(item.id)}
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
