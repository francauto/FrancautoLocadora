// NavigationMenu.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo-francauto-locadora.svg";
import LogoBranca from "../../assets/logo-francauto-locadora-branca.svg";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import "./navigation-menu.css"; //  <-- Usaremos um arquivo CSS separado


const StyledNav = styled.nav`
    /*  Estilos base (transferidos para o CSS) */
`; //  Mantém o StyledNav, mas vazio (usado apenas para o nome da classe)

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const menuItems = [
    { id: "home", label: "Home", offset: -70 },
    { id: "localizacao", label: "Localização", offset: -70 },
    { id: "planos", label: "Planos", offset: -70 },
    { id: "contate-nos", label: "Contate-nos", offset: 0 },
    { id: "duvidas", label: "Dúvidas", offset: -70 },
  ];

  const handleSetActive = (to) => {
    setActiveItem(to);
  };

  const handleClick = (to) => {
    setActiveItem(to);
    setMenuOpen(false); // Fecha o menu ao clicar em um item
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

    useEffect(() => {
    const handleScroll = () => {
      // Atualiza o estado 'scrolled' com base na posição de rolagem
      setScrolled(window.scrollY > 50);

      // Encontra a seção mais visível na tela
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

      setActiveItem(mostVisibleSection); // Atualiza o item ativo
    };

    // Adiciona o listener de scroll ao montar o componente
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Chama a função para definir o estado inicial

    // Remove o listener de scroll ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]); // menuItems como dependência para re-renderizar se mudar

  return (
    <StyledNav
      className={`navigation-menu ${scrolled ? "scrolled" : ""} ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      <img
        src={scrolled ? Logo : LogoBranca}
        alt="Francauto Locadora Logo"
        className="logo"
      />

      <IconButton
        className="menu-toggle"
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
      >
        <MenuIcon />
      </IconButton>

      <ul className="menu-items">
        {menuItems.map((item) => (
          <li key={item.id}>
            <ScrollLink
              to={item.id}
              spy={false} /* Desativa o 'spy' para controle manual */
              smooth={true}
              offset={item.offset}
              duration={500}
              onClick={() => handleClick(item.id)}
              onSetActive={() => handleSetActive(item.id)} //  Mantém, mas não é crucial
              className={activeItem === item.id ? "active" : ""}
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default NavigationMenu;