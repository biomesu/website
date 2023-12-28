import React from 'react';
import { Link } from 'react-router-dom';
import index from './images/indexbanner.jpg';
import me from './images/me.jpg';

const About = () => {
  return (
    <section className="header">
      <img src={index} className="back-video" alt="Background Video" />
      <nav>
        <div className="nav-links " id="navLinks">
          <i className="fa fa-times" ></i>
          <ul>
          <li><Link to ="/">HOME </Link></li>
              <li><Link to ="/about">ABOUT ME </Link></li>
              <li><Link to ="/skills">PORTFOLIO </Link></li>
              <li><Link to ="/projects">PROJECTS </Link></li>
              <li><Link to ="/contact">CONTACT </Link></li>
          </ul>
        </div>
        <i className="fa fa-bars" ></i>
      </nav>
      <div className="aboutme hidden">
      <h9>About Me</h9>
      </div>
      <section className="aboutmesection">
      <div className="box ">
        <img src={me} alt="" className="box-img2" />
        <h8>Steven Lopez</h8>
        <h9>UI/UX Designer</h9>
        <p>I am a current Software Engineer/UI/UX designer who specializes in User Interfaces, <br />
          Desktop/Mobile Applications for User Preference with minimalism and optimization that <br />
           is done with Agile Software Development and User Research. I also love to play games, <br />
           go biking, hang with friends when I have time, and read manga! Although my favorite as <br />
           right now I do love thrift shopping for clothes because I am a bit of a fashionista. </p>

          <h9></h9>
             
      </div>
      </section>
      

      {/* ICONS BELOW SITE */}
      <section className="footer">
        <h4></h4>
        <p></p>
        <hr />
        <div className="icons">
          <a href="https://www.linkedin.com/in/steven-lopezz/">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </section>
    </section>
  );
};

export default About;
