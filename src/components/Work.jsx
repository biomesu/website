// src/components/Work.jsx
import React from 'react';
import { motion } from 'framer-motion';
import "./Sections.css";
import Footer from "./Footer";


const projects = [
  {
    title: "Indie Game Developer",
    company: "Canopy Kingdom",
    duration: "Aug 2024 – Present",
    bullets: [
      "Designed a modular state machine system for both player and boss entities, enabling scalable behavior control and cleaner combat logic. ",
      "Developed composition-based components to maximize code reusability and streamline shared enemy and boss functionality. ",
      "Engineered a challenging boss encounter featuring 8 distinct action states, increasing gameplay depth and complexity",
    ],
  },
   {
    title: "QA Engineer",
    company: "Riverstreamz",
    location: "Whittier, CA",
    duration: "Oct 2024 – Nov 2024",
    bullets: [
      "Analyzed and verified software integrity through detailed testing methods applied to 600+ voting related applications. ",
      "Implemented a second quality assurance process to confirm all iPads were error-free and election-ready, achieving a record deployment of 754 iPads for a single election cycle. ",
      "Leveraged Monday.com for efficient inventory management and monitoring of device status, ensured 100% availability of devices at all designated polling sites throughout the election process.",
    ],
  },
  {
    title: "Full Stack Intern",
    company: "The Aerospace Corporation",
    location: "El Segundo, CA",
    duration: "Sep 2023 – May 2024",
    bullets: [
      "Improved data visualization performance by nearly 100% using matplotlib, leaflet.js, and GeoJSONContour.",
      "Enhanced ReactJS proficiency to build a robust UI foundation, increasing user engagement by 100%. ",
      "Delivered a full-stack web application using InfluxDB, Flask, and React to visualize DOP data on an interactive map.",
    ],
  },
  {
    title: "Project Leader",
    company: "Association of Computing Machinery",
    location: "Los Angeles, CA",
    duration: "Jan 2023 – Jun 2023",
    bullets: [
      "Collaborated with leaders to develop and deliver weekly presentations that informed members and drove strategic decision-making ",
      "Increased member engagement, retention, and submissions on workshops by nearly 200%",
    ],
  },
];


const Work = () => {
  return (
    <>
      <section className="work-section" id="work">
        <div className="timeline">
          <h2 className="section-title">Work Experience</h2>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
            >
              <div className="timeline-content">
                <h3>{project.title}</h3>
                <p className="company">{project.company}</p>
                <p className="timeline-location">{project.location}</p>
                <p className="timeline-duration">{project.duration}</p>
                <ul>
                  {project.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
      </section>

      {/* ✅ Footer goes here */}
      <Footer />
    </>
  );
};


export default Work;
