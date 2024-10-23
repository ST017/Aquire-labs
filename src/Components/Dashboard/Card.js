import React, { useEffect, useState } from 'react';
import './Card.css';
import EmployerLogo from '../../Images/EmployersLogo.png';
import ReceivedLogo from '../../Images/Received.png';
import SentLogo from '../../Images/Sent.png';
import BookMark from "../../Images/Bookmark (2).png"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/firebase';



const Card = ({name,logo,web,desc,onClick,userId,requestType}) => {
  const [requestSent, setRequestSent] = useState(0);
  const [requestReceived, setRequestReceived] = useState(0);

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


useEffect(() => {
  // Ensure selectedProject and userId exist
  if (userId) {
    fetchUserConnectCounts(userId, setRequestSent, setRequestReceived);
  }
}, [userId,db]);
  return (
    <div className="card11" onClick={onClick}>
      <div className="card-header1">
        <div className="card-header1-sub">
        <img
          src={logo} 
          alt="Google Inc."
          className="company-logo"
        />
        <p className="cardcompany-name" >{name}</p> </div>
        <div >
          {/* <img  className=" card-bookmark"src={BookMark} alt="Bookmark" /> */}
        </div>
      </div>
     
      <div className="card-content1">
        <a href={web} className="website-link">{web}</a>
        <div className='card-content1-sub'>
        <h1 className='request-type-first'>Request Type: <a className="request-type">{requestType || ""}</a></h1>
        
        <div className="request-details">
          <p className='request-received'><img src={ReceivedLogo} alt="Request Received" className="icon"/> 
          Request Received: <span className="request-sent1">{requestReceived}</span></p>
          
          <p className="request-sent">
            <img src={SentLogo} alt="Request Sent" className="icon"/> 
          Request Sent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span className="request-sent1">{requestSent}</span></p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
