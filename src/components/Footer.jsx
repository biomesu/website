// src/components/Footer.jsx
import React from "react";
import "./Footer.css"; // optional: for styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Steven Lopez. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:stevo2195@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
