import ReactGA from "react-ga4";

export const initializeGA = () => {
  ReactGA.initialize("G-XG4GXQZ44K"); // Substitua pelo seu ID real do Google Analytics
  ReactGA.send("pageview"); // Registra a visualização da página
};

export const trackButtonClick = () => {
  ReactGA.event({
    category: "Botão",
    action: "Clique no botão de aluguel",
    label: "CTA - Alugar agora"
  });
};
