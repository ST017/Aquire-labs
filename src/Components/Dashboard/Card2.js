import React, { useState,useEffect } from "react";
import "./Card2.css";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

import Modal from "./ModalCategory";
import { CategoryList } from "./Filterlists";
import BookMark from "../../Images/Bookmark (2).png"
import Verify from "../../Images/VerificationIcon.png"
import ReceivedLogo from '../../Images/Received.png';
import SentLogo from '../../Images/Sent.png';
import LocationLogo from '../../Images/LocationLogo.png';

 
const Card2 = ({name,logo,country,desc,userId,onClick}) => {
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
      <div className="card-container" >
       
        <div className="card-logo" onClick={onClick}>
          <img src={logo} alt="logo" aria-placeholder="img"></img>
        </div>
        <div className="card2-content" >
          <div className="card2-sub-content">
          <div className="header-card" onClick={onClick}>
            <div className="title-name-icon">
              <div className="title-name">{name} </div>{isVerified && (<img src={Verify} alt="verified" className="verified-icon"/>)}
              
              </div>
           
            <img
              src={BookMark}
              alt="Bookmark"
              className="bookmark"
            />
           
          </div>
            <div className="card2-details">
          <div className="Location-Card"onClick={onClick}>
            <div><img src={LocationLogo} alt="location" />{country}</div>
            <div> <img src={ReceivedLogo} alt="Requests Received" /> Requests Received :{requestReceived}</div>
            <div><img src={SentLogo} alt="Requests Sent" /> Requests Sent :{requestSent}</div>
          </div>
 
          <div className="body-content"  onClick={onClick} >
            <div className="bio">
               {desc}
            </div>
          </div>
 
          <div className="cardin">
                    <div className="cardin-list" >
                        <ul>
                            {CategoryList.slice(0, visibleCount).map((name, index) => (
                            <li key={index}>{name}</li>
                            ))}
                            {CategoryList.length > visibleCount && (
                              <li style={{fontWeight:"bold",color:"rgba(26, 13, 171, 1)"}} onClick={handleMoreClick}>+{CategoryList.length - visibleCount} More</li>
                          )}
                         </ul>
                            
                       
                    </div>
                    {isModalOpen && (
        <Modal categories={CategoryList.slice(visibleCount)} onClose={closeModal} />
      )}
          </div>
          </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
 
export default Card2;