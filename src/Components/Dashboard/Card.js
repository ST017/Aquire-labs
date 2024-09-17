import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src="https://logo.clearbit.com/google.com" // Placeholder for the Google logo
          alt="Google Inc."
          className="company-logo"
        />
        <h3 className="company-name">Google Inc.</h3>
        <div className="bookmark">
          <img src="https://img.icons8.com/ios-filled/50/000000/bookmark-ribbon.png" alt="Bookmark" />
        </div>
      </div>
      
      <div className="card-content">
        <a href="https://www.google.com" className="website-link">www.google.com</a>
        <p><strong>Request Type:</strong> <span className="request-type">Technical Collaboration</span></p>
        
        <div className="request-details">
          <p><img src="https://img.icons8.com/color/48/000000/request-money.png" alt="Request Received" className="icon"/> 
          Request Received: <span className="request-received">24</span></p>
          
          <p><img src="https://img.icons8.com/emoji/48/000000/envelope-emoji.png" alt="Request Sent" className="icon"/> 
          Request Sent: <span className="request-sent">14</span></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
