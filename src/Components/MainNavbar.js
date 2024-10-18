import React from 'react';
import './MainNavbar.css';
import Raisalogo from './../Images/RaisaLogo.png'
import {
    Navbar,
    Logo,
    NavLink,
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    GetStartedButton,
    VisionSection,
    VisionText,
    PartnerLogos,
    HowItWorksSection,
    StepTitle,
    StepContainer,
    StepCard,
    KeyFeaturesSection,
    FeaturesText,
    FeatureList,
    FeatureItem,
    FeatureImage,
    WhyUseSection,
    WhyUseTitle,
    WhyUseContainer,
    WhyUseCard,
    WhyUseIcon,
    WhyUseDescription,
    Footer,
    FooterText,
    FooterLinks,
    FooterLink,
    SocialLinks,
    SocialIcon,
    WhyUseSubtitle,
    NavLinksCenter,
    NavLinksRight,
    NavLink1,
    NavButton,
    HeroSubtitle1,
    VisionTitle,
    StepIcon1,
    StepIcon2,
    StepIcon3,
    StepIcon4,
    StepHeading,
    StepNumber,
    StepDescription1,
    StepDescription2,
    StepDescription4,
    StepDescription3,
    FeaturesHeading,
    FeaturesDescription,
    FooterSections,
    FooterColumn1,
    FooterColumn2,
    FooterColumn3,
    FooterHead,
    FooterWrapper,
    FooterLink1,
    WrapperDiv,
    FeatureContent,
   
   
  } from "./Home.style.js";
import { Link } from 'react-router-dom';
const MainNavbar = () => {
    document.body.style.background="rgba(234, 239, 255, 1)"
  return (
    <div className="mainnavbar">
      <div className="logo">
        <img className="raisa-logo-img" src={Raisalogo} alt="raisa"/>
      </div>
      <div className='mainnav-frame2'>
        <div className='mainnav-links'>
      <ul className="nav-links">
        <li className='nav-links-li'><Link to="/">Home</Link></li>
        <li className='nav-links-li'><Link to="/about">About</Link></li>
        <li className='nav-links-li'><Link to="/faq">Help</Link></li>
      </ul>
      </div>
      <div  className='mainnav-buttons'>
          <div className="login">
           
            <button className="login-lnk" onClick={() => window.open("/login", "_blank")}>
              Login
            </button>
          </div>
          <div  className="signup" >
            <button  className="signup-lnk" onClick={() => window.open("/signup", "_blank")}>
              Signup
            </button>
          </div>
        </div>

        </div>
      
    </div>
  );
};
 
export default MainNavbar;