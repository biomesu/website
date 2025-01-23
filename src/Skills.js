import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles1.css'; 

import index from './images/indexbanner.jpg';
import { projectsNav } from './Data'; 
import { projectsData } from './Data';
import WorkItems from './WorkItems';
import neonnights from './images/neonnights.png';
import wireframe from './images/wireframe.png';
import mobileAppDesign from './images/mobileapp.png';
import unity6 from './images/unity6.png';

import mobileapp from './images/mobileapp.png';
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
import equipmaster from './images/autoequip.png'
import unity3 from './images/unity3.png';
import neon from './images/neonnights.png';
import equipmaster2 from './images/autoequip2.png';
import blizzardui from './images/blizzardui.png';
import echomain from './images/echomainmenu.png';
import echogame from './images/echogame.png';
import echoboss from './images/echoboss.png';
import echowebsite from './images/gamewebsite.png';
import aerospace from './images/aerospace.png'
import Gallery from './Gallery';



const Skills = () => {


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
      <h9>Portfolio</h9>
      </div>
      </section>
      <Gallery></Gallery>
   
          

        <section className="projects-section">
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
     
    
        

 
       

        <a href="https://drive.google.com/file/d/1L9ug-EtgYA5W2HPhQqIYpF-phxrhSeT-/view?usp=sharing" className="resume-btn">Resume</a>
      </section>
    </div>
    
      

  );
};

export default Skills;
