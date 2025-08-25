import { useEffect } from "react";
import { motion, Variants } from "framer-motion"; // <-- 1. IMPORTAR O TIPO 'VARIANTS'

import "./App.css";

// Componentes e Páginas
import NavigationMenu from "./components/navigation-menu/navigation-menu";
import Home from "./pages/home/home";
import Planos from "./pages/planos/planos";
import Localizacao from "./pages/localizacao/localizacao";
import Duvidas from "./pages/duvidas/duvidas";
import CardContatenos from "./components/card-contate-nos/card-contate-nos";
import Footer from "./components/footer/footer";
import WhatsAppIcon from "./components/whatsApp-icon/whatsApp-icon";
import { initializeGA } from "./components/google-analytics/google-analytics";

// Variantes de animação para as seções
// 2. APLICAR O TIPO 'VARIANTS' À CONSTANTE -->
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function App() {
  useEffect(() => {
    initializeGA(); // Inicializa o Google Analytics
  }, []);

  return (
    <>
      <NavigationMenu />
      <main>
        {/* A seção Home tem seu próprio container */}
        <section id="home">
          <Home />
        </section>

        <motion.section
          id="planos"
          className="page-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Planos />
        </motion.section>

        <motion.section
          id="localizacao"
          className="page-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Localizacao />
        </motion.section>

        <motion.section
          id="duvidas"
          className="page-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Duvidas />
        </motion.section>

        {/* O componente de contato agora é tratado como uma seção também */}
        <motion.section
          id="contate-nos"
          className="page-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CardContatenos />
        </motion.section>
      </main>
      <Footer />
      <WhatsAppIcon />
    </>
  );
}

export default App;