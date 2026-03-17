// src/components/Projects.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

// ✅ Image imports (make sure they're in src/images or adjust path accordingly)
import echowebsite from '../images/gamewebsite.png';
import aerospace from '../images/aerospace.png';
import echoboss from '../images/echoboss.png';
import echogame from '../images/echogame.png';
import equipmaster from '../images/autoequip.png';
import equipmaster2 from '../images/autoequip2.png';
import vrgame from '../images/vrgame.png';
import vrgame2 from '../images/vrgame2.png';
import vrgame5 from '../images/vrgame5.png';
import vrgame6 from '../images/vrgame6.png';
import vrgame7 from '../images/vrgame7.png';
import vrgame8 from '../images/vrgame8.png';
import unity2 from '../images/unity2.png';
import unity3 from '../images/unity3.png';
import blizzardui from '../images/blizzardui.png';
import neonnights from '../images/neonnights.png';
import mobileapp from '../images/mobileapp.png';
import unityui2 from '../images/unityui2.png';
import unityui from '../images/unityui.png';
import project2 from '../images/project2.png';
import project1 from '../images/project1.png';

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

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

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

    window.onmousedown = (e) => handleOnDown(e);
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.onmouseup = (e) => handleOnUp(e);
    window.ontouchend = (e) => handleOnUp(e.touches[0]);
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);

    return () => {
      window.onmousedown = null;
      window.ontouchstart = null;
      window.onmouseup = null;
      window.ontouchend = null;
      window.onmousemove = null;
      window.ontouchmove = null;
    };
  }, []);

  const images = [
    echowebsite,aerospace,
    equipmaster, equipmaster2,
    vrgame, vrgame2, vrgame5, vrgame6, vrgame7, vrgame8,
    unity2, unity3, blizzardui, neonnights, mobileapp,
    unityui2, unityui, project2, project1,
  ];

  return (
    <div className="projects-page">

      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        {images.map((src, i) => (
          <img key={i} className="image" src={src} draggable="false" alt={`project-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
