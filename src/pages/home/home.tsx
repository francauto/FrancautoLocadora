import { motion } from "framer-motion";
import backgroundHome from "../../assets/background-home.svg";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-overlay" />
      <img src={backgroundHome} alt="Background" className="background-image" />
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