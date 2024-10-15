import styled from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { Link } from 'react-router-dom';
 
//Wrapper
export const WrapperDiv = styled.div`
display:grid;
 gap:50px;
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
 width:100%;
  height: 11.513vh;
  background-color: rgba(234, 239, 255, 1);
  // padding: 16px 32px;
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
   @media (min-width: 768px) {
   
   
    width:100%;
    
   
   
 
 
   
   
 
 
  }
  @media (width: 912px) {
   
   height:74px;
    width:100%;
   
 
  }
 
   @media (width: 540px) {
   
   height:74px;
    width:100%;
    position: fixed;
 
  }
 
 
 
 
 
`;
 
export const Logo = styled.img`
  
  width: 8.47%;
    height: 71.02%;
  padding:10px;
 
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
  gap: 40px;
 
 
 
 
 
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
  &.signup {
    background-color:rgba(0, 60, 255, 1);
    color:white;
   
    &:hover ,&:hover a{
     
      background-color:transparent;
      color:rgba(0, 60, 255, 1);
    }
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
 
  &.signup-lnk{
    color:white;
    text-color:white;
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
 
 
  text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    color: black;
    transition: color 0.3s;
  cursor:pointer;
 
 
  &:hover a{
   color: #1A1AFF;
 
  }
 
 
 
`;
 
 
 
 
 
 
// Hero section
export const HeroSection = styled.section`
display: flex;
    gap: 10px;
    width: 100%;
    background-color: rgba(234, 239, 255, 1);
    height: 88.266vh;
    text-align: center;
    align-self: center;
    justify-self: center;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;



// width:100%;

//   background-color: rgba(234, 239, 255, 1);
 
//   height:470px;
//   text-align: center;
//   padding: 80px 16px;
// gap:10px;
// width: 100%;
// background-color: rgba(234, 239, 255, 1);
// height:88.266vh; /* 470px */
// text-align: center;
// align-items:center;
// justify-content:center;
//padding: 2.2% 1.1%; /* 80px top/bottom, 16px left/right */
 
  @media (max-width:480px){
   
     width:  100%;
     
     
   
 
  }
 
 
`;
 
export const HeroTitle = styled.h1`

    height: 8.36%;
  font-size: 42px;
  font-weight: 700;
  font-family:Inter;
widht:100%;
  font-size: 42px;
  font-weight: 700;
  margin:0;
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
  margin:0;
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
  margin:0;
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
 height: 39.211vh;
 
  background-color: rgba(234, 239, 255, 1);
  // padding: 40px 16px;
  text-align: center;
  display: flex;
  flex-direction: column; /* Ensures the content stacks vertically */
  justify-content: center; /* Centers the content vertically */
  align-items: center; /* Centers the content horizontally */
  @media (max-width:480px) {
    height:200px;
    text-align: center;
    padding: 20px 8px ;
  }
`;
 
export const VisionTitle = styled.h2`
width:80%;
  font-family:Inter;
  font-size: 42px;
  font-weight: 700;
  line-height:50.83px;
  margin:0;
  color:rgba(0, 0, 0, 1);
  text-align: center;
  display: flex;
  flex-direction: column; /* Ensures the content stacks vertically */
  justify-content: center; /* Centers the content vertically */
  align-items: center; /* Centers the content horizontally */
 
  @media (max-width:480px){
    font-size:21px;
    margin-bottom: 8px;
   
 
  }
`;
 
export const VisionText = styled.p`
 
  height: 54.47%;
    width: 78.056%;
  font-family:Inter;
  font-size: 24px;
  font-weight:500;
  color:rgba(0, 0, 0, 0.69);
  line-height: 32px;
 margin:0;
 
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
  gap:50px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  background-color:white;
 margin:  0;
  .logos-track {
      height: 30.295%;
    display: flex;
    //animation: scroll 5s linear infinite;
  }
 
  .first-row {
  height: 30.295%;
    //animation: scroll 3s linear infinite;
    margin-bottom: 10px;
  }
 
  // .second-row {
  //   //animation: scroll 3s linear infinite;
  // }
  .second-row {
     height: 30.29%;
   
 
  //animation: scroll-right 3s linear infinite;
}
 
@keyframes scroll-right {
  from {
    transform: translateX(-100%); /* Start position */
  }
  to {
    transform: translateX(0%); /* End position, scroll to the right */
  }
}
 
  img {
    width: 103.66px;
    height: 106.33px;
    margin:10px;
  }
 
 
  @keyframes scroll {
    from{
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
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
 
      width: 100%;
    height: 101.805vh;

  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:86px;
  
`;
 
export const StepTitle = styled.h1`
    width: 71.389%;
    height: 8.36%;
  font-size: 42px;
  font-weight: 700;
  font-family:Inter;
 margin:0;
  display: flex;
  flex-direction: column; /* Ensures the content stacks vertically */
  justify-content: center; /* Centers the content vertically */
  align-items: center; /* Centers the content horizontally */
 
  @media(max-width:480px){
    font-size: 21px;
    margin-bottom: 12px;
  }
`;
 
export const StepContainer = styled.div`
    width: 94.167%;
    height: 65.746%;
  display: flex;
  
  flex-wrap: wrap;
  gap: 24px;
  justify-content:center;
 
  @media(max-width:480px){
   gap: 12px;
   margin-top:40px;
   flex-wrap:wrap;
   
  }
`;
 
