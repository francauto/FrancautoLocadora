import { useState } from "react"
import "./card-contate-nos.css"
import WolksvagemIcone from "../../assets/icone-volkswagen.svg"
import BackgroundFrancautoLocadora from "../../assets/background-card-locadora.svg"
import BackgroundFrancautoConsorcio from "../../assets/background-card-consorcio.svg"

const CardContatenos = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setActiveCard(index === activeCard ? null : index)
  }

  const cardInfo = [
    {
      title: "Francauto Locadora",
      description:
        "A Francauto Locadora é especializada no aluguel de veículos em Franca/SP, oferecendo uma frota moderna e bem cuidada para atender suas necessidades com conforto e segurança.",
      background: BackgroundFrancautoLocadora,
    },
    {
      title: "Francauto Consorcio",
      description:
        "O Consórcio Francauto oferece planos flexíveis para aquisição de veículos novos e seminovos, com parcelas que cabem no seu bolso.",
      background: BackgroundFrancautoConsorcio,
    },
    {
      title: "Francauto Novos",
      description:
        "Encontre o carro dos seus sonhos na Francauto Novos. Oferecemos uma ampla gama de veículos Volkswagen com as melhores condições do mercado.",
      background: BackgroundFrancautoLocadora,
    },
    {
      title: "Francauto Semi-Novos",
      description:
        "Na Francauto Semi-Novos, você encontra veículos de qualidade com garantia e procedência, passando por rigorosa inspeção antes da venda.",
      background: BackgroundFrancautoLocadora,
    },
    {
      title: "Francauto Peças",
      description:
        "A Francauto Peças oferece peças originais Volkswagen com garantia de fábrica, assegurando o melhor desempenho e durabilidade para o seu veículo.",
      background: BackgroundFrancautoLocadora,
    },
  ]

  return (
    <div className="card-body">
      <div className="card-container">
        {cardInfo.map((card, index) => (
          <div
            key={index}
            className={`card-item ${activeCard === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <img className="card-background" src={card.background || "/placeholder.svg"} alt={card.title} />
            <div className="card-content">
              <div className="card-profile-image">
                <img
                  src={WolksvagemIcone || "/placeholder.svg"}
                  alt="Francauto"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <div className={`info-card acrylic-effect overlay-text `}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
            <div className="card-backdrop"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardContatenos

