import React, { useState,useEffect } from "react";
import "./Card2.css";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

import Modal from "./ModalCategory";
import { CategoryList } from "./Filterlists";
import BookMark from "../../Images/Bookmark (2).png"
 
const Card2 = ({name,logo,city,desc,userId,onClick}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestSent, setRequestSent] = useState(0);
  const [requestReceived, setRequestReceived] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  const fetchUserConnectCounts = async (userId, setRequestSent, setRequestReceived) => {
    try {
      // Reference to the UserConnects collection
      const connectsRef = collection(db, 'UserConnects');
  
      // Create query to match userId
      const userQuery = query(connectsRef, where('userId', '==', userId));
  
      // Create query to match toUserId
      const toUserQuery = query(connectsRef, where('toUserId', '==', userId));
  
      // Run both queries in parallel
      const [userSnapshot, toUserSnapshot] = await Promise.all([
        getDocs(userQuery),
        getDocs(toUserQuery)
      ]);
  
      // Set state for requestSent and requestReceived
      setRequestSent(userSnapshot.size);      // Count of requests sent (userId)
      setRequestReceived(toUserSnapshot.size); // Count of requests received (toUserId)
    } catch (error) {
      console.error('Error fetching data:', error);
      setRequestSent(0);      // Default to 0 if error occurs
      setRequestReceived(0);   // Default to 0 if error occurs
    }
  };

   // Fetch user verification status
   const fetchUserVerification = async (userId) => {
    try {
      const usersRef = collection(db, 'User'); // Assuming your collection name is 'Users'
      const userQuery = query(usersRef, where('id', '==', userId));
      const userSnapshot = await getDocs(userQuery);
      if (!userSnapshot.empty) {
        const userData = userSnapshot.docs[0].data(); // Get the first matched document
        setIsVerified(userData.verified); // Check if the user is verified
      }
    } catch (error) {
      console.error('Error fetching user verification:', error);
      setIsVerified(false); // Default to false if error occurs
    }
  };


useEffect(() => {
  // Ensure selectedProject and userId exist
  if (userId) {
    fetchUserConnectCounts(userId, setRequestSent, setRequestReceived);
    fetchUserVerification(userId); // Fetch verification status
  }
}, [userId,db]);
  const handleMoreClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  const visibleCount = 4;
 
  return (
    <>
      <div className="card-container" onClick={onClick}>
        <div className="card-logo">
          <img src={logo} alt="logo" aria-placeholder="img"></img>
        </div>
        <div className="card2-content">
          <div className="header-card">
            <div className="title">{name} {isVerified && (<img src="https://img.icons8.com/fluency/48/000000/verified-badge.png" alt="verified" className="verified-icon"/>)}</div>
           
            <img
              src={BookMark}
              alt="Bookmark"
              className="bookmark"
            />
           
          </div>
 
          <div className="Location-Card">
            <div><img src="https://img.icons8.com/ios-filled/16/000000/marker.png" alt="location" />{city}</div>
            <div> <img src="https://img.icons8.com/color/48/000000/request-money.png" alt="Requests Received" /> Requests Received :{requestReceived}</div>
            <div><img src="https://img.icons8.com/emoji/48/000000/envelope-emoji.png" alt="Requests Sent" /> Requests Sent :{requestSent}</div>
          </div>
 
          <div className="body-content">
            <div className="bio">
              Bio : {desc}
            </div>
          </div>
 
          <div className="cardin">
                    <div className="cardin-list" >
                        <ul>
                            {CategoryList.slice(0, visibleCount).map((name, index) => (
                            <li key={index}>{name}</li>
                            ))}
                         </ul>
                            {/* Show "+X more" if there are more than 5 names */}
                        {CategoryList.length > visibleCount && (
                            <div className="more-list" onClick={handleMoreClick}>{CategoryList.length - visibleCount}+ more</div>
                        )}
                    </div>
                    {isModalOpen && (
        <Modal categories={CategoryList.slice(visibleCount)} onClose={closeModal} />
      )}
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Card2;