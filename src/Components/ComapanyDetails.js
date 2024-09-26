import React, { useEffect, useState } from "react";
import "./CompanyDetails.css";
import Navbar from "./Dashboard/Navbar";
import receivelogo from "../Images/Received.png";
import sentlogo from "../Images/Sent.png";

 
const CompanyDetails = () => {
    document.body.style.background="rgba(234, 239, 255, 1)"
    const selectedProject = JSON.parse(localStorage.getItem('selectedProject'));
  return (
    <>
      <Navbar />
      <div className="company-details">
        {/* Header */}
        <div className="header-container">
          <div className="header-section"><img className="header-section" src="" alt="cover-picture"/></div>
          <div className="subconatiner">
                <div className="profile-container">
                <div className="profile-logo"></div>
                <div className="profile-text">
                    <h6>Deal! Job</h6>
                </div>
            </div>
            <div className="inner">
              <button className="send-request-btn">Edit Profile</button>
            </div>
          </div>
        </div>
 
        {/* Main Body */}
        <div className="main-content1">
          {/* Left Section */}
          <div className="left-section1">
            {/* Biodata */}
            <div className="biodata-card1">
              <p className="biodata-heading">Biodata</p>
              <p className="biodata-text">
                {selectedProject?.bioData || ""}
                
              </p>
            </div>
 
            {/* Ecosystem */}
            <div className="ecosystem-card1">
              <p className="ecosystem-heading">Ecosystem</p>
              <p className="ecosytem-text">{selectedProject?.blockchain || ""}</p>
            </div>
 
            {/* Partnership Interest */}
            <div className="partnership-card1">
              <p className="partnership-heading">Partnership Interested</p>
              <p className="partnership-text">{selectedProject?.partnershipInterest || ""}</p>
            </div>
 
            {/* Whitepaper */}
            <div className="whitepaper-card1">
              <p className="whitepaper-heading">Whitepaper:<a className="whitepaper-text">{selectedProject?.whitepaper}</a></p>
            </div>
 
            {/* Statement for Projects */}
            <div className="statement-card1">
              <p className="statement-heading">Statement for projects</p>
              <p className="statement-text">
               {selectedProject?.descr || ""}
              </p>
            </div>
          </div>
          {/*right Section */}
          <div className="right-section1">
            <div className="stat-item1">
              <img src={receivelogo} alt="logo" className="received1-img1"/> <a className="stat-item1-text">Requests Received</a> <a className="number-stat">105</a>
            </div>
            <div className="stat-item1">
            <img src={sentlogo} alt="logo" className="received1-img1"/><a className="stat-item1-text"> Requests Sent </a> <a className="number-stat">105</a>
            </div>
 
            <div className="categories-card1">
              <p className="categories-heading">Categories</p>
              <p className="categories-text">{selectedProject?.category || ""}</p>
            </div>
 
            {/* Request Type */}
            <div className="request-type-card1">
              <p className="request-type-heading">Request Type</p>
              <p className="request-type-text">Technical Consultation, Funding, Listing...</p>
            </div>
 
            {/* Social Media */}
            <div className="social-media-card1">
              <p className="social-media-heading">Social Media</p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default CompanyDetails;