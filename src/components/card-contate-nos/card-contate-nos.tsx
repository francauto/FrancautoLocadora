// card-contate-nos.tsx

import { useState } from "react";
// NOVO: Importa o tipo Variants para ajudar o TypeScript
import { motion, AnimatePresence, Variants } from "framer-motion";
import "./card-contate-nos.css";
import WolksvagemIcone from "../../assets/icone-volkswagen.svg";
import IconeLocadora from "../../assets/icone-francauto-locadora.svg";
import IconeConsorcio from "../../assets/icone-consorcio.svg";
import BackgroundFrancautoLocadora from "../../assets/background-card-locadora.svg";
import BackgroundFrancautoConsorcio from "../../assets/background-card-consorcio.svg";
import BackgroundFrancautoNovos from "../../assets/background-card-novos.svg";
import BackgroundFrancautoSemiNovos from "../../assets/background-card-semi-novos.svg";
import BackgroundFrancautoPecas from "../../assets/background-card-pecas.svg";

const cardInfo = [
  { title: "Francauto Novos", description: "Encontre o Volkswagen 0KM dos seus sonhos com as melhores condições.", background: BackgroundFrancautoNovos, icon: WolksvagemIcone, url: "https://www.francauto.com.br/distrito-industrial" },
  { title: "Francauto Locadora", description: "Alugue veículos em Franca/SP com uma frota moderna para suas necessidades.", background: BackgroundFrancautoLocadora, icon: IconeLocadora, url: "https://www.francautolocadora.com.br/" },
  { title: "Francauto Seminovos", description: "Veículos de qualidade com garantia e procedência, passando por rigorosa inspeção.", background: BackgroundFrancautoSemiNovos, icon: WolksvagemIcone, url: "https://www.francauto.com.br/jardim-integracao" },
  { title: "Francauto Consórcio", description: "Planos flexíveis para aquisição de veículos, com parcelas que cabem no seu bolso.", background: BackgroundFrancautoConsorcio, icon: IconeConsorcio, url: "https://francautoconsorcio.com.br/" },
  { title: "Francauto Peças", description: "Peças originais Volkswagen com garantia de fábrica, assegurando o melhor desempenho.", background: BackgroundFrancautoPecas, icon: WolksvagemIcone, url: "https://pecas.francauto.com.br/" },
];

// ADICIONADO: Tipagem explícita para a constante, resolvendo o erro.
const panelVariants: Variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: "-100%", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const wallContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardEntryVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


const CardContatenos = () => {
  const [activeCard, setActiveCard] = useState<number>(-1);

  return (
    <div className="contate-nos-section">
      <motion.h2 
        className="contate-nos-title" 
        initial={{ opacity: 0, y: -30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ amount: 0.5 }} 
        transition={{ duration: 0.8 }}
      >
        Conheça o Grupo Francauto
      </motion.h2>
      <motion.p 
        className="contate-nos-subtitle" 
        initial={{ opacity: 0, y: -30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ amount: 0.5 }} 
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Somos mais do que uma locadora. Explore todos os nossos serviços e encontre o que precisa.
      </motion.p>

      <motion.div 
        className="card-wall-container"
        variants={wallContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        {cardInfo.map((card, index) => (
          <motion.div
            key={index}
            className="card-item"
            onMouseEnter={() => setActiveCard(index)}
            onClick={() => setActiveCard(activeCard === index ? -1 : index)}
            layout
            variants={cardEntryVariants}
            animate={{ flexGrow: activeCard === index ? 10 : 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <motion.img layout="position" className="card-background" src={card.background} alt={card.title} />
            <div className="card-overlay" />
            <div className="card-content-wrapper">
                <AnimatePresence>
                    {activeCard !== index && (
                        <motion.div className="collapsed-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <img src={card.icon} alt="" className="collapsed-icon" />
                            <h3 className="collapsed-title">{card.title}</h3>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {activeCard === index && (
                    <motion.div className="expanded-content-panel" variants={panelVariants} initial="hidden" animate="visible" exit="exit">
                        <motion.h3 variants={{hidden: {opacity: 0, y:20}, visible: {opacity: 1, y: 0, transition: {delay: 0.3}}}}>
                            {card.title}
                        </motion.h3>
                        <motion.p variants={{hidden: {opacity: 0, y:20}, visible: {opacity: 1, y: 0, transition: {delay: 0.4}}}}>
                            {card.description}
                        </motion.p>
                        <motion.a href={card.url} target="_blank" rel="noopener noreferrer" className="card-button" variants={{hidden: {opacity: 0, y:20}, visible: {opacity: 1, y: 0, transition: {delay: 0.5}}}} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                            Visitar Site
                        </motion.a>
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardContatenos;