import ReactGA from "react-ga4";

export const initializeGA = () => {
  ReactGA.initialize("G-XG4GXQZ44K"); 
  ReactGA.send("pageview"); 
};

export const trackButtonClick = () => {
  ReactGA.event({
    category: "Botão",
    action: "Clique no botão de aluguel",
    label: "CTA - Alugar agora"
  });
};
