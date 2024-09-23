import { collection, getDocs, query, where } from 'firebase/firestore';
import './ProfileSidebar.css';
import { getAuth } from 'firebase/auth';
import { db } from '../Firebase/firebase';
import { useEffect, useState } from 'react';
import ProfileLine from "../../Images/ProfileLine.png";
import ShimmerUiProjectSlider from './ShimmerUiProjectSlider';


const ProfileSidebar = () => {
  const [userSubsDetail, setUserSubDetail] = useState([]);
  const [requestSentCount, setRequestSentCount] = useState(0);
  const [userProject, setUserProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Change initial state to null

  // Fetch all required data
  const fetchData = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) return;

    try {
      // Fetch User Data
      const userQuery = query(collection(db, "User"), where("id", "==", currentUser.uid));
      const userQuerySnapshot = await getDocs(userQuery);
      if (userQuerySnapshot.empty) {
        console.error("No user found");
        return;
      }
      const userDetail = userQuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUser(userDetail);

      // Fetch User Projects
      const userProjectQuery = query(collection(db, "UserProject"), where("userId", "==", currentUser.uid));
      const userProjectQuerySnapshot = await getDocs(userProjectQuery);
      const userProjects = userProjectQuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserProject(userProjects);

      // Fetch User Subscription Data
      const userSubsQuery = query(collection(db, "UserSubs"), where("userId", "==", currentUser.uid));
      const receivedSnapshot = await getDocs(userSubsQuery);
      const userSubsDetail = receivedSnapshot.docs.map((doc) => doc.data());
      setUserSubDetail(userSubsDetail);

      // Fetch Request Sent Count
      const sentQuery = query(collection(db, "ConnectionReq"), where("fromUserId", "==", currentUser.uid));
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
  }, []);

  if (loading) {
    return <ShimmerUiProjectSlider/>;
  }

  return (
    <div className="sidebar-container">
      <aside className="profile-sidebar1">
        <div className="profile">
          <img src="https://via.placeholder.com/100" alt="profile" className="profile-pic" /> 
          <div className="text-info">
            <h3>{user[0]?.firstname} {user[0]?.lastname || 'User'}</h3>
            <p>{userProject[0]?.website || 'No website available'}</p> 
          </div>
        </div>
        <div className="profile-line-container">
          <img src={ProfileLine} alt='profile-line' className="profile-line" />
        </div>
        <div className="request-info">
          <span><span className="dot"></span>{userSubsDetail[0]?.credits || 0} Available Requests</span>
          <span><span className="dot"></span>{requestSentCount} Sent Requests</span>
        </div>
        <button>Edit Profile</button>
      </aside>
    </div>
  );
};

export default ProfileSidebar;
