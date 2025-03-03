import React from "react";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 fixed w-full top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MyLanding</h1>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX className="text-white text-2xl" /> : <FiMenu className="text-white text-2xl" />}
          </button>
        </div>
        <ul className={`md:flex gap-6 text-white absolute md:static top-16 left-0 bg-blue-600 w-full md:w-auto text-center transition-all ${menuOpen ? "block" : "hidden"} md:block`}>
          <li className="py-2 md:py-0"><a href="#home">Home</a></li>
          <li className="py-2 md:py-0"><a href="#about">About</a></li>
          <li className="py-2 md:py-0"><a href="#services">Services</a></li>
          <li className="py-2 md:py-0"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
