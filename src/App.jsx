import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
function App() {
  return (
    <>
      <HeroSection />
      <Navbar />
    </>
  );
}

export default App;
