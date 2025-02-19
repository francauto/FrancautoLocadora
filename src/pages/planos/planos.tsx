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
    setActiveIndex((prevIndex) => (prevIndex - 1 + plans.length) % plans.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % plans.length);
  };

  return (
    <div className="carousel">
      <Box
        sx={{
          width: "100%", // Occupy the entire width
          height: "100%", // Occupy the entire height
          margin: "0 auto",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          color="white" /* Change text color to white */
          gutterBottom
          sx={{ mb: 5 }} // Add bottom margin
        >
          Planos
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            position: "relative",
            height: "550px", // Reduce height for the container
            perspective: "1000px",
          }}
          className="carousel-container"
        >
          {plans.map((plan, index) => {
            let position;
            if (index === activeIndex) {
              position = "center";
            } else if (index === (activeIndex + 1) % plans.length) {
              position = "right";
            } else if (index === (activeIndex - 1 + plans.length) % plans.length) {
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
                  width: 300, // Reduce card width
                  position: "absolute",
                  left: "50%",
                  transform:
                    position === "center"
                      ? "translate(-50%, -50%) scale(1)"
                      : position === "left"
                      ? "translate(-150%, -50%) scale(0.8)"
                      : position === "right"
                      ? "translate(50%, -50%) scale(0.8)"
                      : "translate(-50%, -50%) scale(0.8)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  border: "1px solid black",
                  paddingBottom: "20px", // Reduce padding
                  cursor: "pointer",
                  opacity: position === "hidden" ? 0 : 1,
                  zIndex: position === "hidden" ? -1 : 0,
                }}
              >
                <CardMedia
                  component="img"
                  height="160" // Reduce image height
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
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5" // Reduce font size
                    component="div"
                    textAlign="center"
                  >
                    {plan.title}
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start", // Align items to the left
                      ml: 6, // Reduce left margin
                    }}
                  >
                    {plan.features.map((feature, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 0,
                        }}
                      >
                        <dotlottie-player
                          src="https://lottie.host/9e2ed502-0d0e-434d-8d7d-5cef06952f69/FLDafWMshP.lottie"
                          background="transparent"
                          speed="1"
                          style={{ width: "30px", height: "30px" }} // Reduce icon size
                          loop
                          autoplay
                        ></dotlottie-player>
                        <Typography variant="body2" color="text.secondary">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        transform: "scale(0.9)", // Reduce initial size
                        transition: "transform 0.3s ease-in-out", // Smooth transition
                        "&:hover": {
                          transform: "scale(1)", // Increase size on hover
                          backgroundColor: "primary.main", // Maintain blue color on hover
                        },
                      }}
                      onClick={() =>
                        window.open(
                          `https://wa.me/5516999661580?text=Olá, gostaria de consultar os valores para o plano ${plan.title}.`,
                          "_blank"
                        )
                      }
                    >
                      Consulte os valores
                      <dotlottie-player
                        src="https://lottie.host/ce0c0e73-a7dc-41c8-8a31-170643570b55/DEaqQ1BKDX.lottie"
                        background="transparent"
                        speed="1"
                        style={{
                          width: "25px", // Reduce icon size
                          height: "25px", // Reduce icon size
                          marginLeft: "8px",
                        }}
                        loop
                        autoplay
                      ></dotlottie-player>
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
            mt: -13, // Move the dots up
          }}
        >
          {plans.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 12,
                height: 12,
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
