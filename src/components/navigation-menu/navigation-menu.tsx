"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo-francauto-locadora.svg";
import LogoBranca from "../../assets/logo-francauto-locadora-branca.svg";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";

// Estilos CSS incorporados
const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  z-index: 1000;
  padding: 20px 40px;
  font-family: "Open Sans", sans-serif;
  transition: all 0.3s ease;

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .logo {
    width: 150px;
    height: auto;
    transition: transform 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.05);
  }

  .menu-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  li {
    margin: 0 15px;
    position: relative;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
    padding: 5px 0;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
  }

  &.scrolled a {
    color: rgb(0, 0, 0);
  }

  a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: white;
    transition: width 0.5s ease;
  }

  &.scrolled a::after {
    background-color: black;
  }

  a:hover::after {
    width: 100%;
  }

  a.active {
    color: inherit;
  }

  &.scrolled a.active::after,
  a.active::after {
    width: 100%;
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
  }

  &.scrolled .menu-toggle {
    color: black;
  }

  /* --- Media Queries --- */

  @media (max-width: 1024px) {
    li {
      margin: 0 10px;
    }

    .logo {
      width: 130px;
    }
  }

  @media (max-width: 768px) {
    .menu-items {
      display: none;
      flex-direction: column;
      position: fixed;
      top: 30px;
      left: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.95);
      padding: 20px 0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 999;
      transition: transform 0.3s ease-out, opacity 0.3s ease-out;
      transform: translateY(-100%);
      opacity: 0;
    }

    .menu-items.open {
      display: flex;
      transform: translateY(0);
      opacity: 1;
    }

    align-items: flex-start;
    justify-content: space-between;
    padding-left: 10px;

    li {
      margin: 10px 0;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }

    li:last-child {
      border-bottom: none;
    }

    .menu-toggle {
      display: block;
      margin-left: calc((100vw - 95%) / 2); /* Deslocamento igual às sessões */
      margin-right: 10px; /* Adiciona margem à direita */
    }

    .logo {
      width: 120px;
    }

    a {
      color: #333;
      font-size: 1rem;
      width: 100%;
      display: block;
      padding: 10px 0;
      transition: background-color 0.3s ease, color 0.3s ease;
      border-radius: 5px;
    }

    a:hover {
      background-color: #f0f0f0;
      color: #0056b3;
    }

    a.active {
      color: #0056b3;
      font-weight: bold;
    }
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
    justify-content: space-between;

    .menu-toggle {
      margin-left: calc((100vw - 95%) / 2); /* Deslocamento igual às sessões */
      margin-right: 10px; /* Adiciona margem à direita */
      margin-top: -5px;
      color: white;
    }

    li {
      margin: 5px 0;
    }

    .logo {
      width: 100px;
    }
  }

    /* Media Query para Desktop */
  @media (min-width: 769px) {
        padding-right: 10px;
    .logo{
      margin-left: 40px;
    }
    .menu-items{
      margin-right: 20px;
    }
  }
`;

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

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
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  return (
    <StyledNav className={scrolled ? "navigation-menu scrolled" : "navigation-menu"}>
      <img
        src={scrolled ? Logo : LogoBranca}
        alt="Francauto Locadora Logo"
        width="200"
        className="logo"
      />

      {isMobile ? (
        <IconButton
          className="menu-toggle"
          onClick={handleMenuToggle}
          aria-label="Toggle menu">
          <MenuIcon />
        </IconButton>
      ) : null}

      <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <ScrollLink
              to={item.id}
              spy={false}
              smooth={true}
              offset={item.offset}
              duration={500}
              onClick={() => handleClick(item.id)}
              onSetActive={() => handleSetActive(item.id)}
              className={activeItem === item.id ? "active" : ""}>
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default NavigationMenu;