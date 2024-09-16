import styled from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

//Wrapper
export const WrapperDiv = styled.div`

  width: 100%; 
  
  height: 100%;
  // position: relative; 

  // margin: 0 auto; 
  @media (max-width:480px){
   overflow:hidden;
   width:100%
   height:auto;
   margin:auto;
  }
   
`;

// Navbar styles
export const Navbar = styled.nav`
 
  height:116px;
  background-color: rgba(234, 239, 255, 1);
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
   
   height:74px;
    width:100%;
    position: fixed;
    z-index:1;
    background-color:white;

 
    
    

  
  }
  
`;

export const Logo = styled.img`
  top:33px;
  left:80px
  width:122px;
  height:49px;
  // margin-left:20px;

  @media (max-width:480px){
    width: 63px;
    height: 25px;
    top: 20px;
    left: 22px;
   

  }
  
`;

export const NavLinksCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  //gap: 20px;
 // left:488.5px;
 // margin-right:222px;
  width: 231px;
height: 39px;
top: 38px;
left: 488.5px;
gap: 20px;
@media (max-width:480px){
display:none;
}


  
`;

export const NavLinksRight = styled.div`
  display: flex;
  
  width: 215px;
 height: 39px;
  top: 38px;
  left: 1145px;
  gap: 18px;

  


  
`;

export const NavButton = styled.button`
 // height: 39px;
  border-radius: 6px;
  border: 1px solid blue; /* Set the border to blue */
  background-color: transparent; /* Optional: to ensure it's transparent unless hovered */
  
  &:hover ,&:hover a{
    background-color: rgba(0, 60, 255, 1); /* Set the hover background color */
    color: white; /* Optional: Set text color on hover */
  }

  @media (max-width: 480px) {
  
   &.signup {
      display: none; /* Hide the signup button on screens smaller than 480px */
    }

   &.login {
     
      width: 68px;
      height: 28.83px;
      top: 23px;
      
      left:340px;
      gap: 7.39px;
      border-radius: 4.43px 4.43px 4.43px 4.43px;
      border: 0.74px 0.74px 0.74px 0.74px;
      opacity: 0px;
      
    
   }

    

    

  
  }

  
  
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

  @media (max-width:480px) {
    &.login-lnk {
     width: 33px;
     height: 15px;
      
    align:center;

    }

  }
   
`;

export const NavLink1 = styled.a`
width: 66px;
height: 39px;
padding: 10px 10px 10px 10px;
gap: 10px;


  font-size: 16px;
  font-weight: 700;
  font-family:Inter;

  color:rgba(0, 0, 0, 1);
  text-decoration: none;
  &:hover{
  color:rgba(0, 60, 255, 1);
  }
  

  
`;






// Hero section
export const HeroSection = styled.section`
  background-color: rgba(234, 239, 255, 1);
 
  height:470px;
  text-align: center;
  padding: 80px 16px;

  @media (max-width:480px){
   
     width:  100%;
     height: 235px;
     margin-top: 100px;
     
    

  }
  
  
`;

export const HeroTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 16px;
  font-family:Inter;
  color:rgba(0, 0, 0, 1);
  @media (max-width:480px){
    font-size: 22px;
  
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: rgba(180, 180, 180, 1);
  margin-left:5px;
  margin-bottom: 24px;
 font-family:Inter;
 line-height:50.83px;
 @media (max-width:480px){
    font-size: 12px;
    line-height:25px;
    margin:auto;
  
  }
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
 @media (max-width:480px){
    font-size: 12px;
   line-height:16px;
   margin:auto;
  }
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
  background: rgba(0, 60, 255, 1);

   
  }

  @media (max-width:480px){
  width:82px;
  height:27px;
  padding: 6px 12px;
  font-size: 9px;
    
  
  }
`;

// Vision section
export const VisionSection = styled.section`
  
  height:200px;
  background-color: rgba(234, 239, 255, 1);
  padding: 40px 16px;
  text-align: center;
  @media (max-width:480px) {
    height:200px;
    text-align: center;
    padding: 20px 8px ;
  }
`;

export const VisionTitle = styled.h2`
  
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 16px;
  color:rgba(0, 0, 0, 1);
  text-align: center;

  @media (max-width:480px){
    font-size:21px;
    margin-bottom: 8px;
    
  
  }
`;

export const VisionText = styled.p`
  
  height:128px;
  font-size: 24px;
  font-weight:500;
  color:rgba(0, 0, 0, 0.69);
  line-height: 32px; 
  margin-left:130px;

  @media (max-width:480px){
    font-size:12px;
    height:64px;
    line-height: 16px; 
    align-text:center;
    margin:auto;
  
  }
`;

