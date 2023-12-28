import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import './styles1.css';
import index from './images/indexbanner.jpg';
import unity3 from './images/unity3.png';
import neon from './images/neonnights.png';
import mobileapp from './images/mobileapp.png';

const Header = () => {
  const [navLinksVisible, setNavLinksVisible] = useState(false);

  const showMenu = () => {
    setNavLinksVisible(true);
  };

  const hideMenu = () => {
    setNavLinksVisible(false);
  };

  useEffect(() => {
    // Add your Typed.js initialization here
    const typed = new Typed(".auto-type", {
      strings: ["Learning", "Coding", "Sleeping", "Eating"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="header1">
      <section className="header">
        <img src={index} className="back-video" alt="Background Video" />
        <nav>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT ME</Link></li>
              <li><Link to="/skills">PORTFOLIO</Link></li>
              <li><Link to="/projects">PROJECTS</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={navLinksVisible ? hideMenu : showMenu}></i>
        </nav>
        <div className="text-box">
          <ul>
            <p></p>
            <p></p>
            <h1>I'm <span className="auto-type"></span></h1>
            <p className="description1">A passionate UI/UX Designer wanting to satisfy users' needs!</p>
            <a href="https://github.com/biomesu" className="github-btn">Github</a>
          </ul>
        </div>

        {/* Project Sections */}
        <section className="test1">
          <img src={unity3} className="neon2" alt="Bok Choy" />
          <h11>Bok Choy</h11>
          <p className="project-description">
            In the adventure game Bok Choy Adventure, players will follow Amara, {'\n'}
            a young adventurer lost on a mysterious and visually stunning island {'\n'}
            after a deadly shipwreck. The game delivers a truly engaging experience,  {'\n'}
            immersing players in a rich and dynamic world filled with exciting secrets {'\n'}
            waiting to be revealed.
          </p>
        </section>
        <section className="test2">
          <img src={neon} className="neon" alt="Bok Choy" />
          <h10>Neon Nights</h10>
          <p className="project-description2">
          The game is a cyberpunk RPG set in a dystopian future {'\n'}
         where players take on the role of a street-wise hacker {'\n'}
        trying to survive in a world of corrupt corporations, {'\n'}
        ruthless gangs, and high-tech weaponry. The game's UI {'\n'}
        should be designed to create a sense of urban grittiness {'\n'}
        and high-tech innovation, with a sleek and stylized design.{'\n'}
        </p>
        </section>
        <section className="test">
          <img src={mobileapp} className="neon3"  />
          <h14>Neon Mobile App</h14>
          <p className="project-description3">
          The game is a cyberpunk RPG set in a dystopian future {'\n'}
         where players take on the role of a street-wise hacker {'\n'}
        trying to survive in a world of corrupt corporations, {'\n'}
        ruthless gangs, and high-tech weaponry. The game's UI {'\n'}
        should be designed to create a sense of urban grittiness {'\n'}
        and high-tech innovation, with a sleek and stylized design.{'\n'}
        </p>
        </section>
        

     
       
      </section>
    </div>
  );
};

export default Header;


