import React from "react";
import "./App.css";
import "./Responsive.css";

import NavBar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About-us/About-us.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Contact from "./components/Contact/Contact.jsx";
import CTA from "./components/CTA/CTA.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Cards />
       <About />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;