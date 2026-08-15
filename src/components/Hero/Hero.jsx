import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/hero.png.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>
          Build Better
          <br />
          <span>Web Experiences</span>
        </h1>
        <p>
          We create modern, responsive, and user-friendly websites that help
          your ideas come to life and grow online.
        </p>
        <button className="hero-button">Get Started</button>
      </div>

      <div className="hero-image">
        <img src={HeroImage} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;