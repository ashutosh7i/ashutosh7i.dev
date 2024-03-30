import React from "react";

//importing Components
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements/Achievements.jsx";
import Badges from "./components/Swiper/Badges/index.jsx";
import Certificates from "./components/Swiper/Certificates/index.jsx";
import Experiences from "./components/Experiences/Experiences.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer";

//importing Pages
import AboutPage from "./pages/AboutPage";
import AchievementsPage from "./pages/AchievementsPage";
import ProjectsPagePage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

//importing seo
import Seo from "./utils/Seo";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Seo />
      {/*router setup */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Seo />
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Achievements />
              <Badges />
              <Certificates />
              <Experiences />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* Setting up routes for Specific Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPagePage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work" element={<Experiences />} />
      </Routes>
    </>
  );
}
