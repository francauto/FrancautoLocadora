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
import NovoTCross from "../../assets/novo-t-cross.svg";
import PoloTrack from "../../assets/polo-track.svg";
import TiguanAllspace from "../../assets/tiguan-allspace.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const plans = [
  {
    id: 1,
    duration: "8 MESES!",
    image: NovoTCross,
    title: "Novo T-Cross",
    features: ["Assistência 24h", "Seguro Incluso", "Higienização Completa"],
  },
  {
    id: 2,
    duration: "1 ANO!",
    image: PoloTrack,
    title: "Polo Track",
    features: ["Assistência 24h", "Seguro Incluso", "Higienização Completa"],
  },
  {
    id: 3,
    duration: "30 DIAS!",
    image: TiguanAllspace,
    title: "Tiguan Allspace",
    features: ["Assistência 24h", "Seguro Incluso", "Higienização Completa"],
  },
];

const Planos = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % plans.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + plans.length) % plans.length
    );
  };

  return (
    <div className="carousel" style={{ backgroundColor: "black" }}>
      <Box
        sx={{
          maxWidth: "90%",
          margin: "0 auto",
          padding: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          color="white" // Change text color to white for better contrast
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
            height: "600px", // Fixed height for the container
            perspective: "1000px",
          }}
          className="carousel-container"
        >
          {plans.map((plan, index) => {
            const position =
              index === activeIndex
                ? "center"
                : index === (activeIndex + 1) % plans.length
                ? "right"
                : "left";

            return (
              <Card
                key={plan.id}
                onClick={() => setActiveIndex(index)}
                className={`carousel-item ${position}`}
                sx={{
                  width: 345,
                  position: "absolute",
                  left: "50%",

                  transform:
                    position === "center"
                      ? "translate(-50%, -50%) scale(1)"
                      : position === "left"
                      ? "translate(-150%, -50%) scale(0.8)"
                      : "translate(50%, -50%) scale(0.8)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  border: "1px solid black",
                  paddingBottom: "40px",
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
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
                    variant="h4"
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
                      ml: 8, // Add left margin
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
                          style={{ width: "40px", height: "40px" }}
                          loop
                          autoplay
                        ></dotlottie-player>
                        <Typography variant="body2" color="text.secondary">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 10, // Adjust this value to change the vertical position
                    left: "50%", // Adjust this value to change the horizontal position
                    transform: "translateX(-50%) ", // Adjust this value to fine-tune the horizontal position
                    backgroundColor: "#00C853",
                    color: "black",
                    padding: "4px 16px",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="subtitle2" fontWeight="bold">
                    {plan.duration}
                  </Typography>
                </Box>
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
            mt: -13,
          }}
        >
          {plans.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: index === activeIndex ? "#000" : "#ccc",
                margin: "0 4px",
                cursor: "pointer",
              }}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ display: "flex", alignItems: "center" }}
            onClick={() => window.open("https://wa.me/5516999661580", "_blank")}
          >
            Consulte os valores
            <dotlottie-player
              src="https://lottie.host/ce0c0e73-a7dc-41c8-8a31-170643570b55/DEaqQ1BKDX.lottie"
              background="transparent"
              speed="1"
              style={{ width: "30px", height: "30px", marginLeft: "8px" }}
              loop
              autoplay
            ></dotlottie-player>
          </Button>
        </Box>
      </Box>
    </div>
  );
};
export default Planos;
