import { useState } from "react";
import "./App.css";
import Contatenos from "./pages/contate-nos";
import Duvidas from "./pages/duvidas";
import Home from "./pages/home/home";
import Localizacao from "./pages/localizacao/localizacao";
import Planos from "./pages/planos";
import NavigationMenu from "./components/navigation-menu/navigation-menu";

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
