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
import vrgame from './images/vrgame.png';
import vrgame2 from './images/vrgame2.png';
import vrgame3 from './images/vrgame3.png';
import vrgame4 from './images/vrgame4.png';
import vrgame5 from './images/vrgame5.png';
import vrgame6 from './images/vrgame6.png';
import vrgame7 from './images/vrgame7.png';
import vrgame8 from './images/vrgame8.png';
import vrgame9 from './images/vrgame9.png';


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
              <img src={vrgame} alt="Neon Nights" />
            </a>
            <div className="layer">
              <h13> BuildaPCVR </h13>
              <p>Starting Menu</p>
            </div>
          </div>
          <div className="row4">
            <a href="google.com">
              <img src={vrgame2} alt="Neon Nights" />
            </a>
            <div className="layer">
             
              <p>Introduction</p>
            </div>
          </div>
          <div className="row4">
            <a href="google.com">
              <img src={vrgame4} alt="Neon Nights" />
            </a>
            <div className="layer">
            
              <p>Computer Parts Store</p>
            </div>
          </div>
          <div className="row4">
            <a href="google.com">
              <img src={vrgame5} alt="Neon Nights" />
            </a>
            <div className="layer">
              
              <p>PC Parts Interaction</p>
            </div>
          </div>
          <div className="row4">
            <a href="google.com">
              <img src={vrgame6} alt="Neon Nights" />
            </a>
            <div className="layer">
              
              <p>VR Socket Interaction</p>
            </div>
          </div>
          <div className="row4">
            <a href="google.com">
              <img src={vrgame8} alt="Neon Nights" />
            </a>
            <div className="layer">
             
              <p>Successfully building a Computer</p>
            </div>
          </div>
          <div className="row4">
            <a href="google.com">
              <img src={unity6} alt="Neon Nights" />
            </a>
            <div className="layer">
              <h13> Bok Choi Adventures UI </h13>
              <p>Check out my Game UI design for Bok Choi!</p>
            </div>
          </div>
          <div className="row4">
            <a href="google.com">
              <img src={spotifyapi} alt="Website Wireframe" />
            </a>
            <div className="layer">
              <h13>Spotify Album Tracker</h13>
              <p>A React.js web application seamlessly integrated with the Spotify API for dynamic artist and album exploration. Enhance your music discovery experience with personalized features, allowing users to effortlessly add and remove favorite albums. The application boasts a responsive UI built with React Bootstrap, ensuring an engaging and user-friendly interface</p>
            </div>
          </div>
          <div className="row4">
            <img src={unity1} alt="EcoConnect Mobile App" />
            <div className="layer">
              <h13> Bok Choi Adventures UI</h13>
              <p>This was my very unity 3d RPG game!</p>
            </div>
          </div>
          <div className="row4">
            <img src={neonnights} alt="Visual Design" />
            <div className="layer">
              <h13>Neon Nights UI wireframe</h13>
              <p>One of my first wireframes for my game called Neon Nights!</p>
            </div>
          </div>
          <div className="row4">
            <img src={wireframe} alt="Visual Design" />
            <div className="layer">
              <h13>Website Wireframe</h13>
              <p>The first wireframe prototype when I wanted to design my website :D</p>
            </div>
          </div>
          <div className="row4">
            <img src={mobileAppDesign} alt="Visual Design" />
            <div className="layer">
              <h13>EcoConnect Mobile UI wireframe </h13>
              <p>EcoConnect is a mobile app designed to encourage and facilitate sustainable living by connecting individuals within local communities. The app aims to promote eco-friendly practice.</p>
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
        <p className="skills-text2">- 3D VR Game with Unity</p>
        <p className="skills-text2">- Use Figma/Sketch for wireframes</p>
        <p className="skills-text2">- HTML5/CSS/Javascript/Bootstrap/ReactJS</p>
        <p className="skills-text2">- Create wireframes for a Mobile App</p>
     
    
        

 
       

        <a href="https://drive.google.com/file/d/160dSSJjp2t_YdnKqOU0Qcx3LuZAiZnvx/view?usp=sharing" className="resume-btn">Resume</a>
      </section>

   
     
    </div>
  );
};

export default Skills;
