import React from 'react';
import { Link } from 'react-router-dom';
import index from './images/indexbanner.jpg';
import me from './images/me.jpg';
import './styles1.css'; // Import your CSS file

const About = () => {
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
      <h9>About Me</h9>
      </div>
      </section>

      {/* About me */}
      <section className="projects-section">
        <div className="projects-grid">
        <img src={me} alt="" />
          <h2>Hello nice to meet you my name is Steven Lopez and I am a current Software Engineer/UI/UX designer who specializes in User Interfaces, 
          Desktop/Mobile Applications for User Preference with minimalism and optimization that 
           is done with Agile Software Development and User Research. I also love to play games, 
           go biking, hang with friends when I have time, and read manga! Although my favorite as 
           right now I do love thrift shopping for clothes because I am a bit of a fashionista. </h2>

      </div>
      </section>
    </div>
      
      
    
  );
};

export default About;
