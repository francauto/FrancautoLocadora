"use client";

import type React from "react";
import { FaPhone, FaEnvelope, FaCar } from "react-icons/fa"; // Ícones da Francauto Locadora
import "./footer.css";

// Dados para os links de contato
const contactLinks = [
  {
    href: "tel:5516999661580",
    Icon: FaPhone,
    text: "(16) 99966-1580",
  },
  {
    href: "mailto:francautolocadora@gmail.com", 
    Icon: FaEnvelope,
    text: "francautolocadora@gmail.com",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* Conteúdo Principal (Informações e Contato) */}
        <div className="footer-content">
          {/* Seção de Informações da Empresa */}
          <div className="company-info">
            <div className="logo">
              <div className="avatar">
                <FaCar />
              </div>
              <span className="brand-name">Francauto Locadora</span>
            </div>
            <p className="description">
              Sua melhor opção em aluguel de veículos em Franca/SP. Frota nova,
              segura e com o atendimento que você merece.
            </p>
          </div>

          {/* Seção de Contato */}
          <div className="support-section">
            <h2 className="support-title">
              Fale Conosco
            </h2>
            <div className="contact-links">
              {contactLinks.map(({ href, Icon, text }) => (
                <a key={href} href={href} className="contact-link">
                  <Icon className="icon" />
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Seção de Copyright */}
        <div className="copyright">
          <span>© 2025 Francauto Locadora. Todos os direitos reservados.</span>
          <span className="developed-by">
            Desenvolvido com <span className="heart">❤️</span> por FrancautoLabs
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;