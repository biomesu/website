import React from 'react';
import { Link } from 'react-router-dom';
import './styles1.css'; 
import index from './images/indexbanner.jpg';
import neonnights from './images/neonnights.png';
import wireframe from './images/wireframe.png';
import mobileAppDesign from './images/mobileapp.png';
import unity6 from './images/unity6.png';
import spotifyapi from './images/spotifyapi.png';
import unity1 from './images/unity1.png';


const Skills = () => {
  return (
    <div id="header1">
      <section className="header">
        <img src={index} className="back-video" alt="Background Video" />
        <nav>
          <div className="nav-links " id="navLinks">
            <i className="fa fa-times"></i>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT ME</Link></li>
              <li><Link to="/skills">PORTFOLIO</Link></li>
              <li><Link to="/projects">PROJECTS</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <i className="fa fa-bars" ></i>
        </nav>
        <div className="projects">
          <h9>Portfolio </h9>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <div className="main-text">
          <p className="portfolio-text hidden">Latest Projects</p>
        </div>
        <div className="portfolio-content">
          <div className="row4">
            <a href="google.com">
              <img src={unity6} alt="Neon Nights" />
            </a>
            <div className="layer">
              <h13> Neon Nights </h13>
              <p>Check out my Game UI design for Neon Nights!</p>
            </div>
          </div>
          <div className="row4">
            <a href="google.com">
              <img src={spotifyapi} alt="Website Wireframe" />
            </a>
            <div className="layer">
              <h13> Website Wireframe</h13>
              <p>Check out how I started designing my website before implementing it!</p>
            </div>
          </div>
          <div className="row4">
            <img src={unity1} alt="EcoConnect Mobile App" />
            <div className="layer">
              <h13> EcoConnect Mobile App</h13>
              <p>This was my very first design of a mobile application!</p>
            </div>
          </div>
          <div className="row4">
            <img src={neonnights} alt="Visual Design" />
            <div className="layer">
              <h13>Bok Choi Adventures UI</h13>
              <p>test lalalal</p>
            </div>
          </div>
          <div className="row4">
            <img src={wireframe} alt="Visual Design" />
            <div className="layer">
              <h13>Spotify Album Tracker</h13>
              <p>test lalalal</p>
            </div>
          </div>
          <div className="row4">
            <img src={mobileAppDesign} alt="Visual Design" />
            <div className="layer">
              <h13>Bok Choi Adventures  </h13>
              <p>test lalalal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills hidden">
        <h1>Courses Taken</h1>
        <p className="skills-text">Below are my skills and currently learning more!</p>
        <p className="skills-text">- CS 002 (FUNDAMENTALS OF COMPUTER SCIENCE)</p>
        <p className="skills-text">- CS 003A (INTRO OBJECT ORIENTD PROGR C++)</p>
        <p className="skills-text">- CS 3220 (WEB AND INTERNET PROGRAMMING)</p>
        <p className="skills-text">- CS 4220 (Current Trends in Web Design)</p>
        <p className="skills-text">- CS 4440 (Operating Systems)</p>
        <p className="skills-text">- CS 4540 (Cloud Computing)</p>
        <p className="skills-text">- CS 4555 (Game Design)</p>
       
      

        <h2>What I can do</h2>
        <p className="skills-text2">- Website Design</p>
        <p className="skills-text2">- Basics of a WoW UI Addon</p>
        <p className="skills-text2">- 2D/3D Game with Unity</p>
        <p className="skills-text2">- Use Figma/Sketch for wireframes</p>
        <p className="skills-text2">- HTML5/CSS/Javascript/Bootstrap/ReactJS</p>
        <p className="skills-text2">- Create wireframes for a Mobile App</p>
     
    
        

 
       

        <a href="https://drive.google.com/file/d/160dSSJjp2t_YdnKqOU0Qcx3LuZAiZnvx/view?usp=sharing" className="resume-btn">Resume</a>
      </section>

   
     
    </div>
  );
};

export default Skills;
