import React from 'react';
import './ProjectsSection.css';
import Card from './Card';
import Card2 from './Card2';

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="search-bar">
        <input type="text" placeholder="Search Project..." />
      </div>
      <div className='popular-projects'>
        <p>Popular Projects🔥</p>
      </div>
      <div className='card-list'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className='card2-list'>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
      </div>

    </section>
  );
};

export default ProjectsSection;
