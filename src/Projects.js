// src/components/Projects.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import index from './images/indexbanner.jpg';
import unity1 from './images/unity1.png';
import unity2 from './images/unity2.png';
import unity3 from './images/unity3.png';
import blizzardui from './images/blizzardui.png';
import neonnights from './images/neonnights.png';
import mobileapp from './images/mobileapp.png';
import unityui2 from './images/unityui2.png';
import unityui from './images/unityui.png';
import project2 from './images/project2.png';
import project1 from './images/project1.png';

const Projects = () => {
  useEffect(() => {
    const track = document.getElementById("image-track");

    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);
    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage =
        (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        );

      track.dataset.percentage = nextPercentage;

      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    /* -- Had to add extra lines for touch events -- */

    window.onmousedown = (e) => handleOnDown(e);
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.onmouseup = (e) => handleOnUp(e);
    window.ontouchend = (e) => handleOnUp(e.touches[0]);
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);

    // Clean up event listeners when the component is unmounted
    return () => {
      window.onmousedown = null;
      window.ontouchstart = null;
      window.onmouseup = null;
      window.ontouchend = null;
      window.onmousemove = null;
      window.ontouchmove = null;
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <section className="header">
        <img src={index} className="back-video" alt="Background Video" />
        <nav>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times"></i>
            <ul>
              <li><Link to="/">HOME </Link></li>
              <li><Link to="/about">ABOUT ME </Link></li>
              <li><Link to="/skills">PORTFOLIO </Link></li>
              <li><Link to="/projects">PROJECTS </Link></li>
              <li><Link to="/contact">CONTACT </Link></li>
            </ul>
          </div>
          <i className="fa fa-bars"></i>
        </nav>
        <div className="text-box">
        </div>
      </section>
      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        <img className="image" src={unity1} draggable="false" alt="Unity Image 1" />
        <img className="image" src={unity2} draggable="false" alt="Unity Image 2" />
        <img className="image" src={unity3} draggable="false" alt="Unity Image 3" />
        <img className="image" src={blizzardui} draggable="false" alt="Blizzard UI Image" />
        <img className="image" src={neonnights} draggable="false" alt="Neon Nights Image" />
        <img className="image" src={mobileapp} draggable="false" alt="Mobile App Design Image" />
        <img className="image" src={unityui2} draggable="false" alt="Unity UI Image 2" />
        <img className="image" src={unityui} draggable="false" alt="Unity UI Image" />
        <img className="image" src={project2} draggable="false" alt="Project Image 2" />
        <img className="image" src={project1} draggable="false" alt="Project Image 1" />
      </div>
    </div>
  );
};

export default Projects;
