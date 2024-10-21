import { collection, getDocs, query, where } from 'firebase/firestore';
import './ProfileSidebar.css';
import { useEffect, useState } from 'react';
import ProfileLine from "../../Images/ProfileLine.png";
import ShimmerUiProjectSlider from './ShimmerUiProjectSlider';
import { db } from '../Firebase/firebase';
import EditProfile from './EditProfile'

const ProfileSidebar = ({ User }) => {
  const [userSubsDetail, setUserSubDetail] = useState([]);
  
  const [userProject, setUserProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDetail, setUserDetail] = useState(null); // Store user details separately
   const [isEditprofile, setIsEditProfile] = useState(false);
   const [requestSent, setRequestSent] = useState(0);
  const [requestReceived, setRequestReceived] = useState(0);

   const handleViewClick = (project) => {
    // Save project data to localStorage or sessionStorage
    localStorage.setItem('selectedProject', JSON.stringify(project));
    console.log("clicked")
    
    // Open the new page in a new tab
    window.open('/companydetails', '_blank');
  };
  
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

      /* // Fetch User Subscription Data
      const userSubsQuery = query(collection(db, "UserSubs"), where("userId", "==", User.uid));
      const receivedSnapshot = await getDocs(userSubsQuery);
      const userSubsDetail = receivedSnapshot.docs.map((doc) => doc.data());
      setUserSubDetail(userSubsDetail);

      // Fetch Request Sent Count
      const sentQuery = query(collection(db, "ConnectionReq"), where("fromUserId", "==", User.uid));
      const sentSnapshot = await getDocs(sentQuery);
      setRequestSentCount(sentSnapshot.size); */

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
  if (userProject[0]?.userId) {
    fetchUserConnectCounts(userProject[0].userId, setRequestSent, setRequestReceived);
  }
}, [userProject[0],db]);


  useEffect(() => {
    fetchData();
  }, [User,isEditprofile,db]); // Re-fetch data when User changes

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
      <div className="profile-line-request">
        <div className="profile">
          <img src={userDetail?.profilePicture} alt="profile" className="profile-pic" />
          <div className="text-info">
            <div className="profile-Name">{/* {userDetail?.firstname} {userDetail?.lastname} */} {userProject[0]?.name}</div>
            <div className="profile-web">{userProject[0]?.website || 'No website available'}</div>
          </div>
        </div>
        
        <div className="profile-line"></div> 
        
        <div className="request-info">
          <span className='req-info-li'><span className="dot"></span>{requestReceived} Available Requests</span>
          <span className='req-info-li'><span className="dot"></span>{requestSent} Sent Requests</span>
        </div>
      </div>
      <div className="btn">
        <button className="edit-btn" onClick={() => handleViewClick(userProject[0])}>View Profile</button>
      </div>
    </div>
  </div>
  

    
    
  );
};

export default ProfileSidebar;
