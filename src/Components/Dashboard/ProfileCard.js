import React, { useState } from "react";
import "./ProfileCard.css"; 

const ProfileCard = () => {
    const [connects, setConnects] = useState(18);
    const [proposals, setProposals] = useState(20);
    

    return (
        <>
        <div>
            <div className="profile-card">
                <div className="availability">
                    <p className="availability-item">{connects} ddAvailable Connects</p>
                    <p className="availability-item">{proposals} Submitted Proposal</p>
                </div>

                <div className="categories">
                    {categories.slice(0, 4).map((category, index) => (
                        <div key={index} className="category-tag">
                            {category}
                        </div>
                    ))}
                    <div className="category-tag">+20 More</div>
                </div>

                <button className="view-profile-btn">View Profile</button>
            </div>
        </div>
        <div>
        <div className="profile-card">
            <div className="availability">
                <p className="availability-item">{connects} Available ddConnects</p>
                <p className="availability-item">{proposals} Submitted Proposal</p>
            </div>

            <div className="categories">
                {categories.slice(0, 4).map((category, index) => (
                    <div key={index} className="category-tag">
                        {category}
                    </div>
                ))}
                <div className="category-tag">+20 More</div>
            </div>

            <button className="view-profile-btn">View Profile</button>
        </div>
    </div>
    </>

    );
};

export default ProfileCard;
