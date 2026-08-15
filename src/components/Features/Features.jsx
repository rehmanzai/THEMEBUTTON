import React from "react";
import "./Features.css";
import { FaShieldAlt, FaBolt, FaMobileAlt, FaHeadset } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Modern & Secure",
      text: "Built with the best practices and latest security standards.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Performance",
      text: "Optimized for lightning-fast load times and smooth rendering.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Fully Responsive",
      text: "Looks and works brilliantly across all screens and devices.",
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Support",
      text: "Our team is always ready to assist you whenever you need help.",
    },
  ];

  return (
    <section className="features-section" id="why-us">
      <div className="features-header">
        <h2>Why Choose Us</h2>
        <p>We deliver superior quality and unmatched performance for your brand</p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;