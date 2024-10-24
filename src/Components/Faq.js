
import React, { useState } from 'react'
import {FooterSections,
  FooterColumn1,
  FooterColumn2,
  FooterColumn3,
  FooterHead,
  FooterWrapper,
  FooterLink1,Footer,
  FooterText,
  FooterLinks,
  FooterLink,
  SocialLinks,
  SocialIcon,}  from './Home.style'
import RaisaLogo from "../Images/RaisaLogo.png"
import LinkedIn from "../Images/LinkedIn.jpeg"
import Xicon from "../Images/Xicon.jpeg"
import Discord from "../Images/Discord.png"
import Telegram from "../Images/Telegram.jpeg"
import "./Faq.css";
import MainNavbar from './MainNavbar'
import Footer1 from "../Components/Dashboard/Footer"



const Faq = () => {
    document.body.style.background="rgba(234, 239, 255, 1)"
    const faqData = [
        {
          question: "1. What is Raisa.Network & Who can use it?",
          answer: "Raisa Network is a platform that helps businesses connect with the right partners, manage outreach, and grow faster by simplifying the partnership process. Our platform is ideal for business development teams, startups, and any organization looking to build strategic partnerships and expand their network in Web3."
        },
        {
          question: "2. How does Raisa.Network work?",
          answer: "Raisa.Network works by providing tools for partnership management, outreach, and growth."
        },
        {
          question: "3. What features are available on Raisa Network?",
          answer: "Raisa Network offers features such as partner outreach, deal management, and analytics tools."
        },
        {
          question: "4. Is there a free plan available?",
          answer: "Yes, Raisa Network offers a free plan with limited features. You can upgrade at any time."
        },
        {
          question: "5. How do I upgrade my plan?",
          answer: "You can upgrade your plan by going to your account settings and selecting the desired plan."
        },
        {
          question: "6. How does Raisa.Network protect my data?",
          answer: "Raisa Network uses industry-standard encryption and secure data storage to protect your information."
        },
        {
          question: "7. How do I contact support?",
          answer: "You can contact support via email or live chat on our platform."
        },
        {
          question: "8. Do you offer any tutorials or demos?",
          answer: "Yes, Raisa Network provides tutorials and live demos to help you get started."
        }
      ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
    <div className='main-faq-container'>
       <MainNavbar/>

     
      <div className='below-nav-container' >

      <div className='faq-text'>
        <div className='faq-inner-text'>
         <h1 style={{paddingLeft:"70px",marginTop:"-8px"}}>Frequently</h1>
         <h1 style={{paddingLeft:"70px",marginTop:"-15px"}}>Asked</h1>
         <h1 style={{paddingLeft:"70px",marginTop:"-15px",color:"rgba(26, 13, 171, 1)"}}>Questions</h1>
         </div>
        </div>
      <div className='accordian-container'>
      <div className='accordian-outer-container'>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFaq(index)}
        >
          <div className="faq-question">
            {item.question}
            <span className="faq-icon">{activeIndex === index ? 'x' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    <div className='contact-container'>
  <h2>Contact Us</h2>
  <form className="contact-form">
    <div className="form-group11">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Email@company.com" />
    </div>
    <div className="form-group11">
      <label htmlFor="message">Message</label>
      <textarea  id="message" placeholder="Message here" ></textarea>
    </div>
    <button type="submit" className="send-btn11">Send</button>
  </form>
</div>



      </div>
      
     </div>
     </div>
     <Footer1/>
     {/* <div style={{marginTop:"150px"}}>
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
    </div> */}
     </>
  )
}

export default Faq



