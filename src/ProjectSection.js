// src/components/ProjectSection.js
import React from 'react';

const ProjectSection = ({ imageSrc, title, description, position }) => {
  return (
    <section className="hidden">
      <img src={imageSrc} className={position === 'left' ? 'neon2' : 'neon'} alt={title} />
      <h1>{title}</h1>
      <p style={{ textAlign: 'left', position }}>{description}</p>
    </section>
  );
};

export default ProjectSection;
