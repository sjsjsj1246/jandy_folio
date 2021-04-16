import React, { useRef } from "react";
import "./App.css";
import Nav from "./container/Nav";
import Home from "./container/Home";
import About from "./container/About";
import Portfolio from "./container/Portfolio";
import Contact from "./container/Contact";

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
