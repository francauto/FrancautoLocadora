import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import breakpoints from "../../components/breakpoints/breakpoints";
import videoHome from "../../assets/video_home.mp4";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <StyledHomeBackground>
      <StyledVideoHome ref={videoRef} src={videoHome} autoPlay loop muted playsInline />
    </StyledHomeBackground>
  );
};

export default Home;

// Styled Components
const StyledHomeBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 98.8vw;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Adicionado para evitar rolagem horizontal */

  @media ${breakpoints.xl} {
    /* Estilos para telas muito grandes */
    height: 100vh;
  }

  @media ${breakpoints.lg} {
    /* Estilos para telas grandes (desktops) */
    height: 100vh;
  }

  @media ${breakpoints.md} {
    /* Estilos para tablets */
    height: 70vh;
  }

  @media ${breakpoints.sm} {
    /* Estilos para celulares grandes */
    height: 60vh;
  }

  @media ${breakpoints.xs} {
    /* Estilos para celulares pequenos */
    height: 50vh;
  }
`;

const StyledVideoHome = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  @media ${breakpoints.xl} {
    /* Estilos para telas muito grandes */
  }

  @media ${breakpoints.lg} {
    /* Estilos para telas grandes (desktops) */
  }

  @media ${breakpoints.md} {
    /* Estilos para tablets */
  }

  @media ${breakpoints.sm} {
    /* Estilos para celulares grandes */
  }

  @media ${breakpoints.xs} {
    /* Estilos para celulares pequenos */
  }
`;