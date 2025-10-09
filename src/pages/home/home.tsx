// home.tsx

import { motion, useScroll, useTransform } from "framer-motion";
import backgroundHome from "../../assets/fundo-locadora.png";
import "./home.css";

const Home = () => {
  // Hooks para o efeito parallax
  const { scrollYProgress } = useScroll();
  // Mapeia o progresso do scroll (0 a 1) para um movimento vertical (y) de 0% a 50%
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <div className="home-container">
      <div className="background-overlay" />
      {/* A imagem de fundo agora é um componente 'motion' para ser animada */}
      <motion.img
        src={backgroundHome}
        alt="Background"
        className="background-image"
        style={{ y: yBg }} // Aplica o movimento parallax no eixo Y
      />
      <div className="home-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="home-title"
        >
          Aluguel de Carros Simplificado
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="home-subtitle"
        >
          Veículos novos e seguros para a sua necessidade.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="home-cta-button"
          onClick={() => {
            // Adicione a lógica para rolar para a seção de planos ou navegar
            document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Ver Planos
        </motion.button>
      </div>
    </div>
  );
};

export default Home;