import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Research from "./components/Research";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
      <Research/>
    </div>
  );
}

export default App;
