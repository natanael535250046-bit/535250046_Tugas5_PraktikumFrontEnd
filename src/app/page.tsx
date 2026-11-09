"use client";
import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import PortfolioSection from "../components/portfoliosection";
import PriceSection from "../components/pricesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home"><HeroSection /></div>
        <div id="portfolio"><PortfolioSection /></div>
        <div id="services"><PriceSection /></div>
        <div id="contacts"><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
}
