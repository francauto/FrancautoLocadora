"use client";

import { Card, CardContent, CardMedia, Typography, Box, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

// 1. IMPORTAÇÃO DOS ÍCONES ESTÁTICOS
import { FaShieldAlt, FaWrench, FaSoap } from "react-icons/fa"; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./planos.css";

// Imagens
import TCross from "../../assets/novo-t-cross.svg";
import PoloTrack from "../../assets/polo-track.svg";
import Virtus from "../../assets/virtus.svg";
import Kwid from "../../assets/kwid.svg";

const plans = [
  { id: 1, image: TCross, title: "T-Cross" },
  { id: 2, image: PoloTrack, title: "Polo Track" },
  { id: 3, image: Virtus, title: "Virtus" },
  { id: 4, image: Kwid, title: "Kwid" },
];

// 2. DADOS DOS BENEFÍCIOS ATUALIZADOS COM OS ÍCONES
const features = [
    { text: "Assistência 24h", icon: <FaWrench /> },
    { text: "Seguro Incluso", icon: <FaShieldAlt /> },
    { text: "Higienização Completa", icon: <FaSoap /> }
];

const Planos = () => {
  return (
    <div className="planos-container">
      <Container maxWidth="xl">
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <Typography variant="h2" component="h2" className="planos-title">
            Nossa Frota
            </Typography>
            <Typography variant="h6" component="p" className="planos-subtitle">
            Escolha o veículo ideal para sua necessidade. Todos os planos incluem nossos benefícios premium.
            </Typography>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                    1280: { slidesPerView: 4, spaceBetween: 30 },
                }}
                className="mySwiper"
            >
            {plans.map((plan) => (
              <SwiperSlide key={plan.id}>
                <Card className="plan-card">
                  <Box className="card-media-container">
                    <CardMedia
                      component="img"
                      className="card-image"
                      image={plan.image}
                      alt={plan.title}
                    />
                  </Box>
                  <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div" className="card-title">
                      {plan.title}
                    </Typography>
                    <Box component="ul" className="features-list">
                      {features.map((feature, index) => (
                        <Box component="li" key={index} className="feature-item">
                          {/* 3. SUBSTITUIÇÃO DO LOTTIE PELO ÍCONE ESTÁTICO */}
                          <span className="feature-icon">{feature.icon}</span>
                          <Typography variant="body2" className="feature-text">
                            {feature.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      className="consult-button"
                      fullWidth
                      onClick={() => window.open(`https://wa.me/5516999661580?text=Olá, gostaria de consultar os valores para o plano ${plan.title}.`, "_blank")}
                    >
                      Consulte Valores
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </div>
  );
};

export default Planos;