// Partner logos
export const PartnerLogos = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  width: 100%;
  height: 350px; 
  overflow: hidden;
  position: relative;

  .logos-track {
    display: flex;
    animation: scroll 5s linear infinite; 
  }

  .first-row {
    animation: scroll 3s linear infinite;
    margin-bottom: 10px; 
  }

  // .second-row {
  //   animation: scroll 3s linear infinite; 
  // }
  .second-row {
  
   
  
  animation: scroll-right 3s linear infinite;
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%); /* Start position */
  }
  100% {
    transform: translateX(0%); /* End position, scroll to the right */
  }
}

  img {
    width: 103.66px;
    height: 106.33px;
    margin: 20px;
  }

 
  @keyframes scroll {
    0% {
      transform: translateX(0); 
    }
    100% {
      transform: translateX(-50%); 
    }
  }

  @media (max-width:480px){
    img {
     width:52px;
     height:53px;
   
   }
     height:175px;

  
  }

`;




// How It Works section
export const HowItWorksSection = styled.section`
  
  padding: 40px 16px;
  text-align: center;
`;

export const StepTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  font-family:Inter;
  margin-bottom: 24px;

  @media(max-width:480px){
    font-size: 21px;
    margin-bottom: 12px;
  }
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top:80px;
  @media(max-width:480px){
   gap: 12px;
   margin-top:40px;
   flex-wrap:wrap;
   
  }
`;

export const StepCard = styled.div`
  background-color: rgba(0, 60, 255, 1);
  padding: 24px;
  border-radius: 10.54px;
  width: 300px;
  height:401px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:9.07px;

  &:hover {
  background: rgba(0, 40, 170, 1);
  box-shadow: 1px 5px 22.2px 0px rgba(0, 40, 170, 1);
    border: 1px solid  rgba(0, 40, 170, 1))
  



  }

  @media(max-width:480px){
   padding: 12px;
  
  width: 150px;
  height:200.5px;
  
  
 
  
  
  gap:4.3px;
   
   
  }
`;

export const StepIcon1 = styled.div`
  
  width:92.8px;
  height:58.75px;
  font-size: 40px;
  margin-bottom: 16px;
  margin-top:30px;
  color:rgba(255, 255, 255, 1)
  align:center;
  @media (max-width:480px){
    width:46px;
    height:24px;
    font-size: 20px;
    margin-bottom: 8px;
    margin-top:15px;
    img{
      width:40px;
      height:40px;
    }

  }
`;
export const StepIcon2 = styled.div`
  width:92.75px;
  height:86.75px;
  color:rgba(255, 255, 255, 1)
  font-size: 40px;
  margin-bottom: -12px;
  margin-top:30px;
  
  margin-right:15px;
  @media (max-width:480px){
    width:46px;
    height:24px;
    font-size: 20px;
    margin-bottom: 8px;
    margin-top:15px;
    img{
      width:40px;
      height:40px;
    }

  }
`;
export const StepIcon3 = styled.div`
  width:75px;
  height:75px;
  font-size: 40px;
  margin-bottom: 18px;
   margin-left:-30px;
    margin-top:13px;
   color:rgba(255, 255, 255, 1)

   @media (max-width:480px){
    width:46px;
    height:24px;
    font-size: 20px;
    margin-bottom: 8px;
    margin-top:15px;
    img{
      width:40px;
      height:40px;
    }

  }
  
    
`;
export const StepIcon4 = styled.div`
  width:78.73px;
  height:78.76px;
  font-size: 40px;
  margin-bottom: 14px;
  margin-left:-22px;
   margin-top:13px;
  color:rgba(255, 255, 255, 1)
  @media (max-width:480px){
    width:46px;
    height:24px;
    font-size: 20px;
    margin-bottom: 8px;
    margin-top:15px;
    img{
      width:40px;
      height:40px;
    }

  }

`;

export const StepNumber= styled.p`
  font-family:Inter;
  align:center;
  font-size: 24px;
  font-weight:700;
  color: rgba(255, 255, 255, 1);
  @media (max-width:480px){
  
    font-size: 12px;
  }
`;

export const StepHeading=styled.p`
 
  width:250px;
  height:72px;
  align:center;
  font-size: 24px;
  font-weight:700;
  font-family:Inter;
  color: rgba(255, 255, 255, 1) ;
  margin-top:-10px;
   @media (max-width:480px){
  
   width:125px;
   height:36px;
    font-size: 12px;
  }


`;
export const StepDescription1=styled.p`
width:250px;
height:100px;
align:center;
font-size: 14px;
font-weight:500;
font-family:Inter;

color: rgba(255, 255, 255, 1);
margin-top:5px;
@media (max-width:480px){
  
   width:125px;
   height:50px;
    font-size: 7px;
    margin-top:2.5px;
  }







`;
export const StepDescription2=styled.p`
width:237px;
height:100px;
align:center;
font-size: 14px;
font-weight:500;
font-family:Inter;

color: rgba(255, 255, 255, 1);
margin-top:5px;

@media (max-width:480px){
  
   width:125px;
   height:50px;
    font-size: 7px;
    margin-top:2.5px;
  }



`;

