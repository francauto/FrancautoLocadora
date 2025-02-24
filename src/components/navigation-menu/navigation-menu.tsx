"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo-francauto-locadora.svg";
import LogoBranca from "../../assets/logo-francauto-locadora-branca.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Nav,
  LogoImg,
  MenuToggle,
  MenuList,
  MenuItem,
  StyledScrollLink,
} from "./styles";

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
    setMenuOpen(false); // Fecha o menu ao clicar em um item
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
    <Nav className={scrolled ? "scrolled" : ""}>
      <LogoImg
        src={scrolled ? Logo : LogoBranca}
        alt="Francauto Locadora Logo"
      />

      <MenuToggle onClick={handleMenuToggle}>
        <MenuIcon />
      </MenuToggle>

      <MenuList $isOpen={menuOpen}>
        {menuItems.map((item, index) => (
          <MenuItem key={item.id}>
            <StyledScrollLink
              to={item.id}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
              onClick={() => handleClick(item.id)}
              onSetActive={() => handleSetActive(item.id)}
              className={activeItem === item.id ? "active" : ""}
            >
              {item.label}
            </StyledScrollLink>
          </MenuItem>
        ))}
      </MenuList>
    </Nav>
  );
};

export default NavigationMenu;