import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import './styles1.css';





import "./styles1.css";
import Header from "./Header";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);