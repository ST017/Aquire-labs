import React from 'react';
import './CompanyDetails.css';

const CompanyDetails = () => {
    return (
        <div className="company-details">
            {/* Header */}
            <div className="header-section">
                
                
            </div>
            <div className="profile-logo">
                                
            </div>
            <div className='inner'>
                        <div className="profile-text">
                            <h6>Deal! Job</h6>
                            
                        </div> 
            <button className="send-request-btn">Edit Profile</button>
            </div>
               

            {/* Main Body */}
            <div className="main-content">
                {/* Left Section */}
                <div className="left-section">
                    {/* Biodata */}
                    <div className="biodata-card">
                        <h3>Biodata</h3>
                        <p>
                            I’ve been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces...
                            {/* Add the rest of the content here */}
                        </p>
                    </div>

                    {/* Ecosystem */}
                    <div className="ecosystem-card">
                        <h3>Ecosystem</h3>
                        <p>
                            Ethereum, Solana, Tron, Fantom, Skale Network, and more...
                        </p>
                    </div>

                    {/* Partnership Interest */}
                    <div className="partnership-card">
                        <h3>Partnership Interested</h3>
                        <p>AI & Big Data, Crowd Funding, Content Creation...</p>
                    </div>

                    {/* Whitepaper */}
                    <div className="whitepaper-card">
                        <h3>Whitepaper</h3>
                        
                    </div>

                    {/* Statement for Projects */}
                    <div className="statement-card">
                        <h3>Statement for projects</h3>
                        <p>
                            I’ve been passionate about graphic design and digital art...
                        </p>
                    </div>
                </div>
                {/*right Section */}
                <div className='right-section'>
               
                    
                        <div className="stat-item">
                            <p>Requests Received</p>
                            <span>105</span>
                        </div>
                        <div className="stat-item">
                            <p>Requests Sent</p>
                            <span>105</span>
                        </div>
                    

                    
                    <div className="categories-card">
                        <h3>Categories</h3>
                        <p>AI & Big Data, Asset Management, Augmented Reality...</p>
                    </div>

                    {/* Request Type */}
                    <div className="request-type-card">
                        <h3>Request Type</h3>
                        <p>Technical Consultation, Funding, Listing...</p>
                    </div>

                    {/* Social Media */}
                    <div className="social-media-card">
                        <h3>Social Media</h3>
                        {/* Add icons or links to social media here */}
                    </div>
                    </div>
                </div>
            </div>
       
    );
};

export default CompanyDetails;
