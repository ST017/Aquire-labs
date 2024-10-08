import React from "react";
import LinkedIn from "../Images/LinkedIn.jpeg"
import Xicon from "../Images/Xicon.jpeg"
import Discord from "../Images/Discord.png"
import Telegram from "../Images/Telegram.jpeg"
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="company-name">Raisa Network</h3>
          <p className="footer-description">
            we simplify the process of finding and connecting with the perfect partners for your project
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-section">
            <h4>Social</h4>
            <ul className="footer-links">
              <li><img src={LinkedIn} alt="LinkedIn" /><a href="#">LinkedIn</a></li>
              <li><img src={Xicon} alt="Twitter" /><a href="#">Twitter</a></li>
              <li><img src={Discord} alt="Discord" /><a href="#">Discord</a></li>
              <li><img src={Telegram} alt="Telegram" /><a href="#">Telegram</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#">Branding</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Help</h4>
           
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Web3express Inc.</p>
        <ul className="footer-links-bottom">
              <li><a href="#">Terms of Service</a></li>
              <li> <a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
      </div>
    </footer>
  );
};

export default Footer;
