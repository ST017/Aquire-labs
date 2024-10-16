import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProjectsSection from "./ProjectsSection";
import ProfileSidebar from "./ProfileSidebar";
import "./Dashboard.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FilterProvider } from "./FilterContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
 
const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
 
 
  useEffect(() => {
    const auth = getAuth();
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        await user.reload(); // Reload user to get the latest email verification status
        if (user.emailVerified) {
          // If email is verified, update Firestore
          const userDocRef = doc(db, "User", user.uid);
          await updateDoc(userDocRef, {
            verified: true,
          });
         
        }
      }
      setLoading(false); // Stop loading state whether user is present or not
    });
    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);
 
  if (loading) {
    return <div>Loading...</div>; // Display a loading state or spinner
  }
 
  document.body.style.background = "rgba(234, 239, 255, 1)";

  return (<div className="dashboard-container">
    <FilterProvider>
    <div className="dashborad-navbar"><Navbar /></div>
      <div className="main-content">
       <div className="dashborad-sidebar"> <Sidebar /></div>
        <div  className="dashboard-prjct-section"><ProjectsSection/></div>
        <div className="dashboard-profile">{currentUser && <ProfileSidebar User={currentUser} />}</div> {/* Render only if user is available */}
      </div>
    
    </FilterProvider>
    </div>
  );
};

export default Dashboard;
