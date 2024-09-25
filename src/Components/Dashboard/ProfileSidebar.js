import { collection, getDocs, query, where } from 'firebase/firestore';
import './ProfileSidebar.css';
import { useEffect, useState } from 'react';
import ProfileLine from "../../Images/ProfileLine.png";
import ShimmerUiProjectSlider from './ShimmerUiProjectSlider';
import { db } from '../Firebase/firebase';
import EditProfile from './EditProfile'

const ProfileSidebar = ({ User }) => {
  const [userSubsDetail, setUserSubDetail] = useState([]);
  const [requestSentCount, setRequestSentCount] = useState(0);
  const [userProject, setUserProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDetail, setUserDetail] = useState(null); // Store user details separately
   const [isEditprofile, setIsEditProfile] = useState(false);


  
  // Fetch all required data
  const fetchData = async () => {
    if (!User) return;

    try {
      // Fetch User Data
      const userQuery = query(collection(db, "User"), where("id", "==", User.uid));
      const userQuerySnapshot = await getDocs(userQuery);
      if (userQuerySnapshot.empty) {
        console.error("No user found");
        return;
      }
      const userDetail = userQuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))[0]; // Get the first document
      setUserDetail(userDetail);

      // Fetch User Projects
      const userProjectQuery = query(collection(db, "UserProject"), where("userId", "==", User.uid));
      const userProjectQuerySnapshot = await getDocs(userProjectQuery);
      const userProjects = userProjectQuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserProject(userProjects);

      // Fetch User Subscription Data
      const userSubsQuery = query(collection(db, "UserSubs"), where("userId", "==", User.uid));
      const receivedSnapshot = await getDocs(userSubsQuery);
      const userSubsDetail = receivedSnapshot.docs.map((doc) => doc.data());
      setUserSubDetail(userSubsDetail);

      // Fetch Request Sent Count
      const sentQuery = query(collection(db, "ConnectionReq"), where("fromUserId", "==", User.uid));
      const sentSnapshot = await getDocs(sentQuery);
      setRequestSentCount(sentSnapshot.size);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [User,isEditprofile]); // Re-fetch data when User changes

  useEffect(() => {
    if (isEditprofile) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Re-enable scrolling when modal is closed
    }
    
    // Cleanup on unmount or when modal is closed
    // return () => {
    //   document.body.style.overflow = '';
    // };
  }, [isEditprofile]);

  if (loading) {
    return <ShimmerUiProjectSlider />;
  }

  return (
    <div className="sidebar-container">
      <div className="profile-sidebar1">
        <div className='profile-line-request'>
        <div className="profile">
          <img src={userDetail.profilePicture} alt="profile" className="profile-pic" />
          <div className="text-info">
            <div className="profile-Name">{userDetail?.firstname} {userDetail?.lastname}</div>
            <div className="profile-web">{userProject[0]?.website || 'No website available'}</div>
          </div>
        </div>
        
          <div className="profile-line"></div> 
        
        <div className="request-info">
          <span><span className="dot"></span>{userSubsDetail[0]?.credits || 0} Available Requests</span>
          <span><span className="dot"></span>{requestSentCount} Sent Requests</span>
        </div>
        </div>
        <div className='btn'>
        <button className='edit-btn' onClick={()=>{setIsEditProfile(true)}}>Edit Profile</button>
        {isEditprofile && (
  <div
    className="modal-container"
    style={{
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }}
   
  >
    <div className="edit-profile1">
      <EditProfile  setIsEditProfile={setIsEditProfile} />
    </div>
  </div>
)}
        </div>
      </div>
    </div>

    
    
  );
};

export default ProfileSidebar;
