import React from 'react';
import './Card2.css';

const Card2 = () => {
  return (
    <div className="card2">
      <div className="card2-header">
        <img
          src="https://dribbble.com/favicon.ico" // Placeholder for the profile image
          alt="Senior UX/UI Designer"
          className="profile-logo"
        />
        <div className="card2-header-content">
          <div className="card2-header-top">
            <h3 className="title">
              Senior UX/UI Designer <img src="https://img.icons8.com/fluency/48/000000/verified-badge.png" alt="verified" className="verified-icon"/>
            </h3>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/bookmark-ribbon.png"
              alt="Bookmark"
              className="bookmark"
            />
          </div>
          <p className="location">
            <img src="https://img.icons8.com/ios-filled/16/000000/marker.png" alt="location" /> California
          </p>
          <p className="requests">
            <img src="https://img.icons8.com/color/48/000000/request-money.png" alt="Requests Received" /> Requests Received : 10
            <img src="https://img.icons8.com/emoji/48/000000/envelope-emoji.png" alt="Requests Sent" /> Requests Sent : 05
          </p>
        </div>
      </div>

      <div className="card2-content">
        <p className="bio">
          Bio : Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
        </p>
        <div className="skills">
          <span>AI & Big Data</span>
          <span>Crowd Funding</span>
          <span>Content Creation</span>
          <span>Education</span>
          <span>Ethereum Ecosystem</span>
          <span className="more">+20 More</span>
        </div>
      </div>
    </div>
  );
};

export default Card2;
