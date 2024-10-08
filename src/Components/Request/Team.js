import React from 'react';
import './Team.css'; // Link to the CSS file

const teamMembers = [
  { name: 'Zane Sorell', position: 'CEO', img: 'path-to-profile-image', twitter: '#', linkedin: '#' },
  // Repeat the object for other team members if needed
];

const Team = () => {
  return (
    <div className="team-section">
        <div className="ourteam"><h2>Our </h2><span>Team</span></div>
      
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-img-wrapper">
              <img src={member.img} alt={`${member.name}`} className="team-img" />
            </div>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <div className="social-icons">
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <img src="path-to-twitter-icon" alt="Twitter" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src="path-to-linkedin-icon" alt="LinkedIn" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
