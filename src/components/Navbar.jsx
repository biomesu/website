import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import './Navbar.css';
import './Sections.css';
import logo from '../images/biomeslogo.png';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}        
      animate={{ opacity: 1 }}         
      transition={{ duration: 0.8, ease: 'easeOut' }} 
    >
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul className="navbar-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
