
import React, { useState } from 'react'
import { Logo, Navbar, NavButton, NavLink1, NavLinksCenter, NavLinksRight,NavLink } from './Home.style'
import RaisaLogo from "../Images/RaisaLogo.png"
import "./Faq.css";



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
    <div className='main-faq-container'>
       <div className='nav-faq'>
        
        </div>

     
      <div className='below-nav-container'>

      <div className='faq-text'>
        
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
  )
}

export default Faq



