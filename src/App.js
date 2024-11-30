import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Resume from "./components/resume";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import HireMe from "./components/hireMe";
import Contact from "./components/contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <NavBar />

      <Home />

      <About />

      <Resume />

      <Skills />

      <Portfolio />

      <HireMe />

      <Contact />
    </>
  );
}

export default App;
