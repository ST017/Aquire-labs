import React from 'react'
import "./About.css";
import Footer from '../Components/Dashboard/Footer';
import MainNavbar from './MainNavbar';

import flower from '../Images/Flower.png'
import profile from '../Images/aboutprofilephoto.png';
import linked from '../Images/aboutlink.png'
import twitter from '../Images/abouttwitter.png'

// import Team from './Request/Team';
const About = () => {

  return (

    <div className='about-container'>
    
    
    
   <div className='about-Navbar'> <MainNavbar/></div>
   
   <div className='flower-with-text'>
   <div className="content">
    <div  className='text-lin3'> We Do The</div>
    <div className='bold-text'>Groundwork,</div>
    <div className='text-lin3'>
    So You Can <strong className='bold-text'>Build</strong> The <br /> Future.
</div>


  </div>
  {/* <img src={flower} alt="flower" class="flower-image-0" />
<img src={flower} alt="flower" class="flower-image-1" />
<img src={flower} alt="flower" class="flower-image-2" />
<img src={flower} alt="flower" class="flower-image-3" />
<img src={flower} alt="flower" class="flower-image-4" />
<img src={flower} alt="flower" class="flower-image-5" /> */}
  </div>
  


    
    
  <div className="about-text-container">
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


  <div class="team-section">
    <h2 class="team-title">
      Our <span class="highlighted-text">Team</span>
    </h2>
    <div class="team-grid">
    
      <div class="team-card">
        <div className='team-card-container'>

        <img src={profile} alt="Zane Sorell" class="team-image" />
        <div className='name-sub-link'>
          <div className='name-sub'>
        <h3 className='team-member-name'>Zane Sorell</h3>
        <p class="team-subtitle">CEO</p>
        </div>
        <div class="social-icons">
          <a href="#" class="social-link">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" class="social-link">
            <img src={linked} alt="LinkedIn" />
          </a>
        </div>
        </div>
        </div>
      </div>


      <div class="team-card">
        <div className='team-card-container'>

        <img src={profile} alt="Zane Sorell" class="team-image" />
        <div className='name-sub-link'>
          <div className='name-sub'>
        <h3 className='team-member-name'>Zane Sorell</h3>
        <p class="team-subtitle">CEO</p>
        </div>
        <div class="social-icons">
          <a href="#" class="social-link">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" class="social-link">
            <img src={linked} alt="LinkedIn" />
          </a>
        </div>
        </div>
        </div>
      </div>


      <div class="team-card">
        <div className='team-card-container'>

        <img src={profile} alt="Zane Sorell" class="team-image" />
        <div className='name-sub-link'>
          <div className='name-sub'>
        <h3 className='team-member-name'>Zane Sorell</h3>
        <p class="team-subtitle">CEO</p>
        </div>
        <div class="social-icons">
          <a href="#" class="social-link">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" class="social-link">
            <img src={linked} alt="LinkedIn" />
          </a>
        </div>
        </div>
        </div>
      </div>


      <div class="team-card">
        <div className='team-card-container'>

        <img src={profile} alt="Zane Sorell" class="team-image" />
        <div className='name-sub-link'>
          <div className='name-sub'>
        <h3 className='team-member-name'>Zane Sorell</h3>
        <p class="team-subtitle">CEO</p>
        </div>
        <div class="social-icons">
          <a href="#" class="social-link">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" class="social-link">
            <img src={linked} alt="LinkedIn" />
          </a>
        </div>
        </div>
        </div>
      </div>


      <div class="team-card">
        <div className='team-card-container'>

        <img src={profile} alt="Zane Sorell" class="team-image" />
        <div className='name-sub-link'>
          <div className='name-sub'>
        <h3 className='team-member-name'>Zane Sorell</h3>
        <p class="team-subtitle">CEO</p>
        </div>
        <div class="social-icons">
          <a href="#" class="social-link">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" class="social-link">
            <img src={linked} alt="LinkedIn" />
          </a>
        </div>
        </div>
        </div>
      </div>


      <div class="team-card">
        <div className='team-card-container'>

        <img src={profile} alt="Zane Sorell" class="team-image" />
        <div className='name-sub-link'>
          <div className='name-sub'>
        <h3 className='team-member-name'>Zane Sorell</h3>
        <p class="team-subtitle">CEO</p>
        </div>
        <div class="social-icons">
          <a href="#" class="social-link">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" class="social-link">
            <img src={linked} alt="LinkedIn" />
          </a>
        </div>
        </div>
        </div>
      </div>


      <div class="team-card">
        <div className='team-card-container'>

        <img src={profile} alt="Zane Sorell" class="team-image" />
        <div className='name-sub-link'>
          <div className='name-sub'>
        <h3 className='team-member-name'>Zane Sorell</h3>
        <p class="team-subtitle">CEO</p>
        </div>
        <div class="social-icons">
          <a href="#" class="social-link">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" class="social-link">
            <img src={linked} alt="LinkedIn" />
          </a>
        </div>
        </div>
        </div>
      </div>

      <div class="team-card">
        <div className='team-card-container'>

        <img src={profile} alt="Zane Sorell" class="team-image" />
        <div className='name-sub-link'>
          <div className='name-sub'>
        <h3 className='team-member-name'>Zane Sorell</h3>
        <p class="team-subtitle">CEO</p>
        </div>
        <div class="social-icons">
          <a href="#" class="social-link">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" class="social-link">
            <img src={linked} alt="LinkedIn" />
          </a>
        </div>
        </div>
        </div>
      </div>


      <div class="team-card">
        <div className='team-card-container'>

        <img src={profile} alt="Zane Sorell" class="team-image" />
        <div className='name-sub-link'>
          <div className='name-sub'>
        <h3 className='team-member-name'>Zane Sorell</h3>
        <p class="team-subtitle">CEO</p>
        </div>
        <div class="social-icons">
          <a href="#" class="social-link">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" class="social-link">
            <img src={linked} alt="LinkedIn" />
          </a>
        </div>
        </div>
        </div>
      </div>



      <div class="team-card">
        <div className='team-card-container'>

        <img src={profile} alt="Zane Sorell" class="team-image" />
        <div className='name-sub-link'>
          <div className='name-sub'>
        <h3 className='team-member-name'>Zane Sorell</h3>
        <p class="team-subtitle">CEO</p>
        </div>
        <div class="social-icons">
          <a href="#" class="social-link">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" class="social-link">
            <img src={linked} alt="LinkedIn" />
          </a>
        </div>
        </div>
        </div>
      </div>




      

      
      

      
    </div>
  </div>
  </div>

  <Footer/>
 </div>
  )
}

export default About