import React, { useState } from "react";
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
import logo from "../Images/Logo.png";
 
import logo1 from "../Images/1.png";
import logo2 from "../Images/2.png";
import logo3 from "../Images/3.png";
import logo4 from "../Images/4.png";
import logo5 from "../Images/5.png";
import logo6 from "../Images/6.png";
import logo7 from "../Images/7.png";
import logo8 from "../Images/8.png";
import logo9 from "../Images/9.png";
import logo10 from "../Images/10.png";
import logo11 from "../Images/11.png";
import logo12 from "../Images/12.png";
import logo13 from "../Images/13.png";
import logo14 from "../Images/14.png";
import logo15 from "../Images/15.png";
import logo16 from "../Images/16.png";
import logo17 from "../Images/17.png";
import logo18 from "../Images/18.png";
import logo19 from "../Images/19.png";
import logo20 from "../Images/20.png";
import logo21 from "../Images/21.png";
import logo22 from "../Images/22.png";
import logo23 from "../Images/23.png";
import Cardlogo1 from "../Images/Cardlogi1.png";
import Cardlogo2 from "../Images/Cardlogo2.png";
import Cardlogo3 from "../Images/Cardlogo3.png";
import Cardlogo4 from "../Images/Cardlogo4.png";
import Why1 from "../Images/Why1.png"
import Why2 from "../Images/Why2.png"
import Why3 from "../Images/Why3.png"
import Why4 from "../Images/Why4.png"
import Photo from "../Images/Photo.jpeg"
import Feature1 from "../Images/Feature1.png"
import Feature2 from "../Images/Feature2.png"
import Feature3 from "../Images/Feature3.png"
import Feature4 from "../Images/Feature4.png"
import AccordianIcon from  "../Images/AccordianIcon.png"
import LinkedIn from "../Images/LinkedIn.jpeg"
import Xicon from "../Images/Xicon.jpeg"
import Discord from "../Images/Discord.png"
import Telegram from "../Images/Telegram.jpeg"
import RaisaLogo from "../Images/RaisaLogo.png"
 
