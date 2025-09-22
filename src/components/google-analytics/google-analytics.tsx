import ReactGA from "react-ga4";

export const initializeGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
  ReactGA.send("pageview"); 
};

export const trackButtonClick = () => {
  ReactGA.event({
    category: "Botão",
    action: "Clique no botão de aluguel",
    label: "CTA - Alugar agora"
  });
};
