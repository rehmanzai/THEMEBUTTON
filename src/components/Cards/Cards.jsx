import "./Cards.css";
import React, { useEffect, useState } from "react";
import "./Cards.css";

import {
  FaLaptopCode,
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaSearch,
  FaCloud
} from "react-icons/fa";

function Cards() {

  // Cards shuru mein hidden hongay
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
const handleScroll = () => {
  const section = document.querySelector(".cards-section");

  if (section) {
    const position = section.getBoundingClientRect();

    if (position.top < window.innerHeight - 100 && position.bottom > 100) {
      setShowCards(true);
    } else {
      setShowCards(false);
    }
  }
};

    window.addEventListener("scroll", handleScroll);

    // Page load par bhi check karein
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const services = [
    {
      icon: <FaLaptopCode className="card-icon" />,
      title: "Web Design",
      text: "We create modern, responsive and attractive websites."
    },
    {
      icon: <FaCode className="card-icon" />,
      title: "Development",
      text: "Fast, secure and scalable web applications."
    },
    {
      icon: <FaPaintBrush className="card-icon" />,
      title: "UI / UX",
      text: "Beautiful and user-friendly interface designs."
    },
    {
      icon: <FaMobileAlt className="card-icon" />,
      title: "App Development",
      text: "Cross-platform mobile apps built for performance."
    },
    {
      icon: <FaSearch className="card-icon" />,
      title: "SEO Optimization",
      text: "Boost your website ranking on search engines."
    },
    {
      icon: <FaCloud className="card-icon" />,
      title: "Cloud Hosting",
      text: "Reliable and secure cloud hosting solutions."
    }
  ];

  return (
    <section className="cards-section" id="services">

      <h2>Our Services</h2>

      <div className="cards-container">

        {services.map((service, index) => (

          <div
            className={`card ${showCards ? "show" : ""}`}
            key={index}
          >
            {service.icon}

            <h3>{service.title}</h3>

            <p>{service.text}</p>

            <button>Learn More</button>
          </div>

        ))}

      </div>

    </section>
  );
}

export default Cards;