import React, { useState, useEffect, useRef } from "react";
import "./duvidas.css";

const faqs = [
  {
    question: "O QUE O SEGURO COBRE?",
    answer:
      "O seguro cobre em caso de roubo, furto, incêndio e perda total, nesses casos o cliente fica responsável por pagar a franquia do carro. Em caso de danos de pequeno porte é cobrado apenas os valores que ficaram no orçamento.",
  },
  {
    question: "ONDE ARRUMAR O CARRO EM CASO DE SINISTRO?",
    answer:
      "O nosso seguro é conveniado com a oficina da Francauto, então qualquer reparo que precisar ser feito será aqui na loja.",
  },
  {
    question: "E SE EU BATER EM OUTRO CARRO?",
    answer:
      "Temos seguros contra terceiros, porém é acionado a franquia para cobrir os danos dos dois carros. Ou fazer o reparo do carro do terceiro onde ele preferir.",
  },
  {
    question: "E SE OUTRO CARro BATER NO CARRO DA LOCADORA, O QUE FAZER?",
    answer:
      "Se a pessoa não tenha seguro, poderá acionar o nosso e entrar em acordo com o terceiro para arcar com as despesas de oficina, ou franquia. Caso o terceiro tenha seguro, o processo correrá de acordo com a seguradora dele.",
  },
  {
    question: "E SE O CARRO ESTRAGAR?",
    answer:
      "Nosso seguro tem assistência 24h de guincho, e temos até 48h para solucionar o problema caso venha ter pane elétrica ou mecânica.",
  },
  {
    question: "O CARRO TEM SEM PARAR?",
    answer:
      "Não tem, o cliente tem que fazer o cadastro em algum ponto de vendas deles.",
  },
  {
    question: "TENHO QUE LAVAR O CARRO PARA ENTREGAR?",
    answer:
      "Não precisa, pois no valor do orçamento já está cobrando a taxa de limpeza.",
  },
  {
    question: "COMO FUNCIONA A CAUÇÃO?",
    answer:
      "A caução é referente a franquia do carro, entre 500,00 a 1500,00. O valor é independente de quantos dias vai alugar. E deve ser deixado sempre no dia de retirar o carro. Na devolução do carro o valor é estornado desde que o carro não tenha nenhuma avaria.",
  },
  {
    question: "TENHO QUE ABASTECER O CARRO?",
    answer: "Sim, o carro é entregue de tanque cheio e abastecido no etanol.",
  },
  {
    question: "COMO É A QUILOMETRAGEM?",
    answer:
      "Em caso de aluguel diário, a quilometragem é livre, agora em plano mensal a quilometragem é limitada, e não temos a opção de km livre no plano mensal.",
  },
  {
    question: "UMA PESSOA SEM CNH PODE ALUGAR O CARRO?",
    answer:
      "Sim, nesse caso ele será apenas a locatária, pode fazer a análise cadastral, e se for aprovado poderá alugar desde que tenha um condutor adicional, e gere uma taxa extra.",
  },
  {
    question: "QUAL VALOR DA HORA EXTRA?",
    answer: "Você vai pegar o valor da diária e dividir por 5.",
  },
];

const Duvidas = () => {
  return (
    <div>
      <h1 className="faq-title">PERGUNTAS FREQUENTES</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <div className="faq-question">{`${index + 1}. ${
              faq.question
            }`}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Duvidas;
