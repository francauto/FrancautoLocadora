"use client";

import { useState, useEffect, useRef } from "react";
import "./App.css";
import Contatenos from "./pages/contate-nos/contate-nos";
import Duvidas from "./pages/duvidas/duvidas";
import Home from "./pages/home/home";
import Localizacao from "./pages/localizacao/localizacao";
import Planos from "./pages/planos/planos";
import NavigationMenu from "./components/navigation-menu/navigation-menu";
import Footer from "./components/footer/footer"; // Importar o Footer

function App() {
  const [isInDuvidas, setIsInDuvidas] = useState(false);

  useEffect(() => {
    const checkIfInDuvidas = () => {
      const duvidasElement = document.getElementById("duvidas");
      if (duvidasElement) {
        const rect = duvidasElement.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsInDuvidas(isVisible);
      }
    };

    window.addEventListener("scroll", checkIfInDuvidas);
    checkIfInDuvidas(); // Verificação inicial

    return () => {
      window.removeEventListener("scroll", checkIfInDuvidas);
    };
  }, []);

  return (
    <>
      <NavigationMenu />
      <div id="home">
        <Home />
      </div>
      <div id="localizacao">
        <Localizacao />
      </div>
      <div id="planos">
        <Planos />
      </div>
      <div id="contate-nos">
        <Contatenos />
      </div>
      <div id="duvidas">
        <Duvidas />
      </div>
      <Footer /> {/* Adicionar o Footer */}
    </>
  );
}

export default App;
