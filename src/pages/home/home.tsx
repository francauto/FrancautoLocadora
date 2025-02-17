import React from "react";
import backgroundhome from "../../assets/background-home.svg";
import "./home.css";
import CardHome from "../../components/card-home/card-home"; // Import the new CardHome component

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-content">
        <CardHome />
      </div>
    </div>
  );
};

export default Home;
