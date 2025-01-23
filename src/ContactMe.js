import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './styles1.css';
import index from './images/indexbanner.jpg';


const ContactMe = () => {
  return (
    <div id="header1">
    <section className="header">
      <img src={index} className="back-video" alt="Background Video" />
      <nav>
        
        <div className={`nav-links`} id="navLinks">
          <i className="fa fa-times" ></i>
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
      <div className="text-box">
      <h9>Contact Me</h9>
      </div>
    </section>
    <section className="contact-me ">
      <div className="row">
        <div className="contact-col">
         
        </div>
        <div className="contact-col">
          <form action="form-handler.php" method="post">
            <input type="text" name="name" placeholder="Enter your name" required />
            <input type="email" name="email" placeholder="Enter email address" required />
            <input type="text" name="subject" placeholder="Enter your subject" required />
            <textarea rows="8" name="message" placeholder="Message" required></textarea>
            <button type="submit" className="contact-btn">Message</button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactMe;

