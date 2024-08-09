import React from "react";

//importing Components
import Navbar from "@/components/Navbar/Navbar.jsx";
import Hero from "@/components/Hero";
import About from "@/components/About/About.jsx";
import Skills from "@/components/Skills/Skills.jsx";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements/Achievements.jsx";
import Badges from "@/components/Swiper/Badges/index.jsx";
import Certificates from "@/components/Swiper/Certificates/index.jsx";
import Experiences from "@/components/Experiences/Experiences.jsx";
import Contact from "@/components/Contact/Contact.jsx";
import Footer from "@/components/Footer/Footer";

//importing Pages
// import AboutPage from "@/app/about/page";
// import AchievementsPage from "@/app/achievements/page";
// import ProjectsPagePage from "@/app/projects/page";
// import ContactPage from "@/app/contact/page";

//importing seo
// import Seo from "@/utils/Seo/";

export default function App() {
  return (
    <>
      {/* <Seo /> */}
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
  );
}
