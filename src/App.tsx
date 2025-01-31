import { useState } from "react";
import LogoFrancautoLocadora from "./assets/logo-francauto-locadora.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Contatenos from "./pages/contate-nos";
import Duvidas from "./pages/duvidas";
import Home from "./pages/home";
import Localizacao from "./pages/localizacao";
import Planos from "./pages/planos";
import NavigationMenu from "./components/navigation-menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationMenu />
      <Home />
      <Localizacao />
      <Planos />
      <Contatenos />
      <Duvidas />
    </>
  );
}

export default App;
