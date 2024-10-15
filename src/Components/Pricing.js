import React from 'react';
import './Pricing.css';
import MainNavbar from './MainNavbar';

import Footer from '../Components/Dashboard/Footer';

const Pricing = () => {
    document.body.style.background="rgba(234, 239, 255, 1)"
  return (
    <>
    <MainNavbar/>
      <div className='pricing-cntr'>
        
        <div className='price-heading'>
          <div className='price-heading-main'>
          <p>Simple, transparent pricing</p>
          </div>
          <div className='price-heading-submain'>
          <p>No contracts. No surprise fees.</p>
          </div>
        </div>
        <div className='price-second-container123'>
          {/* Free Plan Card */}
          <div className='card123'>
            <h2 className="card-title123">Free</h2>
            <p className="card-subtitle123">Ideal for projects taking their first steps towards building strategic partnerships</p>
            <p className="card-price123">$0</p>
            <ul className="card-features123">
              <li>Limited Send Requests,10 Requests per month for 2 months and 5 per month thereafter</li>
              <li>Receive Unlimited Partnerships</li>
              <li>No Trend Data</li>
              <li>Regular TG support</li>
              <li>No Newsletter</li>
            </ul>
            <button className="card-button123">Get Started</button>
          </div>

          {/* Paid Plan Card */}
          <div className='card123' style={{backgroundColor:"rgba(234, 255, 253, 1)"}}>
            <p className="card-title123">Paid</p>
            <p className="card-subtitle123">Perfect for projects ready to unlock full potential with unlimited partnership opportunities</p>
            <p className="card-price123">Pay As You Grow!</p>
            <p className="card-discount123"><s>$1000</s> $500 for 100 Send Requests</p>
            <ul className="card-features123">
              <li>Receive Unlimited partnership requests</li>
              <li>Trend Data shared via TG</li>
              <li>Priority Support</li>
              <li>Bi-Weekly Newsletter with new projects trend data</li>
            </ul>
            <button className="card-button123">Contact Sales</button>
          </div>
        </div>
        
      </div>
     <div className='footer-ctnr'> <Footer/></div>
    </>
  );
};

export default Pricing;
