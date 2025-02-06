"use client";

import { useState, useEffect, useRef } from "react";
import "./App.css";
import Contatenos from "./pages/contate-nos/contate-nos";
import Duvidas from "./pages/duvidas/duvidas";
import Home from "./pages/home/home";
import Localizacao from "./pages/localizacao/localizacao";
import Planos from "./pages/planos/planos";
import NavigationMenu from "./components/navigation-menu/navigation-menu";
import whiteCar from "./assets/yello-car.png";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInDuvidas, setIsInDuvidas] = useState(false);
  const carRef = useRef({ x: 0, y: 0, rotation: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const checkIfInDuvidas = () => {
      const duvidasElement = document.getElementById("duvidas");
      if (duvidasElement) {
        const rect = duvidasElement.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsInDuvidas(isVisible);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", checkIfInDuvidas);
    checkIfInDuvidas(); // Verificação inicial

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", checkIfInDuvidas);
    };
  }, []);

  useEffect(() => {
    if (!isInDuvidas) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animateCar = () => {
      const dx = mousePosition.x - carRef.current.x;
      const dy = mousePosition.y - carRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = Math.min(distance * 0.1, 3);

      if (distance > 1) {
        carRef.current.x += (dx / distance) * speed;
        carRef.current.y += (dy / distance) * speed;
        carRef.current.rotation = Math.atan2(dy, dx) * (180 / Math.PI);
      }

      const carElement = document.querySelector(
        ".car-animation"
      ) as HTMLElement;
      if (carElement) {
        carElement.style.transform = `translate(${carRef.current.x}px, ${carRef.current.y}px) rotate(${carRef.current.rotation}deg)`;
      }

      animationRef.current = requestAnimationFrame(animateCar);
    };

    animationRef.current = requestAnimationFrame(animateCar);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, isInDuvidas]);

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
      {isInDuvidas && (
        <div className="car-animation">
          <img
            src={whiteCar || "/placeholder.svg"}
            alt="White Car"
            className="car white-car"
          />
        </div>
      )}
    </>
  );
}

export default App;
