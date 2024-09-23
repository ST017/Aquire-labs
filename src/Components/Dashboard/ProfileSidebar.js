
import { collection, getDocs, query, where } from 'firebase/firestore';
import './ProfileSidebar.css';
import { getAuth } from 'firebase/auth';
import { db } from '../Firebase/firebase';
import { useEffect, useState } from 'react';


const ProfileSidebar= () => {
  const [userSubsDetail,setUserSubDetail]=useState([])
  const [requestSentCount, setRequestSentCount] = useState(0);
  //FetchUserSub data
  const fetchUserSubsData = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if(user){
      const userSubsQuery =  query(
        collection(db, "UserSubs"), 
        where("userId", "==", user.uid)
      );
      const receivedSnapshot = await getDocs(userSubsQuery);
      if(receivedSnapshot){
        const userSubsDetail =  receivedSnapshot.docs.map((doc) =>
          doc.data()
        );
        setUserSubDetail(userSubsDetail)

      }
      
      
     
    }
   
    
  };

  // Fetch Request Sent Count
  const fetchRequestSentCount = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
      const sentQuery =  query(
        collection(db, "ConnectionReq"), 
        where("fromUserId", "==", user.uid)
      );
      const sentSnapshot = await getDocs(sentQuery);
      setRequestSentCount(sentSnapshot.size); // Set count of sent requests
    }

    
    
  };

  useEffect(()=>{
    fetchUserSubsData()
    fetchRequestSentCount()

  },[db])
  return (
    <div className="sidebar-container">
      
      <aside className="profile-sidebar1">
        <div className="profile">
          <img  alt="profile" className="profile-pic" />
          <h3></h3>
          <p>{userSubsDetail[0]?.credits} Available Requests | {requestSentCount} Sent Requests</p>
          <button>Edit Profile</button>
        </div>

      </aside>
    </div>
  );
};

export default ProfileSidebar;
