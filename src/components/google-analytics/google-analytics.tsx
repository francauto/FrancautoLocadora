import ReactGA from "react-ga4";

export const initializeGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  // Só inicializa o GA se o ID estiver configurado
  if (measurementId) {
    ReactGA.initialize(measurementId);
    ReactGA.send("pageview");
  } else {
    console.warn(
      "Google Analytics não foi inicializado: VITE_GA_MEASUREMENT_ID não está definido"
    );
  }
};

export const trackButtonClick = () => {
  ReactGA.event({
    category: "Botão",
    action: "Clique no botão de aluguel",
    label: "CTA - Alugar agora",
  });
};
