import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <Nav>{["Home", "About"]}</Nav>
    </div>
  );
}

export default App;
