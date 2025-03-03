import React from "react";

import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-5xl font-bold">Welcome to My Landing Page</h1>
        <p className="text-white text-lg mt-4">Build responsive websites with React and TailwindCSS</p>
        <a href="#services" className="bg-white text-blue-600 px-6 py-3 rounded-lg mt-6 inline-block shadow-md hover:bg-blue-100 transition">Get Started</a>
      </motion.div>
    </section>
  );
};

export default Hero;
