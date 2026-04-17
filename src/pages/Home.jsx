import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const Home = ({ onDonate, onVisit }) => {
  return (
    <main className="bg-white">
      <Hero onDonate={onDonate} />
      <Philosophy />
      <Services />
      <Testimonials />
      <CTA onVisitHome={onVisit} />
    </main>
  );
};

export default Home;