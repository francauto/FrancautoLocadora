import { useState } from "react";
import "./card-contate-nos.css";
import WolksvagemIcone from "../../assets/icone-volkswagen.svg";
import IconeLocadora from "../../assets/icone-locadora.svg"; // Import the icon for Francauto Locadora
import IconeConsorcio from "../../assets/icone-consorcio.svg"; // Import the icon for Francauto Consorcio
import BackgroundFrancautoLocadora from "../../assets/background-card-locadora.svg";
import BackgroundFrancautoConsorcio from "../../assets/background-card-consorcio.svg";
import BackgroundFrancautoNovos from "../../assets/background-card-novos.svg";
import BackgroundFrancautoSemiNovos from "../../assets/background-card-semi-novos.svg";
import BackgroundFrancautoPecas from "../../assets/background-card-pecas.svg";

const CardContatenos = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number, url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener noreferrer");
    } else {
      setActiveCard(index === activeCard ? null : index);
    }
  };

  const cardInfo = [
    {
      title: "Francauto Novos",
      description:
        "Encontre o carro dos seus sonhos na Francauto! Oferecemos uma ampla gama de veículos Volkswagen 0KM com as melhores condições do mercado.",
      background: BackgroundFrancautoNovos,
      icon: WolksvagemIcone,
      url: "https://www.francauto.com.br/distrito-industrial?utm_term=francauto&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTbH9igBwnf1UzrAoFiVd5y37Py5WBlVYRvTUTfX-QNJre1kQPiesFgaAndSEALw_wcB"
    },
    {
      title: "Francauto Locadora",
      description:
        "A Francauto Locadora é especializada no aluguel de veículos em Franca/SP, oferecendo uma frota moderna e bem cuidada para atender suas necessidades com conforto e segurança.",
      background: BackgroundFrancautoLocadora,
      icon: IconeLocadora, // Use the specific icon for Francauto Locadora
      url: "https://www.francautolocadora.com.br/"
    },
    {
      title: "Francauto Seminovos",
      description:
        "Na Francauto Seminovos, você encontra veículos de qualidade com garantia e procedência, passando por rigorosa inspeção antes da venda.",
      background: BackgroundFrancautoSemiNovos,
      icon: WolksvagemIcone,
      url: "https://www.francauto.com.br/jardim-integracao?utm_term=francauto&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTbH9igBwnf1UzrAoFiVd5y37Py5WBlVYRvTUTfX-QNJre1kQPiesFgaAndSEALw_wcB"
    },
    {
      title: "Francauto Consorcio",
      description:
        "O Consórcio Francauto oferece planos flexíveis para aquisição de veículos novos e seminovos, com parcelas que cabem no seu bolso.",
      background: BackgroundFrancautoConsorcio,
      icon: IconeConsorcio, // Use the specific icon for Francauto Consorcio
      url: "https://francautoconsorcio.com.br/"
    },
    {
      title: "Francauto Peças",
      description:
        "A Francauto Peças oferece peças originais Volkswagen com garantia de fábrica, assegurando o melhor desempenho e durabilidade para o seu veículo.",
      background: BackgroundFrancautoPecas,
      icon: WolksvagemIcone,
      url: "https://pecas.francauto.com.br/"
    },
  ];

  return (
    <div className="card-contate-nos-body">
      <div className="card-contate-nos-container">
        {cardInfo.map((card, index) => (
          <div
            key={index}
            className={`card-contate-nos-item ${
              activeCard === index ? "active" : ""
            }`}
            onClick={() => handleCardClick(index, card.url)}>
            <img
              className="card-contate-nos-background"
              src={card.background || "/placeholder.svg"}
              alt={card.title}
            />
            <div className="card-contate-nos-content">
              <div className="card-contate-nos-profile-image">
                <img
                  src={card.icon || "/placeholder.svg"}
                  alt={card.title}
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <h3 className="card-contate-nos-title">{card.title}</h3>
              <div
                className={`card-contate-nos-info-card acrylic-effect overlay-text`}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
            <div className="card-contate-nos-backdrop"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContatenos;
