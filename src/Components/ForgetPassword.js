
import React from 'react';
import './ForgetPassword.css';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  document.body.style.background="rgba(242, 246, 255, 1)";
  return (
    <div className="forgot-password-container">
      <p className='fp-text'>Forgot Password</p>
      <p className='fp-state'>All done! We have sent an OTP to your email <br /> e********@company.com</p>
      <button className="fp-verify-button">Verify Now</button>
      <p><a className='fp-did'>Didn’t receive?</a><a className='fp-resend-link'>Resend OTP</a></p>
      <p className="fp-back-to-login"><a style={{color:"rgba(0, 0, 0, 1)"}}>← Back to  </a><Link to="/login"><a style={{color:"rgba(0, 60, 255, 1)"}}> Login</a></Link></p>
      <p className='fp-footer'>© 2024 ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default ForgetPassword;

