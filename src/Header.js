import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js'; // Import Typed.js library
import './styles1.css'; // Import your CSS file

// Import images
import index from './images/indexbanner.jpg';
import Gallery from './Gallery';


const Header = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".auto-type", {
      strings: ["Learning", "Coding", "Sleeping", "Eating"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    // Clean up Typed.js on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="header1">
      <section className="header">
        <div className="video-container">
          <img src={index} className="back-video" alt="Background Video" />
        </div>
        <nav>
          <div className="nav-links" id="navLinks">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT ME</Link></li>
              <li><Link to="/skills">PORTFOLIO</Link></li>
              <li><Link to="/projects">PROJECTS</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <i className="fa fa-bars"></i>
        </nav>
        <div className="text-box">
          <h1>I'm <span className="auto-type"></span></h1>
          <p className="description1">A passionate Software Engineer, Solo Game Developer, and UI/UX Designer wanting to satisfy users' needs!</p>
          <a href="https://github.com/biomesu" className="github-btn">Github</a>
        </div>
      </section>
      <Gallery></Gallery>
    </div>
  );
};

export default Header;

