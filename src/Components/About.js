import React from 'react'
import "./About.css";
import Footer from '../Components/Dashboard/Footer';
import MainNavbar from './MainNavbar';
import flower from '../Images/Flower.png';
// import Team from './Request/Team';
const About = () => {

  return (
    <>
    
    <MainNavbar/>
    <div className="content">
    <h1  className='text-lin3'> We Do The</h1>
    <strong className='bold-text'>Groundwork,</strong>
    <h1 className='text-lin3'>
So You Can <strong className='bold-text'>Build</strong> The
<br />
Future.
</h1>

    
  </div>
    <div >
      
      
    <div className="layout-item item-1"><img src={flower} alt='flower'/></div>
    <div className="layout-item item-2"><img src={flower} alt='flower'/></div>
    <div className="layout-item item-3"><img src={flower} alt='flower'/></div>
    <div className="layout-item item-4"><img src={flower} alt='flower'/></div>
    <div className="layout-item item-5"><img src={flower} alt='flower'/></div>
    <div className="layout-item item-6"><img src={flower} alt='flower'/></div>
    
  
  </div>
  <section className="main-section">
    
    <p className="main-text">
      Our vision is simple: to make business development easy, so you can concentrate on what truly matters — growth.
      We take care of the outreach, follow-ups, and connections, removing the barriers between you and your next great opportunity.
    </p>
    <p className="main-text">
      Consider us your trusted partner, quietly working to open doors and connect you with the right people. 
      When it comes to growth, we believe the journey should be straightforward, efficient, and hassle-free.
    </p>
  </section>
<div className='team-contianer'>
  <div className='our-team'>our Team</div>
  <div className='card-row 1'>
    
  </div>
</div>

  <Footer/>
  </>
  )
}

export default About