"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import{DotLottiePlayer} from "@dotlottie/react-player";
import '@dotlottie/player-component'
import "./planos.css";
import TCross from "../../assets/novo-t-cross.svg";
import PoloTrack from "../../assets/polo-track.svg";
import Virtus from "../../assets/virtus.svg";
import Kwid from "../../assets/kwid.svg";

const plans = [
  {
    id: 1,
    image: TCross,
    title: "T-Cross",
    features: ["Assistência 24h", "Seguro Incluso", "Higienização Completa"],
  },
  {
    id: 2,
    image: PoloTrack,
    title: "Polo Track",
    features: ["Assistência 24h", "Seguro Incluso", "Higienização Completa"],
  },
  {
    id: 3,
    image: Virtus,
    title: "Virtus",
    features: ["Assistência 24h", "Seguro Incluso", "Higienização Completa"],
  },
  {
    id: 4,
    image: Kwid,
    title: "Kwid",
    features: ["Assistência 24h", "Seguro Incluso", "Higienização Completa"],
  },
];

const Planos = () => {
  return (
    <div className="planos-container">
      <Typography
        className="title"
        variant="h4"
        component="h2"
        textAlign="center"
        color="white"
        gutterBottom
        sx={{
          mb: 4,
          fontSize: "2.5rem",
          position: "relative", //  manter o título no topo
        }}
      >
        Planos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // Fundamental para a responsividade
          justifyContent: "center", // Centraliza os cards
          gap: "1rem",         // Espaço consistente entre os cards.  Use unidade 'rem'.
          padding: "1rem",      // Padding consistente.
          width: "100%",       // Garante que o container ocupe toda a largura.
          boxSizing: "border-box", // Inclui padding e border na largura total.
        }}
      >
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className="plan-card"
          >
            <CardMedia
              component="img"
              className="card-image"
              image={plan.image}
              alt={plan.title}
            />
            <CardContent sx={{ padding: 2 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
                sx={{ fontSize: "1.2rem" }}
              >
                {plan.title}
              </Typography>
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {plan.features.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 0.5,
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <DotLottiePlayer
                    
                      src="https://lottie.host/9e2ed502-0d0e-434d-8d7d-5cef06952f69/FLDafWMshP.lottie"
                     
                      background="transparent"
                      speed={1}
                      style={{ width: "30px", height: "30px" }}
                      loop
                      autoplay
                    ></DotLottiePlayer>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.8rem" }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 1,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="consult-button"
                  onClick={() =>
                    window.open(
                      `https://wa.me/5516999661580?text=Olá, gostaria de consultar os valores para o plano ${plan.title}.`,
                      "_blank"
                    )
                  }
                >
                  Consulte
                  <DotLottiePlayer
                    src="https://lottie.host/ce0c0e73-a7dc-41c8-8a31-170643570b55/DEaqQ1BKDX.lottie"
                    background="transparent"
                    speed= {1}
                    style={{ width: "25px", height: "25px", marginLeft: "8px" }}
                    loop
                    autoplay
                  ></DotLottiePlayer>
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};
export default Planos;