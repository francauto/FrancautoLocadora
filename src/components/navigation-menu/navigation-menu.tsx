"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/logo-francauto-locadora.svg";
import LogoBranca from "../../assets/logo-francauto-locadora-branca.svg";
import "./navigation-menu.css";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "planos", label: "Planos" },
  { id: "localizacao", label: "Localização" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "contate-nos", label: "Contate-nos" },
];

// NOVO: Array com os IDs das seções de fundo claro
const lightSections = ['localizacao', , 'contate-nos'];

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px", threshold: 0 }
    );
    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.current?.observe(element);
      }
    });
    return () => observer.current?.disconnect();
  }, []);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  // NOVA LÓGICA: Determina se o tema escuro deve ser forçado
  // Isso acontece se a seção ativa for clara E a página não foi rolada
  const forceDarkTheme = lightSections.includes(activeItem) && !scrolled;

  return (
    <>
      <motion.nav
        className={`navigation-menu ${scrolled ? "scrolled" : ""} ${forceDarkTheme ? "force-dark-theme" : ""} ${menuOpen ? "menu-open" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* LÓGICA DO LOGO ATUALIZADA */}
        <img
          src={(scrolled || forceDarkTheme || menuOpen) ? Logo : LogoBranca}
          alt="Francauto Locadora Logo"
          className="logo"
        />

        <ul className="desktop-menu-items">
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => handleScrollTo(item.id)}>
              <a className={activeItem === item.id ? "active" : ""}>
                {item.label}
                {activeItem === item.id && (
                  <motion.div
                    className="active-underline"
                    layoutId="active-underline"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="menu-toggle"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <div className="menu-toggle-icon">
            <motion.div
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            />
            <motion.div animate={{ opacity: menuOpen ? 0 : 1 }} />
            <motion.div
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            />
          </div>
        </button>
      </motion.nav>

      {/* Painel Mobile (sem alterações) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.ul
              className="mobile-menu-items"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => handleScrollTo(item.id)}
                >
                  <a className={activeItem === item.id ? "active" : ""}>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationMenu;