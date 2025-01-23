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
import vrgame from './images/vrgame.png';
import vrgame2 from './images/vrgame2.png';
import vrgame3 from './images/vrgame3.png';
import vrgame4 from './images/vrgame4.png';
import vrgame5 from './images/vrgame5.png';
import vrgame6 from './images/vrgame6.png';
import vrgame7 from './images/vrgame7.png';
import vrgame8 from './images/vrgame8.png';
import vrgame9 from './images/vrgame9.png';
import equipmaster from './images/autoequip.png';
import equipmaster2 from './images/autoequip2.png';
import echomain from './images/echomainmenu.png';
import echogame from './images/echogame.png';
import echoboss from './images/echoboss.png';
import echowebsite from './images/gamewebsite.png';
import aerospace from './images/aerospace.png'

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
        <img className="image" src={echowebsite} draggable="false" alt="vr Unity Image 2" />
        <img className="image" src={echomain} draggable="false" alt="vr Unity Image 2" />
        <img className="image" src={aerospace} draggable="false" alt="vr Unity Image 2" />
        <img className="image" src={echoboss} draggable="false" alt="vr Unity Image 1" />
        <img className="image" src={echogame} draggable="false" alt="vr Unity Image 1" />
        <img className="image" src={equipmaster} draggable="false" alt="vr Unity Image 2" />
        <img className="image" src={equipmaster2} draggable="false" alt="vr Unity Image 1" />
        <img className="image" src={vrgame} draggable="false" alt="vr Unity Image 1" />
        <img className="image" src={vrgame2} draggable="false" alt="vr Unity Image 2" />
        <img className="image" src={vrgame5} draggable="false" alt="vr Unity Image 1" />
        <img className="image" src={vrgame6} draggable="false" alt="vr Unity Image 2" />
        <img className="image" src={vrgame7} draggable="false" alt="vr Unity Image 1" />
        <img className="image" src={vrgame8} draggable="false" alt="vr Unity Image 1" />
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
