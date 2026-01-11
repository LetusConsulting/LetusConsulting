import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
 import ServicesPage from "./pages/ServicePage";
 import ConsultantPortfolioPage from "./pages/ConsultantPortfolio"
import CoreValues from "./pages/CoreValues";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/consultantportfolio" element={<ConsultantPortfolioPage />} />
    <Route path="/corevalues" element={<CoreValues />} />
    <Route path="/about_us" element={<AboutUs />} />
    <Route path="/contact_us" element={<ContactUs />} />
    </Routes>
  );
};

export default App;
