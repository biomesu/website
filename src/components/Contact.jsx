import React from "react";
import { motion } from "framer-motion"; // import motion
import "./Contact.css";

const Contact = () => (
  <div className="layout-wrapper">
    <div className="contact-page">
      <div className="contact-container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          If you'd like to work together, ask a question, or just say hi — feel free to reach out.
        </motion.p>

        <motion.form
          action="https://formspree.io/f/your-form-id" // replace with your Formspree form ID
          method="POST"
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />

          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </div>
  </div>
);

export default Contact;
