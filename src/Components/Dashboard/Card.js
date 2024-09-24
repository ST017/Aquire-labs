import React from 'react';
import './Card.css';
import EmployerLogo from '../../Images/EmployersLogo.png';
import ReceivedLogo from '../../Images/Received.png';
import SentLogo from '../../Images/Sent.png';
import BookMark from "../../Images/Bookmark (2).png"



const Card = ({name,logo,web,desc,requestReceivedCount,requestSentCount}) => {
  return (
    <div className="card">
      <div className="card-header">
        
        <img
          src={logo} 
          alt="Google Inc."
          className="company-logo"
        />
        <p className="company-name">{name}</p>
        <div >
          <img  className=" card-bookmark"src={BookMark} alt="Bookmark" />
        </div>
      </div>
      
      <div className="card-content">
        <a href={web} className="website-link">{web}</a>
        <p className='request-type1'>Description:<span className="request-type">{desc}</span></p>
        
        <div className="request-details">
          <p className='request-received'><img src={ReceivedLogo} alt="Request Received" className="icon"/> 
          Request Received: <span className="request-sent1">{requestReceivedCount}</span></p>
          
          <p className="request-sent"><img src={SentLogo} alt="Request Sent" className="icon"/> 
          Request Sent: <span className="request-sent1">{requestSentCount}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
