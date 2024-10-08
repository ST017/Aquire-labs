import React from 'react';
import './MainNavbar.css';
import Raisalogo from './../Images/RaisaLogo.png'

import { Link } from 'react-router-dom';
const MainNavbar = () => {
    document.body.style.background="rgba(234, 239, 255, 1)"
  return (
    <nav className="mainnavbar">
      <div className="logo">
        <img src={Raisalogo} alt="raisa"/>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/faq">Help</Link></li>
      </ul>
      <div class="nav-links-right">
  <button class="nav-button login">
    <a class="nav-link login-lnk" href="/login" target="_blank">Login</a>
  </button>
  <button class="nav-button signup">
    <a class="nav-link signup-lnk" href="/signup" target="_blank">Signup</a>
  </button>
</div>

      {/* <div className="nav-buttons">
        <button className="logout-btn">Logout</button>
        <button className="signup-btn">Signup</button>
      </div> */}
    </nav>
  );
};
 
export default MainNavbar;