import styled from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

// Navbar styles
export const Navbar = styled.nav`
  width:1455px;
  height:116px;
  background-color: rgba(234, 239, 255, 1);
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width:122px;
  height:49px;
  margin-left:20px;
  
`;

export const NavLinksCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 20px;
  left:488.5px;
  margin-right:222px;
  
`;

export const NavLinksRight = styled.div`
  display: flex;
  gap: 16px;
  
`;

export const NavButton = styled.button`
  width: 92px;
  height: 39px;
  border-radius: 6px;
  border: 1px solid blue; /* Set the border to blue */
  background-color: transparent; /* Optional: to ensure it's transparent unless hovered */
  
  &:hover {
    background-color: rgba(0, 60, 255, 1); /* Set the hover background color */
    color: white; /* Optional: Set text color on hover */
  }
`;


export const NavLink = styled.a`
 
  width:44px;
  height:19px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  font-family:Inter;
  color:rgba(0, 60, 255, 1);

  &:hover {
    color: white;
  }
`;

export const NavLink1 = styled.a`
  font-size: 16px;
  font-weight: 700;
  font-family:Inter;
  color:rgba(0, 0, 0, 1);
  text-decoration: none;
  

  
`;






// Hero section
export const HeroSection = styled.section`
  background-color: rgba(234, 239, 255, 1);
  width:1487px;
  height:470px;
  text-align: center;
  padding: 80px 16px;
  
  
`;

export const HeroTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 16px;
  font-family:Inter;
  color:rgba(0, 0, 0, 1);
`;

export const HeroSubtitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: rgba(180, 180, 180, 1);
  margin-left:5px;
  margin-bottom: 24px;
 font-family:Inter;
 line-height:50.83px;
`;

export const HeroSubtitle1 = styled.h2`
  
  font-size: 24px;
  font-weight: 500;
  color: rgba(180, 180, 180, 1);
  margin-left:-35px;
  margin-bottom: 24px;
  margin-top:-35px;
 font-family:Inter;
 line-height:32px;
`;

export const GetStartedButton = styled.button`
  width:165px;
  height:54px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight:700;
  font-family: Inter, sans-serif;
  
  background-color:rgba(55, 66, 250, 1);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-left:-38px;
  margin-top:20px;

  &:hover {
    background-color:rgba(55, 66, 250, 1);
  }
`;

// Vision section
export const VisionSection = styled.section`
  background-color: rgba(234, 239, 255, 1);
  padding: 40px 16px;
  text-align: center;
`;

export const VisionText = styled.p`
  font-size: 16px;
  color: #6b7280;
`;

// Partner logos
export const PartnerLogos = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Align items to the start of the container */
  width: 1440px; /* Fixed width */
  height:230px;
  gap: 0px; /* No gap between images */
  margin: 32px 0;
  margin-left:0px;
  

  img {
    width: 103.66px;
    height: 106.33px;
    margin: 20px; /* No margin if using gap */
    opacity: 1; /* Make sure images are visible */
  }
`;

// How It Works section
export const HowItWorksSection = styled.section`
  
  padding: 40px 16px;
  text-align: center;
`;

export const StepTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export const StepCard = styled.div`
  background-color: #1d4ed8;
  padding: 24px;
  border-radius: 8px;
  width: 240px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepIcon = styled.div`
  font-size: 40px;
  margin-bottom: 16px;
`;

export const StepDescription = styled.p`
  font-size: 16px;
  color: white;
`;
// Key Features section
export const KeyFeaturesSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 16px;
  background-color: #f9fafb;
`;

export const FeaturesText = styled.div`
  width: 50%;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FeatureItem = styled.li`
  font-size: 18px;
  color: #374151;
  margin: 16px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '✔'; /* Can replace with an icon */
    color: #10b981;
    margin-right: 8px;
  }
`;

export const FeatureImage = styled.img`
  width: 40%;
  border-radius: 8px;
`;

// Why Use section
export const WhyUseSection = styled.section`
  text-align: center;
  padding: 40px 16px;
  background-color: #ffffff;
`;

export const WhyUseTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #111827;
`;

export const WhyUseContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
  flex-wrap: wrap;
`;

export const WhyUseCard = styled.div`
  background-color: #f9fafb;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  width: 240px;
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const WhyUseIcon = styled.div`
  font-size: 30px;
  margin-bottom: 16px;
  color: #3b82f6;  /* Use this color to match the blue color scheme */
`;

export const WhyUseDescription = styled.div`
  font-size: 16px;
  color: #111827;
`;

export const WhyUseSubtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-top: 8px;
`;


// Footer
export const Footer = styled.footer`
  background-color: #f9fafb;
  padding: 40px 16px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const FooterLink = styled.a`
  color: #4b5563;
  text-decoration: none;

  &:hover {
    color: #1f2937;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialIcon = styled.a`
  color: #4b5563;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #1f2937;
  }
`;
