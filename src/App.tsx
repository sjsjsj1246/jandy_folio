import React, { LegacyRef, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <div ref={homeRef}>
        <Home />
      </div>
      <Nav
        homeRef={homeRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
