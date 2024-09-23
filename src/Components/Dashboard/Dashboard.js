import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProjectsSection from "./ProjectsSection";
import ProfileSidebar from "./ProfileSidebar";
import "./Dashboard.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
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

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <ProjectsSection />
        {currentUser && <ProfileSidebar User={currentUser} />} {/* Render only if user is available */}
      </div>
    </div>
  );
};

export default Dashboard;
