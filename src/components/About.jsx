import React from 'react';
import Work from '../components/Work';
import me from '../images/me.png';
import './Sections.css';

const About = () => {
  return (
<div className="layout-wrapper">
<section className="section" id="about">
  <div className="max-w-3xl text-center">
    <h2 className="text-3xl">About</h2>
    <div className="me-image-wrapper">
      <img className="me-image" src={me} alt="me" />
    </div>
    <p>
      Hello my name is Steven Lopez. I am a passionate software developer with a strong interest in game development and web technologies. I enjoy creating scalable components and innovative solutions through code. When I'm not coding, I love working on my game, playing video games, and read sci-fi books!
    </p>
  </div>
  <Work/>
</section>
</div>
  );
};

export default About;
