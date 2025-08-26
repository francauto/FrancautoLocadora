// duvidas.tsx

import { useState } from "react";
// NOVO: Importa o tipo Variants
import { motion, AnimatePresence, Variants } from "framer-motion";
import "./duvidas.css";

const faqs = [
    { question: "O QUE O SEGURO COBRE?", answer: "O seguro cobre casos de roubo, furto, incêndio e perda total. Nesses casos, o cliente é responsável pelo pagamento da franquia do veículo. Em casos de danos de pequeno porte, são cobrados apenas os valores do orçamento." },
    { question: "ONDE ARRUMAR O CARRO EM CASO DE SINISTRO?", answer: "Nosso seguro é conveniado com a oficina da Francauto. Portanto, qualquer reparo necessário será realizado em nossa loja." },
    { question: "E SE EU BATER EM OUTRO CARRO?", answer: "Temos seguro contra terceiros. No entanto, a franquia é acionada para cobrir os danos dos dois veículos. Alternativamente, o reparo do carro do terceiro pode ser feito onde ele preferir." },
    { question: "E SE OUTRO CARRO BATER NO CARRO DA LOCADORA?", answer: "Se o terceiro não possuir seguro, poderá utilizar o nosso e negociar para cobrir as despesas. Se o terceiro possuir seguro, o processo seguirá conforme a seguradora dele." },
    { question: "E SE O CARRO ESTRAGAR?", answer: "Nosso seguro oferece assistência 24 horas com guincho. Temos até 48 horas para solucionar problemas de pane elétrica ou mecânica." },
    { question: "O CARRO TEM SEM PARAR?", answer: "Não, o cliente deve realizar o cadastro em um ponto de venda autorizado do Sem Parar. É um serviço de pagamento automático que facilita a vida do motorista." },
    { question: "TENHO QUE LAVAR O CARRO PARA ENTREGAR?", answer: "Não é necessário, pois o valor do orçamento já inclui a taxa de limpeza, garantindo que o veículo esteja em boas condições para o próximo cliente." },
    { question: "COMO FUNCIONA A CAUÇÃO?", answer: "A caução refere-se à franquia do veículo, variando entre R$ 500,00 e R$ 1.500,00. O valor é deixado na retirada e estornado na devolução, se não houver avarias." },
    { question: "TENHO QUE ABASTECER O CARRO?", answer: "Sim, o veículo deve ser devolvido com o tanque cheio e abastecido com etanol, nas mesmas condições em que você o recebeu." },
    { question: "COMO É A QUILOMETRAGEM?", answer: "No aluguel diário, a quilometragem é livre. No plano mensal, a quilometragem é limitada e não há opção de quilometragem livre." },
];

// ADICIONADO: Tipagem explícita para resolver o erro
const answerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

// ADICIONADO: Tipagem para consistência
const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

// ADICIONADO: Tipagem para consistência
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Duvidas = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selectedFaq = faqs[selectedIndex];

  return (
    <div className="duvidas-section">
      <div className="duvidas-container">
        <motion.h2
          className="duvidas-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 0.8 }}
        >
          Perguntas Frequentes
        </motion.h2>
        <motion.p
          className="duvidas-subtitle"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Exclareça suas duvidas de forma rápida e clara.
        </motion.p>
        <motion.div
          className="faq-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="questions-list"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                className={`question-item ${selectedIndex === index ? "active" : ""}`}
                onClick={() => setSelectedIndex(index)}
              >
                {faq.question}
                {selectedIndex === index && <motion.div className="active-indicator" layoutId="active-indicator" />}
              </motion.button>
            ))}
          </motion.div>

          <div className="answer-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                variants={answerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h3 className="answer-question">{selectedFaq.question}</h3>
                <p className="answer-text">{selectedFaq.answer}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Duvidas;