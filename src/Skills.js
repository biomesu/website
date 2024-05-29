import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles1.css'; 
import './work.css';
import index from './images/indexbanner.jpg';
import { projectsNav } from './Data';
import { projectsData } from './Data';
import WorkItems from './WorkItems';
import neonnights from './images/neonnights.png';
import wireframe from './images/wireframe.png';
import mobileAppDesign from './images/mobileapp.png';
import unity6 from './images/unity6.png';
import spotifyapi from './images/spotifyapi.png';
import mobileapp from './images/mobileapp.png';
import unity1 from './images/unity1.png';
import vrgame from './images/vrgame.png';
import vrgame2 from './images/vrgame2.png';
import vrgame3 from './images/vrgame3.png';
import vrgame4 from './images/vrgame4.png';
import vrgame5 from './images/vrgame5.png';
import vrgame6 from './images/vrgame6.png';
import vrgame7 from './images/vrgame7.png';
import vrgame8 from './images/vrgame8.png';
import vrgame9 from './images/vrgame9.png';




const Skills = () => {
  const [item,setItem] = useState({name: 'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(item.name === "all"){
      setProjects(projectsData);
    }
    else{
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  
  }, [item]);

const handleClick = (e, index) => {
  setItem({name: e.target.textContent});
}

  return (
    <div id="header1">
      <section className="header">
        <img src={index} className="back-video" alt="Background Video" />
        <nav>
          <div className="nav-links " id="navLinks">
            <i className="fa fa-times"></i>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT ME</Link></li>
              <li><Link to="/skills">PORTFOLIO</Link></li>
              <li><Link to="/projects">PROJECTS</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <i className="fa fa-bars" ></i>
        </nav>
        <div className="projects">
          <h9>Portfolio </h9>
        </div>
      </section>
      <div className="work__filters">
        {projectsNav.map((item,index) => {
          return <span onClick={(e) =>{
            handleClick(e,index);
          }}
           className='work__item' key={index} >
            {item.name}</span>;
        })}
      </div>
      <div className='work__container container grid'>
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id}/>;
        })}

      </div>
      

      {/* Skills Section */}
      <section className="skills hidden">
        <h1>Courses Taken</h1>
        <p className="skills-text">Below are my skills and currently learning more!</p>
        <p className="skills-text">- CS 002 (FUNDAMENTALS OF COMPUTER SCIENCE)</p>
        <p className="skills-text">- CS 003A (INTRO OBJECT ORIENTD PROGR C++)</p>
        <p className="skills-text">- CS 3220 (WEB AND INTERNET PROGRAMMING)</p>
        <p className="skills-text">- CS 4220 (Current Trends in Web Design)</p>
        <p className="skills-text">- CS 4440 (Operating Systems)</p>
        <p className="skills-text">- CS 4540 (Cloud Computing)</p>
        <p className="skills-text">- CS 4555 (Game Design)</p>
       
      

        <h2>What I can do</h2>
        <p className="skills-text2">- Website Design</p>
        <p className="skills-text2">- Basics of a WoW UI Addon</p>
        <p className="skills-text2">- 2D/3D Game with Unity</p>
        <p className="skills-text2">- 3D VR Game with Unity</p>
        <p className="skills-text2">- Use Figma/Sketch for wireframes</p>
        <p className="skills-text2">- HTML5/CSS/Javascript/Bootstrap/ReactJS</p>
        <p className="skills-text2">- Create wireframes for a Mobile App</p>
     
    
        

 
       

        <a href="https://docs.google.com/document/d/1FD4k51XYnOMSCsXGhm9sSWXbrrw4nw-4ACuBKYqmkgM/edit?usp=sharing" className="resume-btn">Resume</a>
      </section>

   
     
    </div>
  );
};

export default Skills;
