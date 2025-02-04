"use client";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel"; // Alterado esta linha
import "@dotlottie/player-component"; // Import the Lottie player component
import NovoTCross from "../../assets/novo-t-cross.svg"; // Alterado esta linha

const plans = [
  {
    id: 1,
    duration: "8 MESES!",
    image: NovoTCross, // Atualizado para usar a imagem correta
    title: "Novo T-Cross",
    features: ["Assistência 24h", "Seguro Incluso", "Manutenção Inclusa"],
  },
  {
    id: 2,
    duration: "1 ANO!",
    image: "",
    title: "Novo T-Cross",
    features: ["Assistência 24h", "Seguro Incluso", "Manutenção Inclusa"],
  },
  {
    id: 3,
    duration: "30 DIAS!",
    image: "",
    title: "Novo T-Cross",
    features: ["Assistência 24h", "Seguro Incluso", "Manutenção Inclusa"],
  },
];

const Planos = () => {
  return (
    <Box sx={{ maxWidth: "100%", margin: "0 auto", padding: 2 }}>
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible
        indicators
        cycleNavigation
        navButtonsProps={{
          style: {
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: 0,
            margin: 0,
          },
        }}
        indicatorContainerProps={{
          style: {
            marginTop: "20px",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            color: "#ccc",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#000",
          },
        }}
      >
        {plans.map((plan) => (
          <Card
            key={plan.id}
            sx={{
              maxWidth: 345,
              margin: "0 auto",
              position: "relative",
              borderRadius: 2,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 10,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#00C853",
                color: "white",
                padding: "4px 16px",
                borderRadius: 1,
                zIndex: 1,
              }}
            >
              <Typography variant="subtitle2" fontWeight="bold">
                {plan.duration}
              </Typography>
            </Box>
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
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default Planos;