export const StepCard = styled.div`
  background-color: rgba(0, 60, 255, 1);
  width: 22.181%;
      height: 100%;
  border-radius: 10.54px;
  
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
  width: 100%;
    //  width: 94.7225%;
      height:auto;
    // height: 97.943vh;
    gap:158px;
  display: flex;
  justify-content: space-between;
  align-items: center;
   padding:10px 10px 10px 10px;
  background-color: rgba(234, 239, 255, 1);
  @media (max-width:480px){
 
   flex-direction:column;
   height:660px;
   padding: 20px 8px;
   
  }
 
`;
 
export const FeaturesText = styled.div`
        width: 48.1674%;
    height:auto;
  gap:50px;
 display:flex;
 flex-direction:column;
  @media(max-width:480px){
    height:290px;
    gap:25px;
  }
 
`;
export const FeaturesHeading=styled.h1`
font-family:Inter;
line-height:50.83px;
  font-size: 42px;
  font-weight:700;
  margin:0;
  @media (max-width:480px){
    font-size: 21px;
  }
 
`;
 
export const FeaturesDescription=styled.h2`
 
 font-family:Inter;
  font-size: 24px;
  font-weight:500;
  font-family:Inter;
  line-height:32px;
  margin:0px;
  color:rgba(0, 0, 0, 0.6);
  @media(max-width:480px){
    font-size: 12px;
    height:64px;
    line-height:16px;
    margin-bottom:40px;
 
 
  }
 
`;
 
 
export const FeatureList = styled.ul`
display:flex;
height:100%;
flex-direction:column;
 width:100%;
      // height: 55.538%;
  list-style: none;
  padding: 0;
  margin:0px;
 

   gap:50px;
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
 
export const FeatureItem = styled.div`
    // height: 13.5%;
    height:100%;
    width: 69.102%;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
 
  margin: 0; /* Space between items */
 
  img:first-child {
    margin: 0; /* Increased space between logo and title */
    transition: filter 0.3s ease; /* Smooth transition for color change */
  }
 
  .title {
  height:100%;
    flex: 1;
    margin: 0; /* Space between title and arrow stays reduced */
    font-size: 20px;
    font-weight: 700;
    line-height: 24.2px;
    text-align: left;
    color: rgba(0, 0, 0, 1);
   
  }
  &.expanded .title{
   height:100%;
    color: rgba(0, 60, 255, 1);
  }
 
 
  .accordion-icon {
    transition: transform 0.3s ease, filter 0.3s ease; /* Smooth transition for rotation and color */
    // margin-right: 200px;
  }
 
  &.expanded .accordion-icon {
  height:100%;
    transform: rotate(180deg);
    filter: brightness(0) saturate(100%) invert(27%) sepia(88%) saturate(4698%) hue-rotate(210deg) brightness(98%) contrast(109%);
    /* This filter converts the icon to rgba(0, 60, 255, 1) */
  }
 
  &.expanded img:first-child {
   height:auto;
    filter: brightness(0) saturate(100%) invert(27%) sepia(88%) saturate(4698%) hue-rotate(210deg) brightness(98%) contrast(109%);
    /* This filter applies the same rgba(0, 60, 255, 1) color to the logo */
  }
 
  /* Extra bottom margin when expanded */
  &.expanded {
  height:100%;
    // margin-bottom: 80px; /* More space when expanded to push the next item down */
  }
`;
 
export const FeatureContent = styled.div`
  position: absolute;
  width: 100%;
  height:100%;
  top: 100%; /* Places the content just below the feature item */
  
  // padding: 10px;
  display: none;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
 
  // z-index: 1;
 
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  text-align: left;
  color: rgba(0, 60, 255, 1);
 
  p {
  width: 144%;
  height:100%;
    margin: 0;
    position:absolute;
  }
 
  &.expanded {
   height:100%;
   width: 100%;
   box-sizing:border-box;
    display: block;
    opacity: 1;
   
  }
`;
 
 
 
 
 
export const FeatureImage = styled.img`
 
 
  width: 37.7088%;
    height: 84.371%;
  
  @media (max-width:480px){
 
    height:277px;
  }
`;
 
// Why Use section
export const WhyUseSection = styled.section`
  display: flex;
  width:100%;
  height: 89.6vh;
  flex-direction: column; /* Ensures the content stacks vertically */
  /* Centers the content vertically */
  align-items: center; /* Centers the content horizontally */
  text-align: center;
  gap:50px;
  background-color: #ffffff;
  @media (max-width:480px) {
   text-align: center;
    padding: 20px 8px;
 
  }
`;
 
export const WhyUseTitle = styled.h2`
 width: 71.389%;
    height: 8.36%;
 
  font-size: 42px;
  font-weight: 700;
  font-family:Inter;
 
 margin:0;
  display: flex;
  flex-direction: column; /* Ensures the content stacks vertically */
  justify-content: center; /* Centers the content vertically */
  align-items: center; /* Centers the content horizontally */
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
 
 
 
  //flex-wrap: wrap;
  align-items:center;
  @media (max-width:480px) {
    gap :8px
    flex-wrap:wrap;
  }
 
 
`;
 
export const WhyUseCard = styled.div`
 
  background-color: rgba(255, 255, 255, 1);
  padding: 24px;
  border: 1px transparent;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
 
  display: flex;
  flex-direction: column; /* Ensures the content stacks vertically */
  justify-content: center; /* Centers the content vertically */
  align-items: center; /* Centers the content horizontally */
 
  /* Hover effect */
  &:hover {
    background: #0028AA;
    border-radius: 16px;
    box-shadow: 1px 5px 22.2px 0px rgba(0, 40, 170, 1);
    border: 1px solid rgba(0, 40, 170, 1);
    box-shadow: -1px 3px 23.6px 0px rgba(255, 255, 255, 1);
  }
 
  &:hover div, &:hover p {
    color: white;
  }
 
  @media (max-width: 480px) {
    width: 155.1px;
    height: 144px;
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