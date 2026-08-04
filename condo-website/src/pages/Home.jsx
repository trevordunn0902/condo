import React from "react";
import SandhamnHome from "../assets/SandhamnHome.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">Welcome to Sandhamn Private.</h1>
        <img
          src={SandhamnHome}
          alt="Sandhamn Home"
          className="home-image"
        />
      </div>
    </div>
  );
};

export default Home;