export const StepDescription3=styled.p`
width:249px;
height:100px;
align:center;
font-size: 14px;
font-weight:500;
font-family:Inter;

color: rgba(255, 255, 255, 1);
margin-top:5px;

@media (max-width:480px){
  
   width:125px;
   height:50px;
    font-size: 7px;
    margin-top:2.5px;
  }


`;
export const StepDescription4=styled.p`
width:257px;
height:100px;
align:center;
font-size: 14px;
font-weight:500;
font-family:Inter;

color: rgba(255, 255, 255, 1);
margin-top:5px;
@media (max-width:480px){
  
   width:125px;
   height:50px;
    font-size: 7px;
    margin-top:2.5px;
  }



`;



// Key Features section
export const KeyFeaturesSection = styled.section`
  height:659px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 16px;
  background-color: rgba(234, 239, 255, 1);
  @media (max-width:480px){
  
   flex-direction:column;
   height:660px;
   padding: 20px 8px;
    
  }

`;

export const FeaturesText = styled.div`
  
  height:587px;
  gap:50px;
  @media(max-width:480px){
    height:290px;
    gap:25px;
  }

`;
export const FeaturesHeading=styled.h1`
  font-size: 42px;
  font-weight:700;
  @media (max-width:480px){
    font-size: 21px;
  }

`;

export const FeaturesDescription=styled.h2`
 
  height:128px;
  font-size: 24px;
  font-weight:500;
  font-family:Inter;
  line-height:32px;
  margin-bottom:80px;
  color:rgba(0, 0, 0, 0.6);
  @media(max-width:480px){
    font-size: 12px;
    height:64px;
    line-height:16px;
    margin-bottom:40px;


  }

`;


export const FeatureList = styled.ul`
  
  height: 326px;
  list-style: none;
  padding: 0;
  @media (max-width:480px){
    
    height:163px;
    


  }

`;

/* export const FeatureItem = styled.li`
  font-size: 20px;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 10px;
  margin-top: 38px; 
  &:hover  {
  color: rgba(0, 60, 255, 1);

  }
  
  img {
    width: 20px;
    height: 20px;
    margin-right: 36px;
  }

  .accordion-icon {
    position: absolute;
    right: 250px;
    width: 12px;
    height: 6px;
    border: 3px;
  }
`; */

export const FeatureItem = styled.li`
  font-size: 20px;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 10px;
  margin-top: 38px;
  cursor: pointer; 

  &:hover, &:hover img, &:hover .accordion-icon {
    color: rgba(0, 40, 170, 1); 
    
    img {
      filter: brightness(0) saturate(100%) invert(48%) sepia(95%) saturate(1125%) hue-rotate(170deg) brightness(100%) contrast(100%); /* Adjust image color to blue */
    }
    
    .accordion-icon {
      filter: brightness(0) saturate(100%) invert(48%) sepia(95%) saturate(1125%) hue-rotate(170deg) brightness(100%) contrast(100%); /* Adjust icon color to blue */
    }
  }

  img {
    width: 44px;
    height: 44px;
    margin-right: 36px;
  }

  .accordion-icon {
    position: absolute;
    right: 250px;
    width: 12px;
    height: 6px;
    border: 3px;
  }

  @media(max-width:480px){
    
    img{
    width: 22px;
    height: 22px;
    margin-right: 18px;
    }
    &.accordion-icon {
    position: absolute;
    right: 125px;
    width: 6px;
    height: 3px;
    border: 1.5px;
    }

     font-size: 10px;
     padding-right: 5px;
      margin-top: 19px;

  }
`;

export const FeatureImage = styled.img`
 
  
  height:556px;
  border-radius: 8px;
  @media (max-width:480px){
  
    height:277px;
  }
`;

// Why Use section
export const WhyUseSection = styled.section`
  text-align: center;
  padding: 40px 16px;
  background-color: #ffffff;
  @media (max-width:480px) {
   text-align: center;
    padding: 20px 8px;
  
  }
`;

export const WhyUseTitle = styled.h2`
  
  height:51px;
  font-size: 42px;
  font-weight: 700;
  font-family:Inter;
 
  margin-bottom:80px;
  margin-left:200px;
  margin-top:10px;
  color:rgba(0, 0, 0, 1);
  @media (max-width:480px) {
     height:25.5px;
     font-size: 21px;
     
     margin-bottom:40px;
      margin-left:100px;
      margin-top:5px;

    
  
  }
 
`;

