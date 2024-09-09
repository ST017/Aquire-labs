import React from 'react';
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
  StepIcon,
  StepDescription,
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
  HeroSubtitle1
} from './Home.style.js';
import logo from "../Images/Logo.png"

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar>
        <Logo src={logo} alt='logo'/>
        <NavLinksCenter>
          <NavLink1 href="#">Home</NavLink1>
          <NavLink1 href="#">About</NavLink1>
          <NavLink1 href="#">Help</NavLink1>
        </NavLinksCenter>
        <NavLinksRight>
         <NavButton> <NavLink onClick={()=>window.open("/login","_blank")}>Login</NavLink></NavButton>
          <NavButton><NavLink onClick={()=>window.open("/signup","_blank")}>Signup</NavLink></NavButton>
        </NavLinksRight>
      </Navbar>

      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>One Platform, Infinite Partnership Opportunities</HeroTitle>
        <HeroSubtitle>
          Build powerful collaborations and expand your project's horizons through
        </HeroSubtitle>
        <HeroSubtitle1>
        strategic partnerships.
        </HeroSubtitle1>
        <GetStartedButton>Get started</GetStartedButton>
      </HeroSection>

      {/* Partner Logos */}
      <PartnerLogos>
        
     {/*  {[...Array(20)].map((_, index) => (
        <img key={index} src={logo} alt={`Logo ${index + 1}`} />
      ))} */}
        
      </PartnerLogos>

      {/* Vision Section */}
      <VisionSection>
        <VisionText>
          At GoWeb3 Network, we simplify the process of finding and connecting with the perfect partners for your project.
          Whether you're looking to collaborate on technical developments, marketing campaigns, or innovative DeFi solutions, 
          our platform provides the tools you need to forge strong partnerships and drive success.
        </VisionText>
      </VisionSection>

      {/* How It Works Section */}
      <HowItWorksSection>
        <StepTitle>How GoWeb3 Network Works</StepTitle>
        <StepContainer>
          <StepCard>
            <StepIcon>🔍</StepIcon>
            <StepDescription>Step 1: Discover Potential Partners</StepDescription>
          </StepCard>
          <StepCard>
            <StepIcon>📧</StepIcon>
            <StepDescription>Step 2: Send Partnership Request</StepDescription>
          </StepCard>
          <StepCard>
            <StepIcon>📊</StepIcon>
            <StepDescription>Step 3: Manage Requests</StepDescription>
          </StepCard>
          <StepCard>
            <StepIcon>🤝</StepIcon>
            <StepDescription>Step 4: Collaborate Effortlessly</StepDescription>
          </StepCard>
        </StepContainer>
      </HowItWorksSection>

      <KeyFeaturesSection>
        <FeaturesText>
          <h2>Key Features</h2>
          <p>
            At GoWeb3 Network, we simplify the process of finding and connecting with the perfect partners for your project.
            Whether you're looking to collaborate on technical developments, marketing, or innovative DeFi solutions, we got you covered.
          </p>
          <FeatureList>
            <FeatureItem>Advanced Search & Filters</FeatureItem>
            <FeatureItem>Partnership Request Hub</FeatureItem>
            <FeatureItem>Instant Collaboration</FeatureItem>
            <FeatureItem>Comprehensive Dashboard</FeatureItem>
          </FeatureList>
        </FeaturesText>
        <FeatureImage src="https://via.placeholder.com/400" alt="Features Image" />
      </KeyFeaturesSection>

      {/* Why Should You Use GoWeb3 Network */}
      <WhyUseSection>
        <WhyUseTitle>Why Should You Use GoWeb3 Network?</WhyUseTitle>
        <WhyUseContainer>
          <WhyUseCard>
            <WhyUseIcon>🤝</WhyUseIcon>
            <WhyUseDescription>Streamlined Collaboration</WhyUseDescription>
            <WhyUseSubtitle>
              Simplify connecting with potential partners and enhance your overall collaboration efforts.
            </WhyUseSubtitle>
          </WhyUseCard>
          <WhyUseCard>
            <WhyUseIcon>🔍</WhyUseIcon>
            <WhyUseDescription>Precision Matching</WhyUseDescription>
            <WhyUseSubtitle>
              Use advanced search and filtering to discover projects that perfectly match your specific requirements.
            </WhyUseSubtitle>
          </WhyUseCard>
          <WhyUseCard>
            <WhyUseIcon>💬</WhyUseIcon>
            <WhyUseDescription>Enhanced Communication</WhyUseDescription>
            <WhyUseSubtitle>
              Transition smoothly from interest to collaboration with automated group creation on Telegram.
            </WhyUseSubtitle>
          </WhyUseCard>
          <WhyUseCard>
            <WhyUseIcon>📞</WhyUseIcon>
            <WhyUseDescription>Dedicated Support</WhyUseDescription>
            <WhyUseSubtitle>
              Access personalized consultation services to uncover and leverage the best partnership opportunities for your project.
            </WhyUseSubtitle>
          </WhyUseCard>
        </WhyUseContainer>
      </WhyUseSection>

      {/* Footer */}
      <Footer>
        <FooterText>
          GoWeb3 Network - We simplify the process of finding and connecting with the perfect partners for your project.
        </FooterText>
        <SocialLinks>
          <SocialIcon href="#">LinkedIn</SocialIcon>
          <SocialIcon href="#">Twitter</SocialIcon>
          <SocialIcon href="#">Discord</SocialIcon>
          <SocialIcon href="#">Telegram</SocialIcon>
        </SocialLinks>
        <FooterLinks>
          <FooterLink href="#">Company</FooterLink>
          <FooterLink href="#">Branding</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Help</FooterLink>
        </FooterLinks>
      </Footer>
    </div>
  );
};

export default Home;

