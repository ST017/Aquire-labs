import React from 'react';
import './ResetPassword.css';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  document.body.style.background="rgba(242, 246, 255, 1)";
  return (
    <div className="rs-container">
      <p className='rs-head'>Forgot Password?</p>
      <p className='rs-text'>Enter your Email and instructions will be sent to you!</p>
      <div className="rs-input-container">
        <p className='rs-em'>Email<a className="rs-required">*</a></p>
        <input className='rs-input' type="email" placeholder="name@company.com" />
        {/* <button className="clear-btn">✖</button> */}
      </div>
      <button className="rs-reset-button"> <a className='rs-button-text'>Reset</a></button>
      <p className='rs-rem'>Remember It? <Link to="/signup"><a className="rs-sign-in-link">Sign in here</a></Link></p>
    </div>
  );
};

export default ResetPassword;
