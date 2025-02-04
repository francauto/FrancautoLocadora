"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "@dotlottie/player-component";
import NovoTCross from "../../assets/novo-t-cross.svg";
import "./planos.css";
import { useState } from "react";

const plans = [
  {
    id: 1,
    duration: "8 MESES!",
    image: NovoTCross,
    title: "Novo T-Cross",
    features: ["Assistência 24h", "Seguro Incluso", "Manutenção Inclusa"],
  },
  {
    id: 2,
    duration: "1 ANO!",
    image: NovoTCross,
    title: "Novo T-Cross",
    features: ["Assistência 24h", "Seguro Incluso", "Manutenção Inclusa"],
  },
  {
    id: 3,
    duration: "30 DIAS!",
    image: NovoTCross,
    title: "Novo T-Cross",
    features: ["Assistência 24h", "Seguro Incluso", "Manutenção Inclusa"],
  },
];

const Planos = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % plans.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + plans.length) % plans.length
    );
  };

  return (
    <div className="carousel">
      <Box
        sx={{
          maxWidth: "90%",
          margin: "0 auto",
          padding: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          color="black"
          gutterBottom
          sx={{ mb: 7 }} // Add bottom margin
        >
          Planos Disponíveis
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
                  sx={{ objectFit: "cover" }}
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
                    bottom: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
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
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            px: 2,
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "50%",
              width: 40,
              height: 40,
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "50%",
              width: 40,
              height: 40,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Planos;
