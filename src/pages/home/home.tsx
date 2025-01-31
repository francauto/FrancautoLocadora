import React from "react";
import backgroundhome from "../../assets/background-home.svg";
import "./home.css";
import CardHome from "../CardHome"; // Import the new CardHome component

const Home = () => {
  return (
    <div className="home-background" style={{ height: "100vh" }}>
      <CardHome />
    </div>
  );
};

export default Home;
