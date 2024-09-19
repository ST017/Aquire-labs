import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ProjectsSection from './ProjectsSection'
import ProfileSidebar from './ProfileSidebar'
import "./Dashboard.css"


const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <div className="main-content">
        <Sidebar/>
        <ProjectsSection/>
        <ProfileSidebar/>
      </div>
    </div>
  )
}

export default Dashboard
