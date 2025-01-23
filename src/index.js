import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import About from './About';
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import './styles1.css';
import { createRoot } from "react-dom/client";





import "./styles1.css";
import Header from "./Header";

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        
      </Routes>
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);