export const WhyUseContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
  flex-wrap: wrap;
  align-items:center;
  @media (max-width:480px) {
    gap :8px
    flex-wrap:wrap;
  }


`;

export const WhyUseCard = styled.div`
  
  width:312px;
  height:278px;
  background-color: rgba(255, 255, 255, 1);
  padding: 24px;
  border:1px transparent;
  radius: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  //width: 240px;
  align-items: center;

  //hover 3 parts
 &:hover   {
   background:  #0028AA;
   border-radius: 16px;
   box-shadow: 1px 5px 22.2px 0px rgba(0, 40, 170, 1);
    border: 1px solid  rgba(0, 40, 170, 1))
   



    box-shadow: -1px 3px 23.6px 0px rgba(255, 255, 255, 1);

 
 
 
 

 
 
 }

&:hover div ,&:hover p{
  color:white;
  }

@media (max-width:480px) {

   width:155.1px;
  height:144px;
  padding: 12px;

}
  
`;

export const WhyUseIcon = styled.div`
  font-size: 30px;
  margin-bottom: 16px;
  align-items: center;
  
  @media (max-width:480px) {
     font-size: 15px;
    margin-bottom: 8px;
    img{
      width:20px;
      height:20px;
    }
  }
`;

export const WhyUseDescription = styled.p`
  width:264px;
  height:26px;
  font-size: 20px;
  font-weight:500;
  font-family:Inter;
  color: rgba(0, 0, 0, 1);
  margin-left:-10px;
 @media (max-width:480px) {
     width:132px;
      height:13px;
      font-size: 10px;
      margin-left:-5px;
  }

`;

export const WhyUseSubtitle = styled.p`
  width:264px;
  height:80px;
  font-size: 16.5px;
  font-weight:400;
  margin-top: 8px;
  margin-left:-10px;
  color:rgba(66, 82, 107, 1);
  @media (max-width:480px) {
     width:132px;
      height:40px;
      font-size: 8px;
     
  }
  
`;


// Footer
export const Footer = styled.footer`
  background-color: #000; 
  padding: 40px 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  color: white;
  @media (max-width:480px) {
    display:block;
    padding: 20px 8px;


  
  }
`;

export const FooterWrapper=styled.div`
display: flex;
flex-direction: column;

`


export const FooterHead=styled.p`
  font-size: 24px;
  font-weight:700;
  line-height:36px;
  color:rgba(255, 255, 255, 1);
  margin-top:40px;
  @media (max-width :480px) {
  
     font-size: 12px;
    
    line-height:18px;  
  
  }

`

export const FooterText = styled.p`
  width:407px;
  height:48px;
  font-size: 16px;
  font-weight:400;
  line-height:24px;
  color:rgba(255, 255, 255, 1);
  margin-top:-10px;
  @media (max-width :480px) {
  
    width:203.5px;
    height:24px;
    font-size: 8px;
  
  }
`;

export const FooterSections = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px; /* Total width for all sections */
  @media (max-width :480px) {
  
    width:300px;
    
  
  }

`;

export const FooterColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-left:140px;
  @media (max-width :480px) {
   margin-left:70px;
   gap: 8px;
 
    
  
  
  }
`;
export const FooterColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-right:50px;
  @media (max-width :480px) {
  
   gap: 8px;
   margin-right:25px;
 
    
  
  
  }
`;
export const FooterColumn3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-right:30px
  @media (max-width:480px){
  gap: 8px;
  margin-right:15px
 
 
 }


  
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 40px; 
  cursor: pointer;
  @media (max-width:480px){
  gap: 20px;
 
 
 
 }
  
`;

export const FooterLink = styled.a`
  width:48px;
  height:20px;
  color:rgba(255, 255, 255, 1);
  text-decoration: none;
  font-size: 16px;
  font-weight:700;
  line-height:19.99px;
  @media (max-width:480px) {
    width:24px;
    height:10px;
    font-size: 8px;
  
  }

  
`;
export const FooterLink1 = styled.a`
  width:75px;
  height:20px;
  color:rgba(255, 255, 255, 1);
  text-decoration: none;
  font-size: 16px;
  font-weight:700;
  line-height:19.99px;
  @media (max-width:480px) {
    width:37px;
    height:10px;
    font-size: 8px;
     line-height:10px;
  
  }

  
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  cursor: pointer;
  @media (max-width:480px) {
    gap:8px;
    display:block;
  
  }
`;



export const SocialIcon = styled.a`
   
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight:400;
  line-height:19.36px;
  cursor: pointer;
  gap: 8px; 


  img {
    width: 24px;
    height: 24px;
  }
    @media (max-width:480px) {
      gap:4px;
      font-size: 8px;
      line-height:10.13px;
      img {
        width: 12px;
        height: 12px;
     
     }
  
  }
`;
