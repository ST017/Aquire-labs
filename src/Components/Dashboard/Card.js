import React from 'react';
import './Card.css';
import EmployerLogo from '../../Images/EmployersLogo.png';
import ReceivedLogo from '../../Images/Received.png';
import SentLogo from '../../Images/Sent.png';



const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        
        <img
          src={EmployerLogo} 
          alt="Google Inc."
          className="company-logo"
        />
        <p className="company-name">Google Inc.</p>
        <div className="bookmark">
          <img src="https://img.icons8.com/ios-filled/50/000000/bookmark-ribbon.png" alt="Bookmark" />
        </div>
      </div>
      
      <div className="card-content">
        <a href="https://www.google.com" className="website-link">www.google.com</a>
        <p className='request-type1'>Request Type:<span className="request-type">Technical Collaboration</span></p>
        
        <div className="request-details">
          <p className='request-received'><img src={ReceivedLogo} alt="Request Received" className="icon"/> 
          Request Received: <span className="request-sent1">24</span></p>
          
          <p className="request-sent"><img src={SentLogo} alt="Request Sent" className="icon"/> 
          Request Sent: <span className="request-sent1">14</span></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
