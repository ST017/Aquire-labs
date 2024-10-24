import React from "react";
import "./Pricing.css";
import MainNavbar from "./MainNavbar";
import righttick from "../Images/check-circle-1.svg";
import cross from "../Images/check-circle-2.svg";

import Footer from "../Components/Dashboard/Footer";

const Pricing = () => {
  document.body.style.background = "rgba(234, 239, 255, 1)";
  return (
    <div className="pricing">
      <div>
        <MainNavbar />
      </div>
      <div className="pricing-cntr">
        <div className="price-heading">
          <div className="price-heading-main">
            <p>Simple, transparent pricing</p>
          </div>
          <div className="price-heading-submain">
            <p>No contracts. No surprise fees.</p>
          </div>
        </div>
        <div className="pricing-cnt1">
          <div className="pricing-cards-container">
            <div className="card-p standard-card">
              <div className="card-title-desc">
                <div className="card-title-p">Standard</div>
                <div className="card-description-p">
                  Ideal for projects taking their first steps towards building
                  strategic partnerships
                </div>
              </div>
              <div className="card-price">$0</div>
              <ul className="features-list-p">
                <li className="feature-item-p">
                  <img src={righttick} alt="right" /> Limited Send Requests, 10
                  Requests per month for 2 months and 5 per month thereafter
                </li>
                <li className="feature-item-p">
                  <img src={righttick} alt="right" /> Receive Unlimited
                  Partnerships
                </li>
                <li className="feature-item-p ">
                  <img src={cross} alt="cross" /> No Trend Data
                </li>
                <li className="feature-item-p ">
                  <img src={righttick} alt="right" /> Regular TG support
                </li>
                <li className="feature-item-p ">
                  <img src={cross} alt="cross" /> No Newsletter
                </li>
              </ul>
              <button className="btn get-started-btn">Get Started</button>
            </div>
            <div className="outer-pluscard">
            <div className="badge save-badge">SAVE 50%</div>
            <div className="card-p plus-card">
              <span className="badge popular-badge">Most Popular</span>
              
              <div className="card-title-p">Plus ✨</div>
              <div className="card-description-p">
                Perfect for projects ready to unlock full potential with
                unlimited partnership opportunities
              </div>
              <div className="card-price">Pay As You Grow!</div>

              <ul className="features-list-p">
                <li className="feature-item-p">
                  <img src={righttick} alt="right" />{" "}
                  <div className="card-subprice">
                    <strike>$1000</strike> $500 for 100 Send Requests
                  </div>
                </li>
                <li className="feature-item-p">
                  <img src={righttick} alt="right" /> Receive Unlimited
                  partnership requests
                </li>
                <li className="feature-item-p">
                  <img src={righttick} alt="right" /> Trend Data shared via TG
                </li>
                <li className="feature-item-p">
                  <img src={righttick} alt="right" /> Priority Support
                </li>
                <li className="feature-item-p">
                  <img src={righttick} alt="right" /> Bi-Weekly Newsletter with
                  new projects trend data
                </li>
              </ul>
              <button className="btn contact-sales-btn">Contact Sales</button>
            </div>
            </div>
          </div>
        </div>
      </div>


      <div  className="mobile-cnt">

      <div className="pricing-wrapper">
      <div className="pricing-header">
        <h1 className="pricing-title">Ready to get started?</h1>
        <p className="pricing-subtitle">14 days unlimited free trial. No contract or credit card required.</p>
      </div>

      </div>
      </div>
      
      <div className="footer-ctnr">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
