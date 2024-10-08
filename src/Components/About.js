import React from 'react'
import "./About.css";
import Footer from './Footer';
import MainNavbar from './MainNavbar';
import Team from './Request/Team';
const About = () => {

  return (<>
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
     <Team/>
    <div>
     
      <Footer/>
    </div>
    </>
  )
}

export default About
