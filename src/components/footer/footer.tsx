import { motion } from "framer-motion";
import "./footer.css";
// Se for usar ícones de redes sociais, instale react-icons (npm install react-icons)
// import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="footer-content">
        <p>
          Copyright © 2025 Desenvolvimento FrancautoLabs. Todos os direitos
          reservados.
        </p>
        {/* Descomente esta seção se quiser adicionar ícones de redes sociais */}
        {/*
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
        */}
      </div>
    </motion.footer>
  );
};

export default Footer;