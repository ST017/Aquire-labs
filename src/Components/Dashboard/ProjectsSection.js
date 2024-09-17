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
        <h3>Popular Projects🔥</h3>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Card2/>
      </div>

    </section>
  );
};

export default ProjectsSection;
