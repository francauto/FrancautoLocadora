

import { useEffect } from "react";
import "./App.css";
import Contatenos from "./pages/contate-nos/contate-nos";
import Duvidas from "./pages/duvidas/duvidas";
import Home from "./pages/home/home";
import Localizacao from "./pages/localizacao/localizacao";
import Planos from "./pages/planos/planos";
import NavigationMenu from "./components/navigation-menu/navigation-menu";
import Footer from "./components/footer/footer";
import WhatsAppIcon from "./components/whatsApp-icon/whatsApp-icon";
import { initializeGA } from './components/google-analytics/google-analytics';
import '@dotlottie/player-component';


function App() {

  useEffect(() => {
    initializeGA(); // Inicializa o Google Analytics
  }, []);

  return (
    <>
      <NavigationMenu />
      {/* Envolve o conteúdo principal em uma div com uma classe */}
      <div className="main-content">
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
      </div>
      <Footer />
      <WhatsAppIcon />
    </>
  );
}

export default App;