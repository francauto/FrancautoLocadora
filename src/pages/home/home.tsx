// Home.tsx - Sem alterações no componente React
import React from "react";
import backgroundHome from "../../assets/background-home.svg";
import "./home.css";

const Home = () => {
  return (
    <div className="home-background">
      <img src={backgroundHome} alt="Background" className="background-image" />
    </div>
  );
};

export default Home;