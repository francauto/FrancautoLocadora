"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import "@dotlottie/player-component";
import "./planos.css";
import { useState } from "react";
import TCross from "../../assets/novo-t-cross.svg";
import PoloTrack from "../../assets/polo-track.svg";
import Virtus from "../../assets/virtus.svg";
import Kwid from "../../assets/kwid.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + plans.length) % plans.length
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % plans.length);
  };

  return (
    <div className="carousel">
      <Box
        sx={{
          width: "100%",
          height: "100%",
          margin: "0 auto",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        <Typography
        className="title"
          variant="h4"
          component="h2"
          textAlign="center"
          color="white"
          gutterBottom
          sx={{ mb: -10,mt : -5 ,fontSize: "2.5rem" }} // Ajuste inicial de fontSize
        >
          Planos
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            position: "relative",
            height: "700px", // Altura inicial
            perspective: "1000px",
          }}
          className="carousel-container">
          {plans.map((plan, index) => {
            let position;
            if (index === activeIndex) {
              position = "center";
            } else if (index === (activeIndex + 1) % plans.length) {
              position = "right";
            } else if (
              index ===
              (activeIndex - 1 + plans.length) % plans.length
            ) {
              position = "left";
            } else {
              position = "hidden";
            }

            return (
              <Card
                key={plan.id}
                onClick={() => setActiveIndex(index)}
                className={`carousel-item ${position}`}
                sx={{
                  width: "85%", // Use porcentagem para responsividade
                  maxWidth: 300, // Largura máxima inicial
                  position: "absolute",
                  left: "50%",
                  transform:
                    position === "center"
                      ? "translate(-50%, -50%) scale(1)"
                      : position === "left"
                      ? "translate(-130%, -50%) scale(0.8)" // Ajuste para mobile
                      : position === "right"
                      ? "translate(30%, -50%) scale(0.8)" // Ajuste para mobile
                      : "translate(-50%, -50%) scale(0.8)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  border: "1px solid black",
                  paddingBottom: 3, // Use rem para consistência
                  cursor: "pointer",
                  opacity: position === "hidden" ? 0 : 1,
                  zIndex: position === "hidden" ? -1 : 0,
                }}>
                <CardMedia
                  component="img"
                  height="160" // Altura inicial
                  image={plan.image}
                  alt={plan.title}
                  sx={{
                    objectFit: "cover",
                    transform:
                      plan.title === "Polo Track" ||
                      plan.title === "Tiguan Allspace"
                        ? "scaleX(-1)"
                        : "none",
                  }}
                />
                <CardContent sx={{ padding: 2 }}>
                  {" "}
                  {/* Ajuste de padding */}
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    sx={{ fontSize: "1.2rem" }} // Ajuste inicial de fontSize
                  >
                    {plan.title}
                  </Typography>
                  <Box
                    sx={{
                      mt: 1, // Reduzido marginTop
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center", // Centraliza os ícones
                      // ml: 6, // Removido marginLeft
                    }}>
                    {plan.features.map((feature, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 0.5, // Reduzido marginBottom
                          width: "100%", // Garante que ocupe a largura total
                          justifyContent: "center", // Centraliza horizontalmente
                        }}>
                        <dotlottie-player
                          src="https://lottie.host/9e2ed502-0d0e-434d-8d7d-5cef06952f69/FLDafWMshP.lottie"
                          background="transparent"
                          speed="1"
                          style={{ width: "30px", height: "30px" }}
                          loop
                          autoplay></dotlottie-player>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: "0.8rem" }}>
                          {" "}
                          {/* Ajuste inicial de fontSize */}
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 1, // Reduzido marginTop
                    }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        transform: "scale(0.9)",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1)",
                          backgroundColor: "primary.main",
                        },
                        fontSize: "0.8rem", // Ajuste inicial
                        padding: "8px 16px", // Ajuste de padding
                      }}
                      onClick={() =>
                        window.open(
                          `https://wa.me/5516999661580?text=Olá, gostaria de consultar os valores para o plano ${plan.title}.`,
                          "_blank"
                        )
                      }>
                      Consulte
                      <dotlottie-player
                        src="https://lottie.host/ce0c0e73-a7dc-41c8-8a31-170643570b55/DEaqQ1BKDX.lottie"
                        background="transparent"
                        speed="1"
                        style={{
                          width: "25px",
                          height: "25px",
                          marginLeft: "8px",
                        }}
                        loop
                        autoplay></dotlottie-player>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
          <button className="carousel-arrow left" onClick={handleNext}>
            <ArrowBackIcon />
          </button>
          <button className="carousel-arrow right" onClick={handlePrev}>
            <ArrowForwardIcon />
          </button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: -13, // Ajuste para mobile
          }}>
          {plans.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 12, // Tamanho inicial
                height: 12, // Tamanho inicial
                borderRadius: "50%",
                backgroundColor: index === activeIndex ? "#00C853" : "#ccc",
                margin: "0 4px",
                cursor: "pointer",
              }}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};
export default Planos;
