import React, { useState, useEffect } from "react";
import "./duvidas.css";

const faqs = [
  {
    question: "O QUE O SEGURO COBRE?",
    answer:
      "O seguro cobre casos de roubo, furto, incêndio e perda total. Nesses casos, o cliente é responsável pelo pagamento da franquia do veículo. Em casos de danos de pequeno porte, são cobrados apenas os valores do orçamento.",
  },
  {
    question: "ONDE ARRUMAR O CARRO EM CASO DE SINISTRO?",
    answer:
      "Nosso seguro é conveniado com a oficina da Francauto. Portanto, qualquer reparo necessário será realizado em nossa loja.",
  },
  {
    question: "E SE EU BATER EM OUTRO CARRO?",
    answer:
      "Temos seguro contra terceiros. No entanto, a franquia é acionada para cobrir os danos dos dois veículos. Alternativamente, o reparo do carro do terceiro pode ser feito onde ele preferir.",
  },
  {
    question: "E SE OUTRO CARRO BATER NO CARRO DA LOCADORA, O QUE FAZER?",
    answer:
      "Se o terceiro não possuir seguro, poderá utilizar o nosso e negociar para cobrir as despesas. Se o terceiro possuir seguro, o processo seguirá conforme a seguradora dele.",
  },
  {
    question: "E SE O CARRO ESTRAGAR?",
    answer:
      "Nosso seguro oferece assistência 24 horas com guincho. Temos até 48 horas para solucionar problemas de pane elétrica ou mecânica.",
  },
  {
    question: "O CARRO TEM SEM PARAR?",
    answer:
      "Não, o cliente deve realizar o cadastro em um ponto de venda autorizado do Sem Parar. O Sem Parar é um serviço de pagamento automático de pedágios e estacionamentos, que facilita a vida do motorista ao evitar filas e agilizar o processo de pagamento.",
  },
  {
    question: "TENHO QUE LAVAR O CARRO PARA ENTREGAR?",
    answer:
      "Não é necessário lavar o veículo antes da devolução, pois o valor do orçamento já inclui a taxa de limpeza. Esta taxa cobre a limpeza básica do veículo, garantindo que ele esteja em boas condições para o próximo cliente.",
  },
  {
    question: "COMO FUNCIONA A CAUÇÃO?",
    answer:
      "A caução refere-se à franquia do veículo, variando entre R$ 500,00 e R$ 1.500,00. O valor é independente da quantidade de dias de aluguel e deve ser deixado no dia da retirada do veículo. Na devolução, o valor é estornado, desde que o veículo não tenha avarias.",
  },
  {
    question: "TENHO QUE ABASTECER O CARRO?",
    answer: "Sim, o veículo deve ser devolvido com o tanque cheio e abastecido com etanol. Isso garante que o próximo cliente receba o veículo nas mesmas condições em que você o recebeu.",
  },
  {
    question: "COMO É A QUILOMETRAGEM?",
    answer:
      "No aluguel diário, a quilometragem é livre. No plano mensal, a quilometragem é limitada e não há opção de quilometragem livre.",
  },
  {
    question: "UMA PESSOA SEM CNH PODE ALUGAR O CARRO?",
    answer:
      "Sim, nesse caso, a pessoa será apenas a locatária. Ela pode realizar a análise cadastral e, se aprovada, poderá alugar desde que tenha um condutor adicional, gerando uma taxa extra.",
  },
  {
    question: "QUAL VALOR DA HORA EXTRA?",
    answer: "O valor da hora extra é calculado dividindo o valor da diária por cinco. Por exemplo, se a diária custa R$ 100,00, o valor da hora extra será R$ 20,00. Este valor é aplicado para cada hora adicional de uso do veículo além do período contratado.",
  },
];

const Duvidas = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se está em um dispositivo móvel
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="duvidas-section">
      <div className="container">
        <h1 className="faq-title">PERGUNTAS FREQUENTES</h1>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-card ${expandedIndex === index ? 'expanded' : ''}`}
              onClick={() => toggleExpand(index)}
              role="button"
              aria-expanded={expandedIndex === index}
              tabIndex={0}
            >
              <div className="faq-question">
                {isMobile ? faq.question : `${index + 1}. ${faq.question}`}
              </div>
              <div className={`faq-answer ${expandedIndex === index ? 'show' : ''}`}>
                {faq.answer.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="expand-icon">
                {expandedIndex === index ? '−' : '+'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Duvidas;