const Home = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);
 
  const features = [
    {
      title: 'Advanced Search & Filters',
      icon: Feature1,
      description:"Utilize intelligent search tools and detailed filters to quickly find the right partners and projects that align with your needs."
    },
    {
      title: 'Partnership Request Hub',
      icon: Feature2,
      description:"Streamline the process of sending, receiving, and tracking partnership requests efficiently"
    },
    {
      title: 'Instant Collaboration',
      icon: Feature3,
      description:"Save time with automatic setup of Telegram groups for seamless communication and collaboration."
    },
    {
      title: 'Comprehensive Dashboard',
      icon: Feature4,
      description:"Save time with automatic setup of Telegram groups for seamless communication and collaboration."
    },
  ]
 
  const toggleFeature = (index) => {
    if (expandedFeature === index) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(index);
    }
  };
  const ImageList1 = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];
  const ImageList2 = [
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
  ];
 
 
 
 
  return (
    <WrapperDiv>
      {/* Navbar */}
      <Navbar>
        <Logo src={RaisaLogo} alt="logo" />
        <NavLinksCenter>
          <NavLink1 href="#">Home</NavLink1>
          <NavLink1 href="#">About</NavLink1>
          <NavLink1 href="#">Help</NavLink1>
        </NavLinksCenter>
        <NavLinksRight>
          <NavButton className="login">
           
            <NavLink className="login-lnk" onClick={() => window.open("/login", "_blank")}>
              Login
            </NavLink>
          </NavButton>
          <NavButton  className="signup" >
            <NavLink  className="signup-lnk" onClick={() => window.open("/signup", "_blank")}>
              Signup
            </NavLink>
          </NavButton>
        </NavLinksRight>
      </Navbar>
 
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>One Platform, Infinite Partnership Opportunities</HeroTitle>
        <HeroSubtitle>
          Build powerful collaborations and expand your project's horizons through
        </HeroSubtitle>
        <HeroSubtitle1>strategic partnerships.</HeroSubtitle1>
        <GetStartedButton onClick={()=>window.open("/signup","_blank")}>Get started</GetStartedButton>
      </HeroSection>
 
      {/* Partner Logos */}
      <PartnerLogos>
        <div className="logos-track first-row">
          {ImageList1.map((ele, index) => (
            <img key={ele} src={ele} alt={`Logo ${index + 1}`} />
          ))}
          {ImageList1.map((ele, index) => (
            <img key={ele} src={ele} alt={`Logo ${index + 1}`} />
          ))}
         
        </div>
        <div className="logos-track second-row">
          {ImageList2.map((ele, index) => (
            <img key={ele} src={ele} alt={`Logo ${index + 1}`} />
          ))}
          {ImageList2.map((ele, index) => (
            <img key={ele} src={ele} alt={`Logo ${index + 1}`} />
          ))}
         
        </div>
      </PartnerLogos>
 
      {/* Vision Section */}
      <VisionSection>
        <VisionTitle>Our Vision</VisionTitle>
        <VisionText>
          At GoWeb3 Network, we simplify the process of finding and connecting
          with the perfect partners for your project.Whether you're looking to
          collaborate on technical developments, marketing,
          campaigns, or innovative DeFi solutions,our platform provides the
          tools you need to forge strong
          partnerships and drive success.
        </VisionText>
      </VisionSection>
 
      {/* How It Works Section */}
      <HowItWorksSection>
        <StepTitle>How Raisa Network Works</StepTitle>
        <StepContainer>
          <StepCard>
            <StepIcon1>
              <img src={Cardlogo1} alt="card-logo" />
            </StepIcon1>
            <StepNumber>Step 1:</StepNumber>
            <StepHeading>Discover Potential Partners</StepHeading>
            <StepDescription1>
              Utilize our advanced search and filter tools to find projects that
              fit your goals. Customize filters by category, interests,
              location, size, and blockchain platforms.
            </StepDescription1>
          </StepCard>
          <StepCard>
            <StepIcon2>
              <img src={Cardlogo2} alt="card-logo" />
            </StepIcon2>
            <StepNumber>Step 2:</StepNumber>
            <StepHeading>Send Partenership Request</StepHeading>
            <StepDescription2>
              Connect with Potential partners by sending customizes partnership
              requests. Clearly state your Collaboration interest to initiate
              meaningful conversations.
            </StepDescription2>
          </StepCard>
          <StepCard>
            <StepIcon1>
              <img src={Cardlogo3} alt="card-logo" />
            </StepIcon1>
            <StepNumber>Step 3: </StepNumber>
            <StepHeading>
              Manage
              <br />
              Requests
            </StepHeading>
            <StepDescription3>
              Track all your partnership requests- Sent, Receive, & Pending
              through an intuitive dashboard. Approve or decline requests &
              request additional information if needed.
            </StepDescription3>
          </StepCard>
          <StepCard>
            <StepIcon1>
              <img src={Cardlogo4} alt="card-logo" />
            </StepIcon1>
            <StepNumber>Step 4:</StepNumber>
            <StepHeading>
              Collaborate
              <br />
              Effortlessly
            </StepHeading>
            <StepDescription4>
              Once a partner is confirmed, Our team will help your coordinate
              with your partner using your preferred Communication channels,
              ensuring smooth collaborations.
            </StepDescription4>
          </StepCard>
        </StepContainer>
      </HowItWorksSection>
      {/* KeyFeatures Section */}
      <KeyFeaturesSection>
        <FeaturesText>
          <FeaturesHeading>Key Features</FeaturesHeading>
          <FeaturesDescription>
            At GoWeb3 Network, we simplify the process of finding and connecting
            with the perfect partners for your project. Whether you're looking
            to collaborate on technical developments, marketing, or innovative
            DeFi solutions, we got you covered.
          </FeaturesDescription>
          <FeatureList>
          {features.map((feature, index) => (
    <FeatureItem key={index} onClick={() => toggleFeature(index)}>
      <img src={feature.icon} alt={`Icon for ${feature.title}`} />
      {feature.title}
      <img
        src={AccordianIcon}
        alt="Accordion icon"
        className={`accordion-icon ${expandedFeature === index ? 'expanded' : ''}`}
      />
      {expandedFeature === index && (
        <FeatureContent>
          <p>{feature.description}</p>
        </FeatureContent>
      )}
    </FeatureItem>
  ))}
    </FeatureList>
        </FeaturesText>
        <FeatureImage
          src={Photo}
          alt="Features Image"
        />
      </KeyFeaturesSection>
 
      {/* Why Should You Use GoWeb3 Network */}
      <WhyUseSection>
        <WhyUseTitle>Why Should You Use GoWeb3 Network?</WhyUseTitle>
        <WhyUseContainer>
          <WhyUseCard>
            <WhyUseIcon><img src={Why1} alt="why-logo"/></WhyUseIcon>
            <WhyUseDescription>Streamlined Collaboration</WhyUseDescription>
            <WhyUseSubtitle>
              Simplify connecting with potential partners and enhance your
              overall collaboration efforts.
            </WhyUseSubtitle>
          </WhyUseCard>
          <WhyUseCard>
            <WhyUseIcon><img src={Why2} alt="why-logo"/></WhyUseIcon>
            <WhyUseDescription>Precision Matching</WhyUseDescription>
            <WhyUseSubtitle>
              Use advanced search and filtering to discover projects that
              perfectly match your specific requirements.
            </WhyUseSubtitle>
          </WhyUseCard>
          <WhyUseCard>
            <WhyUseIcon><img src={Why3} alt="why-logo"/></WhyUseIcon>
            <WhyUseDescription>Enhanced Communication</WhyUseDescription>
            <WhyUseSubtitle>
              Transition smoothly from interest to collaboration with automated
              group creation on Telegram.
            </WhyUseSubtitle>
          </WhyUseCard>
          <WhyUseCard>
            <WhyUseIcon><img src={Why4} alt="why-logo"/></WhyUseIcon>
            <WhyUseDescription>Dedicated Support</WhyUseDescription>
            <WhyUseSubtitle>
              Access personalized consultation services to uncover and leverage
              the best partnership opportunities for your project.
            </WhyUseSubtitle>
          </WhyUseCard>
        </WhyUseContainer>
      </WhyUseSection>
 
      {/* Footer */}
      <Footer>
        <FooterWrapper>
        <FooterHead>GoWeb3 Network</FooterHead>
      <FooterText>
        We simplify the process of finding and connecting with
        the perfect partners for your project.
      </FooterText>
      </FooterWrapper>
 
      <FooterSections>
        <SocialLinks>
          <FooterColumn1>
            <FooterLink>Social</FooterLink>
            <SocialIcon>
              <img src={LinkedIn} alt="LinkedIn" /> LinkedIn
            </SocialIcon>
            <SocialIcon >
              <img src={Xicon} alt="Twitter" /> Twitter
            </SocialIcon>
            <SocialIcon>
              <img src={Discord} alt="Discord" /> Discord
            </SocialIcon>
            <SocialIcon >
              <img src={Telegram} alt="Telegram" /> Telegram
            </SocialIcon>
          </FooterColumn1>
        </SocialLinks>
 
        <FooterLinks>
          <FooterColumn2>
            <FooterLink1>Company</FooterLink1>
            <SocialIcon>Branding</SocialIcon>
            <SocialIcon>About Us</SocialIcon>
            <SocialIcon>News</SocialIcon>
          </FooterColumn2>
 
          <FooterColumn3>
            <FooterLink>Help</FooterLink>
          </FooterColumn3>
        </FooterLinks>
      </FooterSections>
    </Footer>
    </WrapperDiv>
  );
};
 
export default Home;
 