import React from "react";
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Services/>
      <Features/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
