import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import "./Sections.css";
import gamewebsite from '../images/gamewebsite.png';
import aerospace from '../images/aerospace.png';
import blizzardui from '../images/blizzardui.png';
import Footer from "./Footer";

const projects = [
  {
    id: 1,
    title: "Canopy Kingdom",
    description: "2D platformer I am currently developing using Godot 4.5!",
    link: "https://echofract.world",
    image: gamewebsite,
  },
  {
    id: 2,
    title: "Aerospace DOP Map",
    description: "Full Stack Web Application for Internship at The Aerospace Corporation.",
    link: "https://github.com/biomesu",
    image: aerospace,
  },
  {
    id: 3,
    title: "Blizzard Mobile UI",
    description: "A wireframe using Figma for a minimalistic UI on the blizzard mobile application.",
    link: "https://www.figma.com/design/vGSyEIDjK8xPaVnNZNvt6Q/Blizzard-mobile-app-idea?node-id=0-1&p=f&t=pIy3YBlqJS9rh9mj-0",
    image: blizzardui,
  },
];

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Software Engineer",
        "Indie Game Developer",
        "UI/UX Designer"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="layout-wrapper">
      <section className="hero-section">
        <motion.h1
          className="text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Steven Lopez
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-500 text-lg max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          I'm a&nbsp;
          <span ref={typedRef} style={{ whiteSpace: "pre" }}></span>
        </motion.p>

        <motion.a
          href="https://github.com/biomesu"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          View GitHub
        </motion.a>
      </section>

      {/* 📁 Projects Section */}
      <section className="section bg-white" id="projects">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="projects-container">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: project.id * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hero;
